## display:none、visibility:hidden、opacity:0 的区别

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

## inline, block, and inline-block 的区别?
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

## 回流和重绘区别
回流：涉及到元素位置、几何属性（width、height、margin、padding）改变时，就会产生回流，开销较大
重绘：涉及到元素的视觉样式（如颜色、字体大小）的更新时，就会产生重绘，开销较小
为了提升网页性能，应尽量减少回流和重绘的次数。以下是一些优化建议：
1.​批量修改样式：
```js
// 不推荐
element.style.left = '10px';
element.style.top = '20px';

// 推荐
element.classList.add('new-position');
```

2.使用 transform 和 opacity 进行动画：
这些属性不会触发回流，只会引起重绘，性能更优
```css
.animated-element {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.animated-element.active {
  transform: translateX(100px);
  opacity: 0.5;
}
```

3.使用 will-change 属性：
提前告知浏览器哪些元素将会发生变化，以便浏览器进行优化。
```css
.element {
  will-change: transform, opacity;
}
```
