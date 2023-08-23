# 其他

## 如何解决移动端唤起键盘时键盘遮住输入框问题?

以 vant 为例

```html
<van-popup
  v-model="isShowPopup"
  :class="isFocus ? 'popup-container' : ''"
  round
  position="bottom"
  closeable
  close-on-click-overlay>
  <div ref="thly">
    <van-field
      v-model="applyDoneParams.content"
      colon
      label-width="4.5em"
      name="thly"
      label="申请理由"
      type="textarea"
      maxlength="200"
      placeholder="请输入申请理由"
      @focus="handleFocus"
      @blur="isFocus = false"
      required />
  </div>
</van-popup>
```

```js
data() {
  return {
    windowInnerHeight: 0,
    isFocus: false,
  }
},
mounted() {
  this.windowInnerHeight = window.innerHeight;
},
methods: {
  handleFocus() {
    setTimeout(() => {
      // 当软键盘的高度包含在 window.innerHeight 之中时，window.innerHeight 会随着软键盘的弹出而变小,
      // 这时可以使用 scrollIntoView() 将当前元素滚动到可视区域
      if (this.windowInnerHeight > window.innerHeight) {
        this.scrollIntoViewByFocus(this.$refs.thly)
      } else {
        // 当软键盘的高度不包含在 window.innerHeight 之中时(比如某些鸿蒙系统的手机), 则需要通过其他方法将元素滚动到可视区域(margin 或者 fixed)
        this.isFocus = true;
      }
    }, 300)
  },
  scrollIntoViewByFocus(dom) {
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
  };
}
```

```css
.popup-container {
  margin-bottom: 40vh;
}
```

## echarts 的 markline

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
              lineStyle: {
                type: 'solid',
                color: '#000',
              },
              label: {
                fontSize: 16,
                color: this.mainColor,
              },
              symbol: 'circle',
              symbolSize: 5,
              symbolOffset: [-1, 0.5, 0, 0],
              data: [{ type: 'average', name: 'Avg' }],
            },
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

## echarts 条形图如何隐藏 y 轴方向上的 0 刻度线

如何将下图圈起来的线隐藏起来?
![8](./imgs/8.png)

设置 y 轴的 axisLine
![9](./imgs/9.png)

最终代码:

```js
yAxis: {
  type: "category",
  axisLine: {
    show: true,
    lineStyle: {
      color: '#fff',
    }
  },
  // 重新定义类目轴上文字颜色
  axisLabel: {
    color: '#000'
  },
}
```

