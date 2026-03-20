const fs = require('fs');
const path = require('path');

const root = process.cwd();
const models = ['300', '325', '355', '400', '426', '480', '500'];

const blocks = {
  en: {
    heading: '## Series Overview',
    block: [
      '### Get a Quote / Official Website',
      'For pricing, configuration, and delivery time, visit:',
      '[Hydraulic Oil Press](https://hydraulic-oil-press.com/)' ,
      ''
    ].join('\n')
  },
  zh: {
    heading: '## 系列概述',
    block: [
      '### 获取报价 / 官方网站',
      '价格、配置与交期咨询请访问：',
      '[液压榨油机官网](https://hydraulic-oil-press.com/)',
      ''
    ].join('\n')
  }
};

function insertBlock(content, heading, block) {
  if (content.includes('https://hydraulic-oil-press.com/')) return { changed: false, content };
  const lines = content.split(/\r?\n/);
  const idx = lines.findIndex((line) => line.trim() === heading);
  if (idx === -1) return { changed: false, content };

  const insertAt = idx + 1;
  const newLines = [
    ...lines.slice(0, insertAt),
    '',
    block,
    ...lines.slice(insertAt)
  ];
  return { changed: true, content: newLines.join('\n') };
}

function processLang(lang) {
  const dir = path.join(root, 'docs', lang, 'products');
  let updated = 0;
  for (const model of models) {
    const filePath = path.join(dir, `${model}.md`);
    if (!fs.existsSync(filePath)) continue;
    const content = fs.readFileSync(filePath, 'utf8');
    const { heading, block } = blocks[lang];
    const res = insertBlock(content, heading, block);
    if (res.changed) {
      fs.writeFileSync(filePath, res.content, 'utf8');
      updated += 1;
    }
  }
  return updated;
}

const updatedEn = processLang('en');
const updatedZh = processLang('zh');
console.log(`Updated EN: ${updatedEn} files, ZH: ${updatedZh} files.`);
