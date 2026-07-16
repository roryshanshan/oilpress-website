import fs from 'node:fs'
import path from 'node:path'

const distRoot = path.resolve('docs/.vitepress/dist')
const reportPath = path.resolve('built-site-audit.json')
const origin = 'https://hydraulicoilpressing.opchn.com'

if (!fs.existsSync(distRoot)) {
  throw new Error(`Build output not found: ${distRoot}`)
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name)
    return entry.isDirectory() ? walk(absolute) : [absolute]
  })
}

function webPath(file) {
  return `/${path.relative(distRoot, file).split(path.sep).join('/')}`
}

function canonicalRoute(htmlFile) {
  const relative = path.relative(distRoot, htmlFile).split(path.sep).join('/')
  if (relative === 'index.html') return '/'
  if (relative.endsWith('/index.html')) return `/${relative.slice(0, -'/index.html'.length)}`
  return `/${relative.replace(/\.html$/, '')}`
}

function extractHrefs(html) {
  const hrefs = []
  const pattern = /<a\b[^>]*\bhref=(?:"([^"]*)"|'([^']*)')[^>]*>/gi
  let match
  while ((match = pattern.exec(html))) hrefs.push(match[1] ?? match[2] ?? '')
  return hrefs
}

function extractAttributes(tag) {
  const attributes = {}
  const pattern = /([:\w-]+)=(?:"([^"]*)"|'([^']*)')/g
  let match
  while ((match = pattern.exec(tag))) attributes[match[1].toLowerCase()] = match[2] ?? match[3] ?? ''
  return attributes
}

function extractLinkTags(html) {
  return [...html.matchAll(/<link\b[^>]*>/gi)].map((match) => extractAttributes(match[0]))
}

function extractMetaTags(html) {
  return [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => extractAttributes(match[0]))
}

function extractJsonLd(html) {
  return [...html.matchAll(/<script\b[^>]*type=(?:"application\/ld\+json"|'application\/ld\+json')[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => match[1].trim())
}

function extractIds(html) {
  return new Set(
    [...html.matchAll(/\bid=(?:"([^"]+)"|'([^']+)')/gi)]
      .map((match) => decodeHtmlText(match[1] ?? match[2] ?? ''))
      .filter(Boolean)
  )
}

function flattenSchemaObjects(value, objects = []) {
  if (Array.isArray(value)) {
    for (const item of value) flattenSchemaObjects(item, objects)
    return objects
  }
  if (!value || typeof value !== 'object') return objects
  objects.push(value)
  for (const child of Object.values(value)) flattenSchemaObjects(child, objects)
  return objects
}

function decodeHtmlText(value = '') {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number.parseInt(code, 10)))
}

function canonicalUrlForRoute(route) {
  if (route === '/') return `${origin}/en`
  return `${origin}${route.replace(/\/$/, '')}`
}

function localeForRoute(route) {
  return route.match(/^\/(en|zh|fr|ru|vi|bn)(?:\/|$)/)?.[1] || ''
}

const hreflangByLocale = {
  en: 'en-US',
  zh: 'zh-CN',
  fr: 'fr-FR',
  ru: 'ru-RU',
  vi: 'vi-VN',
  bn: 'bn-BD'
}

function normalizePathname(value) {
  try {
    return decodeURI(value).replace(/\/{2,}/g, '/')
  } catch {
    return value.replace(/\/{2,}/g, '/')
  }
}

const allFiles = walk(distRoot).filter((file) => !path.basename(file).startsWith('._'))
const exactFiles = new Set(allFiles.map(webPath))
const canonicalFiles = allFiles.filter((file) => file.endsWith('.html') && path.basename(file) !== '404.html')
const pages = canonicalFiles.map((file) => {
  const html = fs.readFileSync(file, 'utf8')
  return {
    file,
    route: canonicalRoute(file),
    html,
    noindex: /<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(html)
  }
})
const routeAliases = new Map()
const duplicateBuiltRoutes = []
const routeOwners = new Map()
const inlineHashMapPages = pages
  .filter((page) => page.html.includes('window.__VP_HASH_MAP__=JSON.parse'))
  .map((page) => page.route)

for (const page of pages) {
  const route = page.route
  if (routeOwners.has(route)) duplicateBuiltRoutes.push({ route, files: [routeOwners.get(route), webPath(page.file)] })
  else routeOwners.set(route, webPath(page.file))
  const aliases = new Set([
    route,
    route === '/' ? '/' : `${route}/`,
    webPath(page.file)
  ])
  for (const alias of aliases) routeAliases.set(alias, route)
}

const noindexRoutes = new Set(
  pages.filter((page) => page.noindex).map((page) => page.route)
)
const idsByRoute = new Map(pages.map((page) => [page.route, extractIds(page.html)]))

function isNoindexBuiltRoute(pathname) {
  const route = routeAliases.get(normalizePathname(pathname))
  return route ? noindexRoutes.has(route) : false
}

const localeCodes = Object.keys(hreflangByLocale)
const indexableLocaleSuffixes = new Set(
  pages
    .filter((page) => !page.noindex)
    .map((page) => page.route.replace(/\/$/, '').match(/^\/(en|zh|fr|ru|vi|bn)(.*)$/)?.[2])
    .filter((suffix) => suffix !== undefined)
)
const missingLocaleVariants = []

for (const suffix of indexableLocaleSuffixes) {
  for (const locale of localeCodes) {
    const target = `/${locale}${suffix}`
    const route = routeAliases.get(normalizePathname(target))
    if (!route || noindexRoutes.has(route)) missingLocaleVariants.push({ suffix: suffix || '/', locale, target })
  }
}

const inbound = new Map(pages.map((page) => [page.route, new Set()]))
const brokenLinks = []
const malformedLinks = []
const invalidFragmentTargets = []

function decodedFragment(hash = '') {
  if (!hash) return ''
  try {
    return decodeURIComponent(hash.replace(/^#/, ''))
  } catch {
    return hash.replace(/^#/, '')
  }
}

for (const page of pages) {
  for (const href of extractHrefs(page.html)) {
    if (!href || /^(?:mailto:|tel:|javascript:|data:)/i.test(href)) continue

    if (href.startsWith('#')) {
      const fragment = decodedFragment(href)
      if (fragment && !idsByRoute.get(page.route)?.has(fragment)) {
        invalidFragmentTargets.push({ source: page.route, href, target: page.route, fragment })
      }
      continue
    }

    let target
    try {
      target = new URL(href, `${origin}${page.route}`)
    } catch {
      malformedLinks.push({ source: page.route, href })
      continue
    }

    if (target.origin !== origin) continue
    const pathname = normalizePathname(target.pathname)
    const targetRoute = routeAliases.get(pathname)

    if (targetRoute) {
      if (targetRoute !== page.route) inbound.get(targetRoute)?.add(page.route)
      const fragment = decodedFragment(target.hash)
      if (fragment && !idsByRoute.get(targetRoute)?.has(fragment)) {
        invalidFragmentTargets.push({ source: page.route, href, target: targetRoute, fragment })
      }
      continue
    }

    const fileCandidates = new Set([
      pathname,
      pathname.endsWith('/') ? `${pathname}index.html` : `${pathname}/index.html`,
      pathname.endsWith('.html') ? pathname : `${pathname}.html`
    ])
    if (![...fileCandidates].some((candidate) => exactFiles.has(candidate))) {
      brokenLinks.push({ source: page.route, href, pathname })
    }
  }
}

const localeHomes = new Set(['/', '/en', '/zh', '/fr', '/ru', '/vi', '/bn'])
const orphanPages = pages
  .filter((page) => !page.noindex && !localeHomes.has(page.route) && (inbound.get(page.route)?.size ?? 0) === 0)
  .map((page) => page.route)

const missingBreadcrumbs = pages
  .filter((page) => !page.noindex && !localeHomes.has(page.route) && !page.html.includes('class="page-trail"'))
  .map((page) => page.route)

const missingPathways = pages
  .filter((page) => !page.noindex && !localeHomes.has(page.route) && !page.html.includes('class="context-pathway"'))
  .map((page) => page.route)

const missingDescriptions = []
const missingTitles = []
const missingKeywords = []
const overlongTitles = []
const overlongDescriptions = []
const truncatedMetadata = []
const missingCanonicals = []
const invalidCanonicals = []
const missingXDefault = []
const missingSelfHreflang = []
const invalidHreflangTargets = []
const jsonLdParseErrors = []
const staleSchemaDomains = []
const invalidProductSchemas = []
const invalidBreadcrumbTargets = []
const invalidBreadcrumbStructures = []
const invalidItemListTargets = []
const invalidProductModelSchemas = []
const noindexHreflangEntries = []
const noindexJsonLdEntries = []
const invalidH1Counts = []

for (const page of pages) {
  const linkTags = extractLinkTags(page.html)
  const canonical = linkTags.find((link) => link.rel?.toLowerCase() === 'canonical')?.href
  const expectedCanonical = canonicalUrlForRoute(page.route)
  if (!canonical) missingCanonicals.push(page.route)
  else if (canonical !== expectedCanonical) invalidCanonicals.push({ route: page.route, canonical, expected: expectedCanonical })

  const alternates = linkTags.filter((link) => link.rel?.toLowerCase() === 'alternate' && link.hreflang && link.href)
  const rawSchemas = extractJsonLd(page.html)
  if (page.noindex) {
    if (alternates.length) noindexHreflangEntries.push({ route: page.route, count: alternates.length })
    for (const [index, rawSchema] of rawSchemas.entries()) {
      let schema
      try {
        schema = JSON.parse(rawSchema)
      } catch (error) {
        jsonLdParseErrors.push({ route: page.route, index, error: error.message })
        continue
      }
      if (rawSchema.includes('https://hydraulic-oil-press.com')) staleSchemaDomains.push({ route: page.route, index })
      const schemas = Array.isArray(schema) ? schema : schema['@graph'] || [schema]
      const disallowedTypes = schemas
        .flatMap((item) => Array.isArray(item?.['@type']) ? item['@type'] : [item?.['@type']])
        .filter((type) => type && type !== 'Organization' && type !== 'WebSite')
      if (disallowedTypes.length) noindexJsonLdEntries.push({ route: page.route, index, types: disallowedTypes })
    }
    continue
  }

  const h1Count = (page.html.match(/<h1\b/giu) || []).length
  if (h1Count !== 1) invalidH1Counts.push({ route: page.route, h1Count })

  const title = decodeHtmlText(page.html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() || '')
  if (!title) missingTitles.push(page.route)
  else if ([...title].length > 65) overlongTitles.push({ route: page.route, length: [...title].length, title })
  if (/(?:\.\.\.|…)\s*$/.test(title)) truncatedMetadata.push({ route: page.route, field: 'title', value: title })

  const metaTags = extractMetaTags(page.html)
  const description = decodeHtmlText(metaTags.find((meta) => meta.name?.toLowerCase() === 'description')?.content?.trim() || '')
  if (!description) missingDescriptions.push(page.route)
  else if ([...description].length > 160) overlongDescriptions.push({ route: page.route, length: [...description].length, description })
  if (/(?:\.\.\.|…)\s*$/.test(description)) truncatedMetadata.push({ route: page.route, field: 'description', value: description })

  const keywords = decodeHtmlText(metaTags.find((meta) => meta.name?.toLowerCase() === 'keywords')?.content?.trim() || '')
  if (!keywords) missingKeywords.push(page.route)

  if (!alternates.some((link) => link.hreflang.toLowerCase() === 'x-default')) missingXDefault.push(page.route)

  const locale = localeForRoute(page.route)
  const selfHreflang = hreflangByLocale[locale]
  if (selfHreflang && !alternates.some((link) => link.hreflang.toLowerCase() === selfHreflang.toLowerCase() && link.href === expectedCanonical)) {
    missingSelfHreflang.push(page.route)
  }

  for (const alternate of alternates) {
    let target
    try {
      target = new URL(alternate.href, origin)
    } catch {
      invalidHreflangTargets.push({ route: page.route, hreflang: alternate.hreflang, href: alternate.href })
      continue
    }
    if (target.origin !== origin || !routeAliases.has(normalizePathname(target.pathname))) {
      invalidHreflangTargets.push({ route: page.route, hreflang: alternate.hreflang, href: alternate.href })
    }
  }

  for (const [index, rawSchema] of rawSchemas.entries()) {
    let schema
    try {
      schema = JSON.parse(rawSchema)
    } catch (error) {
      jsonLdParseErrors.push({ route: page.route, index, error: error.message })
      continue
    }

    if (rawSchema.includes('https://hydraulic-oil-press.com')) {
      staleSchemaDomains.push({ route: page.route, index })
    }

    const schemaRoots = Array.isArray(schema) ? schema : schema['@graph'] || [schema]
    const schemas = schemaRoots.flatMap((item) => flattenSchemaObjects(item))
    for (const item of schemas) {
      if (item?.['@type'] === 'BreadcrumbList') {
        if (!Array.isArray(item.itemListElement) || item.itemListElement.length < 2) {
          invalidBreadcrumbStructures.push({ route: page.route, items: item.itemListElement?.length || 0 })
        }
        for (const crumb of item.itemListElement || []) {
          if (!crumb?.item) continue
          let target
          try {
            target = new URL(crumb.item, origin)
          } catch {
            invalidBreadcrumbTargets.push({ route: page.route, item: crumb.item })
            continue
          }
          if (target.origin !== origin || !routeAliases.has(normalizePathname(target.pathname))) {
            invalidBreadcrumbTargets.push({ route: page.route, item: crumb.item })
          }
        }
      }
      const itemTypes = Array.isArray(item?.['@type']) ? item['@type'] : [item?.['@type']]
      if (itemTypes.includes('ItemList')) {
        for (const listItem of item.itemListElement || []) {
          const itemUrl = listItem?.url || listItem?.item
          if (!itemUrl) {
            invalidItemListTargets.push({ route: page.route, reason: 'ItemList entry missing url' })
            continue
          }
          let target
          try {
            target = new URL(itemUrl, origin)
          } catch {
            invalidItemListTargets.push({ route: page.route, item: itemUrl })
            continue
          }
          const targetRoute = routeAliases.get(normalizePathname(target.pathname))
          if (target.origin !== origin || !targetRoute || noindexRoutes.has(targetRoute)) {
            invalidItemListTargets.push({ route: page.route, item: itemUrl })
          }
        }
      }
      const unsupportedProductType = itemTypes.find((type) => type === 'ProductModel' || type === 'ProductGroup')
      if (unsupportedProductType) {
        invalidProductModelSchemas.push({ route: page.route, reason: `${unsupportedProductType} is not allowed without visible, verifiable offer or review data` })
      }
      if (!itemTypes.includes('Product')) continue
      if (!item.offers && !item.review && !item.aggregateRating) {
        invalidProductSchemas.push({ route: page.route, reason: 'missing offers, review, or aggregateRating' })
        continue
      }
      if (item.offers) {
        const offers = Array.isArray(item.offers) ? item.offers : [item.offers]
        for (const offer of offers) {
          const missing = ['url', 'priceCurrency', 'availability', 'seller'].filter((field) => !offer?.[field])
          const hasPrice = offer?.price !== undefined && offer?.price !== ''
          const hasSpecifiedPrice = offer?.priceSpecification?.price !== undefined && offer?.priceSpecification?.price !== ''
          if (!hasPrice && !hasSpecifiedPrice) missing.push('price')
          if (missing.length) invalidProductSchemas.push({ route: page.route, reason: `offer missing ${missing.join(', ')}` })
        }
      }
    }
  }
}

const duplicateTitles = []
const titleOwners = new Map()
for (const page of pages) {
  if (page.noindex) continue
  const title = decodeHtmlText(page.html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() || '')
  if (!title) continue
  if (titleOwners.has(title)) duplicateTitles.push({ title, routes: [titleOwners.get(title), page.route] })
  else titleOwners.set(title, page.route)
}

const duplicateDescriptions = []
const descriptionOwners = new Map()
for (const page of pages) {
  if (page.noindex) continue
  const metaTags = extractMetaTags(page.html)
  const description = decodeHtmlText(metaTags.find((meta) => meta.name?.toLowerCase() === 'description')?.content?.trim() || '')
  if (!description) continue
  if (descriptionOwners.has(description)) duplicateDescriptions.push({ description, routes: [descriptionOwners.get(description), page.route] })
  else descriptionOwners.set(description, page.route)
}

const sitemapIssues = []
const sitemapFile = path.join(distRoot, 'sitemap.xml')
const expectedSitemapLocations = new Set(
  pages.filter((page) => !page.noindex).map((page) => canonicalUrlForRoute(page.route))
)
if (!fs.existsSync(sitemapFile)) {
  sitemapIssues.push({ reason: 'missing sitemap.xml' })
} else {
  const sitemap = fs.readFileSync(sitemapFile, 'utf8')
  const urlBlocks = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/gi)].map((match) => match[1])
  const seenLocations = new Set()

  for (const block of urlBlocks) {
    const location = block.match(/<loc>([^<]+)<\/loc>/i)?.[1]?.replace(/&amp;/g, '&')
    if (!location) {
      sitemapIssues.push({ reason: 'url entry missing loc' })
      continue
    }
    const locationUrl = new URL(location, origin)
    const normalizedLocation = `${locationUrl.origin}${locationUrl.pathname === '/' ? '/' : locationUrl.pathname.replace(/\/$/, '')}`
    if (seenLocations.has(normalizedLocation)) sitemapIssues.push({ reason: 'duplicate loc', location: normalizedLocation })
    seenLocations.add(normalizedLocation)

    if (locationUrl.origin !== origin) sitemapIssues.push({ reason: 'foreign loc origin', location })
    if (locationUrl.pathname !== '/' && locationUrl.pathname.endsWith('/')) sitemapIssues.push({ reason: 'loc has trailing slash', location })
    if (!routeAliases.has(normalizePathname(locationUrl.pathname))) sitemapIssues.push({ reason: 'loc target missing', location })

    const alternates = [...block.matchAll(/<xhtml:link\b([^>]*)\/?\s*>/gi)].map((match) => extractAttributes(match[1]))
    const seenLanguages = new Set()
    for (const alternate of alternates) {
      const hreflang = alternate.hreflang || ''
      const href = (alternate.href || '').replace(/&amp;/g, '&')
      if (!hreflang || !href) {
        sitemapIssues.push({ reason: 'alternate missing hreflang or href', location })
        continue
      }
      if (seenLanguages.has(hreflang)) sitemapIssues.push({ reason: 'duplicate hreflang', location, hreflang })
      seenLanguages.add(hreflang)

      const alternateUrl = new URL(href, origin)
      if (alternateUrl.origin !== origin) sitemapIssues.push({ reason: 'foreign alternate origin', location, href })
      if (alternateUrl.pathname === '/' || isNoindexBuiltRoute(alternateUrl.pathname)) {
        sitemapIssues.push({ reason: 'alternate points to noindex route', location, href })
      }
      if (alternateUrl.pathname !== '/' && alternateUrl.pathname.endsWith('/')) {
        sitemapIssues.push({ reason: 'alternate has trailing slash', location, href })
      }
      if (!routeAliases.has(normalizePathname(alternateUrl.pathname))) {
        sitemapIssues.push({ reason: 'alternate target missing', location, href })
      }
    }
  }

  for (const expected of expectedSitemapLocations) {
    if (!seenLocations.has(expected)) sitemapIssues.push({ reason: 'indexable canonical missing from sitemap', location: expected })
  }
  for (const location of seenLocations) {
    if (!expectedSitemapLocations.has(location)) sitemapIssues.push({ reason: 'sitemap loc is not an indexable canonical', location })
  }
}

const redirectIssues = []
const vercelConfigFile = path.resolve('vercel.json')
const requiredRedirects = [
  {
    source: '/:lang(en|zh|fr|ru|vi|bn)/products/sesame-cleaning-machine',
    destination: '/:lang/products/sesame-screening-machine'
  },
  {
    source: '/:lang(en|zh|fr|ru|vi|bn)/solutions/:category(bottle-washing|brewing|cap-shrinking|corking|dairy-processing|drying|filling|filling-packages|filtering|fruit-veg-processing|labeling|laser-coding|light-inspection|packing-palletizing|sealing)/:slug',
    destination: '/:lang/products/filling/:slug'
  }
]

if (!fs.existsSync(vercelConfigFile)) {
  redirectIssues.push({ reason: 'missing vercel.json' })
} else {
  let redirects = []
  try {
    redirects = JSON.parse(fs.readFileSync(vercelConfigFile, 'utf8')).redirects || []
  } catch (error) {
    redirectIssues.push({ reason: 'invalid vercel.json', error: error.message })
  }

  for (const required of requiredRedirects) {
    if (!redirects.some((redirect) => redirect.source === required.source && redirect.destination === required.destination && redirect.permanent === true)) {
      redirectIssues.push({ reason: 'required permanent redirect missing', ...required })
    }
  }

  for (const redirect of redirects) {
    if (!redirect?.source || !redirect?.destination) {
      redirectIssues.push({ reason: 'redirect missing source or destination', redirect })
      continue
    }
    const isDynamicSource = redirect.source.includes(':')
    const isDynamicDestination = redirect.destination.includes(':')
    if (!isDynamicSource && redirect.source !== '/') {
      const sourcePath = normalizePathname(new URL(redirect.source, origin).pathname)
      if (routeAliases.has(sourcePath)) redirectIssues.push({ reason: 'static redirect source is still built', source: redirect.source })
    }
    if (!isDynamicDestination) {
      const destinationPath = normalizePathname(new URL(redirect.destination, origin).pathname)
      if (!routeAliases.has(destinationPath)) {
        redirectIssues.push({ reason: 'static redirect destination missing', destination: redirect.destination })
      }
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  pages: pages.length,
  files: allFiles.length,
  duplicateBuiltRoutes,
  inlineHashMapPages,
  brokenLinks,
  malformedLinks,
  invalidFragmentTargets,
  orphanPages,
  missingBreadcrumbs,
  missingPathways,
  duplicateTitles,
  duplicateDescriptions,
  missingTitles,
  missingDescriptions,
  missingKeywords,
  overlongTitles,
  overlongDescriptions,
  truncatedMetadata,
  missingCanonicals,
  invalidCanonicals,
  missingXDefault,
  missingSelfHreflang,
  invalidHreflangTargets,
  jsonLdParseErrors,
  staleSchemaDomains,
  invalidProductSchemas,
  invalidBreadcrumbTargets,
  invalidBreadcrumbStructures,
  invalidItemListTargets,
  invalidProductModelSchemas,
  noindexHreflangEntries,
  noindexJsonLdEntries,
  invalidH1Counts,
  missingLocaleVariants,
  sitemapIssues,
  redirectIssues
}

fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`)

console.log(`Built pages: ${pages.length}`)
console.log(`Duplicate built routes: ${duplicateBuiltRoutes.length}`)
console.log(`Pages with an inline VitePress hash map: ${inlineHashMapPages.length}`)
console.log(`Broken internal links: ${brokenLinks.length}`)
console.log(`Malformed links: ${malformedLinks.length}`)
console.log(`Invalid internal fragment targets: ${invalidFragmentTargets.length}`)
console.log(`Orphan pages: ${orphanPages.length}`)
console.log(`Pages missing breadcrumbs: ${missingBreadcrumbs.length}`)
console.log(`Pages missing contextual pathways: ${missingPathways.length}`)
console.log(`Duplicate rendered titles: ${duplicateTitles.length}`)
console.log(`Duplicate rendered descriptions: ${duplicateDescriptions.length}`)
console.log(`Pages missing titles: ${missingTitles.length}`)
console.log(`Pages missing descriptions: ${missingDescriptions.length}`)
console.log(`Pages missing keywords: ${missingKeywords.length}`)
console.log(`Rendered titles over 65 characters: ${overlongTitles.length}`)
console.log(`Rendered descriptions over 160 characters: ${overlongDescriptions.length}`)
console.log(`Truncated rendered metadata: ${truncatedMetadata.length}`)
console.log(`Pages missing canonicals: ${missingCanonicals.length}`)
console.log(`Invalid canonicals: ${invalidCanonicals.length}`)
console.log(`Pages missing x-default hreflang: ${missingXDefault.length}`)
console.log(`Pages missing self hreflang: ${missingSelfHreflang.length}`)
console.log(`Invalid hreflang targets: ${invalidHreflangTargets.length}`)
console.log(`JSON-LD parse errors: ${jsonLdParseErrors.length}`)
console.log(`JSON-LD entries using the stale domain: ${staleSchemaDomains.length}`)
console.log(`Invalid Product schemas: ${invalidProductSchemas.length}`)
console.log(`Invalid BreadcrumbList targets: ${invalidBreadcrumbTargets.length}`)
console.log(`Invalid BreadcrumbList structures: ${invalidBreadcrumbStructures.length}`)
console.log(`Invalid ItemList targets: ${invalidItemListTargets.length}`)
console.log(`Disallowed ProductModel/ProductGroup schemas: ${invalidProductModelSchemas.length}`)
console.log(`Noindex pages with hreflang: ${noindexHreflangEntries.length}`)
console.log(`Noindex pages with JSON-LD: ${noindexJsonLdEntries.length}`)
console.log(`Indexable pages without exactly one H1: ${invalidH1Counts.length}`)
console.log(`Missing indexable locale variants: ${missingLocaleVariants.length}`)
console.log(`Sitemap issues: ${sitemapIssues.length}`)
console.log(`Redirect issues: ${redirectIssues.length}`)
console.log(`Report: ${reportPath}`)

if (
  duplicateBuiltRoutes.length || inlineHashMapPages.length || brokenLinks.length || malformedLinks.length || invalidFragmentTargets.length || orphanPages.length || missingBreadcrumbs.length || missingPathways.length ||
  duplicateTitles.length || duplicateDescriptions.length || missingTitles.length || missingDescriptions.length || missingKeywords.length || overlongTitles.length ||
  overlongDescriptions.length || truncatedMetadata.length || missingCanonicals.length || invalidCanonicals.length ||
  missingXDefault.length || missingSelfHreflang.length || invalidHreflangTargets.length || jsonLdParseErrors.length ||
  staleSchemaDomains.length || invalidProductSchemas.length || invalidBreadcrumbTargets.length ||
  invalidBreadcrumbStructures.length || invalidItemListTargets.length || invalidProductModelSchemas.length || noindexHreflangEntries.length ||
  noindexJsonLdEntries.length || invalidH1Counts.length || missingLocaleVariants.length || sitemapIssues.length || redirectIssues.length
) {
  process.exitCode = 1
}
