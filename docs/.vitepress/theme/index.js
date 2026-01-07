// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Layout from './layout.vue'
import './custom.css'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    // 表单处理逻辑
    if (typeof window !== 'undefined') {
      // 等待DOM加载完成
      document.addEventListener('DOMContentLoaded', function() {
        // 获取所有表单
        const forms = document.querySelectorAll('form[action*="formspree.io"]');

        forms.forEach(form => {
          form.addEventListener('submit', function(e) {
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;

            // 显示加载状态
            submitButton.textContent = '发送中...';
            submitButton.disabled = true;

            // 表单提交后恢复按钮状态
            setTimeout(() => {
              submitButton.textContent = originalText;
              submitButton.disabled = false;
            }, 3000);
          });
        });
      });
    }
  }
}