## 大学

<div v-for="(item, index) in pictures">
  <br/>
  <img :src="`http://${item.path}`" style="width:600px" >
</div>
<img src="./imgs/1.png" style="width:600px" >

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        pictures: [],
      }
    },
    created() {
      axios.get('http://localhost:8080/file/pictures')
        .then(res => {
          this.pictures = res.data
        })
        .catch(error => {
        })
    }
}
</script>