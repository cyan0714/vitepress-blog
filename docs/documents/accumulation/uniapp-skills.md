# uniapp 小技巧
## 获取元素可用高度
```js
uni.getSystemInfo({ // 接口获取屏幕高度
  success: (res) => {
    const wHeight = res.windowHeight // windoHeight 为窗口高度
    let titleH = uni.createSelectorQuery().select(".content-list"); // 想要获取高度的元素名
    titleH.boundingClientRect(data => {
      this.scrollHeight = wHeight - data.top  // 计算高度：元素高度 = 窗口高度 - 元素距离顶部的距离（data.top）
      console.log('this.scrollHeight',this.scrollHeight);
    }).exec()
  }
})
```