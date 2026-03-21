const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

const distDir = path.join(__dirname, 'docs', '.vitepress', 'dist')
const textExtensions = new Set(['.css', '.html', '.js', '.json', '.txt', '.xml'])

function toPosix(filePath) {
  return filePath.split(path.sep).join('/')
}

function walkFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkFiles(fullPath, files)
      continue
    }
    if (entry.isFile()) files.push(fullPath)
  }
  return files
}

function ensureSafeAssetAliases() {
  const aliasTargets = []

  for (const relDir of ['assets/chunks', 'images']) {
    const dir = path.join(distDir, relDir)
    if (!fs.existsSync(dir)) continue

    for (const filePath of walkFiles(dir)) {
      const basename = path.basename(filePath)
      if (!(/[^\x20-\x7E]/.test(basename) || /\s/.test(basename))) continue

      const ext = path.extname(basename)
      const stem = path.basename(basename, ext)
      const asciiStem = stem
        .normalize('NFKD')
        .replace(/[^\x00-\x7F]/g, ' ')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .replace(/-+/g, '-')
        .slice(0, 40)
        .replace(/-+$/g, '')
      const prefix = relDir === 'assets/chunks' ? 'chunk' : 'asset'
      const hash = crypto.createHash('sha1').update(toPosix(path.relative(distDir, filePath))).digest('hex').slice(0, 8)
      const safeBasename = `${asciiStem || prefix}-${hash}${ext}`
      const safePath = path.join(path.dirname(filePath), safeBasename)

      if (!fs.existsSync(safePath)) {
        fs.copyFileSync(filePath, safePath)
      }

      aliasTargets.push({
        rawName: basename,
        encodedName: encodeURI(basename),
        encodedHtmlName: encodeURI(basename).replace(/&/g, '&amp;'),
        safeName: safeBasename
      })
    }
  }

  if (!aliasTargets.length) return 0

  let updatedFiles = 0
  for (const filePath of walkFiles(distDir)) {
    if (!textExtensions.has(path.extname(filePath))) continue

    const original = fs.readFileSync(filePath, 'utf8')
    let next = original

    for (const { rawName, encodedName, encodedHtmlName, safeName } of aliasTargets) {
      next = next.split(encodedName).join(safeName)
      next = next.split(encodedHtmlName).join(safeName)
      next = next.split(rawName).join(safeName)
    }

    if (next !== original) {
      fs.writeFileSync(filePath, next)
      updatedFiles += 1
    }
  }

  return updatedFiles
}

function generateCleanUrlAliases() {
  for (const fullPath of walkFiles(distDir)) {
    if (!fullPath.endsWith('.html')) continue
    const entry = path.basename(fullPath)
    if (entry === 'index.html' || entry === '404.html') continue

    const basename = entry.slice(0, -5)
    const aliasDir = path.join(path.dirname(fullPath), basename)
    const aliasFile = path.join(aliasDir, 'index.html')

    fs.mkdirSync(aliasDir, { recursive: true })
    fs.copyFileSync(fullPath, aliasFile)
  }
}

if (fs.existsSync(distDir)) {
  const updatedFiles = ensureSafeAssetAliases()
  generateCleanUrlAliases()
  if (updatedFiles > 0) {
    console.log(`Rewrote ${updatedFiles} built files to use safe asset aliases.`)
  }
  console.log('Generated clean-url directory aliases in dist.')
} else {
  console.error(`Dist directory not found: ${distDir}`)
  process.exit(1)
}
