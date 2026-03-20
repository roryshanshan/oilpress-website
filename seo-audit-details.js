const fs = require('fs');
const path = require('path');

const root = process.cwd();
const docsDir = path.join(root, 'docs');

const TARGET_FIELDS = ['title', 'description', 'keywords'];

function walk(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walk(full));
    else if (ent.isFile() && ent.name.endsWith('.md')) out.push(full);
  }
  return out;
}

function parseFrontmatter(content) {
  const lines = content.split(/\r?\n/);
  if (lines[0] !== '---') return null;
  let end = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') { end = i; break; }
  }
  if (end === -1) return null;
  const frontmatter = lines.slice(1, end);
  const data = {};
  for (const line of frontmatter) {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!m) continue;
    data[m[1]] = m[2];
  }
  return { frontmatter, data, end };
}

function detectLang(relPath) {
  const parts = relPath.split('/');
  const lang = parts[0];
  if (['en','zh','fr','ru','vi','bn'].includes(lang)) return lang;
  return 'root';
}

const files = walk(docsDir);
const report = {
  noFrontmatter: [],
  missing: { title: [], description: [], keywords: [] },
  duplicates: { byLang: {} }
};

const titleMap = {};

for (const file of files) {
  const rel = path.relative(docsDir, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');
  const fm = parseFrontmatter(content);
  if (!fm) {
    report.noFrontmatter.push(rel);
    continue;
  }
  const { data } = fm;
  const lang = detectLang(rel);

  for (const field of TARGET_FIELDS) {
    if (!data[field]) report.missing[field].push(rel);
  }

  const title = data.title ? data.title.trim().replace(/^['"]|['"]$/g, '') : '';
  if (title) {
    if (!titleMap[lang]) titleMap[lang] = {};
    titleMap[lang][title] = titleMap[lang][title] || [];
    titleMap[lang][title].push(rel);
  }
}

for (const [lang, map] of Object.entries(titleMap)) {
  const dups = Object.entries(map).filter(([, files]) => files.length > 1);
  if (dups.length) report.duplicates.byLang[lang] = dups.map(([title, files]) => ({ title, files }));
}

const outPath = path.join(root, 'seo-audit-details.json');
fs.writeFileSync(outPath, JSON.stringify(report, null, 2), 'utf8');
console.log(`Details written to ${outPath}`);
