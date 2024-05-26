## 小学

<div class="container">
  <div v-for="(item, index) in pictures" :key="index">
    <img class='primary-img' v-lazy="`http://${item.path}`">
  </div>
</div>

<script setup>
// import { getPicturesByType } from '../../../.vitepress/service/api.js'
import { ref, onMounted } from 'vue'

const pictures = ref([])

onMounted(() => {
  getPicturesByType('小学').then(res => {
    pictures.value = res
  })
})
</script>

<style scoped>
  .container {
    column-count: 2;
    column-gap: 10px;
  }
  .primary-img {
    width: 100%;
    display: block;
    margin-bottom: 10px;
  }
</style>