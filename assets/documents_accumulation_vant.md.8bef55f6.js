import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.8801f029.js";const u=JSON.parse('{"title":"vant 自定义组件","description":"","frontmatter":{},"headers":[],"relativePath":"documents/accumulation/vant.md","filePath":"documents/accumulation/vant.md","lastUpdated":1702456636000}'),p={name:"documents/accumulation/vant.md"},o=l(`<h1 id="vant-自定义组件" tabindex="-1">vant 自定义组件 <a class="header-anchor" href="#vant-自定义组件" aria-label="Permalink to &quot;vant 自定义组件&quot;">​</a></h1><h2 id="_1-自定义-loading" tabindex="-1">1. 自定义 loading <a class="header-anchor" href="#_1-自定义-loading" aria-label="Permalink to &quot;1. 自定义 loading&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">van-loading</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;diy-dialog&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#1989fa&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">vertical</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">&gt;加载中...&lt;/</span><span style="color:#85E89D;">van-loading</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">created</span><span style="color:#E1E4E8;">() {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;">() {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.diy-dialog</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">fixed</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">vw</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">vh</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">rgba</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.7</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">z-index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">9999</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">align-items</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">justify-content</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">van-loading</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;diy-dialog&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#1989fa&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">vertical</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">&gt;加载中...&lt;/</span><span style="color:#22863A;">van-loading</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  components: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  props: {},</span></span>
<span class="line"><span style="color:#24292E;">  computed: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">created</span><span style="color:#24292E;">() {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;">() {},</span></span>
<span class="line"><span style="color:#24292E;">  methods: {},</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.diy-dialog</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">fixed</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">left</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">vw</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">vh</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">rgba</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.7</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">z-index</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">9999</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">flex</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">align-items</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">justify-content</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_2-自定义-nav-bar" tabindex="-1">2. 自定义 nav-bar <a class="header-anchor" href="#_2-自定义-nav-bar" aria-label="Permalink to &quot;2. 自定义 nav-bar&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">van-nav-bar</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;title || options.title&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:border</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;options.border&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">left-arrow</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">@click-left</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;goBack&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;--var-title-color&#39;: options.titleColor,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;--var-left-arrow-color&#39;: options.leftArrowColor,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;--var-background-color&#39;: options.bgColor,</span></span>
<span class="line"><span style="color:#9ECBFF;">    }&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { NavBar } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vant&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    [NavBar.name]: NavBar,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Object,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          border: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          bgColor: </span><span style="color:#9ECBFF;">&#39;#fff&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          titleColor: </span><span style="color:#9ECBFF;">&#39;#000&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          leftArrowColor: </span><span style="color:#9ECBFF;">&#39;#000&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">created</span><span style="color:#E1E4E8;">() {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;">() {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">goBack</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$router.</span><span style="color:#B392F0;">go</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.van-nav-bar</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--var-background-color</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  ::v</span><span style="color:#79B8FF;">-</span><span style="color:#E1E4E8;">deep .van</span><span style="color:#79B8FF;">-</span><span style="color:#E1E4E8;">icon {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--var-left-arrow-color</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">::</span><span style="color:#85E89D;">v-deep</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.van-nav-bar__arrow</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">::</span><span style="color:#85E89D;">v-deep</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.van-nav-bar__title</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">18</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--var-title-color</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">van-nav-bar</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;title || options.title&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:border</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;options.border&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">left-arrow</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">@click-left</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;goBack&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{</span></span>
<span class="line"><span style="color:#032F62;">      &#39;--var-title-color&#39;: options.titleColor,</span></span>
<span class="line"><span style="color:#032F62;">      &#39;--var-left-arrow-color&#39;: options.leftArrowColor,</span></span>
<span class="line"><span style="color:#032F62;">      &#39;--var-background-color&#39;: options.bgColor,</span></span>
<span class="line"><span style="color:#032F62;">    }&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { NavBar } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vant&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  components: {</span></span>
<span class="line"><span style="color:#24292E;">    [NavBar.name]: NavBar,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    options: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Object,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          border: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          bgColor: </span><span style="color:#032F62;">&#39;#fff&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          titleColor: </span><span style="color:#032F62;">&#39;#000&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          leftArrowColor: </span><span style="color:#032F62;">&#39;#000&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        };</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    title: {</span></span>
<span class="line"><span style="color:#24292E;">      type: String,</span></span>
<span class="line"><span style="color:#24292E;">      default: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  computed: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">created</span><span style="color:#24292E;">() {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;">() {},</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">goBack</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$router.</span><span style="color:#6F42C1;">go</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.van-nav-bar</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--var-background-color</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  ::v</span><span style="color:#005CC5;">-</span><span style="color:#24292E;">deep .van</span><span style="color:#005CC5;">-</span><span style="color:#24292E;">icon {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--var-left-arrow-color</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">::</span><span style="color:#22863A;">v-deep</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.van-nav-bar__arrow</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">::</span><span style="color:#22863A;">v-deep</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.van-nav-bar__title</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">18</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--var-title-color</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_3-自定义-tab-bar" tabindex="-1">3. 自定义 tab-bar <a class="header-anchor" href="#_3-自定义-tab-bar" aria-label="Permalink to &quot;3. 自定义 tab-bar&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">van-tabbar</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;isShowTabbar&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;active&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">route</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">van-tabbar-item</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(tabbar, index) in tabbars&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;index&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tabbar.ename&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">replace</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:to</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tabbar.path&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;{{ tabbar.name }}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">props</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;props.active ? tabbar.activeIcon : tabbar.icon&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">van-tabbar-item</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">van-tabbar</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Tabbar, TabbarItem } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vant&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      active: </span><span style="color:#9ECBFF;">&#39;supervise-unite&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      tabbars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&#39;首页&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          activeIcon: </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./images/tabbar/icon_home_active.png&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          icon: </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./images/tabbar/icon_home.png&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          path: </span><span style="color:#9ECBFF;">&#39;/home&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          ename: </span><span style="color:#9ECBFF;">&#39;home&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&#39;督办任务&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          activeIcon: </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./images/tabbar/icon_supervise_mission_active.png&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          icon: </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./images/tabbar/icon_supervise_mission.png&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          path: </span><span style="color:#9ECBFF;">&#39;/supervise-mission&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          ename: </span><span style="color:#9ECBFF;">&#39;supervise-mission&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&#39;多督合一&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          activeIcon: </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./images/tabbar/icon_supervise_unite_active.png&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          icon: </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./images/tabbar/icon_supervise_unite.png&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          path: </span><span style="color:#9ECBFF;">&#39;/supervise-unite&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          ename: </span><span style="color:#9ECBFF;">&#39;supervise-unite&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&#39;我的&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          activeIcon: </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./images/tabbar/icon_profile_active.png&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          icon: </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./images/tabbar/icon_profile.png&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          path: </span><span style="color:#9ECBFF;">&#39;/profile-page&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          ename: </span><span style="color:#9ECBFF;">&#39;profile-page&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">created</span><span style="color:#E1E4E8;">() {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">isShowTabbar</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;/home&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;/supervise-mission&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;/supervise-unite&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;/profile-page&#39;</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$route.path</span></span>
<span class="line"><span style="color:#E1E4E8;">      );</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">van-tabbar</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-if</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;isShowTabbar&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;active&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">route</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">van-tabbar-item</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;(tabbar, index) in tabbars&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;index&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tabbar.ename&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">replace</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:to</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tabbar.path&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;{{ tabbar.name }}&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">icon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">props</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;props.active ? tabbar.activeIcon : tabbar.icon&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">van-tabbar-item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">van-tabbar</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Tabbar, TabbarItem } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vant&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      active: </span><span style="color:#032F62;">&#39;supervise-unite&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      tabbars: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&#39;首页&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          activeIcon: </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./images/tabbar/icon_home_active.png&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          icon: </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./images/tabbar/icon_home.png&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          path: </span><span style="color:#032F62;">&#39;/home&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          ename: </span><span style="color:#032F62;">&#39;home&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&#39;督办任务&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          activeIcon: </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./images/tabbar/icon_supervise_mission_active.png&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          icon: </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./images/tabbar/icon_supervise_mission.png&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          path: </span><span style="color:#032F62;">&#39;/supervise-mission&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          ename: </span><span style="color:#032F62;">&#39;supervise-mission&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&#39;多督合一&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          activeIcon: </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./images/tabbar/icon_supervise_unite_active.png&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          icon: </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./images/tabbar/icon_supervise_unite.png&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          path: </span><span style="color:#032F62;">&#39;/supervise-unite&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          ename: </span><span style="color:#032F62;">&#39;supervise-unite&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&#39;我的&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          activeIcon: </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./images/tabbar/icon_profile_active.png&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          icon: </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./images/tabbar/icon_profile.png&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          path: </span><span style="color:#032F62;">&#39;/profile-page&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          ename: </span><span style="color:#032F62;">&#39;profile-page&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">created</span><span style="color:#24292E;">() {},</span></span>
<span class="line"><span style="color:#24292E;">  computed: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">isShowTabbar</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;/home&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;/supervise-mission&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;/supervise-unite&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;/profile-page&#39;</span><span style="color:#24292E;">].</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$route.path</span></span>
<span class="line"><span style="color:#24292E;">      );</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_4-自定义下拉刷新上拉加载列表" tabindex="-1">4. 自定义下拉刷新上拉加载列表 <a class="header-anchor" href="#_4-自定义下拉刷新上拉加载列表" aria-label="Permalink to &quot;4. 自定义下拉刷新上拉加载列表&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">van-pull-refresh</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;refreshing&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@refresh</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onRefresh&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:disabled</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;isRefreshDisable&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">van-list</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lw-list&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;vanList&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;loading&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:finished</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;finished&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">finished-text</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;没有更多了&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:immediate-check</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;false&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">@load</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onLoad&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">ListItem</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(item, index) in projects&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;index&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:item</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">van-list</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">van-pull-refresh</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> ListItem </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../components/ListItem&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { List, PullRefresh } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vant&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      isRefreshDisable: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      projects: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      loading: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      finished: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      refreshing: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      scrollTop: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$nextTick</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">resolveConflict</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$refs.vanList.$el);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  watch: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">scrollTop</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newval</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (newval </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isRefreshDisable </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.isRefreshDisable </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 解决van-pull-refresh下拉刷新与局部滚动条下滑冲突问题</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">resolveConflict</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">vantList</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> val;</span></span>
<span class="line"><span style="color:#E1E4E8;">      vantList.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;touchmove&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.scrollTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vantList.scrollTop;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      vantList.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;touchend&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.scrollTop </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vantList.scrollTop;</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onLoad</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.loading </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.roleList.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;CBDW&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.type </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">PERSONAL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.queryParams.queryObj.csldStatus </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">resultData</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getDdhyTaskList</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.queryParams);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.refreshing) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.projects </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.refreshing </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.projects.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">resultData.items);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.queryParams.skip </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.queryParams.pageSize;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.projects.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(resultData.total)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.finished </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.finished </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// this.loading 得放在列表赋值的后面, 否则会导致上拉加载时, 加载所有数据</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.loading </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onRefresh</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.refreshing </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.loading </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.finished </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.queryParams.skip </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">onLoad</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$toast</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;刷新成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">van-pull-refresh</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;refreshing&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@refresh</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;onRefresh&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:disabled</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;isRefreshDisable&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">van-list</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;lw-list&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;vanList&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;loading&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:finished</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;finished&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">finished-text</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;没有更多了&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:immediate-check</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;false&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">@load</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;onLoad&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#B31D28;font-style:italic;">ListItem</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;(item, index) in projects&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;index&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:item</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">van-list</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">van-pull-refresh</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> ListItem </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../components/ListItem&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { List, PullRefresh } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vant&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      isRefreshDisable: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      projects: [],</span></span>
<span class="line"><span style="color:#24292E;">      loading: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      finished: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      refreshing: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      scrollTop: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$nextTick</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">resolveConflict</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$refs.vanList.$el);</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  watch: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">scrollTop</span><span style="color:#24292E;">(</span><span style="color:#E36209;">newval</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (newval </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.isRefreshDisable </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.isRefreshDisable </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 解决van-pull-refresh下拉刷新与局部滚动条下滑冲突问题</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">resolveConflict</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">vantList</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> val;</span></span>
<span class="line"><span style="color:#24292E;">      vantList.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;touchmove&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.scrollTop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vantList.scrollTop;</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">      vantList.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;touchend&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.scrollTop </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vantList.scrollTop;</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onLoad</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.loading </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.roleList.</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;CBDW&#39;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.type </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">PERSONAL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.queryParams.queryObj.csldStatus </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">resultData</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getDdhyTaskList</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.queryParams);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.refreshing) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.projects </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.refreshing </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.projects.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">resultData.items);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.queryParams.skip </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.queryParams.pageSize;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.projects.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(resultData.total)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.finished </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.finished </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// this.loading 得放在列表赋值的后面, 否则会导致上拉加载时, 加载所有数据</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.loading </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onRefresh</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.refreshing </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.loading </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.finished </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.queryParams.skip </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">onLoad</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$toast</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;刷新成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,9),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const B=s(p,[["render",t]]);export{u as __pageData,B as default};
