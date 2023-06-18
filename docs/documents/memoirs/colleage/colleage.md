## 大学
<div v-for="(item, index) in pictures">
  <br/>
  <img class='colleage-img' :data-src="`http://${item.path}`" style="width:600px;min-height:400px" >
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
    }
}
</script>