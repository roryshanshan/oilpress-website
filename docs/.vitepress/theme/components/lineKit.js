import { LINES, T, UI } from '../line-kit-data.js'

export const LOCALES = ['en', 'zh', 'fr', 'ru', 'vi', 'bn']

export const localeFromPath = (path = '') => {
  const seg = String(path).replace(/^\/+/, '').split('/')[0]
  return LOCALES.includes(seg) ? seg : 'en'
}

export const ui = (lang) => ({ ...UI.en, ...(UI[lang] || {}) })

const isCjk = (lang) => lang === 'zh'

export const tr = (lang, text) => {
  if (!text) return text
  if (lang === 'en') return text
  const key = text.trim()
  const u = ui(lang)
  if (key === 'or') return isCjk(lang) ? u.or : ` ${u.or} `
  if (key === '(or') return isCjk(lang) ? u.orp : ` ${u.orp} `
  if (key === ',') return u.comma + (isCjk(lang) ? '' : ' ')
  const hit = (T[lang] || {})[key]
  if (!hit) return text
  if (isCjk(lang)) return hit
  const lead = /^\s/.test(text) ? ' ' : ''
  const trail = /\s$/.test(text) ? ' ' : ''
  return lead + hit + trail
}

export const partHref = (lang, href) => (href && href.startsWith('@') ? `/${lang}${href.slice(1)}` : href)

export const machineText = (lang, parts) => parts.map((p) => tr(lang, p.t)).join('').replace(/\s+/g, ' ').trim()

export const lineByKey = (key) => LINES.find((l) => l.key === key)

export { LINES }
