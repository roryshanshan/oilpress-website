import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Qianlong Oil Press',
  description: 'Professional hydraulic oil press manufacturer',
  themeConfig: {
    locales: {
      root: { label: 'English', lang: 'en', link: '/' },
      zh: { label: '中文', lang: 'zh-CN', link: '/zh/' },
      fr: { label: 'Français', lang: 'fr', link: '/fr/' },
      ru: { label: 'Русский', lang: 'ru', link: '/ru/' },
      bn: { label: 'বাংলা', lang: 'bn', link: '/bn/' },
      vi: { label: 'Tiếng Việt', lang: 'vi', link: '/vi/' }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Products', link: '/products/' },
      { text: 'Solutions', link: '/solutions/' },
      { text: 'Advantages', link: '/advantages/' },
      { text: 'News', link: '/news/' },
      { text: 'Contact', link: '/contact/' }
    ],
    sidebar: {
      '/products/': [
        { text: 'Product Overview', link: '/products/' },
        { text: '300 Series', link: '/products/300' },
        { text: '325 Series', link: '/products/325' },
        { text: '355 Series', link: '/products/355' },
        { text: '400 Series', link: '/products/400' },
        { text: '426 Series', link: '/products/426' },
        { text: '480 Series', link: '/products/480' },
        { text: '500 Series', link: '/products/500' }
      ],
      '/solutions/': [
        { text: 'Solutions Overview', link: '/solutions/' },
        { text: 'Oil Crops', link: '/solutions/oil-crops' },
        { text: 'Special Oils', link: '/solutions/special-oils' },
        { text: 'Seed Oils', link: '/solutions/seed-oils' }
      ]
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [{ text: 'Home', link: '/' }]
      }
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [{ text: '首页', link: '/zh/' }]
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/',
      themeConfig: {
        nav: [{ text: 'Accueil', link: '/fr/' }]
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      themeConfig: {
        nav: [{ text: 'Главная', link: '/ru/' }]
      }
    },
    bn: {
      label: 'বাংলা',
      lang: 'bn',
      link: '/bn/',
      themeConfig: {
        nav: [{ text: 'হোম', link: '/bn/' }]
      }
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi',
      link: '/vi/',
      themeConfig: {
        nav: [{ text: 'Trang chủ', link: '/vi/' }]
      }
    }
  }
})