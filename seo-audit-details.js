const fs = require('fs');
const path = require('path');

const root = process.cwd();
const docsDir = path.join(root, 'docs');

const TARGET_FIELDS = ['title', 'description', 'keywords'];
const DUPLICATE_SOLUTION_DETAIL_RE = /^(en|zh|fr|ru|vi|bn)\/solutions\/(bottle-washing|brewing|cap-shrinking|corking|dairy-processing|drying|filling|filling-packages|filtering|fruit-veg-processing|labeling|laser-coding|light-inspection|packing-palletizing|sealing)\/(?!index\.md$)[^/]+\.md$/;
const COMMERCIAL_INTENT_PATTERNS = {
  en: /\b(price|quote|buy|purchase|procurement|manufacturer|factory|supplier|production line|after-sales)\b/i,
  zh: /(价格|报价|采购|厂家|制造商|生产线|售后)/,
  fr: /\b(prix|devis|achat|acheter|approvisionnement|fabricant|usine|fournisseur|ligne de production|service après-vente)\b/i,
  ru: /(цена|стоимост|коммерческ.{0,12}предлож|купить|закуп|производител|завод|поставщик|производственн.{0,8}лини|сервис)/i,
  vi: /(giá|báo giá|mua|thu mua|nhà sản xuất|nhà máy|nhà cung cấp|dây chuyền sản xuất|hậu mãi)/i,
  bn: /(দাম|কোটেশন|ক্রয়|কিনুন|প্রস্তুতকারক|কারখানা|সরবরাহকারী|উৎপাদন লাইন|বিক্রয়োত্তর)/
};

function cleanScalar(value) {
  return String(value || '').trim().replace(/^['"]|['"]$/g, '');
}

function isNoindexSourcePage(relPath, data) {
  const robots = cleanScalar(data.robots).toLowerCase();
  const noindex = cleanScalar(data.noindex).toLowerCase();
  return robots === 'noindex'
    || noindex === 'true'
    || DUPLICATE_SOLUTION_DETAIL_RE.test(relPath)
    || /^(en|zh|fr|ru|vi|bn)\/solutions\/peanut1\.md$/.test(relPath)
    || /^(en|zh|fr|ru|vi|bn)\/products\/peanut\.md$/.test(relPath)
    || /^(en|zh|fr|ru|vi|bn)\/translation-glossary\.md$/.test(relPath);
}

function walk(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    if (ent.name.startsWith('._')) continue;
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

function isCommercialSeoTarget(relPath, data) {
  return !isNoindexSourcePage(relPath, data)
    && /^(en|zh|fr|ru|vi|bn)\/(products|solutions)\//.test(relPath);
}

const files = walk(docsDir);
const report = {
  noFrontmatter: [],
  missing: { title: [], description: [], keywords: [] },
  length: { titleTooLong: [], descriptionTooLong: [] },
  duplicates: { byLang: {}, descriptionsByLang: {} },
  intent: { missingCommercialIntent: [] }
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
    if (!data[field]) report.missing[field].push(rel);
  }

  const title = cleanScalar(data.title);
  const description = cleanScalar(data.description);
  const keywords = cleanScalar(data.keywords);
  const shouldIndex = !isNoindexSourcePage(rel, data);
  if (title.length > 65) report.length.titleTooLong.push(rel);
  if (description.length > 160) report.length.descriptionTooLong.push(rel);
  if (isCommercialSeoTarget(rel, data)) {
    const intentPattern = COMMERCIAL_INTENT_PATTERNS[lang];
    if (intentPattern && !intentPattern.test(`${title} ${description} ${keywords}`)) {
      report.intent.missingCommercialIntent.push(rel);
    }
  }
  if (title && shouldIndex) {
    if (!titleMap[lang]) titleMap[lang] = {};
    titleMap[lang][title] = titleMap[lang][title] || [];
    titleMap[lang][title].push(rel);
  }
  if (description && shouldIndex) {
    if (!descriptionMap[lang]) descriptionMap[lang] = {};
    descriptionMap[lang][description] = descriptionMap[lang][description] || [];
    descriptionMap[lang][description].push(rel);
  }
}

for (const [lang, map] of Object.entries(titleMap)) {
  const dups = Object.entries(map).filter(([, files]) => files.length > 1);
  if (dups.length) report.duplicates.byLang[lang] = dups.map(([title, files]) => ({ title, files }));
}

for (const [lang, map] of Object.entries(descriptionMap)) {
  const dups = Object.entries(map).filter(([, files]) => files.length > 1);
  if (dups.length) report.duplicates.descriptionsByLang[lang] = dups.map(([description, files]) => ({ description, files }));
}

const outPath = path.join(root, 'seo-audit-details.json');
fs.writeFileSync(outPath, JSON.stringify(report, null, 2), 'utf8');
console.log(`Details written to ${outPath}`);
