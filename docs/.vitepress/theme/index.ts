import DefaultTheme from 'vitepress/theme'
import './style/index.scss'
import VueLazyload from 'vue3-lazyload';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(VueLazyload)
  }
}
