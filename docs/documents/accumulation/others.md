# 其他

##  如何解决移动端唤起键盘时键盘遮住输入框问题?
```js
const scrollIntoViewByFocus = function (dom) {
  const ua = navigator.userAgent;
  const iOS = /iPad|iPhone|iPod/.test(ua);
  setTimeout(() => {
    if (iOS) {
      if (!/OS 11_[0-3]\D/.test(ua)) {
        document.body.scrollTop = document.body.scrollHeight;
      }
    } else {
      dom.scrollIntoView(false);
    }
  }, 300);
}
```

## echarts 的 markline
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
</head>

<body>
  <div id="chartContainer" style="width: 600px; height: 400px;"></div>

  <script>
    var data = [
      { name: 'Category 1', value: -10 },
      { name: 'Category 2', value: 20 },
      { name: 'Category 3', value: -5 },
      { name: 'Category 4', value: 15 },
    ];

    var sum = 0;
    for (var i = 0; i < data.length; i++) {
      sum += data[i].value;
    }
    var average = sum / data.length;

    var chartOptions = {
      xAxis: {
        type: 'value',
        axisLine: { show: false },
        splitLine: { show: false },
      },
      yAxis: {
        type: 'category',
        data: data.map(item => item.name),
        axisLine: { show: false },
        axisTick: { show: false },
      },
      series: [
        {
          type: 'bar',
          data: data.map(item => item.value),
          itemStyle: {
            color: function (params) {
              return params.value >= 0 ? 'green' : 'red';
            },
          },
          markLine: {
            symbol: "none", //去掉警戒线最后面的箭头
            label: {
              position: "end" //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
            },
            data: [{
              silent: false, //鼠标悬停事件  true没有，false有
              lineStyle: {   //警戒线的样式  ，虚实  颜色
                type: "solid",
                color: "#FA3934",
              },
              xAxis: average // 警戒线的标注值，可以有多个xAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
            }]
          }
        },
      ],
    };

    var chartContainer = document.getElementById('chartContainer');
    var chart = echarts.init(chartContainer);
    chart.setOption(chartOptions);
  </script>
</body>

</html>
```