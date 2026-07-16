<template>
  <section class="filling-series-directory" aria-labelledby="filling-series-heading">
    <header>
      <span>{{ t.filling }}</span>
      <h2 id="filling-series-heading">{{ t.fillingLines }}</h2>
      <p>{{ t.planLineText }}</p>
    </header>
    <nav :aria-label="t.fillingLines">
      <a v-for="(item, index) in items" :key="item.href" :href="item.href">
        <small>{{ String(index + 1).padStart(2, '0') }}</small>
        <strong>{{ item.label }}</strong>
        <span>{{ t.view }} <span aria-hidden="true">→</span></span>
      </a>
    </nav>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import {
  fillingCategoryOrder,
  getLocaleCopy,
  getLocaleFromPath,
  localizedPath,
  sectionLabels
} from '../navigation-data.js'

const route = useRoute()
const locale = computed(() => getLocaleFromPath(route.path))
const t = computed(() => getLocaleCopy(locale.value))
const items = computed(() => {
  const labels = sectionLabels(locale.value)
  return fillingCategoryOrder.map((category) => ({
    label: category === 'filling' ? t.value.filling : labels[category],
    href: localizedPath(locale.value, `/solutions/${category}/`)
  }))
})
</script>

<style scoped>
.filling-series-directory{margin:0 0 30px;padding:24px;border:1px solid var(--vp-c-divider);border-left:4px solid #d89a2b;border-radius:6px;background:#f7f9f7}
.filling-series-directory header{max-width:760px;margin-bottom:18px}
.filling-series-directory header>span{display:block;margin-bottom:6px;color:#0d6547;font-size:12px;font-weight:800;text-transform:uppercase}
.filling-series-directory h2{margin:0 0 8px;font-size:24px;line-height:1.25}
.filling-series-directory p{margin:0;color:var(--vp-c-text-2);font-size:15px}
.filling-series-directory nav{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
.filling-series-directory a{display:grid;grid-template-columns:32px minmax(0,1fr) auto;gap:10px;align-items:center;min-height:54px;padding:10px 12px;border:1px solid #dbe3dd;border-radius:5px;background:var(--vp-c-bg);color:var(--vp-c-text-1);text-decoration:none}
.filling-series-directory a:hover,.filling-series-directory a:focus-visible{border-color:#0d6547;color:#0d6547}
.filling-series-directory small{color:#8a5f18;font-weight:800}
.filling-series-directory strong{min-width:0;font-size:14px;line-height:1.3}
.filling-series-directory a>span{color:#0d6547;font-size:12px;font-weight:700;white-space:nowrap}
@media(max-width:700px){.filling-series-directory{padding:18px}.filling-series-directory nav{grid-template-columns:1fr}.filling-series-directory a{grid-template-columns:28px minmax(0,1fr) auto}}
</style>
