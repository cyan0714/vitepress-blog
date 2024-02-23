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

## 2. inline, block, and inline-block 的区别?
1. **Inline元素**： 
   - 默认情况下，内联元素不会导致换行，它们会在同一行内显示。 
   - 内联元素的宽度和高度由其内容决定，无法设置固定的宽度和高度。 
   - 内联元素只能容纳文本或其他内联元素，不能容纳块级元素。 
 
2. **Block元素**： 
   - 块级元素会导致换行，每个块级元素都会从新的一行开始。 
   - 块级元素的宽度默认为100%，可以设置固定的宽度和高度。 
   - 块级元素可以容纳内联元素和其他块级元素。 
 
3. **Inline-block元素**： 
   - 内联块级元素结合了内联元素和块级元素的特性，可以在同一行内显示，并且可以设置宽度和高度。 
   - 内联块级元素可以容纳其他内联元素和块级元素，类似于块级元素的行为。  