const fs = require('fs')
const path = require('path')

const distDir = path.join(__dirname, 'docs', '.vitepress', 'dist')

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(fullPath)
      continue
    }
    if (!entry.isFile() || !entry.name.endsWith('.html')) continue
    if (entry.name === 'index.html' || entry.name === '404.html') continue

    const basename = entry.name.slice(0, -5)
    const aliasDir = path.join(dir, basename)
    const aliasFile = path.join(aliasDir, 'index.html')

    fs.mkdirSync(aliasDir, { recursive: true })
    fs.copyFileSync(fullPath, aliasFile)
  }
}

if (fs.existsSync(distDir)) {
  walk(distDir)
  console.log('Generated clean-url directory aliases in dist.')
} else {
  console.error(`Dist directory not found: ${distDir}`)
  process.exit(1)
}
