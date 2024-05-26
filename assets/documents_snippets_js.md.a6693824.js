import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.8801f029.js";const d=JSON.parse('{"title":"JS","description":"","frontmatter":{},"headers":[],"relativePath":"documents/snippets/js.md","filePath":"documents/snippets/js.md","lastUpdated":1690357672000}'),p={name:"documents/snippets/js.md"},l=o(`<h1 id="js" tabindex="-1">JS <a class="header-anchor" href="#js" aria-label="Permalink to &quot;JS&quot;">​</a></h1><h2 id="console2json-json" tabindex="-1">console2json(json) <a class="header-anchor" href="#console2json-json" aria-label="Permalink to &quot;console2json(json)&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;Print to console&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;prefix&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;json&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;body&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;console.log(JSON.parse(JSON.stringify($1)))&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;log output to JSON console&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;Print to console&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;prefix&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;json&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;body&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;console.log(JSON.parse(JSON.stringify($1)))&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;log output to JSON console&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="fn-fn" tabindex="-1">fn(fn) <a class="header-anchor" href="#fn-fn" aria-label="Permalink to &quot;fn(fn)&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;generate enhanced function&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;prefix&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;fn&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;body&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;$1($2) {&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;  $3&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&quot;},&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;generate enhanced function&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;generate enhanced function&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;prefix&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;fn&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;body&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;$1($2) {&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;  $3&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&quot;},&quot;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;generate enhanced function&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="import-api-api" tabindex="-1">import-api(api) <a class="header-anchor" href="#import-api-api" aria-label="Permalink to &quot;import-api(api)&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">&quot;Import Api&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;prefix&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;api&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;body&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#9ECBFF;">&quot;import {$1} from &#39;@/api/$2&#39;;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		],</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;import api&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">&quot;Import Api&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;prefix&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;api&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;body&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#032F62;">&quot;import {$1} from &#39;@/api/$2&#39;;&quot;</span></span>
<span class="line"><span style="color:#24292E;">		],</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;import api&quot;</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="import-component-cpn" tabindex="-1">import-component(cpn) <a class="header-anchor" href="#import-component-cpn" aria-label="Permalink to &quot;import-component(cpn)&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;Import Component&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;prefix&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;cpn&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;body&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;import $1 from &#39;@/component/$1&#39;;&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;import component&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;Import Component&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;prefix&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;cpn&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;body&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;import $1 from &#39;@/component/$1&#39;;&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;import component&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,9),t=[l];function e(c,r,E,i,y,u){return n(),a("div",null,t)}const F=s(p,[["render",e]]);export{d as __pageData,F as default};
