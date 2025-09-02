import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"团队介绍","description":"","frontmatter":{},"headers":[],"relativePath":"zh/about/team.md","filePath":"zh/about/team.md","lastUpdated":null}');
const _sfc_main = { name: "zh/about/team.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="团队介绍" tabindex="-1">团队介绍 <a class="header-anchor" href="#团队介绍" aria-label="Permalink to “团队介绍”">​</a></h1><h2 id="领导团队" tabindex="-1">领导团队 <a class="header-anchor" href="#领导团队" aria-label="Permalink to “领导团队”">​</a></h2><h3 id="gavin-lee-销售总监" tabindex="-1">Gavin Lee - 销售总监 <a class="header-anchor" href="#gavin-lee-销售总监" aria-label="Permalink to “Gavin Lee - 销售总监”">​</a></h3><p>拥有15年油料加工设备行业经验，精通国际贸易和客户关系管理。毕业于山东大学工商管理专业。</p><p><strong>联系方式:</strong></p><ul><li>📱 微信/WhatsApp: +8619906365856</li><li>📧 邮箱: <a href="mailto:gavin@oil-pressing-machine.com" target="_blank" rel="noreferrer">gavin@oil-pressing-machine.com</a></li></ul><h2 id="技术团队" tabindex="-1">技术团队 <a class="header-anchor" href="#技术团队" aria-label="Permalink to “技术团队”">​</a></h2><h3 id="资深工程师团队" tabindex="-1">资深工程师团队 <a class="header-anchor" href="#资深工程师团队" aria-label="Permalink to “资深工程师团队”">​</a></h3><p>公司拥有一支经验丰富的工程师团队，平均从业经验超过10年。主要成员包括：</p><ul><li><strong>机械设计工程师</strong>: 负责设备结构设计和优化</li><li><strong>电气自动化工程师</strong>: 负责控制系统开发</li><li><strong>工艺工程师</strong>: 负责生产工艺改进</li><li><strong>质量工程师</strong>: 负责产品质量控制</li></ul><h2 id="销售服务团队" tabindex="-1">销售服务团队 <a class="header-anchor" href="#销售服务团队" aria-label="Permalink to “销售服务团队”">​</a></h2><h3 id="专业销售团队" tabindex="-1">专业销售团队 <a class="header-anchor" href="#专业销售团队" aria-label="Permalink to “专业销售团队”">​</a></h3><p>遍布全国各地的销售服务团队，为客户提供及时的技术支持和售后服务。</p><h3 id="海外市场团队" tabindex="-1">海外市场团队 <a class="header-anchor" href="#海外市场团队" aria-label="Permalink to “海外市场团队”">​</a></h3><p>专职海外市场开发团队，熟悉国际贸易法规和客户需求。</p><h2 id="企业文化" tabindex="-1">企业文化 <a class="header-anchor" href="#企业文化" aria-label="Permalink to “企业文化”">​</a></h2><p>我们注重人才培养，定期开展技术培训和团队建设活动，打造学习型组织。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/about/team.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const team = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  team as default
};
