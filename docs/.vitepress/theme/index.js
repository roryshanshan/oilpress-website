// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Layout from './layout.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout
}