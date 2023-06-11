# 戏命师-烬

![jhin](./imgs/jhin.png)

<div v-for="(item, index) in quotes">
  <div style="line-height: 30px">{{index + 1}}. {{item.word}}</div>
</div>

<script>
  import { getQuotesByName } from '../../.vitepress/service/api.js'

  export default {
    data() {
      return {
        quotes: [],
      }
    },
    created() {
      getQuotesByName('烬').then(res => {
        this.quotes = res
      })
    }
  }
</script>