<template>
  <div ref="ganttContainer" class="gantt-container"></div>
</template>

<script lang="ts">
import { gantt } from 'dhtmlx-gantt';
export default {
  data() {
    return {};
  },
  props: {
    tasks: {
      type: Object,
      default() {
        return { data: [], links: [] };
      },
    },
  },

  mounted: function () {
    gantt.config.readonly = true;
    gantt.config.row_height = 40;
    gantt.config.bar_height = 24;

    // 是否显示左侧树表格
    // gantt.config.show_grid = false;

    gantt.config.date_format = '%Y-%m-%d';

    gantt.config.columns = [
      // {
      //   最左侧新增符号列，甘特图内置可选使用列
      //   name: 'add',
      //   label: '',
      //   width: '40',
      // },
      {
        name: 'text',
        label: '任务名称',
        tree: true,
        resize: true,
        width: '210',
        // template: (task) => {
        //   return `<div style="display: flex; align-items: center">
        //       <i class="iconfont ${task.parent == 0 ? 'icon-menu' : 'icon-LightbulbCircle-1'}" style="color: #56abfb; margin-left: 4px"></i>
        //       <span style="margin-left: 6px">
        //         ${task.text}
        //       </span>
        //     </div>`;
        // },
      },
      // {
      //   name: 'unit',
      //   label: '责任单位',
      //   width: '150',
      //   align: 'center',
      //   resize: true,
      // },
      // {
      //   name: 'statusText',
      //   label: '状态',
      //   width: '90',
      //   align: 'center',
      //   template: function(task) {
      //     return `<div">
      //         <span class="status-${task.status}">
      //           ${task.statusText}
      //         </span>
      //       </div>`;
      //   },
      // },
      {
        name: 'start_date',
        label: '开始时间',
        align: 'center',
        width: '90',
      },
      {
        name: 'end_date',
        label: '完成时间',
        align: 'center',
        width: '90',
      },
    ];

    //自适应
    gantt.config.fit_tasks = true;

    //表头高度
    gantt.config.scale_height = 50;

    // 自定义任务class
    gantt.templates.task_class = function(start, end, task) {
      switch (task.status) {
        case 'finish':
          return 'high';
        case 'doing':
          return 'low';
        case 'ready':
          return 'medium';
      }
    };

    //开启提示：鼠标悬浮在gantt行上显示
    // gantt.plugins({
    //   tooltip: true,
    // });

    // 当鼠标放到甘特图上时出现的tooltips
    gantt.attachEvent('onGanttReady', function() {
      var tooltips = gantt.ext.tooltips;
      gantt.templates.tooltip_text = function(start, end, task) {
        return '';
        // return (
        //   '任务名称：' +
        //   task.text +
        //   '<br/>责任单位：' +
        //   task.unit +
        //   '<br/>状态：' +
        //   task.statusText +
        //   '<br/>开始时间：' +
        //   gantt.templates.tooltip_date_format(task.start_date) +
        //   '<br/>结束时间：' +
        //   gantt.templates.tooltip_date_format(task.end_date)
        // );
      };
    });

    //时间轴格式化模版
    var yearScaleTemplate = function(date) {
      return date.getFullYear();
    };
    var monthScaleTemplate = function(date) {
      return date.getMonth() + 1 + '月';
    };

    //时间轴样式
    var yearScaleCss = function() {
      return 'yearScaleStyle';
    };
    var monthScaleCss = function() {
      return 'monthScaleStyle';
    };
    gantt.config.scales = [
      { unit: 'year', step: 1, format: yearScaleTemplate, css: yearScaleCss },
      { unit: 'month', step: 1, format: monthScaleTemplate, css: monthScaleCss },
    ];

    //禁用双击事件
    gantt.config.details_on_dblclick = false;

    //关闭所有错误提示信息：gantt有自己的异常消息，如果不关闭可能页面会弹出异常消息
    gantt.config.show_errors = false;

    gantt.init(this.$refs.ganttContainer);
    gantt.parse(this.$props.tasks);
    gantt.i18n.setLocale('cn');
  },
};
</script>

<style>
@import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
</style>
<style lang="scss" scoped>
.gantt-container {
  ::v-deep .gantt_layout_root {
    .status-doing {
      background-color: #73d897;
      color: #fff;
      border-radius: 30px;
      padding: 5px 13px;
    }
    .status-finish {
      background-color: #89c4fc;
      color: #fff;
      border-radius: 30px;
      padding: 5px 13px;
    }
    .status-ready {
      background-color: #aaaaaa;
      color: #fff;
      border-radius: 30px;
      padding: 5px 13px;
    }
    .high {
      border: 2px solid #409eff;
      color: #409eff;
      background: #409eff;
    }
    .high .gantt_task_progress {
      background: #66b1ff;
    }
    .low {
      border: 2px solid #67c23a;
      color: #67c23a;
      background: #67c23a;
    }
    .low .gantt_task_progress {
      background: #85ce61;
    }
    .medium {
      display: none;
      border: 2px solid #909399;
      color: #909399;
      background: #909399;
    }
    .medium .gantt_task_progress {
      display: none;
      background: #a6a9ad;
    }
    .gantt_grid_data .gantt_row.odd:hover {
      background-color: #ececec !important;
    }
    .gantt_grid_data .gantt_row:hover {
      background-color: #ececec !important;
    }
    .gantt_grid_scale .gantt_grid_head_cell {
      color: #000;
      font-size: 15px;
    }
    .gantt_folder_open, .gantt_folder_closed, .gantt_file {
      display: none;
    }
  }
}
</style>
