import DefaultTheme from 'vitepress/theme'
import VueLazyload from 'vue3-lazyload';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './style/index.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueLazyload)
    app.use(ElementPlus);
  }
}
