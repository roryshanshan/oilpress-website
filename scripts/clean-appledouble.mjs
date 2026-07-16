import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const ignoredDirectories = new Set(['.git', 'node_modules', 'dist', 'cache'])
let removed = 0

function clean(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) clean(absolute)
      continue
    }

    if (entry.isFile() && entry.name.startsWith('._')) {
      fs.unlinkSync(absolute)
      removed += 1
    }
  }
}

clean(root)
console.log(`Removed AppleDouble files: ${removed}`)
