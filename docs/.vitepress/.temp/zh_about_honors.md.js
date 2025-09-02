import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"荣誉资质","description":"","frontmatter":{},"headers":[],"relativePath":"zh/about/honors.md","filePath":"zh/about/honors.md","lastUpdated":null}');
const _sfc_main = { name: "zh/about/honors.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="荣誉资质" tabindex="-1">荣誉资质 <a class="header-anchor" href="#荣誉资质" aria-label="Permalink to “荣誉资质”">​</a></h1><h2 id="企业资质" tabindex="-1">企业资质 <a class="header-anchor" href="#企业资质" aria-label="Permalink to “企业资质”">​</a></h2><ul><li><strong>国家高新技术企业</strong></li><li><strong>山东省专精特新中小企业</strong></li><li><strong>ISO9001质量管理体系认证</strong></li><li><strong>CE欧洲安全认证</strong></li></ul><h2 id="技术荣誉" tabindex="-1">技术荣誉 <a class="header-anchor" href="#技术荣誉" aria-label="Permalink to “技术荣誉”">​</a></h2><ul><li><strong>山东省科技进步奖</strong></li><li><strong>中国专利优秀奖</strong></li><li><strong>发明专利证书</strong> (已获授权专利20余项)</li></ul><h2 id="行业认可" tabindex="-1">行业认可 <a class="header-anchor" href="#行业认可" aria-label="Permalink to “行业认可”">​</a></h2><ul><li><strong>中国油料加工设备行业领军企业</strong></li><li><strong>山东省优秀民营企业</strong></li><li><strong>青州市纳税大户</strong></li></ul><h2 id="社会责任" tabindex="-1">社会责任 <a class="header-anchor" href="#社会责任" aria-label="Permalink to “社会责任”">​</a></h2><p>积极参与公益事业，获得&quot;优秀社会责任企业&quot;称号。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/about/honors.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const honors = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  honors as default
};
