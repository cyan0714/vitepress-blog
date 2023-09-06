# Echarts 相关

## Echarts 地图的 JSON 文件中各个字段的含义
**coordinates**: 用逗号分隔的一个个UTF-8字符串，每个字符串都是一片区域

**childNum**: 多边形区域数量

**encodeOffsets**: 是解压需要的信息，跟 coordinates 一一对应

问题来源：在海南省地图 JSON 文件里添加三沙区域，并保持地图较大的可视区域

知识来源:  https://github.com/apache/echarts/issues/3308

## legend 固定列数且对齐

效果:
![image](./imgs/10.png)

代码:
```js
legend: [
  {
    bottom: 20,
    icon: 'circle',
    orient: 'vertical',
    left: 50,
    data: top10Legend.slice(0, columnItemCount),
    itemWidth: 20,
    itemHeight: 14
  },
  {
    bottom: 20,
    icon: 'circle',
    orient: 'vertical',
    right: 50,
    data: top10Legend.slice(columnItemCount, top10Legend.length),
    itemWidth: 20,
    itemHeight: 14
  }
],

// 其中 top10Legend 为 ['石油、煤炭及其他燃料加工业', '电气机械和器材制造业', ...], columnItemCount 为 Math.floor(top10Legend.length / 2)
