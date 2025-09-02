import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"技术创新","description":"","frontmatter":{},"headers":[],"relativePath":"zh/advantages/innovation.md","filePath":"zh/advantages/innovation.md","lastUpdated":null}');
const _sfc_main = { name: "zh/advantages/innovation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="技术创新" tabindex="-1">技术创新 <a class="header-anchor" href="#技术创新" aria-label="Permalink to “技术创新”">​</a></h1><h2 id="核心技术优势" tabindex="-1">核心技术优势 <a class="header-anchor" href="#核心技术优势" aria-label="Permalink to “核心技术优势”">​</a></h2><h3 id="智能化控制系统" tabindex="-1">智能化控制系统 <a class="header-anchor" href="#智能化控制系统" aria-label="Permalink to “智能化控制系统”">​</a></h3><ul><li>采用PLC可编程控制器，实现自动化生产</li><li>触摸屏操作界面，操作简便直观</li><li>实时监控生产数据，智能故障诊断</li></ul><h3 id="精密压力控制技术" tabindex="-1">精密压力控制技术 <a class="header-anchor" href="#精密压力控制技术" aria-label="Permalink to “精密压力控制技术”">​</a></h3><ul><li>伺服电机驱动，压力控制精度达到0.1MPa</li><li>自动压力调节，根据物料特性优化压榨参数</li><li>多段式压榨工艺，提高出油率</li></ul><h3 id="节能环保设计" tabindex="-1">节能环保设计 <a class="header-anchor" href="#节能环保设计" aria-label="Permalink to “节能环保设计”">​</a></h3><ul><li>变频调速技术，降低能耗30%</li><li>低温冷榨工艺，保留营养成分</li><li>零污染生产，符合绿色制造标准</li></ul><h2 id="研发投入" tabindex="-1">研发投入 <a class="header-anchor" href="#研发投入" aria-label="Permalink to “研发投入”">​</a></h2><p>公司每年将销售收入的8%投入技术研发，拥有独立的研发中心和实验基地。</p><h2 id="专利技术" tabindex="-1">专利技术 <a class="header-anchor" href="#专利技术" aria-label="Permalink to “专利技术”">​</a></h2><p>已获得发明专利20余项，实用新型专利50余项，软件著作权10余项。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/advantages/innovation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const innovation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  innovation as default
};
