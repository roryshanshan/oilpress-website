const fs = require('fs');
const path = require('path');

const root = process.cwd();
const docsDir = path.join(root, 'docs');

const MAX_TITLE = 65;
const MAX_DESC = 160;

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

function shortenTitle(title, lang) {
  let t = title.trim();
  // normalize company name
  t = t.replace(/Shandong Shengshi Hecheng Machinery Co\., Ltd\.?/gi, 'Shengshi Hecheng');
  t = t.replace(/Shengshi Hecheng Machinery Co\., Ltd\.?/gi, 'Shengshi Hecheng');
  t = t.replace(/山东盛世赫程机械有限公司/g, '盛世赫程');

  if (t.length <= MAX_TITLE) return t;

  const brandEn = /Shengshi Hecheng/i;
  const brandZh = /盛世赫程/;

  const separators = [' | ', ' - ', ' — ', ' – '];
  let parts = [t];
  for (const sep of separators) {
    if (t.includes(sep)) {
      parts = t.split(sep).map(s => s.trim()).filter(Boolean);
      break;
    }
  }

  if (parts.length > 1) {
    const brand = parts.find(p => brandEn.test(p) || brandZh.test(p));
    const first = parts[0];
    let candidate = brand ? `${first} | ${brand}` : first;
    if (candidate.length <= MAX_TITLE) return candidate;
  }

  // fallback truncate
  if (t.length > MAX_TITLE) {
    return t.slice(0, MAX_TITLE - 3) + '...';
  }
  return t;
}

function shortenDescription(desc, lang) {
  let d = desc.trim();
  if (d.length <= MAX_DESC) return d;

  const isZh = lang === 'zh' || /[\u4e00-\u9fff]/.test(d);
  const sentenceRegex = isZh ? /(?<=[。！？])/ : /(?<=[.!?])/;
  const sentences = d.split(sentenceRegex).map(s => s.trim()).filter(Boolean);
  let out = '';
  for (const s of sentences) {
    const candidate = out ? (isZh ? out + s : out + ' ' + s) : s;
    if (candidate.length <= MAX_DESC) out = candidate; else break;
  }
  if (out) return out;

  const commaRegex = isZh ? /，|,/ : /,/;
  const segs = d.split(commaRegex).map(s => s.trim()).filter(Boolean);
  out = '';
  for (const s of segs) {
    const candidate = out ? (isZh ? out + '，' + s : out + ', ' + s) : s;
    if (candidate.length <= MAX_DESC) out = candidate; else break;
  }
  if (out) return out;

  return d.slice(0, MAX_DESC - 3) + '...';
}

const files = walk(docsDir);
let updated = 0;
let titleShortened = 0;
let descShortened = 0;

for (const file of files) {
  const rel = path.relative(docsDir, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');
  const fm = parseFrontmatter(content);
  if (!fm) continue;

  const { lines, end } = fm;
  let changed = false;
  const lang = detectLang(rel);

  for (let i = 1; i < end; i++) {
    if (lines[i].startsWith('title:')) {
      const raw = lines[i].slice('title:'.length).trim();
      const val = stripQuotes(raw);
      if (val.length > MAX_TITLE) {
        const shortened = shortenTitle(val, lang);
        if (shortened !== val) {
          lines[i] = `title: ${formatValue(shortened)}`;
          changed = true;
          titleShortened += 1;
        }
      }
    }
    if (lines[i].startsWith('description:')) {
      const raw = lines[i].slice('description:'.length).trim();
      const val = stripQuotes(raw);
      if (val.length > MAX_DESC) {
        const shortened = shortenDescription(val, lang);
        if (shortened !== val) {
          lines[i] = `description: ${formatValue(shortened)}`;
          changed = true;
          descShortened += 1;
        }
      }
    }
  }

  if (changed) {
    fs.writeFileSync(file, lines.join('\n'), 'utf8');
    updated += 1;
  }
}

console.log(`Updated ${updated} files. Titles shortened: ${titleShortened}. Descriptions shortened: ${descShortened}.`);
