const fs = require('fs');
const path = require('path');

const root = process.cwd();
const docsDir = path.join(root, 'docs');
const targetLangs = new Set(['en', 'zh']);

const baseKeywords = {
  en: {
    home: [
      'hydraulic oil press manufacturer',
      'hydraulic oil press machine',
      'oil press machine price',
      'oil press machine quotation',
      'oil press supplier',
      'oil processing line',
      'oil mill equipment',
      'after-sales service',
      '300-500 series oil press',
      'Shengshi Hecheng'
    ],
    productsIndex: [
      'hydraulic oil press',
      'oil press machine',
      '300-500 series oil press',
      'hydraulic oil press manufacturer',
      'oil press price',
      'oil press machine quotation',
      'oil press supplier',
      'customized oil press',
      'supporting equipment',
      'after-sales service',
      'Shengshi Hecheng'
    ],
    productsPage: [
      'oil press machine',
      'oil press price',
      'oil press quotation',
      'oil press supplier',
      'oil processing equipment',
      'supporting equipment',
      'after-sales service'
    ],
    solutionsIndex: [
      'oil processing solutions',
      'oilseed processing line',
      'hydraulic oil press',
      'oil press machine',
      'one-stop oil processing',
      'oil processing line price',
      'oil processing line quotation',
      'after-sales support',
      'Shengshi Hecheng'
    ],
    solutionsPage: [
      'oil processing solutions',
      'oil press machine',
      'oilseed processing equipment',
      'oil extraction process',
      'oil processing line price',
      'oil processing line quotation'
    ],
    newsIndex: [
      'oil press news',
      'oil processing industry news',
      'hydraulic oil press updates',
      'oil extraction technology'
    ],
    newsArticle: [
      'oil extraction technology',
      'oil press machine',
      'oil processing knowledge'
    ],
    contact: [
      'contact us',
      'oil press manufacturer',
      'hydraulic oil press supplier',
      'oil press price',
      'oil press quotation',
      'equipment purchase',
      'after-sales support',
      'Shengshi Hecheng'
    ],
    about: [
      'Shandong Shengshi Hecheng',
      'hydraulic oil press manufacturer',
      'oil press equipment factory',
      'oilseed processing equipment',
      'oil press R&D'
    ],
    advantages: [
      'oil press manufacturer advantages',
      'technology innovation',
      'quality assurance',
      'service support'
    ],
    generic: [
      'hydraulic oil press',
      'oil press machine',
      'oil press price',
      'oil processing equipment'
    ]
  },
  zh: {
    home: [
      '液压榨油机厂家',
      '液压榨油机',
      '榨油机价格',
      '榨油机报价',
      '榨油机采购',
      '油料加工生产线',
      '油坊设备',
      '售后服务',
      '300-500系列榨油机',
      '盛世赫程'
    ],
    productsIndex: [
      '液压榨油机',
      '榨油机设备',
      '300-500系列榨油机',
      '液压榨油机厂家',
      '榨油机价格',
      '榨油机报价',
      '榨油机采购',
      '定制榨油机',
      '配套设备',
      '售后服务',
      '盛世赫程'
    ],
    productsPage: [
      '榨油机设备',
      '榨油机价格',
      '榨油机报价',
      '榨油机采购',
      '油料加工设备',
      '榨油机配套设备',
      '售后服务'
    ],
    solutionsIndex: [
      '油料加工解决方案',
      '油料压榨生产线',
      '液压榨油机',
      '榨油机设备',
      '一站式油料加工',
      '生产线价格',
      '生产线报价',
      '售后支持',
      '盛世赫程'
    ],
    solutionsPage: [
      '油料加工解决方案',
      '榨油机设备',
      '油料加工设备',
      '油料压榨工艺',
      '生产线价格',
      '生产线报价'
    ],
    newsIndex: [
      '榨油机新闻',
      '油料加工行业动态',
      '液压榨油机资讯',
      '榨油工艺知识'
    ],
    newsArticle: [
      '榨油工艺',
      '榨油机设备',
      '油料加工知识'
    ],
    contact: [
      '联系我们',
      '榨油机厂家',
      '液压榨油机供应商',
      '榨油机价格',
      '榨油机报价',
      '设备采购',
      '售后服务',
      '盛世赫程'
    ],
    about: [
      '山东盛世赫程',
      '液压榨油机厂家',
      '榨油设备制造商',
      '油料加工设备',
      '榨油机研发'
    ],
    advantages: [
      '榨油机厂家优势',
      '技术创新',
      '质量保障',
      '服务支持'
    ],
    generic: [
      '液压榨油机',
      '榨油机设备',
      '榨油机价格',
      '油料加工设备'
    ]
  }
};

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDir(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

function parseFrontmatter(content) {
  const lines = content.split(/\r?\n/);
  if (lines[0] !== '---') {
    return { hasFrontmatter: false };
  }
  let endIndex = -1;
  for (let i = 1; i < lines.length; i += 1) {
    if (lines[i] === '---') {
      endIndex = i;
      break;
    }
  }
  if (endIndex === -1) {
    return { hasFrontmatter: false };
  }
  const frontmatterLines = lines.slice(1, endIndex);
  const bodyLines = lines.slice(endIndex + 1);
  const data = {};
  for (const line of frontmatterLines) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) continue;
    const key = match[1];
    let value = match[2] || '';
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { hasFrontmatter: true, frontmatterLines, bodyLines, data, endIndex };
}

function cleanTitle(title) {
  if (!title) return '';
  let cleaned = title.replace(/\s+/g, ' ').trim();
  const separators = [' | ', ' - ', ' — ', ' – '];
  for (const sep of separators) {
    if (cleaned.includes(sep)) {
      cleaned = cleaned.split(sep)[0].trim();
    }
  }
  return cleaned;
}

function slugToTitle(slug) {
  if (!slug) return '';
  const cleaned = slug.replace(/-/g, ' ').replace(/_/g, ' ').trim();
  if (!cleaned) return '';
  return cleaned.replace(/\b\w/g, (m) => m.toUpperCase());
}

function dedupeKeywords(items, lang) {
  const seen = new Set();
  const out = [];
  for (const item of items) {
    const value = (item || '').trim();
    if (!value) continue;
    const key = lang === 'en' ? value.toLowerCase() : value;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(value);
  }
  return out;
}

function limitKeywords(items, max) {
  return items.slice(0, max);
}

function parseKeywords(raw) {
  if (!raw) return [];
  return raw
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean);
}

function pickKeywords({ lang, section, slug, subpath, title, description, existing }) {
  const keywords = [];
  const titleMain = cleanTitle(title) || slugToTitle(slug);

  if (titleMain) keywords.push(titleMain);

  const isHome = section === '' && slug === 'index';
  const isProductsIndex = section === 'products' && slug === 'index';
  const isSolutionsIndex = section === 'solutions' && slug === 'index';
  const isNewsIndex = section === 'news' && slug === 'index';
  const isContact = section === 'contact' && slug === 'index';
  const isAbout = section === 'about' && slug === 'index';
  const isAdvantages = section === 'advantages' && slug === 'index';
  const isSeries = section === 'products' && /^\d+$/.test(slug);

  const langBase = baseKeywords[lang];

  if (isHome) keywords.push(...langBase.home);
  else if (isProductsIndex) keywords.push(...langBase.productsIndex);
  else if (isSolutionsIndex) keywords.push(...langBase.solutionsIndex);
  else if (isNewsIndex) keywords.push(...langBase.newsIndex);
  else if (isContact) keywords.push(...langBase.contact);
  else if (isAbout) keywords.push(...langBase.about);
  else if (isAdvantages) keywords.push(...langBase.advantages);
  else if (isSeries && lang === 'en') {
    keywords.push(
      `${slug} series hydraulic oil press`,
      `${slug} ton oil press machine`,
      'hydraulic oil press machine',
      'oil press price',
      'oil press quotation',
      'oil press supplier',
      'oil press manufacturer',
      'after-sales service',
      'sesame oil press',
      'peanut oil press'
    );
  } else if (isSeries && lang === 'zh') {
    keywords.push(
      `${slug}系列液压榨油机`,
      `${slug}吨榨油机`,
      '液压榨油机设备',
      '榨油机厂家',
      '榨油机价格',
      '榨油机报价',
      '设备采购',
      '售后服务',
      '芝麻榨油机',
      '花生榨油机'
    );
  } else if (section === 'products') {
    keywords.push(...langBase.productsPage);
  } else if (section === 'solutions') {
    keywords.push(...langBase.solutionsPage);
  } else if (section === 'news') {
    keywords.push(...langBase.newsArticle);
  } else if (section === 'about') {
    keywords.push(...langBase.about);
  } else if (section === 'advantages') {
    keywords.push(...langBase.advantages);
  } else {
    keywords.push(...langBase.generic);
  }

  if (description) {
    const desc = description.toLowerCase();
    if (lang === 'en') {
      if (desc.includes('cold press') || desc.includes('cold pressing')) keywords.push('cold press oil');
      if (desc.includes('hot press') || desc.includes('hot pressing')) keywords.push('hot press oil');
      if (desc.includes('processing line')) keywords.push('oil processing line');
    } else if (lang === 'zh') {
      if (description.includes('冷榨')) keywords.push('冷榨');
      if (description.includes('热榨')) keywords.push('热榨');
      if (description.includes('生产线')) keywords.push('油料加工生产线');
    }
  }

  keywords.push(...existing.slice(0, 8));

  const deduped = dedupeKeywords(keywords, lang).filter((item) => item.length <= 60);
  const max = section === 'news' ? 8 : 10;
  const min = section === 'news' ? 6 : 8;
  let trimmed = limitKeywords(deduped, max);
  if (trimmed.length < min) {
    const fallback = dedupeKeywords([...trimmed, ...langBase.generic], lang);
    trimmed = limitKeywords(fallback, max);
  }
  return trimmed;
}

function updateFrontmatter(content, newKeywords) {
  const lines = content.split(/\r?\n/);
  if (lines[0] !== '---') return content;
  let endIndex = -1;
  for (let i = 1; i < lines.length; i += 1) {
    if (lines[i] === '---') { endIndex = i; break; }
  }
  if (endIndex === -1) return content;

  const frontmatterLines = lines.slice(1, endIndex);
  const bodyLines = lines.slice(endIndex + 1);

  let inserted = false;
  let updated = false;
  const newFrontmatter = frontmatterLines.map((line) => {
    if (line.startsWith('keywords:')) {
      updated = true;
      return `keywords: ${newKeywords}`;
    }
    return line;
  });

  if (!updated) {
    let insertIndex = newFrontmatter.findIndex((line) => line.startsWith('description:'));
    if (insertIndex === -1) insertIndex = newFrontmatter.findIndex((line) => line.startsWith('title:'));
    if (insertIndex === -1) insertIndex = newFrontmatter.length - 1;
    newFrontmatter.splice(insertIndex + 1, 0, `keywords: ${newKeywords}`);
    inserted = true;
  }

  const rebuilt = ['---', ...newFrontmatter, '---', ...bodyLines].join('\n');
  return rebuilt;
}

function processFile(filePath) {
  const rel = path.relative(docsDir, filePath).replace(/\\/g, '/');
  const segments = rel.split('/');
  const lang = segments[0];
  if (!targetLangs.has(lang)) return { skipped: true };

  const content = fs.readFileSync(filePath, 'utf8');
  const fm = parseFrontmatter(content);
  if (!fm.hasFrontmatter) return { skipped: true };

  const rest = segments.slice(1);
  const section = rest.length > 1 ? rest[0] : '';
  const filename = rest[rest.length - 1] || '';
  const slug = filename.replace(/\.md$/, '');
  const subpath = rest.join('/').replace(/\.md$/, '');

  const existing = parseKeywords(fm.data.keywords || '');
  const title = fm.data.title || '';
  const description = fm.data.description || '';

  const newKeywordsArr = pickKeywords({ lang, section, slug, subpath, title, description, existing });
  const newKeywords = newKeywordsArr.join(', ');
  const updatedContent = updateFrontmatter(content, newKeywords);

  if (updatedContent !== content) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    return { updated: true, keywords: newKeywords };
  }
  return { updated: false };
}

function main() {
  const files = targetLangs.size
    ? [...targetLangs].flatMap((lang) => walkDir(path.join(docsDir, lang)))
    : walkDir(docsDir);

  const results = { updated: 0, skipped: 0 };
  for (const file of files) {
    const res = processFile(file);
    if (res.skipped) results.skipped += 1;
    else if (res.updated) results.updated += 1;
  }

  console.log(`Updated keywords in ${results.updated} files. Skipped ${results.skipped} files.`);
}

main();
