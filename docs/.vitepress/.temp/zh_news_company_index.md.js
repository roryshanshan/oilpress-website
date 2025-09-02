import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"公司动态","description":"","frontmatter":{},"headers":[],"relativePath":"zh/news/company/index.md","filePath":"zh/news/company/index.md","lastUpdated":null}');
const _sfc_main = { name: "zh/news/company/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="公司动态" tabindex="-1">公司动态 <a class="header-anchor" href="#公司动态" aria-label="Permalink to “公司动态”">​</a></h1><h2 id="最新动态" tabindex="-1">最新动态 <a class="header-anchor" href="#最新动态" aria-label="Permalink to “最新动态”">​</a></h2><h3 id="_2023年展会回顾" tabindex="-1">2023年展会回顾 <a class="header-anchor" href="#_2023年展会回顾" aria-label="Permalink to “2023年展会回顾”">​</a></h3><p>公司参加了2023年中国国际油料加工技术展览会，展示了最新系列液压榨油设备，获得广泛关注。</p><h3 id="新工厂落成" tabindex="-1">新工厂落成 <a class="header-anchor" href="#新工厂落成" aria-label="Permalink to “新工厂落成”">​</a></h3><p>2023年，公司新生产基地正式投入使用，生产能力提升50%，为客户提供更优质的服务。</p><h2 id="公司新闻" tabindex="-1">公司新闻 <a class="header-anchor" href="#公司新闻" aria-label="Permalink to “公司新闻”">​</a></h2><p><a href="./2023-exhibition">查看公司新闻详情</a><a href="./new-factory">查看新工厂新闻详情</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/news/company/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
