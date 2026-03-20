import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'
import BackToTop from './components/BackToTop.vue'
import FloatingWhatsApp from './components/FloatingWhatsApp.vue'

// 预加载关键资源
if (typeof window !== 'undefined') {
  // 预连接到外部域名
  const preconnectDomains = [
    'https://www.googletagmanager.com',
    'https://embed.tawk.to',
    'https://www.youtube.com'
  ]

  preconnectDomains.forEach(domain => {
    const link = document.createElement('link')
    link.rel = 'preconnect'
    link.href = domain
    document.head.appendChild(link)
  })
}

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h('div', null, [h(BackToTop), h(FloatingWhatsApp)])
    })
  }
}
