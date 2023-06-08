export default {
  '/documents/frontend': getFrontend(),
  '/documents/backend': getBackend(),
  '/documents/git': getGit(),
  '/documents/philosophy': getPhilosophy(),
  '/documents/accumulation': getAccumulation(),
  '/documents/memoirs': getMemoirs(),
}

function getFrontend() {
  return [
    {
      text: 'HTML',
      items: [{ text: '快速上手', link: '/documents/frontend/html/html' }],
    },
    {
      text: 'CSS',
      items: [{ text: '快速上手', link: '/documents/frontend/css/css' }],
    },
    {
      text: 'JavaScript',
      items: [
        { text: '基础', link: '/documents/frontend/javascript/basic' },
        { text: 'DOM 相关', link: '/documents/frontend/javascript/dom' },
        { text: '函数', link: '/documents/frontend/javascript/function' },
        { text: '数据类型', link: '/documents/frontend/javascript/data-type' },
        { text: '字符串方法', link: '/documents/frontend/javascript/methods-string' },
        { text: '数组方法', link: '/documents/frontend/javascript/methods-array' },
        { text: '数组迭代', link: '/documents/frontend/javascript/array-iteration' },
        { text: '对象方法', link: '/documents/frontend/javascript/methods-object' },
        { text: '日期对象', link: '/documents/frontend/javascript/date-object' },
        { text: '数学对象', link: '/documents/frontend/javascript/math-object' },
        { text: '异步函数', link: '/documents/frontend/javascript/fun-async' },
        { text: '面向对象编程', link: '/documents/frontend/javascript/fun-prototype' },
        { text: 'Class 类的使用', link: '/documents/frontend/javascript/fun-class' },
        { text: 'JavaScript API', link: '/documents/frontend/javascript/javascript-api' },
        { text: '生成器', link: '/documents/frontend/javascript/generator' },
        { text: 'proxy 代理', link: '/documents/frontend/javascript/proxy' },
        { text: '事件循环', link: '/documents/frontend/javascript/event-loop' },
      ],
    },
    {
      text: 'Vue',
      items: [
        { text: 'Vue2 基础', link: '/documents/frontend/vue/vue2' },
        { text: 'Vue3 基础', link: '/documents/frontend/vue/vue3' },
        { text: 'Vue3 Router', link: '/documents/frontend/vue/vue3-router' },
        { text: 'Vuex', link: '/documents/frontend/vue/vuex' },
        { text: 'Pinia', link: '/documents/frontend/vue/pinia' },
      ],
    },
    {
      text: 'TypeScript',
      items: [
        { text: '类型', link: '/documents/frontend/typescript/type' },
        { text: '其它', link: '/documents/frontend/typescript/other' },
      ],
    },
    {
      text: 'Vite',
      items: [{ text: '快速上手', link: '/documents/frontend/vite/vite' }],
    },
    {
      text: 'Pnpm',
      items: [{ text: '快速上手', link: '/documents/frontend/pnpm/pnpm' }],
    },
    {
      text: 'TailwindCSS',
      items: [{ text: '快速上手', link: '/documents/frontend/tailwindcss/tailwindcss' }],
    },
  ];
}

function getBackend() {
  return [
    {
      text: '后端',
      items: [{ text: 'nodejs', link: '/documents/backend/nodejs/nodejs' }],
    },
  ]
}

function getGit() {
  return [
    {
      text: 'Git',
      items: [{ text: 'git', link: '/documents/git/git' }],
    },
  ]
}

function getPhilosophy() {
  return [
    {
      text: '人生哲理',
      items: [
        { text: '卡密尔', link: '/documents/philosophy/camille' },
        { text: '亚索', link: '/documents/philosophy/yasuo' },
        { text: '劫', link: '/documents/philosophy/zed' },
        { text: '烬', link: '/documents/philosophy/jhin' },
        { text: '李青', link: '/documents/philosophy/leesin' },
        { text: '卢锡安', link: '/documents/philosophy/lucian' },
      ],
    },
  ];
}

function getAccumulation() {
  return [
    {
      text: '我的积累',
      items: [{ text: '我的积累', link: '/documents/accumulation/accumulation' }],
    },
  ]
}

function getMemoirs() {
  return [
    {
      text: '相册回忆录',
      items: [
        { text: '大学', link: '/documents/memoirs/colleage/colleage' },
        { text: '小学', link: '/documents/memoirs/primary/primary' },
      ],
    },
  ]
}
