const fs = require('fs');
const path = require('path');

const root = process.cwd();
const docsDir = path.join(root, 'docs');
const MAX_TITLE = 65;

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
  return { lines, end };
}

function stripQuotes(val) {
  const v = val.trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1);
  }
  return v;
}

function needsQuote(val) {
  if (!val) return false;
  return val.includes(':') || val.includes('#');
}

function formatValue(val) {
  let v = val.trim();
  if (needsQuote(v)) {
    v = v.replace(/"/g, '\\"');
    return `"${v}"`;
  }
  return v;
}

function detectLang(relPath) {
  const parts = relPath.split('/');
  const lang = parts[0];
  if (['en','zh','fr','ru','vi','bn'].includes(lang)) return lang;
  return 'root';
}

function isZh(text) {
  return /[\u4e00-\u9fff]/.test(text);
}

function trimToLength(text, max, lang) {
  if (text.length <= max) return text;
  if (lang === 'zh' || isZh(text)) {
    return text.slice(0, max);
  }
  // try cut on word boundary
  const truncated = text.slice(0, max);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > 20) return truncated.slice(0, lastSpace);
  return truncated;
}

function getFirstH1(lines, startIdx) {
  for (let i = startIdx; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('# ')) {
      return line.replace(/^#\s*/, '').trim();
    }
  }
  return '';
}

const files = walk(docsDir);
let updated = 0;
let fixedTitles = 0;
let fixedDesc = 0;

for (const file of files) {
  const rel = path.relative(docsDir, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');
  const fm = parseFrontmatter(content);
  if (!fm) continue;

  const { lines, end } = fm;
  const lang = detectLang(rel);
  const brand = lang === 'zh' ? '盛世赫程' : 'Shengshi Hecheng';
  let changed = false;

  for (let i = 1; i < end; i++) {
    if (lines[i].startsWith('title:')) {
      const raw = lines[i].slice('title:'.length).trim();
      const val = stripQuotes(raw);
      if (val.endsWith('...')) {
        const h1 = getFirstH1(lines, end + 1);
        let newTitle = '';
        if (h1) {
          newTitle = h1;
          if (!newTitle.includes(brand)) {
            const candidate = `${newTitle} | ${brand}`;
            if (candidate.length <= MAX_TITLE) newTitle = candidate;
          }
          newTitle = trimToLength(newTitle, MAX_TITLE, lang);
        } else {
          newTitle = trimToLength(val.replace(/\.\.\.$/, ''), MAX_TITLE, lang);
        }
        if (newTitle && newTitle !== val) {
          lines[i] = `title: ${formatValue(newTitle)}`;
          changed = true;
          fixedTitles += 1;
        }
      }
    }
    if (lines[i].startsWith('description:')) {
      const raw = lines[i].slice('description:'.length).trim();
      const val = stripQuotes(raw);
      if (val.includes('Co. , Ltd.')) {
        const newDesc = val.replace(/Co\. , Ltd\./g, 'Co., Ltd.');
        lines[i] = `description: ${formatValue(newDesc)}`;
        changed = true;
        fixedDesc += 1;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(file, lines.join('\n'), 'utf8');
    updated += 1;
  }
}

console.log(`Updated ${updated} files. Titles fixed: ${fixedTitles}, Descriptions fixed: ${fixedDesc}.`);
