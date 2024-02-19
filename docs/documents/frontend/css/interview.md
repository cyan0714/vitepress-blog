# CSS 面试题


## 1. display:none、visibility:hidden、opacity:0 的区别

### 相同点
都能使元素隐藏

### 不同点
1. 是否占据空间
`display:none` 否
`visibility:hidden` 是
`opacity:0` 是
2. 子元素是否继承
`display:none` 否
`visibility:hidden` 会被子元素继承，但是可以给子元素单独设置`visibility:visible`来显示子元素
`opacity:0` 会被子元素继承，但是不能设置子元素`opacity:1`来显示子元素
3. 事件绑定
`display:none` 否
`visibility:hidden` 否
`opacity:0` 是
4. 过渡动画
`display:none` 否
`visibility:hidden` 否
`opacity:0` 是
5. 是否会产生回流和重绘
`display:none` 会产生回流和重绘
`visibility:hidden` 只会引起页面重绘
`opacity:0` 只会引起页面重绘