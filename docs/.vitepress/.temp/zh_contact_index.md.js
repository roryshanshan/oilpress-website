import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"联系我们","description":"","frontmatter":{},"headers":[],"relativePath":"zh/contact/index.md","filePath":"zh/contact/index.md","lastUpdated":1756607155000}');
const _sfc_main = { name: "zh/contact/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="联系我们" tabindex="-1">联系我们 <a class="header-anchor" href="#联系我们" aria-label="Permalink to “联系我们”">​</a></h1><h2 id="公司地址" tabindex="-1">公司地址 <a class="header-anchor" href="#公司地址" aria-label="Permalink to “公司地址”">​</a></h2><p><strong>山东盛世赫程机械有限公司</strong><br> 地址：山东省潍坊市青州市经济开发区<br> 邮编：262500</p><h2 id="联系方式" tabindex="-1">联系方式 <a class="header-anchor" href="#联系方式" aria-label="Permalink to “联系方式”">​</a></h2><h3 id="gavin-lee-销售总监" tabindex="-1">Gavin Lee - 销售总监 <a class="header-anchor" href="#gavin-lee-销售总监" aria-label="Permalink to “Gavin Lee - 销售总监”">​</a></h3><ul><li>📱 微信：+8619906365856</li><li>📱 WhatsApp：+8619906365856</li><li>📧 邮箱：roryshanshan@gmail.com</li><li>📧 商务：gavin@oil-pressing-machine.com</li></ul><h2 id="公司地址-1" tabindex="-1">公司地址 <a class="header-anchor" href="#公司地址-1" aria-label="Permalink to “公司地址”">​</a></h2><p><strong>山东盛世赫程机械有限公司</strong><br> 地址：山东省潍坊市青州市开发区益能街5888号<br> 邮编：262500</p><h2 id="在线留言" tabindex="-1">在线留言 <a class="header-anchor" href="#在线留言" aria-label="Permalink to “在线留言”">​</a></h2><p>如果您有任何问题或需求，请填写以下表单，我们将尽快与您联系。</p><div class="contact-form"><form action="https://formspree.io/f/xblaoewy" method="POST"><div class="form-group"><label for="name">姓名</label><input type="text" id="name" name="name" placeholder="请输入您的姓名" required></div><div class="form-group"><label for="company">公司名称</label><input type="text" id="company" name="company" placeholder="请输入您的公司名称"></div><div class="form-group"><label for="phone">联系电话</label><input type="tel" id="phone" name="phone" placeholder="请输入您的联系电话" required></div><div class="form-group"><label for="email">电子邮箱</label><input type="email" id="email" name="email" placeholder="请输入您的电子邮箱" required></div><div class="form-group"><label for="message">留言内容</label><textarea id="message" name="message" rows="5" placeholder="请输入您的留言内容" required></textarea></div><input type="hidden" name="_subject" value="联系我们页面留言"><input type="hidden" name="_next" value="/zh/contact/"><div class="form-group"><button type="submit">提交留言</button></div></form></div><h2 id="交通指南" tabindex="-1">交通指南 <a class="header-anchor" href="#交通指南" aria-label="Permalink to “交通指南”">​</a></h2><h3 id="自驾路线" tabindex="-1">自驾路线 <a class="header-anchor" href="#自驾路线" aria-label="Permalink to “自驾路线”">​</a></h3><ul><li>从济南方向：沿京台高速（G3）行驶，在青州出口下高速，沿青州大道行驶约10公里至经济开发区。</li><li>从青岛方向：沿济青高速（G20）行驶，转入潍日高速（S16），在青州出口下高速，沿青州大道行驶约10公里至经济开发区。</li></ul><h3 id="公共交通" tabindex="-1">公共交通 <a class="header-anchor" href="#公共交通" aria-label="Permalink to “公共交通”">​</a></h3><ul><li>火车：在青州站下车，乘坐出租车约15分钟可到达公司。</li><li>飞机：在济南遥墙国际机场或青岛流亭国际机场下机，可乘坐机场大巴至青州，再转乘出租车前往公司。</li></ul><div class="tip custom-block"><p class="custom-block-title">参观预约</p><p>欢迎您前来参观考察，为了更好地接待您，建议提前3天预约。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("zh/contact/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
