import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"企业文化","description":"","frontmatter":{},"headers":[],"relativePath":"zh/about/culture.md","filePath":"zh/about/culture.md","lastUpdated":null}');
const _sfc_main = { name: "zh/about/culture.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="企业文化" tabindex="-1">企业文化 <a class="header-anchor" href="#企业文化" aria-label="Permalink to “企业文化”">​</a></h1><h2 id="我们的使命" tabindex="-1">我们的使命 <a class="header-anchor" href="#我们的使命" aria-label="Permalink to “我们的使命”">​</a></h2><p>秉承&quot;品质至上，客户为先&quot;的经营理念，为全球客户提供最优质的液压榨油设备解决方案。</p><h2 id="核心价值观" tabindex="-1">核心价值观 <a class="header-anchor" href="#核心价值观" aria-label="Permalink to “核心价值观”">​</a></h2><ul><li><strong>诚信</strong>: 以诚实守信为基本原则</li><li><strong>创新</strong>: 持续技术创新，引领行业发展</li><li><strong>卓越</strong>: 追求卓越品质，打造一流产品</li><li><strong>责任</strong>: 对客户负责，对社会负责</li></ul><h2 id="企业精神" tabindex="-1">企业精神 <a class="header-anchor" href="#企业精神" aria-label="Permalink to “企业精神”">​</a></h2><p>专业、创新、高效、共赢</p><h2 id="发展理念" tabindex="-1">发展理念 <a class="header-anchor" href="#发展理念" aria-label="Permalink to “发展理念”">​</a></h2><p>立足中国，面向世界，为油料加工行业提供全方位解决方案。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/about/culture.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const culture = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  culture as default
};
