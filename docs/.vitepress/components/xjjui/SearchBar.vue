<template>
  <div class="search-bar">
    <div class="range-area">
      <span class="txt">范围:</span>
      <div class="btn-item-wrap">
        <div
          v-for="(item, index) in range"
          :class="['btn-item', currentIndex === index ? 'btn-item-actived' : '']"
          :key="index"
          @click="handleClick(index)">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="search-area">
      <el-input
        class="lookui-input"
        v-model="keywords"
        placeholder="请输入公文标题或来文单位"
        clearable></el-input>
      <el-button class="lookui-btn" type="primary" @click="handleQuery">查询</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      currentIndex: 0,
      range: [
        {
          name: '个人',
          id: 1,
        },
        {
          name: '部门',
          id: 2,
        },
        {
          name: '单位',
          id: 3,
        },
      ],
      keywords: '',
    };
  },
  props: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    handleClick(index) {
      this.currentIndex = index;
    },
    handleQuery() {},
  },
};
</script>

<style scoped lang="scss">
.search-bar {
  display: flex;
  justify-content: space-between;
  .range-area {
    display: flex;
    align-items: center;
    .btn-item-wrap {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      border: 1px solid #d9d9d9;
      border-left: none;
      margin-left: 10px;
      border-radius: 4px;
      .btn-item {
        padding: 4px 16px 6px;
        cursor: pointer;
        border-left: 1px solid #d9d9d9;
        &:first-child {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
        &:last-child {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
        &.btn-item-actived {
          background-color: #506eda;
          color: #fff;
        }
      }
    }
  }

  .search-area {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    .lookui-input {
      width: 250px;
      ::v-deep .el-input__inner {
        height: 34px;
      }
      ::v-deep .el-input__icon {
        line-height: 34px;
      }
    }
    .lookui-btn {
      padding: 9px 18px;
      border-radius: 0;
    }
  }
}
</style>
