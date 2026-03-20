const fs = require('fs');
const path = require('path');

const root = process.cwd();
const docsDir = path.join(root, 'docs');
const detailsPath = path.join(root, 'seo-audit-details.json');

function hasFrontmatter(content) {
  return content.startsWith('---\n');
}

function cleanText(line) {
  let text = line;
  text = text.replace(/\[(.*?)\]\([^)]*\)/g, '$1'); // markdown links
  text = text.replace(/[*_`]/g, '');
  text = text.replace(/<[^>]*>/g, '');
  return text.trim();
}

function titleFromFilename(filePath) {
  const base = path.basename(filePath, '.md');
  return base
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function detectLang(relPath) {
  const parts = relPath.split('/');
  const lang = parts[0];
  if (['en','zh','fr','ru','vi','bn'].includes(lang)) return lang;
  return 'root';
}

const genericKeywords = {
  en: 'hydraulic oil press, oil press machine, oil processing equipment',
  zh: '液压榨油机, 榨油机设备, 油料加工设备',
  fr: "presse à huile, machine d'extraction d'huile, équipement de pressage d'huile",
  ru: 'гидравлический маслопресс, пресс для масла, оборудование для отжима масла',
  vi: 'máy ép dầu thủy lực, máy ép dầu, thiết bị ép dầu',
  bn: 'হাইড্রোলিক অয়েল প্রেস, অয়েল প্রেস মেশিন, তেল প্রক্রিয়াকরণ সরঞ্জাম',
  root: 'hydraulic oil press, oil press machine, oil processing equipment'
};

const details = JSON.parse(fs.readFileSync(detailsPath, 'utf8'));
const targets = details.noFrontmatter || [];

let updated = 0;
let removed = 0;

for (const rel of targets) {
  const filePath = path.join(docsDir, rel);
  if (!fs.existsSync(filePath)) continue;

  const base = path.basename(filePath);
  if (base.startsWith('._')) {
    fs.unlinkSync(filePath);
    removed += 1;
    continue;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  if (hasFrontmatter(content)) continue;

  const lines = content.split(/\r?\n/);
  let title = '';
  let desc = '';
  let foundHeading = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    if (line.startsWith('#')) {
      if (!title) {
        title = cleanText(line.replace(/^#+\s*/, ''));
        foundHeading = true;
      }
      continue;
    }
    if (line.startsWith('```')) {
      // skip code blocks
      while (i < lines.length && !lines[i].trim().startsWith('```')) i++;
      continue;
    }
    if (line.startsWith('<')) {
      // likely HTML, skip for description
      continue;
    }
    if (!desc) {
      desc = cleanText(line);
      if (desc) break;
    }
  }

  if (!title) title = titleFromFilename(filePath);
  if (!desc) {
    desc = title;
  }

  const lang = detectLang(rel);
  const keywords = genericKeywords[lang] || genericKeywords.root;

  const fm = [
    '---',
    `title: ${title}`,
    `description: ${desc}`,
    `keywords: ${keywords}`,
    '---',
    ''
  ].join('\n');

  const updatedContent = fm + content;
  fs.writeFileSync(filePath, updatedContent, 'utf8');
  updated += 1;
}

console.log(`Added frontmatter to ${updated} files. Removed ${removed} artifact files.`);
