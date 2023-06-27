# CSS

## CSS 是什么？

CSS（Cascading Style Sheets）是一种用于描述网页样式的语言，它可以控制网页中的字体、颜色、布局、背景等方面的样式。

## CSS 的作用

CSS的作用是将网页的内容和样式分离，使得网页的结构和样式可以分别进行修改和维护，从而提高网页的可维护性和可扩展性。

## CSS 的语法

CSS的语法由选择器、属性和值组成，其中选择器用于选择要应用样式的元素，属性用于指定要修改的样式属性，值用于指定要修改的样式属性的值。

例如：

```css
p {
  color: red;
  font-size: 16px;
}
```

其中，`p`是选择器，`color`和`font-size`是属性，`red`和`16px`是值。

## CSS 的选择器

CSS的选择器用于选择要应用样式的元素，常见的选择器有：

- 标签选择器：选择指定标签的元素，例如`p`、`h1`等。
- 类选择器：选择指定类名的元素，例如`.class`。
- ID选择器：选择指定ID的元素，例如`#id`。
- 后代选择器：选择指定元素的后代元素，例如`div p`。
- 子元素选择器：选择指定元素的子元素，例如`div > p`。
- 伪类选择器：选择指定状态的元素，例如`:hover`、`:active`等。

## CSS 的盒模型

CSS的盒模型指的是网页中的元素被看作一个矩形盒子，包括内容区、内边距、边框和外边距四个部分。

其中，内容区指的是元素的实际内容，内边距指的是内容区和边框之间的空白区域，边框指的是内边距和外边距之间的边框线，外边距指的是边框和相邻元素之间的空白区域。

## CSS 的布局

CSS的布局指的是网页中元素的排列方式，常见的布局方式有：

- 流式布局：元素按照文档流从上到下排列，可以通过设置宽度、高度、内边距、外边距等属性来控制元素的位置和大小。
- 浮动布局：元素可以通过设置浮动属性来脱离文档流，实现多列布局等效果。
- 定位布局：元素可以通过设置定位属性来相对于父元素或文档进行定位，实现绝对定位、相对定位等效果。
- 弹性布局：元素可以通过设置弹性属性来实现自适应布局，适用于移动端等多种场景。

## CSS 的优先级

CSS的优先级指的是当多个样式规则同时作用于同一个元素时，浏览器如何确定应该应用哪个样式规则。

CSS的优先级由选择器的特殊性和样式规则的来源决定，其中特殊性指的是选择器的权重，来源指的是样式规则的位置。

一般来说，特殊性越高的样式规则优先级越高，来源越近的样式规则优先级越高。

## CSS 的预处理器

CSS的预处理器是一种将CSS代码转换为其他语言的工具，可以提高CSS的可维护性和可扩展性。

常见的CSS预处理器有Sass、Less、Stylus等，它们提供了一些高级的语法和功能，例如变量、嵌套、混合、继承等，可以让CSS代码更加简洁、易读、易维护。

## CSS 的后处理器

CSS的后处理器是一种将CSS代码进行优化和转换的工具，可以提高网页的性能和兼容性。

常见的CSS后处理器有PostCSS、Autoprefixer等，它们可以自动添加浏览器前缀、压缩CSS代码、优化选择器等，从而减少网页的加载时间和文件大小。

## CSS 的框架

CSS的框架是一种提供网页布局和样式的代码库，可以快速搭建网页和应用程序。

常见的CSS框架有 TailwindCSS、Bootstrap、Foundation、Semantic UI等，它们提供了丰富的组件和样式，可以快速构建响应式、美观、易用的网页和应用程序。

## CSS 的动画

CSS的动画是一种通过CSS代码实现网页动态效果的技术，可以提高网页的交互性和视觉效果。

常见的CSS动画技术有过渡、变换、关键帧动画等，它们可以实现元素的平滑过渡、旋转、缩放、移动等效果，从而增强网页的用户体验和吸引力。

## CSS 的细节

### line-height
1. 将 line-height 设置为盒子高度，则可以将文字垂直居中
2. 如果盒子没给高度，那么 line-height 会自动撑开盒子的高度，盒子高度和 line-height 的值一样
3. 如果盒子的高度 > 行高，则文字出现在盒子顶部
4. 如果行高 >> 盒子的高度，则文字会溢出盒子的高度，且文字能看到，除非使用 overflow:hidden
5. 给一个行内元素设置行高也生效，前提是行高要大于该元素的 font-size

### 上下 margin 的传递
1. margin-top 传递:  如果块级元素的顶部线和父元素的顶部线重叠, 那么这个块级元素的 margin-top 灰传递给父元素
2. margin-bottom 传递:  如果块级元素的底部线和父元素的底线重叠, 并且父元素的高度是 auto, 那么这个块级元素的 margin-bottom 会传递给父元素
3. 如何防止出现传递问题
    1. 给父元素设置 padding-top/padding-bottom
    2. 给父元素设置 border
    3. 触发 BFC, 给父元素设置 overflow: auto

### span
行内元素设置宽高无效，上下 margin 和 padding 无效，左右才有效

### background 细节
1. background-image 可以设置多张图片，第一张加载失败就会加载第二张
2. background-image 和 img 标签不一样，前者不能撑开盒子
3. background-image 会盖在 background-color 上，**注意：不是覆盖**
4. background-size 默认值为 auto，图片本身多大就显示多大
5. background-size 设置一个值时为水平值，垂直方向自适应；如果第一个值为百分比，则参考的是父盒子的宽度；如果第二个值为百分比，则参考的是父盒子的高度；
6. background-position 只设置一个值，则另一个为 center
7. background-attachment 的值为 scroll(默认)、 local( 背景会随着 Box 内容滚动)、fix(不会滚动)
8. background 缩写：顺序一般是任意的，除了一种情况：如果有 size ，要放在 position 后面

## CSS 常用样式集合
```css
/**
 * 文字超出 1 行省略号表示
 */
.single-row-ellip {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/**
 * 文字超出 2 行省略号表示
 */
.double-row-ellip {
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

/**
 * 水平垂直居中
 */
.flex-xy-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/**
 * 水平居中
 */
.flex-x-center {
  display: flex;
  justify-content: center;
}

/**
 * 垂直居中
 */
.flex-y-center {
  display: flex;
  align-items: center;
}

/**
 * 两端对齐且垂直居中
 */
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/**
 * 清除浮动
 */
.clearfix::after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: ' ';
  clear: both;
  height: 0;
}

/**
 * 修改 input 的 placeholder 样式
 */
input::-webkit-input-placeholder{
  color: #bfbfbf;
}

/**
 * 隐藏滚动条
 */
::-webkit-scrollbar { // chrome
  	display: none;
}
div {
	-ms-overflow-style: none; // ie
	scrollbar-color: transparent transparent; // firefox
}
.demo {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
}
```

## 滚动条样式
```css
/* 滚动条 */
::-webkit-scrollbar {
  /* 纵向 */
  width: 8px;
  /* 横向 */
  height: 8px;
  background-color: #ededed;
}
/* 滚动条上的按钮(上下箭头) */
::-webkit-scrollbar-button {
  display: none;
}
/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background-color: #ededed;
}
/* 滚动条轨道，没有滑块 */
::-webkit-scrollbar-track-piece {
  background-color: #ededed;
}
/* 垂直滚动条和水平滚动条交汇的部分 */
::-webkit-scrollbar-corner {
  background-color: #ededed;
}
/* 滚动条上的滚动滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #d6d6d6;
}
/* 右下角拖动块 */
::-webkit-resizer {
  display: none;
}
```
