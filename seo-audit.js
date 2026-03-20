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

function isQuoted(val) {
  if (!val) return false;
  const v = val.trim();
  return (v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"));
}

function needsQuote(val) {
  if (!val) return false;
  if (isQuoted(val)) return false;
  return val.includes(':') || val.includes('#');
}

function quoteValue(val) {
  let v = val.trim();
  if (isQuoted(v)) return v;
  // escape existing double quotes
  v = v.replace(/"/g, '\\"');
  return `"${v}"`;
}

function detectLang(relPath) {
  const parts = relPath.split('/');
  const lang = parts[0];
  if (['en','zh','fr','ru','vi','bn'].includes(lang)) return lang;
  return 'root';
}

const files = walk(docsDir);
const report = {
  totalFiles: files.length,
  noFrontmatter: [],
  missing: { title: [], description: [], keywords: [] },
  length: { titleTooLong: [], descriptionTooLong: [] },
  duplicates: { byLang: {} },
  yamlQuotedFixes: []
};

const titleMap = {};
const descriptionMap = {};

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
    if (!data[field]) {
      report.missing[field].push(rel);
    }
  }

  const title = data.title ? data.title.trim().replace(/^['"]|['"]$/g, '') : '';
  const desc = data.description ? data.description.trim().replace(/^['"]|['"]$/g, '') : '';

  if (title) {
    if (!titleMap[lang]) titleMap[lang] = {};
    titleMap[lang][title] = titleMap[lang][title] || [];
    titleMap[lang][title].push(rel);
    if (title.length > 65) report.length.titleTooLong.push(rel);
  }
  if (desc) {
    if (!descriptionMap[lang]) descriptionMap[lang] = {};
    descriptionMap[lang][desc] = descriptionMap[lang][desc] || [];
    descriptionMap[lang][desc].push(rel);
    if (desc.length > 160) report.length.descriptionTooLong.push(rel);
  }
}

for (const [lang, map] of Object.entries(titleMap)) {
  const dups = Object.entries(map).filter(([, files]) => files.length > 1);
  if (dups.length) report.duplicates.byLang[lang] = dups.map(([title, files]) => ({ title, files }));
}

// Write report
const lines = [];
lines.push(`# SEO Audit Report`);
lines.push(`Total markdown files: ${report.totalFiles}`);
lines.push('');
lines.push('## Missing Frontmatter');
lines.push(`No frontmatter: ${report.noFrontmatter.length}`);
lines.push('');
lines.push('## Missing Fields');
lines.push(`Missing title: ${report.missing.title.length}`);
lines.push(`Missing description: ${report.missing.description.length}`);
lines.push(`Missing keywords: ${report.missing.keywords.length}`);
lines.push('');
lines.push('## Length Warnings');
lines.push(`Title > 65 chars: ${report.length.titleTooLong.length}`);
lines.push(`Description > 160 chars: ${report.length.descriptionTooLong.length}`);
lines.push('');
lines.push('## Duplicate Titles (by language)');
for (const [lang, dups] of Object.entries(report.duplicates.byLang)) {
  lines.push(`- ${lang}: ${dups.length} duplicates`);
}
lines.push('');

const reportPath = path.join(root, 'seo-audit-report.md');
fs.writeFileSync(reportPath, lines.join('\n'), 'utf8');
console.log(`Report written to ${reportPath}`);
