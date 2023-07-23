## 大学
<div v-for="(item, index) in pictures">
  <br/>
  <div @click="handleDownload" style="display:none">下载</div>
  <img class='colleage-img' :data-src="`http://${item.path}`" style="width:600px;min-height:400px" >
</div>

<script>
  import { getPicturesByType, download } from '../../../.vitepress/service/api.js'

  export default {
    data() {
      return {
        pictures: [],
      }
    },
    created() {

    },
    mounted() {
       getPicturesByType('大学').then(res => {
        this.pictures = res
        this.$nextTick(() => {
          // 懒加载
          const imgs = document.querySelectorAll('.colleage-img')
          const callback = (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const img = entry.target;
                const data_src = img.getAttribute('data-src');
                img.setAttribute('src', data_src)
                observer.unobserve(img);
              }
            })
          }
          const observer = new IntersectionObserver(callback)
          imgs.forEach( image => {
            observer.observe(image)
          })
        })
      })
    },
    methods: {
      handleDownload() {
        const filename = 'attachment-1690074280638.xlsx'
        download(filename).then(res => {
          // res 为 Blod 对象
          this.downloadFile(res, filename);
        })
      },
      downloadFile(obj, name) {
        const blob = new Blob([obj])
        const downloadElement = document.createElement('a')
        const href = window.URL.createObjectURL(blob) // 创建下载的链接
        downloadElement.href = href
        downloadElement.download = name // 下载后文件名
        document.body.appendChild(downloadElement)
        downloadElement.click() // 点击下载
        document.body.removeChild(downloadElement) // 下载完成移除元素
        window.URL.revokeObjectURL(href)
      },
    }
}
</script>