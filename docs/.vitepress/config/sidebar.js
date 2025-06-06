export default {
  '/documents/frontend': getFrontend(),
  '/documents/backend': getBackend(),
  '/documents/git': getGit(),
  '/documents/accumulation': getAccumulation(),
  '/documents/database': getDatabase(),
  '/documents/vscode-settings-plugins': getVSCodeSettingsPlugins(),
  '/documents/snippets': getSnippets(),
  '/documents/handwriting': getHandwriting(),
  '/documents/scripts': getScripts(),
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
        { text: '迭代器和生成器', link: '/documents/frontend/javascript/generator' },
        { text: 'proxy 代理', link: '/documents/frontend/javascript/proxy' },
        { text: '事件循环', link: '/documents/frontend/javascript/event-loop' },
        { text: '防抖', link: '/documents/frontend/javascript/debounce' },
        { text: '节流', link: '/documents/frontend/javascript/throttle' },
        { text: '预编译', link: '/documents/frontend/javascript/pre-compile' },
        { text: 'ESModule', link: '/documents/frontend/javascript/es-module' },
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
      items: [
        { text: 'nodejs', link: '/documents/backend/nodejs/nodejs' },
        { text: 'nestjs', link: '/documents/backend/nodejs/nestjs' }
      ],
    },
  ]
}

function getDatabase() {
  return [
    {
      text: '数据库',
      items: [
        { text: '数据库的操作', link: '/documents/database/database-operation' },
        { text: '表的操作', link: '/documents/database/table-operation' },
        { text: 'MySQL 数据类型', link: '/documents/database/data-type' },
        { text: '表约束', link: '/documents/database/constraint' },
        { text: 'DDL', link: '/documents/database/ddl' },
        { text: 'DML', link: '/documents/database/dml' },
      ],
    },
  ];
}

function getGit() {
  return [
    {
      text: 'Git',
      items: [{ text: 'git', link: '/documents/git/git' }],
    },
  ]
}

function getAccumulation() {
  return [
    {
      text: '我的积累',
      items: [
        { text: '前端如何导入导出文件', link: '/documents/accumulation/import-export-file' },
        { text: '前后端实现文件上传和下载', link: '/documents/accumulation/download-file' },
        { text: '搭建自己的 ChatGPT', link: '/documents/accumulation/build-own-chatgpt' },
        { text: '代码风格', link: '/documents/accumulation/code-style' },
        { text: '服务器部署', link: '/documents/accumulation/deploy' },
        { text: '开发技巧', link: '/documents/accumulation/development-skills' },
        { text: '自定义 elementui 样式', link: '/documents/accumulation/diy-elementui-style' },
        { text: 'elementui 常见问题及技巧', link: '/documents/accumulation/element-ui-skills' },
        { text: 'echarts 相关', link: '/documents/accumulation/echarts' },
        { text: 'import from 加载规则', link: '/documents/accumulation/import-from-rules' },
        { text: 'npm 相关', link: '/documents/accumulation/about-npm' },
        { text: '类型转换', link: '/documents/accumulation/type-conversion' },
        { text: 'uniapp 开发技巧', link: '/documents/accumulation/uniapp-skills' },
        { text: '海南省地图', link: '/documents/accumulation/hainan-map' },
        { text: '中国地图', link: '/documents/accumulation/china-map' },
        { text: '新境界ui', link: '/documents/accumulation/xjj-ui' },
        { text: '甘特图', link: '/documents/accumulation/gantt' },
        { text: 'vant自定义组件', link: '/documents/accumulation/vant' },
        { text: '其他', link: '/documents/accumulation/others' },
      ],
    },
  ];
}

function getVSCodeSettingsPlugins() {
  return [
    {
      text: 'VSCode 配置及插件',
      items: [
        { text: '配置', link: '/documents/vscode-settings-plugins/settings' },
        { text: '插件', link: '/documents/vscode-settings-plugins/plugins' },
      ],
    },
  ];
}

function getSnippets() {
  return [
    {
      text: '代码片段',
      items: [
        { text: 'js', link: '/documents/snippets/js' },
        { text: 'css', link: '/documents/snippets/css' },
        { text: 'vue', link: '/documents/snippets/vue' },
        { text: 'element-ui', link: '/documents/snippets/element-ui' },
        { text: 'avue', link: '/documents/snippets/avue' },
      ],
    },
  ];
}

function getHandwriting() {
  return [
    {
      text: '代码片段',
      items: [
        { text: '手写懒加载', link: '/documents/handwriting/lazy-load' },
        { text: '手写算法', link: '/documents/handwriting/algorithm' },
        { text: '手写Vue响应式原理', link: '/documents/handwriting/vue-reactive' },
        { text: '手写apply', link: '/documents/handwriting/apply' },
        { text: '手写call', link: '/documents/handwriting/call' },
        { text: '手写bind', link: '/documents/handwriting/bind' },
        { text: '手写promise', link: '/documents/handwriting/promise' },
        { text: '手写vue-data-methods', link: '/documents/handwriting/vue-data-methods' },
      ],
    },
  ];
}

function getScripts() {
  return [
    {
      text: '脚本',
      items: [
        { text: '自动化', link: '/documents/scripts/automation' },
        { text: '文件操作', link: '/documents/scripts/file-operations' },
        { text: '文本处理', link: '/documents/scripts/text-processing' },
      ],
    },
  ];
}
