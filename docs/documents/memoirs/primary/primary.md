## 小学

<div v-for="(item, index) in count" >
  <img :src="`./imgs/${item}.jpg`" style="width:600px;margin-bottom:50px" >
</div>

<script>
export default {
  data() {
    return {
      count: 22
    };
  },
};
</script>

<style scoped>
</style>
