import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.8801f029.js";const F=JSON.parse('{"title":"手写 call","description":"","frontmatter":{},"headers":[],"relativePath":"documents/handwritten/call.md","filePath":"documents/handwritten/call.md","lastUpdated":1691139274000}'),p={name:"documents/handwritten/call.md"},o=l(`<h1 id="手写-call" tabindex="-1">手写 call <a class="header-anchor" href="#手写-call" aria-label="Permalink to &quot;手写 call&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">Function</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">myCall</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">thisObj</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 对 thisObj 转成对象类型(防止传入的是非对象类型)</span></span>
<span class="line"><span style="color:#E1E4E8;">  thisObj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (thisObj </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> thisObj </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Object</span><span style="color:#E1E4E8;">(thisObj) </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> window</span></span>
<span class="line"><span style="color:#E1E4E8;">  thisObj.fn </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> thisObj.</span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">args)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">delete</span><span style="color:#E1E4E8;"> thisObj.fn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// function foo() {</span></span>
<span class="line"><span style="color:#6A737D;">//   console.log(&quot;foo函数被执行&quot;, this)</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// function sum(num1, num2) {</span></span>
<span class="line"><span style="color:#6A737D;">//   console.log(&quot;sum函数被执行&quot;, this, num1, num2)</span></span>
<span class="line"><span style="color:#6A737D;">//   return num1 + num2</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// const myFoo = foo.myCall({ name: &#39;myFoo&#39; })</span></span>
<span class="line"><span style="color:#6A737D;">// console.log(&#39;myFoo: &#39;, myFoo); // undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// const mySum = sum.myCall({ name:&#39;mySum&#39; }, 20, 30)</span></span>
<span class="line"><span style="color:#6A737D;">// console.log(&#39;mySum: &#39;, mySum); // 50</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">zero</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;zero&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">myZero</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> zero.</span><span style="color:#B392F0;">myCall</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// Number(0)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">Function</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">myCall</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">thisObj</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">...</span><span style="color:#E36209;">args</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 对 thisObj 转成对象类型(防止传入的是非对象类型)</span></span>
<span class="line"><span style="color:#24292E;">  thisObj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (thisObj </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> thisObj </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Object</span><span style="color:#24292E;">(thisObj) </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> window</span></span>
<span class="line"><span style="color:#24292E;">  thisObj.fn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> thisObj.</span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">args)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">delete</span><span style="color:#24292E;"> thisObj.fn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// function foo() {</span></span>
<span class="line"><span style="color:#6A737D;">//   console.log(&quot;foo函数被执行&quot;, this)</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// function sum(num1, num2) {</span></span>
<span class="line"><span style="color:#6A737D;">//   console.log(&quot;sum函数被执行&quot;, this, num1, num2)</span></span>
<span class="line"><span style="color:#6A737D;">//   return num1 + num2</span></span>
<span class="line"><span style="color:#6A737D;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// const myFoo = foo.myCall({ name: &#39;myFoo&#39; })</span></span>
<span class="line"><span style="color:#6A737D;">// console.log(&#39;myFoo: &#39;, myFoo); // undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// const mySum = sum.myCall({ name:&#39;mySum&#39; }, 20, 30)</span></span>
<span class="line"><span style="color:#6A737D;">// console.log(&#39;mySum: &#39;, mySum); // 50</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">zero</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;zero&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">myZero</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> zero.</span><span style="color:#6F42C1;">myCall</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// Number(0)</span></span></code></pre></div>`,2),e=[o];function c(t,r,y,E,i,u){return n(),a("div",null,e)}const A=s(p,[["render",c]]);export{F as __pageData,A as default};
