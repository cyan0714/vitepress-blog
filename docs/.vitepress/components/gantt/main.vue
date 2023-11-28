<template>
  <div class="container-gantt">
    <GanttComponent class="gantt" :tasks="tasks"></GanttComponent>
  </div>
</template>

<script lang="ts">
import GanttComponent from './GanttComponent.vue';

export default {
  name: 'majorGantt',
  components: { GanttComponent },
  data() {
    return {
      tasks: {
        data: [
          {
            id: 1,
            text: '项目策划生成',
            // unit: '省自然资源',
            start_date: '2023-08-17',
            end_date: '2024-10-20',
            progress: 1, // 进度
            statusText: '已完成',
            status: 'finish',
            open: true, // 是否展开子项
          },
          {
            id: 11,
            parent: 1,
            text: '合规性审批报告',
            unit: '省自然资源',
            start_date: '2023-09-17',
            end_date: '2023-11-20',
            progress: 1,
            statusText: '已完成',
            status: 'finish',
          },
          {
            id: 12,
            parent: 1,
            text: '会商意见汇总',
            unit: '省自然资源',
            start_date: '2023-10-17',
            end_date: '2024-04-20',
            progress: 1,
            statusText: '已完成',
            status: 'finish',
          },
          {
            id: 2,
            text: '项目审批开工',
            // unit: '省自然资源',
            start_date: '2023-10-20',
            end_date: '2024-05-20',
            progress: 0.8,
            statusText: '进行中',
            status: 'doing',
            open: true,
          },
          {
            id: 21,
            parent: 2,
            text: '项目建议书',
            unit: '省发展改革',
            start_date: '2023-11-20',
            end_date: '2024-02-20',
            progress: 1,
            statusText: '已完成',
            status: 'finish',
          },
          {
            id: 22,
            parent: 2,
            text: '可行性研究报告批复',
            // unit: '规划条件核实',
            // start_date: '2024-08-20',
            // end_date: '2024-10-20',
            // progress: 1,
            statusText: '未开始',
            status: 'ready',
          },
          {
            id: 23,
            parent: 2,
            text: '建设用地规划许可证核发',
            // unit: '规划条件核实',
            start_date: '',
            end_date: '',
            // progress: 1,
            statusText: '未开始',
            status: 'ready',
          },
          {
            id: 24,
            parent: 2,
            text: '规格设计方案',
            statusText: '未开始',
            status: 'ready',
          },
          {
            id: 25,
            parent: 2,
            text: '初步设计和概预算方案设计',
            statusText: '未开始',
            status: 'ready',
          },
          {
            id: 21,
            parent: 2,
            text: '项目建议书',
            unit: '省发展改革',
            start_date: '2023-11-20',
            end_date: '2024-02-20',
            progress: 1,
            statusText: '已完成',
            status: 'finish',
          },
          {
            id: 211,
            parent: 2,
            text: '项目建议书',
            unit: '省发展改革',
            start_date: '2023-11-20',
            end_date: '2024-02-20',
            progress: 1,
            statusText: '已完成',
            status: 'finish',
          },
          {
            id: 212,
            parent: 2,
            text: '项目建议书',
            unit: '省发展改革',
            start_date: '2023-11-20',
            end_date: '2024-02-20',
            progress: 1,
            statusText: '已完成',
            status: 'finish',
          },
          {
            id: 213,
            parent: 2,
            text: '项目建议书',
            unit: '省发展改革',
            start_date: '2023-11-20',
            end_date: '2024-02-20',
            progress: 1,
            statusText: '已完成',
            status: 'finish',
          },
          {
            id: 214,
            parent: 2,
            text: '项目建议书',
            unit: '省发展改革',
            start_date: '2023-11-20',
            end_date: '2024-02-20',
            progress: 1,
            statusText: '已完成',
            status: 'finish',
          },
          {
            id: 215,
            parent: 2,
            text: '项目建议书',
            unit: '省发展改革',
            start_date: '2023-11-20',
            end_date: '2024-02-20',
            progress: 1,
            statusText: '已完成',
            status: 'finish',
          },
          {
            id: 216,
            parent: 2,
            text: '项目建议书',
            unit: '省发展改革',
            start_date: '2023-11-20',
            end_date: '2024-02-20',
            progress: 1,
            statusText: '已完成',
            status: 'finish',
          },
          {
            id: 217,
            parent: 2,
            text: '项目建议书',
            unit: '省发展改革',
            start_date: '2023-11-20',
            end_date: '2024-02-20',
            progress: 1,
            statusText: '已完成',
            status: 'finish',
          },
          {
            id: 218,
            parent: 2,
            text: '项目建议书',
            unit: '省发展改革',
            start_date: '2023-11-20',
            end_date: '2024-02-20',
            progress: 1,
            statusText: '已完成',
            status: 'finish',
          },
          {
            id: 219,
            parent: 2,
            text: '项目建议书',
            unit: '省发展改革',
            start_date: '2023-11-20',
            end_date: '2024-02-20',
            progress: 1,
            statusText: '已完成',
            status: 'finish',
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.container-gantt {
  height: 600px;
  padding: 20px;
  .gantt {
    margin-top: 20px;
    overflow: hidden;
    position: relative;
    height: calc(100% - 32px);
  }
}
</style>
