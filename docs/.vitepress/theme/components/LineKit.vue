<script setup>
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { localeFromPath, ui, tr, partHref, lineByKey } from './lineKit.js'

const props = defineProps({ line: { type: String, required: true } })
const { page } = useData()
const lang = computed(() => localeFromPath(page.value.relativePath))
const t = computed(() => ui(lang.value))
const data = computed(() => lineByKey(props.line))
const route = ref(0)
const rows = computed(() => (data.value ? data.value.routes[route.value].rows : []))
</script>

<template>
  <section v-if="data" class="line-kit" id="line-equipment">
    <p class="lk-eyebrow">{{ t.eyebrow }}</p>
    <h2 class="lk-h2">{{ t.h2 }}</h2>
    <p class="lk-intro">{{ (data.routes.length > 1 ? t.pick + (lang === 'zh' ? '' : ' ') : '') + t.intro }}</p>
    <div v-if="data.routes.length > 1" class="lk-tabs" role="tablist">
      <button v-for="(r, i) in data.routes" :key="r.label" type="button" role="tab" :aria-selected="route === i" class="lk-tab" :class="{ on: route === i }" @click="route = i">{{ tr(lang, r.label) }}</button>
    </div>
    <div class="lk-table-wrap">
      <table class="lk-table">
        <thead><tr><th>{{ t.stage }}</th><th>{{ t.machine }}</th><th class="lk-does">{{ t.does }}</th><th>{{ t.needed }}</th></tr></thead>
        <tbody>
          <tr v-for="(x, i) in rows" :key="i">
            <td>{{ tr(lang, x.stage) }}</td>
            <td><template v-for="(p, j) in x.machine" :key="j"><a v-if="p.href" :href="partHref(lang, p.href)" :target="p.href.startsWith('@') ? null : '_blank'" :rel="p.href.startsWith('@') ? null : 'noopener'">{{ tr(lang, p.t) }}</a><template v-else>{{ tr(lang, p.t) }}</template></template></td>
            <td class="lk-does">{{ tr(lang, x.does) }}</td>
            <td><span v-if="x.req" class="lk-req">{{ t.req }}</span><span v-else class="lk-opt">{{ t.opt }}<template v-if="x.why"> — {{ tr(lang, x.why) }}</template></span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="lk-note">{{ tr(lang, data.note) }}</p>
    <div class="lk-actions">
      <a class="lk-btn" :href="`/${lang}/products/line-builder?line=${data.key}`">{{ t.toBuilder }} →</a>
      <a class="lk-btn lk-btn-outline" :href="`/${lang}/contact`">{{ t.quote }}</a>
    </div>
  </section>
</template>

<style scoped>
.line-kit{margin:28px 0;padding:22px;border:1px solid var(--vp-c-divider);border-left:3px solid #1f6b4a;border-radius:8px;background:var(--vp-c-bg-soft)}
.lk-eyebrow{margin:0;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#1f6b4a}
.lk-h2{margin:6px 0 8px!important;padding:0!important;border:0!important;font-size:22px}
.lk-intro,.lk-note{color:var(--vp-c-text-2);font-size:15px}
.lk-tabs{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0}
.lk-tab{padding:8px 16px;border:1px solid var(--vp-c-divider);border-radius:8px;background:var(--vp-c-bg);font-weight:600;cursor:pointer}
.lk-tab.on{background:#1f6b4a;border-color:#1f6b4a;color:#fff}
.lk-table-wrap{overflow-x:auto}
.lk-table{display:table;width:100%;margin:8px 0;border-collapse:collapse;font-size:15px}
.lk-table th,.lk-table td{padding:10px 12px;border:0;border-bottom:1px solid var(--vp-c-divider);text-align:left;vertical-align:top}
.lk-table tr{background:transparent!important}
.lk-req{color:#1f6b4a;font-weight:700}
.lk-opt{color:var(--vp-c-text-2)}
.lk-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}
.lk-btn{display:inline-block;padding:10px 18px;border-radius:8px;background:#1f6b4a;color:#fff!important;font-weight:600;text-decoration:none!important}
.lk-btn-outline{background:transparent;border:1px solid #1f6b4a;color:#1f6b4a!important}
@media (max-width:640px){.lk-does{display:none}.line-kit{padding:16px}}
</style>
