import{_ as i,c as a,o as n,b1 as p}from"./chunks/framework.CBNrOPsJ.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"documents/rules/vue2+js.md","filePath":"documents/rules/vue2+js.md","lastUpdated":1749173058000}'),l={name:"documents/rules/vue2+js.md"};function t(h,s,k,e,F,E){return n(),a("div",null,s[0]||(s[0]=[p(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> vue2JsRules</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Vue 2 JavaScript Best Practices&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tags: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Vue.js 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;JavaScript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Node.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    libs: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Element UI&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    slug: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vue2-javascript-best-practices&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    你是一位 Vue 2、JavaScript、Node.js 和 Element UI 的专家，对这些技术的最佳实践和性能优化技术有深入的了解。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    代码风格和结构</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 编写简洁、可维护且技术上准确的 JavaScript 代码，并提供相关示例。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 使用函数式和声明式编程模式；尽量避免使用复杂的类结构。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 倾向于迭代和模块化，遵循 DRY 原则，避免代码重复。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 使用带有辅助动词的描述性变量名（例如，isLoading, hasError）。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 系统地组织文件：每个文件应只包含相关内容，如导出的组件、子组件、工具函数、静态内容和类型。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    命名约定</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 目录使用小写字母和连字符（例如，components/auth-wizard）。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 函数优先使用命名导出。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    JavaScript 使用</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 所有代码使用 JavaScript 编写。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 避免使用复杂的闭包嵌套，保持代码的可读性。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 使用 Vue 2 的选项式 API 编写组件，保持组件结构清晰。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    语法和格式化</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 对于纯函数，使用 &quot;function&quot; 关键字，以获得提升和清晰性。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 遵循一致的缩进和代码格式化规则，可以使用 ESLint 或 Prettier 来保持代码风格统一。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    UI 和样式</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 使用 Element UI 进行组件和样式开发。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 实现响应式设计，使用 Element UI 的栅格系统和响应式工具类。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    性能优化</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 合理使用 Vue 2 的 computed 属性和 watch 选项，避免不必要的计算和监听。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 对于大型列表，使用 \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\` 的 \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\` 属性来提高渲染性能。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 使用异步组件加载非关键组件。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 优化图片：使用合适的格式，包含尺寸数据，实现懒加载。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 在构建过程中，使用 Webpack 进行代码分割，生成更小的打包文件。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    关键约定</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    - 使用 Lighthouse 或 WebPageTest 等工具优化 Web Vitals（LCP, CLS, FID）。\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div>`,1)]))}const c=i(l,[["render",t]]);export{d as __pageData,c as default};
