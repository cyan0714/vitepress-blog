<template>
  <div class="TabScrollable">
    <div :class="['prev-btn', {disabled: currentScrollCount === 0}]" @click="handleScrollLeft">&lt;</div>
    <div class="scroll-area">
      <div class="scroll-item-container">
        <div class="scroll-item-wrap" :style="{marginLeft: currentMarginLeft}">
          <div @click="handleClick(index)" :class="['scroll-item', {active: currentIndex === index}]" v-for="(item, index) in list" :key="index">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
    <div :class="['next-btn', {disabled: currentScrollCount === maxScrollCount}]" @click="handleScrollRight">&gt;</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      currentMarginLeft: '0px',
      onceScrollCount: 5, // 一次滚动的个数
      currentScrollCount: 0, // 当前滚动的次数
      currentIndex: 0,
      list: [
        '2024-01',
        '2024-02',
        '2024-03',
        '2024-04',
        '2024-05',
        '2024-06',
        '2024-07',
        '2024-08',
        '2024-09',
        '2024-10',
        '2024-11',
        '2024-12',
      ],
    };
  },
  props: {},
  computed: {
    maxScrollCount() {
      return Math.floor(this.list.length / this.onceScrollCount);
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleScrollLeft() {
      if (this.currentScrollCount === 0) {
        return;
      }
      this.currentScrollCount--;
      this.currentMarginLeft = `-${this.currentScrollCount * this.onceScrollCount * 100}px`;
    },
    handleScrollRight() {
      if (this.currentScrollCount === this.maxScrollCount) {
        return;
      }
      this.currentScrollCount++;
      this.currentMarginLeft = `-${this.currentScrollCount * this.onceScrollCount * 100}px`;
    },
    handleClick(index) {
      this.currentIndex = index;
    }
  },
};
</script>

<style scoped lang="scss">
$border-style: 1px solid #000;
.TabScrollable {
  display: flex;
  .prev-btn, .next-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    color: #000;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 20px;
    &.disabled {
      color: #ccc;
    }
  }
  .scroll-area {
    display: flex;
    width: 921px;
    overflow: auto;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    overflow: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
    .scroll-item-container {
      overflow: hidden;
    }
    .scroll-item-wrap {
      display: flex;
      transition: all .5s;
    }
    .scroll-item {
      flex-shrink: 0;
      width: 100px;
      border: 1px solid #000;
      border-right: none;
      line-height: 45px;
      white-space: nowrap;
      text-align: center;
      cursor: pointer;
      &:last-child {
        border-right: 1px solid #000;
      }
      &.active {
        background-color: #506eda;
        color: #fff;;
      }
    }
  }
}
</style>
