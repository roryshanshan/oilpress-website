import DefaultTheme from 'vitepress/theme'
import Layout from './layout.vue'
import './custom.css'
import LineKit from './components/LineKit.vue'
import LineBuilder from './components/LineBuilder.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('LineKit', LineKit)
    app.component('LineBuilder', LineBuilder)
  }
}
