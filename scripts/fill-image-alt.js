#!/usr/bin/env node
// 批量为空 alt 的 markdown 图片补充 alt 文本
// 策略：
//  - 本地 /images/ 工艺图：从文件名解析中/英语义，按页面语言输出
//  - postimg 外链：取该图所在位置最近的本地化标题作为 alt
// 只处理 ![](...) 形式（空 alt），绝不触碰已有 alt 的图片
'use strict'
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..', 'docs')
const LANGS = ['zh', 'en', 'fr', 'ru', 'vi', 'bn']
const DRY = process.argv.includes('--dry')

// 页面语言 -> 工艺词本地化
const PROC = {
  zh: { cold: '冷榨工艺', hot: '热榨工艺', process: '工艺流程图' },
  en: { cold: 'cold pressing process', hot: 'hot pressing process', process: 'processing' },
  fr: { cold: 'processus de pressage à froid', hot: 'processus de pressage à chaud', process: 'processus' },
  ru: { cold: 'процесс холодного отжима', hot: 'процесс горячего отжима', process: 'процесс' },
  vi: { cold: 'quy trình ép lạnh', hot: 'quy trình ép nóng', process: 'quy trình' },
  bn: { cold: 'ঠান্ডা চাপ প্রক্রিয়া', hot: 'গরম চাপ প্রক্রিয়া', process: 'প্রক্রিয়া' }
}

// 中文油料名 -> 六语言本地化（用于纯中文文件名图片，避免非中文页 fallback 成中文 alt）
const OILS = {
  '花生': { zh: '花生', en: 'peanut', fr: 'arachide', ru: 'арахис', vi: 'đậu phộng', bn: 'চিনাবাদাম' },
  '芝麻': { zh: '芝麻', en: 'sesame', fr: 'sésame', ru: 'кунжут', vi: 'vừng', bn: 'তিল' },
  '茶籽': { zh: '茶籽', en: 'tea seed', fr: 'graine de thé', ru: 'чайное семя', vi: 'hạt trà', bn: 'চা বীজ' },
  '核桃': { zh: '核桃', en: 'walnut', fr: 'noix', ru: 'грецкий орех', vi: 'óc chó', bn: 'আখরোট' },
  '大豆': { zh: '大豆', en: 'soybean', fr: 'soja', ru: 'соя', vi: 'đậu nành', bn: 'সয়াবিন' },
  '菜籽': { zh: '菜籽', en: 'rapeseed', fr: 'colza', ru: 'рапс', vi: 'hạt cải', bn: 'সরিষা' },
  '油菜籽': { zh: '油菜籽', en: 'rapeseed', fr: 'colza', ru: 'рапс', vi: 'hạt cải dầu', bn: 'সরিষা বীজ' },
  '胡麻': { zh: '胡麻/亚麻籽', en: 'flaxseed', fr: 'graine de lin', ru: 'льняное семя', vi: 'hạt lanh', bn: 'তিসি' },
  '亚麻籽': { zh: '亚麻籽', en: 'flaxseed', fr: 'graine de lin', ru: 'льняное семя', vi: 'hạt lanh', bn: 'তিসি' },
  '杏仁': { zh: '杏仁', en: 'almond', fr: 'amande', ru: 'миндаль', vi: 'hạnh nhân', bn: 'কাঠবাদাম' },
  '椰蓉': { zh: '椰蓉', en: 'coconut', fr: 'noix de coco', ru: 'кокос', vi: 'dừa', bn: 'নারকেল' },
  '椰子': { zh: '椰子', en: 'coconut', fr: 'noix de coco', ru: 'кокос', vi: 'dừa', bn: 'নারকেল' },
  '南瓜籽': { zh: '南瓜籽', en: 'pumpkin seed', fr: 'graine de courge', ru: 'тыквенное семя', vi: 'hạt bí', bn: 'কুমড়ো বীজ' },
  '沙棘子': { zh: '沙棘子', en: 'sea buckthorn seed', fr: 'graine d’argousier', ru: 'семя облепихи', vi: 'hạt hắc mai biển', bn: 'সি বাকথর্ন বীজ' },
  '沙棘': { zh: '沙棘', en: 'sea buckthorn', fr: 'argousier', ru: 'облепиха', vi: 'hắc mai biển', bn: 'সি বাকথর্ন' },
  '火麻籽': { zh: '火麻籽', en: 'hemp seed', fr: 'graine de chanvre', ru: 'семя конопли', vi: 'hạt gai dầu', bn: 'শণ বীজ' },
  '紫苏': { zh: '紫苏', en: 'perilla', fr: 'périlla', ru: 'перилла', vi: 'tía tô', bn: 'পেরিলা' },
  '油莎豆': { zh: '油莎豆', en: 'oil chia bean', fr: 'souchet', ru: 'чуфа', vi: 'đậu chia dầu', bn: 'অয়েল চিয়া' },
  '油泥': { zh: '油泥', en: 'oil sludge', fr: 'boue huileuse', ru: 'нефтешлам', vi: 'bùn dầu', bn: 'তেল স্লাজ' },
  '废白土': { zh: '废白土', en: 'waste bleaching clay', fr: 'terre de blanchiment usée', ru: 'отработанная отбельная глина', vi: 'đất tẩy trắng thải', bn: 'বর্জ্য ব্লিচিং ক্লে' },
  '葵花籽': { zh: '葵花籽', en: 'sunflower seed', fr: 'graine de tournesol', ru: 'семя подсолнечника', vi: 'hạt hướng dương', bn: 'সূর্যমুখী বীজ' }
}
// 非油料的固定名词图片
const FIXED = {
  '活性炭脱色剂': { zh: '活性炭脱色剂', en: 'activated carbon decolorizing agent', fr: 'agent décolorant au charbon actif', ru: 'активированный уголь-обесцвечиватель', vi: 'chất khử màu than hoạt tính', bn: 'সক্রিয় কার্বন বিবর্ণকারী' }
}

const decode = (s) => { try { return decodeURIComponent(s) } catch { return s } }

// 拼接油料 + 工艺（各语言语序）
function composeOilAlt(oil, mode, lang) {
  const o = oil[lang] || oil.en
  const p = PROC[lang][mode] || PROC[lang].process
  if (lang === 'zh') return `${o}${p}`          // 核桃冷榨工艺
  return `${o.charAt(0).toUpperCase() + o.slice(1)} ${p}` // Walnut cold pressing process
}

// 从本地图片文件名解析 alt
function altFromFilename(rawUrl, lang) {
  let name = decode(rawUrl.split('/').pop().replace(/\?.*$/, '').replace(/\.(png|jpe?g|webp|gif)$/i, ''))

  // 1) 已是英文连字符命名（如 flaxseed-hot-pressing-process）
  if (!/[一-鿿]/.test(name)) {
    const words = name.replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim()
    if (lang === 'zh') {
      // 反查英文油料名 -> 中文
      for (const oil of Object.values(OILS)) {
        if (words.toLowerCase().includes(oil.en)) {
          const mode = /cold/i.test(words) ? 'cold' : /hot/i.test(words) ? 'hot' : 'process'
          return composeOilAlt(oil, mode, 'zh')
        }
      }
    }
    return words.replace(/^(.)/, (m) => m.toUpperCase())
  }

  // 2) 含中文：先判工艺
  const mode = /冷榨/.test(name) ? 'cold' : /热榨/.test(name) ? 'hot' : 'process'

  // 3) 固定名词优先
  for (const [key, val] of Object.entries(FIXED)) {
    if (name.includes(key)) return val[lang] || val.en
  }

  // 4) 匹配油料名（长键优先，避免"菜籽"先于"油菜籽"命中）
  const oilKeys = Object.keys(OILS).sort((a, b) => b.length - a.length)
  for (const key of oilKeys) {
    if (name.includes(key)) return composeOilAlt(OILS[key], mode, lang)
  }

  // 5) 兜底：中文段本身（zh）或工艺词（其他语言）
  const cjkPart = (name.match(/[一-鿿][一-鿿\s/、]*/g) || []).join('').replace(/\s+/g, '').trim()
  if (lang === 'zh') return cjkPart || '压榨工艺流程图'
  return PROC[lang].process
}

function cleanHeading(h) {
  return h.replace(/<[^>]*>/g, '')
    .replace(/^#{1,6}\s*/, '')
    .replace(/^[\d.、\s]+/, '')
    .replace(/[:：]\s*$/, '')
    .replace(/\s+/g, ' ')
    .trim()
}

let stats = { total: 0, byFilename: 0, byHeading: 0 }
const samples = {}

function processFile(file, lang) {
  const src = fs.readFileSync(file, 'utf8')
  const lines = src.split('\n')
  let changed = false

  for (let i = 0; i < lines.length; i++) {
    // 匹配本行所有 ![](url) 空 alt
    lines[i] = lines[i].replace(/!\[\]\(([^)]+)\)/g, (full, url) => {
      stats.total++
      let alt
      if (url.includes('/images/')) {
        alt = altFromFilename(url, lang)
        stats.byFilename++
      } else {
        // 外链：向上找最近标题
        let h = ''
        for (let j = i; j >= 0; j--) {
          const m = lines[j].match(/^\s*#{1,6}\s+(.+)$/)
          if (m) { h = cleanHeading(m[1]); break }
        }
        alt = h || altFromFilename(url, lang)
        stats.byHeading++
      }
      alt = alt.replace(/["\]]/g, '').slice(0, 100).trim()
      if (!samples[lang]) samples[lang] = []
      if (samples[lang].length < 10) samples[lang].push(`  ${alt}  <- ${decode(url.split('/').pop()).slice(0, 44)}`)
      changed = true
      return `![${alt}](${url})`
    })
  }

  if (changed && !DRY) fs.writeFileSync(file, lines.join('\n'))
  return changed
}

function walk(dir, lang) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name.startsWith('._')) continue
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p, lang)
    else if (e.name.endsWith('.md')) processFile(p, lang)
  }
}

for (const lang of LANGS) {
  const d = path.join(ROOT, lang)
  if (fs.existsSync(d)) walk(d, lang)
}

console.log(`模式: ${DRY ? 'DRY-RUN（未写入）' : '已写入'}`)
console.log(`处理空alt图片总数: ${stats.total}  (文件名派生:${stats.byFilename}  标题派生:${stats.byHeading})`)
for (const lang of LANGS) {
  if (!samples[lang]) continue
  console.log(`\n=== [${lang}] 样本 ===`)
  console.log(samples[lang].join('\n'))
}
