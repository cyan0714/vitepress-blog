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

## 2. 自定义 nav-bar

```vue 
<template>
  <van-nav-bar
    :title="title || options.title"
    :border="options.border"
    left-arrow
    @click-left="goBack"
    :style="{
      '--var-title-color': options.titleColor,
      '--var-left-arrow-color': options.leftArrowColor,
      '--var-background-color': options.bgColor
    }"
  />
</template>

<script>
import { NavBar } from 'vant';
export default {
  components: {
    [NavBar.name]: NavBar
  },
  data() {
    return {}
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          border: true,
          bgColor: '#fff',
          titleColor: '#000',
          leftArrowColor: '#000',
        }
      }
    },
    title: {
      type: String,
      default: '',
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  }
}
</script>

<style scoped lang="scss">
.van-nav-bar {
  background-color: var(--var-background-color);
  ::v-deep .van-icon {
    color: var(--var-left-arrow-color);
  }
}
::v-deep .van-nav-bar__arrow {
  font-size: 20px;
}
::v-deep .van-nav-bar__title {
  font-size: 18px;
  color: var(--var-title-color);
}
</style>
```