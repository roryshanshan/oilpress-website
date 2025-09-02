import { usePreferredDark, useDark, tryOnUnmounted } from "@vueuse/core";
import { shallowRef, readonly, inject, computed, ref, watch, reactive, markRaw, nextTick, defineComponent, h } from "vue";
function deserializeFunctions(r) {
  return Array.isArray(r) ? r.map(deserializeFunctions) : typeof r == "object" && r !== null ? Object.keys(r).reduce((t, n) => (t[n] = deserializeFunctions(r[n]), t), {}) : typeof r == "string" && r.startsWith("_vp-fn_") ? new Function(`return ${r.slice(7)}`)() : r;
}
const siteData = deserializeFunctions(JSON.parse('{"lang":"en-US","dir":"ltr","title":"Shengshi Hecheng Oil Press","description":"Professional Oil Press Manufacturer","base":"/","head":[],"router":{"prefetchLinks":true},"appearance":true,"themeConfig":{"socialLinks":[]},"locales":{"root":{"lang":"en"},"zh":{"label":"简体中文","lang":"zh-CN","title":"盛世赫程液压榨油机","description":"专业的榨油设备制造商","themeConfig":{"nav":[{"text":"首页","link":"/zh/"},{"text":"产品系列","link":"/zh/products/"},{"text":"解决方案","link":"/zh/solutions/"},{"text":"公司优势","link":"/zh/advantages/"},{"text":"新闻资讯","link":"/zh/news/"},{"text":"关于我们","link":"/zh/about/"},{"text":"联系我们","link":"/zh/contact/"}],"sidebar":{"/zh/products/":[{"text":"产品系列","collapsed":false,"items":[{"text":"产品概览","link":"/zh/products/"},{"text":"300/325系列","collapsed":true,"items":[{"text":"系列概述","link":"/zh/products/300-325"},{"text":"300型椰汁压榨机","link":"/zh/products/300-coconut"},{"text":"325型母子双桶榨油机","link":"/zh/products/325-double-barrel"},{"text":"325型扩展双桶榨油机","link":"/zh/products/325-extended-double"},{"text":"325型芝麻专用榨油机","link":"/zh/products/325-sesame"},{"text":"325型标准单桶榨油机","link":"/zh/products/325-standard"},{"text":"325型特大顶饼榨油机","link":"/zh/products/325-large-cake"}]},{"text":"355/400系列","collapsed":true,"items":[{"text":"系列概述","link":"/zh/products/355-400"},{"text":"355型扩展双桶榨油机","link":"/zh/products/355-double"},{"text":"400型工业级榨油机","link":"/zh/products/400-industrial"}]},{"text":"426/480/500系列","collapsed":true,"items":[{"text":"系列概述","link":"/zh/products/426-480-500"},{"text":"426型大型工业榨油机","link":"/zh/products/426-large"},{"text":"480型超大型工业榨油机","link":"/zh/products/480-xlarge"},{"text":"500型特大型工业榨油机","link":"/zh/products/500-xxlarge"}]},{"text":"配套设备","collapsed":true,"items":[{"text":"设备概述","link":"/zh/products/supporting"},{"text":"预处理设备","link":"/zh/products/pretreatment"},{"text":"后处理设备","link":"/zh/products/posttreatment"}]}]}],"/zh/solutions/":[{"text":"解决方案","collapsed":false,"items":[{"text":"方案概览","link":"/zh/solutions/"},{"text":"按油料类型","collapsed":true,"items":[{"text":"🌾 粮油类（种子类）","collapsed":true,"items":[{"text":"粮油类概述","link":"/zh/solutions/seed-oils"},{"text":"🌱 大豆（豆油）","link":"/zh/solutions/soybean"},{"text":"🥜 花生（花生油）","link":"/zh/solutions/peanut"},{"text":"🌰 芝麻（芝麻油）","link":"/zh/solutions/sesame"},{"text":"🌿 油菜籽（菜籽油）","link":"/zh/solutions/rapeseed"},{"text":"🌻 向日葵籽（葵花籽油）","link":"/zh/solutions/sunflower"},{"text":"🧵 棉籽（棉籽油）","link":"/zh/solutions/cottonseed"},{"text":"🌾 亚麻籽（亚麻籽油）","link":"/zh/solutions/flaxseed"},{"text":"🍵 茶籽（茶籽油）","link":"/zh/solutions/tea-seed"},{"text":"🌱 苏子（苏子油）","link":"/zh/solutions/perilla"}]},{"text":"🥜 坚果类","collapsed":true,"items":[{"text":"坚果类概述","link":"/zh/solutions/nuts"},{"text":"🥥 椰子（椰子油）","link":"/zh/solutions/coconut"},{"text":"🌴 棕榈（棕榈油）","link":"/zh/solutions/palm"},{"text":"🥜 核桃（核桃油）","link":"/zh/solutions/walnut"},{"text":"🌰 杏仁（杏仁油）","link":"/zh/solutions/almond"},{"text":"🌰 榛子（榛子油）","link":"/zh/solutions/hazelnut"},{"text":"🥜 腰果（腰果油）","link":"/zh/solutions/cashew"},{"text":"🥜 开心果（开心果油）","link":"/zh/solutions/pistachio"}]},{"text":"🥑 果实类","collapsed":true,"items":[{"text":"果实类概述","link":"/zh/solutions/fruits"},{"text":"🥑 鳄梨（牛油果油）","link":"/zh/solutions/avocado"},{"text":"🍇 葡萄籽（葡萄籽油）","link":"/zh/solutions/grape-seed"},{"text":"🎃 南瓜籽（南瓜籽油）","link":"/zh/solutions/pumpkin-seed"},{"text":"🍉 西瓜籽（西瓜籽油）","link":"/zh/solutions/watermelon-seed"},{"text":"🍑 桃核仁（核仁油）","link":"/zh/solutions/peach-kernel"},{"text":"🌰 杏核仁（核仁油）","link":"/zh/solutions/apricot-kernel"}]},{"text":"⚙️ 其他特殊油料","collapsed":true,"items":[{"text":"特殊油料概述","link":"/zh/solutions/special-oils"},{"text":"🍚 米糠（米糠油）","link":"/zh/solutions/rice-bran"},{"text":"🌽 玉米胚芽（玉米油）","link":"/zh/solutions/corn-germ"},{"text":"🌿 蓖麻籽（蓖麻油）","link":"/zh/solutions/castor-seed"},{"text":"🌶️ 辣椒籽（辣椒籽油）","link":"/zh/solutions/chili-seed"},{"text":"🍇 葡萄籽（葡萄籽油）","link":"/zh/solutions/grape-seed"},{"text":"🌾 荞麦籽（荞麦油）","link":"/zh/solutions/buckwheat"}]}]},{"text":"按规模分类","collapsed":true,"items":[{"text":"🏠 小型榨油坊方案","link":"/zh/solutions/small-workshop"},{"text":"🏭 中型油厂方案","link":"/zh/solutions/medium-factory"},{"text":"🏢 大型工业化方案","link":"/zh/solutions/large-industrial"},{"text":"🔬 特种油料加工方案","link":"/zh/solutions/special-oil"}]}]}],"/zh/about/":[{"text":"关于我们","collapsed":false,"items":[{"text":"公司简介","link":"/zh/about/"},{"text":"企业文化","link":"/zh/about/culture"},{"text":"发展历程","link":"/zh/about/history"},{"text":"荣誉资质","link":"/zh/about/honors"},{"text":"团队介绍","link":"/zh/about/team"}]}],"/zh/advantages/":[{"text":"公司优势","collapsed":false,"items":[{"text":"优势概览","link":"/zh/advantages/"},{"text":"技术创新","link":"/zh/advantages/innovation"},{"text":"质量保证","link":"/zh/advantages/quality"},{"text":"服务支持","link":"/zh/advantages/service"},{"text":"成功案例","link":"/zh/advantages/cases"}]}],"/zh/news/":[{"text":"新闻资讯","collapsed":false,"items":[{"text":"新闻中心","link":"/zh/news/"},{"text":"公司动态","link":"/zh/news/company"},{"text":"行业资讯","link":"/zh/news/industry"},{"text":"技术知识","link":"/zh/news/technology"}]}]},"footer":{"message":"专业制造 · 值得信赖","copyright":"© 2025 山东盛世赫程机械有限公司"}}},"en":{"label":"English","lang":"en-US","title":"Shengshi Hecheng Oil Press","description":"Professional Oil Press Manufacturer","themeConfig":{"nav":[{"text":"Home","link":"/"},{"text":"Products","link":"/products/"},{"text":"Solutions","link":"/solutions/"},{"text":"Advantages","link":"/advantages/"},{"text":"News","link":"/news/"},{"text":"About","link":"/about/"},{"text":"Contact","link":"/contact/"}],"sidebar":{"/products/":[{"text":"Products","collapsed":false,"items":[{"text":"Overview","link":"/en/products/"},{"text":"300/325 Series","collapsed":true,"items":[{"text":"Series Overview","link":"/en/products/300-325"},{"text":"300 Coconut Press","link":"/en/products/300-coconut"},{"text":"325 Double Barrel Press","link":"/en/products/325-double-barrel"},{"text":"325 Extended Double Press","link":"/en/products/325-extended-double"},{"text":"325 Sesame Special Press","link":"/en/products/325-sesame"},{"text":"325 Standard Press","link":"/en/products/325-standard"},{"text":"325 Large Cake Press","link":"/en/products/325-large-cake"}]},{"text":"355/400 Series","collapsed":true,"items":[{"text":"Series Overview","link":"/en/products/355-400"},{"text":"355 Extended Double Press","link":"/en/products/355-double"},{"text":"400 Industrial Press","link":"/en/products/400-industrial"}]},{"text":"425/480 Series","collapsed":true,"items":[{"text":"Series Overview","link":"/en/products/425-480"},{"text":"425 Large Industrial Press","link":"/en/products/425-large"},{"text":"480 Extra Large Press","link":"/en/products/480-xlarge"}]},{"text":"Supporting Equipment","collapsed":true,"items":[{"text":"Equipment Overview","link":"/en/products/supporting"},{"text":"Pre-treatment Equipment","link":"/en/products/pretreatment"},{"text":"Post-treatment Equipment","link":"/en/products/posttreatment"}]}]}],"/solutions/":[{"text":"Solutions","collapsed":false,"items":[{"text":"Overview","link":"/en/solutions/"},{"text":"By Oil Material Type","collapsed":true,"items":[{"text":"🌾 Seed Oils","collapsed":true,"items":[{"text":"Seed Oils Overview","link":"/en/solutions/seed-oils"},{"text":"🌱 Soybean (Soybean Oil)","link":"/en/solutions/soybean"},{"text":"🥜 Peanut (Peanut Oil)","link":"/en/solutions/peanut"},{"text":"🌰 Sesame (Sesame Oil)","link":"/en/solutions/sesame"},{"text":"🌿 Rapeseed (Rapeseed Oil)","link":"/en/solutions/rapeseed"},{"text":"🌻 Sunflower Seed (Sunflower Oil)","link":"/en/solutions/sunflower"},{"text":"🧵 Cottonseed (Cottonseed Oil)","link":"/en/solutions/cottonseed"},{"text":"🌾 Flaxseed (Flaxseed Oil)","link":"/en/solutions/flaxseed"},{"text":"🍵 Tea Seed (Tea Seed Oil)","link":"/en/solutions/tea-seed"},{"text":"🌱 Perilla Seed (Perilla Oil)","link":"/en/solutions/perilla"}]},{"text":"🥜 Nut Oils","collapsed":true,"items":[{"text":"Nut Oils Overview","link":"/en/solutions/nuts"},{"text":"🥥 Coconut (Coconut Oil)","link":"/en/solutions/coconut"},{"text":"🌴 Palm (Palm Oil)","link":"/en/solutions/palm"},{"text":"🥜 Walnut (Walnut Oil)","link":"/en/solutions/walnut"},{"text":"🌰 Almond (Almond Oil)","link":"/en/solutions/almond"},{"text":"🌰 Hazelnut (Hazelnut Oil)","link":"/en/solutions/hazelnut"},{"text":"🥜 Cashew (Cashew Oil)","link":"/en/solutions/cashew"},{"text":"🥜 Pistachio (Pistachio Oil)","link":"/en/solutions/pistachio"}]},{"text":"🥑 Fruit Oils","collapsed":true,"items":[{"text":"Fruit Oils Overview","link":"/en/solutions/fruits"},{"text":"🥑 Avocado (Avocado Oil)","link":"/en/solutions/avocado"},{"text":"🍇 Grape Seed (Grape Seed Oil)","link":"/en/solutions/grape-seed"},{"text":"🎃 Pumpkin Seed (Pumpkin Seed Oil)","link":"/en/solutions/pumpkin-seed"},{"text":"🍉 Watermelon Seed (Watermelon Seed Oil)","link":"/en/solutions/watermelon-seed"},{"text":"🍑 Peach Kernel (Kernel Oil)","link":"/en/solutions/peach-kernel"},{"text":"🌰 Apricot Kernel (Kernel Oil)","link":"/en/solutions/apricot-kernel"}]},{"text":"⚙️ Special Oils","collapsed":true,"items":[{"text":"Special Oils Overview","link":"/en/solutions/special-oils"},{"text":"🍚 Rice Bran (Rice Bran Oil)","link":"/en/solutions/rice-bran"},{"text":"🌽 Corn Germ (Corn Oil)","link":"/en/solutions/corn-germ"},{"text":"🌿 Castor Seed (Castor Oil)","link":"/en/solutions/castor-seed"},{"text":"🌶️ Chili Seed (Chili Seed Oil)","link":"/en/solutions/chili-seed"},{"text":"🍇 Grape Seed (Grape Seed Oil)","link":"/en/solutions/grape-seed"},{"text":"🌾 Buckwheat (Buckwheat Oil)","link":"/en/solutions/buckwheat"}]}]},{"text":"By Scale","collapsed":true,"items":[{"text":"🏠 Small Workshop Solution","link":"/en/solutions/small-workshop"},{"text":"🏭 Medium Factory Solution","link":"/en/solutions/medium-factory"},{"text":"🏢 Large Industrial Solution","link":"/en/solutions/large-industrial"},{"text":"🔬 Special Oil Processing","link":"/en/solutions/special-oil"}]}]}],"/about/":[{"text":"About Us","collapsed":false,"items":[{"text":"Company Profile","link":"/en/about/"},{"text":"Corporate Culture","link":"/en/about/culture"},{"text":"Development History","link":"/en/about/history"},{"text":"Honors & Certifications","link":"/en/about/honors"},{"text":"Our Team","link":"/en/about/team"}]}],"/advantages/":[{"text":"Our Advantages","collapsed":false,"items":[{"text":"Overview","link":"/en/advantages/"},{"text":"Technical Innovation","link":"/en/advantages/innovation"},{"text":"Quality Assurance","link":"/en/advantages/quality"},{"text":"Service Support","link":"/en/advantages/service"},{"text":"Success Cases","link":"/en/advantages/cases"}]}],"/news/":[{"text":"News","collapsed":false,"items":[{"text":"News Center","link":"/en/news/"},{"text":"Company News","link":"/en/news/company"},{"text":"Industry News","link":"/en/news/industry"},{"text":"Technical Knowledge","link":"/en/news/technology"}]}]},"footer":{"message":"Professional Manufacturing · Trustworthy Quality","copyright":"© 2025 Shandong Shengshi Hecheng Machinery Co., Ltd"}}}},"scrollOffset":134,"cleanUrls":true,"additionalConfig":{}}'));
const __vite_import_meta_env__ = {};
const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const UnpackStackView = Symbol("stack-view:unpack");
const HASH_RE = /#.*$/;
const HASH_OR_QUERY_RE = /[?#].*$/;
const INDEX_OR_EXT_RE = /(?:(^|\/)index)?\.(?:md|html)$/;
const inBrowser = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "404.md",
  filePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0,
  isNotFound: true
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_OR_QUERY_RE, "").replace(INDEX_OR_EXT_RE, "$1");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function getLocaleForPath(siteData2, relativePath) {
  return Object.keys(siteData2?.locales || {}).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `^/${key}/`, true)) || "root";
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  const localeIndex = getLocaleForPath(siteData2, relativePath);
  const { label, link, ...localeConfig } = siteData2.locales[localeIndex] ?? {};
  Object.assign(localeConfig, { localeIndex });
  const additionalConfigs = resolveAdditionalConfig(siteData2, relativePath);
  const topLayer = {
    head: mergeHead(siteData2.head ?? [], localeConfig.head ?? [], ...additionalConfigs.map((data) => data.head ?? []).reverse())
  };
  return stackView(topLayer, ...additionalConfigs, localeConfig, siteData2);
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  if (title === templateString.slice(3)) {
    return title;
  }
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function mergeHead(...headArrays) {
  const merged = [];
  const metaKeyMap = /* @__PURE__ */ new Map();
  for (const current of headArrays) {
    for (const tag of current) {
      const [type, attrs] = tag;
      const keyAttr = Object.entries(attrs)[0];
      if (type !== "meta" || !keyAttr) {
        merged.push(tag);
        continue;
      }
      const key = `${keyAttr[0]}=${keyAttr[1]}`;
      const existingIndex = metaKeyMap.get(key);
      if (existingIndex != null) {
        merged[existingIndex] = tag;
      } else {
        metaKeyMap.set(key, merged.length);
        merged.push(tag);
      }
    }
  }
  return merged;
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const KNOWN_EXTENSIONS = /* @__PURE__ */ new Set();
function treatAsHtml(filename) {
  if (KNOWN_EXTENSIONS.size === 0) {
    const extraExts = typeof process === "object" && process.env?.VITE_EXTRA_EXTENSIONS || __vite_import_meta_env__?.VITE_EXTRA_EXTENSIONS || "";
    ("3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip" + (extraExts && typeof extraExts === "string" ? "," + extraExts : "")).split(",").forEach((ext2) => KNOWN_EXTENSIONS.add(ext2));
  }
  const ext = filename.split(".").pop();
  return ext == null || !KNOWN_EXTENSIONS.has(ext.toLowerCase());
}
function resolveAdditionalConfig({ additionalConfig }, path) {
  if (additionalConfig === void 0)
    return [];
  if (typeof additionalConfig === "function")
    return additionalConfig(path) ?? [];
  const configs = [];
  const segments = path.split("/").slice(0, -1);
  while (segments.length) {
    const key = `/${segments.join("/")}/`;
    configs.push(additionalConfig[key]);
    segments.pop();
  }
  configs.push(additionalConfig["/"]);
  return configs.filter((config) => config !== void 0);
}
function stackView(..._layers) {
  const layers = _layers.filter((layer) => isObject(layer));
  if (layers.length <= 1)
    return _layers[0];
  const allKeys = new Set(layers.flatMap((layer) => Reflect.ownKeys(layer)));
  const allKeysArray = [...allKeys];
  return new Proxy({}, {
    // TODO: optimize for performance, this is a hot path
    get(_, prop) {
      if (prop === UnpackStackView)
        return layers;
      return stackView(...layers.map((layer) => layer[prop]).filter((v) => v !== void 0));
    },
    set() {
      throw new Error("StackView is read-only and cannot be mutated.");
    },
    has(_, prop) {
      return allKeys.has(prop);
    },
    ownKeys() {
      return allKeysArray;
    },
    getOwnPropertyDescriptor(_, prop) {
      for (const layer of layers) {
        const descriptor = Object.getOwnPropertyDescriptor(layer, prop);
        if (descriptor)
          return descriptor;
      }
    }
  });
}
stackView.unpack = function(obj) {
  return obj?.[UnpackStackView];
};
function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(readonly(siteData));
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  const appearance = site.value.appearance;
  const isDark = appearance === "force-dark" ? ref(true) : appearance === "force-auto" ? usePreferredDark() : appearance ? useDark({
    storageKey: APPEARANCE_KEY,
    initialValue: () => appearance === "dark" ? "dark" : "auto",
    ...typeof appearance === "object" ? appearance : {}
  }) : ref(false);
  const hashRef = ref(inBrowser ? location.hash : "");
  if (inBrowser) {
    window.addEventListener("hashchange", () => {
      hashRef.value = location.hash;
    });
  }
  watch(() => route.data, () => {
    hashRef.value = inBrowser ? location.hash : "";
  });
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    params: computed(() => route.data.params),
    lang: computed(() => site.value.lang),
    dir: computed(() => route.data.frontmatter.dir || site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => createTitle(site.value, route.data)),
    description: computed(() => route.data.description || site.value.description),
    isDark,
    hash: computed(() => hashRef.value)
  };
}
function useData() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base, path) {
  return `${base}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || !path.startsWith("/") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser) {
      const base = "/";
      pagePath = sanitizeFileName(pagePath.slice(base.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      if (!pageHash)
        return null;
      pagePath = `${base}${"assets"}/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
let contentUpdatedCallbacks = [];
function onContentUpdated(fn) {
  contentUpdatedCallbacks.push(fn);
  tryOnUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((f) => f !== fn);
  });
}
function getScrollOffset() {
  let scrollOffset = siteDataRef.value.scrollOffset;
  let offset = 0;
  let padding = 24;
  if (typeof scrollOffset === "object" && "padding" in scrollOffset) {
    padding = scrollOffset.padding;
    scrollOffset = scrollOffset.selector;
  }
  if (typeof scrollOffset === "number") {
    offset = scrollOffset;
  } else if (typeof scrollOffset === "string") {
    offset = tryOffsetSelector(scrollOffset, padding);
  } else if (Array.isArray(scrollOffset)) {
    for (const selector of scrollOffset) {
      const res = tryOffsetSelector(selector, padding);
      if (res) {
        offset = res;
        break;
      }
    }
  }
  return offset;
}
function tryOffsetSelector(selector, padding) {
  const el = document.querySelector(selector);
  if (!el)
    return 0;
  const bot = el.getBoundingClientRect().bottom;
  if (bot < 0)
    return 0;
  return bot + padding;
}
const RouterSymbol = Symbol();
const fakeHost = "http://a.com";
const getDefaultRoute = () => ({
  path: "/",
  hash: "",
  query: "",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    async go(href, options) {
      href = normalizeHref(href);
      if (await router.onBeforeRouteChange?.(href) === false)
        return;
      if (!inBrowser || await changeRoute(href, options))
        await loadPage(href);
      syncRouteQueryAndHash();
      await router.onAfterRouteChange?.(href);
    }
  };
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    if (await router.onBeforePageLoad?.(href) === false)
      return;
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (!page)
        throw new Error(`Page not found: ${pendingPath}`);
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp)
          throw new Error(`Invalid route component: ${comp}`);
        await router.onAfterPageLoad?.(href);
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        syncRouteQueryAndHash(targetLoc);
        if (inBrowser) {
          nextTick(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState({}, "", href);
            }
            return scrollTo(targetLoc.hash, false, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch|Page not found/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        const relativePath = inBrowser ? route.path.replace(/(^|\/)$/, "$1index").replace(/(\.html)?$/, ".md").slice(siteDataRef.value.base.length) : "404.md";
        route.data = { ...notFoundPageData, relativePath };
        syncRouteQueryAndHash(targetLoc);
      }
    }
  }
  function syncRouteQueryAndHash(loc = inBrowser ? location : { search: "", hash: "" }) {
    route.query = loc.search;
    route.hash = decodeURIComponent(loc.hash);
  }
  if (inBrowser) {
    if (history.state === null)
      history.replaceState({}, "");
    window.addEventListener("click", (e) => {
      if (e.defaultPrevented || !(e.target instanceof Element) || e.target.closest("button") || // temporary fix for docsearch action buttons
      e.button !== 0 || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
        return;
      }
      const link = e.target.closest("a");
      if (!link || link.closest(".vp-raw") || link.hasAttribute("download") || link.hasAttribute("target")) {
        return;
      }
      const linkHref = link.getAttribute("href") ?? (link instanceof SVGAElement ? link.getAttribute("xlink:href") : null);
      if (linkHref == null)
        return;
      const { href, origin, pathname } = new URL(linkHref, link.baseURI);
      const currentLoc = new URL(location.href);
      if (origin === currentLoc.origin && treatAsHtml(pathname)) {
        e.preventDefault();
        router.go(href, {
          // use smooth scroll when clicking on header anchor links
          smoothScroll: link.classList.contains("header-anchor")
        });
      }
    }, { capture: true });
    window.addEventListener("popstate", async (e) => {
      if (e.state === null)
        return;
      const href = normalizeHref(location.href);
      await loadPage(href, e.state && e.state.scrollPosition || 0);
      syncRouteQueryAndHash();
      await router.onAfterRouteChange?.(href);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
      syncRouteQueryAndHash();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router)
    throw new Error("useRouter() is called without provider.");
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(hash, smooth = false, scrollPosition = 0) {
  if (!hash || scrollPosition) {
    window.scrollTo(0, scrollPosition);
    return;
  }
  let target = null;
  try {
    target = document.getElementById(decodeURIComponent(hash).slice(1));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let scrollToTarget = function() {
      if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight)
        window.scrollTo(0, targetTop);
      else
        window.scrollTo({ left: 0, top: targetTop, behavior: "smooth" });
    };
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - getScrollOffset() + targetPadding;
    requestAnimationFrame(scrollToTarget);
  }
}
function normalizeHref(href) {
  const url = new URL(href, fakeHost);
  url.pathname = url.pathname.replace(/(^|\/)index(\.html)?$/, "$1");
  if (siteDataRef.value.cleanUrls) {
    url.pathname = url.pathname.replace(/\.html$/, "");
  } else if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html")) {
    url.pathname += ".html";
  }
  return url.pathname + url.search + url.hash;
}
async function changeRoute(href, { smoothScroll = false, initialLoad = false, replace = false } = {}) {
  const loc = normalizeHref(location.href);
  const nextUrl = new URL(href, location.origin);
  const currentUrl = new URL(loc, location.origin);
  if (href === loc) {
    if (!initialLoad) {
      scrollTo(nextUrl.hash, smoothScroll);
      return false;
    }
  } else {
    if (replace) {
      history.replaceState({}, "", href);
    } else {
      history.replaceState({ scrollPosition: window.scrollY }, "");
      history.pushState({}, "", href);
    }
    if (nextUrl.pathname === currentUrl.pathname) {
      if (nextUrl.hash !== currentUrl.hash) {
        window.dispatchEvent(new HashChangeEvent("hashchange", {
          oldURL: currentUrl.href,
          newURL: nextUrl.href
        }));
        scrollTo(nextUrl.hash, smoothScroll);
      }
      return false;
    }
  }
  return true;
}
const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn());
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    as: { type: [Object, String], default: "div" }
  },
  setup(props) {
    const route = useRoute();
    const { frontmatter, site } = useData();
    watch(frontmatter, runCbs, { deep: true, flush: "post" });
    return () => h(props.as, site.value.contentProps ?? { style: { position: "relative" } }, [
      route.component ? h(route.component, {
        onVnodeMounted: runCbs,
        onVnodeUpdated: runCbs,
        onVnodeUnmounted: runCbs
      }) : "404 Page Not Found"
    ]);
  }
});
export {
  Content as C,
  EXTERNAL_URL_RE as E,
  RouterSymbol as R,
  isActive as a,
  inBrowser as b,
  useRoute as c,
  createTitle as d,
  initData as e,
  dataSymbol as f,
  getScrollOffset as g,
  createRouter as h,
  isExternal as i,
  useRouter as j,
  mergeHead as m,
  onContentUpdated as o,
  pathToFile as p,
  siteDataRef as s,
  treatAsHtml as t,
  useData as u,
  withBase as w
};
