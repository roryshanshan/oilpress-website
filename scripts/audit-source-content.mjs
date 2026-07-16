import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const docsRoot = path.join(root, 'docs')
const reportPath = path.join(root, 'source-content-audit.json')
const ignoredDirectories = new Set(['.git', 'node_modules', 'dist', 'cache'])
const locales = ['en', 'zh', 'fr', 'ru', 'vi', 'bn']
const modelFiles = ['300', '325', '355', '400', '426', '480', '500']
const duplicateSolutionCategories = new Set([
  'bottle-washing', 'brewing', 'cap-shrinking', 'corking', 'dairy-processing',
  'drying', 'filling', 'filling-packages', 'filtering', 'fruit-veg-processing',
  'labeling', 'laser-coding', 'light-inspection', 'packing-palletizing', 'sealing'
])

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      if (ignoredDirectories.has(entry.name)) return []
      return walk(absolute)
    }
    return [absolute]
  })
}

function relative(file) {
  return path.relative(root, file).split(path.sep).join('/')
}

function stripFrontmatter(source) {
  if (!source.startsWith('---')) return source
  const end = source.indexOf('\n---', 3)
  return end === -1 ? source : source.slice(end + 4)
}

function normalizedBody(source) {
  return stripFrontmatter(source)
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^\s*\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?\s*$/gm, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function localAssetTarget(file, rawReference) {
  if (!rawReference || /^(?:https?:|\/\/|data:|mailto:|tel:|#)/iu.test(rawReference)) return null
  const cleanReference = rawReference.trim().split(/[?#]/u)[0]
  if (!cleanReference || cleanReference.includes('{{')) return null

  let decodedReference = cleanReference
  try {
    decodedReference = decodeURIComponent(cleanReference)
  } catch {
    // Keep the original path so a malformed escape is reported as missing.
  }

  return decodedReference.startsWith('/')
    ? path.join(docsRoot, 'public', decodedReference.slice(1))
    : path.resolve(path.dirname(file), decodedReference)
}

const sourceFiles = walk(root)
const markdownFiles = walk(docsRoot).filter((file) => file.endsWith('.md') && !path.basename(file).startsWith('._'))
const appleDoubleFiles = sourceFiles.filter((file) => path.basename(file).startsWith('._')).map(relative)
const placeholderIssues = []
const invalidMediaPlaceholders = []
const fixedYieldTables = []
const positioningIssues = []
const mispositionedModelAssets = []
const duplicateDryerBodies = []
const unconditionalServicePromises = []
const missingLocalAssets = []
const translationTemplateResidues = []
const thinDetailPages = []
const duplicateDetailBodies = []
const detailBodyOwners = new Map()
const headingLevelIssues = []
const unsafeIndexRelativeLinks = []
const malformedMarkdownLinks = []
const unsupportedMarketingClaims = []
const obsoleteModelReferences = []
const legacyDuplicatePages = [
  'docs/en/solutions/peanut1.md',
  'docs/fr/products/peanut.md',
  'docs/ru/products/peanut.md'
].filter((file) => fs.existsSync(path.join(root, file)))
const duplicateSolutionDetailPages = markdownFiles
  .map(relative)
  .filter((file) => {
    const parts = file.split('/')
    return parts.length === 5
      && parts[0] === 'docs'
      && locales.includes(parts[1])
      && parts[2] === 'solutions'
      && duplicateSolutionCategories.has(parts[3])
      && parts[4] !== 'index.md'
  })

const placeholderPattern = /(?:to be supplemented|待补充|পরিপূরক)/giu
const unconditionalServicePatterns = [
  {
    label: 'English unconditional free service',
    pattern: /\bfree (?:technical )?(?:consultation|sample test(?:ing)?|site survey|site visit)\b/giu
  },
  {
    label: 'Chinese unconditional free service',
    pattern: /免费(?:技术|工艺)?(?:咨询|样品测试|样料测试|现场考察|上门考察)/gu
  },
  {
    label: 'French unconditional free service',
    pattern: /\b(?:consultation technique|essai d['’]échantillon|visite (?:du )?site)\s+gratuite?\b/giu
  },
  {
    label: 'Russian unconditional free service',
    pattern: /\bбесплатн\w*\s+(?:техническ\w*\s+)?(?:консультац\w*|испытан\w*\s+образц\w*|выезд\w*|обследован\w*)/giu
  },
  {
    label: 'Vietnamese unconditional free service',
    pattern: /(?:(?:tư vấn kỹ thuật|thử nghiệm mẫu|khảo sát(?: tại chỗ| thực địa)?)[^.\n]{0,24}miễn phí|miễn phí[^.\n]{0,24}(?:tư vấn kỹ thuật|thử nghiệm mẫu|khảo sát))/giu
  },
  {
    label: 'Bengali unconditional free service',
    pattern: /বিনামূল্যে[^।\n]{0,40}(?:কারিগরি পরামর্শ|প্রযুক্তিগত পরামর্শ|নমুনা পরীক্ষা|সাইট ভিজিট)/gu
  }
]
const translationTemplatePatterns = [
  {
    label: 'English translation-template residue',
    pattern: /\b(?:supporting bus|page jumps?|summary of public information|public product information|public features)\b/giu
  },
  {
    label: 'French translation-template residue',
    pattern: /\b(?:bus de support|sauts? de page|résumé des informations publiques|informations publiques|fonctionnalités publiques|sèche-cheveux)\b/giu
  },
  {
    label: 'Russian translation-template residue',
    pattern: /(?:шина поддержки|переход\w*[^.\n]{0,20}страниц|сводк\w*[^.\n]{0,20}публичн\w*[^.\n]{0,20}информац|публичные функции)/giu
  },
  {
    label: 'Vietnamese translation-template residue',
    pattern: /(?:xe buýt hỗ trợ|nhảy trang|tóm tắt thông tin công khai|tính năng công cộng)/giu
  },
  {
    label: 'Bengali translation-template residue',
    pattern: /(?:পৃষ্ঠা লাফ|সমর্থনকারী বাস|পাবলিক তথ্যের সারাংশ|পাবলিক বৈশিষ্ট্য)/gu
  }
]
const unsupportedMarketingPatterns = [
  { label: 'English unsupported marketing claim', pattern: /\b(?:high efficiency|low energy consumption|long service life|optimal solution)\b/giu },
  { label: 'Chinese unsupported marketing claim', pattern: /(?:高效率|低能耗|使用寿命长|最优方案)/gu },
  { label: 'French unsupported marketing claim', pattern: /\b(?:haute efficacité|faible consommation d['’]énergie|longue durée de vie|solution optimale)\b/giu },
  { label: 'Russian unsupported marketing claim', pattern: /(?:высокая эффективность|низкое энергопотребление|долгий срок службы|оптимальное решение)/giu },
  { label: 'Vietnamese unsupported marketing claim', pattern: /(?:hiệu suất cao|tiêu thụ năng lượng thấp|tuổi thọ dài|giải pháp tối ưu)/giu },
  { label: 'Bengali unsupported marketing claim', pattern: /(?:উচ্চ দক্ষতা|কম শক্তি খরচ|দীর্ঘ সেবা জীবন|সর্বোত্তম সমাধান)/gu }
]
const localAssetPatterns = [
  /!\[[^\]]*\]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/gu,
  /\b(?:src|poster)=["']([^"']+)["']/gu,
  /^image:\s*["']?([^"'\s]+)["']?\s*$/gmu,
  /\bhref=["']([^"']+\.(?:pdf|mp4|webm|mov|avi|zip)(?:[?#][^"']*)?)["']/giu
]

for (const file of markdownFiles) {
  const source = fs.readFileSync(file, 'utf8')
  const body = stripFrontmatter(source)
  const relativeFile = relative(file)
  const pathParts = relativeFile.split('/')
  const isDetailPage = pathParts[0] === 'docs'
    && locales.includes(pathParts[1])
    && (pathParts[2] === 'products' || pathParts[2] === 'solutions')
    && pathParts.at(-1) !== 'index.md'

  if (isDetailPage) {
    const normalized = normalizedBody(source)
    const characterCount = [...normalized].length
    if (characterCount < 250) thinDetailPages.push({ file: relativeFile, characterCount })
    if (characterCount >= 250) {
      const duplicateKey = normalized.toLowerCase()
      if (detailBodyOwners.has(duplicateKey)) {
        duplicateDetailBodies.push({ files: [detailBodyOwners.get(duplicateKey), relativeFile] })
      } else {
        detailBodyOwners.set(duplicateKey, relativeFile)
      }
    }
  }

  if (pathParts[0] === 'docs' && locales.includes(pathParts[1])) {
    const headingSource = body.replace(/```[\s\S]*?```/g, ' ')
    const h1Count = (headingSource.match(/^#\s+.+$/gm) || []).length
      + (headingSource.match(/<h1\b/giu) || []).length
    if (h1Count !== 1) headingLevelIssues.push({ file: relativeFile, h1Count })
  }

  if (pathParts.at(-1) === 'index.md') {
    for (const match of source.matchAll(/\]\(\.\/([^)]+)\)/gu)) {
      const line = source.slice(0, match.index).split('\n').length
      unsafeIndexRelativeLinks.push({ file: relativeFile, line, target: match[1] })
    }
  }

  for (const match of source.matchAll(/\]\s+\(([^)]+)\)/gu)) {
    const line = source.slice(0, match.index).split('\n').length
    malformedMarkdownLinks.push({ file: relativeFile, line, target: match[1] })
  }

  const matches = [...body.matchAll(placeholderPattern)]
  for (const match of matches) {
    const line = body.slice(0, match.index).split('\n').length
    placeholderIssues.push({ file: relative(file), line, value: match[0] })
  }

  for (const match of body.matchAll(/(?:youtube\.com\/embed\/example\w*|(?:src|href)=["'][^"']*(?:placeholder|coming-soon)[^"']*["'])/giu)) {
    const line = body.slice(0, match.index).split('\n').length
    invalidMediaPlaceholders.push({ file: relative(file), line, value: match[0] })
  }

  for (const { label, pattern } of unconditionalServicePatterns) {
    for (const match of body.matchAll(pattern)) {
      const line = body.slice(0, match.index).split('\n').length
      unconditionalServicePromises.push({ file: relative(file), line, label, value: match[0] })
    }
  }

  for (const { label, pattern } of translationTemplatePatterns) {
    for (const match of body.matchAll(pattern)) {
      const line = body.slice(0, match.index).split('\n').length
      translationTemplateResidues.push({ file: relative(file), line, label, value: match[0] })
    }
  }

  for (const { label, pattern } of unsupportedMarketingPatterns) {
    for (const match of body.matchAll(pattern)) {
      const line = body.slice(0, match.index).split('\n').length
      unsupportedMarketingClaims.push({ file: relativeFile, line, label, value: match[0] })
    }
  }

  for (const match of body.matchAll(/(?:\b425\b|৪২৫)/gu)) {
    const line = body.slice(0, match.index).split('\n').length
    obsoleteModelReferences.push({ file: relativeFile, line, value: match[0] })
  }

  const checkedAssets = new Set()
  for (const pattern of localAssetPatterns) {
    for (const match of source.matchAll(pattern)) {
      const reference = match[1]
      const target = localAssetTarget(file, reference)
      if (!target || checkedAssets.has(target)) continue
      checkedAssets.add(target)
      if (!fs.existsSync(target)) {
        const line = source.slice(0, match.index).split('\n').length
        missingLocalAssets.push({ file: relative(file), line, reference })
      }
    }
  }
}

const positioningPatterns = {
  en: { hot: /hot[- ]press/iu, cold: /cold[- ]press/iu, crush: /(?:crush|grind|ground|pulver)/iu },
  zh: { hot: /热榨/u, cold: /冷榨/u, crush: /粉碎/u },
  fr: { hot: /(?:pressage|pression)\s+à\s+chaud/iu, cold: /(?:pressage|pression)\s+à\s+froid/iu, crush: /broy/iu },
  ru: { hot: /(?:горяч[а-яё]*\s+(?:пресс|отжим)|(?:пресс|отжим)[а-яё]*\s+горяч)/iu, cold: /(?:холод[а-яё]*\s+(?:пресс|отжим)|(?:пресс|отжим)[а-яё]*\s+холод)/iu, crush: /измельч/iu },
  vi: { hot: /ép\s+nóng/iu, cold: /ép\s+lạnh/iu, crush: /nghiền/iu },
  bn: { hot: /(?:হট[- ]?প্রেস|গরম[^।\n]{0,30}প্রেস)/u, cold: /(?:কোল্ড[- ]?প্রেস|ঠান্ডা[^।\n]{0,30}প্রেস)/u, crush: /(?:গুঁড়|পিষ|ক্রাশ)/u }
}

const forbiddenHotPressModelAssets = [
  '/images/an-overview-of-the-cold-pressing-process-of-flaxse-0ea1b504ce.webp'
]

for (const locale of locales) {
  const patterns = positioningPatterns[locale]
  for (const model of modelFiles) {
    const file = path.join(docsRoot, locale, 'products', `${model}.md`)
    if (!fs.existsSync(file)) {
      positioningIssues.push({ file: relative(file), reason: 'missing model page' })
      continue
    }

    const body = stripFrontmatter(fs.readFileSync(file, 'utf8'))
    const prose = body.replace(/```[\s\S]*?```/g, '')
    const expected = model === '300' || model === '325'
      ? [{ key: 'hot', pattern: patterns.hot }]
      : [{ key: 'cold', pattern: patterns.cold }, { key: 'crush', pattern: patterns.crush }]

    for (const requirement of expected) {
      if (!requirement.pattern.test(prose)) {
        positioningIssues.push({ file: relative(file), reason: `missing ${requirement.key}-press positioning signal` })
      }
    }

    if (model === '300' || model === '325') {
      for (const asset of forbiddenHotPressModelAssets) {
        if (body.includes(asset)) {
          mispositionedModelAssets.push({
            file: relative(file),
            asset,
            reason: 'hot-press model page references cold-press process media'
          })
        }
      }
    }

    for (const [index, line] of prose.split('\n').entries()) {
      if (/^\s*\|.*\d+(?:[.,]\d+)?\s*%.*\|\s*$/u.test(line)) {
        fixedYieldTables.push({ file: relative(file), line: index + 1, value: line.trim() })
      }
    }
  }

  const dryerFiles = {
    spider: path.join(docsRoot, locale, 'products', 'filling', 'spider-arm-bottle-dryer.md'),
    turbo: path.join(docsRoot, locale, 'products', 'filling', 'turbo-air-knife-dryer.md')
  }
  if (fs.existsSync(dryerFiles.spider) && fs.existsSync(dryerFiles.turbo)) {
    const spider = normalizedBody(fs.readFileSync(dryerFiles.spider, 'utf8'))
    const turbo = normalizedBody(fs.readFileSync(dryerFiles.turbo, 'utf8'))
    if (spider === turbo) {
      duplicateDryerBodies.push({
        locale,
        files: [relative(dryerFiles.spider), relative(dryerFiles.turbo)]
      })
    }
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  markdownFiles: markdownFiles.length,
  appleDoubleFiles,
  placeholderIssues,
  invalidMediaPlaceholders,
  fixedYieldTables,
  positioningIssues,
  mispositionedModelAssets,
  duplicateDryerBodies,
  unconditionalServicePromises,
  missingLocalAssets,
  translationTemplateResidues,
  thinDetailPages,
  duplicateDetailBodies,
  headingLevelIssues,
  unsafeIndexRelativeLinks,
  malformedMarkdownLinks,
  unsupportedMarketingClaims,
  obsoleteModelReferences,
  legacyDuplicatePages,
  duplicateSolutionDetailPages
}

fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`)

console.log(`Markdown files checked: ${markdownFiles.length}`)
console.log(`AppleDouble files: ${appleDoubleFiles.length}`)
console.log(`Content placeholders: ${placeholderIssues.length}`)
console.log(`Invalid media placeholders: ${invalidMediaPlaceholders.length}`)
console.log(`Fixed percentage tables in 300-500 pages: ${fixedYieldTables.length}`)
console.log(`Model positioning issues: ${positioningIssues.length}`)
console.log(`Mispositioned model media assets: ${mispositionedModelAssets.length}`)
console.log(`Exact duplicate dryer bodies: ${duplicateDryerBodies.length}`)
console.log(`Unconditional free-service promises: ${unconditionalServicePromises.length}`)
console.log(`Missing local media assets: ${missingLocalAssets.length}`)
console.log(`Translation-template residues: ${translationTemplateResidues.length}`)
console.log(`Thin product/solution detail pages: ${thinDetailPages.length}`)
console.log(`Exact duplicate detail bodies: ${duplicateDetailBodies.length}`)
console.log(`Pages without exactly one H1: ${headingLevelIssues.length}`)
console.log(`Index pages with unsafe ./ links: ${unsafeIndexRelativeLinks.length}`)
console.log(`Malformed Markdown links with ] (: ${malformedMarkdownLinks.length}`)
console.log(`Unsupported marketing claims: ${unsupportedMarketingClaims.length}`)
console.log(`Obsolete 425 model references: ${obsoleteModelReferences.length}`)
console.log(`Legacy duplicate pages: ${legacyDuplicatePages.length}`)
console.log(`Duplicate solution detail pages: ${duplicateSolutionDetailPages.length}`)
console.log(`Report: ${reportPath}`)

if (
  appleDoubleFiles.length || placeholderIssues.length || invalidMediaPlaceholders.length || fixedYieldTables.length ||
  positioningIssues.length || mispositionedModelAssets.length || duplicateDryerBodies.length || unconditionalServicePromises.length || missingLocalAssets.length ||
  translationTemplateResidues.length || thinDetailPages.length || duplicateDetailBodies.length || headingLevelIssues.length ||
  unsafeIndexRelativeLinks.length || malformedMarkdownLinks.length || unsupportedMarketingClaims.length || legacyDuplicatePages.length ||
  obsoleteModelReferences.length || duplicateSolutionDetailPages.length
) {
  process.exitCode = 1
}
