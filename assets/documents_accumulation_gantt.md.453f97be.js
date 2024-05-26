import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.8801f029.js";const d=JSON.parse('{"title":"dhtmlx-gantt 甘特图","description":"","frontmatter":{},"headers":[],"relativePath":"documents/accumulation/gantt.md","filePath":"documents/accumulation/gantt.md","lastUpdated":1701914272000}'),p={name:"documents/accumulation/gantt.md"},o=l(`<h1 id="dhtmlx-gantt-甘特图" tabindex="-1">dhtmlx-gantt 甘特图 <a class="header-anchor" href="#dhtmlx-gantt-甘特图" aria-label="Permalink to &quot;dhtmlx-gantt 甘特图&quot;">​</a></h1><details class="details custom-block"><summary>Details</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;container-gantt&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">GanttComponent</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;gantt&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:tasks</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;tasks&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">GanttComponent</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> GanttComponent </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./GanttComponent.vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;majorGantt&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: { GanttComponent },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      tasks: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;项目策划生成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// unit: &#39;省自然资源&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            start_date: </span><span style="color:#9ECBFF;">&#39;2023-08-17&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            end_date: </span><span style="color:#9ECBFF;">&#39;2024-10-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 进度</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;已完成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;finish&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            open: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否展开子项</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            parent: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;合规性审批报告&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            unit: </span><span style="color:#9ECBFF;">&#39;省自然资源&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            start_date: </span><span style="color:#9ECBFF;">&#39;2023-09-17&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            end_date: </span><span style="color:#9ECBFF;">&#39;2023-11-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;已完成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;finish&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            parent: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;会商意见汇总&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            unit: </span><span style="color:#9ECBFF;">&#39;省自然资源&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            start_date: </span><span style="color:#9ECBFF;">&#39;2023-10-17&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            end_date: </span><span style="color:#9ECBFF;">&#39;2024-04-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;已完成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;finish&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;项目审批开工&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// unit: &#39;省自然资源&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            start_date: </span><span style="color:#9ECBFF;">&#39;2023-10-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            end_date: </span><span style="color:#9ECBFF;">&#39;2024-05-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress: </span><span style="color:#79B8FF;">0.8</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;进行中&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;doing&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            open: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">21</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            parent: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;项目建议书&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            unit: </span><span style="color:#9ECBFF;">&#39;省发展改革&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            start_date: </span><span style="color:#9ECBFF;">&#39;2023-11-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            end_date: </span><span style="color:#9ECBFF;">&#39;2024-02-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;已完成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;finish&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">22</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            parent: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;可行性研究报告批复&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// unit: &#39;规划条件核实&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// start_date: &#39;2024-08-20&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// end_date: &#39;2024-10-20&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// progress: 1,</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;未开始&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;ready&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">23</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            parent: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;建设用地规划许可证核发&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// unit: &#39;规划条件核实&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            start_date: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            end_date: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// progress: 1,</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;未开始&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;ready&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">24</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            parent: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;规格设计方案&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;未开始&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;ready&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            parent: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;初步设计和概预算方案设计&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;未开始&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;ready&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">21</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            parent: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;项目建议书&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            unit: </span><span style="color:#9ECBFF;">&#39;省发展改革&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            start_date: </span><span style="color:#9ECBFF;">&#39;2023-11-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            end_date: </span><span style="color:#9ECBFF;">&#39;2024-02-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;已完成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;finish&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">211</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            parent: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;项目建议书&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            unit: </span><span style="color:#9ECBFF;">&#39;省发展改革&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            start_date: </span><span style="color:#9ECBFF;">&#39;2023-11-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            end_date: </span><span style="color:#9ECBFF;">&#39;2024-02-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;已完成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;finish&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">212</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            parent: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;项目建议书&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            unit: </span><span style="color:#9ECBFF;">&#39;省发展改革&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            start_date: </span><span style="color:#9ECBFF;">&#39;2023-11-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            end_date: </span><span style="color:#9ECBFF;">&#39;2024-02-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;已完成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;finish&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">213</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            parent: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;项目建议书&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            unit: </span><span style="color:#9ECBFF;">&#39;省发展改革&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            start_date: </span><span style="color:#9ECBFF;">&#39;2023-11-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            end_date: </span><span style="color:#9ECBFF;">&#39;2024-02-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;已完成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;finish&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">214</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            parent: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;项目建议书&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            unit: </span><span style="color:#9ECBFF;">&#39;省发展改革&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            start_date: </span><span style="color:#9ECBFF;">&#39;2023-11-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            end_date: </span><span style="color:#9ECBFF;">&#39;2024-02-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;已完成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;finish&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">215</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            parent: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;项目建议书&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            unit: </span><span style="color:#9ECBFF;">&#39;省发展改革&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            start_date: </span><span style="color:#9ECBFF;">&#39;2023-11-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            end_date: </span><span style="color:#9ECBFF;">&#39;2024-02-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;已完成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;finish&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">216</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            parent: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;项目建议书&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            unit: </span><span style="color:#9ECBFF;">&#39;省发展改革&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            start_date: </span><span style="color:#9ECBFF;">&#39;2023-11-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            end_date: </span><span style="color:#9ECBFF;">&#39;2024-02-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;已完成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;finish&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">217</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            parent: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;项目建议书&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            unit: </span><span style="color:#9ECBFF;">&#39;省发展改革&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            start_date: </span><span style="color:#9ECBFF;">&#39;2023-11-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            end_date: </span><span style="color:#9ECBFF;">&#39;2024-02-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;已完成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;finish&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">218</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            parent: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;项目建议书&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            unit: </span><span style="color:#9ECBFF;">&#39;省发展改革&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            start_date: </span><span style="color:#9ECBFF;">&#39;2023-11-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            end_date: </span><span style="color:#9ECBFF;">&#39;2024-02-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;已完成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;finish&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            id: </span><span style="color:#79B8FF;">219</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            parent: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;项目建议书&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            unit: </span><span style="color:#9ECBFF;">&#39;省发展改革&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            start_date: </span><span style="color:#9ECBFF;">&#39;2023-11-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            end_date: </span><span style="color:#9ECBFF;">&#39;2024-02-20&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            progress: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            statusText: </span><span style="color:#9ECBFF;">&#39;已完成&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            status: </span><span style="color:#9ECBFF;">&#39;finish&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.container-gantt</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">600</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.gantt</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">margin-top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">relative</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">32</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;container-gantt&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">GanttComponent</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;gantt&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:tasks</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;tasks&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">GanttComponent</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> GanttComponent </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./GanttComponent.vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;majorGantt&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  components: { GanttComponent },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      tasks: {</span></span>
<span class="line"><span style="color:#24292E;">        data: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;项目策划生成&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// unit: &#39;省自然资源&#39;,</span></span>
<span class="line"><span style="color:#24292E;">            start_date: </span><span style="color:#032F62;">&#39;2023-08-17&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            end_date: </span><span style="color:#032F62;">&#39;2024-10-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            progress: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 进度</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;已完成&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;finish&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            open: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否展开子项</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">11</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            parent: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;合规性审批报告&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            unit: </span><span style="color:#032F62;">&#39;省自然资源&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            start_date: </span><span style="color:#032F62;">&#39;2023-09-17&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            end_date: </span><span style="color:#032F62;">&#39;2023-11-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            progress: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;已完成&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;finish&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            parent: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;会商意见汇总&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            unit: </span><span style="color:#032F62;">&#39;省自然资源&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            start_date: </span><span style="color:#032F62;">&#39;2023-10-17&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            end_date: </span><span style="color:#032F62;">&#39;2024-04-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            progress: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;已完成&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;finish&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;项目审批开工&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// unit: &#39;省自然资源&#39;,</span></span>
<span class="line"><span style="color:#24292E;">            start_date: </span><span style="color:#032F62;">&#39;2023-10-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            end_date: </span><span style="color:#032F62;">&#39;2024-05-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            progress: </span><span style="color:#005CC5;">0.8</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;进行中&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;doing&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            open: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">21</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            parent: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;项目建议书&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            unit: </span><span style="color:#032F62;">&#39;省发展改革&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            start_date: </span><span style="color:#032F62;">&#39;2023-11-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            end_date: </span><span style="color:#032F62;">&#39;2024-02-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            progress: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;已完成&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;finish&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">22</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            parent: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;可行性研究报告批复&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// unit: &#39;规划条件核实&#39;,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// start_date: &#39;2024-08-20&#39;,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// end_date: &#39;2024-10-20&#39;,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// progress: 1,</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;未开始&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;ready&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">23</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            parent: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;建设用地规划许可证核发&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// unit: &#39;规划条件核实&#39;,</span></span>
<span class="line"><span style="color:#24292E;">            start_date: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            end_date: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// progress: 1,</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;未开始&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;ready&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">24</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            parent: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;规格设计方案&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;未开始&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;ready&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            parent: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;初步设计和概预算方案设计&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;未开始&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;ready&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">21</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            parent: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;项目建议书&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            unit: </span><span style="color:#032F62;">&#39;省发展改革&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            start_date: </span><span style="color:#032F62;">&#39;2023-11-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            end_date: </span><span style="color:#032F62;">&#39;2024-02-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            progress: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;已完成&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;finish&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">211</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            parent: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;项目建议书&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            unit: </span><span style="color:#032F62;">&#39;省发展改革&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            start_date: </span><span style="color:#032F62;">&#39;2023-11-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            end_date: </span><span style="color:#032F62;">&#39;2024-02-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            progress: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;已完成&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;finish&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">212</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            parent: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;项目建议书&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            unit: </span><span style="color:#032F62;">&#39;省发展改革&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            start_date: </span><span style="color:#032F62;">&#39;2023-11-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            end_date: </span><span style="color:#032F62;">&#39;2024-02-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            progress: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;已完成&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;finish&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">213</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            parent: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;项目建议书&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            unit: </span><span style="color:#032F62;">&#39;省发展改革&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            start_date: </span><span style="color:#032F62;">&#39;2023-11-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            end_date: </span><span style="color:#032F62;">&#39;2024-02-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            progress: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;已完成&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;finish&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">214</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            parent: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;项目建议书&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            unit: </span><span style="color:#032F62;">&#39;省发展改革&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            start_date: </span><span style="color:#032F62;">&#39;2023-11-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            end_date: </span><span style="color:#032F62;">&#39;2024-02-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            progress: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;已完成&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;finish&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">215</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            parent: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;项目建议书&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            unit: </span><span style="color:#032F62;">&#39;省发展改革&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            start_date: </span><span style="color:#032F62;">&#39;2023-11-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            end_date: </span><span style="color:#032F62;">&#39;2024-02-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            progress: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;已完成&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;finish&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">216</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            parent: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;项目建议书&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            unit: </span><span style="color:#032F62;">&#39;省发展改革&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            start_date: </span><span style="color:#032F62;">&#39;2023-11-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            end_date: </span><span style="color:#032F62;">&#39;2024-02-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            progress: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;已完成&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;finish&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">217</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            parent: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;项目建议书&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            unit: </span><span style="color:#032F62;">&#39;省发展改革&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            start_date: </span><span style="color:#032F62;">&#39;2023-11-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            end_date: </span><span style="color:#032F62;">&#39;2024-02-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            progress: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;已完成&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;finish&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">218</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            parent: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;项目建议书&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            unit: </span><span style="color:#032F62;">&#39;省发展改革&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            start_date: </span><span style="color:#032F62;">&#39;2023-11-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            end_date: </span><span style="color:#032F62;">&#39;2024-02-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            progress: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;已完成&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;finish&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            id: </span><span style="color:#005CC5;">219</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            parent: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;项目建议书&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            unit: </span><span style="color:#032F62;">&#39;省发展改革&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            start_date: </span><span style="color:#032F62;">&#39;2023-11-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            end_date: </span><span style="color:#032F62;">&#39;2024-02-20&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            progress: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            statusText: </span><span style="color:#032F62;">&#39;已完成&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            status: </span><span style="color:#032F62;">&#39;finish&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.container-gantt</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">600</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">padding</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.gantt</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">margin-top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">relative</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">calc</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">32</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="ganttcomponent-vue" tabindex="-1">GanttComponent.vue <a class="header-anchor" href="#ganttcomponent-vue" aria-label="Permalink to &quot;GanttComponent.vue&quot;">​</a></h2><details class="details custom-block"><summary>Details</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ganttContainer&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;gantt-container&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { gantt } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;dhtmlx-gantt&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    tasks: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Object,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> { data: [], links: [] };</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    gantt.config.readonly </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    gantt.config.row_height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">40</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    gantt.config.bar_height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">24</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否显示左侧树表格</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// gantt.config.show_grid = false;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    gantt.config.date_format </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;%Y-%m-%d&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    gantt.config.columns </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   最左侧新增符号列，甘特图内置可选使用列</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   name: &#39;add&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   label: &#39;&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   width: &#39;40&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;text&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&#39;任务名称&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        tree: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        resize: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        width: </span><span style="color:#9ECBFF;">&#39;210&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// template: (task) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//   return \`&lt;div style=&quot;display: flex; align-items: center&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//       &lt;i class=&quot;iconfont \${task.parent == 0 ? &#39;icon-menu&#39; : &#39;icon-LightbulbCircle-1&#39;}&quot; style=&quot;color: #56abfb; margin-left: 4px&quot;&gt;&lt;/i&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//       &lt;span style=&quot;margin-left: 6px&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//         \${task.text}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//       &lt;/span&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//     &lt;/div&gt;\`;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   name: &#39;unit&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   label: &#39;责任单位&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   width: &#39;150&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   align: &#39;center&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   resize: true,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   name: &#39;statusText&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   label: &#39;状态&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   width: &#39;90&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   align: &#39;center&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   template: function(task) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//     return \`&lt;div&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//         &lt;span class=&quot;status-\${task.status}&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//           \${task.statusText}</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//         &lt;/span&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//       &lt;/div&gt;\`;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;start_date&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&#39;开始时间&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        align: </span><span style="color:#9ECBFF;">&#39;center&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        width: </span><span style="color:#9ECBFF;">&#39;90&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;end_date&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: </span><span style="color:#9ECBFF;">&#39;完成时间&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        align: </span><span style="color:#9ECBFF;">&#39;center&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        width: </span><span style="color:#9ECBFF;">&#39;90&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//自适应</span></span>
<span class="line"><span style="color:#E1E4E8;">    gantt.config.fit_tasks </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//表头高度</span></span>
<span class="line"><span style="color:#E1E4E8;">    gantt.config.scale_height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 自定义任务class</span></span>
<span class="line"><span style="color:#E1E4E8;">    gantt.templates.</span><span style="color:#B392F0;">task_class</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">start</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">end</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">task</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (task.status) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;finish&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;high&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;doing&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;low&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ready&#39;</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;medium&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//开启提示：鼠标悬浮在gantt行上显示</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// gantt.plugins({</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   tooltip: true,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 当鼠标放到甘特图上时出现的tooltips</span></span>
<span class="line"><span style="color:#E1E4E8;">    gantt.</span><span style="color:#B392F0;">attachEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;onGanttReady&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> tooltips </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> gantt.ext.tooltips;</span></span>
<span class="line"><span style="color:#E1E4E8;">      gantt.templates.</span><span style="color:#B392F0;">tooltip_text</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">start</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">end</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">task</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// return (</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//   &#39;任务名称：&#39; +</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//   task.text +</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//   &#39;&lt;br/&gt;责任单位：&#39; +</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//   task.unit +</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//   &#39;&lt;br/&gt;状态：&#39; +</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//   task.statusText +</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//   &#39;&lt;br/&gt;开始时间：&#39; +</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//   gantt.templates.tooltip_date_format(task.start_date) +</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//   &#39;&lt;br/&gt;结束时间：&#39; +</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//   gantt.templates.tooltip_date_format(task.end_date)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// );</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//时间轴格式化模版</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">yearScaleTemplate</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">date</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> date.</span><span style="color:#B392F0;">getFullYear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">monthScaleTemplate</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">date</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> date.</span><span style="color:#B392F0;">getMonth</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;月&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//时间轴样式</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">yearScaleCss</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;yearScaleStyle&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">monthScaleCss</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;monthScaleStyle&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">    gantt.config.scales </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { unit: </span><span style="color:#9ECBFF;">&#39;year&#39;</span><span style="color:#E1E4E8;">, step: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, format: yearScaleTemplate, css: yearScaleCss },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { unit: </span><span style="color:#9ECBFF;">&#39;month&#39;</span><span style="color:#E1E4E8;">, step: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, format: monthScaleTemplate, css: monthScaleCss },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//禁用双击事件</span></span>
<span class="line"><span style="color:#E1E4E8;">    gantt.config.details_on_dblclick </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//关闭所有错误提示信息：gantt有自己的异常消息，如果不关闭可能页面会弹出异常消息</span></span>
<span class="line"><span style="color:#E1E4E8;">    gantt.config.show_errors </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    gantt.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$refs.ganttContainer);</span></span>
<span class="line"><span style="color:#E1E4E8;">    gantt.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$props.tasks);</span></span>
<span class="line"><span style="color:#E1E4E8;">    gantt.i18n.</span><span style="color:#B392F0;">setLocale</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;cn&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;dhtmlx-gantt/codebase/dhtmlxgantt.css&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.gantt-container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  ::v</span><span style="color:#79B8FF;">-</span><span style="color:#E1E4E8;">deep .gantt_layout_root {</span></span>
<span class="line"><span style="color:#E1E4E8;">    .status</span><span style="color:#79B8FF;">-</span><span style="color:#E1E4E8;">doing {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#73d897</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">13</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.status-finish</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#89c4fc</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">13</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.status-ready</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#aaaaaa</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">13</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.high</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">solid</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">#409eff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#409eff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#409eff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.high</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.gantt_task_progress</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#66b1ff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.low</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">solid</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">#67c23a</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#67c23a</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#67c23a</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.low</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.gantt_task_progress</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#85ce61</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.medium</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">solid</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">#909399</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#909399</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#909399</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.medium</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.gantt_task_progress</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#a6a9ad</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.gantt_grid_data</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.gantt_row.odd:hover</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#ececec</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!important</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.gantt_grid_data</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.gantt_row:hover</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#ececec</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!important</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.gantt_grid_scale</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.gantt_grid_head_cell</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">15</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.gantt_folder_open</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">.gantt_folder_closed</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">.gantt_file</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ganttContainer&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;gantt-container&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { gantt } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;dhtmlx-gantt&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    tasks: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Object,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> { data: [], links: [] };</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    gantt.config.readonly </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    gantt.config.row_height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">40</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    gantt.config.bar_height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">24</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否显示左侧树表格</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// gantt.config.show_grid = false;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    gantt.config.date_format </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;%Y-%m-%d&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    gantt.config.columns </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   最左侧新增符号列，甘特图内置可选使用列</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   name: &#39;add&#39;,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   label: &#39;&#39;,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   width: &#39;40&#39;,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;text&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&#39;任务名称&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        tree: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        resize: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        width: </span><span style="color:#032F62;">&#39;210&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// template: (task) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//   return \`&lt;div style=&quot;display: flex; align-items: center&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//       &lt;i class=&quot;iconfont \${task.parent == 0 ? &#39;icon-menu&#39; : &#39;icon-LightbulbCircle-1&#39;}&quot; style=&quot;color: #56abfb; margin-left: 4px&quot;&gt;&lt;/i&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//       &lt;span style=&quot;margin-left: 6px&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//         \${task.text}</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//       &lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//     &lt;/div&gt;\`;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   name: &#39;unit&#39;,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   label: &#39;责任单位&#39;,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   width: &#39;150&#39;,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   align: &#39;center&#39;,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   resize: true,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   name: &#39;statusText&#39;,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   label: &#39;状态&#39;,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   width: &#39;90&#39;,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   align: &#39;center&#39;,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   template: function(task) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//     return \`&lt;div&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//         &lt;span class=&quot;status-\${task.status}&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//           \${task.statusText}</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//         &lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//       &lt;/div&gt;\`;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;start_date&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&#39;开始时间&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        align: </span><span style="color:#032F62;">&#39;center&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        width: </span><span style="color:#032F62;">&#39;90&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;end_date&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        label: </span><span style="color:#032F62;">&#39;完成时间&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        align: </span><span style="color:#032F62;">&#39;center&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        width: </span><span style="color:#032F62;">&#39;90&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//自适应</span></span>
<span class="line"><span style="color:#24292E;">    gantt.config.fit_tasks </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//表头高度</span></span>
<span class="line"><span style="color:#24292E;">    gantt.config.scale_height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 自定义任务class</span></span>
<span class="line"><span style="color:#24292E;">    gantt.templates.</span><span style="color:#6F42C1;">task_class</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">start</span><span style="color:#24292E;">, </span><span style="color:#E36209;">end</span><span style="color:#24292E;">, </span><span style="color:#E36209;">task</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (task.status) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;finish&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;high&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;doing&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;low&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ready&#39;</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;medium&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//开启提示：鼠标悬浮在gantt行上显示</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// gantt.plugins({</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   tooltip: true,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 当鼠标放到甘特图上时出现的tooltips</span></span>
<span class="line"><span style="color:#24292E;">    gantt.</span><span style="color:#6F42C1;">attachEvent</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;onGanttReady&#39;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> tooltips </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> gantt.ext.tooltips;</span></span>
<span class="line"><span style="color:#24292E;">      gantt.templates.</span><span style="color:#6F42C1;">tooltip_text</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">start</span><span style="color:#24292E;">, </span><span style="color:#E36209;">end</span><span style="color:#24292E;">, </span><span style="color:#E36209;">task</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// return (</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//   &#39;任务名称：&#39; +</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//   task.text +</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//   &#39;&lt;br/&gt;责任单位：&#39; +</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//   task.unit +</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//   &#39;&lt;br/&gt;状态：&#39; +</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//   task.statusText +</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//   &#39;&lt;br/&gt;开始时间：&#39; +</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//   gantt.templates.tooltip_date_format(task.start_date) +</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//   &#39;&lt;br/&gt;结束时间：&#39; +</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//   gantt.templates.tooltip_date_format(task.end_date)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// );</span></span>
<span class="line"><span style="color:#24292E;">      };</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//时间轴格式化模版</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">yearScaleTemplate</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">date</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> date.</span><span style="color:#6F42C1;">getFullYear</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">monthScaleTemplate</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">date</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> date.</span><span style="color:#6F42C1;">getMonth</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;月&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//时间轴样式</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">yearScaleCss</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;yearScaleStyle&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">monthScaleCss</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;monthScaleStyle&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">    gantt.config.scales </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">      { unit: </span><span style="color:#032F62;">&#39;year&#39;</span><span style="color:#24292E;">, step: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, format: yearScaleTemplate, css: yearScaleCss },</span></span>
<span class="line"><span style="color:#24292E;">      { unit: </span><span style="color:#032F62;">&#39;month&#39;</span><span style="color:#24292E;">, step: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, format: monthScaleTemplate, css: monthScaleCss },</span></span>
<span class="line"><span style="color:#24292E;">    ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//禁用双击事件</span></span>
<span class="line"><span style="color:#24292E;">    gantt.config.details_on_dblclick </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//关闭所有错误提示信息：gantt有自己的异常消息，如果不关闭可能页面会弹出异常消息</span></span>
<span class="line"><span style="color:#24292E;">    gantt.config.show_errors </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    gantt.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$refs.ganttContainer);</span></span>
<span class="line"><span style="color:#24292E;">    gantt.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$props.tasks);</span></span>
<span class="line"><span style="color:#24292E;">    gantt.i18n.</span><span style="color:#6F42C1;">setLocale</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;cn&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;dhtmlx-gantt/codebase/dhtmlxgantt.css&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.gantt-container</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  ::v</span><span style="color:#005CC5;">-</span><span style="color:#24292E;">deep .gantt_layout_root {</span></span>
<span class="line"><span style="color:#24292E;">    .status</span><span style="color:#005CC5;">-</span><span style="color:#24292E;">doing {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#73d897</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">border-radius</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">padding</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">13</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.status-finish</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#89c4fc</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">border-radius</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">padding</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">13</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.status-ready</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#aaaaaa</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">border-radius</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">padding</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">13</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.high</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">solid</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">#409eff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#409eff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#409eff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.high</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.gantt_task_progress</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#66b1ff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.low</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">solid</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">#67c23a</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#67c23a</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#67c23a</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.low</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.gantt_task_progress</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#85ce61</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.medium</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">solid</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">#909399</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#909399</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#909399</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.medium</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.gantt_task_progress</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#a6a9ad</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.gantt_grid_data</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.gantt_row.odd:hover</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#ececec</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!important</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.gantt_grid_data</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.gantt_row:hover</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#ececec</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!important</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.gantt_grid_scale</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.gantt_grid_head_cell</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">15</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.gantt_folder_open</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">.gantt_folder_closed</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">.gantt_file</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details>`,4),e=[o];function t(c,E,r,y,i,F){return n(),a("div",null,e)}const B=s(p,[["render",t]]);export{d as __pageData,B as default};
