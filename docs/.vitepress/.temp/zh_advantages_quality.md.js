import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"质量保证","description":"","frontmatter":{},"headers":[],"relativePath":"zh/advantages/quality.md","filePath":"zh/advantages/quality.md","lastUpdated":null}');
const _sfc_main = { name: "zh/advantages/quality.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="质量保证" tabindex="-1">质量保证 <a class="header-anchor" href="#质量保证" aria-label="Permalink to “质量保证”">​</a></h1><h2 id="质量管理体系" tabindex="-1">质量管理体系 <a class="header-anchor" href="#质量管理体系" aria-label="Permalink to “质量管理体系”">​</a></h2><p>公司通过ISO9001质量管理体系认证，建立完善的质量控制体系。</p><h3 id="原材料管控" tabindex="-1">原材料管控 <a class="header-anchor" href="#原材料管控" aria-label="Permalink to “原材料管控”">​</a></h3><ul><li>选用高强度合金钢材料</li><li>关键部件采用进口轴承和密封件</li><li>所有材料均经过严格的进厂检验</li></ul><h3 id="生产过程控制" tabindex="-1">生产过程控制 <a class="header-anchor" href="#生产过程控制" aria-label="Permalink to “生产过程控制”">​</a></h3><ul><li>关键工序100%检验</li><li>设备精度检测达到微米级</li><li>自动化生产线确保产品一致性</li></ul><h3 id="成品检验" tabindex="-1">成品检验 <a class="header-anchor" href="#成品检验" aria-label="Permalink to “成品检验”">​</a></h3><ul><li>压力测试：确保工作压力稳定可靠</li><li>性能测试：验证出油率和生产效率</li><li>安全测试：确保设备运行安全</li></ul><h2 id="质量承诺" tabindex="-1">质量承诺 <a class="header-anchor" href="#质量承诺" aria-label="Permalink to “质量承诺”">​</a></h2><ul><li><strong>保修期</strong>: 设备保修期为2年</li><li><strong>终身维护</strong>: 提供终身技术支持</li><li><strong>质量追溯</strong>: 每台设备都有唯一序列号</li></ul><h2 id="客户见证" tabindex="-1">客户见证 <a class="header-anchor" href="#客户见证" aria-label="Permalink to “客户见证”">​</a></h2><p>我们的产品质量获得国内外客户的一致好评，返修率低于0.5%。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/advantages/quality.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quality = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quality as default
};
