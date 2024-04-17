<template>
  <div class="main-wrapper">
    <header class="header-container">
      <div class="prev-year year-block" @click="handleMinusYear">
        <el-icon><ArrowLeft /></el-icon>
        <span>{{ currentYear - 1 }}</span>
        <span>年</span>
      </div>
      <div class="current-year">
        <div class="cy-top">{{ currentYear }}年</div>
        <div class="cy-bot">
          <div
            v-for="(month, index) in 12"
            @click="toggleReportMonth(index + 1)"
            :class="{
              'current-month': index + 1 === currentMonth,
              'forbidden-month': hasForbiddenMonthClass(month),
            }"
            :key="index">
            {{ month }}月
          </div>
        </div>
      </div>
      <div class="next-year year-block" @click="handleAddYear">
        <el-icon><ArrowRight /></el-icon>
        <span>{{ currentYear + 1 }}</span>
        <span>年</span>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
    };
  },
  props: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    toggleReportMonth(month) {
      if (this.hasForbiddenMonthClass(month)) {
        return;
      }
      this.currentMonth = month;
    },
    handleAddYear() {
      this.currentYear++;
    },
    handleMinusYear() {
      this.currentYear--;
    },
    hasForbiddenMonthClass(month) {
      // 创建表示当前日期的 Date 对象
      const currentDate = new Date();

      // 创建表示目标日期的 Date 对象
      const targetDate = new Date(this.currentYear, month - 1); // 月份需要减去1，因为月份是从0开始计数的

      // 获取当前日期和目标日期的时间戳
      const currentTimestamp = currentDate.getTime();
      const targetTimestamp = targetDate.getTime();

      // 判断目标日期的时间戳是否大于当前日期的时间戳
      if (targetTimestamp > currentTimestamp) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.main-wrapper {
  background-color: #fff;
}
header.header-container {
  display: flex;
  height: 90px;
  div.year-block {
    display: flex;
    align-items: center;
    border: 1px solid #797979;
    border-radius: 4px;
    line-height: 90px;
    padding: 0 8px;
    cursor: pointer;
    i {
      font-size: 14px;
      font-weight: bold;
    }
    span {
      &:nth-of-type(1) {
        font-size: 14px;
        font-weight: bold;
        margin: 0 4px;
      }
    }
  }
  div.prev-year {
    i.el-icon-arrow-left {
    }
  }

  div.current-year {
    flex: 1;
    margin: 0 14px;
    height: 100%;
    div.cy-top {
      border: 1px solid #797979;
      border-bottom: none;
      border-radius: 8px 8px 0 0;
      height: 50%;
      line-height: 45px;
      text-align: center;
      font-size: 28px;
      font-weight: bold;
    }

    div.cy-bot {
      display: flex;
      height: 50%;
      line-height: 45px;
      div {
        flex: 1;
        text-align: center;
        border: 1px solid #797979;
        margin-right: -1px;
        cursor: pointer;
        &:last-child {
          margin-right: 0;
        }
        &.current-month {
          background-color: #506eda;
          color: #fff;
          border: none;
        }
        &.forbidden-month {
          background-color: #cccccc;
          color: #fff;
          border: none;
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>
