import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.8801f029.js";const p="/vitepress-blog/assets/10.f1581522.png",o="/vitepress-blog/assets/8.e2e32d91.png",e="/vitepress-blog/assets/9.170f6f6b.png",u=JSON.parse('{"title":"Echarts 相关","description":"","frontmatter":{},"headers":[],"relativePath":"documents/accumulation/echarts.md","filePath":"documents/accumulation/echarts.md","lastUpdated":1695368392000}'),t={name:"documents/accumulation/echarts.md"},c=l('<h1 id="echarts-相关" tabindex="-1">Echarts 相关 <a class="header-anchor" href="#echarts-相关" aria-label="Permalink to &quot;Echarts 相关&quot;">​</a></h1><h2 id="echarts-地图的-json-文件中各个字段的含义" tabindex="-1">Echarts 地图的 JSON 文件中各个字段的含义 <a class="header-anchor" href="#echarts-地图的-json-文件中各个字段的含义" aria-label="Permalink to &quot;Echarts 地图的 JSON 文件中各个字段的含义&quot;">​</a></h2><p><strong>coordinates</strong>: 用逗号分隔的一个个UTF-8字符串，每个字符串都是一片区域</p><p><strong>childNum</strong>: 多边形区域数量</p><p><strong>encodeOffsets</strong>: 是解压需要的信息，跟 coordinates 一一对应</p><p>问题来源：在海南省地图 JSON 文件里添加三沙区域，并保持地图较大的可视区域</p><p>知识来源: <a href="https://github.com/apache/echarts/issues/3308" target="_blank" rel="noreferrer">https://github.com/apache/echarts/issues/3308</a></p><h2 id="legend-固定列数且对齐" tabindex="-1">legend 固定列数且对齐 <a class="header-anchor" href="#legend-固定列数且对齐" aria-label="Permalink to &quot;legend 固定列数且对齐&quot;">​</a></h2><p>效果: <img src="'+p+`" alt="image"></p><p>代码:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">legend</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    bottom: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&#39;circle&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    orient: </span><span style="color:#9ECBFF;">&#39;vertical&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    left: </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    data: top10Legend.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, columnItemCount),</span></span>
<span class="line"><span style="color:#E1E4E8;">    itemWidth: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    itemHeight: </span><span style="color:#79B8FF;">14</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    bottom: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&#39;circle&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    orient: </span><span style="color:#9ECBFF;">&#39;vertical&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    right: </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    data: top10Legend.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(columnItemCount, top10Legend.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    itemWidth: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    itemHeight: </span><span style="color:#79B8FF;">14</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 其中 top10Legend 为 [&#39;石油、煤炭及其他燃料加工业&#39;, &#39;电气机械和器材制造业&#39;, ...], columnItemCount 为 Math.floor(top10Legend.length / 2)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">legend</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    bottom: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    icon: </span><span style="color:#032F62;">&#39;circle&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    orient: </span><span style="color:#032F62;">&#39;vertical&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    left: </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    data: top10Legend.</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, columnItemCount),</span></span>
<span class="line"><span style="color:#24292E;">    itemWidth: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    itemHeight: </span><span style="color:#005CC5;">14</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    bottom: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    icon: </span><span style="color:#032F62;">&#39;circle&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    orient: </span><span style="color:#032F62;">&#39;vertical&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    right: </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    data: top10Legend.</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(columnItemCount, top10Legend.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    itemWidth: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    itemHeight: </span><span style="color:#005CC5;">14</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 其中 top10Legend 为 [&#39;石油、煤炭及其他燃料加工业&#39;, &#39;电气机械和器材制造业&#39;, ...], columnItemCount 为 Math.floor(top10Legend.length / 2)</span></span></code></pre></div><h2 id="markline" tabindex="-1">markline <a class="header-anchor" href="#markline" aria-label="Permalink to &quot;markline&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;!</span><span style="color:#85E89D;">DOCTYPE</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;en&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">charset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">http-equiv</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;X-UA-Compatible&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;IE=edge&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;Document&lt;/</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;chartContainer&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width: 600px; height: 400px;&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;Category 1&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;Category 2&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;Category 3&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;Category 4&#39;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        sum </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> data[i].value;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> average </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> data.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> chartOptions </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        xAxis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;value&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          axisLine: { show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          splitLine: { show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        yAxis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;category&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          data: data.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item.name),</span></span>
<span class="line"><span style="color:#E1E4E8;">          axisLine: { show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          axisTick: { show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        series: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            type: </span><span style="color:#9ECBFF;">&#39;bar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            data: data.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> item.value),</span></span>
<span class="line"><span style="color:#E1E4E8;">            itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> params.value </span><span style="color:#F97583;">&gt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;green&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            markLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              lineStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                type: </span><span style="color:#9ECBFF;">&#39;solid&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                color: </span><span style="color:#9ECBFF;">&#39;#000&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                fontSize: </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                color: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.mainColor,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              symbol: </span><span style="color:#9ECBFF;">&#39;circle&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              symbolSize: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              symbolOffset: [</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">              data: [{ type: </span><span style="color:#9ECBFF;">&#39;average&#39;</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&#39;Avg&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> chartContainer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;chartContainer&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> chart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> echarts.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(chartContainer);</span></span>
<span class="line"><span style="color:#E1E4E8;">      chart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(chartOptions);</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;!</span><span style="color:#22863A;">DOCTYPE</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">html</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;en&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">charset</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">http-equiv</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;X-UA-Compatible&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;IE=edge&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;viewport&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;Document&lt;/</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;chartContainer&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width: 600px; height: 400px;&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;Category 1&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;Category 2&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;Category 3&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;Category 4&#39;</span><span style="color:#24292E;">, value: </span><span style="color:#005CC5;">15</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> sum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> data.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        sum </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> data[i].value;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> average </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> sum </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> data.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> chartOptions </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        xAxis: {</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&#39;value&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          axisLine: { show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">          splitLine: { show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        yAxis: {</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&#39;category&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          data: data.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item.name),</span></span>
<span class="line"><span style="color:#24292E;">          axisLine: { show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">          axisTick: { show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        series: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            type: </span><span style="color:#032F62;">&#39;bar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            data: data.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> item.value),</span></span>
<span class="line"><span style="color:#24292E;">            itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> params.value </span><span style="color:#D73A49;">&gt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;green&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;red&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            markLine: {</span></span>
<span class="line"><span style="color:#24292E;">              lineStyle: {</span></span>
<span class="line"><span style="color:#24292E;">                type: </span><span style="color:#032F62;">&#39;solid&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                color: </span><span style="color:#032F62;">&#39;#000&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              label: {</span></span>
<span class="line"><span style="color:#24292E;">                fontSize: </span><span style="color:#005CC5;">16</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                color: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.mainColor,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              symbol: </span><span style="color:#032F62;">&#39;circle&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              symbolSize: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              symbolOffset: [</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">              data: [{ type: </span><span style="color:#032F62;">&#39;average&#39;</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&#39;Avg&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> chartContainer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;chartContainer&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> chart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> echarts.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(chartContainer);</span></span>
<span class="line"><span style="color:#24292E;">      chart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(chartOptions);</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">html</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="条形图如何隐藏-y-轴方向上的-0-刻度线" tabindex="-1">条形图如何隐藏 y 轴方向上的 0 刻度线 <a class="header-anchor" href="#条形图如何隐藏-y-轴方向上的-0-刻度线" aria-label="Permalink to &quot;条形图如何隐藏 y 轴方向上的 0 刻度线&quot;">​</a></h2><p>如何将下图圈起来的线隐藏起来? <img src="`+o+'" alt="8"></p><p>设置 y 轴的 axisLine <img src="'+e+`" alt="9"></p><p>最终代码:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yAxis</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;category&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">axisLine</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">lineStyle</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#fff&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 重新定义类目轴上文字颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">axisLabel</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;#000&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yAxis</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;category&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">axisLine</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">lineStyle</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#fff&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 重新定义类目轴上文字颜色</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">axisLabel</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;#000&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="基于-vue2-封装-echarts-常用组件" tabindex="-1">基于 vue2 封装 echarts 常用组件 <a class="header-anchor" href="#基于-vue2-封装-echarts-常用组件" aria-label="Permalink to &quot;基于 vue2 封装 echarts 常用组件&quot;">​</a></h2><ol><li>封装 Chart 组件</li></ol><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;chart&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;echartRef&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;chartStyle&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> echarts </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;echarts&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      chart: </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    option: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Object,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {},</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    chartStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Object,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          width: </span><span style="color:#9ECBFF;">&#39;600px&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          height: </span><span style="color:#9ECBFF;">&#39;300px&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">created</span><span style="color:#E1E4E8;">() {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> echarts.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$refs.echartRef)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.option)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  watch: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    option: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">handler</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">newOption</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">oldVal</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.chart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(newOption)</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      deep: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;chart&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;echartRef&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;chartStyle&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> echarts </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;echarts&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  components: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      chart: </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    option: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Object,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {},</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    chartStyle: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Object,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          width: </span><span style="color:#032F62;">&#39;600px&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          height: </span><span style="color:#032F62;">&#39;300px&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  computed: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">created</span><span style="color:#24292E;">() {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> echarts.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$refs.echartRef)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.option)</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  watch: {</span></span>
<span class="line"><span style="color:#24292E;">    option: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">handler</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">newOption</span><span style="color:#24292E;">, </span><span style="color:#E36209;">oldVal</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.chart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(newOption)</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      deep: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><ol start="2"><li>新建配置文件 option.js</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  tooltip: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    trigger: </span><span style="color:#9ECBFF;">&#39;axis&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  legend: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    data: [</span><span style="color:#9ECBFF;">&#39;园区累计企业数&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;园区累计新增注册企业&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;园区新增企业&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  grid: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    left: </span><span style="color:#9ECBFF;">&#39;3%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    right: </span><span style="color:#9ECBFF;">&#39;4%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    bottom: </span><span style="color:#9ECBFF;">&#39;3%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    containLabel: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  xAxis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;category&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    boundaryGap: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    data: [</span><span style="color:#9ECBFF;">&#39;1月&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;2月&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;3月&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;4月&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;5月&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;6月&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;7月&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;8月&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;9月&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;10月&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;11月&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;12月&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  yAxis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;value&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  series: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;园区累计企业数&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stack: </span><span style="color:#9ECBFF;">&#39;Total&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: [</span><span style="color:#79B8FF;">120</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">132</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">101</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">134</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">230</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">210</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">101</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">134</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">230</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">210</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;园区累计新增注册企业&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stack: </span><span style="color:#9ECBFF;">&#39;Total&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: [</span><span style="color:#79B8FF;">220</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">182</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">191</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">234</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">290</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">330</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">310</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">191</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">234</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">290</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">330</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">310</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;园区新增企业&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stack: </span><span style="color:#9ECBFF;">&#39;Total&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: [</span><span style="color:#79B8FF;">150</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">232</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">201</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">154</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">190</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">330</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">410</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">150</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">232</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">201</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">154</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">190</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  tooltip: {</span></span>
<span class="line"><span style="color:#24292E;">    trigger: </span><span style="color:#032F62;">&#39;axis&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  legend: {</span></span>
<span class="line"><span style="color:#24292E;">    data: [</span><span style="color:#032F62;">&#39;园区累计企业数&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;园区累计新增注册企业&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;园区新增企业&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  grid: {</span></span>
<span class="line"><span style="color:#24292E;">    left: </span><span style="color:#032F62;">&#39;3%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    right: </span><span style="color:#032F62;">&#39;4%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    bottom: </span><span style="color:#032F62;">&#39;3%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    containLabel: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  xAxis: {</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;category&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    boundaryGap: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    data: [</span><span style="color:#032F62;">&#39;1月&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;2月&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;3月&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;4月&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;5月&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;6月&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;7月&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;8月&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;9月&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;10月&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;11月&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;12月&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  yAxis: {</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;value&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  series: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;园区累计企业数&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      stack: </span><span style="color:#032F62;">&#39;Total&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      data: [</span><span style="color:#005CC5;">120</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">132</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">101</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">134</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">90</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">230</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">210</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">101</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">134</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">90</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">230</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">210</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;园区累计新增注册企业&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      stack: </span><span style="color:#032F62;">&#39;Total&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      data: [</span><span style="color:#005CC5;">220</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">182</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">191</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">234</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">290</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">330</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">310</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">191</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">234</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">290</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">330</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">310</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;园区新增企业&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      stack: </span><span style="color:#032F62;">&#39;Total&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      data: [</span><span style="color:#005CC5;">150</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">232</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">201</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">154</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">190</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">330</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">410</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">150</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">232</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">201</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">154</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">190</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><ol start="3"><li>使用</li></ol><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">Chart</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">option</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">option</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">chartStyle</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">{ </span><span style="color:#B392F0;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;300px&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;1200px&#39;</span><span style="color:#E1E4E8;"> }</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">Chart</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">Chart</span><span style="color:#24292E;"> :</span><span style="color:#6F42C1;">option</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">option</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> :</span><span style="color:#6F42C1;">chartStyle</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">{ </span><span style="color:#6F42C1;">height</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;300px&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;1200px&#39;</span><span style="color:#24292E;"> }</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">Chart</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,25),E=[c];function r(y,i,F,C,d,h){return n(),a("div",null,E)}const B=s(t,[["render",r]]);export{u as __pageData,B as default};
