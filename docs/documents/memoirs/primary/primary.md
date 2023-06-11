## 小学

<div v-for="(item, index) in pictures">
  <br/>
  <img :src="`http://${item.path}`" style="width:600px" >
</div>

<script>
  import { getPicturesByType } from '../../../.vitepress/service/api.js'

  export default {
    data() {
      return {
        pictures: [],
      }
    },
    created() {
      getPicturesByType('小学').then(res => {
        this.pictures = res
      })
    }
}
</script>