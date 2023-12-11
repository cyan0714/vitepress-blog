# vant 自定义组件

## 1. 自定义 loading

```vue
<template>
  <van-loading class="diy-dialog" color="#1989fa" vertical style="">加载中...</van-loading>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.diy-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
```