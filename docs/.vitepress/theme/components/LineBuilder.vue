<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { useData } from 'vitepress'
import { LINES, localeFromPath, ui, tr, partHref, machineText } from './lineKit.js'

const { page } = useData()
const lang = computed(() => localeFromPath(page.value.relativePath))
const t = computed(() => ui(lang.value))
const li = ref(-1)
const ri = ref(0)
const opt = reactive({})
const tons = ref('')
const hours = ref('')

const line = computed(() => (li.value >= 0 ? LINES[li.value] : null))
const routes = computed(() => (line.value ? line.value.routes : []))
const rows = computed(() => (line.value ? routes.value[ri.value].rows : []))
const hasHotCold = computed(() => routes.value.some((r) => r.label === 'Hot press'))
const n = (k) => (routes.value.length > 1 ? k : k - 1)

const pickLine = (i) => { li.value = i; ri.value = 0; Object.keys(opt).forEach((k) => delete opt[k]) }
const pickRoute = (i) => { ri.value = i; Object.keys(opt).forEach((k) => delete opt[k]) }

const linePage = computed(() => {
  if (!line.value) return '#'
  return line.value.solution ? `/${lang.value}/solutions/${line.value.key}` : line.value.main
})

const summary = computed(() => {
  if (!line.value) return ''
  const u = t.value
  const out = [u.sumTitle, `${u.sumOil}: ${tr(lang.value, line.value.name)}`, `${u.sumRoute}: ${tr(lang.value, routes.value[ri.value].label)}`]
  if (tons.value) out.push(`${u.sumTons}: ${tons.value} t`)
  if (hours.value) out.push(`${u.sumHours}: ${hours.value} h`)
  out.push(`${u.sumMach}:`)
  rows.value.forEach((x, i) => { if (x.req || opt[i]) out.push(`- ${tr(lang.value, x.stage)}: ${machineText(lang.value, x.machine)}`) })
  return out.join('\n')
})

const quoteHref = computed(() => {
  if (!summary.value) return 'https://hydraulic-oil-press.com/contact-us/'
  return 'https://hydraulic-oil-press.com/contact-us/?line=' + encodeURIComponent(summary.value.split('\n').join(' | ').slice(0, 900)) + '#fluentform_4'
})
const waHref = computed(() => 'https://wa.me/8619906365856?text=' + encodeURIComponent(`${t.value.waHello}\n${summary.value}`))

onMounted(() => {
  const key = new URLSearchParams(window.location.search).get('line') || (window.location.hash || '').replace('#', '')
  const i = LINES.findIndex((l) => l.key === key)
  if (i >= 0) pickLine(i)
})
</script>

<template>
  <div class="lb">
    <div class="lb-step">
      <div class="lb-head"><span class="lb-num">1</span><h3>{{ t.s1 }}</h3></div>
      <div class="lb-opts">
        <button v-for="(l, i) in LINES" :key="l.key" type="button" class="lb-opt" :aria-pressed="li === i" @click="pickLine(i)">{{ tr(lang, l.name) }}</button>
      </div>
    </div>
    <div v-if="routes.length > 1" class="lb-step">
      <div class="lb-head"><span class="lb-num">2</span><h3>{{ t.s2 }}</h3></div>
      <div class="lb-opts">
        <button v-for="(r, i) in routes" :key="r.label" type="button" class="lb-opt" :aria-pressed="ri === i" @click="pickRoute(i)">{{ tr(lang, r.label) }}</button>
      </div>
      <p v-if="hasHotCold" class="lb-note">{{ t.hotcold }}</p>
    </div>
    <div class="lb-step">
      <div class="lb-head"><span class="lb-num">{{ n(3) }}</span><h3>{{ t.s3 }}</h3></div>
      <p v-if="!line" class="lb-empty">{{ t.empty }}</p>
      <template v-else>
        <ul class="lb-list">
          <li v-for="(x, i) in rows" :key="i">
            <input type="checkbox" :checked="x.req || opt[i]" :disabled="x.req" :aria-label="tr(lang, x.stage)" @change="opt[i] = $event.target.checked">
            <span class="lb-stage">{{ tr(lang, x.stage) }}</span>
            <span class="lb-mach">
              <template v-for="(p, j) in x.machine" :key="j"><a v-if="p.href" :href="partHref(lang, p.href)">{{ tr(lang, p.t) }}</a><template v-else>{{ tr(lang, p.t) }}</template></template>
              <span v-if="x.req" class="lb-tag lb-req">{{ t.req }}</span>
              <span v-else class="lb-tag lb-optl">{{ t.opt }}<template v-if="x.why"> — {{ tr(lang, x.why) }}</template></span>
              <span class="lb-does">{{ tr(lang, x.does) }}</span>
            </span>
          </li>
        </ul>
        <p class="lb-note">{{ tr(lang, line.note) }}</p>
        <p class="lb-note"><a :href="linePage">{{ t.full }} →</a></p>
      </template>
    </div>
    <div class="lb-step">
      <div class="lb-head"><span class="lb-num">{{ n(4) }}</span><h3>{{ t.s4 }}</h3></div>
      <div class="lb-scale">
        <label>{{ t.tons }}<input v-model="tons" type="number" min="0" step="0.1" placeholder="2"></label>
        <label>{{ t.hours }}<input v-model="hours" type="number" min="1" max="24" step="1" placeholder="8"></label>
      </div>
      <p class="lb-note">{{ t.scaleNote }}</p>
      <div class="lb-send">
        <a class="lb-btn" :href="quoteHref" target="_blank" rel="noopener">{{ t.send }} →</a>
        <a class="lb-btn lb-btn-outline" :href="waHref" target="_blank" rel="noopener">{{ t.wa }}</a>
      </div>
      <pre v-if="summary" class="lb-sum">{{ summary }}</pre>
    </div>
  </div>
</template>

<style scoped>
.lb{--acc:#1f6b4a}
.lb-step{padding:22px 0;border-top:1px solid var(--vp-c-divider)}
.lb-step:first-child{border-top:0}
.lb-head{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.lb-head h3{margin:0!important;font-size:20px}
.lb-num{flex:0 0 34px;height:34px;border-radius:50%;background:var(--acc);color:#fff;display:grid;place-items:center;font-weight:700}
.lb-opts{display:flex;flex-wrap:wrap;gap:8px}
.lb-opt{padding:9px 15px;border:1px solid var(--vp-c-divider);border-radius:999px;background:var(--vp-c-bg);font-size:15px;cursor:pointer}
.lb-opt[aria-pressed="true"]{background:var(--acc);border-color:var(--acc);color:#fff}
.lb-list{list-style:none;margin:0!important;padding:0!important;border:1px solid var(--vp-c-divider);border-radius:8px}
.lb-list li{display:grid;grid-template-columns:26px 150px 1fr;gap:12px;margin:0!important;padding:12px 14px;border-top:1px solid var(--vp-c-divider)}
.lb-list li:first-child{border-top:0}
.lb-list input{width:18px;height:18px;margin-top:3px;accent-color:var(--acc)}
.lb-stage{font-weight:700;font-size:14px}
.lb-does{display:block;color:var(--vp-c-text-2);font-size:14px}
.lb-tag{display:inline-block;margin-left:6px;padding:1px 8px;border-radius:999px;font-size:12px;font-weight:700}
.lb-req{background:#e3f1e9;color:var(--acc)}
.lb-optl{background:var(--vp-c-bg-soft);color:var(--vp-c-text-2);font-weight:600}
.lb-note,.lb-empty{color:var(--vp-c-text-2);font-size:15px}
.lb-scale{display:flex;flex-wrap:wrap;gap:16px}
.lb-scale label{display:flex;flex-direction:column;gap:6px;font-size:14px;color:var(--vp-c-text-2)}
.lb-scale input{width:170px;padding:9px 12px;border:1px solid var(--vp-c-divider);border-radius:8px;background:var(--vp-c-bg);font-size:16px}
.lb-send{display:flex;flex-wrap:wrap;gap:10px;margin-top:12px}
.lb-btn{display:inline-block;padding:10px 18px;border-radius:8px;background:var(--acc);color:#fff!important;font-weight:600;text-decoration:none!important}
.lb-btn-outline{background:transparent;border:1px solid var(--acc);color:var(--acc)!important}
.lb-sum{margin-top:12px;padding:12px;border-radius:8px;background:var(--vp-c-bg-soft);font-size:13px;white-space:pre-wrap}
@media (max-width:640px){.lb-list li{grid-template-columns:24px 1fr}.lb-stage,.lb-mach{grid-column:2}.lb-scale input{width:140px}}
</style>
