import DefaultTheme from 'vitepress/theme'
// import VueLazyload from 'vue3-lazyload';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './style/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    // app.use(VueLazyload)
    app.use(ElementPlus);
  }
}
