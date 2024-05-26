## 大学

<div class="container">
  <div v-for="(item, index) in pictures" :key="index">
    <img class='colleage-img' v-lazy="`http://${item.path}`">
  </div>
</div>

<script setup>
// import { getPicturesByType, download } from '../../../.vitepress/service/api.js'
import { ref, onMounted } from 'vue'

const pictures = ref([])

const handleDownload = () => {
  const filename = 'attachment-1690074280638.xlsx'
  download(filename).then(res => {
    // res 为 Blod 对象
    downloadFile(res, filename);
  })
}

const downloadFile = (obj, name) => {
  const blob = new Blob([obj])
  const downloadElement = document.createElement('a')
  const href = window.URL.createObjectURL(blob) // 创建下载的链接
  downloadElement.href = href
  downloadElement.download = name // 下载后文件名
  document.body.appendChild(downloadElement)
  downloadElement.click() // 点击下载
  document.body.removeChild(downloadElement) // 下载完成移除元素
  window.URL.revokeObjectURL(href)
}

onMounted(() => {
  getPicturesByType('大学').then(res => {
    pictures.value = res
    console.log('pictures', pictures.value)
  })
})
</script>

<style scoped>
  .container {
    column-count: 2;
    column-gap: 10px;
  }
  .colleage-img {
    width: 100%;
    display: block;
    margin-bottom: 10px;
  }
</style>
