<template>
  <div class="toggle-area">
    <div @click="currentActive = 1" :class="{ active: currentActive === 1 }">按月</div>
    <div @click="currentActive = 2" :class="{ active: currentActive === 2 }">累计</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      currentActive: 1,
    };
  },
  props: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.toggle-area {
  display: flex;
  background-color: #f2f2f2;
  border-radius: 20px;
  cursor: pointer;
  > div {
    padding: 3px 10px;
    font-size: 12px;
    &.active {
      color: #fff;
      background-color: #506eda;
      border-radius: 20px;
    }
  }
}
</style>
