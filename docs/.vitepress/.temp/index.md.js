import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext, onMounted } from "vue";
import { j as useRouter } from "./Content.CEe20wpP.js";
import "@vueuse/core";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home"},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1756173814000}');
const __default__ = { name: "index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    onMounted(() => {
      const userLang = navigator.language || navigator.userLanguage;
      if (userLang.startsWith("zh")) {
        router.go("/zh/");
      } else {
        router.go("/en/");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="产品优势" tabindex="-1">产品优势 <a class="header-anchor" href="#产品优势" aria-label="Permalink to “产品优势”">​</a></h2><h3 id="高效生产" tabindex="-1">高效生产 <a class="header-anchor" href="#高效生产" aria-label="Permalink to “高效生产”">​</a></h3><ul><li>压榨效率比传统设备提高30-50%</li><li>自动化操作系统，减少人工干预</li><li>强大的连续作业能力</li></ul><h3 id="优质出油率" tabindex="-1">优质出油率 <a class="header-anchor" href="#优质出油率" aria-label="Permalink to “优质出油率”">​</a></h3><ul><li>精确压力控制，出油率最高可达95%</li><li>低温冷榨工艺，保留营养成分</li><li>适用于多种油料作物</li><li>同样支持热榨工艺，配合蒸炒工艺，出油率更高</li></ul><h2 id="适用原料" tabindex="-1">适用原料 <a class="header-anchor" href="#适用原料" aria-label="Permalink to “适用原料”">​</a></h2><ul><li>花生</li><li>大豆</li><li>茶籽</li><li>芝麻</li><li>玉米胚芽</li><li>亚麻</li><li>油菜籽</li><li>棉籽 以及其他植物油料作物和动物油籽</li></ul><h2 id="主流型号规格" tabindex="-1">主流型号规格 <a class="header-anchor" href="#主流型号规格" aria-label="Permalink to “主流型号规格”">​</a></h2><p>提供多种规格型号以满足不同需求：</p><ul><li>300/325系列</li><li>355/400系列</li><li>426/480/500系列</li></ul><h2 id="工程服务" tabindex="-1">工程服务 <a class="header-anchor" href="#工程服务" aria-label="Permalink to “工程服务”">​</a></h2><ul><li>基于CAD设计系统提供专业设计</li><li>可定制日产1-100吨的生产线</li><li>提供全方位技术支持和售后服务</li></ul><h2 id="配套设备" tabindex="-1">配套设备 <a class="header-anchor" href="#配套设备" aria-label="Permalink to “配套设备”">​</a></h2><h3 id="预处理设备" tabindex="-1">预处理设备 <a class="header-anchor" href="#预处理设备" aria-label="Permalink to “预处理设备”">​</a></h3><ul><li>葵花籽脱壳机</li><li>油料预榨机</li><li>电加热煎炒锅</li><li>蒸煮设备</li><li>高速粉碎机</li></ul><h3 id="后处理设备" tabindex="-1">后处理设备 <a class="header-anchor" href="#后处理设备" aria-label="Permalink to “后处理设备”">​</a></h3><ul><li>油品精炼设备</li><li>饼料粉碎机</li><li>滤油机</li><li>液压压饼包装机</li></ul><h2 id="联系我们" tabindex="-1">联系我们 <a class="header-anchor" href="#联系我们" aria-label="Permalink to “联系我们”">​</a></h2><p>专业的售后团队为您提供24小时服务支持，一对一培训指导。</p><div class="tip custom-block"><p class="custom-block-title">温馨提示</p><p>您的一站式油料加工基地，我们致力于为您提供最优质的榨油设备解决方案。</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
