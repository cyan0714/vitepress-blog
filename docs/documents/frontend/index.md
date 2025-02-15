./index.md
---


---
./css/css.md
---
# CSS

<script setup>
  import RowUp from '/.vitepress/components/css-demo/rowup.vue';
</script>

## CSS 是什么？

CSS（Cascading Style Sheets）是一种用于描述网页样式的语言，它可以控制网页中的字体、颜色、布局、背景等方面的样式。

## CSS 的作用

CSS 的作用是将网页的内容和样式分离，使得网页的结构和样式可以分别进行修改和维护，从而提高网页的可维护性和可扩展性。

## CSS 的语法

CSS 的语法由选择器、属性和值组成，其中选择器用于选择要应用样式的元素，属性用于指定要修改的样式属性，值用于指定要修改的样式属性的值。

例如：

```css
p {
  color: red;
  font-size: 16px;
}
```

其中，`p`是选择器，`color`和`font-size`是属性，`red`和`16px`是值。

## CSS 的选择器

CSS 的选择器用于选择要应用样式的元素，常见的选择器有：

- 标签选择器：选择指定标签的元素，例如`p`、`h1`等。
- 类选择器：选择指定类名的元素，例如`.class`。
- ID 选择器：选择指定 ID 的元素，例如`#id`。
- 后代选择器：选择指定元素的后代元素，例如`div p`。
- 子元素选择器：选择指定元素的子元素，例如`div > p`。
- 伪类选择器：选择指定状态的元素，例如`:hover`、`:active`等。

## CSS 的盒模型

CSS 的盒模型指的是网页中的元素被看作一个矩形盒子，包括内容区、内边距、边框和外边距四个部分。

其中，内容区指的是元素的实际内容，内边距指的是内容区和边框之间的空白区域，边框指的是内边距和外边距之间的边框线，外边距指的是边框和相邻元素之间的空白区域。

## CSS 的布局

CSS 的布局指的是网页中元素的排列方式，常见的布局方式有：

- 流式布局：元素按照文档流从上到下排列，可以通过设置宽度、高度、内边距、外边距等属性来控制元素的位置和大小。
- 浮动布局：元素可以通过设置浮动属性来脱离文档流，实现多列布局等效果。
- 定位布局：元素可以通过设置定位属性来相对于父元素或文档进行定位，实现绝对定位、相对定位等效果。
- 弹性布局：元素可以通过设置弹性属性来实现自适应布局，适用于移动端等多种场景。

## CSS 的优先级

CSS 的优先级指的是当多个样式规则同时作用于同一个元素时，浏览器如何确定应该应用哪个样式规则。

CSS 的优先级由选择器的特殊性和样式规则的来源决定，其中特殊性指的是选择器的权重，来源指的是样式规则的位置。

一般来说，特殊性越高的样式规则优先级越高，来源越近的样式规则优先级越高。

## CSS 的预处理器

CSS 的预处理器是一种将 CSS 代码转换为其他语言的工具，可以提高 CSS 的可维护性和可扩展性。

常见的 CSS 预处理器有 Sass、Less、Stylus 等，它们提供了一些高级的语法和功能，例如变量、嵌套、混合、继承等，可以让 CSS 代码更加简洁、易读、易维护。

## CSS 的后处理器

CSS 的后处理器是一种将 CSS 代码进行优化和转换的工具，可以提高网页的性能和兼容性。

常见的 CSS 后处理器有 PostCSS、Autoprefixer 等，它们可以自动添加浏览器前缀、压缩 CSS 代码、优化选择器等，从而减少网页的加载时间和文件大小。

## CSS 的框架

CSS 的框架是一种提供网页布局和样式的代码库，可以快速搭建网页和应用程序。

常见的 CSS 框架有 TailwindCSS、Bootstrap、Foundation、Semantic UI 等，它们提供了丰富的组件和样式，可以快速构建响应式、美观、易用的网页和应用程序。

## CSS 的动画

CSS 的动画是一种通过 CSS 代码实现网页动态效果的技术，可以提高网页的交互性和视觉效果。

常见的 CSS 动画技术有过渡、变换、关键帧动画等，它们可以实现元素的平滑过渡、旋转、缩放、移动等效果，从而增强网页的用户体验和吸引力。

## CSS 的细节

### line-height

1. 将 `line-height` 设置为盒子高度，则可以将文字垂直居中
2. 如果盒子没给高度，那么 `line-height` 会自动撑开盒子的高度，盒子高度和 `line-height` 的值一样
3. 如果盒子的高度 > 行高，则文字出现在盒子顶部
4. 如果行高 >> 盒子的高度，则文字会溢出盒子的高度，且文字能看到，除非使用 `overflow:hidden`
5. 给一个行内元素设置行高也生效，前提是行高要大于该元素的 `font-size`

### 上下 margin 的传递

1. margin-top 传递: 如果块级元素的顶部线和父元素的顶部线重叠, 那么这个块级元素的 `margin-top` 会传递给父元素
2. margin-bottom 传递: 如果块级元素的底部线和父元素的底线重叠, 并且父元素的高度是 auto, 那么这个块级元素的 `margin-bottom` 会传递给父元素
3. 如何防止出现传递问题
   1. 给父元素设置 padding-top/padding-bottom
   2. 给父元素设置 border
   3. 触发 BFC, 给父元素设置 overflow: auto


### 如何触发 BFC

1. 根元素，即HTML元素
2. float 的值不为 none
3. overflow 的值不为 visible
4. display 的值为 inline-block、table-cell、table-caption
5. position 的值为 absolute 或 fixed

### BFC 可以解决什么问题

1. margin 塌陷问题
2. margin 重叠问题
3. 清除浮动

### span

行内元素设置宽高无效，上下 margin 和 padding 无效，左右才有效

### background 细节

- `background-image` 可以设置多张图片，第一张加载失败就会加载第二张
- `background-image` 和 img 标签不一样，前者不能撑开盒子
- `background-image` 会盖在 background-color 上，**注意：不是覆盖**
- `background-size` 默认值为 auto，图片本身多大就显示多大
- `background-size` 设置一个值时为水平值，垂直方向自适应；如果第一个值为百分比，则参考的是父盒子的宽度；如果第二个值为百分比，则参考的是父盒子的高度；
- `background-position` 只设置一个值，则另一个为 center
- `background-attachment` 的值为 scroll(默认)、 local( 背景会随着 Box 内容滚动)、fix(不会滚动)
- `background` 缩写：顺序一般是任意的，除了一种情况：如果有 size ，要放在 position 后面

## CSS 样式重置

```css
html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent}
body{line-height:1}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}
nav ul{list-style:none}
blockquote,q{quotes:none}
blockquote:before,blockquote:after,q:before,q:after{content:none}
a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent}
ins{background-color:#ff9;color:#000;text-decoration:none}
mark{background-color:#ff9;color:#000;font-style:italic;font-weight:bold}
del{text-decoration:line-through}
abbr[title],dfn[title]{border-bottom:1px dotted;cursor:help}
table{border-collapse:collapse;border-spacing:0}
hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}
input,select{vertical-align:middle}
```

::: tip
vscode 可安装 "Html5 Reset Css" 插件, 然后输入 !cssreset 即可
:::

## CSS 常用样式集合

```css
/**
 * 三角形
 */
.triangle {
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: black;
}

/**
 标题前加小圆圈
*/
&::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #5184f9;
}

/**
 * 好看的滚动条样式
 */
.scrollBar {
  &::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    //background-color: hsla(220, 4%, 58%, .3);
    background-color: #888;
  }
}

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
input::-webkit-input-placeholder {
  color: #bfbfbf;
}

/**
 * 隐藏滚动条
 */
::-webkit-scrollbar {
  // chrome
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

## 项目常用 scss 变量以及 mixin

```scss
$mainBg: #409eff;
$mainColor: #409eff;
$mainBorder: 1px solid #ccc;
$mainShadow: 0 3px 6px rgba(140, 149, 159, 0.15);
$smFont: 14px;
$mdFont: 16px;
$lgFont: 18px;
$xlFont: 20px;
$mainMarginX: 0 12px;
$mainMarginY: 12px 0;
$mainMargin: 12px;
$mainPaddingX: 0 12px;
$mainPaddingY: 12px 0;
$mainPadding: 12px;

@mixin scrollBar {
  ::-webkit-scrollbar-track-piece {
    background-color: transparent;
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    //background-color: hsla(220, 4%, 58%, .3);
    background-color: #888;
  }
}
```

## common-tailwindcss
```css
/* display */
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}
.flex {
  display: flex;
}
.inline {
  display: inline;
}

/* overflow */
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}

/* position */
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}

/* flex-dirction */
.flex-row {
  flex-direction: row;
}
.flex-row-reverse {
  flex-direction: row-reverse;
}
.flex-col {
  flex-direction: column;
}
.flex-col-reverse {
  flex-direction: column-reverse;
}

/* flex-wrap */
.flex-wrap {
  flex-wrap: wrap;
}
.flex-nowrap {
  flex-wrap: nowrap;
}

/* flex */
.flex-1 {
  flex: 1 1 0%;
}

/* flex-grow */
.grow {
  flex-grow: 1;
}
.grow-0 {
  flex-grow: 0;
}

/* flex-shrink */
.shrink {
  flex-shrink: 1;
}
.shrink-0 {
  flex-shrink: 0;
}

/* justify-content */
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.justify-around {
  justify-content: space-around;
}
.justify-evenly {
  justify-content: space-evenly;
}

/* align-items */
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}

/* width */
.w-full {
  width: 100%;
}
.w-screen {
  width: 100vw;
}

/* height */
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}

/* margin */
.mx-2 {
  margin-left: 8px;
  margin-right: 8px;
}
.mx-3 {
  margin-left: 12px;
  margin-right: 12px;
}

/* padding */
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.p-2 {
  padding: 8px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.p-3 {
  padding: 12px;
}

/* font-weight */
.font-bold {
  font-weight: 700;
}

/* text-align */
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.text-justify {
  text-align: justify;
}

/* text-color */
.text-red {
  color: #f00;
}
.text-yellow {
  color: #ff0;
}
.text-green {
  color: #0f0;
}
.text-blue {
  color: #00f;
}

/* text-overflow */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.truncate-2 {
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* font-size */
.text-xs {
  font-size: 12px;
}
.text-sm {
  font-size: 14px;
}
.text-base {
  font-size: 16px;
}
.text-lg {
  font-size: 18px;
}
.text-xl {
  font-size: 20px;
}
.text-2xl {
  font-size: 24px;
}

/* border-radius */
.rounded {
  border-radius: 4px;
}
.rounded-md {
  border-radius: 6px;
}
.rounded-lg {
  border-radius: 8px;
}

/* border */
.border {
  border: 1px solid #d7d7d7;
}

/* box-shadow */
.shadow {
  box-shadow: 0 3px 6px rgba(140,149,159,0.15);
}

/* cursor */
.cursor-pointer {
  cursor: pointer;
}
```

## Demo

### 1. 无限轮播

<RowUp/>

::: details
  <<< @/.vitepress/components/css-demo/rowup.vue
:::



---
./css/interview.md
---
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

---
./typescript/other.md
---
# 其它

## 生成 ts 配置文件

```shell
tsc --init
```

## 在 ts 中定义类

```ts
class User {
  name: string
  age: number
  constructor(n: string, a: number) {
    this.name = n
    this.age = a
  }
  info(): string {
    return `${this.name} 的年龄是 ${this.age}`
  }
}

const user: User = new User('张三', 12)

console.log(user.info())
```

## public 修饰符

`public` 修饰符可以定义某些变量是公开的，那上面的例子来举例：

```ts
class User {
  public name: string
  public age: number
  constructor(n: string, a: number) {
    this.name = n
    this.age = a
  }
  public info(): string {
    return `${this.name} 的年龄是 ${this.age}`
  }
}

const user: User = new User('张三', 12)

console.log(user.name) // 张三
console.log(user.age) // 12
console.log(user.info) // [Function: info]
```

## protected 修饰符

`protected` 是受保护的数据类型，就只能在类的内部进行使用，在类的外部不能进行方法。

但是可以通过类的继承进行访问

```ts
class User {
  protected name: string
  protected age: number
  constructor(n: string, a: number) {
    this.name = n
    this.age = a
  }
  protected info(): string {
    return `${this.name} 的年龄是 ${this.age}`
  }
}

// console.log(user.name) 不能访问
```

## private

`private` 修饰符仅限于当前构造函数使用，就算是继承的类也不能进行使用

```ts
class User {
  private name: string
  constructor(n: string) {
    this.name = n
  }
}

class Admin extends User {
  constructor(name) {
    super(name)
    // console.log(this.name) // 不能访问
  }
}
```

## readonly

`readonly` 修饰的熟悉是不能更改的，也就是说这个熟悉是只读的

```ts
class Axios {
  readonly url: string = 'www.baidu.con'
}

const axios = new Axios()
console.log(axios.url)

// axios.url = 'http://localhost' // 不能进行更改
```

但也不一定是绝对不能更改的，比如下面例子，类在初始化的时候，也是可以进行更改的

```ts
class Axios {
  readonly url: string = 'www.baidu.con'
  public constructor(url) {
    this.url = url
  }
}

const axios = new Axios('github.com')
console.log(axios.url)
```

## static

`static` 方法可以定义静态熟悉和方法，只能在类中进行访问

和原生是一样的

```ts
class User {
  static url: string = 'baidu.com'
}

const user = new User()

// console.log(user.url) // 获取不到

console.log(User.url)
```

## 单例模式

单利模式中，希望无论调用多少次的构造函数，它只执行一次，这样可以节约资源

```ts
class Axios {
  private static instance: Axios | null = null
  private constructor() {}

  static mark() {
    if (Axios.instance === null) {
      console.log('创建实例')

      Axios.instance = new Axios()
    }
    return Axios.instance
  }
}

Axios.mark()
Axios.mark()
Axios.mark()
Axios.mark()
Axios.mark()
// 创建实例
```

## get 和 set

```ts
class Article {
  private _article: any[] = []

  public get article(): any[] {
    return this._article
  }

  public set article(list: any[]) {
    this._article = list
  }
}

const art = new Article()
console.log(art.article)

art.article = [{ title: 'hello', name: 'http权威指南' }]
console.log(art.article)
```


---
./typescript/type.md
---
# 数据类型

## number

```ts
const num: number = 12
```

## string

```ts
const text: string = 'hello'
```

但是有些情况下，类型不一定是 `string`，也可以是指定的某些值

```ts
let admin: '张三' | '小明'
admin = '张三'

console.log(admin)
```

## boolean

```ts
const bol: boolean = true
```

## object

```js
const obj: object = {}
```

那么使用下面方式可以限定对象中每个属性的类型

```ts
let obj: { name: string; age: number }
obj = { name: 'admin', age: 12 }
```

如果有些参数是可选的，那么可以使用 `?` 来标识

```ts
let obj: { name: string; age: number; url?: string }
obj = { name: 'admin', age: 12 }
```

## array

数字或字符串的数组

```ts
const numArr: number[] = [1, 2, 3, 4]
const strArr: string[] = ['1', '2', '3']
```

多类型数组

```ts
const arr: (string | number | object)[] = ['12121', 121, {}]
```

数组还有另一种编写的格式

```ts
const arr: Array<string | number> = ['1', '2']
```

## any

可以用 `any` 标记任何类型

```js
let num: any

num = 1
num = true
num = '123'
```

## unknown

`unknown` 为不知道是什么类型，但是其实是有类型的

```ts
let num: unknown // 一个变成设置 unknown 类型代表不确定
num = '这是一个文字' // 给变量赋值了字符串，现在知道类型了

let res: string = num as string // 给 res 赋值 num 并通过关键字 as 告诉赋值的是什么类型

console.log(res) // 这是一个文字
```

`unknown` 在有些时候还是很有意思的，比如在想将一个字符串赋值给一个数字的时候，这显然是不可以的，那么可以先使用 `as` 关键字赋值为 `unknown` 类型，再使用 `as` 转换为像要的类型

```ts
let num: string = '1213'

let res: number = num as unknown as number

console.log(res) // 1213
```

> 尽量少使用 any 类型

## void

`void` 类型也就是 `undefined` 类型

```ts
let v1: void = undefined
```

比如一个函数，可能返回字符串，也有可能不返回值

```ts
function fun(): string | void {}
```

如果是 `void` 类型返回值的函数返回值也就是 `undefined`

## never

`never` 和 `void` 不同，`never` 是什么结果都没有，比如下面函数就是什么结果都没有

```ts
function fun(): never {
  throw new Error('err')
}
```

## null

```ts
const n: null = null
```

## undefined

```ts
const n: undefined = undefined
```

## 多类型

因为一个值可能会存在多种类型的时候，所以不能直接将某个值限定为一个类型

```ts
let text: number | string
text = '123'
text = 6666
```

## Function

`Function` 类型的 `F` 必须要大写

函数参数也是可以限制类型的

如果某个参数的可选的，可以添加 `?` 标识符

```ts
function fun(a: number, b: number, c?: number) {
  return a + b
}
```

也可以定于函数的返回值类型

```ts
const add = (a: number, b: number = 12): string => {
  return `幸运数字是${a + b}`
}

const res: string = add(10)
console.log(res)
```

如果函数没有返回值，简直将返回值定义为 `void` 类型，方便一眼就可以看出来

```ts
function fun(): void {
  console.log('hello')
}
```

## type

`type` 关键字可以将反复使用的类型以相当于定义变量的形式反复使用

比如下面两个函数都接受一个对象，是两个类型相同的对象，就可以使用 `type` 定义的类型进行约束

```ts
type userType = { name: String; age: number }

function add(user: userType): void {}
function change(user: userType): void {}
```

type 可以合并多个

```ts
type Name = {
  name: string
}
type Age = {
  age: number
}

type User = Name & Age

const user = {
  name: '张三',
  age: 12
}
```

或者可以指定一个类型满足即可

```ts
type Name = {
  name: string
}
type Age = {
  age: number
}

type User = Name | Age

const user = {
  name: '张三'
}
```

## 元组

元组用于定义一个已知数量和数据类型的数组

```ts
const arr: [number, string, number] = [1, '123', 3]
```

## enum 枚举

可以使用 `enum` 去定义枚举类型，这样可以把类型限制在指定的场景之内

```ts
enum isType {
  type1 = '男',
  type2 = '女'
}

const res: isType = isType.type1
console.log(res)
```

## as 断言

普通断言，规定类型

```ts
let res = 123 as number
res = 999
console.log(res)
```

`const` 断言

比如使用 `let` 的时候声明一个变量，只要是字符串就可以随便修改

```ts
let a = '哈哈哈'
a = '你好'
console.log(a) // 你好
```

但是使用了 `const` 断言情况如下

```ts
let a = 'hello' as const
```

这样使用 const 断言之后，`a` 就不能随意赋值了，就只能赋值为 `hello`

也就相当于下面写法，`a` 只能是两个值其中的一个

```ts
const a: 'hello' | 'world' = 'hello'
```

断言数组

断言数组之后就会被转换为元组

```ts
const arr = ['123', 89, true] as const
```

定义的方式也可以像下面这样

```ts
const arr = <const>['123', 89, true]
```

> as const 就是根据具体的值转换类型

如果明确某个变量是存在的，可以使用 `!` 来表示非空断言，下面两种写法相等

```ts
const el1: HTMLDivElement = document.querySelector('.app') as const

const el: HTMLDivElement = document.querySelector('.app')!
```

## generics 泛型

泛型代表的是不确定的类型，宽泛的类型，比如下面例子中：

```ts
function msg(num) {
  return num
}

console.log(msg('hello'))
console.log(msg(true))
```

上面代码中，无论函数传入什么类型，都会直接返回指定的类型，但是这些类型都是 `any`，大多数时候我们并不希望是 `any` 所以这里就需要使用到了泛型。

所以就需要传递不同的参数的时候，动态的传递指定的类型。类型也是可以类型函数接收参数一样：

```ts
function msg<type>(num: type): type {
  return num
}

console.log(msg<string>('hello'))
console.log(msg<boolean>(true))
```

## 类型的继承

使用 `extends` 可以继承一个属性

```ts
// 这里让 t 继承一个 { length: number }
function getLength<t extends { length: number }>(target: t): number {
  // 类型 t 里面没用任何规范 可能不存在 length 属性
  return target.length
}

console.log(getLength('setting'))
console.log(getLength([1, 2, 3, 4]))
```

或者也可以继承一个有长度的类型，比如 `string`，或者联合类型

```ts
function getLength<t extends string>(target: t): number {
  return target.length
}

function getLength2<t2 extends string | any[]>(target: t2): number {
  return target.length
}
```

## interface

- 在类中使用

定义一个类型的接口，比如下面类的定义，使用 `implements` 定义接口

```ts
interface AdminInterface {
  name: string
  age: number
}

class Admin implements AdminInterface {
  name: string = '张三'
  age: number = 12
}
```

如果类中没有定义接口中约束的数据的话，就会报错

- 在对象中使用

```ts
interface UserInterface {
  name: string
  age: number
  sayName(): string
  [key: string]: any
}

const user: UserInterface = {
  name: 'admin',
  age: 12,
  sayName(): string {
    return this.name
  },
  sex: '男'
}
```

- 接口继承

```ts
interface UserName {
  name: string
}
interface UserAge extends UserName {
  age: number
}

const user: UserAge = {
  name: 'admin',
  age: 12
}
```

- 多接口

```ts
interface UserName {
  name: string
}
interface UserAge {
  age: number
}

class Admin implements UserName, UserAge {
  name: string = '张三'
  age: number = 12
}
```

- 定义数组

下面使用枚举和接口同时限定

```ts
enum SexType {
  GIRL,
  BOY
}

interface User {
  name: string
  age: Number
  sex: SexType
}

const user1: User = { name: '1', age: 12, sex: SexType.BOY }
const user2: User = { name: '211', age: 122, sex: SexType.GIRL }

const arr: User[] = [user1, user2]
```

- 定义函数

```ts
interface Pay {
  (num: number): boolean
}

const pay: Pay = (num: number): boolean => true
```

- 接口声明合并

接口重复声明最终会合并

```ts
interface User {
  num: number
}
interface User {
  name: string
}

const pay: User = {
  num: 123,
  name: '张三'
}
```


---
./vue/interview.md
---
# Vue 面试题

## 1. 在vue中使用v-for后为什么要加key
1. **性能优化**：Vue使用 key 来追踪每个节点的身份，从而在更新DOM时更高效地识别节点。如果没有 key ，Vue会使用默认的算法进行比对，可能会导致不必要的重新渲染，影响性能。 
 
2. **保持组件状态**：在列表中添加 key 可以帮助Vue识别每个组件的唯一性，从而在列表变化时保持组件的状态，避免出现意外的行为。 
 
3. **动画过渡**：在进行列表项的动画过渡时，添加 key 可以让Vue正确地识别每个列表项的变化，从而实现流畅的过渡效果。 
 
4. **避免重复渲染**：当列表中的项发生变化时，使用 key 可以确保只有发生变化的项会被重新渲染，而不是整个列表。

---
./vue/pinia.md
---
# Pinia

## 安装

```shell
npm i pinia
```

## 快速上手

在 `src` 下新建 `store/index.ts` 文件，并在 `main.ts` 中进行引入

```ts
// store/index.ts
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {})
```

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).mount('#app')
```

## state

`state` 中可以定义数据，在组件中引入 `useStore` 函数进行提供使用

```ts
// store/index.ts
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    name: 'admin',
    age: 12
  })
})
```

```vue
<template>
  <h1>{{ store.name }}今年{{ store.age }}岁</h1>
</template>

<script lang="ts" setup>
  import { useStore } from './store'
  const store = useStore()
</script>
```

想要更改 `state` 中的值也是非常简单

```ts
// store/index.ts
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  // 定义数据
  state: () => ({
    counter: 0
  })
})
```

```vue
<template>
  <p>{{ store.counter }}</p>
  <button @click="change">更改</button>
</template>

<script lang="ts" setup>
  import { useStore } from './store'
  const store = useStore()
  function change() {
    store.counter++
  }
</script>
```

## getters

`getters` 相当于组件中的 `computed` 计算属性一样，可以使用箭头函数和普通函数进行返回

```ts
// store/index.ts
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  // 定义数据
  state: () => ({
    counter: 0,
  }),

  // 可以定义业务逻辑 可以异步获取数据
  actions: {
    increment() {
      this.counter++
    }
  }

  // 计算属性
  getters: {
    // 箭头函数定义
    doubleCountTwo: (state) => state.counter + 2,

    // 普通函数
    doubleCount(state): number {
      return state.counter * 2
    },

    // 通过函数计算
    doublePlusOne(): number {
      return this.doubleCount + 1
    },
  },
})
```

```vue
<template>
  <h2>{{ store.doubleCountTwo }}</h2>
  <h2>{{ store.doubleCount }}</h2>
  <h2>{{ store.doublePlusOne }}</h2>
</template>

<script lang="ts" setup>
  import { useStore } from './store'
  const store = useStore()
</script>
```

## action

`action` 可以异步获取数据

```ts
// store/index.ts
```


---
./vue/vue2.md
---
# Vue2 相关

## 关于样式冲突问题

> 多个组件污染（多个组件公用一套样式时影响其他组件）

在开发过程中为了避免不必要的资源浪费，多个组件在会共用一套 CSS 代码时，如果采用下面方法引入，可能会导致组件样式污染（加载组件的时候加载的不是当前组件的样式，必须要刷新一次才能当前组件的样式）

```html
<style scoped>
  @import '../assets/css/Login.css';
</style>
```

那么解决这个问题可以通过下面方法进行引入样式

```html
<style lang="" src="../assets/css/Login.css" scoped></style>
```

## 关于 vue.config.js

```js
module.exports = {
  devServer: {
    port: 8080, // 端口号 可以自定义
    open: true, // 启动项目后自动在浏览器打开项目
    proxy: {
      // 把所有以 /api 开头的请求代理转发
      '/api': {
        target: '', // 目标基础地址 url
        changeOrigin: true, // 允许跨域
        ws: true, // 开启 webSocket 代理
        pathRewrite: {
          // 重写路径
          '^/api': ''
        }
      }
    }
  }
}
```

## 关于冗余导航报错问题

当我们在使用下面方法进行路由跳转时：

```html
<p @click="$router.push('/setting')">设置</p>
```

效果是想点击设置跳转到设置的页面，效果是完全可以正常实现跳转

但是，如果当前已经在`/setting`路由下，那么再点击就会报错：

```shell
[Vue warn]: Error in v-on handler (Promise/async): "NavigationDuplicated: Avoided redundant navigation to current location: "/setting"."
```

大概的意思就是：当前你已经在这个导航下了，不要再重复冗余

这个其实并不是一个错误，只是说你的操作多余了

那么解决方法就是：在 `router/index.js`中加入下面一段代码即可解决报错问题

```js
const router = new VueRouter({
  routes
})

// 解决 冗余导航报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

export default router
```

## 非父子组件通信

1. 通过 EventBus

创建一个叫 `bus.js` 的通信组件，内容如下

```js
import Vue from 'vue'

export default new Vue()
```

假设 a 组件要给 b 组件发送请求，那么 a 组件发布通信事件

```js
import bus from '@/utils/bus.js'
bus.$emit('自定义事件名称', 需要发送的内容)
// 引入 bus，使用 bus.comit() 方法发送数据
```

b 组件要接收通信事件：

```js
import bus from '@/utils/bus.js'
bus.$on('自定义事件名称', (data) => {
  // data 即为传递来的数据
  // 处理函数
})
```

2. 通过 provide 和 inject

```js
// 提供方组件
export default {
  provide() {
    return {
      value: '要传递的值',
      method: this.methodToPass, // 要传递的方法
    };
  },
  methods: {
    methodToPass() {
      // 要传递的方法的实现
    },
  },
};

// 接收方组件
export default {
  inject: ['value', 'method'], // 在这里列出要接收的值和方法
  mounted() {
    console.log(this.value); // 访问传递的值
    this.method(); // 调用传递的方法
  },
};
```

需要注意的是：

> 通信两端所使用的的事件名称必须一致 否则是无效的
> `$on()` 用来接收 `$emit()` 用来发布

## Vue 给 for 循环的标签添加背景图

```html
<div :style="{ 'background-image': 'url(' + item.PlaceImgUrl + ')' }"></div>
```

## watch 监听器

通过 watch 可以定义一个监视器，用于监视某一些数据，当这个被监视的数据一旦发生变化，就会执行里面的逻辑：

```vue
<template>
  <div>
    <input v-model="text" type="text" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: ''
      }
    },
    watch: {
      text() {
        console.log('text 值发生改变了！！')
      }
    }
  }
</script>
```

但是不免有些特殊的情况，比如：我们希望在页面刚刚初始化的时候，虽然数据没有发生变化，但也需要立刻执行一次监视器中的内容，这样的话，监视器的表现形式会变成对象，里面透过配置一个 `handler` 的函数和 `immediate` 方法来解决：

```vue
<template>
  <div>
    <input v-model="text" type="text" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: ''
      }
    },
    watch: {
      // 使用对象写法，监视数据 text
      text: {
        // 使用 handler 方法，处理变化后的逻辑代码
        handler() {
          console.log('text 值发生改变了！！')
        },
        // immediate 这个属性值为 true 的时候，默认页面初始化完成之后执行一次上面的代码
        immediate: true
      }
    }
  }
</script>
```

## vue 中动态绑定 class 和 style 的方法
Class:
1. object
```vue
<div
	class="static"
	:class="{ active: isActive, 'text-danger': hasError }"
></div>
```
2. array
```vue
// method 1:
<div :class="[isActive ? activeClass : '', errorClass]"></div>

// method 2:
<div :class="[{ active: isActive }, errorClass]"></div>
```

Style:
1. object
```js
// html
<div
	style="text-align: center; margin-top: 20px; font-size: 30px"
	:style="{ color: activeColor, fontSize: fontSize + 'px' }">
</div>

// js
data: {
  activeColor: 'red',
  fontSize: 30
}
```
2. array
```js
<div :style="[baseStyles, overridingStyles]"></div>
```

## 插槽

### 默认插槽
```html
<slot></slot>
```
### 具名插槽
```vue
声明：<slot name='cyan'>这里的内容将被下方 template 中的内容替代</slot>

使用：<template v-slot:cyan> 替代上面的slot标签中的内容 </template>
```
### 作用域插槽
```vue
声明：<slot :user="user"> {{ user.lastName }} </slot>

使用：<template v-slot:default="slotProps"> {{ slotProps.user.firstName }} <template>
```
### 废弃的语法
```vue
<template slot="default" slot-scope="slotProps">
   {{ slotProps.msg }}
</template>
```

## vue2中使用图片的方式

### 在 style 标签中使用
![bindImg](./imgs/1.png)

### 在 template 中使用
![bindImg](./imgs/2.png)

### 在 echarts 地图中使用
![bindImg](./imgs/3.png)

## 有3个页面A,B,C, A是列表页, B是表单页, C是表单确认页

### 如何实现当用户从A跳转到B, 在B填写完表单进入C后, 再从C返回B时, 表单数据依然存在.

在B的路由配置中加上 meta 属性, 如下:
```js
meta: { title: '数据申请', isUseCache: true }
```

在B页面的 activated 以及 beforeRouteLeave 生命周期中添加以下代码:
```js
activated() {
  if (!this.$route.meta.isUseCache) {
    // 重新发送网络请求或初始化数据等操作
  } else {
    this.$route.meta.isUseCache = false
  }
},
beforeRouteLeave(to, from, next) {
  // 其中 CName 是C页面的组件名称
  if (to.name === 'CName') {
    from.meta.isUseCache = true
  } else {
    from.meta.isUseCache = false
  }
  next()
},
```

在C页面提交表单后返回A页面时, 要将 isUseCache 置为 false, 这样再从A回到B时, 表单数据就不会是上一次缓存的了.
```js
// 从路由配置中找到A页面的路由对象
const DataServiceRouter = constantRoutes.find(item => item.path === '/data-services')
const DataServiceApply = DataServiceRouter.children.find(item => item.name === 'DataServiceApply')
// 将 isUseCache 置为 false
DataServiceApply.meta.isUseCache = false
```





---
./vue/vue3-router.md
---
# Vue Router

## 安装

```shell
npm install vue-router
```

## 快速上手

基础配置

```ts
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = []

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
```

## 使用

再组件中使用 `router` 和 `route` 需要在 `vue-router` 中引入进行使用

```ts
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
```

## 没有安装路由

如果你连 `vue-router` 都没用安装，还需要进行导航栏地址的改变，也可以使用 `vue` 内部的 `getCurrentInstance` 方法获取当前组件实例，从而获取 `route` 和 `router`

```ts
import { getCurrentInstance } from 'vue'

import type { ComponentInternalInstance } from 'vue'

const instance: ComponentInternalInstance =
  getCurrentInstance() as ComponentInternalInstance

console.log(instance.appContext.config.globalProperties.$route)
console.log(instance.appContext.config.globalProperties.$router)
```


---
./vue/vue3.md
---
# Vue3 相关

## Vite 创建项目

使用 Vite 创建项目需要 node 的版本 >= 12.0.0

npm 创建命令：

```shell
npm init vite vue-demo
```

接下来会让你选择一个需要创建的框架，这里我们选择 vue

```shell
? Select a framework: » - Use arrow-keys. Return to submit.
    vanilla
>   vue
    react
    preact
    lit
    svelte
```

接下来是需要选择是否使用 ts，这里我不是使用就选择 vue，使用 ts 就选择 vue-ts

```shell
√ Select a framework: » vue
? Select a variant: » - Use arrow-keys. Return to submit.
>   vue
    vue-ts
```

回车选择完成之后就是要 Vite 创建了一个 Vue3 的项目

接下来进入项目目录，安装依赖后，使用 `npm run dev` 来启动项目

## vite.config.js 配置

```js
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './', // 公共路径
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src') // 使用 @ 访问 src 目录
    }
  },
  server: {
    host: '127.0.0.1',
    port: '2001', // 端口号
    open: true // 自动打开
  }
})
```

## setup

`setup` 是在单文件组件中使用 `Composition API` 的编译时的语法糖，相比普通的 script 语法，它有更多的优势：

- 更少的样板内容，更简洁的代码。
- 能够使用纯 Typescript 声明 props 和抛出事件。
- 更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)。
- 更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)。

### 定义变量

在 `setup` 中可以定义函数或者变量，`但是必须将这些函数或变量 return 出去`，才可以正常在模板中使用。

```vue
<template>
  <h1>{{ text }}</h1>

  <button @click="onclick">点击</button>
</template>

<script>
  export default {
    setup() {
      const text = 'hello vue3'

      function onclick() {
        console.log('被点击了')
      }

      return {
        text,
        onclick
      }
    }
  }
</script>
```

### 响应式变量 ref

如果想要更改某个变量的时候，那么像下面这种直接赋值的方式修改，是不能实现的：

```vue
<template>
  <h1>{{ text }}</h1>

  <button @click="change">修改内容</button>
</template>

<script>
  export default {
    setup() {
      let text = 'hello vue3'

      function change() {
        text = '你好啊'
      }

      return {
        text,
        change
      }
    }
  }
</script>
```

如果想要使变量变成响应式，那么就需要创建响应式的变量，可以通过在 vue 来解构出一个函数来创建响应式变量

```vue
<template>
  <h1>{{ text }}</h1>

  <button @click="change">修改内容</button>
</template>

<script>
  // 通过在 vue 中解构出 ref 函数
  import { ref } from 'vue'
  export default {
    setup() {
      // 使变量变成响应式变量
      let text = ref('hello vue3')

      function change() {
        // 通过变量名.value 来改变变量
        text.value = '你好啊'
      }

      return {
        text,
        change
      }
    }
  }
</script>
```

### 响应式对象

使用解构出的 `reactive` 可以将对象变成响应式的对象：

```vue
<script>
  import { reactive } from 'vue'
  export default {
    setup() {
      const student = reactive({
        name: '小明',
        ahe: 12
      })

      return {
        student
      }
    }
  }
</script>
```

**注：只有将对象或者变量变成响应式的才可以随意修改其值**

## script setup

在上面，我介绍了 vue3 的全新目录结构，整理使用组合 api，直接暴露出来一个 setup 函数，代码是这样的：

```js
export default {
  setup() {
    const name = '张三'

    return {
      name
    }
  }
}
```

### 变量

通过在 setup 中写入变量或者函数，在 return 出去提供给模板使用。

但是 setup 是有个语法糖的写法，就是将 setup 当作属性直接作用到 script 标签上，如下：

```vue
<template>
  {{ name }}
</template>

<script setup>
  const name = '张三'
</script>
```

将 `script` 标签添加 `setup` 属性之后，这样定义的变量 name 变量，**可以在模板中直接使用，并不需要 return 出去。**这样的代码段自然而然又变得简洁了很多。其实 script setup 就相当于在编译运行是把代码放到了 setup 函数中运行，然后把导出的变量定义到上下文中，并包含在返回的对象中。

### 导入组件

对于导入组件，导入之后可以直接在模板上使用，并不需要注册，也可以正常工作。

```vue
<template>
  <my-button />
</template>

<script setup>
  import MyButton from './components/MyButton.vue'
</script>
```

### 获取 props

在 `<script setup>` 中必须使用 `defineProps` api 来声明 `props`：

**父组件**

```vue
<template>
  <my-button title1="这是标题1" title2="这是标题2" />
</template>

<script setup>
  import MyButton from './components/MyButton.vue'
</script>
```

**子组件**

```vue
<template>
  <h1>这是我的组件-{{ title1 }}-{{ title2 }}</h1>
</template>

<script setup>
  const props = defineProps({
    title1: String,
    title2: String
  })
</script>
```

### 子组件发送 emits

在 `<script setup>` 中必须使用 `defineEmits ` api 来声明 `emits`：

**父组件**

```vue
<template>
  <h1>{{ title }}</h1>
  <my-button @changeTitle="change" />
</template>

<script setup>
  import MyButton from './components/MyButton.vue'
  import { ref } from 'vue'
  const title = ref('这是父组件的内容')

  function change(val) {
    title.value = val
  }
</script>
```

**子组件**

```vue
<template>
  <h2>这是我的子组件</h2>
  <button @click="onchangeTitle">点击</button>
</template>

<script setup>
  // 使用 defineEmits 来声明 emit，里面是一个数组
  // 数组的值是发送自定义事件的事件名
  const emit = defineEmits(['changeTitle'])
  function onchangeTitle() {
    emit('changeTitle', '嘿嘿嘿')
  }
</script>
```

### 缺失地方

当然，这种语法糖的写法，也是会有缺失的地方，有时候我们需要更改组件选项，比如添加 name 属性，这时候就需要再引入一个 script，在上方写入对应的`export`即可

```vue
<script>
  export default {
    name: 'app'
  }
</script>

<script setup>
  const name = '小明'
</script>
```

## 生命周期

下面是 vue2 -> vue3 的生命周期钩子函数

```
beforeCreate -> setup() // 创建之前
created -> setup() // 创建完成
beforeMount -> onBeforeMount // 挂载前
mounted -> onMounted // 挂载完成
beforeUpdate -> onBeforeUpdate // 更新前
updated -> onUpdated // 更新完成
beforeDestroy -> onBeforeUnmount // 销毁前
destroyed -> onUnmounted // 销毁完成
errorCaptured -> onErrorCaptured
renderTracked -> onRenderTracked
renderTriggered -> onRenderTriggered
activated -> onActivated
deactivated -> onDeactivated
```

在 vue3 中，移除了 `beforeCreate` 和 `created`，现在使用 `setup` 就可以直接优先加载了，其余钩子函数都需要通过解构引入才能进行使用。

```js
import { onMounted } from 'vue'
export default {
  setup() {
    onMounted(() => {
      console.log('onMounted')
    })

    console.log('setup')
  }
}

// 输出结果：
// setup
// onMounted
```

那么想要通过接口获取数据就可以使用下面方式：

```js
import { onMounted } from 'vue'
import axios from 'axios'
export default {
  setup() {
    onMounted(() => {
      loadData()
    })

    function loadData() {
      axios({
        method: 'GET',
        url: 'http://api.wod.xyz/Ip/outGetIpInfo?ip=57.23.66.35'
      }).then((res) => {
        console.log(res)
      })
    }
  }
}
```

## 计算属性

计算属性 computed 也是需要在 vue 中结构来引入的：

```vue
<template>
  <h1>{{ num }}</h1>
</template>

<script setup>
  // 引入 computed
  import { computed } from 'vue'
  // computed 内部传入一个回调函数再赋值给变量 num
  const num = computed(() => {
    // 计算属性必须有返回值
    return 10 + 20
  })
</script>
```

## 组合 api 的优势

在之前选项 api 中，有很多钩子函数，可能在 data 中定义的很多的数据，然后 methods 中，一堆的方法，create 一堆的方法，还有各种函数中都存在很多的方法，这样就会显得非常的凌乱，不清楚哪些数据和哪些函数是有关系的。

但是组合 api 可以将所有的变量数据函数全部都放在 setup 一个函数中，这样其实我们可以将固定的模块抽离出一个单独的文件进行处理，然后再引入传参解构进行调用，如果逻辑很多的情况下，使用这种组合拆分的方式，你的组件里的代码就会越来越少了，每个模块单独管理方便维护。

## 组件绑定事件

在 Vue2 中，想要给组件绑定事件需要在子组件向父组件发送自定义事件才可以，但是在 Vue3 中，可以对组件直接进行绑定事件

**子组件**

```vue
<template>
  <button>按钮</button>
</template>
```

**父组件**

```vue
<template>
  <Btn @click="add" />
</template>

<script setup>
  import Btn from './components/demo/Btn.vue'
  function add() {
    alert('点击了')
  }
</script>
```

## 插槽

Vue3 相比 Vue2 插槽也有了一定的变化，尤其是具名插槽

普通插槽没有变化，下面来举出具名插槽的例子：

**子组件**

```vue
<template>
  <!-- 子组件相比以往是没有变化的，具名插槽使用 name 定义插槽名称 -->
  <h1>
    <slot name="title"></slot>
  </h1>
  <p>
    <slot name="text"></slot>
  </p>
</template>
```

**父组件**

```vue
<template>
  <MyCom>
    <template v-slot:title>这是标题</template>
    <template v-slot:text>这是一个段落</template>
  </MyCom>
</template>

<script setup>
  import MyCom from './components/demo/My-com.vue'
</script>
```

在父组件中，插槽必须统一使用 template 容器来进行存放，内部可以有其他标签，但是容器标签不能改变，在容易上使用 v-slot:插槽名 方式来绑定对应的插槽名称插入对应的内容。

注：v-slot 指令只能在 template 标签上使用！！！

## 获取 DOM

**获取单个 DOM**

```vue
<template>
  <div ref="myRef">获取单个DOM元素</div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  const myRef = ref(null)

  onMounted(() => {
    console.log(myRef)
  })
</script>
```

**获取多个 DOM**

```vue
<template>
  <div :ref="setRef">
    <div>获取多个DOM元素</div>
    <input type="text" />
    <button>按钮</button>
    <p>这是一段文字</p>
  </div>
</template>

<script setup>
  const setRef = (el) => {
    console.log(el)
  }
</script>
```

**nextTick 函数**

```vue
<template>
  <div class="text">获取单个DOM元素</div>
</template>

<script setup>
  import { nextTick } from 'vue'
  nextTick(() => {
    console.log(document.querySelector('.text'))
  })
</script>
```

## 组件上绑定 v-model

**父组件**

```vue
<template>
  <!-- 组件上绑定 v-mode 对应下面一个响应式的变量 -->
  <MyInput v-model="text" />
</template>

<script setup>
  import MyInput from './components/MyInput.vue'
  import { ref } from 'vue'
  const text = ref('')
</script>
```

**子组件**

```vue
<template>
  <!--
    type 是文本框的内容 绑定传递的参数 modelValue
    默认监听 input 事件，这里我们来调用自己定义的 myInput 函数
  -->
  <input :type="modelValue" @input="myInput" />
</template>

<script setup>
  // 在父组件上绑定了 v-model 后，相当于传递了一个 modelValue 的参数
  // modelValue 的名字的固定的，不能改变
  // 并且 prop 还会抛出 update:modelValue 事件，事件名称也是不能改变的
  const props = defineProps({
    modelValue: {
      type: String,
      default: ''
    }
  })
  const emit = defineEmits(['update:modelValue'])
  // 通过调用函数 向父组件发送文本框的内容
  function myInput(evt) {
    emit('update:modelValue', evt.target.value)
  }
</script>

<style scoped>
  input {
    width: 200px;
    height: 35px;
    border-radius: 5px;
    color: #3f536e;
    border: 1px solid #c5d9e8;
    outline: 0;
    padding: 0 10px;
    transition: border 0.35s;
    background: #fff;
    box-sizing: border-box;
  }
</style>
```

## provide / inject

这是一个组合 api，必须两个同时使用才可以生效

`provide` 和 `inject` 启用依赖注入。这两者只能在使用当前活动实例的 `setup()` 期间被调用

无论组件层次结构有多深，父组件都可以作为其所有子组件的依赖提供者，`provide ` 只能通过父组件来提供给子组件，不能子组件给父组件提供，子组件通过`inject` 注入。

**父组件**

```vue
<template>
  <h1>这是父组件</h1>
  <my-component></my-component>
</template>

<script setup>
  import MyComponent from './components/MyComponent.vue'
  import { provide } from 'vue'
  const say = '这是父组件提供的数据' // 需要提供的数据
  // 使用 provide 函数，第一个参数为提供数据的名称，可以自定义，第二个是需要提供的数据
  provide('AppSay', say)
</script>
```

**子组件**

```vue
<template>
  <h1>这是子组件</h1>
  <h2>父组件提供的数据是：{{ res }}</h2>
</template>

<script setup>
  import { inject } from 'vue'
  // 通过 inject 函数接收父组件提供的数据，可以通过名称 AppSay 获取
  const res = inject('AppSay')
</script>
```

## component / is

通过 `component ` 标签配合 `is` 属性，可以绑定一个动态的组件进行渲染

```vue
<template>
  <h1>这是父组件</h1>

  <!-- 通过计算 is 来绑定一个计算属性来渲染组件 -->
  <component :is="componentsName"></component>

  <!-- 点击按钮渲染不同的组件 -->
  <button @click="change">改变组件</button>
</template>

<script setup>
  // 引入两个组件
  import MyInput from './components/MyInput.vue'
  import MyButton from './components/MyButton.vue'
  import { computed, ref } from 'vue'
  // 通过变量控制渲染的组件
  const text = ref(true)

  // 点击按钮调用函数，改变变量控制渲染的组件
  function change() {
    text.value = !text.value
  }

  // 计算属性根据 text 的变量来返回不同的组件名称进行渲染
  const componentsName = computed(() => {
    return text.value ? 'MyInput' : 'MyButton'
  })
</script>
```

## 在组件上使用 keep-alive

我们之前曾经在一个多标签的界面中使用 `is` 来切换不同的组件

当在这些组件之间切换的时候，你有时会想保持这些组件的状态，比如下面引入的子组件中有一个文本框的组件 `MyInput`，但是当我点击按钮写换渲染的组件之后再切换回来的时候，发现之前在文本框中输入的内容没有了，但是我想在输入之后切换组件回来的时候文本框中的内容依然存在，那么就需要 `keep-alive` 元素将其动态组件包裹起来，那么这样的话失活的组件将会被缓存，当我切换回 `MyInput` 组件的时候，里面内容依然存在

```html
<keep-alive>
  <component :is="componentsName"></component>
</keep-alive>
```

## 事件修饰符

**.stop**

下方代码中，当点击红色盒子的时候，因为父级也有一个事件，所以会导致事件冒泡，会同时触发 change1 和 change2 两个函数，那么可以通过事件对象 ` event.stopPropagation()` 来阻止向上的冒泡：

```vue
<template>
  <div @click="change1" style="background: green">
    <div @click="change2" style="background: red; width: 200px">123</div>
  </div>
</template>

<script setup>
  function change1() {
    console.log('change1')
  }
  function change2(event) {
    event.stopPropagation()
    console.log('change2')
  }
</script>
```

但是在 vue 中又加入了 dom 操作，显然是不太友好的，那么就可以通过事件修饰符 **.stop** 来阻止向上的事件冒泡：

```vue
<template>
  <div @click="change1" style="background: green">
    <div @click.stop="change2" style="background: red; width: 200px">123</div>
  </div>
</template>

<script setup>
  function change1() {
    console.log('change1')
  }
  function change2() {
    console.log('change2')
  }
</script>
```

**.capture**

还有一种情况是，想要在捕获阶段就执行函数，因为 change1 在外面，我希望先执行 change1，然后再执行 change2，通过事件修饰符 **.capture** 可以实现效果：

```vue
<template>
  <div @click.capture="change1" style="background: green">
    <div @click.capture="change2" style="background: red; width: 200px">
      123
    </div>
  </div>
</template>
```

**.self**

还是上面例子，当我们点击内部红色盒子的时候，其实并不是真正点击的外面绿色盒子，change1 执行是由于冒泡导致的，我希望是真正点击的时候它才会执行，通过事件修饰符 **.self** 可以实现效果：

```vue
<template>
  <div @click.self="change1" style="background: green">
    <div @click="change2" style="background: red; width: 200px">123</div>
  </div>
</template>
```

**.once**

有时候，我希望有些事件只执行一次，之后就再也不执行，可以通过修饰符 `.once` 来完成效果，但这是一个小众的修饰符：

```vue
<template>
  <div @click="change1" style="background: green">
    <div @click.once="change2" style="background: red; width: 200px">123</div>
  </div>
</template
```

**.prevent**

用 .prevent 可以阻止一些元素的默认行为：

```vue
<template>
  <a href="https://baidu.com" @click.prevent="link">百度</a>
</template>
```

**.passive**

因为有些元素会自带默认行为，那么有默认行为的事件，js 都会首先检测一下是否有阻止 默认行为，比如 `<a href="''></a>` ，其实像这种的还好，因为我们不会经常的去使用，那么如果有类似滚动的元素，那么每滚动一下，js 都要进行判断是否有阻止默认行为，这样就会有一定的性能损伤，所以页面可能会有一定的性能降低，尤其在移动端，可能不会显得那么的顺滑，如果所有的默认行为都不阻止，js 也有不用判断了，那么就可以用到了 **.passive** 修饰符

passive 修饰符的含义就是：默认行为在 js 内部不需要判断了，我不阻止你。所以可以省去这一段的判断环节，例如下方滚动案例，每当滚动的时候，js 都需要检测一下是否阻止了默认行为，所以需要加入事件修饰符：

```vue
<template>
  <div id="box" @scroll.passive="onScroll">
    <h1 v-for="(s, i) in 30" :key="i">{{ s }}</h1>
  </div>
</template>

<script setup>
  function onScroll() {
    console.log('11')
  }
</script>

<style scoped>
  #box {
    height: 300px;
    overflow-y: auto;
    border: 5px solid black;
  }
</style>
```

## 表单修饰符

**.lazy**

在以下场景中，数据进行双向绑定，在文本框中输入内容之后，会同步到 `p` 标签中，但是有些时候逻辑过于多的时候，或者请求后端，这样同步更新数据会有一定的性能损耗，所以给双向绑定的 `v-model` 属性添加 `.lazy` 修饰符可以在输入途中不会同步，当文本框失去焦点之后再进行同步数据：

```vue
<template>
  <input type="text" v-model.lazy="text" />
  <p>{{ text }}</p>
</template>

<script setup>
  import { ref } from 'vue'
  const text = ref('')
</script>
```

**.number**

下方例子中，双向绑定的值希望 +100 作为结果显示，但是正常状态下，会将文本框内输入的变成字符串来解析，那么就变成了字符串拼接：

```vue
<input type="text" v-model="text" />
<p>{{ text + 100 }}</p>
```

但是如果希望变成的是加和的状态，就需要修饰符 `.number` 来解决，这样就可以将文本框内输入的以数字形式解析出来并加和

```vue
<input type="text" v-model.number="text" />
<p>{{ text + 100 }}</p>
```

> 如果你在文本框内输入了汉字或者英文字母之后，就算你加入了 .number 修饰符，系统也不会正常工作，要确保你输入的是纯数字，才可以正常工作！

**.trim**

在输入标题的时候，可能会将标题等发送至后端存入数据库中，但是并不希望开头和结尾插入空格，因为当用户每输入一个空格，虽然是看不到的，但是仍然会占用数据库的存储空间，这时就可以使用 `.trim` 来清除文本开头和结尾的空格，无论输入多少空格，都默认会被清除

```vue
<input type="text" v-model.trim="title" />
<p>{{ title }}</p>
```

> 注意：仅仅可以清楚段落开头和结尾的空格，作用在中间部分的空格会被保留！

## 键盘鼠标事件

当我们按下键盘的时候就会触发事件：

```vue
<template>
  <input type="text" @keyup="key" />
</template>

<script setup>
  function key(event) {
    console.log(event)
  }
</script>
```

那么在接受到的事件对象中我们可以看到里面有一个`key`的属性，就是我们当前按下的键位

也可以通过事件修饰符来指定按下哪个键位触发函数，比如下方按下 `b` 触发函数：

```vue
<template>
  <input type="text" @keyup.b="key" />
</template>

<script setup>
  function key(event) {
    console.log(event.key)
  }
</script>
```

也可以结合使用快捷键，例如下方 `ctrl + b ` 触发事件：

```vue
<template>
  <input type="text" @keyup.ctrl.b="key" />
</template>
```

鼠标左中右事件定义方式：

```vue
<template>
  <button @click.left="change1">按钮1</button>
  <button @click.middle="change2">按钮2</button>
  <button @click.right="change3">按钮3</button>
</template>

<script setup>
  const change1 = () => console.log('change1')
  const change2 = () => console.log('change2')
  const change3 = () => console.log('change3')
</script>
```

## 在 style 中使用 v-bind

vue3 中可以在 `style` 中使用 `v-bind` 来绑定 js 中的变量，比如下面例子中，一个累加器来渲染不同的颜色

```vue
<template>
  <h1 @click="add">切换颜色</h1>
</template>

<script setup>
  import { ref } from 'vue'
  const text = ref('1')
  const color = ref('red')
  const add = () => {
    text.value++
    text.value % 2 === 0 ? (color.value = 'red') : (color.value = 'blue')
  }
</script>

<style scoped>
  h1 {
    color: v-bind(color);
  }
</style>
```

## watch

累加器每次数值进行改变的时候执行 `watch` 函数，下面是 vue3 中 watch 的写法：

```vue
<template>
  <button @click="add">{{ text }}</button>
</template>

<script setup>
  import { ref, watch } from 'vue'
  const text = ref(1)
  const add = () => text.value++
  watch(
    () => text.value,
    (newText, oldText) => {
      // newText 是新值，oldText 是老值
      console.log(newText, oldText)
    }
  )
</script>
```

## vue3 的特性

1. RFC

在 Github 接受整个社区的需求和请求来 讨论整个 Vue 的发展方向

2. 新的相应式系统

新的相应式系统是基于 ES6 的 proxy 来设计的

3. Composition API 和 `<script setup>`

script setup 可以更快的帮我们编写 Composition

4. TypeScript 重构

调试阅读源码更加方法，每个数据都有数据类型，每个函数知道参数和返回对象是什么

5. Vite

速度非常快，的工程化工具

## Src 引入

如果你倾向于将 `*.vue` 组件拆分为多个文件，可以使用 `src` attribute 来引入外部的文件作为语言块

下面列举出三个文件，分别是 `index.html index.js index.css`：

**html**

```html
<h1>{{ text }}</h1>
<button @click="change">点击</button>

<ul>
  <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
</ul>
```

**js**

```js
import { ref } from 'vue'
export default {
  setup() {
    const text = ref('这是首页app组件')
    const arr = [1, 2, 3, 4, 5]
    function change() {
      alert('点击了')
    }
    return {
      change,
      text,
      arr
    }
  }
}
```

**css**

```css
h1 {
  color: red;
}
```

这样分别写好之后，然后引入到组件中，那么这时候我们的组件的样子就是：

```vue
<template src="./app/index.html"></template>

<script src="./app/index.js"></script>

<style scoped src="./app/index.css"></style>
```

可以试一下效果依然可以实现


---
./vue/vuex.md
---
# Vuex

## 安装

在 vue3 的项目中使用 vuex 首先需要下载：

```shell
npm install vuex@next
```

## 快速上手

Vuex 就相当于我们项目中的大管家，集中式存储管理应用的所有组件的状态。

在 `src/store` 中先新建 `index.js`，在下面的代码中，我们使用 `createStore` 来创建一个数据存储，我们称之为 `store`

```js
import { createStore } from 'vuex'

const store = createStore({
  state: {
    text: '这是 vuex 中的数据'
  },
  mutations: {
    /**
     * 改变 state.text 的值
     * @param { object } state state 对象
     * @param { text } data 修改的值
     */
    changeText(state, data) {
      state.text = data
    }
  }
})

export default store
```

接下来在 `main.js` 中引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')
```

在组件中，可以引入`import { useStore } from 'vuex'` 来获取数据源，并可以提供给模板使用

```vue
<template>
  <h1>{{ store.state.text }}</h1>
</template>

<script setup>
  import { useStore } from 'vuex'
  const store = useStore()
  console.log(store.state.text)
</script>
```

如果想要改变 `text` 的值，那么就需要使用 `store.commit()` 方法进行修改

```vue
<template>
  <h1>{{ store.state.text }}</h1>
  <button @click="change">改变值</button>
</template>

<script setup>
  import { useStore } from 'vuex'
  const store = useStore()
  function change() {
    store.commit('changeText', '改变了！！')
  }
</script>
```

下面分别来说明一下 vuex 中的核心方法

## state

数据都定义在这里

## mutations

修改 state 中的数据必须要使用 mutations 进行修改，mutation 的设计就是用来实现同步地修改数据，不能修改异步的数据

```js
import { createStore } from 'vuex'

const store = createStore({
  state: {
    text: 1
  },
  mutations: {
    changeText(state, data) {
      state.text++
    }
  }
})

export default store
```

## getters

相当于计算属性，操作 state 中的计算逻辑可以直接写在 getters 中，函数可以直接返回给全局使用

**vuex**

```js
import { createStore } from 'vuex'

const store = createStore({
  state: {
    text: 1
  },
  mutations: {
    changeText(state, data) {
      state.text++
    }
  },
  getters: {
    double(state) {
      return state.text * 2
    }
  }
})

export default store
```

**app.vue**

```vue
<template>
  <h1>{{ double }}</h1>
  <button @click="change">改变值</button>
</template>

<script setup>
  import { useStore } from 'vuex'
  import { computed } from 'vue'
  const store = useStore()
  function change() {
    store.commit('changeText')
  }
  const double = computed(() => {
    return store.getters.double
  })
</script>
```

## action

用于修改异步的数据，**action 并不是直接修改数据，而是通过 mutations 去修改，在 actions 中要解构出 commit 函数 用于提交 mutations**，之后再通过 mutations 修改 state 中的值

**vuex**

```js
import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {
    list: []
  },
  mutations: {
    changeList(state, data) {
      state.list = data
    }
  },
  actions: {
    // 解构出 commit 函数 用于提交 mutations
    loadList({ commit }) {
      axios({
        method: 'GET',
        url: 'https://infinitymcn.com/citi/citi-form-backend/public/index.php/index/Vote/getVoteRes'
      }).then((res) => {
        commit('changeList', res.data)
      })
    }
  }
})

export default store
```

**app.vue**

有一点需要注意的是，在组件中调用 `actions` 中的函数，需要使用 **store.dispatch** 方法

```vue
<template>
  <button @click="load">获取数据</button>
</template>

<script setup>
  import { useStore } from 'vuex'
  const store = useStore()
  function load() {
    store.dispatch('loadList')
  }
</script>
```


---
./pnpm/pnpm.md
---
# pnpm

## npm 的缺点
1. 在使用 `npm` 或 `yarn` 时，如果你有100个项目使用某个依赖项，那么你就会在磁盘上保存该依赖项的100个副本（比如这100个项目都使用了 `element-ui`, 那么磁盘上就会保存100份 element-ui 的源码）, 非常占用空间
2. 使用 `npm` 或 `yarn` 安装依赖项时，所有的包都在 `node_modules` 的根目录。 这样就导致了一个问题，源码可以直接访问项目中依赖的依赖, 这样是不太好的（比如 `element-ui` 本身依赖 a 包, 表面上我们没有安装 a 包, 但却可以使用, 如果有一天删了 `element-ui`, 意味着 a 包也会删掉, 如果此时项目恰好引用了 a 包而忘记删除, 项目就会报错了）
<img src='./imgs/1.png' width=300px style="padding-top: 10px">

## 什么是 pnpm
`pnpm`是一种Node.js包管理器，它与`npm`类似，但具有更快的安装速度和更少的磁盘空间占用。与`npm`不同，`pnpm`使用**软链接**和**硬链接**来共享依赖项，这意味着每个依赖项只需要在磁盘上存储一次，而不是每个项目都存储一次。


## 软链接和硬链接
### 1. 文件的本质
在操作系统中，文件实际上是一个指针，只不过它指向的不是内存地址，而是一个外部存储地址（这里的外部存储可以是硬盘、U盘、甚至是网络）
<img src='./imgs/4.png' width=550px style="padding-top: 10px">

当我们删除文件时，删除的实际上是指针，因此，无论删除多么大的文件，速度都非常快。像我们的U盘、硬盘里的文件虽然说看起来已经删除了，但是其实数据恢复公司是可以恢复的，因为数据还是存在的，只要删除文件后再没有存储其它文件就可以恢复，所以真正删除一个文件就是**反复存反复删**

### 2. 文件的拷贝
如果你复制一个文件，是将该文件指针指向的内容进行复制，然后产生一个新文件指向新的内容。
<img src='./imgs/5.png' width=550px style="padding-top: 10px">

### 3. 硬链接 hard link
硬链接的概念来自于 Unix 操作系统，它是指将一个文件A指针复制到另一个文件B指针中，文件B就是文件A的硬链接。
<img src='./imgs/6.png' width=550px style="padding-top: 10px">
通过硬链接，不会产生额外的磁盘占用，并且，两个文件都能找到相同的磁盘内容。 硬链接的数量没有限制，可以为同一个文件产生多个硬链接。

windows 可以在 cmd 中使用下面的命令可以创建硬链接。
```shell
mklink /h 链接名称 目标文件
```
注意:
1. 由于文件夹（目录）不存在文件内容，所以文件夹（目录）不能创建硬链接
2. 在 windows 操作系统中，通常不要跨越盘符创建硬链接

### 4. 软链接 symbol link
软链接又称为符号链接，如果为某个文件或文件夹A创建符号连接B，则B指向A。
<img src='./imgs/7.png' width=550px style="padding-top: 10px">

windows 可以在 cmd 中使用下面的命令可以创建软链接。(软链接类似快捷方式)
```shell
mklink 链接名称 目标文件
```
由于符号链接指向的是另一个文件或目录，当执行该文件时，会使用原始路径。比方说：我在D盘装了LOL，在桌面创建了LOL快捷方式，相当于是符号链接，双击快捷方式运行游戏，在运行游戏的时候是按照LOL原始路径（D盘路径）运行的。

### 5. 硬链接和软链接区别
1. 硬链接仅能链接文件，而符号链接可以链接目录
2. 硬链接在链接完成后仅和文件内容关联，和之前链接的文件没有任何关系。而符号链接始终和之前链接的文件关联，和文件内容不直接相关。


## pnpm 解决了哪些问题
1. 使用`pnpm`安装的包都会存储在硬盘上的某一位置。 当第三方包被安装时，包里的文件会**硬链接**到这一位置。 如果你有100个项目都使用了 element-ui, 那么磁盘上就会有100份 element-ui 硬链接到存储仓库中, 因为硬链接不会占用额外的磁盘空间, 所以可以解决包占用空间过大的问题。
2. 如果你用到了某依赖项的不同版本，只会将不同版本间有差异的文件添加到仓库。 例如，如果某个包有100个文件，而它的新版本只改变了其中1个文件。那么 `pnpm update` 时只会向存储中心额外添加1个新文件，而不会因为仅仅一个文件的改变复制整新版本包的内容。

## pnpm 原理
使用 pnpm 安装的包都存储到哪了呢?
在 pnpm 中，会将依赖安装到当前分区的 `<home dir>/.pnpm-store` 位置中，可以通过以下命令获得当前的 store 位置：
```shell
pnpm store path
```
<img src='./imgs/8.png' width=400px style="padding-top: 10px">
<img src='./imgs/9.png' width=550px style="padding-top: 10px">

`pnpm`利用硬链接将所需的包从`node_modules/.pnpm`硬链接到`store`中

通过软链接将`node_modules`中的顶层依赖以及依赖的依赖软链接到`node_modules/.pnpm`中

看如下例子:
```txt
node_modules
└─ .pnpm
   └─ demo-a@1.0.0
      └─ node_modules
         └─ demo-a -> <store>/demo-a
   └─ demo-b@1.0.0
      └─ node_modules
         ├─ demo-a -> ../../demo-a/node_modules/demo-a
         └─ demo-b -> <store>/demo-b
   └─ demo-c@1.0.0
      └─ node_modules
         ├─ demo-a -> ../../demo-a/node_modules/demo-a
         └─ demo-c -> <store>/demo-c
└─ demo-b -> ./.pnpm/demo-b@1.0.0/node_modules/demo-b
└─ demo-c -> ./.pnpm/demo-c@1.0.0/node_modules/demo-c
```
<img src='./imgs/10.png' width=700px style="padding-top: 10px">

看如下例子:
<img src='./imgs/2.png' width=300px style="padding-top: 10px">
<img src='./imgs/11.png' width=400px style="padding-top: 10px">

上面例子只执行了 pnpm add element-ui, 但是因为 element-ui 也有其他依赖项, 所以会有除了 element-ui 以外的包, element-ui@2.15.13/node_modules 下的 element-ui 文件夹下的文件硬链接到存储仓库, 其他的文件夹通过软链接找到对应的包

## pnpm 的局限性

由于全局共用同一份 `store`，因此当需要修改 `node_modules` 内的内容时，会直接影响全局 `store` 中对应的内容，对其他项目也会造成影响


---
./html/html.md
---
# HTML

## HTML 简介
HTML (Hyper Text Markup Language) 是一种用于创建网页的标记语言。它由许多标签组成，这些标签描述了文档的结构和内容。

## HTML 标签
HTML 标签是由尖括号包围的关键字，如 `<html>、<body>、<p>` 等等。每个 HTML 标签都有一个特定的作用，并且可以通过属性来更改其行为或外观。

例如，在下面的代码段中，`<h1>` 和 `</h1>` 之间的文本将被显示为标题级别1（最大）：

```html
<h1>This is a heading</h1>
```

## HTML 元素
HTML 元素由开始标记、结束标记以及其中间包含的内容组成。开始标记和结束标记必须匹配，并且可以带有属性。

例如，在下面的代码段中，`<p>` 和 `</p>` 之间的文本将被显示为一个段落：

```html
<p>This is a paragraph.</p>
```
## HTML 属性
HTML 属性提供了一种在元素中添加额外信息或配置其行为或外观的方法。每个属性都具有名称和值，并使用等号分隔。

例如，在下面的代码段中，img 元素使用 src 属性来指定图像文件所在位置：

```html
<img src="picture.jpg" alt="A beautiful picture">
```

## HTML 文档结构
HTML 文档由标记组成，这些标记描述了文档的结构和内容。一个完整的 HTML 文档应该包括以下几个部分：

```html
<!DOCTYPE html>
<html>
<head>
	<title>My Website</title>
</head>
<body>
	<h1>Welcome to my website!</h1>
	<p>This is a paragraph.</p>
</body>
</html>
```

## H5 标签
![h5](./imgs/1.png)

---
./vite/vite.md
---
# Vite

## 什么是构建工具
1. typescript：浏览器不认识 ts，要使用 tsc 将 ts 代码转为 js 代码
2. react/vue：浏览器不认识 jsx 和 vue 文件，需要使用 react-compiler/vue-compiler 将其转为 render 函数
3. less/sass/postcss/component-style：需要安装 less-loader、sass-loader 等一系列编译工具
4. babel：将 es 新语法降级
5. uglifyjs：丑化代码

有一个东西能够帮你把 tsc、react-compiler、less、babel、uglifyjs 全部集成在一起，这个东西就是 **构建工具**

## 构建工具承担了哪些脏活累活
1. 支持模块化开发：支持直接从 node_modules 里引入代码 + 多种模块化支持
2. 处理代码兼容性：比如 babel 语法降级，less、ts 语法转换（不是构建工具做的，构建工具将这些语法对应的处理工具集成进来自动化处理）
3. 打包：我们写的浏览器不认识的代码，交给构建工具进行编译处理的过程就叫做打包，打包完成后会给我们一个浏览器可以认识的文件
4. 提高项目性能：压缩文件，代码分割
5. 优化开发体验：构建工具会帮你自动监听文件的变化，当文件变化以后自动帮你调用对应的集成工具进行重新打包，然后浏览器重新运行（整个过程叫做热更新）
6. 开发服务器：解决跨域问题

**构建工具让我们不用关心生产的代码，也不用关心代码如何在浏览器运行，只需要关注开发时怎么写的舒服就怎么写就好了**

## 市面上主流的构建工具
webpack

vite

parcel

esbuild

rollup

grunt

gulp

## vite 相较于 webpack 的优势
vite 官网中的一句话：

然而，随着我们构建的应用程序越来越多，我们要处理的JavaScript数量也在急剧增加。包含数千个模块的大型项目并不罕见。我们开始遇到基于JavaScript的工具的**性能瓶颈**:启动开发服务器通常需要不合理的长时间等待(**有时长达几分钟**!)，即使使用热模块替换(Hot Module Replacement, HMR)，文件编辑也需要几秒钟才能在浏览器中反映出来。缓慢的反馈循环会极大地影响开发人员的工作效率和幸福感。（**webpack 的缺点**）

webpack 有自己的一套代码转换规则：
```javascript
const lodash = require('lodash')
import Vue from 'vue'

// 以上代码会被 webpack 通过 AST 分析出你写的 js 文件有哪些导入和导出操作，然后编译成：
const lodash = webpack_require('lodash')
const Vue = webpack_require('vue')
```
因为 webpack 支持多种模块化，他一开始必须要统一模块化开发，所以意味着他需要将所有的依赖全部读一遍，当项目越大，需要读取的文件就越多，需要转化的文件就越多，启动时间就越长。

vite 会不会直接把 webpack 干翻？（两者侧重点不一样，webpack 更关注兼容性，vite 关注浏览器端的开发体验）

vite 是基于 es modules 的（目前大部分浏览器已经支持 es modules），他不需要将所有的依赖读一遍，意味着启动会非常快

## vite 脚手架和 vite 的区别
vite 官网中通过 `npm create vite@latest` 安装的是一个全局的包：create-vite（vite 的脚手架）
直接运行这个 create-vite bin 目录下的一个配置

create-vite 和 vite 的关系：create-vite 内置了 vite（相当于 vue-cli 内置了 webpack）

## vite 初体验
开箱即用，不需要任何配置

默认情况下，esmodule 导入资源时要么是相对，要么是绝对路径

为什么浏览器不支持从 node_modules 里导入第三方包？因为会产生大量的网络请求，消耗性能

## 使用 vite 初始化 vue3 项目
npm init vite@latest

npm init vue@latest

## 如何解决已经安装了某个第三方包，比如 axios，但还爆红问题？
在 tsconfig.json 中的 compilerOptions 属性添加 "moduleResolution": "node”

---
./javascript/all-files.md
---
./all-files.md
---


---
./array-iteration.md
---
# 数组迭代

## forEach()

我们不应该过度滥用`forEach`。当然，在某些情况下`forEach`是一个非常好的方法。

如果你需要迭代数组以执行特定操作（例如控制台记录每个项目）。

可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

```js
const items = [1, 2, 3, 4, 5]

items.forEach((item) => console.log(item))
```

forEach 不返回任何值！！

```js
const toto = items.forEach((item) => console.log(item))
toto // undefined
```

## filter()

`filter` 方法，允许根据条件过滤数组中的某些值，查找满足条件的所有元素，返回数组

可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

例如，如果你想删除奇数

使用 forEach (不建议)

```js
const items = [1, 2, 3, 4]
const evenValue = []
items.forEach((item) => {
  if (item % 2 == 0) {
    evenValue.push(item)
  }
})
```

使用 filter (正确)

```js
const items = [1, 2, 3, 4]

const evenValue = items.filter((item) => {
  return item % 2 == 0
})
```

那么过滤函数是怎么实现的呢？下面是自己封装的一个过滤函数，用于深入了解过滤函数实现原理：

```js
const hd = [1, 2, 3, 4]
// array 原数组
// except 过滤掉的元素
function filter(array, except) {
  const newArray = []
  for (const value of array) {
    // 判断如果传递来的数组中没有循环数组中的元素，那么就将其放在新数组中
    if (except.includes(value) === false) {
      newArray.push(value)
    }
  }
  return newArray
}

// 这里想把 2,3 过滤掉掉
console.log(filter(hd, [2, 3]))
// (2) [1, 4]
```

> 当你使用 filter 时，你应该在每次迭代中返回一个布尔值（filter 的条件）。（否则 JS 引擎会把返回值强制转换为布尔值！）

使用 filter 过滤掉 falsy(false, null, 0, "", undefined, NaN) 值

```js
const array = [1, 0, true, false, "", "hello", null, undefined, NaN];

const filteredArray = array.filter(Boolean);

console.log(filteredArray); //[1, true, "hello"]
```

## map()

`map()` 方法用于映射数组

可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

当你需要将项目从一个数组转换为另一个数组时

例如，如果你想将数组中的所有值都乘以 2

使用 forEach (不建议)

```js
const items = [1, 2, 3, 4]
const result = []
items.forEach((item) => {
  result.push(item * 2)
})
```

使用 map (正确)

```js
const items = [1, 2, 3, 4]
const result = items.map((item) => {
  return item * 2
})
```

> 当你使用 map 时，你需要在每次迭代中返回一个项目（转换后的项目）。

## find()

`find` 方法，当你需要找到符合条件的项目并打算之后使用该项目的情况下，可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

```js
const arr = [1, 2, 3, 4]

arr.find((element, index, array) => {
  console.log(element, index, array)
})

// 1 0 (4) [1, 2, 3, 4]
// 2 1 (4) [1, 2, 3, 4]
// 3 2 (4) [1, 2, 3, 4]
// 4 3 (4) [1, 2, 3, 4]
```

找到指定 `name` 的元素，并返回该元素

```js
const arr = [
  { name: '张三', age: 12 },
  { name: '李四', age: 23 },
  { name: '小明', age: 34 }
]

const res = arr.find((element, index, array) => {
  return element.name === '小明'
})
console.log(res) //{name: '小明', age: 34}
```

查找满足条件的第一个单个元素 **返回布尔值**，找到符合条件的元素，然后返回该元素，没有符合条件的，则返回 undefined

```js
const arr = [12, 13, 14, 15, 16, 17, 128]
function changeArr() {
  return arr.find((n) => {
    return n > 14
  })
}
console.log(changeArr())
// 15
```

**filter 和 find 结合实例**

有一个数组 arr1 和 arr2 现在想要得到 arr1 - arr2 的数据，并且返回一个新的数组

```js
const arr1 = [
  { name: '小明', id: 1 },
  { name: '小张', id: 2 },
  { name: '小例', id: 3 },
  { name: '小李', id: 4 },
  { name: '小赵', id: 5 },
  { name: '小萌', id: 6 }
]

const arr2 = [
  { name: '小例', id: 3 },
  { name: '小萌', id: 6 }
]

function changeArr() {
  return arr1.filter((item1) => {
    return !arr2.find((item2) => {
      return item1.id === item2.id
    })
  })
}
console.log(changeArr())

// 结果为：
// [
//   {name: "小明", id: 1},
//   {name: "小张", id: 2},
//   {name: "小李", id: 4},
//   {name: "小赵", id: 5}
// ]
```

## findIndex()

`findIndex()` 方法和 `find` 方法类似，但是 `findIndex()` 并不是返回的匹配的指定的元素，而是返回匹配元素的索引值

可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

```js
const arr = [
  { name: '张三', age: 12 },
  { name: '李四', age: 23 },
  { name: '小明', age: 34 }
]

const res = arr.findIndex((element, index, array) => {
  return element.name === '小明'
})
console.log(res) // 2
```

## some()

`some()` 方法返回布尔值，**遍历出的每一项只要有一项为真，就返回真；如果为假，则每一项都遍历一次**

可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

```js
const items = [1, 2, 3, 4]
const hasNumber2 = items.some((item, index) => {
  return item === 2
})
console.log(hasNumber2) // true
```

> 如果第一项判断为真了，就不继续向下判断了，直接返回第一项。如果判断到第某一项时返回 true，那么在这个元素之前的全部都会遍历

## every()

`every()` 方法返回布尔值，**遍历出的每一项必须全部为真，才返回真，否则返回假**

可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

```js
const user = [
  { name: '小明1', fen: 78 },
  { name: '小明2', fen: 92 },
  { name: '小明3', fen: 37 },
  { name: '小明4', fen: 56 }
]

const res = user.every((item) => {
  return item.fen > 30
})

console.log(res) // true
```

## reduce()

`reduce()` 函数返回的任何值，都会作为下一次调用同一函数的第一个参数

可以接收四个参数：

- 上一次归并值
- 当前项
- 当前项的索引
- 原数组

```js
const arr = [1, 3, 7, 5]
arr.reduce((prev, cur, index, array) => {
  console.log(prev, cur, index, array)
})

// 1 3 1 [1, 3, 7, 5]
// undefined 7 2 [1, 3, 7, 5]
// undefined 5 3 [1, 3, 7, 5]
```

当你需要从数组中获取单个值时。此处的 `单个值` 可以是一个数组。

例如，如果你想对数组中的所有数字求和。

使用 forEach (不建议)

```js
const items = [1, 2, 3, 4]
let accumulator = 0

items.forEach((item) => {
  accumulator += item
})
```

使用 reduce (正确)

```js
const items = [1, 2, 3, 4]

const sum = items.reduce((accumulator, currentValue) => {
  return (accumulator += currentValue)
}, 0)
```

> 当你使用 reduce 时，你需要在每次迭代中返回 accumulator（reduce 方法返回的值），并且你还应该初始化这个 accumulator（在上面的例子中我们将累加器初始化为 0）！

## reduceRight()

`reduceRight()` 方法和 `reduce()` 方法基本类似，但是 `reduceRight()` 是从右往左遍历

可以接收四个参数：

- 上一次归并值
- 当前项
- 当前项的索引
- 原数组

```js
const arr = [1, 3, 7, 5]
arr.reduceRight((prev, cur, index, array) => {
  console.log(prev, cur, index, array)
})

// 5 7 2 [1, 3, 7, 5]
// undefined 3 1 [1, 3, 7, 5]
// undefined 1 0 [1, 3, 7, 5]
```


---
./basic.md
---
# 基础

## 运算符

### 一元运算符

关于 a++ 和 ++a 的问题

正常在不参与运算的情况下是没什么区别的

```js
let a = 2

console.log(a++)
console.log(++a)
// 结果都是3
```

那么再参与运算时

- 先++

```js
let a = 2
let b = 4
console.log(a + ++b)
// 结果为7 ++放到前面 b先自增 b+1 + a
```

- 后++

```js
let a = 2
let b = 4
console.log(a + b++)
// 结果为6 ++放到后面 b后自增 b + a
// b++ 是在 算完 b + a 只后再自增的 所以再打印 b 就是5了
console.log(b)
```

### 逻辑与 &&

用于检查所有值（通常值为条件）是否为真。

它将返回第一个值 false，否则返回最终值。

```js
const isTrue = true
const isFalse = false

console.log(isFalse && isTrue) // false
console.log(isTrue && isFalse) // false

const toto = 5 && 3 && 1
console.log(toto) // 1

const tutu = 5 && 0 && 2
console.log(tutu) // 0
```

### 逻辑或 ||

用于检查一组值中的一个值（通常值是条件）是否为真。

它将返回第一个值 true，否则返回最终值。

```js
const isTrue = true
const isFalse = false

console.log(isFalse || isTrue) // true
console.log(isTrue || isFalse) // true

const toto = 5 || 3 || 1
console.log(toto) // 5

const tutu = 0 || 5 || 2
console.log(tutu) // 5
```

### 逻辑空 ??

当其左侧操作数为 null 或 undefined （空值）时，返回其右侧操作数。

```js
console.log(null ?? 12) // 12
console.log(undefined ?? 12) // 12
console.log(55 ?? 12) // 55
console.log(55 ?? null) // 55
console.log(55 ?? undefined) // 55
```

> 注意：??运算符与||不同，因此当你需要根据其他值来赋值时，应该选择正确的运算符！

```js
const toto = 0 || 55 // 0 为false 所以是55
const titi = 0 ?? 55 // 0不是null或者undefined，所以是0

const tutu = undefined || 55 // undefined 为false，所以是55
const tata = undefined ?? 55 // 第一个是undefined，所以是55
```

## switch 语句

例如：

```js
let name = '小明'

switch (name) {
  case '小明':
    console.log('这是小明')
    break
  case '小张':
    console.log('这是小张')
    break
  default:
    console.log('我谁也不是')
}
```

例子中 我们要判断`name`来输出不同的内容，它会用`name`来和`case`的每一个字段进行相比，如果成立，就执行下面的内容，如果碰到`break`就退出`switch`。

如果一直都没有找到成立项，那么就执行`default`的内容

那么如果想要有两个字段有统一的处理方式的话，也可以这么写：

```js
let item = 'hello'

switch (item) {
  case 'hello':
  case 'Hi':
    console.log('你好啊')
    break
  case 'yes':
    console.log('是的')
    break
}
```

这里要判断的值是`item`上面代码意思是：`item`的值是`hello`或者`Hi`的其中一个，都是可以执行`break`前的内容的，两个内容使用统一的处理方式

## console

`console.log()` 在控制台上输出信息

```js
console.log('这的一段信息')

// 这的一段信息
```

`console.table()` 用于打印数组结构

比如，我们在定义一个数组的时候，要是在控制台打印是这样的：

```js
const arr = [1, 3, 5, 6]
console.log(arr)
// (4) [1, 3, 5, 6]
```

类似数组，可以通过 console.table() 来更直观的打印出：

```js
const arr = [1, 3, 5, 6]
console.table(arr)
```

打印结果为：

| (index) | value |
| ------- | :---- |
| 0       | 1     |
| 1       | 3     |
| 2       | 5     |
| 3       | 6     |

```js
Array(4)
```

会打印出 索引对应的值

`console.error()` 用于错误信息提示

```js
console.error('这是一段错误信息')
// 这是一段错误信息
```

`console.warn()` 用于打印警告信息

```js
console.warn('这是一段警告信息')
```

## 事件绑定

### addEventListener()

`addEventListener()` 方法接收三个参数：事件名、事件处理函数和一个布尔值，`true` 表示在捕获阶段处理程序；false(默认值)在冒泡阶段处理程序

```html
<button id="btn">点击</button>
<script>
  document.getElementById('btn').addEventListener(
    'click',
    () => {
      console.log('点击了')
    },
    false
  )

  // 点击了1
</script>
```

`addEventListener()` 的优势是可以处理多个事件程序

```html
<button id="btn">点击</button>
<script>
  document.getElementById('btn').addEventListener(
    'click',
    () => {
      console.log('点击了1')
    },
    false
  )

  document.getElementById('btn').addEventListener(
    'click',
    () => {
      console.log('点击了2')
    },
    false
  )

  // 点击了1
  // 点击了2
</script>
```

也可以定义函数通过函数名传参

```html
<button id="btn">点击</button>
<script>
  function _alert() {
    console.log('点击了')
  }

  document.getElementById('btn').addEventListener('click', _alert, false)
</script>
```

### removeEventListener()

`removeEventListener()` 可以移除事件处理程序，需要接收两个参数：事件名和事件函数

那也就是说通过 `addEventListener()` 添加的事件处理程序添加匿名函数是无法移除的，如下

**反面案例**

```html
<button id="btn">点击</button>
<script>
  const btn = document.getElementById('btn')
  btn.addEventListener(
    'click',
    function () {
      console.log('点击')
    },
    false
  )

  btn.removeEventListener('click', function () {
    console.log('点击')
  })
</script>
```

**正确的**

```html
<button id="btn">点击</button>
<script>
  function _alert() {
    console.log('点击了')
  }

  const btn = document.getElementById('btn')
  btn.addEventListener('click', _alert, false)
  btn.removeEventListener('click', _alert) // 有效果
</script>
```

## 计算程序执行的时间

上面，通过随机数的方法可以获取程序所执行的时间，它是原理是

```js
const a = Date.now() // 开始执行 for 循环的时间戳
for (i = 0; i < 22222220; i++) {} // 执行 for 循环
const b = Date.now() // 结束 for 循环的时间戳
console.log(b - a) // 两个时间戳相减 = for 循环所用的时间(毫秒)
```

其实，如果想要计算程序执行的时间，可以尝试下面的方法

我们只知道 `console.log()` 可以在浏览器控制台内打印出数据

其实 `console.` 后面还可以有很多别的参数，比如下面方法就可以计算程序执行的时间：

```js
console.time('for')
for (i = 0; i < 22222220; i++) {}
for (i = 0; i < 22222220; i++) {}
for (i = 0; i < 22222220; i++) {}
console.timeEnd('for')
```

> `console.time()` 和 `console.timeEnd()` 是相互对应的两个标签，计算的就是中间包裹住程序所执行的时间，里面名称可以自定义，但是开始和结束的名称必须对应！
>
> **参数填写错误浏览器会有警告！（不是报错）**

## Referer 说明

解决关于图片请求失败 403 报错问题解决

> GET https://img2018.cnblogs.com/blog/1480369/201809/1480369-20180929001746684-197810269.jpg 403 (Forbidden)

为什么项目中有时候图片加载失败后报错会返回 403？

因为有些项目中的数据是通过爬虫抓取第三方的数据来进行展示的，而第三方对图片做了放到链保护处理，也就是说不能让你直接通过图片地址访问图片资源。

> 第三方平台是怎么处理图片资源保护的呢？

> 服务器一般使用 Referer 请求头识别图片来源，然后处理资源访问。
> 我们在浏览器中发的任何请求，都会携带一个叫 Referer 的字段，会包含请求资源来源页面的地址，也就是你从哪里来的，如果你从网站 A 来的，那么 Referer 就是网站 A 的地址。
> 服务器一般使用 Referer 请求头识别来源，可能会进行统计分析、日志记录以及缓存优化等
> 那么服务器一看不是自己的网站，那么就会禁止访问，返回 403，不允许请求。

需要注意的是：`referer` 实际是 **referrer** 错误拼写。

打开浏览器的控制台 Network 中，我们发送的任何请求都会携带 Referer

```shell
Referer: http://localhost:8080/
```

**怎么解决？**

> 那么就不要发送 Referer，这样对方服务器就不知道你是从哪里来的了，姑且认为你是自己人吧。

**如何设置？**

能发 Referer 的资源有很多，比如;

`<a>`、`<img>`、`<script>`、`<area>` 或者 `<link>`

可以单独设置禁止发送 Referer

```html
<img src="http://....." alt="" referrerpolicy="no-referrer" />
```

也可以在 HTML 页面头部通过 meta 标签属性全局配置

```html
<meta name="referrer" content="no-referrer" />
```

## typeof 和 instanceof

`typeof` 可以判断一个变量是原始类型中的那种类型，但是在下面情况中，就会显得不那么的友好：

```js
const arr = [1, 2, 3, 4]
const obj = {}
const n = null
console.log(typeof arr) // object
console.log(typeof obj) // object
console.log(typeof n) // object
```

可见，使用 `typeof` 方法之后，在判断数组，对象和 null 的时候，返回的结果都是 `object`，但是我们要判断引用类型具体是什么类型，就需要使用 `instanceof`了：

```js
const arr = [1, 2, 3, 4]
const obj = {}
console.log(arr instanceof Array)
console.log(obj instanceof Object)
```

这样就可以很好的分清楚是对象还是数组了

> 注意：instanceof 只能进行检查引用类型，检查原始类型全部返回 false！


---
./data-type.md
---
# 数据类型

## Map()

`Map()` 类型实际上是键值对的有序集合，键和值是任意类型，可以使用构造函数来创建，一个键对应一个值

```js
const m = new Map()

const m2 = new Map([
  ['name', '张三'],
  ['age', '12']
])
console.log(m2)
// Map(2) {'name' => '张三', 'age' => '12'}
```

`size` 方法可以获取键值的数量，相当于数组的 `length` 方法

```js
const m2 = new Map([
  ['name', '张三'],
  ['age', '12']
])
console.log(m2.size) // 2
```

`set()` 方法添加元素，接收两个参数：`键/值`

```js
const mapList = new Map()
mapList.set('name', '张三')
mapList.set('age', 12)
console.log(mapList)

// Map(2) {"name" => "张三", "age" => 12}
```

`get()` 方法通过指定键名获取键值

```js
const mapList = new Map()
mapList.set('name', '张三')
mapList.set('age', 12)

console.log(mapList.get('name'))
// 张三
```

`has()` 方法检测集合中有无指定元素，返回布尔值

```js
const m2 = new Map([
  ['name', '张三'],
  ['age', '12']
])
console.log(m2.has('name')) // true
console.log(m2.has('name2')) // false
```

`delete()` 方法可删除元素

```js
const m2 = new Map([
  ['name', '张三'],
  ['age', '12']
])
m2.delete('name')
console.log(m2) // Map(1) {'age' => '12'}
```

`clear()` 方法可以清楚所有的键值

```js
const m2 = new Map([
  ['name', '张三'],
  ['age', '12']
])
m2.clear()
console.log(m2) // Map(0) {size: 0}
```

`keys()` 方法可以获取到所有的键

```js
const m = new Map([
  ['name', '张三'],
  ['age', '12']
])

console.log(m.keys()) // MapIterator {'name', 'age'}
```

`values()` 可以获取每一项的值

```js
const m = new Map([
  ['name', '张三'],
  ['age', '12']
])

console.log(m.values()) // MapIterator {'张三', '12'}
```

`Map` 与 `Objet` 类型不同的是，它可以用任意的键作为键名

```js
function fun() {}
const sy = Symbol()
const obj = {}

const m = new Map([
  [fun, '这是函数'],
  [sy, '这是 Symbol'],
  [obj, '这是 obj']
])

console.log(m.get(fun)) // 这是函数
console.log(m.get(sy)) // 这是 Symbol
console.log(m.get(obj)) // 这是 obj

console.dir(m)
```

打印结果

```shell
Map(3)
  [[Entries]]
    0: {function fun () { } => "这是函数"}
    1: "这是 Symbol"
    2: {Object => "这是 obj"}
  size: 3
  [[Prototype]]: Map
```

可以使用 [entries](https://tianyuhao.cn/blog/javascript/array-methods.html#entries) 方法进行迭代

```js
const m = new Map([
  ['name', '张三'],
  ['age', '12']
])

for (const item of m.entries()) {
  console.log(item)
  // ['name', '张三']
  // ['age', '12']
}
```

也可以使用 `[Symbol.iterator]()` 方法进行迭代

`[Symbol.iterator]()` 和 `entries()` 是全等的

```js
console.log(m.entries === m[Symbol.iterator]) // true
```

```js
const m = new Map([
  ['name', '张三'],
  ['age', '12']
])

for (const item of m[Symbol.iterator]()) {
  console.log(item)
  // ['name', '张三']
  // ['age', '12']
}
```

或者使用数组方法进行遍历

```js
const m = new Map([
  ['name', '张三'],
  ['age', '12']
])

m.forEach((item, value) => {
  console.log(item, value)
  // 张三 name
  // 12 age
})
```

把数组复制到映射

```js
const arr = ['css', 'html', 'js']
const m = new Map(
  arr.map((item, index) => {
    return [index + 1, item]
  })
)

console.log(m)
```

打印结果

```shell
Map(3) {1 => 'css', 2 => 'html', 3 => 'js'}
```

## WeakMap()

`WeakMap()` 是 `Map()` 的一个兄弟，但是也是有些区别的

`WeakMap()` 的键只能是 `Object` 类型

- 错误的

```js
const wm = new WeakMap([['age', '12']])

console.dir(wm) // TypeError:用作弱映射键的值无效
```

- 正确的

```js
const obj = {}
const wm = new WeakMap([[obj, '12']])
```

如果想使用字符串进行作为键，可以先包装成对象再作为键

```js
const obj = {}
const str = new String('name')
const wm = new WeakMap([
  [obj, '12'],
  [str, '张三']
])
```

还有不同的是：

- `WeakMap()` 不可被迭代
- `clear()` 方法不能使用

## Set()

ES6 提供了新的数据结构 `Set()`。它类似于数组，但是成员的值都是唯一的，没有重复的值，很多时候它都要强于 `Map()`

创建一个 `Set` 数据结构

```js
const s = new Set()
```

`Set()` 和 `Map()` 类似，有着很多共同效果的方法：

- `size` 方法获取元素的数量
- `add()` 方法添加元素
- `delete()` 方法删除元素
- `has()` 方法检测集合中有无指定元素，返回布尔值
- `clear()` 方法可清空所有元素

`values()` 和 `keys()` 方法可以获取其中的每一项进行遍历

`values()` 和 `keys()` 是全等的，所以用哪个都可以

```js
const s = new Set([1, 2, 3, 4])
console.log(s.values === s.keys) // true
console.log(s.keys()) // SetIterator {1, 2, 3, 4}

for (const item of s.keys()) {
  console.log(item)
}
// 1
// 2
// 3
// 4
```

**将 Set 转换为数组**

可以使用 Es6 的扩展运算符 `...` 对 `Set` 展开进行转换

```js
const setArr = new Set([1, 3, 3, 3, 3, 4, 6])
const arr = [...setArr]
console.log(arr)

// (4) [1, 3, 4, 6]
```

## WeakSet()

`WeakSet()` 是 `Set()` 的一个兄弟，但是也是有些区别的

`WeakSet()` 的键只能是 `Object` 类型

- `WeakSet()` 不可被迭代
- `clear()` 方法不能使用

## Symbol()

Symbol 数据库类型是特点是：**值是唯一的**

可以通过`Symbol()` 创建一个 Symbol()

```js
let a = Symbol()
let b = Symbol()

console.log(typeof a) // Symbol
console.log(a === b) // false
```

Symbol 并不是一个对象，可以把它理解为一个字符串，一个永远都不会重复的字符串，所以它是原始类型。

> 可以给 Symbol 添加一个描述：

```js
const a = Symbol('这是一段文字')
const b = Symbol('你好吗')
```

用 js 内置的方法 `description` 提取出描述信息，并以字符串形式打印

```js
const a = Symbol('这是一段文字')
const b = Symbol('你好吗')

console.log(a.description) // 这是一段文字
console.log(b.description) // 你好吗
```

> 除此之外，还可以使用 `Symbol.for()` 来定义

这样定义的也可以在内部添加描述，但是这样的好处是：如果两次定义完全一样，那么两个变量会公用一个内容地址：

```js
const a = Symbol.for('这是一段文字')
const b = Symbol.for('这是一段文字')
console.log(a === b) // true
```

那么这样再判断的话，两个变量就相等了

这样声明的话，可以使用 `Symbol.keyFor()` 来获得描述的文字

```js
const a = Symbol.for('这是一段文字')
console.log(Symbol.keyFor(a)) // 这是一段文字
```

实际应用，当有两个人的名字的一样的时候，可以使用 `Symbol` 来定义每个键值作为区分：

```js
const user1 = {
  name: '李四',
  key: Symbol()
}

const user2 = {
  name: '李四',
  key: Symbol()
}

const obj = {
  [user1.key]: {
    js: 100,
    css: 20
  },
  [user2.key]: {
    js: 30,
    css: 21
  }
}

console.log(obj) // {Symbol(): {…}, Symbol(): {…}}
console.log(obj[user1.key]) // {js: 100, css: 20}
console.log(obj[user2.key]) // {js: 30, css: 21}
```

在对象中，如果存在 Symbol 类型时，通过普通的`for in` 或者 `for of` 循环是遍历不到的：

```js
const age = Symbol('age')
const obj = {
  name: '张三',
  [age]: 12
}
// 普通的方式遍历只能得到普通的值
for (const key of Object.keys(obj)) {
  console.log(key) // name
}

// 使用 Object.getOwnPropertySymbols() 方法之可以遍历出 Symbol 类型
for (const key of Object.getOwnPropertySymbols(obj)) {
  console.log(key) // Symbol(age)
}

// 如果想要遍历出所有的类型，需要使用 Reflect.ownKeys() 静态方法才可以实现
for (const key of Reflect.ownKeys(obj)) {
  console.log(key)
  // name
  // Symbol(age)
}
```

## JSON

**JSON.stringify()**

使用 `JSON.stringify()` 方法可以将对象转换为 JSON 对象

```js
const obj = {
  name: '张同学',
  age: 39,
  arr: [1, 2, 3, 4]
}

console.log(JSON.stringify(obj))

// {"name":"张同学","age":39,"arr":[1,2,3,4]}
```

也可以接收第二个参数，用于过滤，可以接收一个数组或函数

```js
const obj = {
  name: '张同学',
  age: 39,
  arr: [1, 2, 3, 4]
}

console.log(JSON.stringify(obj, ['age']))

// {"age":39}
```

通过第二个参数过滤出 `age`

第三个参数是代表每行的缩进数量，最大为 10

```js
const obj = {
  name: '张同学',
  age: 39,
  arr: [1, 2, 3, 4]
}

console.log(JSON.stringify(obj, null, 2))
```

结果如下：

```json
{
  "name": "张同学",
  "age": 39,
  "arr": [1, 2, 3, 4]
}
```

**JSON.parse()**

使用 `JSON.parse()` 方法可以将 JSON 对象转换为对象

```js
const json = `{"name":"张同学","age":39,"arr":[1,2,3,4]}`
console.log(JSON.parse(json))

// {name: '张同学', age: 39, arr: Array(4)}
```

## FormData()

创建一个 formdata

```js
const fd = new FormData()
fd.append('name', 'data')
```

`append` 方法接收两个参数 键和值

使用 FormData 就不需要给 xhr 对象设置响应头了，因为 xhr 对象可以识别作为 FormDate 实例传入的数据类型并自动配置响应头

## URLSearchParams

URLSearchParams 是用于处理 URL 查询参数的对象。它提供了一组方法来解析、操作和构建 URL 查询参数。你可以使用它来获取、设置、添加或删除 URL 的查询参数。

```js
const urlParams = new URLSearchParams(window.location.search);
const paramValue = urlParams.get('paramName');
```


---
./date-object.md
---
# 日期对象

## new Date()

可以通过 `new Date()` 获取当前时间

```js
const date = new Date()
console.log(date)
```

## getTime()

获取指定日期的时间戳 `getTime()`

```js
const time = new Date('2000-10-1 12:23:11') // 获取目标时间
console.log(time.getTime()) // 使用 getTime() 方法将时间转换为时间戳
// 下面三种方法也可以转换
console.log(time * 1)
console.log(Number(time))
console.log(time.valueOf())
```

> 以上转换的 4 种方法都可以使用

- 将时间戳转换为时间对象

```js
const time = new Date('2000-10-1 12:23:11')
const timeList = time.getTime()
console.log(new Date(timeList))
```

将时间戳转换为时间对象的方法也很简单，只有 `new` 一个新的日期对象，再把时间戳扔到括号里面即可

> new Date(时间戳)

- 获取当前时间的年月日时分秒

```js
const time = new Date() // 获取当前时间
const year = time.getFullYear() // 获取年份
const month = time.getMonth() + 1 // 获取月份
const day = time.getDate() // 获取日
const hour = time.getHours() // 获取小时
const minute = time.getMinutes() // 获取分钟
const res = `${year}-${month}-${day} ${hour}:${minute}`
console.log(res)
```

这么的写法比较麻烦，我们可以通过封装函数的方法，来实现上面代码段的重复利用

```js
// 获取到当前的时间
const time = new Date()

// 封装函数
// date 是当前的时间
// format 处理转换时间的格式
function dateFormat(date, format = 'YYYY-MM-DD HH:mm:ss') {
  // 定义对象处理转换时间的格式
  const config = {
    YYYY: date.getFullYear(),
    MM: date.getMonth() + 1,
    DD: date.getDate(),
    HH: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getMinutes()
  }
  // 用 for in 遍历出对象中的每一项 并使用 replace 替换
  for (const key in config) {
    format = format.replace(key, config[key])
  }
  return format
}

console.log(dateFormat(time, 'YYYY年-MM月-DD日'))
// 2021年-4月-3日

console.log(dateFormat(time, 'YYYY^MM^DD HH^mm^ss'))
// 2021^4^3 20^41^41
```

## toLocaleDateString()

`toLocaleDateString()` 方法可将 Date 对象的时间转换为字符串

```js
const date = new Date()
const res = date.toLocaleDateString()
console.log(res)
// 2021/4/23
```

## Date.now()

`Date.now()` 获取当前时间戳

```js
console.log(Date.now())
```

通过时间戳，我们可以计算程序执行所用的时间，下面以 for 循环举例

```js
const a = Date.now() // 开始执行 for 循环的时间戳
for (i = 0; i < 22222220; i++) {} // 执行 for 循环
const b = Date.now() // 结束 for 循环的时间戳
console.log(b - a) // 两个时间戳相减 = for 循环所用的时间(毫秒)
```


---
./debounce.md
---
# 防抖函数

## 不需要传参
```js
function debounce(fn, delay) {
  let timer = null
  return function() {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(this)
    }, delay)
  }
}
const btn = document.querySelector('button')
btn.addEventListener('click', debounce(function() {
  console.log(this); // button
}, 1000))
```

## 需要传参
```js
function debounce(fn, delay) {
  let timer = null
  return function() {
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
const btn = document.querySelector('button')
btn.addEventListener('click', debounce((a, b) => {
  console.log(a, b); // 1, 2
}, 1000).bind(btn, '1', '2'))
```

---
./dom.md
---
# DOM 相关

## childNodes

`childNodes` 方法可获取元素中内部的元素
返回的并不是一个数组

```html
<ul class="list">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
const ul = document.querySelector('ul')
console.log(ul.childNodes) // NodeList(7) [text, li, text, li, text, li, text]
```

> childNodes 得到的结果并不是一个数组，但是它也有 `length` 属性，也可以使用数组的中括号方式通过索引获取里面的元素，使用 `Array.from()` 方法可以转换为真正的数组

## parentNode

`parentNode` 方法可获取父级元素

> 仅会获得一个最近的亲父级标签元素

```html
<ul>
  <li>哈哈哈</li>
</ul>

<script>
  const li = document.querySelector('li')
  console.log(li.parentNode)
  // <ul>...</ul>
</script>
```

## nodeName

`nodeName` 方法可获取元素的标签名

```html
<ul class="list"></ul>

<script>
  const ul = document.querySelector('ul')
  console.log(ul.nodeName) // UL
</script>
```

## nodeValue

`nodeValue` 方法可获取元素的节点值

```html
<button>按钮点击</button>
<script>
  console.log(document.querySelector('button').childNodes[0].nodeValue) // 按钮点击
</script>
```

## firstChild

`firstChild` 方法可获取子节点的第一个节点

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const c = document.querySelector('ul').childNodes[0]
  const f = document.querySelector('ul').firstChild
  console.log(c === f) // true
</script>
```

> firstChild 就是简化了 childNodes[0] 的写法

## lastChild

`lastChild` 方法可获取子节点的最后一个节点

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const c = ul.childNodes[ul.childNodes.length - 1]
  const l = ul.lastChild
  console.log(c === l)
</script>
```

> lastChild 就是简化了 ul.childNodes[ul.childNodes.length - 1] 的写法

## previousSibling

`previousSibling` 方法可获取子节点之前的一个相邻兄弟节点

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const c = ul.childNodes[ul.childNodes.length - 2] // 这里 -2 之后获取的是倒数第二个节点
  const l = ul.lastChild.previousSibling // 获取最后一个的前一个节点
  console.log(c === l) // true
</script>
```

## nextSibling

`nextSibling` 方法可获取子节点下一个的相邻兄弟节点

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const c = ul.childNodes[1] // 获取第二个节点
  const l = ul.firstChild.nextSibling // 获取第二个的下一个节点
  console.log(c === l)
</script>
```

如果获取最后一个节点的下一个节点则返回 null
获取第一个节点的上一个节点返回的也是 null

```js
const ul = document.querySelector('ul')
console.log(ul.lastChild.nextSibling)
console.log(ul.firstChild.previousSibling)
```

下面是一个综合上述方法的关系代码，想把 `class="red"` 的标签背景色改为红色

```html
<ul>
  <li>1</li>
  <li>
    <ol>
      <li>1</li>
      <li>2</li>
      <li class="red">3红色</li>
      <li>4</li>
    </ol>
  </li>
  <li>3</li>
</ul>

<script>
  document.querySelector(
    'ul'
  ).lastChild.previousSibling.previousSibling.previousSibling.lastChild.previousSibling.lastChild.previousSibling.previousSibling.previousSibling.style.backgroundColor =
    'red'
</script>
```

## hasChildNodes()

`hasChildNodes()` 方法可检测一个节点是否存在子节点，返回 `true` 说明存在一个或多个子结点，`false` 则没有子节点

```html
<ul>
  <li></li>
  <li>哈哈</li>
</ul>
<script>
  console.log(document.querySelector('ul').hasChildNodes()) // true
  console.log(document.querySelector('.a').hasChildNodes()) // false
  console.log(document.querySelector('.b').hasChildNodes()) // true
</script>
```

> 有一个空格也会返回 true

## appendChild()

`appendChild()` 可以在 `childNodes` 列表结尾插入节点

```html
<ul>
  <li>1</li>
  <li>2</li>
</ul>
<script>
  const LI = document.createElement('li')
  LI.innerHTML = '我是插入者'
  document.querySelector('ul').appendChild(LI)
</script>
```

## insertBefore()

`insertBefore()` 可以在 `childNodes` 列表指定位置插入节点

它可接收两个参数，第一个是插入的节点，第二个是插入的位置，如果第二个参数不传，则和 `appendChild()` 效果一致

```html
<ul>
  <li>1</li>
  <li>2</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const LI = document.createElement('li')
  LI.innerHTML = '我是插入者'
  ul.insertBefore(LI, ul.childNodes[2]) // 插入第二个位置
</script>
```

## replaceChild()

因为 `appendChild()` 和 `insertBefore()` 都是插入节点不会替换节点
所以 `replaceChild()` 方法可以替换指定位置的节点
接收两个参数，第一个是插入的节点，第二个是替换的位置

```html
<ul>
  <li>1</li>
  <li>2</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const LI = document.createElement('li')
  LI.innerHTML = '我是插入者'
  ul.replaceChild(LI, ul.childNodes[1]) // 替换第一个节点
</script>
```

## removeChild()

`removeChild()` 方法移除一个节点元素

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  ul.removeChild(ul.lastChild.previousSibling)
</script>
```

## cloneNode()

`removeChild()` 方法克隆一个节点元素，接收一个布尔值，表示是否深度克隆子元素

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  ul.appendChild(ul.cloneNode(true)) // 深度克隆

  console.log(ul.cloneNode(true).childNodes.length) // 8
  console.log(ul.cloneNode(false).childNodes.length) // 0
</script>
```

## document 类型

## document.documentElement

获取 `html`

```js
console.log(document.documentElement)
```

## document.doctype

获取 `<!DOCTYPE html>` 的引用

```js
console.log(document.doctype) // <!DOCTYPE html>
```

## document.URL

获取页面完整的 `URL`

```js
console.log(document.URL)
```

## document.domain

获取域名

```js
console.log(document.domain)
```

## document.referrer

获取来源

```js
console.log(document.referrer)
```

## document.getElementsByTagName()

获取元素集合，下面获取所有的 `div`

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<script>
  console.log(document.getElementsByTagName('div')) // HTMLCollection(5) [div, div, div, div, div]
</script>
```

> 也可以像数组一样操作它，但它并不是数组

## document.getElementsByName()

获取指定 `name` 的集合

```html
<div name="title"></div>
<div name="title"></div>
<div name="title"></div>
<script>
  console.log(document.getElementsByName('title')) // NodeList(3) [div, div, div]
</script>
```

## document.createElement()

`document.createElement()` 方法可以创建一个元素，接受一个参数为标签名

```js
document.createElement('div') // 创建一个 div
```

## document.createTextNode()

`document.createTextNode()` 方法可以创建一个文本节点

```html
<div id="app"></div>
<script>
  const text = document.createTextNode('这是一段文字')
  document.getElementById('app').appendChild(text)
</script>
```

## document.createComment()

`document.createComment()` 方法可以创建一个注释
但是在开发中基本不会使用

```js
document.body.appendChild(document.createComment('这是一段注释'))
```

## document.getElementsByClassName()

`document.getElementsByClassName()` 方法接收一个参数，即包含一个或者多个类名的字符串

```html
<div class="red box">1</div>
<div class="box red">2</div>
<script>
  console.log(document.getElementsByClassName('red box'))
</script>
```

> 因为两元素都包含 red 和 box 属性，所以获取两个，类名无视顺序

## document.readyState()

判断文档是否加载完成，可以有两个可能值

- loading 表示文档正在加载
- complete 文档加载完成

例如下面：

```html
<button onclick="ok()">点击</button>
<script>
  console.log(document.readyState) // loading

  function ok() {
    console.log(document.readyState) // complete
  }
</script>
```

## document.compatMode

检测浏览器使用什么渲染模式，可以有两个可能值

- CSS1Compat 标准模式
- backCompat 混杂模式

## document.characterSet

获取文档使用的字符集

```js
console.log(document.characterSet) // UTF-8
```

## getAttribute()

`getAttribute()` 方法可获取一个元素的属性值

```html
<div id="app"></div>
<script>
  console.log(document.getElementById('app').getAttribute('id')) // app
</script>
```

> 该方法仅可有一个参数

## setAttribute()

`setAttribute()` 方法可设置一个元素的属性值，接收两个参数，第一个是要设置的属性，第二个是设置的属性值

```html
<div id="app"></div>
<script>
  document.getElementById('app').setAttribute('class', 'box')
</script>
```

通过简写的方式也可以进行修改

```html
<div id="app"></div>
<script>
  document.getElementById('app').id = 'box'
</script>
```

> 注意：简写方式仅仅可以修改属性，并不能添加不存在的属性

## removeAttribute()

`setAttribute()` 方法可删除一个元素的属性值，不是仅仅清楚属性值，而是将属性和属性值全部清除

```html
<div id="app" class="box"></div>
<script>
  document.getElementById('app').removeAttribute('class')
</script>
```

## attributes

`attributes` 包含一个 `NamedNodeMap` 对象，包含元素的每一个属性

```html
<div id="app" class="box"></div>
<script>
  console.log(document.getElementById('app').attributes)
</script>
```

**返回结果**

```js
NamedNodeMap {
  0: id
  1: class
  class: class
  id: id
  length: 2
  [[Prototype]]: NamedNodeMap
}
```

通过 `attributes` 就可以像下面方式修改属性了

```html
<div id="app" class="box"></div>
<script>
  console.log(document.getElementById('app').attributes.id.nodeValue) // 获取 id

  document.getElementById('app').attributes.class.nodeValue = 'newClass' // 修改 class
</script>
```

> 每个节点中的 nodeValue 记录着对应的属性值

## attributes.removeNamedItem()

`attributes.removeNamedItem()` 方法和 `removeAttribute()` 类似，都是可以删除一个属性值，只不过 `attributes.removeNamedItem()` 是删除属性的 `NamedNodeMap` 对象中的属性

```html
<div id="app" class="box"></div>
<script>
  document.getElementById('app').attributes.removeNamedItem('class')
</script>
```

> `attributes.removeNamedItem()` 方法和 `removeAttribute()` 实际的效果是一样的，就是换了不同的方式表现而已，大多数都会使用 `removeAttribute()`、`setAttribute()` 和 `getAttribute()`

## namedItem()

`namedItem()` 方法返回具有指定 `id` 或 `name` 的元素，只返回一个元素，`id` 优先级大于 `name`

```html
<div name="title"></div>
<div id="title"></div>

<script>
  console.log(document.getElementsByTagName('div').namedItem('title')) // <div id="title"></div>
</script>
```

> namedItem() 方法仅会返回一项

## childElementCount

`childElementCount` 方法可获取子节点的数量

```html
<div id="app">
  <p>1</p>
  <p>2</p>
</div>
<script>
  console.log(document.getElementById('app').childElementCount) // 2
</script>
```

## firstElementChild

`firstElementChild` 方法可获取一个元素第一个子元素，类似 [firstChild](https://tianyuhao.cn/blog/javascript/js-methods.html#firstchild)

```html
<div id="app">
  <p>1</p>
  <p>2</p>
</div>
<script>
  console.log(document.getElementById('app').firstElementChild) // <p>1</p>
</script>
```

## lastElementChild

`lastElementChild` 方法可获取一个元素第一个子元素，类似 [lastChild](https://tianyuhao.cn/blog/javascript/js-methods.html#lastchild)

```html
<div id="app">
  <p>1</p>
  <p>2</p>
</div>
<script>
  console.log(document.getElementById('app').lastElementChild) // <p>2</p>
</script>
```

## previousElementSibling

`previousElementSibling` 方法指向前一个同胞兄弟节点

```html
<p class="p1">1</p>
<p class="p2">2</p>
<script>
  console.log(document.querySelector('.p2').previousElementSibling)
  // <p class="p1">1</p>
</script>
```

## nextElementSibling

`nextElementSibling` 方法指向后一个同胞兄弟节点

```html
<p class="p1">1</p>
<p class="p2">2</p>
<script>
  console.log(document.querySelector('.p1').nextElementSibling)
  // <p class="p2">2</p>
</script>
```

## classList

操作元素的类名，可以通过 `className` 来删除、替换。但是 `className` 是一个字符串，所以每次操作都需要重新设置才能生效，即使改变部分字符串也是一样，比如下面 `div` 有三个类名。想要删除一个，就得先把 `className` 拆开，删除不想要的那个，再设置回去，比如：

```html
<div id="app" class="box admin user"></div>
<script>
  const app = document.getElementById('app')
  const classNames = app.className.split(/\s+/)
  classNames.splice(1, 1)
  app.className = classNames.join(' ')

  // <div id="app" class="box user"></div>
</script>
```

那么在 **HTML5** 中新增了更方便的方式

```html
<div id="app" class="box"></div>
```

**add** 向类名列表中添加指定类名

```js
document.getElementById('app').classList.add('admin')
```

**contains** 检测一个类名是否存在 返回布尔值

```js
console.log(document.getElementById('app').classList.contains('box')) // true
```

**remove** 删除指定类名

```js
document.getElementById('app').classList.remove('box')
```

**toggle** 如果类名列表中存在 value 则删除，否则添加

```js
document.getElementById('app').classList.toggle('box2')
```

## outerHTML 和 innerHTML

`outerHTML` 和 `innerHTML` 方法都可以获取到一个元素的及所有后代元素的 HTML 字符串

```html
<div id="app">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</div>
<script>
  console.log(document.getElementById('app').outerHTML)
  console.log(document.getElementById('app').innerHTML)
</script>
```

**打印结果**

```
<div id="app">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</div>

<div id="app">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</div>
```

## insertAdjacentHTML() 和 insertAdjacentText()

`insertAdjacentHTML()` 和 `insertAdjacentText()` 方法都是用作插入标记，`insertAdjacentHTML()` 为插入 HTML 标记，`insertAdjacentText()` 为插入文本标记，它们都会接收两个参数，第一个参数必须是下列值中的一个

- beforebegin：元素自身的前面
- afterbegin：插入元素内部的第一个子节点之前
- beforeend：插入元素内部的最后一个子节点之后
- afterend：元素自身的后面

第二个参数为插入的标记内容

```html
<div id="app">Hello</div>
<script>
  const app = document.getElementById('app')
  app.insertAdjacentHTML('beforebegin', '<h1>你好</h1>')
  app.insertAdjacentText('afterbegin', '哈哈哈哈')
  app.insertAdjacentText('beforeend', '后面的')
</script>
```

## textContent

获取一个元素的文本内容，也可以修改文本内容

```html
<div id="app">hello</div>
<script>
  const app = document.querySelector('#app')
  console.log(app.textContent) // hello
  app.textContent = 'hello world'
  console.log(app.textContent) // hello world
</script>
```


---
./es-module.md
---
# ESModule

## 以下代码相当于什么
```js
export { default as Navbar } from './Navbar'
export { default as Sidebar } from './Sidebar'
export { default as AppMain } from './AppMain'
```
上面的代码相当于:
```js
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import AppMain from './AppMain';

export {
  Navbar,
  Sidebar,
  AppMain
};
```

---
./event-loop.md
---
# 事件循环

## 浏览器的进程模型

### 何为进程？

程序运行需要有它自己专属的内存空间，可以把这块内存空间简单的理解为进程

![](./images/1.jpg)

每个应用至少有一个进程，进程之间相互独立，即使要通信，也需要双方同意。

### 何为线程？

有了进程后，就可以运行程序的代码了。

运行代码的「人」称之为「线程」。

一个进程至少有一个线程，所以在进程开启后会自动创建一个线程来运行代码，该线程称之为主线程。

如果程序需要同时执行多块代码，主线程就会启动更多的线程来执行代码，所以一个进程中可以包含多个线程。

![](./images/2.jpg)

### 浏览器有哪些进程和线程？

**浏览器是一个多进程多线程的应用程序**

浏览器内部工作极其复杂。

为了避免相互影响，为了减少连环崩溃的几率，当启动浏览器后，它会自动启动多个进程。

![](./images/3.jpg)

> 可以在浏览器的任务管理器中查看当前的所有进程

其中，最主要的进程有：

1. 浏览器进程

   主要负责界面显示、用户交互、子进程管理等。浏览器进程内部会启动多个线程处理不同的任务。

2. 网络进程

   负责加载网络资源。网络进程内部会启动多个线程来处理不同的网络任务。

3. **渲染进程**（本节课重点讲解的进程）

   渲染进程启动后，会开启一个**渲染主线程**，主线程负责执行 HTML、CSS、JS 代码。

   默认情况下，浏览器会为每个标签页开启一个新的渲染进程，以保证不同的标签页之间不相互影响。

   > 将来该默认模式可能会有所改变，有兴趣的同学可参见[chrome 官方说明文档](https://chromium.googlesource.com/chromium/src/+/main/docs/process_model_and_site_isolation.md#Modes-and-Availability)

## 渲染主线程是如何工作的？

渲染主线程是浏览器中最繁忙的线程，需要它处理的任务包括但不限于：

- 解析 HTML
- 解析 CSS
- 计算样式
- 布局
- 处理图层
- 每秒把页面画 60 次
- 执行全局 JS 代码
- 执行事件处理函数
- 执行计时器的回调函数
- ......

> 思考题：为什么渲染进程不适用多个线程来处理这些事情？

要处理这么多的任务，主线程遇到了一个前所未有的难题：如何调度任务？

比如：

- 我正在执行一个 JS 函数，执行到一半的时候用户点击了按钮，我该立即去执行点击事件的处理函数吗？
- 我正在执行一个 JS 函数，执行到一半的时候某个计时器到达了时间，我该立即去执行它的回调吗？
- 浏览器进程通知我“用户点击了按钮”，与此同时，某个计时器也到达了时间，我应该处理哪一个呢？
- ......

渲染主线程想出了一个绝妙的主意来处理这个问题：排队

![](./images/4.jpg)

1. 在最开始的时候，渲染主线程会进入一个无限循环
2. 每一次循环会检查消息队列中是否有任务存在。如果有，就取出第一个任务执行，执行完一个后进入下一次循环；如果没有，则进入休眠状态。
3. 其他所有线程（包括其他进程的线程）可以随时向消息队列添加任务。新任务会加到消息队列的末尾。在添加新任务时，如果主线程是休眠状态，则会将其唤醒以继续循环拿取任务

这样一来，就可以让每个任务有条不紊的、持续的进行下去了。

**整个过程，被称之为事件循环（消息循环）**

## 若干解释

### 何为异步？

代码在执行过程中，会遇到一些无法立即处理的任务，比如：

- 计时完成后需要执行的任务 —— `setTimeout`、`setInterval`
- 网络通信完成后需要执行的任务 -- `XHR`、`Fetch`
- 用户操作后需要执行的任务 -- `addEventListener`

如果让渲染主线程等待这些任务的时机达到，就会导致主线程长期处于「阻塞」的状态，从而导致浏览器「卡死」

![](./images/5.jpg)

**渲染主线程承担着极其重要的工作，无论如何都不能阻塞！**

因此，浏览器选择**异步**来解决这个问题

![](./images/6.jpg)

使用异步的方式，**渲染主线程永不阻塞**

### 面试题：如何理解 JS 的异步？

JS 是一门单线程的语言，这是因为它运行在浏览器的渲染主线程中，而渲染主线程只有一个。

而渲染主线程承担着诸多的工作，渲染页面、执行 JS 都在其中运行。

如果使用同步的方式，就极有可能导致主线程产生阻塞，从而导致消息队列中的很多其他任务无法得到执行。这样一来，一方面会导致繁忙的主线程白白的消耗时间，另一方面导致页面无法及时更新，给用户造成卡死现象。

所以浏览器采用异步的方式来避免。具体做法是当某些任务发生时，比如计时器、网络、事件监听，主线程将任务交给其他线程去处理，自身立即结束任务的执行，转而执行后续代码。当其他线程完成时，将事先传递的回调函数包装成任务，加入到消息队列的末尾排队，等待主线程调度执行。

在这种异步模式下，浏览器永不阻塞，从而最大限度的保证了单线程的流畅运行。

### JS 为何会阻碍渲染？

先看代码

```html
<h1>Mr.Yuan is awesome!</h1>
<button>change</button>
<script>
  var h1 = document.querySelector('h1')
  var btn = document.querySelector('button')

  // 死循环指定的时间
  function delay(duration) {
    var start = Date.now()
    while (Date.now() - start < duration) {}
  }

  btn.onclick = function () {
    h1.textContent = '哈哈哈'
    delay(3000)
  }
</script>
```

点击按钮后，会发生什么呢？

### 任务有优先级吗？

任务没有优先级，在消息队列中先进先出

但**消息队列是有优先级的**

根据 W3C 的最新解释:

- 每个任务都有一个任务类型，同一个类型的任务必须在一个队列，不同类型的任务可以分属于不同的队列。
  在一次事件循环中，浏览器可以根据实际情况从不同的队列中取出任务执行。
- 浏览器必须准备好一个微队列，微队列中的任务优先所有其他任务执行
  https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint

> 随着浏览器的复杂度急剧提升，W3C 不再使用宏队列的说法

在目前 chrome 的实现中，至少包含了下面的队列：

- 延时队列：用于存放计时器到达后的回调任务，优先级「中」
- 交互队列：用于存放用户操作后产生的事件处理任务，优先级「高」
- 微队列：用户存放需要最快执行的任务，优先级「最高」

> 添加任务到微队列的主要方式主要是使用 Promise、MutationObserver
>
> 例如：
>
> ```js
> // 立即把一个函数添加到微队列
> Promise.resolve().then(函数)
> ```

### 面试题：阐述一下 JS 的事件循环

事件循环又叫做消息循环，是浏览器渲染主线程的工作方式。

在 Chrome 的源码中，它开启一个不会结束的 for 循环，每次循环从消息队列中取出第一个任务执行，而其他线程只需要在合适的时候将任务加入到队列末尾即可。

过去把消息队列简单分为宏队列和微队列，这种说法目前已无法满足复杂的浏览器环境，取而代之的是一种更加灵活多变的处理方式。

根据 W3C 官方的解释，每个任务有不同的类型，同类型的任务必须在同一个队列，不同的任务可以属于不同的队列。不同任务队列有不同的优先级，在一次事件循环中，由浏览器自行决定取哪一个队列的任务。但浏览器必须有一个微队列，微队列的任务一定具有最高的优先级，必须优先调度执行。

### 面试题：JS 中的计时器能做到精确计时吗？为什么？

不行，因为：

1.  计算机硬件没有原子钟，无法做到精确计时
2.  操作系统的计时函数本身就有少量偏差，由于 JS 的计时器最终调用的是操作系统的函数，也就携带了这些偏差
3.  按照 W3C 的标准，浏览器实现计时器时，如果嵌套层级超过 5 层，则会带有 4 毫秒的最少时间，这样在计时时间少于 4 毫秒时又带来了偏差
4.  受事件循环的影响，计时器的回调函数只能在主线程空闲时运行，因此又带来了偏差


---
./fun-async.md
---
# 异步函数

## 什么是异步编程

js 是单线程语言，只能同时处理一个任务，如果请求的是后端，这个响应可能是几秒之后才响应，所以要先跳过这个任务，继续向下执行。必须等主进程全部执行完成之后再执行异步函数。就算主进程再慢，也要等主进程全部加载完成之后再加载。

下面是一个图片加载的异步例子

```js
function loadImage(url, load, error) {
  const image = new Image()
  image.src = url
  image.onload = load
  image.onerror = error
}

loadImage(
  './image/1.png',
  () => {
    console.log('加载成功')
  },
  () => {
    console.log('加载失败')
  }
)

console.log('ok')

// ok
// 加载成功
```

## Promise

`Promise` 是一个构造函数，可以通过 `new` 关键字来创建

```js
const p = new Promise()
```

`Promise` 有三种状态，分别是：**pending（等待态），fulfilled（成功态），rejected（失败态）**
那么怎么在三种状态中切换呢，如下

```js
const p1 = new Promise((resolve, reject) => {})
console.log(p1) // pending

const p2 = new Promise((resolve, reject) => {
  resolve()
})
console.log(p2) // pending -> fulfilled

const p3 = new Promise((resolve, reject) => {
  reject()
})
console.log(p3) // pending -> rejected
```

通过调用不同的函数可以改变 `Promise` 的状态

> pending 状态的 Promise 不会触发 then 和 catch 方法
> 成功状态会执行 then 里的草错，失败会执行 catch 里的操作

**成功**

```js
new Promise((resolve, reject) => {
  resolve()
}).then(
  (res) => {
    console.log('成功的处理程序')
  },
  (err) => {
    console.log('失败的处理程序')
  }
)

// 成功的处理程序
```

**失败**

```js
new Promise((resolve, reject) => {
  reject()
}).then(
  (res) => {
    console.log('成功的处理程序')
  },
  (err) => {
    console.log('失败的处理程序')
  }
)

// 失败的处理程序
```

但是除了成功和失败，还有一个 `finally` 的回调，是无论成功还是失败都会执行的

```js
new Promise((resolve, reject) => {
  resolve()
})
  .then((res) => {
    console.log('成功的处理程序')
  })
  .finally(() => {
    console.log('永远会执行')
  })

// 成功的处理程序
// 永远会执行
```

> promise 会生成微任务，相反的是宏任务，当全部添加到任务队列中的时候，先执行微任务

promise 的 `.then` 的回调函数中接收两个参数，分别是成功的处理函数和失败的处理函数

```js
new Promise((resolve, reject) => {
  resolve('成功了')
}).then(
  (value) => console.log(value),
  (reason) => console.log(reason)
)

// 成功了
```

`.catch` 可以统一处理错误信息，这样就避免每个 promise 都要写独立的错误处理程序了，直接使用 `catch` 统一处理，建议将 `catch` 放在最后。如果 promise 有独立的错误处理程序，那么将使用自己的处理程序执行。

```js
const p1 = new Promise((resolve, reject) => {
  console.log(a)
  resolve('成功了')
})
  .then((value) => {
    return new Promise((resolve, reject) => {
      resolve('ok')
    })
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

// ReferenceError: a is not defined
```

## 微任务宏任务概述

因为 js 是单线程语言，也就是说只有一个人来干活，所以不可能同时干多个事情，所以就会产生任务队列和优先级，任务队列一般分为三个，一个是**主任务**，优先级最大，其次是**微任务**，最后是**宏任务**

见下面代码

```js
setTimeout(() => {
  console.log('定时器')
}, 0)

new Promise(() => {
  console.log('promise')
})

Promise.resolve((res) => {
  console.log('resolve')
})

console.log('主线程')
```

打印结果是：

```
promise
主线程
resolve
定时器
```

因为 `setTimeout` 属于是宏任务，所以最后执行，`pending` 状态的 `Promise` 也是属于主任务，所以最先执行，`resolve` 状态的 `Promise` 属于是异步函数，它属于 `微任务`，所以要等主线执行完再执行，最后一段代码是主任务，因为它是第二个主任务，所以第二个执行。

## 定时器任务编排

使用 `setTimeout` 来举例，下面定义一个 4 毫秒后执行的定时器，但是它并不是真正的 4 毫秒之后就会执行，一定要等主线程执行完毕之后再执行

```js
setTimeout(() => console.log('哈哈'), 4)

for (let i = 0; i < 10000; i++) {
  console.log('1')
}
console.log('循环结束')
```

## DOM 渲染任务

如果我们将外部引入的 `*.js` 文件全部放在 dom 渲染之前进行加载，那么载入的时候就需要先将引入的文件全部加载完成之后再进行渲染 dom，那么就会产生加载白屏的状态，所以需要将外部加载的模块放在 dom 渲染之后加载

**反例**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script src="./js/1.js"></script>
  </head>

  <body>
    <h1>hello</h1>
  </body>
</html>
```

**推荐的**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>

  <body>
    <h1>hello</h1>
    <script src="./js/1.js"></script>
  </body>
</html>
```

## 进度条例子

```html
<style>
  #sel {
    height: 20px;
    background-color: green;
  }
</style>

<div id="sel"></div>
<script>
  function handle() {
    let i = 0
    ;(function run() {
      sel.innerHTML = i
      sel.style.width = i + '%'
      if (++i <= 100) {
        setTimeout(run, 20)
      }
    })()
  }

  handle()
</script>
```

## Promise 微任务处理复杂业务

```js
async function load(num) {
  const res = await Promise.resolve().then((_) => {
    let count = 0
    for (let i = 0; i < num; i++) {
      count += num--
    }
    return count
  })
  console.log(res)
}
load(987654321)
console.log('主任务不要被影响')
```

## 微任务和宏任务的执行顺序

```js
setTimeout(() => {
  console.log('你好')
}, 0)

console.log('ok')

// ok
// 你好
```

上面代码中，js 只要碰到了 `setTimeout` 就要先将其添加到任务队列中去（这是一个宏任务），需要等同步代码执行完成之后再进行执行。

再比如下面代码

```js
// setTimeout 为宏任务，直接添加到任务队列中
setTimeout(() => {
  console.log('4')
}, 0)

new Promise((resolve) => {
  console.log('1') // 第一个主线任务，第一个执行
  resolve() // 返回成功通知，执行 then 的回调函数
}).then((res) => {
  console.log('2') // promise 是微任务，也添加到任务队列中
})

console.log('3') // 第二个主线任务，第二个执行

// 1
// 3
// 2
// 4
```

所以程序的执行顺序是：**主线任务 > 微任务 > 宏任务**

## 使用 Promise

**动态加载图片**

```js
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      resolve(image)
    }
    image.onerror = reject
    document.body.appendChild(image)
  })
}

loadImage('./image/1.png').then((img) => {
  img.style.border = `2px solid black`
})
```

**定时器**

```js
function timeout(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

timeout(2000)
  .then(() => {
    console.log('你好')
    return timeout(2000)
  })
  .then(() => {
    console.log('哈哈哈')
  })
```

## Promise.resolve()

`Promise.resolve()` 默认是成功状态，直接返回成功状态

```js
Promise.resolve('成功状态').then((res) => {
  console.log(res)
})
```

它的实际应用在哪里呢？比如我我们想要反复请求一个数据，但是我们希望的是不要每次都发送请求，我们可以走本地的缓存进行处理，减少请求次数

```js
function query() {
  if (query.user) {
    console.log('走了缓存数据')
    return Promise.resolve(query.user) // 直接返回成功状态的 promise
  }
  return axios(
    'https://infinitymcn.com/citi/citi-form-backend/public/index.php/index/Votetfourth/getVoteRes'
  ).then((res) => {
    query.user = res
    console.log('没走缓存数据')
    return res
  })
}

query().then((res) => {
  console.log(res)
})

setTimeout(() => {
  query().then((res) => {
    console.log(res)
  })

  query().then((res) => {
    console.log(res)
  })

  query().then((res) => {
    console.log(res)
  })

  query().then((res) => {
    console.log(res)
  })
}, 1000)
```

这样就只有第一次请求是通过访问后端接口，剩下的都是通过返回的本地缓存进行的，可以增加响应速度。

## Promise.reject()

`Promise.reject()` 默认是失败状态，直接返回失败状态

该方法可以在执行成功之后，遇到错误进行给 `catch` 中进行反馈，例如下面

```js
new Promise((resolve, reject) => {
  resolve(200) // 执行成功操作 传递参数为 成功了
})
  .then((res) => {
    // 成功操作会进入这里
    // 那么在成功之后可以再进行判断，如果不是我们想要的值
    // 就可以返回 Promise.reject 来让 catch 进行处理
    if (res !== 201) {
      return Promise.reject('参数不是201')
    }
  })
  .catch((error) => {
    console.log(error) // 参数不是201
  })
```

## Promise.all()

`Promise.all()` 可以处理多个 `Promise`，如果有一个返回的是失败状态，那么 `Promise.all()` 返回的就是失败状态，当所有的返回都是成功状态，那么 `Promise.all()` 返回的则是成功状态

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第一个异步函数')
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第二个异步函数')
  }, 1000)
})

Promise.all([p1, p2]).then((res) => {
  console.log(res) // (2) ['第一个异步函数', '第二个异步函数']
})
```

`Promise.all()` 也可以统一处理错误信息

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('第一个异步函数失败了')
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第二个异步函数')
  }, 1000)
})

Promise.all([p1, p2])
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err) // 第一个异步函数失败了
  })
```

## Promise.allSettled()

`Promise.allSettled()` 可以处理多个 `Promise`，但是无论 `Promise` 的状态是成功还是失败，它都是已经解决的状态

```js
const p1 = new Promise((resolve, reject) => {
  reject('no')
})

const p2 = new Promise((resolve, reject) => {
  resolve('ok')
})

Promise.allSettled([p1, p2]).then((res) => {
  console.log(res)
})
```

## Promise.race()

`Promise.race()` 方法可以获取多个 `Promise` 但是它最终只会获取到一个，取得获取最快的一个

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第一个')
  }, 2000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第二个')
  }, 1000)
})

Promise.race([p1, p2]).then((res) => {
  console.log(res) // 第二个
})
```

> Promise.race() 方法可以用在后端请求超时处理

## Promise.finally()

`Promise.finally()` 方法可以返回一个新的 `Promise` 实例

```js
const p1 = new Promise(() => {})
const p2 = p1.finally()
console.log(p2) // Promise {<pending>}
console.log(p1 === p2) // false
```

## Promise 异步捕获错误

通常情况下，同步代码使用 `try catch` 来进行捕获错误

```js
try {
  throw new Error('foo')
} catch (error) {
  console.log(error) // Error: foo
}
```

上面代码可以精准的捕获错误

但是在 `Promise` 中，情况就会不一样了

```js
try {
  Promise.reject(new Error('bar'))
} catch (error) {
  console.log(error)
}

// Uncaught (in promise) Error: bar
```

但是在 `Promise` 中，错误就不能正确的捕获了，而是浏览器通知了错误信息。为什么会这样呢？因为同步代码可以使用 `try catch` 来进行捕获，而 `Promise` 必须通过异步模式来进行捕获错误，所以可以更改为

```js
try {
  Promise.reject(new Error('bar')).catch((err) => console.log(err)) //Error: bar
} catch (error) {
  console.log(error)
}
```

这样既可正确的捕获错误

## async 函数

`async` 函数是 `Promise` 的语法糖，返回值是 `Promise`，同样可以使用 `.then` 来接收

```js
async function load() {
  return '你好啊'
}

console.log(load()) // Promise {<fulfilled>: '你好啊'}

load().then((res) => console.log(res)) // 你好啊
```

或者直接返回 `Promise` 也可以

```js
async function load2() {
  return new Promise((resolve) => {
    resolve('哈哈哈')
  })
}

load2().then((res) => console.log(res)) // 哈哈哈
```

例子

```js
async function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

async function show() {
  for (const user of ['张三', '李四']) {
    await sleep(1000)
    console.log(user)
  }
}

show()
```

## async 捕获错误

使用 `async` 函数之后，也是可以捕获错误的，因为 `async` 返回的也是 `promise`

```js
async function fun() {
  console.log(a)
}

fun().catch((err) => {
  console.log(err) // ReferenceError: a is not defined
})
```

## await 捕获错误流程

可以使用 `try catch` 来捕获 `await` 中的错误

```js
async function fun(name) {
  try {
    const admin = await `${name}的年龄是${age}`
    return admin
  } catch (error) {
    console.log(error)
  }
}

fun('张同学') // ReferenceError: age is not defined
```

正确的语法如下

```js
async function fun(name, age) {
  try {
    const admin = await `${name}的年龄是${age}`
    return admin
  } catch (error) {
    console.log(error)
  }
}

fun('张同学', 18).then((res) => {
  console.log(res)
})
```

## await 并行执行

`Promise` 不是并行执行的，`Promise` 必须等上一个 `Promise` 执行完成之后再执行，见下面例子

```js
function p1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('第一个函数')
    }, 2000)
  })
}

function p2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('第二个函数')
    }, 2000)
  })
}

async function load() {
  const res1 = await p1()
  console.log(res1) // 两秒后执行 第一个函数
  const res2 = await p2()
  console.log(res2) // 再等两秒后（4秒后）执行 第二个函数
}
load()
```

但是现在我希望上面两个可以同时执行，那么写法为

```js
function p1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('第一个函数')
    }, 2000)
  })
}

function p2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('第二个函数')
    }, 2000)
  })
}

async function load() {
  const res1 = p1()
  const res2 = p2()
  const res1Val = await res1
  const res2Val = await res2
  console.log(res1Val)
  console.log(res2Val)
}
load()
```

或者也可以使用 `Promise.all()` 方法

```js
function p1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('第一个函数')
    }, 2000)
  })
}

function p2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('第二个函数')
    }, 2000)
  })
}

async function load() {
  const res = await Promise.all([p1(), p2()])
  console.log(res)
}
load()
```

> 第一种方式写的是原理，第二种方式才是务实的方法

## 手写 Promise

```js
class myPromise {
  // 定义 promise 的三种状态
  // 因为值是固定的 所以定义为静态属性
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  /**
   * @param { object } executor 回调函数
   * 因为 promise 就只会接收到一个参数，就是一个函数
   * 那么 executor 就是传入 promise 的那个函数
   * 然后 executor 函数还会接受到两个参数 一个 resolve，一个 reject
   */
  constructor(executor) {
    this.status = myPromise.PENDING // 默认为准备状态
    this.value = null // 获取到的值
    this.callbacks = [] // 存放将来要执行的函数

    /**
     * 为什么使用 try catch？
     * 因为在执行 promise 的内部，可能会产生错误
     * 所以一旦尝试错误就直接调用拒绝函数 reject
     */
    try {
      /**
       * 这里需要将 this 指向改变
       * 这里将 executor 的两个参数传递过去
       * 因为参数还是两个函数 所以这里是一类方法进行传递
       */
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }

  /**
   * 成功状态
   * @param {*} value 得到的值
   * 当写了：new myPromise((resolve, reject) => resolve('成功了吗'))
   * 的时候，就调用了 resolve 函数，传递的参数是 '成功了吗'
   * 所以这里的 value 就会接收到这个参数
   */
  resolve(value) {
    // promise 状态一旦生成就不能改变
    if (this.status === myPromise.PENDING) {
      this.status = myPromise.FULFILLED // 改变状态
      this.value = value // 改变值

      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onResolve(value)
        })
      })
    }
  }

  /**
   * 拒绝状态
   * @param {*} reason 拒绝的因素
   */
  reject(reason) {
    if (this.status === myPromise.PENDING) {
      this.status = myPromise.REJECTED // 改变状态
      this.value = reason // 改变值

      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onReject(reason)
        })
      })
    }
  }

  /**
   * .then 方法
   * @param { function } onResolve 捕获成功
   * @param { function } obReject 捕获拒绝
   */
  then(onResolve, onReject) {
    if (typeof onResolve !== 'function') {
      // 直接返回 value，解决穿透效果
      onResolve = () => this.value
    }

    if (typeof onReject !== 'function') {
      onReject = () => this.value
    }

    /**
     * 为了 promise 可以使用链式操作
     * 这里直接返回一个新的 promise ，类似递归
     */
    const promise = new myPromise((resolve, reject) => {
      // 成功状态
      if (this.status === myPromise.FULFILLED) {
        /**
         * 为什么使用 try catch？
         * 因为有可能函数传递的是未定义的参数
         * 为什么使用 setTimeout？
         * 因为 promise 中 .then() 并不是同步执行
         * 需要等主进程执行完成之后再执行
         */
        setTimeout(() => {
          this.parse(promise, onResolve(this.value), resolve, reject)
        })
      }

      // 拒绝状态
      if (this.status === myPromise.REJECTED) {
        setTimeout(() => {
          this.parse(promise, onReject(this.value), resolve, reject)
        })
      }

      // 等待状态
      if (this.status === myPromise.PENDING) {
        // 如果在 promise 中出现定时器，就先将函数放到数组中
        this.callbacks.push({
          onResolve: (value) => {
            this.parse(promise, onResolve(value), resolve, reject)
          },
          onReject: (value) => {
            this.parse(promise, onReject(value), resolve, reject)
          }
        })
      }
    })

    return promise
  }

  /**
   * 代码封装
   * @param { function } promise 返回的 promise
   * @param { function } result 结果
   * @param { function } resolve 成功状态函数
   * @param { function } reject 拒绝状态函数
   */
  parse(promise, result, resolve, reject) {
    if (promise === result) {
      throw new TypeError('Chaining cycle detected')
    }
    try {
      /**
       * 如果返回的是普通类型的值，下一个 .then 可以直接接到
       * 那么如果返回的是一个 promise 的话，就需要做区分
       */
      if (result instanceof myPromise) {
        // promise
        result.then(resolve, reject)
      } else {
        // 普通对象
        resolve(result) // 成功状态返回的 promise 是成功状态
      }
    } catch (error) {
      reject(error)
    }
  }

  /**
   * promise.resolve 方法
   * @param {*} value 值
   */
  static resolve(value) {
    return new myPromise((resolve, reject) => {
      if (value instanceof myPromise) {
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    })
  }

  /**
   * promise.reject 方法
   * @param {*} value 值
   */
  static reject(value) {
    return new myPromise((resolve, reject) => {
      reject(value)
    })
  }

  /**
   * promise.all 方法
   * @param { array } promises promise 的集合
   */
  static all(promises) {
    const values = []
    return new myPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(
          (value) => {
            values.push(value)
            if (values.length === promises.length) {
              resolve(values)
            }
          },
          (reason) => reject(reason)
        )
      })
    })
  }

  /**
   * promise.race 方法
   * 谁快就打印谁
   * @param { array } promises promise 的集合
   */
  static race(promises) {
    return new myPromise((resolve, reject) => {
      promises.map((promise) => {
        promise.then(
          (value) => resolve(value),
          (reason) => reject(reason)
        )
      })
    })
  }
}
```


---
./fun-class.md
---
# 类

## 创建类

通过 `constructor` 属性接受传递的参数进行赋值

```js
class User {
  constructor(name) {
    this.name = name
  }
}

const user = new User('张同学')
console.log(user)
// User {name: '张同学'}
```

也可以直接在类中赋值，也可以添加对象的属性

```js
class User {
  age = 38
  constructor(name) {
    this.name = name
  }
}

const user = new User('张同学')
console.log(user)
// User {age: 38, name: '张同学'}
```

可以通过在类中定义方法来改变某些数据，或者通过函数获取数据

```js
class User {
  age = 38
  constructor(name) {
    this.name = name
  }
  changeName(newName) {
    this.name = newName
  }
  sayName() {
    return this.name
  }
}

const user = new User('张同学')
user.changeName('田同学')
console.log(user.sayName())
```

## 静态属性

先来看一下构造函数的静态属性

```js
function User(url) {
  this.url = url
}

const user = new User('https://123.com')
// 给构造函数创建静态属性，会保留在原型中
User.newUrl = 'https://baidu.com'

console.dir(user)
```

打印结果

```shell
User
  url: "https://123.com"
  [[Prototype]]: Object
    constructor: ƒ User(url)
      newUrl: "https://baidu.com"
      arguments: null
      caller: null
      length: 1
      name: "User"
      prototype: {constructor: ƒ}
      [[FunctionLocation]]: 2.html:14
      [[Prototype]]: ƒ ()
      [[Scopes]]: Scopes[2]
    [[Prototype]]: Object
```

那么在类中定义静态属性仅需要关键字 `static` 就可以实现了

```js
class User {
  static url = 'https://www.baidu.com'
  api() {
    return `${User.url}/sayName`
  }
}

const user = new User()
console.log(user.api()) // https://www.baidu.com/sayName
```

如果一个属性是为所有对象共用的，不是为某一个对象来使用的，这时候就可以将其定义为静态属性，这样也会节省内存的占用，仅仅只会保存一份，定义到类里面

## 静态方法

引入函数也是对象，所以构造函数可以通过下面放方式定义静态方法

```js
function User() {}

User.sayName = function () {
  console.log('我是静态方法')
}

User.sayName('张三')
```

上面定义静态方法之后，就必须使用函数调用 `sayName` 方法，就不能使用 `new` 出来的对象进行调用了。

当然也可以定义到原型上

```js
function User() {}

User.__proto__.sayName = function () {
  console.log('我是静态方法')
}

User.sayName('张三')
console.dir(User)
```

那么里面的 `this` 指向的也是当前的对象

```js
function User() {}

User.__proto__.sayName = function () {
  console.log(this === User) // true
  console.log(this === User.prototype.constructor) // true
}

User.sayName('张三')
```

接下来是在类中定义静态方法

```js
class User {
  sayName() {
    console.log('你好')
  }
}

User.__proto__.sayName = function () {
  console.log('我在原型上')
}

console.dir(User)
```

上面代码中，看似在类中定义了两个函数名一样的函数，可是这两个函数却是没有任何关系的，因为第一个在类中定义的函数，只要在 `new` 出来的对象中才可以使用，而后者是类的静态方法。

上述打印结果：

```shell
class User
  length: 0
  name: "User"
  prototype:
    constructor: class User
    sayName: ƒ sayName()
    [[Prototype]]: Object
  arguments: (...)
  caller: (...)
  [[FunctionLocation]]: 1.html:13
  [[Prototype]]: ƒ ()
  [[Scopes]]: Scopes[2]
```

打印的 `sayName` 实际上是函数的静态方法，下面分别打印一下

```js
class User {
  sayName() {
    console.log('你好')
  }
}

User.__proto__.sayName = function () {
  console.log('我在原型上')
}

User.sayName() // 我在原型上

const user = new User()
user.sayName() // 你好
```

了解上述关系之后，那么就可以直接使用类的语法糖的形式进行定义了，需要通过关键字 `static` 来定义静态方法

```js
class User {
  sayName() {
    console.log('你好')
  }
  static sayName() {
    console.log('hello')
  }
}

User.sayName() // hello
new User().sayName() // 你好
```

下面是通过调用静态方法创建出构造函数的例子

```js
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  static create(...args) {
    // 这里是 this 指向的就是当前对象
    // 所以可以 new this 创建构造函数
    return new this(...args)
  }
}

// 通过调用静态方法创建出构造函数
const user = User.create('张三', 19)
console.log(user)
```

## 访问器

在正常对象中，对象中的属性我们是可以随意设置和更改的，但是有些时候并不希望某些值被设置了不可控的值，比如：

```js
const user = {
  name: '张同学',
  age: 12
}

user.age = 19999
console.log(user) // {name: '张同学', age: 19999}
```

所以就需要加以限制，需要在对象中新建两个获取函数，分别使用 `set` 和 `get` 声明，那么每次获取和修改都会经过这里，来进行判断

```js
const user = {
  data: {
    name: '张同学',
    age: 12
  },
  set age(val) {
    if (typeof val !== 'number' || val < 1 || val > 100) {
      throw new Error('年龄格式错误')
    }
    this.data.age = val
  },
  get age() {
    return this.data.age
  }
}
```

**批量设置属性**

```js
const user = {
  name: '张同学',
  age: 12,
  set info(val) {
    ;[this.name, this.age] = val.split(',')
  }
}

user.info = '小明,14'
console.log(user)
```

**利用访问器设置 token**

```js
const request = {
  set setToken(val) {
    localStorage.setItem('token', val)
  },
  get getToken() {
    return localStorage.getItem('token')
  }
}

request.setToken = '12121dadasdada'
console.log(request.getToken)
```

访问器的作用是限制用户对对象中的值进行随意的更改，简单的方式是通过函数来修改属性值

```js
class User {
  constructor() {
    this.name = '李四'
  }
  // 通过 setName 函数来修改属性值
  setName(name) {
    // 限制逻辑
    if (typeof name !== 'string') {
      throw new Error('参数错误')
    }
    // 通过才可以进行修改
    this.name = name
  }
}

const user = new User()
user.setName('张三') // 通过函数修改
```

但是通过函数的方法修改也会有一个问题，就是像下面修改的方式进行修改属性，还是可以进行随意修改的

```js
class User {
  constructor() {
    this.name = '李四'
  }
  // 通过 setName 函数来修改属性值
  setName(name) {
    // 限制逻辑
    if (typeof name !== 'string') {
      throw new Error('参数错误')
    }
    // 通过才可以进行修改
    this.name = name
  }
}

const user = new User()
user.setName('张三') // 通过函数修改
user.name = 123
console.log(user)
// User {name: 123}
```

所以为了代码的健壮而又优雅一下，可以使用访问器来对其有效限制

访问器通过关键字 `set` 和 `get` 来针对修改和获取来进行限制处理，例如下面

```js
class User {
  constructor() {
    this._name = '李四'
  }
  // 通过 setName 函数来修改属性值
  set name(name) {
    // 限制逻辑
    if (typeof name !== 'string') {
      throw new Error('参数错误')
    }
    // 通过才可以进行修改
    this._name = name
  }
}

const user = new User()
user.name = '张三'
```

或者定义定义一个对象来存储数据

```js
class User {
  constructor(age) {
    this.data = {
      age
    }
  }
  // 通过 setName 函数来修改属性值
  set name(name) {
    // 限制逻辑
    if (typeof name !== 'string') {
      throw new Error('参数错误')
    }
    // 通过才可以进行修改
    this.data.name = name
  }
  // 访问器返回用户所有的信息
  get name() {
    return `${this.data.name}今年${this.data.age}岁`
  }
}

const user = new User(18)
user.name = '张三'
console.log(user.name)
```

## 属性的保护

正常的构造函数创建出来的对象都不是进行属性保护的，在外部都可以随意的进行修改，这些属性被称之为 `非保护属性`，例如下面

```js
class User {
  constructor(age) {
    this.age = age
  }
}

const user = new User(18)
user.age = 12313
console.log(user)
// User {age: 12313}
```

**通过命名保护**

```js
class User {
  _url = 'www.baidu.com'
  constructor(name) {
    this.name = name
  }
  set url(url) {
    if (typeof url !== 'string') {
      throw new Error('参数错误')
    }
    this._url = url
  }
}

const user = new User('张三')
user.url = 123
```

但是上述方式在外部依然可以通过使用 `user._url` 进行修改，所以我们接下来将进行更严格的保护，在外部是修改不了的

## 私有属性

通过在属性名前面加入 `#` 来设定私有属性

```js
class User {
  // 定义私有属性
  #url = 'www.baidu.com'
}

const user = new User()
console.log(user)
```

## 私有方法

同样，使用 `#` 可以定义私有方法

```js
class User {
  #url = 'www.baidu.com'
  #sayName() {
    console.log('你好')
  }
}

const user = new User()
user.#sayName()
```

这样调用私有属性的话会爆出错误

```shell
Uncaught SyntaxError: Private field '#sayName' must be declared in an enclosing class

必须在封闭类中声明私有字段 #sayName
```

私有属性必须是在类的内部调用才可以，例如下面，通过定义一个非私有的函数，让它去调用私有函数是可以正常工作的

```js
class User {
  #url = 'www.baidu.com'
  #sayName() {
    console.log('你好')
  }
  changeSayName() {
    this.#sayName()
  }
}

const user = new User()
user.changeSayName() // 你好
```

## 类继承

现回顾一下之前的构造函数的继承

```js
function User(name) {
  this.name = name
}
function Admin(name) {
  User.call(this, name)
}

Admin.prototype = Object.create(User.prototype)
const admin = new Admin('张三')
console.dir(admin)
```

打印结果为

```shell
Admin {name: '张三'}
  name: "张三"
    [[Prototype]]: User
      [[Prototype]]: Object
      constructor: ƒ User(name)
      [[Prototype]]: Object
```

类的继承使用 `extend` 关键字进行继承

```js
class User {}
class Admin extends User {}
console.dir(new Admin())
```

打印结果

```shell
Admin
  [[Prototype]]: User
    constructor: class Admin
    [[Prototype]]: Object
```

那么在类中调用父类的构造函数传递参数的写法就需要使用 `super` 关键字进行调用父类的构造函数，完整写法为

```js
class User {
  constructor(name) {
    this.name = name
  }
}

class Admin extends User {
  constructor(name) {
    super(name)
  }
}

console.dir(new Admin('张三'))
```

打印结果

```shell
Admin
  name: "张三"
  [[Prototype]]: User
    constructor: class Admin
    [[Prototype]]: Object
```

> 注意，在类中继承必须在父类中使用 `super()` 调用子类，否则会提示警告报错

```js
class User {
  say() {
    console.log('hello')
  }
}

class Admin extends User {
  constructor(name) {
    super() // 这里必须要调用！！！
    this.name = name
  }
}

const admin = new Admin('张三')
admin.say() // hello
```

> 类和原型继承的原理是完全一样的，所以 class 类的性质，只不过是将之前的构造函数形式转换成了一个简写的形式。

## super()

super 可以访问父级类

```js
class User {
  show() {
    console.log('user.show')
  }
}

class Admin extends User {
  show() {
    super.show()
    console.log('Admin.show')
  }
}

// super 可以访问父级类
const admin = new Admin()
admin.show()

// user.show
// Admin.show
```

下面简单的来写一个 `super()` 的实现原理

首先，使用两个对象来模拟继承的实现

```js
const obj1 = {
  name: '张三',
  sayName() {
    console.log('我是张三')
  }
}

const obj2 = {
  __proto__: obj1, // 让 obj2 的原型是 obj1 实现继承
  name: '李四',
  sayName() {
    console.log('我是李四')
  }
}

console.dir(obj2)
```

如果父级想使用原型上继承的方法，那么就可以使用 `this.__proto__.xxxx` 来调用，如下

```js
const obj1 = {
  name: '张三',
  sayName() {
    // 当父级调用 sayName 的时候，这里的 this 指向的是当前对象 所以 name 就是 张三
    console.log(this.name)
  }
}

const obj2 = {
  __proto__: obj1,
  name: '李四',
  say() {
    // 这里调用 say 方法，我希望使用原型上 obj1 的方法
    this.__proto__.sayName()
  }
}

obj2.say()
```

但是上面的问题就是：在 say 中调用原型方法，但是返回的却是原型对象上的属性，这显然是不对的，所以还需要进一步使用 `call` 关键字来进行更改 `this` 指向，并将当前对象传递过去

```js
const obj1 = {
  name: '张三',
  sayName() {}
}

const obj2 = {
  __proto__: obj1,
  name: '李四',
  say() {
    this.__proto__.sayName.call(this)
  }
}

obj2.say()
```

所以这也就大概实现了 `super()` 的原理实现

视频教程地址：[super 原理分析](https://www.bilibili.com/video/BV1NJ411W7wh?p=246)

> 在父类的构造函数中必须调用 super()，并且 this 必须在 super 之后使用


---
./fun-prototype.md
---
# 面向对象编程

## 深拷贝

### 1. 使用 JSON.parse(JSON.stringify(obj))
缺点:  
1. 函数无法序列化函数，属性值为函数的属性转换之后丢失
2. 日期 Date 对象转换到 JSON 对象之后无法反解析为原对象类型，解析后的值仍然是 JSON 格式的字符串
3. 正则 RegExp 对象序列化后为一个普通的 javascript 对象
4. undefined 序列化之后直接被过滤掉
5. NaN 序列化之后为 null

### 2. 使用递归
```js
function deepClone(obj) {
  const objClone = Array.isArray(obj) ? [] : {};
  
  if (obj == null || typeof obj !== 'object') {
    return
  }

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] && typeof obj[key] === "object") {
        objClone[key] = deepClone(obj[key]);
      } else {
        objClone[key] = obj[key];
      }
    }
  }
  return objClone;
}
```
注意: 以上递归方法对日期和正则属性进行解析后仍然是普通的 js 空对象, 想要解决上述问题可以使用 lodash 的 cloneDeep 方法

## 原型和原型链

### 了解原型

对象和函数都是有原型的

**对象**

```js
const user = {}
console.dir(user)
```

打印结果，其中 `[[Prototype]]` 就是对象的原型

```shell
Object
  [[Prototype]]: Object
```

想要获取到对象的原型可以使用 `__porto__` 来获取到

```js
const user = {}
console.dir(user.__proto__)
```

打印结果：

```shell
Object
  constructor: ƒ Object()
  hasOwnProperty: ƒ hasOwnProperty()
  isPrototypeOf: ƒ isPrototypeOf()
  propertyIsEnumerable: ƒ propertyIsEnumerable()
  toLocaleString: ƒ toLocaleString()
  toString: ƒ toString()
  valueOf: ƒ valueOf()
  __defineGetter__: ƒ __defineGetter__()
  __defineSetter__: ƒ __defineSetter__()
  __lookupGetter__: ƒ __lookupGetter__()
  __lookupSetter__: ƒ __lookupSetter__()
  __proto__: null
  get __proto__: ƒ __proto__()
  set __proto__: ƒ __proto__()
```

**函数**

```js
function User() {} // 创建构造函数
console.dir(User)
```

打印结果，

```shell
ƒ User()
  arguments: null
  caller: null
  length: 0
  name: "User"
  prototype: {constructor: ƒ}
  [[FunctionLocation]]: 1.html:14
  [[Prototype]]: ƒ ()
  [[Scopes]]: Scopes[2]
```

函数是有两个原型的，一个 `prototype` 一个 `[[Prototype]]`，函数自带的方法，如 apply、bind 等方法都存在于 `[[Prototype]]` 上面

想要获取到函数的原型可以使用 `__porto__` 和 `prototype` 来获取到

```js
function User() {}
console.dir(User.__proto__)
console.dir(User.prototype)
```

`__proto__` 打印结果 ：

```shell
ƒ anonymous()
  apply: ƒ apply()
  arguments: (...)
  bind: ƒ bind()
  call: ƒ call()
  caller: (...)
  constructor: ƒ Function()
  length: 0
  name: ""
  toString: ƒ toString()
  Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()
  get arguments: ƒ ()
  set arguments: ƒ ()
  get caller: ƒ ()
  set caller: ƒ ()
  [[FunctionLocation]]: ​
  [[Prototype]]: Object
  [[Scopes]]: Scopes[0]
```

`prototype` 打印结果：

```shell
Object
  constructor: ƒ User()
  [[Prototype]]: Object
```

> 注意：由于浏览器更新原因，在浏览器中打印的是 `Prototype` 和 `[[Prototype]]`。想要获取 `Prototype` 可以直接使用 `xxx.prototype` 获取，但是获取 `[[Prototype]]` 并不能使用 `xxx.[[Prototype]]` 获取，而是使用 `xxx.__proto__` 获取，在新版的 Chrome、Firefox、Edge 等浏览器中均可适用。
> 虽然 `__proto__` 可以正常获取到原型，但是规范建议使用 `Object.getPrototypeOf()` 方法获取为优

### 原型共享

比如下面例子中，首先创建一个构造函数 `User`，让在 `User` 的原型(prototype)上添加一个 `say` 方法，那么在构造函数创建的对象上同样可以使用

```js
function User() {}

User.prototype.say = function () {
  console.log('这是 say 方法')
}

const obj = new User()

obj.say() // 这是 say 方法
```

那么这是为什么呢？

下面分别来打印出 `User` 的 `prototype` 和 `obj` 的 `[[prototype]]`

```js
console.dir(User.prototype)
console.dir(obj.__proto__)
```

**User**

```shell
Object
  say: ƒ ()
  constructor: ƒ User()
  [[Prototype]]: Object
```

**obj**

```shell
Object
  say: ƒ ()
  constructor: ƒ User()
  [[Prototype]]: Object
```

看上去是一样的，可以测试一下是否真的一样：

```js
console.log(User.prototype === obj.__proto__) // true
console.log(User.prototype === Object.getPrototypeOf(obj)) // true
```

使用两种方式来判断，结果都为 `true`

由此得出结论：**函数上的 prototype 原型和构造函数对象的原型是共享的一个原型**

详情见下图

<!-- <img src="/javascript/prototype_1.jpg" alt="image"  /> -->

### 顶级原型

上面知道了：**函数上的 prototype 原型和构造函数对象的原型是共享的一个原型**，那么构造函数上面的原型是什么呢？

下面例子中，先早 `Object` 上定义了一个 `say` 方法，之后又创建了一个构造函数 `User`，接下来打印 `User`

接下来依次打开 `User/prototype/[[Prototype]]`

```shell
ƒ User()
  arguments: null
  caller: null
  length: 0
  name: "User"
  prototype: {constructor: ƒ}
    constructor: ƒ User()
    [[Prototype]]: Object
      say: ƒ ()
      constructor: ƒ Object()
      hasOwnProperty: ƒ hasOwnProperty()
      isPrototypeOf: ƒ isPrototypeOf()
      propertyIsEnumerable: ƒ propertyIsEnumerable()
      toLocaleString: ƒ toLocaleString()
      toString: ƒ toString()
      valueOf: ƒ valueOf()
      __defineGetter__: ƒ __defineGetter__()
      __defineSetter__: ƒ __defineSetter__()
      __lookupGetter__: ƒ __lookupGetter__()
      __lookupSetter__: ƒ __lookupSetter__()
      __proto__: (...)
      get __proto__: ƒ __proto__()
      set __proto__: ƒ __proto__()
  [[FunctionLocation]]: 1.html:21
  [[Prototype]]: ƒ ()
  [[Scopes]]: Scopes[1]
```

打开后发现，构造函数 `prototype` 的原型中的原型 `[[prototype]]` 中存在由 `Object` 上定义的 `say` 方法

那么就进行检测一下：

```js
console.log(User.prototype.__proto__ === Object.prototype) // true
console.log(Object.getPrototypeOf(User.prototype) === Object.prototype) // true
```

结果是：**构造函数上的 prototype 中 `[[prototype]]` 的原型和对象的 prototype 原型是共享的一个原型**

所以 `Object` 就是原型链的顶级原型了

详情见下图

<!-- <img src="/javascript/prototype_2.jpg" alt="image"  /> -->

所以：

```js
const arr = []
console.log(Object.getPrototypeOf(arr) === Array.prototype) // true

const str = ''
console.log(Object.getPrototypeOf(str) === String.prototype) // true

const bool = true
console.log(Object.getPrototypeOf(bool) === Boolean.prototype) // true

const num = 123
console.log(Object.getPrototypeOf(num) === Number.prototype) // true

const reg = /123/
console.log(Object.getPrototypeOf(reg) === RegExp.prototype) // true
```

### 设置原型

比如下面有两个对象：我想把 `obj1` 原型的父级改为 `obj2`，那么就可以使用 `Object.setPrototypeOf()` 方法进行改变，接收两个参数，一个是需要改变的对象，和指定父级的对象

```js
const obj1 = { name: 'obj1' }
const obj2 = { name: 'obj2' }
Object.setPrototypeOf(obj1, obj2)
```

打印结果：

```shell
Object
  name: "obj1"
  [[Prototype]]: Object
    name: "obj2"
    [[Prototype]]: Object
    constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: ƒ isPrototypeOf()
    propertyIsEnumerable: ƒ propertyIsEnumerable()
    toLocaleString: ƒ toLocaleString()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
    __defineGetter__: ƒ __defineGetter__()
    __defineSetter__: ƒ __defineSetter__()
    __lookupGetter__: ƒ __lookupGetter__()
    __lookupSetter__: ƒ __lookupSetter__()
    __proto__: Object
    get __proto__: ƒ __proto__()
    set __proto__: ƒ __proto__()
```

那么这时候 `obj1` 的父级就是 `obj2` 了

### constructor 属性

```shell
ƒ User()
  arguments: null
  caller: null
  length: 0
  name: "User"
  prototype:
    constructor: ƒ User()
    [[Prototype]]: Object
  [[FunctionLocation]]: 1.html:14
  [[Prototype]]: ƒ ()
  [[Scopes]]: Scopes[1]
```

我们可以发现，构造函数的 `prototype` 原型中，不但有一个 `[[Prototype]]`，而且还有一个 `constructor` 属性，那么 `constructor` 其实指向的就是当前的构造函数，**因为原型就是一个对象，只要是对象就会有原型**，也就是说：不仅可以通过的 `prototype` 找到构造函数的原型，我也可以通过这个原型找到构造函数

那么也就是说：**构造函数原型的 constructor 属性指向的是当前构造函数**

```js
function User() {}

console.log(User.prototype.constructor === User) // true
```

那么就同样可以使用 `constructor` 再来创建一个构造函数

```js
function User(name) {
  this.name = name
}

const z = new User('张三')
const l = new User.prototype.constructor('李四')

console.log(z) // User {name: '张三'}
console.log(l) // User {name: '李四'}
```

### 原型添加多个方法

如果想在原型上添加多个属性和方法，可以使用下面方式：

```js
function User() {}

User.prototype.name = '张同学'
User.prototype.age = 38
User.prototype.sayName = function () {
  console.log(this.name)
}
```

但是这样的代码不免有些冗余，所以可以使用对象的方式进行添加

```js
function User() {}

User.prototype = {
  name: '张同学',
  age: 38,
  sayName() {
    console.log(this.name)
  }
}

console.dir(User)
```

> 但是这样加完之后打开原型会发现一个问题，就是 `constructor` 不见了，所以如果在使用 `new User.prototype.constructor()` 就会报错了

```shell
ƒ User()
  arguments: null
  caller: null
  length: 0
  name: "User"
  prototype:
    age: 38
    name: "张同学"
    sayName: ƒ sayName()
    [[Prototype]]: Object
  [[FunctionLocation]]: 1.html:25
  [[Prototype]]: ƒ ()
  [[Scopes]]: Scopes[1]
```

所以我们希望的是，就是改变的原型，也可以通过原型上的 `constructor` 找到当前的构造函数，所以在使用对象往原型上添加属性的时候，一定要记得将 `constructor: User` 添加上去，接下来的 `new User.prototype.constructor()` 才可以正常工作

```js
function User(name) {
  this.name = name
}

User.prototype = {
  constructor: User,
  name: '张同学',
  age: 38,
  sayName() {
    console.log(this.name)
  }
}

const l = new User.prototype.constructor('李四')
l.sayName() // 李四
Object.getPrototypeOf(l).sayName() // 张同学
```

所以新的原型链结构图如下：

<!-- <img src="/javascript/prototype_3.jpg" alt="image"  /> -->

## 继承

### 了解继承

继承是原型的继承，而不是改变构造函数

例如下面代码是错误的

```js
function User() {}

User.prototype.name = function () {
  console.log('name')
}

function Admin() {}

Admin.prototype = User.prototype
// 这样直接赋值原型之后
// 相当于 Admin 和 User 共用的是一个原型

const admin = new Admin()
admin.name()
```

举个例子：上面的反例中，直接将 `User` 的原型赋值给 `Admin` 之后，虽然是实现了伪继承，但是这样继承了之后自己本来的原型就不存在了，两个构造函数用的就是同一个原型了，这样就会造成函数覆盖等情况，我们期望的是自己的原型还是保留的，再继承。好比现实中继承财产，继承是将继承的财产和自己本来的财产加在一起，而不是只是得到了继承的财产，而自己的财产就消失了。

### 盗用构造函数继承

在子类构造函数中调用父类构造函数。因为毕竟函数就是在指定上下文中执行的代码最简单的对象，所以可以使用 `call` 或者 `apply` 方法以新创建的对象为上下文执行构造函数

```js
function User() {
  this.arr = [1, 2, 3, 4]
}

function Admin() {
  User.call(this) // 继承 User
}

const admin = new Admin()
admin.arr.push(5)

const admin2 = new Admin()

console.log(admin.arr) // (5) [1, 2, 3, 4, 5]
console.log(admin2.arr) // (4) [1, 2, 3, 4]
```

**传递参数**

相比使用原型链，盗用构造函数的优点就是：可以在子类构造函数中向父类构造函数传递参数

```js
function User(name) {
  this.name = name
}

function Admin(age) {
  User.call(this, '张三')
  this.age = age
}

const admin = new Admin(18)
console.dir(admin)
```

打印结果

```shell
Admin
  age: 18
  name: "张三"
  [[Prototype]]: Object
```

```
盗用构造函数的主要缺点，也是使用构造函数模式自定义类型的问题：必须在构造函数中定义方法，因此函数不能重用，此外，子类也不能访问父类原型上定义的方法，因此所有类型都只能通过使用构造函数模式。由于存在这些问题，盗用构造函数也不会单独使用。
```

### 组合继承

组合继承也叫伪经典继承，综合了原型链和[盗用构造](https://tianyuhao.cn/blog/javascript/js-function.html#%E7%9B%97%E7%94%A8%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%BB%A7%E6%89%BF)函数，将两者有点结合了起来。基本的思路就是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。这样可以把方法定义在原型上以实现重用，又可以让实例有自己的属性。

```js
function User(name) {
  this.name = name
  this.arr = [1, 2, 3]
}

User.prototype.sayName = function () {
  console.log(this.name)
}

function Admin(name, age) {
  // 继承实例属性
  User.call(this, name)
  this.age = age
}

Admin.prototype = new User() // 继承原型属性
Admin.prototype.sayAge = function () {
  console.log(this.age)
}

const admin1 = new Admin('张三', 12)
admin1.arr.push('张三')
console.log(admin1.arr) // (4) [1, 2, 3, '张三']
admin1.sayName() // 张三
admin1.sayAge() // 12

const admin2 = new Admin('李四', 22)
admin2.arr.push('李四')
console.log(admin2.arr) // (4) [1, 2, 3, '李四']
admin2.sayName() // 李四
admin2.sayAge() // 22
```

### 原型式继承

先给出一个函数

```js
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}
```

这个 `object` 函数会创建出一个临时的构造函数，将传入的对象赋值给构造函数的原型，然后返回这个临时的一个实例。本质上，`object` 是对传入的对象进行了一次浅复制，见下面例子

```js
const z = {
  name: '张三',
  friend: ['a', 'b']
}

const user1 = object(z)
user1.name = '李四'
user1.friend.push('c')

const user2 = object(z)
user2.name = '小明'
user2.friend.push('d')

console.log(z.friend) // (4) ['a', 'b', 'c', 'd']
```

这种原型式继承适用于以下情况：你有一个对象，想在它的基础上再创建一个对象，你需要先将这个对象传递给 `object` 函数，然后再对返回的对象进行修改。上面例子中也就意味这，`z.friend` 不仅仅是 `z` 的属性，也会和 `user1` 和 `user2` 共享。这里实际上是克隆的两个 `z`。

但是后来出现了 [Object.create()](https://tianyuhao.cn/blog/javascript/js-methods.html#object-create) 方法，将 `原型式继承` 的概念规范化了。

```js
const z = {
  name: '张三',
  friend: ['a', 'b']
}

const user1 = Object.create(z)
user1.name = '李四'
user1.friend.push('c')

const user2 = Object.create(z)
user2.name = '小明'
user2.friend.push('d')

console.log(z.friend) // (4) ['a', 'b', 'c', 'd']
```

### 寄生式继承

与原型式继承比较相似的一种继承叫 `寄生式继承`，`寄生式继承` 背后的思路类似于寄生构造函数和工厂模式：创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象，基本寄生模式如下：

```js
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function createAnother(param) {
  const clone = object(param)
  clone.sayHi = function () {
    console.log('hi')
  }
  return clone
}

const z = {
  name: '张三',
  arr: [1, 3, 4]
}

const res = createAnother(z)
res.sayHi() // hi
```

### 寄生式组合继承

[组合继承](https://tianyuhao.cn/blog/javascript/js-function.html#%E7%BB%84%E5%90%88%E7%BB%A7%E6%89%BF) 其实也存在效率问题，最主要的问题就是父类构造函数被调用了两次，一次是在创建子原型时调用，另一次是在子类构造函数中调用，例如下面：

```js
function User(name) {
  this.name = name
  this.color = ['red', 'blue', 'black']
}

User.prototype.sayName = function () {
  console.log(this.name)
}

function Admin(name, age) {
  // 调用 User，将 User 内部属性移到 Admin 内部
  User.call(this, name) // 第二次调用 User
  this.age = age
}

Admin.prototype = new User() // 第一次调用 User

// 继承之后会丢失 constructor 属性，所以将 constructor 设置会 Admin
Admin.prototype.constructor = Admin
Admin.prototype.sayAge = function () {
  console.log(this.age)
}

const admin = new Admin('张三', 20)

console.dir(Object.getPrototypeOf(admin).constructor === Admin) // true

console.dir(admin)
```

打印结果

```shell
Admin
  age: 20
  color: (3) ['red', 'blue', 'black']
  name: "张三"
  [[Prototype]]: User
    color: (3) ['red', 'blue', 'black']
    constructor: ƒ Admin(name, age)
    name: undefined
    sayAge: ƒ ()
    [[Prototype]]: Object
```

上面代码在执行 `User.call(this, name)` 的时候，会在 `Admin.prototype` 上新增两个属性 `name` 和 `color`。它们都是 `User` 实例，现在成为了 `Admin` 的原型属性。当调用 `Admin` 构造函数的时候，也会调用 `User` 构造函数，这一次在新对象上创建实例属性 `name` 和 `color`，但是这两属性会遮蔽原型的属性。

但是通过上面方式继承，就会有两组 `name` 和 `color` 属性，一组是在实例上，另一组在 `User` 的原型上。这就是调用 `User` 的结果。好在有版本解决这个问题。

寄生式组合继承通过盗用构造函数继承属性，但使用混合继承的原型继承方法。基本思路是不通过调用父类构造函数给子类原型赋值，而是取得父类原型的一个副本。基本模式如下：

```js
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

/**
 * @param { object } subclass 子类构造函数
 * @param { object } superclass 父类构造函数
 */
function inheritPrototype(subclass, superclass) {
  const prototype = object(superclass.prototype) // 创建对象
  prototype.constructor = subclass // 增强对象
  subclass.prototype = prototype // 赋值对象
}

function User(name) {
  this.name = name
  this.color = ['red', 'blue', 'black']
}

User.prototype.sayName = function () {
  console.log(this.name)
}

function Admin(name, age) {
  // 调用 User，将 User 内部属性移到 Admin 内部
  User.call(this, name) // 第二次调用 User
  this.age = age
}

inheritPrototype(Admin, User)

Admin.prototype.sayAge = function () {
  console.log(this.age)
}

const admin = new Admin('张三', 18)
console.dir(admin)
```

### 使用父类构造函数初始属性

这种方式可以在父类构造函数的原型中添加公共的属性，以免单独在每个构造函数中重复声明

```js
function User(name, age) {
  this.name = name
  this.age = age
}

function Admin(...params) {
  User.apply(this, params)
}

Admin.prototype = User.prototype.__proto__
Object.defineProperty(Admin.prototype, 'constructor', {
  value: Admin,
  enumerable: false
})

const admin = new Admin('张三', 18)
console.log(admin)

const admin2 = new admin.__proto__.constructor('李四', 2)
console.log(admin2)
```

**封装继承函数继承**

```js
// 继承函数
function extend(sub, sup) {
  sub.prototype = Object.create(sup.prototype)
  Object.defineProperty(sub.prototype, 'constructor', {
    value: sub,
    enumerable: false
  })
}

function User(name, age) {
  this.name = name
  this.age = age
}

User.prototype.sayName = function () {
  console.log(this.name)
}

function Admin(...params) {
  User.apply(this, params)
}

function Teacher(...params) {
  User.apply(this, params)
}

extend(Admin, User) // 调用函数继承
const admin = new Admin('张三', 18)
admin.sayName()

extend(Teacher, User) // 调用函数继承
const teacher = new Teacher('老师', 28)
teacher.sayName()
```

### 对象工厂继承

使用对象工厂也就是使用 `Object.create()` 来继承，这里推荐两种方式

**方式一**

```js
function User() {}
User.prototype.userName = function () {
  console.log('userName')
}

function Admin() {}
Admin.prototype.adminName = function () {
  console.log('adminName')
}

Admin.prototype.__proto__ = Object.create(User.prototype)
Admin.prototype.constructor = Admin

const admin = new Admin()

admin.userName() // userName
admin.adminName() // adminName
```

**方式二**

```js
function User(name, age) {
  this.name = name
  this.age = age
}

User.prototype.sayName = function () {
  console.log(this.name, this.age)
}

// 创建继承函数
function inherit(name, age) {
  const instance = Object.create(User.prototype) // 新建一个对象继承 User 的原型
  User.call(instance, name, age) // 将 instance 内部调用 User
  return instance // 返回继承好的对象
}

const admin = inherit('admin', 28)
const admin2 = inherit('admin2', 281)

console.log(admin2.__proto__ === admin.__proto__) // true
```


---
./function.md
---
# 函数

## 回调函数

回调函数是：在一个函数中，又调用了一个函数，叫回调函数

例如：

```html
<button id="btn">按钮</button>
<script>
  const btn = document.getElementById('btn')
  btn.addEventListener('click', () => {
    console.log('这是回调函数')
  })
</script>
```

比如这个点击事件，通过函数 `addEventListener` 定义点击事件，参数是传入的另一个函数，那么这样的函数就称之为回调函数。

还有就是数组常用的 `map` 方法等等：

```js
const res2 = list.map((item) => {
  item.age += 30
  return item
})
```

当出现类似下面这样的业务时候，一个回调函数里面又套了回调函数，请求时就是等这段代码结果产生之后再执行，那么这样回调套回调就会很麻烦了，不利于阅读，开发维护都麻烦

回调地狱就是下面的情况

```js
axios({
  method: '',
  url: ''
}).then((res) => {
  axios({
    method: '',
    url: ''
  }).then((res) => {
    axios({
      method: '',
      url: ''
    }).then((res) => {})
  })
})
```

## 递归函数

直接或间接调用自己函数本身

> 注：一定要有一个终止这个函数的处理，否则将出现死循环

```js
function fun1(n) {
  console.log(n)
  n--
  if (!n) {
    return
  }
  fun1(n)
}
```

## 立即执行函数

声明函数时，直接调用

```js
;(function () {
  console.log('我是立即执行函数！')
})()
```

那么立即执行函数用在哪里呢？

下面是有 5 个 li 标签，我们要实现的效果是：点击哪个就弹出哪个 li 的索引值

这是曾经使用立即执行函数的写法：

```html
<ul>
  <li>11111</li>
  <li>22222</li>
  <li>33333</li>
  <li>44444</li>
  <li>55555</li>
</ul>

<script>
  var li = document.querySelectorAll('li')

  for (var i = 0; i < li.length; i++) {
    li[i].onclick = (function (x) {
      return function () {
        alert(x)
      }
    })(i)
  }
</script>
```

因为但是还没有作用域的问题，当有了 `es6` 之后，一切就变得简单多了：

```html
<ul>
  <li>11111</li>
  <li>22222</li>
  <li>33333</li>
  <li>44444</li>
  <li>55555</li>
</ul>

<script>
  const btn = document.querySelector('button')
  for (let i = 0; i < 5; i++) {
    btn.onclick = function () {
      console.log(i)
    }
  }
</script>
```

> 直接换成 let 声明，就可以直接解决问题，也就直接可以省略了立即执行函数了

看过 jQuery 源码的人应该知道，jQuery 开篇用的就是立即执行函数。立即执行函数常用于第三方库，好处在于隔离作用域，任何一个第三方库都会存在大量的变量和函数，为了避免变量污染（命名冲突），开发者们想到的解决办法就是使用立即执行函数

1. 什么是立即执行函数

在了解立即执行函数之前先明确一下函数声明、函数表达式及匿名函数的形式，如下代码

```js
// 函数声明
function fun1 () {
  console.log('hello')
}

// 函数表达式
const fun2 = function () {
  console.log('hello')
}

// 匿名函数
function () {
  console.log('hello')
}
```

接下来看立即执行函数的两种常见形式：( function(){…} )()和( function (){…} () )，一个是一个匿名函数包裹在一个括号运算符中，后面再跟一个小括号，另一个是一个匿名函数后面跟一个小括号，然后整个包裹在一个括号运算符中，这两种写法是等价的。要想立即执行函数能做到立即执行，要注意两点，一是函数体后面要有小括号()，二是函数体必须是函数表达式而不能是函数声明。如下代码：

```js
// 输出 123 使用 () 运算符
;(function (text) {
  console.log(text)
})(123)

// 输出 123 使用 () 运算符
// (function (text) {
//   console.log(text)
// }(123))

// 输出 123 使用 ! 运算符
!(function (text) {
  console.log(text)
})(123) +
  // 输出 123 使用 + 运算符
  (function (text) {
    console.log(text)
  })(123) -
  // 输出 123 使用 - 运算符
  (function (text) {
    console.log(text)
  })(123)

// 输出 123 使用 = 运算符
const fun = (function (text) {
  console.log(text)
})(123)
```

上面可见，除了使用 `()` 运算符之外，`！，+，-，=`等运算符都能起到立即执行的作用。这些运算符的作用就是将匿名函数或函数声明转换为函数表达式

2. 使用立即执行函数的好处

通过定义一个匿名函数，创建了一个新的函数作用域，相当于创建了一个“私有”的命名空间，该命名空间的变量和方法，不会破坏污染全局的命名空间。此时若是想访问全局对象，将全局对象以参数形式传进去即可，如 jQuery 代码结构：

```js
;(function (window, undefined) {
  // code
})(window)
```

其中 window 即是全局对象。给其传入参数这样的好处是，可以缩短查询时的作用域链。作用域隔离非常重要，是一个 JS 框架必须支持的功能，jQuery 被应用在成千上万的 JavaScript 程序中，必须确保 jQuery 创建的变量不能和导入他的程序所使用的变量发生冲突。

**闭包和立即执行函数**

先看个例子

```js
const car = {
  age: 0,
  change() {
    this.age = 40
  },
  getAge() {
    return this.age
  }
}
car.change()
console.log(car.getAge()) // 40
```

这个对象有其成员变量`age`及成员函数`change`和`getAge`，但是它的成员变量没有私有化，同时它也没有办法被继承。要实现对象的继承，你可以使用构造函数和原型继承。但怎么才能将成员变量私有化来实现对象的封装呢（而且有时候我们也不想那么麻烦使用原型）？这里呢，或许我们就可以使用闭包函数

```js
function car() {
  let age = 0
  return {
    // 返回的是一个对象
    change() {
      age = 40
    },
    getAge() {
      return age
    }
  }
}

const car1 = car()
car1.change()
console.log(car1.getAge()) // 40
```

## 闭包函数

> 闭包定义

闭包就是能够读取其他函数内部变量的函数

例如：

```js
function fun1() {
  const num = 1
  function fun2() {
    return 10 + num
  }
  return fun2()
}
console.log(fun1())
```

闭包是指有权访问另⼀个函数作⽤域中变量的函数，创建闭包的最常⻅的⽅式就是在⼀个函数内创建另⼀个函数，通过另⼀个函数访问这个函数的局部变量,利⽤闭包可以突破作用域

> 闭包的特性

- 函数内再嵌套函数
- 内部函数可以引⽤外层的参数和变量
- 参数和变量不会被垃圾回收机制回收

> 垃圾回收机制是什么？

由于字符串、对象等没有固定的大小，js 程序在每次创建字符串、对象的时候，程序都会**分配内存来存储那个实体**

- 使用分配到的内存做点什么
- 不需要时将其释放回归

在不需要字符串、对象的时候，需要释放其所占用的内存，否则将会消耗完系统中所有可用的内存，造成系统崩溃，这就是**垃圾回收机制所存在的意义**

在 C 和 C++之类的语言中，需要手动来管理内存的，这也是造成许多不必要问题的根源。幸运的是，在编写 js 的过程中，内存的分配以及内存的回收完全实现了自动管理，我们不用操心这种事情

> 说说你对闭包的理解

- 使⽤闭包主要是为了设计私有的⽅法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增⼤内存使⽤量，使⽤不当很容易造成内存泄露。在 js 中，函数即闭包，只有函数才会产⽣作⽤域的概念

- 闭包 的最⼤⽤处有两个，⼀个是可以读取函数内部的变量，另⼀个就是让这些变量始终保持在内存中

- 闭包的另⼀个⽤处，是封装对象的私有属性和私有⽅法
- 好处：能够实现封装和缓存等
- 坏处：就是消耗内存、不正当使⽤会造成内存溢出的问题

> 使用闭包需要的注意点

- 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很⼤，所以不能滥⽤闭包，否则会造成⽹⻚的性能问题，在 IE 中可能导致内存泄露

- 解决⽅法是，在退出函数之前，将不使⽤的局部变量全部删除

## 普通函数和箭头函数

- 外形不同

> 箭头函数使用箭头定义，普通函数中没有

```js
// 普通函数
function fun1() {
  // code
}
// 箭头函数
let fun2 = () => {
  // code
}
```

- 箭头函数都是匿名函数

> 普通函数可以有匿名函数，也可以有具体名函数，但是箭头函数都是匿名函数

```js
// 具名函数
function fun1() {
  // code
}

// 匿名函数
let fun2 = function () {
  // code
}

// 箭头函数全都是匿名函数
let fun3 = () => {
  // code
}
```

- 箭头函数中的 this 指向不同

> 箭头函数的 this 永远指向其上下文的 this
>
> 普通函数的 this 指向调用它的那个对象

## arguments 参数

比如在做求和运算时，往往参数的数量是不确定的。那么 arguments 就可以解决这个问题

```js
function add() {
  console.log(arguments)
}
add(1, 54, 1, 5, 2, 654, 3, 42, 24)

// Arguments(9) [1, 54, 1, 5, 2, 654, 3, 42, 24, callee: ƒ, Symbol(Symbol.iterator): ƒ]
```

那么求和运算为：

```js
function add() {
  let res = 0
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i]
  }
  return res
}
console.log(add(1, 54, 1, 5, 2, 654, 3, 42, 24))

// 786
```

> 需要注意的是：arguments 并不是一个数组，如需要使用数组方法进行操作时，需要使用 ES6 展开运算符进行操作：

```js
function add() {
  console.log([...arguments])
}
add(1, 54, 1, 5, 2, 654, 3, 42, 24)

// (9) [1, 54, 1, 5, 2, 654, 3, 42, 24]
```

> 在箭头函数中，不能使用 arguments 关键字访问参数，只能通过命名的参数访问

**callee 属性**

arguments 内部还有一个 callee 属性，是一个指向 arguments 对象所在函数的指针，可以用在递归函数中：

```js
function fun1(n) {
  console.log(n)
  n--
  if (!n) {
    return
  }
  arguments.callee(n)
}
```

> 这样就意味着，函数不管叫什么名称，都可以通过 `arguments.callee()` 来调用当前函数

这个属性引用的是调用当前函数的函数，如果函数是在全局作用域下调用的，则返回 `null`

```js
function fun1() {
  fun2()
}
function fun2() {
  console.log(fun2.caller)
}
fun1() // ƒ fun1() { fun2() }

function fun3() {
  console.log(fun3.caller)
}

fun3() // null
```

也可以通过 `arguments.callee.caller` 获取相同的结果

```js
function fun1() {
  fun2()
}
function fun2() {
  console.log(arguments.callee.caller)
}
fun1() // ƒ fun1() { fun2() }
```

注：该方法在严格模式下不会工作！

## 数据收集

同样是在函数传递的参数不确定的情况下，上面介绍过了 函数的 `arguments ` 方法，下面再介绍一种收集数据的方法，使用的是 ES6 的扩展运算符写法：

```js
function fun(...item) {
  console.log(item)
}
fun(1, 2, 3, 4, 5, 6, 7)

// (7) [1, 2, 3, 4, 5, 6, 7]
```

> 参数使用 `...item` 来接收，会收集到所有的参数，表现形式为数组

## this 指向

全局输出和在函数中输出 this

```js
// 1、直接输出 this 指向的是全局对象
console.log(this) // window

// 2、在函数中输入 this
// 因为全局函数其实是 window (全局对象)的方法
function fun() {
  console.log(this) // window
}
// fun() 调用就等于 window.fun()
fun()

// 3、在方法中 this 指向的是这个方法的对象
const obj = {
  name: '小明',
  sayName() {
    console.log(this.name)
  }
}
obj.sayName() // 小明
```

事件输出 this

```html
<button>按钮</button>
<script>
  const btn = document.querySelector('button')
  btn.onclick = function () {
    console.log(this) // <button>按钮</button>
  }

  btn.onclick = () => {
    console.log(this) // window
  }

  btn.addEventListener('click', function () {
    console.log(this) // <button>按钮</button>
  })
</script>
```

构造函数中的 this

```js
// new 关键字做了什么？
// new 会创建出对象，将构造函数中的 this 指向创建出来的对象
function Fun() {
  this.name = '小明'
}

const res = new Fun()
console.log(res) // Fun {name: "小明"}
```

箭头函数和计时器中的 this

```js
const obj = {
  name: '小明',
  sayName() {
    console.log(this)
  }
}
obj.sayName() // {name: "小明", sayName: ƒ}
// 上面通过在对象中调用一个方法，输入 this 那么这个 this 打印的就是该对象

const obj2 = {
  name: '小明',
  sayName() {
    setTimeout(function () {
      console.log(this)
    })
  }
}
obj2.sayName() // window
// 如果是通过计时器输出的就是 window，计时器指向 window
// 因为计时器是一个全局的函数 然后里面的函数就是 window 调用的，所以输出 window

// 那么使用箭头函数就可以直接打印出这个对象本身了
const obj3 = {
  name: '小明',
  sayName() {
    setTimeout(() => {
      console.log(this)
    })
  }
}
obj3.sayName() // {name: "小明", sayName: ƒ}
```

1、普通函数，谁调用就指向谁，箭头函数在哪里定义就指向谁。

2、箭头函数外指向谁就指向谁。

3、箭头函数没有 this

this 指向分为很多种不同的情况，下面分别来说一下：

> 对象中的函数

在对象中的函数，this 指向的是当前的这个对象

```js
const obj = {
  name: '小明',
  change() {
    console.log(obj.name) // 小明
  }
}
obj.change()
```

上面例子，在对象中打印出 name 的值，可以通过 `obj.name` 来打印，但是有时候对象的名称可能是会变的，那么就可以通过 `this.name` 来获得 name 值，也可以实现同样的效果

```js
const obj = {
  name: '小明',
  change() {
    console.log(this.name) // 小明
  }
}
obj.change()
```

其实我们可以直接在对象中打印出 this ，就可以很直观的看到了，this 就是这个对象：

```js
const obj = {
  name: '小明',
  change() {
    console.log(this)
    // {name: "小明", change: ƒ}
  }
}
obj.change()
```

**还有一点要注意：**

因为当前的函数是对象中的一个属性，要是如果在对象的方法中（这里称之为对象中的函数为方法）再定义一个函数的话，我们会看到一个奇怪的现象：

```js
const obj = {
  name: '小明',
  change() {
    function fun1() {
      console.log(this) // window
    }
    fun1()
  }
}
obj.change()
```

如果在对象的方法中，再定义一个普通的函数，那么这个函数中的 this 指向的是 window

那么怎么可以在对象方法中的函数也指向的当前对象呢？

```js
const obj = {
  name: '小明',
  change() {
    // 在当前方法中 this 指向的是当前对象
    // 所以这里可以将 this 赋值为一个常量 给下面函数提供使用
    const this_ = this
    function fun1() {
      // 这里打印上方存储的 this 即可打印出当前对象
      console.log(this_)
    }
    fun1()
  }
}
obj.change()
```

那么有关上述方法，请见实例，想要在对象的数组中，给数组的每一项前面添加上 `title` 属性：

```js
const obj = {
  title: '学习',
  lists: ['js', 'css', 'vue'],
  change() {
    const this_ = this
    return this.lists.map((item) => {
      return `${this_.title}-${item}`
    })
  }
}
console.log(obj.change())

// (3) ["学习-js", "学习-css", "学习-vue"]
```

除了上面方法，也可以将 this 作为参数传入函数中，同样可以正常运行：

```js
const obj = {
  title: '学习',
  lists: ['js', 'css', 'vue'],
  change() {
    return this.lists.map((item) => {
      return `${this.title}-${item}`
    }, this)
  }
}
console.log(obj.change())
```

**注：将 this 作为参数传入方法，有些函数支持，有些不支持！**

> window 对象

当我们在直接打印 this 的时候，打印出来的其实是一个 js 中最大的对象 `window对象`

```js
console.log(this) // Window {window: Window, self: Window, document: document, name: "", location: Location, …}

// 其实直接打印 this 和直接打印 window 是一样的，可以通过比较来得出结论：
console.log(this === window) // true
```

所以得出结论，在定义的对象中，this 指向的是当前对象，要是在全局打印 this 就指向 window 对象。

我们定义的所有的全局变量，都会存储在 window 对象中，比如我们用 var 来定义一个变量：

```js
var aName = '张三'
console.log(window.aName)
// 张三
```

可以正常输出

其实我们可以打印出 window 来看一下，里面就有刚刚定义的 `aName`:

```shell
Window {window: Window, self: Window, document: document, name: "张三", location: Location, …}
aName: "张三"
```

> 箭头函数中的 this

那么还是上面的实例，那么如果使用箭头函数的话，this 指向的就是父级作用域下的 this，就和父级中的 this 是统一回事儿了：

所以上面的例子中，想要在对象的数组中，给数组的每一项前面添加上 `title` 属性，使用箭头函数的写法就变成了：

```js
const obj = {
  title: '学习',
  lists: ['js', 'css', 'vue'],
  change() {
    return this.lists.map((item) => {
      console.log(this)
      // {title: "学习", lists: Array(3), change: ƒ}
      return `${this.title}-${item}`
    })
  }
}
console.log(obj.change())

// (3) ["学习-js", "学习-css", "学习-vue"]
```

**总结就是：在箭头函数中的 this 指向的就是上下文，可以理解为就是父级作用域下的 this ，而普通函数指向的就是 window**

那么箭头函数在有些地方，也会发生一些细微的变化，比如在事件中：

```html
<button id="btn">按钮</button>

<script>
  const obj = {
    title: '这是标题',
    change() {
      const btn = document.getElementById('btn')
      btn.addEventListener('click', function () {
        console.log(this)
        // 这里的 this 指的是 <button id="btn">按钮</button> 这个标签
      })
    }
  }
  obj.change()
</script>
```

上面通过点击事件输出的 this 指向的是获取到的 buttom 标签，那么使用箭头函数：

```html
<button id="btn">按钮</button>

<script>
  const obj = {
    title: '这是标题',
    change() {
      const btn = document.getElementById('btn')
      btn.addEventListener('click', () => {
        console.log(this)
        // {title: "这是标题", change: ƒ}
      })
    }
  }
  obj.change()
</script>
```

使用箭头函数打印的就是当前的对象

- 那么现在有这样的一个问题

上述的方法，我想通过点击事件，既想要获得对象的 `title` 值，又想要获得按钮的文本值。那么这样有很矛盾了，因为使用普通函数的 this 指向的是按钮，使用箭头函数指向的是当前对象，一个 this 不能分为两个角色，那么这个问题怎么解决呢？请参考下面代码：

```html
<!--
  先说一下思路：
  使用普通函数中可以传递一个叫 event 的参
  那么 event.target 可以获取到按钮标签
  箭头函数的 this 指向的是当前的对象
  那么就可以使用这两个机制来完成我们的效果
 -->
<button id="btn">按钮</button>

<script>
  const obj = {
    title: '这是标题',
    change() {
      const btn = document.getElementById('btn')
      btn.addEventListener('click', (event) => {
        console.log(this) // {title: "这是标题", change: ƒ}
        console.log(event.target) // <button id="btn">按钮</button>
        console.log(this.title + event.target.innerHTML)
      })
    }
  }
  obj.change()
</script>
```

也可以使用先获取到 this 的方法：

```html
<button id="btn">按钮</button>

<script>
  const obj = {
    title: '这是标题',
    change() {
      const btn = document.getElementById('btn')
      const this_ = this
      btn.addEventListener('click', function () {
        console.log(this_.title + this.innerHTML)
      })
    }
  }
  obj.change()
</script>
```

总结一句话就是：

> 箭头函数中的 this 是指向的父级的 this 如果父级的 this 指向的是某个对象，那么箭头函数中的 this 就指向该对象，如果父级的 this 指向的 window 那么箭头函数指定的是也是 window

判断 this

1. 函数是否在 `new` 中调用的？如果是的话，那么 `this` 指向的就是新创建的对象。
2. 函数是否使用 `call`、`apply`、`bind` 进行显示绑定的？如果是的话，那么 `this` 指向的就是新创建的对象。
3. 函数是否在整个上下文对象中调用（隐式绑定）？如果是的话，`this` 绑定的就是那个上下文对象。
4. 如果都不是的话，就是使用默认绑定。在严格模式下，`this` 为 `undefined`，否则指向全局对象 `window`

## new.target

ES6 新增了检测函数是否使用 new 调用的 `new.target` 属性，如果函数是正常调用的，new.target 返回 undefined，如果使用 new 来调用的，则 new.target 将引用被调用的构造函数

```js
function fun1() {
  if (!new.target) {
    console.log('没有使用 new 调用')
    return
  }
  console.log('使用 new 调用')
}

fun1() // 没有使用 new 调用
new fun1() // 使用 new 调用
```

## 柯里化函数

柯里化（currying）

把多个参数的函数转换为接收单一参数的函数，并且返回值接收剩余参数并且返回结果的函数

例如：

```js
function fun2(x) {
  return function (y) {
    return x + y
  }
}
// 调用的方法和其他函数有所不同
console.log(fun2(10)(5))
```

> 柯里化函数好处：减少重复传递不变的部分参数

## call、apply、bind

**call**

`call` 是一个函数的方法，它可以调用函数

```js
function fun() {
  console.log('123')
}
fun.call() // 123
```

call 可以改变函数中 `this` 的指向

```js
// 这个是一个独立的函数 输出 this，很明显这个 this 指向的是 window
function fun() {
  console.log(this.name)
}

// 这里是一个独立的对象
const obj = {
  name: '小明'
}

// 那么就可以通过调用函数 再使用 call 把 obj 这个对象传递过去
// 就可以改变函数中 this 的指向
// 那么就打印出了小明
fun.call(obj) // 小明
```

```js
// 这里通过调用 dog 的方法，来输出 cat 的名字
const dog = {
  name: '旺财',
  sayName() {
    console.log(this.name)
  }
}

const cat = {
  name: '喵喵'
}

dog.sayName.call(cat)
```

`call` 的传参方法

```js
const dog = {
  name: '旺财',
  eat(food1, food2) {
    console.log(`我喜欢吃${food1}和${food2}`)
  }
}

const cat = {
  name: '喵喵'
}

// call 的第一个参数是传递指向的对象 后面的参数传递的是函数接收的参数
dog.eat.call(cat, '鱼', '骨头') // 我是喵喵喜欢吃鱼和骨头
```

**apply**

还是上面的例子

`call` 传递的参数是依次往后传递的，而 `apply` 参数的需要传递一个数组

```js
const dog = {
  name: '旺财',
  sayName() {
    console.log(this.name)
  },
  eat(food1, food2) {
    console.log(`我是${this.name}喜欢吃${food1}和${food2}`)
  }
}

const cat = {
  name: '喵喵'
}

dog.eat.apply(cat, ['鱼', '骨头']) // 我是喵喵喜欢吃鱼和骨头
```

**bind**

`call` 和 `apply` 会直接调用函数

`bind` 的传值方式和 `call` 是一样的，但是 `bind` 会将一个函数作为返回值返回出来

`bind` 的特点呢也就是可以多次调用了，剩下的和 `call` 用法完全一样

```js
const dog = {
  name: '旺财',
  sayName() {
    console.log(this.name)
  },
  eat(food1, food2) {
    console.log(`我是${this.name}喜欢吃${food1}和${food2}`)
  }
}

const cat = {
  name: '喵喵'
}

const res = dog.eat.bind(cat, '鱼', '骨头')
res()
```

可以直接手写一个 `bind` 函数，来帮我们了解其中的原理

```js
function bind(fn, obj) {
  return function () {
    fn.apply(obj, arguments)
  }
}

function foo() {
  console.log(this.name)
}

const obj = { name: '张三' }

bind(foo, obj)()
```


---
./generator.md
---
# 迭代器

## 说明

可以迭代对象可以使用 `Symbol.iterator` 作为键来查看是否可以进行迭代，这个在实际开发中并不常用。

```js
const num = 1
const arr = [1, 2, 34, 5, 5]

console.log(num[Symbol.iterator]) // undefined
console.log(arr[Symbol.iterator]) // ƒ values() { [native code] }

// 所以 num 是不可迭代的，arr 是可迭代的
```

**next()**

迭代器 API 使用 `next()` 方法可以在迭代器中遍历数据，每次成功调用 `next()` 都会返回一个 `IteratorResult` 对象，对象中有两个键值，其中 `value` 是当前迭代的值，`done` 是否完成迭代(布尔值)，`done` 为 `true` 时，表示当前迭代已经被耗尽，`value` 返回 `undefined`

```js
const arr = [1, 2, 34, 5, 5]

const arr_ = arr[Symbol.iterator]()

console.log(arr_.next()) // {value: 1, done: false}
console.log(arr_.next()) // {value: 2, done: false}
console.log(arr_.next()) // {value: 34, done: false}
console.log(arr_.next()) // {value: 5, done: false}
console.log(arr_.next()) // {value: 5, done: false}
console.log(arr_.next()) // {value: undefined, done: true}
```

# 生成器

## 打破完整运行

我们知道，函数在正常情况下，只有调用了，就要将函数内部所有的代码全部执行，但是想要打破这种原则，就需要的是：`生成器`

下面例子：

```js
let x = 1

// 创建生成器函数
// 带有 * 的函数
function* foo() {
  x++
  yield // 暂停关键字
  console.log('x:', x)
}
function bar() {
  x++
}
const it = foo() // 创建一个迭代器
it.next() // 执行迭代器（执行到底一个暂停之前）
console.log(x) // 2
bar() // 正常调用了 bar 函数
console.log(x) // 3
it.next() // 再次启动迭代器 x: 3
```

> 生成器是一种特殊的函数（带有 \* 号），可以一次或者多次暂停或启动。

## 输入和输出

生成器也是一种函数，所以正常的输入和输出都是可以的，只是语法方面会稍有变化

```js
function* fun(a, b) {
  return a + b
}

const it = fun(3, 4)
const res = it.next()
console.log(res.value) // 12
```

你可能想不到也可以这样

```js
function* fun(x) {
  let a = x * (yield)
  return a
}

const it = fun(10)
it.next() // 启动迭代器
const res = it.next(2) // 遇到了 yield，再次传入参数启动迭代器
console.log(res.value)
```


---
./interview.md
---
# JS 面试题

## 1. 什么是跨域请求? 你可以通过哪些方法解决跨域问题?

跨域请求是指在浏览器中，当一个网页尝试加载来自不同域名下的资源时会发生跨域请求。浏览器的同源策略会阻止跨域请求，以保护用户的安全。跨域请求可以通过以下几种方法解决： 
1. JSONP (JSON with Padding)：通过动态创建 `<script>` 标签来实现跨域请求，但只支持GET请求。 
2. CORS (Cross-Origin Resource Sharing)：服务端设置响应头中的 Access-Control-Allow-Origin 字段来允许跨域请求。 
3. 代理服务器：在同源的服务器端发起请求，然后再将数据传递给客户端，绕过浏览器的同源策略。 
4. WebSocket：通过WebSocket协议进行跨域通信。

- 在使用 vue 开发项目过程中, 可以在 `vue.config.js` 的 `devServer` 中配置 `proxy`, 此时的代理称为正向代理; 
- 正式环境中可以在 nginx 中配置代理, 此时的代理称为反向代理(比如有一个前端服务, 跑在 5000 端口, 一个后端服务, 跑在 3000 端口, 此时前端请求后端服务会造成跨域, 为了解决这个问题, 可以在 nginx 中配置代理, 添加一个 8000 服务作为中转, 如果路径以 / 开头, 则代理到 5000 端口, 如果路径以 /api 开头, 则代理到 3000 端口. 此时浏览器的 network 中显示的 url 的端口为 8000, 但是实际请求的是 3000 端口, 这种客户端不知道服务端实际请求的是哪个地址就被称为"反向代理")

## 2. 有哪些方法可以优化网站？
1. **压缩和合并资源**： 
   - 压缩CSS、JavaScript和图片等静态资源，减小文件大小。 
   - 合并多个CSS和JavaScript文件，减少HTTP请求次数。 
 
2. **使用CDN（内容分发网络）**： 
   - 将静态资源部署到CDN上，加速资源加载速度，减轻服务器负担。 
 
3. **延迟加载（Lazy Loading）**： 
   - 仅在用户需要时加载图片、视频或其他资源，减少首次加载时间。 
 
4. **优化图片**： 
   - 使用适当的图片格式（如WebP）和大小，以减少图片加载时间。 
   - 使用CSS sprites或SVG图像来减少HTTP请求。 
 
5. **减少重定向和请求次数**： 
   - 减少重定向，确保页面引用的资源有效且减少不必要的请求。 
 
6. **缓存优化**： 
   - 利用浏览器缓存机制，设置合适的缓存头，减少重复加载。 
   - 使用服务端缓存（如HTTP缓存、Redis缓存等）来提高性能。 
 
7. **异步加载脚本**： 
   - 使用 async 或 defer 属性加载JavaScript，避免阻塞页面渲染。 
 
8. **减少DOM操作**： 
   - 减少DOM操作次数，合并操作，减少重排和重绘。 

---
./javascript-api.md
---
# JavaScript API

## File

当选择一个文件时，可以获得这个文件的描述对象

```html
<input type="file" id="file" />

<script>
  const file = document.getElementById('file')
  file.addEventListener('change', (e) => {
    console.dir(e.target.files[0])
  })
</script>
```

```shell
File
  lastModified: 1646398643613
  lastModifiedDate: Fri Mar 04 2022 20:57:23 GMT+0800 (中国标准时间) {}
  name: "world6.jpg"
  size: 1179107
  type: "image/jpeg"
  webkitRelativePath: ""
  [[Prototype]]: File
```

## URL.createObjectURL()

该方法多数用于图片预览

参考文档：[URL.createObjectURL() ](https://developer.mozilla.org/zh-CN/search?q=URL.createObjectURL%28%29)

实例，通过 input 上传图片预览出上传的图片：

```html
<input type="file" accept="image/*" />
<img src="" alt="" />

<script>
  const inp = document.querySelector('input')
  const img = document.querySelector('img')
  inp.onchange = function () {
    const blob = URL.createObjectURL(inp.files[0])
    img.setAttribute('src', blob)
  }
</script>
```

## MutationObserver 接口

### 描述

`MutationObserver 接口` 可以在 DOM 被修改时移步执行回调，使用 `MutationObserver` 可以观察整个文档、DOM 树的一部分或者元素。此外还可以观察元素的属性、子节点、文本，或者前三者的组合变化。

### 基本使用

`MutationObserver` 的实例要通过 `MutationObserver` 的构造函数，接收一个回调参数来创建

```js
const mut = new MutationObserver(() => console.log('123'))
console.log(mut)
```

### observe()

新创建的 `MutationObserver` 并不会关联 DOM 的任何部分，想要把 `MutationObserver` 和 DOM 关联起来，需要使用 `observe()` 方法。

这个方法必须接收两个参数，第一个是要观察其变化的 DOM 节点，以及一个 `MutationObserverInit` 对象。

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver(() => console.log('div 改变了'))

  mut.observe(app, { attributes: true })

  app.setAttribute('class', 'box') // 改变之后执行 mut 的回调
</script>
```

### 回调函数中的参数

`MutationObserver` 回调可以接收的一个参数，是一个数组，记录了当前那些部分发生了变化

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((MutationRecord) =>
    console.log(MutationRecord)
  )

  mut.observe(app, { attributes: true })

  app.setAttribute('class', 'box')
  app.setAttribute('data-app', 'add')
</script>
```

**打印结果**

```shell
(2) [MutationRecord, MutationRecord]
  0: MutationRecord
    addedNodes: NodeList []
    attributeName: "class"
    attributeNamespace: null
    nextSibling: null
    oldValue: null
    previousSibling: null
    removedNodes: NodeList []
    target: div#app.box
    type: "attributes"
    [[Prototype]]: MutationRecord
  1: MutationRecord
    addedNodes: NodeList []
    attributeName: "data-app"
    attributeNamespace: null
    nextSibling: null
    oldValue: null
    previousSibling: null
    removedNodes: NodeList []
    target: div#app.box
    type: "attributes"
    [[Prototype]]: MutationRecord
  length: 2
  [[Prototype]]: Array(0)
```

`MutationObserver` 接收的第二个参数是观察变化的 `MutationObserver` 的实例

```js
const mut = new MutationObserver((MutationRecord, mutationObserver) => {
  console.log(mut === mutationObserver) // true
})
```

### disconnect()

默认情况下，只有元素不被垃圾回收，`MutationObserver` 的回调函数就会响应 DOM 变化事件，从而执行。使用 `disconnect()` 可以提前终止回调函数，也会抛弃已经加入任务队列的项目

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver(() => console.log('改变了'))

  mut.observe(app, { attributes: true })
  app.setAttribute('class', 'box')
  mut.disconnect()
  app.setAttribute('data-app', 'add')
  // 没有日志输出
</script>
```

如果想让已经加入任务队列的项目执行完再调用可以使用 `setTimeout()` 来解决

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver(() => console.log('改变了'))

  mut.observe(app, { attributes: true })
  app.setAttribute('class', 'box') // 改变了
  setTimeout(() => {
    mut.disconnect()
    app.setAttribute('data-app', 'add') // 没有日志输出
  }, 0)
</script>
```

### 重用 MutationObserver

调用 `disconnect()` 的时候并不会结束 `MutationObserver` 的生命。还是可以重用这个观察者的，只需要将他在关联到目标节点即可。

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.target)))

  mut.observe(app, { attributes: true })

  setTimeout(() => {
    mut.disconnect() // 断开连接
    app.setAttribute('class', 'box') // 没有日志输出
  }, 0)

  setTimeout(() => {
    mut.observe(app, { attributes: true }) // 重新连接
    app.setAttribute('class', 'box') // [div#app.box]
  }, 0)
</script>
```

### 观察属性

`MutationObserver.observe` 可以接收两个参数，第二个参数为以及一个 `MutationObserverInit` 对象。可以观察节点属性的添加、删除、修改。需要属性变化注册回调，需要字啊 `MutationObserverInit` 对象中将 `attributes` 设置为 `true`。

但是将 `attributes` 设置为 `true` 默认是观察所有的属性，如果想要观察几个或者多个属性，可以使用 `attributeFilter` 属性设置白名单，即一个属性名的数组集合

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.target)))

  mut.observe(app, { attributeFilter: ['food'] }) // 设置 food 为白名单

  app.setAttribute('class', 'box') // [div#app.box]
  app.setAttribute('food', 'admin') // 没有日志输出
</script>
```

如果想要在变化的记录中保存原来的值，可以将 `attributeOldValue` 设置为 `true`

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.oldValue)))

  mut.observe(app, { attributeOldValue: true })

  app.setAttribute('class', 'box')
  app.setAttribute('food', 'admin')
  app.setAttribute('id', 'ccc')

  // [null, null, 'app']
</script>
```

### 观察字符数据

将 `characterData` 设置为 `true` 可以为观察字符，当字符修改、删除、添加时，都可以触发回调

```html
<div id="app">app</div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a))
  app.firstChild.textContent = '张三' //设置文本

  mut.observe(app.firstChild, { characterData: true })
  app.firstChild.textContent = 'abc'
  app.firstChild.textContent = 'admin'
  app.firstChild.textContent = 'ppt'

  // 三次修改都被记录下来了
  // (3) [MutationRecord, MutationRecord, MutationRecord]
</script>
```

如果想要在变化的记录中保存原来的值，可以将 `characterDataOldValue` 设置为 `true`

```html
<div id="app">app</div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.oldValue)))

  app.firstChild.textContent = '张三' //设置文本

  mut.observe(app.firstChild, { characterDataOldValue: true })

  app.firstChild.textContent = 'abc'
  app.firstChild.textContent = 'admin'
  app.firstChild.textContent = 'ppt'

  // 修改过的值都被记录下来了
  // (3) ['张三', 'abc', 'admin']
</script>
```

### 观察子节点

将 `childList` 设置为 `true` 可以观察子节点，当子节点修改、删除、添加时，都可以触发回调

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a))
  mut.observe(app, { childList: true })

  app.appendChild(document.createElement('p'))

  // [MutationRecord]
</script>
```

### 观察子树

上述 将 `childList` 设置为 `true` 可以观察子节点，但是子节点的内部就观察不到了，所以还需要将 `subtree` 设置为 `true`，即可扩展到这个元素的子树，所有后代节点。

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a))
  mut.observe(app, { attributes: true, subtree: true })

  app.appendChild(document.createElement('p'))
  app.querySelector('p').setAttribute('class', 'text')

  // [MutationRecord]
</script>
```

但是有意思的是：观察子树的节点被移出子树之后，仍然可以触发变化事件

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a))

  const div1 = document.createElement('div')
  mut.observe(app, { attributes: true, subtree: true }) // 观察子树
  app.appendChild(div1) // 将新建的 div 放进 app 容器
  document.body.insertBefore(div1, app) // 修改新建 div 的位置
  div1.setAttribute('class', 'box1') // 改变属性

  // 观察子树的节点被移出子树之后，仍然可以触发变化事件
  // [MutationRecord]
</script>
```

### takeRecords()

`takeRecords()` 方法可以清空 `MutationObserver` 的记录队列，取出并返回所有 `MutationObserver` 实例

```html
<div id="app">哈哈</div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.oldValue)))
  mut.observe(app.firstChild, { characterDataOldValue: true })

  app.firstChild.textContent = 'abc'
  app.firstChild.textContent = 'admin'
  app.firstChild.textContent = 'ppt'

  console.log(mut.takeRecords()) // (3) [MutationRecord, MutationRecord, MutationRecord]
  console.log(mut.takeRecords()) // []
</script>
```

这在希望断开与观目标的联系，但又希望处理由于调用 `disconnect()` 而被抛弃的记录队列中的 `MutationObserver` 实例还是比较有用的。

## XMLHttpRequest

### 创建

创建方式

```js
const xhr = new XMLHttpRequest()
```

### open()

XHR 对象首先调用 `open` 方法，接受三个参数，请求类型，请求 URL，是否为异步

```js
const url =
  'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'
xhr.open('get', url, false)
```

### send()

要发送定义好的请求需要使用 `send` 方法

```js
const url =
  'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'
xhr.open('get', url, false)
xhr.send(null)
```

`send` 可以作为请求体发送数据，**如果不需要传入请求体，则必须传入 null**

### status

响应的 HTTP 状态

```js
const url =
  'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'
xhr.open('get', url, false)
xhr.send(null)
console.log(xhr.status)
```

### statusText

响应的 HTTP 状态描述

```js
const url =
  'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'
xhr.open('get', url, false)
xhr.send(null)
console.log(xhr.status)
console.log(xhr.statusText)
```

## SpeechSynthesisUtterance

可使用语音读出传入的文字内容

```html
<button>say</button>

<script>
  document.querySelector('button').addEventListener('click', () => {
    const text = '你好，请问你是谁？'
    const msg = new SpeechSynthesisUtterance(text)

    window.speechSynthesis.speak(msg)
  })
</script>
```

## Document.createDocumentFragment()

可创建文档片段


---
./math-object.md
---
# 数学对象

## Math.round()

`Math.round()` 取整，四舍五入

```js
console.log(Math.round(2.4)) // 2
console.log(Math.round(2.5)) // 3
```

## Math.max()

`Math.max()` 获取最大值

```js
console.log(Math.max(12, 3, 56))
// 56
```

## Math.min()

`Math.min()` 获取最小值

```js
console.log(Math.min(12, 3, 56))
// 3
```

## Math.ceil()

`Math.ceil()`向上取整

```js
console.log(Math.ceil(3.5655))
// 4
```

## Math.floor()

`Math.floor()`向下取整

```js
console.log(Math.floor(3.5655))
// 3
```

## Math.random()

`Math.random()` 随机数

```js
console.log(Math.random())
```

> 随机数是 >=0 ~ <1 之间是数

- 要获取一个 1 ~ x 的一个整数随机数，可以通过下面公式直接获取

```js
// 这里想获取一个 1 ~ 10 的随机数
console.log(Math.ceil(Math.random() * 10))
```

公式为：`Math.ceil(Math.random() * 最大值)`

- 要获取一个区间的随机数，可以通过下面公式直接获取

```js
// 这里想取到 2 - 5 直接是随机数
console.log(2 + Math.ceil(Math.random() * (5 - 2)))
```

公式为：`最小值 + Math.ceil(Math.random() * (最大值 - 最小值))`

那么通过上面的随机数方法，我们可以做一个简易的点名系统

```html
<p class="name"></p>
<script>
  const arr = ['小张', '小李', '小明', '小红', '小强', '小周']

  const name = document.querySelector('.name')

  const length = arr.length // 获取数组的长度
  const num = Math.floor(Math.random() * length)
  name.innerHTML = arr[num]
</script>
```

## Math.abs()

`Math.abs()` 返回指定数字的绝对值

什么是绝对值？正数的绝对值是它本身，负数的绝对值是去掉负号

```js
console.log(Math.abs(-12)) // 12
console.log(Math.abs(22)) // 22
```

## Math.PI

`Math.PI` 获取圆周率

```js
console.log(Math.PI) // 3.141592653589793
```

## Math.sin / Math.cos

正弦 余弦

## Math.sqrt()

返回一个数的平方根


---
./methods-array.md
---
# 数组方法

## push()

`push()` 向数组的末尾添加元素

向数组末尾添加元素是方法有很多，比如使用 arr[] 来添加

```js
const arr = ['css', 'html', 'js']
arr[3] = 'vue'
console.log(arr)
// (4) ["css", "html", "js", "vue"]
```

或者比上述方法更好的还有使用 `.length` 方法进行添加：

```js
const arr = ['css', 'html', 'js']
arr[arr.length] = 'vue'
console.log(arr)
// (4) ["css", "html", "js", "vue"]
```

但是使用数组的 `push()` 会更简单清晰：

```js
const arr = ['css', 'html', 'js']
arr.push('vue')
console.log(arr)
// (4) ["css", "html", "js", "vue"]
```

`push()` 也可以同时添加多个值

```js
const arr = ['css', 'html', 'js']
arr.push('vue', 'java')
console.log(arr)
// (5) ["css", "html", "js", "vue", "java"]
```

## pop()

`pop()` 删除数组的末尾元素

```js
const arr = ['java', 'python', 'c']
arr.pop()
console.log(arr)
// (2) ["java", "python"]
```

`pop()` 方法也可以删除最后一项的元素并返回

```js
const arr = ['red', 'abc', '12']
const res = arr.pop()
console.log(res) // 12
console.log(arr) // ['red', 'abc']
```

## unshift()

`unshift()` 在数组开头添加元素

```js
const arr = ['java', 'python', 'c']
arr.unshift('c++')
console.log(arr)
// (4) ["c++", "java", "python", "c"]
```

> 支持多个添加

## shift()

`shift()` 删除数组开头的元素

```js
const arr = ['java', 'python', 'c']
arr.shift()
console.log(arr)
// (2) ["python", "c"]
```

`shift()` 也可以删除数组的第一个元素并返回

```js
const arr = ['java', 'python', 'c']
const res = arr.shift()
console.log(res) // java
```

## join()

`join` 把数组转换为字符串数组 || 配置数组中每一项直接的连接符

```js
// 把数组转换为字符串数组
let arr = [1, 2, 3, 4, 5]
console.log(arr.join())
// 1,2,3,4,5

// 配置数组中每一项直接的连接符
let arr = [1, 2, 3, 4, 5]
console.log(arr.join('--'))
// 1--2--3--4--5
```

## ...

`...` 展开运算符

比如，在之前，我们想要合并两个数组，可以通过 `for of` 遍历进行操作：

```js
const arr1 = ['js', 'css']
const arr2 = ['java', 'python', 'c']
for (const value of arr2) {
  arr1.push(value)
}
console.log(arr1)
// (5) ["js", "css", "java", "python", "c"]
```

那么通过 `ES6` 的数组展开语法，上述操作就变的非常简单了：

```js
const arr1 = ['js', 'css']
const arr2 = ['java', 'python', 'c']
const newArr = [...arr1, ...arr2]
console.log(newArr)
// (5) ["js", "css", "java", "python", "c"]
```

展开语法在函数中的使用，比如下方计算加和：

当一个函数需要接收到多个，并且不固定数量的参数时，之前接收的方法可能是这样的：

```js
function fun(a, b, c, d) {
  return a + b + c + d
}
console.log(fun(1, 2, 3, 4))
// 10
```

那么有了展开语法，就会显然解决了参数不固定的问题

```js
function fun(...num) {
  let a = 0
  for (let i = 0; i < num.length; i++) {
    a += num[i]
  }
  return a
}
console.log(fun(1, 2, 3, 4))
// 10
```

展开运算符不仅仅适用于数组，对象有可以使用：

```js
const obj1 = { left: 100, top: 200 }
const obj2 = { width: 200, height: 200 }

const obj3 = {
  ...obj1,
  ...obj2
}

console.log(obj3)
// {left: 100, top: 200, width: 200, height: 200}
```

## Array.from()

`Array.from()` 将字符串转换为数组

```js
const str = '这是一段文字'
console.log(Array.from(str))
// (6) ["这", "是", "一", "段", "文", "字"]
```

> 注意：使用 `Array.from()` 转换前，必须要确保这个值是有长度的，例如：

```js
const str = '这是一段文字'
console.log(str.length) // 6
```

字符串是可以使用 `.length` 方法得到长度度的，但是如果要是使用 `Array.from()` 转换对象的话是转换不出来的

```js
// 因为对象不能使用 .leghtn 方法得到长度
const obj = {
  name: '小明',
  age: 12
}
console.log(obj.length) // undefined
console.log(Array.from(obj)) // []
```

但是如果给对象加入了 `length` ，名字再变成数值之后就可以实现了：

```js
const obj = {
  0: '小明',
  1: 12,
  length: 2
}
console.log(obj.length) // 2
console.log(Array.from(obj)) // ["小明", 12]
```

> 对象转换的方法实际中很少用，此处仅对有无 .length 转换结果作为参考比较\*\*

`Array.from()` 还可以接收到第二个参数，可以直接增强数组中的每个值

```js
const arr = [1, 3, 4, 5]
const res = Array.from(arr, (x) => x * 2)
console.log(res) // [2, 6, 8, 10]
```

`Array.from()` 还可以接收到第三个参数，可以指定 this

```js
const arr = [1, 2, 3, 4, 5]

const res = Array.from(
  arr,
  function (x) {
    return x * this.num
  },
  { num: 3 }
)
console.log(res) // [3, 6, 9, 12, 15]
```

## Array.of()

`Array.of()` 方法可以将一组参数转换为数组

```js
const res = Array.of(1, 2, 3, 4, 5)
console.log(res) // [1, 2, 3, 4, 5]
```

## Array.isArray()

`Array.isArray()` 方法用于检测一个值是否是一个数组

```js
const arr = [1, 2, 3]
console.log(Array.isArray(arr)) // true
```

## slice()

`slice()` 数组截取，它不会改变原数组，而是会创建一个新的数组

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.slice(2, 4)
console.log(arr2)
// (2) ["js", "java"]
```

`slice()` 可以传入两个参数，根据索引进行截取，分别是：

- 从第几个开始截取（包括开始元素索引元素）
- 第二个参数是：截取到第几个元素（不包括结束元素索引元素）

如果传递了一个参数：那就代表从指定位数截取到结尾（不包括开始元素）

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.slice(2)
console.log(arr2)
// (3) ["js", "java", "html5"]
```

如果不传参数，就截取整个数组

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.slice()
console.log(arr2)
// (5) ["css", "html", "js", "java", "html5"]
```

`slice()` 方法可以存在负值，如果是负值，那么就是分别对应数组的长度加上这个负值得到的结果数

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.slice(-2, -1)
// 详单于 arr.slice(3, 4)
console.log(arr2) // ['java']
```

## splice()

`splice()` 方法可能是数组**最强大**的方法了，它可以：`删除、插入、替换`

<!-- `splice()` 数组 截取 || 添加数据 || 移除 || 替换 -->

**删除**

删除可以从数组中删除一个或多个元素，需要接收两个参数：

- 要删除的第一个元素的位置
- 要删除元素的数量

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
arr.splice(0, 2) // 从 0 的索引开始，删除两位
console.log(arr) // ['js', 'java', 'html5']
```

如果只传入一个参数，那么就从指定索引删除到结尾

> 删除会删除开始索引位置的值

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
arr.splice(2)
console.log(arr) // ['css', 'html']
```

**插入**

可以在数组中指定位置进行插入，插入需要传入三个参数：

- 开始位置
- 0 / 要删除的元素数量
- 要插入的元素

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
// 从数组索引 2 的位置，删除 0 个元素，并插入后面的元素
arr.splice(2, 0, 'python', 'c++')
console.log(arr) // ['css', 'html', 'python', 'c++', 'js', 'java', 'html5']
```

上面例子中，第二关参数为 `0`，代表并没有删除元素，其实也可以删除部分元素，并添加

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
// 从数组索引 2 的位置，删除 2 个元素，并插入后面的元素
arr.splice(2, 2, 'python', 'c++')
console.log(arr) // ['css', 'html', 'python', 'c++', 'html5']
```

通过上面例子，再次引入下面替换的方法

**替换**

`splice()` 在删除和元素的同时可以指定位置插入新的元素，同样需要三个参数：

- 开始位置
- 要删除的元素数量
- 要插入的元素

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
// 从数组索引 1 的位置，删除 2 个元素，并插入后面的元素，相当于替换的元素
arr.splice(1, 2, 'python', 'c++')
console.log(arr) // ['css', 'python', 'c++', 'java', 'html5']
```

## includes()

`includes()` 方法，查找数组中是否包含某元素

> 该方法返回布尔类型

```js
const arr = [1, 3, '7', 5]

console.log(arr.includes(1))
// 数组中包含 1 所以返回 true

console.log(arr.includes(99))
// 数组中不包含 99 所以返回 false
```

那么 `includes()` 方法的实现原理是什么呢？详见下面实例

```js
const arr = [1, 3, 6, 5]

// array 是要查找的数组
// value 是要查找的元素
function includes(array, value) {
  // 通过 for of 遍历数组中的每一项
  // 如果有和 value 值一样的，就返回 true 否则返回 false
  for (const val of array) {
    if (val === value) {
      return true
    }
  }
  return false
}

console.log(includes(arr, 6))
```

还有些要注意：

`includes()` 方法只能查找基本类型的元素，对于引用类型是查找不到的，例如：

```js
const arr = [{ a: 'css' }, { b: 'js' }, { c: 'html' }]

console.log(arr.includes({ b: 'js' }))
// 虽然查找的是 { b: 'js' } 看似的一样，但是内存地址的不一样的，所以返回 fasle
```

上述方法和下面实例是一样的：

```js
const a = []
const b = []
console.log(a === b)

const c = {}
const d = {}
console.log(c === d)
// 引用类型看似是一样，但是内存地址不一样，所以全部返回 fasle

const e = []
const f = e
console.log(f === e)
// 这样把e 赋值给了 f 那么就全等了，返回 true
```

## keys()

`keys()` 方法可以返回数组索引的迭代器

```js
const arr = ['西瓜', '苹果', '芒果']
console.log(Array.from(arr.keys())) // [0, 1, 2]
```

## values()

`values()` 方法可以返回数组元素的迭代器

```js
const arr = ['西瓜', '苹果', '芒果']
console.log(Array.from(arr.values())) // ['西瓜', '苹果', '芒果']
```

## entries()

`entries()` 方法可以返回数组`索引/元素`的迭代器

```js
const arr = ['西瓜', '苹果', '芒果']
console.log(Array.from(arr.entries()))
```

```
[Array(2), Array(2), Array(2)]
  0: (2) [0, '西瓜']
  1: (2) [1, '苹果']
  2: (2) [2, '芒果']
  length: 3
[[Prototype]]: Array(0)
```

## fill()

`fill()` 方法可以可以向数组中插入全部或部分相同的值

它可以接收三个参数：

- 要插入的内容
- 开始的索引位置
- 结束的索引位置

```js
const arr = [1, 2, 3, 4, 5]
arr.fill('改变', 0, 3)
console.log(arr) // ['改变', '改变', '改变', 4, 5]
```

```js
const arr = [1, 2, 3, 4, 5]
arr.fill('改变')
console.log(arr) // ['改变', '改变', '改变', '改变', '改变']
```

```js
const arr = [1, 2, 3, 4, 5]
arr.fill('改变', 4)
console.log(arr) // [1, 2, 3, 4, '改变']
```

## copyWithin()

`copyWithin()` 方法会按照指定范围进行潜复制，然后插入到指定索引的位置

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.copyWithin(5)
console.log(arr) // [1, 2, 3, 4, 5, 1, 2, 3, 4]
```

## reverse()

`reverse()` 方法可以让数组反向排序

```js
const arr = [1, 2, 3, 4]
console.log(arr.reverse()) // [4, 3, 2, 1]
```

## sort()

`sort()` 方法可以让数组升序排列

```js
const arr = [5, 9, 1, 2, 3, 4]
console.log(arr.sort()) // [1, 2, 3, 4, 5, 9]
```

也可以通过一个比较函数来确定排序方法

```js
const arr = [5, 9, 1, 2, 3, 4]
console.log(arr.sort((x, y) => y - x)) // [9, 5, 4, 3, 2, 1]
```

```js
const arr = [5, 9, 1, 2, 3, 4]
console.log(arr.sort((x, y) => x - y)) // [1, 2, 3, 4, 5, 9]
```

## concat()

`concat()` 方法可以创建一个原有数组的副本，但是并不全等之前的数组

```js
const arr = [1, 2, 3]
const res1 = arr.concat()
console.log(res1) // [1, 2, 3]
console.log(res1 === arr) // false
```

`concat()` 主要的作用是可以将数组进行合并，可以接受多个参数，添加到数组的末尾

```js
const arr = [1, 2, 3]

const res1 = arr.concat(4, 5)
console.log(res1) // [1, 2, 3, 4, 5]

const res2 = arr.concat(4, 5, [6, 7], [8, 9])
console.log(res2) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## indexOf()

`indexOf()` 该方法从数组的左侧向右侧查找回指定字符在字符串或者数组中第一次出现处的索引，如果此字符串中没有这样的字符，则返回 -1

可以分别用在数组和字符串中，它接收两个参数：

- 要查找的元素
- 开始索引的位置（可选）

字符串：

```js
const arr = '12334'

console.log(arr.indexOf(0)) // 没有 0 输出 -1
console.log(arr.indexOf(2)) // 有 2 输出2的索引 1
```

数组：

```js
const arr = [1, 3, 4]

console.log(arr.indexOf(0)) // 没有 0 输出 -1
console.log(arr.indexOf(4)) // 有 4 输出4的索引 2
```

```js
const arr = [1, 3, '7', 5]

console.log(arr.indexOf(1, 2))
// 虽然数组中存在 1，但是从第二位开始查找，后面找不到，所以返回 -1
```

`indexOf()` 方法 是严格类型查找，比如下面实例中：

比如数组中有一个字符串`'7'` 那么是查找不到的

```js
const arr = [1, 3, '7', 5]
console.log(arr.indexOf(7)) // -1
// 严格类型匹配查询不到字符串7，所以返回 -1
```

## lastIndexOf()

`lastIndexOf()` 方法可以查找指定字符在字符串或者数组中第一次出现处的索引，如果此字符串中没有这样的字符，则返回 -1

不过 `lastIndexOf()` 是从右往左查找的

比如：数组中有两个`7` 这时返回的就是从右侧查找到的第一个 `7`

它接收两个参数：

- 要查找的元素
- 开始索引的位置（可选）

```js
const arr = [1, 3, 7, 5, 6, 7, 9]
console.log(arr.lastIndexOf(7)) // 5
```


---
./methods-object.md
---
# 对象方法

## Object.defineProperty()

`Object.defineProperty()` 方法可以直接在一个对象上定义一个新的属性，或者修改一个对象的现有属性，返回此对象
它接收了三个参数：

- 要给其添加属性的对象
- 属性的名称
- 描述对象

```js
const user = {
  name: '张同学',
  age: 38
}

Object.defineProperty(user, 'friend', {
  configurable: true, // 是否可以通过 delete 删除
  enumerable: true, // 是否可以循环
  writable: true, // 是否可以修改
  value: [1, 2, 3, 4] // 添加的值
})

console.log(user) // {name: '张同学', age: 38, friend: Array(4)}
```

## Object.defineProperties()

`Object.defineProperties()` 方法和 `Object.defineProperty()` 方法有点类似，`Object.defineProperty()` 只是可以在对象上定义一个属性，而 `Object.defineProperties()` 则可以定义多个

```js
const obj = {}

Object.defineProperties(obj, {
  name: {
    value: '张同学',
    configurable: true
  },
  age: {
    value: 12
  }
})

console.log(obj) // {name: '张同学', age: 12}
```

## Object.assign()

`Object.assign()` 可以将对象进行合并，它接收一个目标对象和一个或多个源对象作为参数进行合并

```js
const obj1 = { a: 1 }
const obj2 = { b: 2 }

Object.assign(obj1, obj2, { c: 12121 })

console.log(obj1) // {a: 1, b: 2, c: 12121}
```

如果源对象上有很多相同的属性，那么后面的属性会覆盖前面的属性

```js
const obj1 = { a: 1 }
Object.assign(obj1, { a: 12, b: 99 }, { b: 21 })

console.log(obj1) // {a: 12, b: 21}
```

## Object.is()

`Object.is()` 和 `===` 有点相似

```js
console.log(true === 1) // false
console.log({} === {}) // false
```

但是有些情况下就会出乎我们的意料

```js
console.log(+0 === -0) // true
console.log(+0 === 0) // true
console.log(-0 === 0) // true
```

为了改善这种情况，ES6 新增了 `Object.is()`，可以接收两个参数

```js
console.log(Object.is({}, {})) // false
console.log(Object.is(+0, -0)) // false
console.log(Object.is([], [])) // false
console.log(Object.is('1', 1)) // false
```

## Object.getPrototypeOf()

用于获取对象的原型，这是标准的方法，`__proto__` 本来就是浏览器实现的，所以不是规范的写法，虽然 `__proto__` 和 `Object.getPrototypeOf()` 方法都可以正常工作，不过建议使用 `Object.getPrototypeOf()`

```js
const obj = {}

console.log(obj.__proto__) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

console.log(Object.getPrototypeOf(obj)) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```

> 不过现在主流的浏览器都已经更新了，对象中不再存在 `__proto__` 属性，而是改为了 `[[Prototype]]`

## Object.setPrototypeOf()

`Object.setPrototypeOf()` 方法用于重新设置对象的原型

```js
function User() {}

const user = new User()

const newProto = {
  satName() {
    console.log('你好')
  }
}

Object.setPrototypeOf(user, newProto)
console.dir(Object.getPrototypeOf(user))
```

> Object.setPrototypeOf() 可能会影响代码的性能

## Object.create()

`Object.create()` 方法创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`，接收一个参数是需要继承的原型，如果不想要原型，那么可以传入 `null` 就是一个纯数据对象

```js
// 纯数据对象
console.log(Object.create(null))
```

```js
const obj = {
  name: '张三',
  arr: [1, 2, 3, 4]
}

const newObj = Object.create(obj)

console.log(newObj.__proto__ === obj) // true
```

因为上述使用 `Object.setPrototypeOf()` 方法改变对象的原型，可能会导致性能下降，所以可以通过 `Object.create()` 来创建一个新对象，同时指定原型

它接收一个参数：新创建对象的原型对象

```js
const newProto = {
  sayName() {
    console.log('你好')
  }
}

const user = Object.create(newProto)
user.name = '张同学'
console.dir(user)
console.log(Object.getPrototypeOf(user) === newProto) // true
```

打印结果

```shell
Object
  name: "张同学"
  [[Prototype]]: Object
    satName: ƒ satName()
    [[Prototype]]: Object
```

`Object.create` 的第二个参数和 [Object.defineProperties](https://tianyuhao.cn/blog/javascript/js-methods.html#object-defineproperties)一样，每个属性都有各自的描述符来描述据。以这种方式添加的属性会遮蔽原型对象上本书的属性

```js
const z = {
  name: '张三'
}

const res = Object.create(z, {
  name: {
    value: '张同学'
  }
})

console.log(z.name) // 张同学
```

```
原型式继承非常适合不需要单独创建构造函数，但是仍然需要在对象之间共享信息的场合。但是属性中包含的引用值始终会在香港对象间共享，跟使用原型模式是一样的。
```

也可以配置对象的内部属性

```js
const obj = { a: '1' }

const o = Object.create(obj, {
  b: {
    value: '2',
    enumerable: true,
    writable: false,
    configurable: false
  },
  c: {
    value: '3',
    enumerable: true,
    writable: false,
    configurable: false
  }
})
console.log(o) // {b: '2', c: '3'}
```

## Object.keys()

`Object.keys()` 可以获取对象上所有可以枚举的属性，不过仅限于当前作用域对象，不会向上攀升查找

```js
function User() {
  this.name = '张三'
  this.name2 = '张三'
}
User.prototype.age = 13
const user = new User()

console.log(Object.keys(user)) // ['name', 'name2']
console.log(Object.keys(User.prototype)) // ['age']
```

## Object.getOwnPropertyNames()

`Object.getOwnPropertyNames()` 可以获取对象上所有属性，无论是否可以枚举，都可以获取到，不过仅限于当前作用域对象，不会向上攀升查找

```js
function User() {
  this.name = '张三'
  this.name2 = '张三'
}
User.prototype.age = 13
const user = new User()

console.log(Object.getOwnPropertyNames(User.prototype)) // ['constructor', 'age']
```

```
在适当的时候，Object.keys() 和 Object.getOwnPropertyNames() 方法可以适当代替 for in 循环操作
```

## Object.getOwnPropertySymbols()

因为 `ES6` 新增了 `Symbol` 数据类型，那么针对于 `Symbol`，普通的循环是遍历不出来的

```js
const key1 = Symbol('key1')
const key2 = Symbol('key2')
const obj = {
  [key1]: '张三',
  [key2]: 20
}

for (const key in obj) {
  console.log(obj[key])
}
// 没有日志输出
```

所以 `Object.getOwnPropertySymbols()` 方法是针对于处理 `Symbol` 数据类型的

```js
const key1 = Symbol('key1')
const key2 = Symbol('key2')
const obj = {
  [key1]: '张三',
  [key2]: 20
}

for (const key of Object.getOwnPropertySymbols(obj)) {
  console.log(obj[key])
}

// 张三
// 20
```

## Object.values()

`Object.values()` 方法可以将对象中的键以数组形式返回

```js
const obj = {
  name: '张同学',
  age: 39
}

console.log(Object.values(obj))
//  ['张同学', 39]
```

## Object.entries()

`Object.entries` 方法可以将对象中的每个键和值转换为数组形式返回

```js
const obj = {
  name: '张同学',
  age: 39
}

console.log(Object.entries(arr))
```

打印结果

```shell
(2) [Array(2), Array(2)]
  0: (2) ['name', '张同学']
  1: (2) ['age', 39]
  length: 2
  [[Prototype]]: Array(0)
```

## Object.getOwnPropertyDescriptor()

`Object.getOwnPropertyDescriptor()` 方法可以得到对象属性特征的描述，接收两个参数，第一个是对象名，第二个是对象的属性名

```js
const obj = {
  name: '张三',
  age: 21
}

console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
// {value: '张三', writable: true, enumerable: true, configurable: true}

// value - 属性值
// writable - 是否可以修改
// enumerable - 是否可以遍历
// configurable - 是否可以被删除或重新配置
```

## Object.getOwnPropertyDescriptors()

上面 `Object.getOwnPropertyDescriptor()` 方法可以获取对象中单个键的属性特征描述，那么想要获取对象中所有属性的描述，需要使用 `Object.getOwnPropertyDescriptors()` 方法，该方法接收一个参数为对象名

```js
const obj = {
  name: '张三',
  age: 21
}

console.log(Object.getOwnPropertyDescriptors(obj))

// {name: {…}, age: {…}, arr: {…}}
```

## Object.preventExtensions()

`Object.preventExtensions()` 方法可以禁止向对象内添加内容

```js
const obj = {
  name: '张三',
  age: 21
}

Object.preventExtensions(obj)
obj.a = '1'
console.log(obj) // {name: '张三', age: 21}
```

## Object.seal()

封闭对象，**configurable = false**不可以被删除或重新配置

可以使用 `Object.isSealed()` 方法判断当前对象是否处于封闭状态，返回布尔值

```js
const obj = {
  name: '张三',
  age: 21
}

Object.seal(obj)
// 封闭对象，configurable = false

console.log(Object.isSealed(obj)) // true
```

## Object.freeze()

冻结对象，不能删除或重新配置，也不可以修改

可以使用 `Object.isFrozen()` 方法判断当前对象是否处于冻结状态，返回布尔值

```js
const obj = {
  name: '张三',
  age: 21
}

Object.freeze(obj)
// 冻结对象，configurable = false，writable = false

console.log(Object.isFrozen(obj)) // true
```

## Object.hasOwnProperty()

`Object.hasOwnProperty()` 方法用于检测一个属性是否在来自对象的实例，来自实例返回 `true`，来着原型返回 `false`

```js
function User() {
  this.name = '张三'
}
User.prototype.age = 13
const user = new User()

console.log(user.hasOwnProperty('name')) // true
console.log(Object.hasOwnProperty.call(user, 'age')) // true
```

简写方式

```js
function User() {
  this.name = '张三'
}

User.prototype.age = 12
const user = new User()

console.log(user.hasOwnProperty('name')) // true
console.log(user.hasOwnProperty('age')) // false
```

## Object.isExtensible()

`Object.isExtensible()` 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）

```js
const foo = { id: 123 }
console.log(Object.isExtensible(foo)) // true
```

## Object.preventExtensions()

`Object.preventExtensions()` 方法让一个对象变的不可扩展，也就是永远不能再添加新的属性

```js
const foo = { id: 123 }
console.log(Object.preventExtensions(foo)) // { id: 123 }

foo.age = 12
console.log(foo) // { id: 123 }
```

## isPrototypeOf()

`isPrototypeOf()` 方法用于测试一个对象是否存在于另一个对象的原型链上

```js
function User() {
  this.name = '张三'
}

const user = new User()
console.log(User.prototype.isPrototypeOf(user)) // true
```

## in

`in` 操作符可以用在两个场景，一个是 `for in` 循环中，还有一个是单独使用，可以检测对象上是否存在某个属性，无论在实例上还是原型上

```js
function User() {
  this.name = '张三'
}
User.prototype.age = 13
const user = new User()

console.log(user.hasOwnProperty('name')) // true
console.log(user.hasOwnProperty('age')) // false

console.log('name' in user) // true
console.log('age' in user) // true
```


---
./methods-string.md
---
# 字符串方法

## toString()

转换为字符串

```js
const a = 12
console.log(a.toString()) // '12'
```

## concat()

字符串拼接

```js
const a = '1121'
const b = '哈哈哈'

const c = a.concat(b)
console.log(c) // 1121哈哈哈
```

## slice()

字符串截取，可接收两个参数

- 字符串开始的位置
- 字符串结束的位置

```js
const a = 'hello world'
console.log(a.slice(2)) // llo world
console.log(a.slice(2, 5)) // llo
```

## substring()

字符串截取，可接收两个参数

- 字符串开始的位置
- 字符串结束的位置

```js
const a = 'hello world'
console.log(a.substring(2)) // llo world
console.log(a.substring(2, 5)) // llo
```

## substr()

字符串截取，可接收两个参数

- 字符串开始的位置
- 截取长度

```js
const a = 'hello world'
console.log(a.substr(3)) // hello world
console.log(a.substr(3, 7)) // lo worl
```

## startsWith()

检测一个字符串是否包含某个参数，它检查的是开始于索引 0 的匹配项，返回布尔值，可接收两个参数

- 要搜索的字符串
- 字符串开始的位置

```js
const a = 'hello world'
console.log(a.startsWith('hel')) // true
console.log(a.startsWith('llo')) // false
```

## endsWith()

检测一个字符串是否包含某个参数，它检查的是开始于索引末尾的匹配项，返回布尔值，可接收两个参数

- 要搜索的字符串
- 字符串开始的位置

```js
const a = 'hello world'
console.log(a.endsWith('rld')) // true
console.log(a.endsWith('llo')) // false
```

## includes()

可以在整个字符串中进行搜索

```js
const a = 'hello world'
console.log(a.includes('rld')) // true
console.log(a.includes('llo')) // true
```

## trim()

可以删除字符串前后的空格

```js
const a = ' hello world '
console.log(a.trim()) // hello world
```

## repeat()

用于字符串复制，接受一个参数

- 要复制的次数

```js
const a = 'hello world'
console.log(a.repeat(2)) // hello worldhello world
```

## padStart()

可以复制字符串，给出指定的长度进行填充，默认在字符串`前面`填充空格，接收两个参数

- 指定长度
- 填充字符串

```js
const a = 'hello'
console.log(a.padStart(10)) //      hello
console.log(a.padStart(10, '-')) // -----hello
```

## padEnd()

可以复制字符串，给出指定的长度进行填充，默认在字符串`后面`填充空格，接收两个参数

- 指定长度
- 填充字符串

```js
const a = 'hello'
console.log(a.padEnd(10)) // hello
console.log(a.padEnd(10, '-')) // hello-----
```

## match()

可以匹配字符串，接收一个正则表达式的参数进行匹配

```js
const a = 'hello'
console.log(a.match(/.lo/)) // ['llo', index: 2, input: 'hello', groups: undefined]
```

## localeCompare()

可以用于比较两个字符串，会返回 `-1、0、1` 等值

- 要比较的字符串和原始字符串相等，返回 0
- 按照字母表检测，如果参数字符串的第一个字母在原始字符串之前，就返回正值
- 按照字母表检测，如果参数字符串的第一个字母在原始字符串之后，就返回负值


---
./pre-compile.md
---
## 函数预编译步骤

1. 创建 AO 对象，执行期上下文。
2. 寻找函数的形参和变量声明，将变量和形参名作为 AO 对象的属性名，值设定为 undefined.
3. 将形参和实参相统一，即更改形参后的 undefined 为具体的形参值。
4. 寻找函数中的函数声明，将函数名作为 AO 属性名，值为函数体。

### 预编译过程包括两个主要步骤：变量提升（Hoisting）和函数提升。

1. 变量提升（Hoisting）：在 JavaScript 中，变量的声明会被提升到其作用域的顶部。这意味着无论变量的声明在代码中的哪个位置，它们都会在实际执行之前被"提升"到作用域的顶部。这样，在代码中可以在变量声明之前使用这些变

例如，以下代码中的变量声明会被提升到函数作用域的顶部：

```js
function example() {
  console.log(x); // 输出：undefined
  var x = 10;
  console.log(x); // 输出：10
}
```

在预编译阶段，上述代码实际上会被解释为：

```js
function example() {
  var x; // 变量提升
  console.log(x); // 输出：undefined
  x = 10;
  console.log(x); // 输出：10
}
```

2. 函数提升：与变量提升类似，JavaScript 中的函数声明也会被提升到作用域的顶部。这意味着无论函数声明在代码中的哪个位置，都可以在函数声明之前调用这些函数。

```js
example();

function example() {
  console.log('Hello, world!');
}
```

在预编译阶段，上述代码实际上会被解释为：

```js
function example() {
  console.log('Hello, world!');
}

example(); // 输出：Hello, world!
```

需要注意的是，只有函数声明会被提升，而函数表达式（如匿名函数）不会被提升。


---
./proxy.md
---
# proxy 代理

## 创建空代理

使用 `Proxy()` 构造函数可以创建一个空代理，它需要接收两个参数：

- 需要代理的目标对象
- 处理程序对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {})

// id 会得到同一个值
console.log(proxy.id) // 123
console.log(foo.id) // 123

// 重新赋值也会共同反映到两个对象上
foo.id = 666
console.log(proxy.id) // 666
console.log(foo.id) // 666

proxy.id = 987
console.log(proxy.id) // 987
console.log(foo.id) // 987
```

## 定义捕获器

当每次在代理对象上进行操作时，会首先触发捕获器函数，从而拦截或修改相应的行为。

下面定义了一个 `get` 捕获器，当调用 `get()` 的时候触发

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  get() {
    return 'hello'
  }
})

console.log(foo.id) // 123
console.log(proxy.id) // hello
```

> 注意：捕获器获取函数的函数名必须是 get，其他名称不会触发捕获器效果

## 捕获器参数和反射 API

定义的捕获器函数可以接收三个参数：

- 代理的目标对象
- 要查询的属性
- 代理对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  get(targe, property, receiver) {
    console.log(targe) // {id: 123}
    console.log(property) // id
    console.log(receiver) // Proxy {id: 123}
  }
})

console.log(proxy.id)
```

多数情况下，不需要手动重建原始行为，而是可以通过调用全局 [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect) 对象上的同名方法来轻松重建

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  get() {
    return Reflect.get(...arguments)
  }
})

console.log(proxy.id) // 123
console.log(foo.id) // 123
```

甚至可以写的更简洁一些

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  get: Reflect.get
})

console.log(proxy.id) // 123
console.log(foo.id) // 123
```

如果想要创建一个可以捕获所有方法，然后每个方法都转发给对应反射 API 的空代理，甚至不需要定义处理程序对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, Reflect)

console.log(proxy.id) // 123
console.log(foo.id) // 123
```

下面例子中，将对某些指定的属性进行访问的时候，可以加如一些修饰

```js
const foo = {
  name: '田同学',
  age: 18
}
const proxy = new Proxy(foo, {
  get(targe, property, receiver) {
    if (property === 'age') {
      return Reflect.get(...arguments) + '岁'
    }
    return Reflect.get(...arguments)
  }
})

console.log(proxy.name) // 田同学
console.log(proxy.age) // 18岁
```

## 可撤销代理

使用 `new Proxy()` 创建的代理，会在代理对象的生命周期内一直存在，如果想要撤销，可以使用 `Proxy.revocable()` 方法创建一个可撤销的代理，撤销操作上不可逆的，使用其内部的 `revoke` 方法可以撤销代理，撤销之后的代理尝试再次调用代理将会抛出 TypeError 异常

```js
const foo = {
  name: '田同学'
}
const revocable = Proxy.revocable(foo, {
  get() {
    return 'hello'
  }
})

console.log(revocable.proxy.name) // hello
proxy.revoke()
console.log(revocable.proxy.name) // 1.html:23 Uncaught ReferenceError: proxy is not defined
```

## 代理另一个代理

代理可以拦截反射 API 的操作，而这意味着完全可以创建一个代理，通过它去代理另一个代理

```js
const foo = {
  name: '田同学'
}

const proxyA = new Proxy(foo, {
  get() {
    console.log('proxyA')
    return Reflect.get(...arguments)
  }
})

const proxyB = new Proxy(proxyA, {
  get() {
    console.log('proxyB')
    return Reflect.get(...arguments)
  }
})

console.log(proxyB.name)
// proxyB
// proxyA
// 田同学
```

接下来将介绍一些代理捕获器与反射的一些方法

## get()

`get()` 捕获器会在捕获属性之间被调用，对应的反射 API 为 `Reflect.get()`。它可以接收三个参数：

- 代理的目标对象
- 要查询的属性
- 代理对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  get(targe, property, receiver) {
    console.log(targe) // {id: 123}
    console.log(property) // id
    console.log(receiver) // Proxy {id: 123}
  }
})

console.log(proxy.id)
```

## set()

`set()` 捕获器会在设置属性的操作中被调用，对应的反射 API 为 `Reflect.set()`。它可以接收四个参数：

- 代理的目标对象
- 要查询的属性
- 需要设置的新属性
- 代理对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  set(targe, property, value, receiver) {
    console.log(targe) // {id: 123}
    console.log(property) // id
    console.log(value) // 222
    console.log(receiver) // Proxy {id: 123}
  }
})

proxy.id = 222
```

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  set(targe, property, value, receiver) {
    targe[property] = value + 10
  }
})

proxy.id = 222

console.log(foo.id) // 232
console.log(proxy.id) // 232
```

## has()

`has()` 捕获器会在 `in` 操作符中调用，对应的反射 API 为 `Reflect.has()`。它可以接收两个参数：

- 目标对象
- 引用的目标对象上的字符串属性

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  has(target, property) {
    console.log(target) // {id: 123}
    console.log(property) // id
    return Reflect.has(...arguments)
  }
})

console.log('id' in proxy) // true
console.log('name' in proxy) // false
```

## defineProperty()

`defineProperty()` 捕获器会在 [Object.defineProperty()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-defineproperty) 中调用，对应的反射 API 为 `Reflect.defineProperty()`。它可以接收三个参数：

- 目标对象
- 引用目标对象上的字符串属性
- 包含可选的描述对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  defineProperty(target, property, descriptor) {
    console.log(target) // {id: 123}
    console.log(property) // name
    console.log(descriptor) // {value: '田同学', enumerable: false}
    return Reflect.defineProperty(...arguments)
  }
})

Object.defineProperty(proxy, 'name', {
  value: '田同学',
  enumerable: false // 禁止循环
})

for (const key in proxy) {
  console.log(key) // id
}
```

## getOwnPropertyDescriptor()

`getOwnPropertyDescriptor()` 捕获器会在 [Object.getOwnPropertyDescriptor()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-getownpropertydescriptorhttps://tianyuhao.cn/blog/javascript/methods-object.html#object-getownpropertydescriptor) 中调用，对应的反射 API 为 `Reflect.getOwnPropertyDescriptor()`。它可以接收两个参数：

- 目标对象
- 引用目标对象上的字符串属性

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  getOwnPropertyDescriptor(target, property) {
    console.log(target) // {id: 123}
    console.log(property) // name
    return Reflect.getOwnPropertyDescriptor(...arguments)
  }
})

const res = Object.getOwnPropertyDescriptor(proxy, 'id')
console.log(res) // {value: 123, writable: true, enumerable: true, configurable: true}
```

## deleteProperty()

`deleteProperty()` 捕获器会在 `delete` 操作符中调用，对应的反射 API 为 `Reflect.deleteProperty()`。它可以接收两个参数：

- 目标对象
- 引用目标对象上的字符串属性

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  deleteProperty(target, property) {
    console.log(target) // {id: 123}
    console.log(property) // name
    return Reflect.deleteProperty(...arguments)
  }
})

delete proxy.id

console.log(foo) // {}
console.log(proxy) // Proxy {}
```

## ownKeys()

`ownKeys()` 捕获器会在 [Object.keys()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-keys) 操作符中调用，对应的反射 API 为 `Reflect.ownKeys()`。它可以接收一个参数：

- 目标对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  ownKeys(target) {
    console.log(target) // {id: 123}
    return Reflect.ownKeys(...arguments)
  }
})

console.log(Object.keys(proxy)) // ['id']
```

## getPrototypeOf()

`getPrototypeOf()` 捕获器会在 [Object.getPrototypeOf()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-getprototypeof) 操作符中调用，对应的反射 API 为 `Reflect.getPrototypeOf()`。它可以接收一个参数：

- 目标对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  getPrototypeOf(target) {
    console.log(target) // {id: 123}
    return Reflect.getPrototypeOf(...arguments)
  }
})

console.log(Object.getPrototypeOf(proxy)) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```

## setPrototypeOf()

`setPrototypeOf()` 捕获器会在 [Object.setPrototypeOf()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-setprototypeof) 操作符中调用，对应的反射 API 为 `Reflect.setPrototypeOf()`。它可以接收两个参数：

- 目标对象
- 目标对象的代替原型

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  setPrototypeOf(target, property) {
    console.log(target) // {id: 123}
    console.log(property) // {age: 12}
    return Reflect.setPrototypeOf(...arguments)
  }
})

console.log(Object.setPrototypeOf(proxy, { age: 12 })) // Proxy {id: 123}
```

## isExtensible()

`isExtensible()` 捕获器会在 [Object.isExtensible()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-isExtensible) 操作符中调用，对应的反射 API 为 `Reflect.isExtensible()`。它可以接收一个参数：

- 目标对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  isExtensible(target) {
    console.log(target) // {id: 123}
    return Reflect.isExtensible(...arguments)
  }
})

console.log(Object.isExtensible(proxy)) // true
```

## preventExtensions()

`preventExtensions()` 捕获器会在 [Object.preventExtensions()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-preventExtensions) 操作符中调用，对应的反射 API 为 `Reflect.preventExtensions()`。它可以接收一个参数：

- 目标对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  preventExtensions(target) {
    console.log(target) // {id: 123}
    return Reflect.preventExtensions(...arguments)
  }
})

console.log(Object.preventExtensions(proxy)) // Proxy {id: 123}
```

## apply

`apply()` 捕获器会在调用函数中被调用，对应的反射 API 为 `Reflect.apply()`。它可以接三个参数：

- 目标对象
- 调用函数时候的 this 参数
- 调用参数时的参数列表

```js
const foo = () => {}
const proxy = new Proxy(foo, {
  apply(target, thisArg, ...argumentsList) {
    console.log(target) // () => { }
    console.log(thisArg) // undefined
    console.log(argumentsList) // [Array(0)]
    return Reflect.apply(...arguments)
  }
})

proxy()
```

## construct

`construct()` 捕获器会在 `new` 操作符中被调用，对应的反射 API 为 `Reflect.construct()`。它可以接三个参数：

- 目标构造函数
- 传递给目标构造函数的参数列表
- 最初调用的构造函数

```js
const foo = function () {}
const proxy = new Proxy(foo, {
  construct(target, argumentsList, newTarget) {
    console.log(target) // ƒ () { }
    console.log(argumentsList) // []
    console.log(newTarget) // Proxy {length: 0, name: 'foo', arguments: null, caller: null, prototype: {…}}
    return Reflect.construct(...arguments)
  }
})

new proxy()
```


---
./throttle.md
---
# 节流函数

```js
function coloring() {
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`
}
function throttle(fn, delay) {
  let pre = 0
  return function () {
    let now = new Date()
    if (now - pre > delay) {
      fn.apply(this, arguments)
      pre = now
    }
  }
}
window.addEventListener('resize', throttle(coloring, 3000))
```

---


---
./javascript/array-iteration.md
---
# 数组迭代

## forEach()

我们不应该过度滥用`forEach`。当然，在某些情况下`forEach`是一个非常好的方法。

如果你需要迭代数组以执行特定操作（例如控制台记录每个项目）。

可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

```js
const items = [1, 2, 3, 4, 5]

items.forEach((item) => console.log(item))
```

forEach 不返回任何值！！

```js
const toto = items.forEach((item) => console.log(item))
toto // undefined
```

## filter()

`filter` 方法，允许根据条件过滤数组中的某些值，查找满足条件的所有元素，返回数组

可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

例如，如果你想删除奇数

使用 forEach (不建议)

```js
const items = [1, 2, 3, 4]
const evenValue = []
items.forEach((item) => {
  if (item % 2 == 0) {
    evenValue.push(item)
  }
})
```

使用 filter (正确)

```js
const items = [1, 2, 3, 4]

const evenValue = items.filter((item) => {
  return item % 2 == 0
})
```

那么过滤函数是怎么实现的呢？下面是自己封装的一个过滤函数，用于深入了解过滤函数实现原理：

```js
const hd = [1, 2, 3, 4]
// array 原数组
// except 过滤掉的元素
function filter(array, except) {
  const newArray = []
  for (const value of array) {
    // 判断如果传递来的数组中没有循环数组中的元素，那么就将其放在新数组中
    if (except.includes(value) === false) {
      newArray.push(value)
    }
  }
  return newArray
}

// 这里想把 2,3 过滤掉掉
console.log(filter(hd, [2, 3]))
// (2) [1, 4]
```

> 当你使用 filter 时，你应该在每次迭代中返回一个布尔值（filter 的条件）。（否则 JS 引擎会把返回值强制转换为布尔值！）

使用 filter 过滤掉 falsy(false, null, 0, "", undefined, NaN) 值

```js
const array = [1, 0, true, false, "", "hello", null, undefined, NaN];

const filteredArray = array.filter(Boolean);

console.log(filteredArray); //[1, true, "hello"]
```

## map()

`map()` 方法用于映射数组

可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

当你需要将项目从一个数组转换为另一个数组时

例如，如果你想将数组中的所有值都乘以 2

使用 forEach (不建议)

```js
const items = [1, 2, 3, 4]
const result = []
items.forEach((item) => {
  result.push(item * 2)
})
```

使用 map (正确)

```js
const items = [1, 2, 3, 4]
const result = items.map((item) => {
  return item * 2
})
```

> 当你使用 map 时，你需要在每次迭代中返回一个项目（转换后的项目）。

## find()

`find` 方法，当你需要找到符合条件的项目并打算之后使用该项目的情况下，可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

```js
const arr = [1, 2, 3, 4]

arr.find((element, index, array) => {
  console.log(element, index, array)
})

// 1 0 (4) [1, 2, 3, 4]
// 2 1 (4) [1, 2, 3, 4]
// 3 2 (4) [1, 2, 3, 4]
// 4 3 (4) [1, 2, 3, 4]
```

找到指定 `name` 的元素，并返回该元素

```js
const arr = [
  { name: '张三', age: 12 },
  { name: '李四', age: 23 },
  { name: '小明', age: 34 }
]

const res = arr.find((element, index, array) => {
  return element.name === '小明'
})
console.log(res) //{name: '小明', age: 34}
```

查找满足条件的第一个单个元素 **返回布尔值**，找到符合条件的元素，然后返回该元素，没有符合条件的，则返回 undefined

```js
const arr = [12, 13, 14, 15, 16, 17, 128]
function changeArr() {
  return arr.find((n) => {
    return n > 14
  })
}
console.log(changeArr())
// 15
```

**filter 和 find 结合实例**

有一个数组 arr1 和 arr2 现在想要得到 arr1 - arr2 的数据，并且返回一个新的数组

```js
const arr1 = [
  { name: '小明', id: 1 },
  { name: '小张', id: 2 },
  { name: '小例', id: 3 },
  { name: '小李', id: 4 },
  { name: '小赵', id: 5 },
  { name: '小萌', id: 6 }
]

const arr2 = [
  { name: '小例', id: 3 },
  { name: '小萌', id: 6 }
]

function changeArr() {
  return arr1.filter((item1) => {
    return !arr2.find((item2) => {
      return item1.id === item2.id
    })
  })
}
console.log(changeArr())

// 结果为：
// [
//   {name: "小明", id: 1},
//   {name: "小张", id: 2},
//   {name: "小李", id: 4},
//   {name: "小赵", id: 5}
// ]
```

## findIndex()

`findIndex()` 方法和 `find` 方法类似，但是 `findIndex()` 并不是返回的匹配的指定的元素，而是返回匹配元素的索引值

可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

```js
const arr = [
  { name: '张三', age: 12 },
  { name: '李四', age: 23 },
  { name: '小明', age: 34 }
]

const res = arr.findIndex((element, index, array) => {
  return element.name === '小明'
})
console.log(res) // 2
```

## some()

`some()` 方法返回布尔值，**遍历出的每一项只要有一项为真，就返回真；如果为假，则每一项都遍历一次**

可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

```js
const items = [1, 2, 3, 4]
const hasNumber2 = items.some((item, index) => {
  return item === 2
})
console.log(hasNumber2) // true
```

> 如果第一项判断为真了，就不继续向下判断了，直接返回第一项。如果判断到第某一项时返回 true，那么在这个元素之前的全部都会遍历

## every()

`every()` 方法返回布尔值，**遍历出的每一项必须全部为真，才返回真，否则返回假**

可以接收三个参数：

- 每一项元素
- 每一项元素的索引值
- 原数组

```js
const user = [
  { name: '小明1', fen: 78 },
  { name: '小明2', fen: 92 },
  { name: '小明3', fen: 37 },
  { name: '小明4', fen: 56 }
]

const res = user.every((item) => {
  return item.fen > 30
})

console.log(res) // true
```

## reduce()

`reduce()` 函数返回的任何值，都会作为下一次调用同一函数的第一个参数

可以接收四个参数：

- 上一次归并值
- 当前项
- 当前项的索引
- 原数组

```js
const arr = [1, 3, 7, 5]
arr.reduce((prev, cur, index, array) => {
  console.log(prev, cur, index, array)
})

// 1 3 1 [1, 3, 7, 5]
// undefined 7 2 [1, 3, 7, 5]
// undefined 5 3 [1, 3, 7, 5]
```

当你需要从数组中获取单个值时。此处的 `单个值` 可以是一个数组。

例如，如果你想对数组中的所有数字求和。

使用 forEach (不建议)

```js
const items = [1, 2, 3, 4]
let accumulator = 0

items.forEach((item) => {
  accumulator += item
})
```

使用 reduce (正确)

```js
const items = [1, 2, 3, 4]

const sum = items.reduce((accumulator, currentValue) => {
  return (accumulator += currentValue)
}, 0)
```

> 当你使用 reduce 时，你需要在每次迭代中返回 accumulator（reduce 方法返回的值），并且你还应该初始化这个 accumulator（在上面的例子中我们将累加器初始化为 0）！

## reduceRight()

`reduceRight()` 方法和 `reduce()` 方法基本类似，但是 `reduceRight()` 是从右往左遍历

可以接收四个参数：

- 上一次归并值
- 当前项
- 当前项的索引
- 原数组

```js
const arr = [1, 3, 7, 5]
arr.reduceRight((prev, cur, index, array) => {
  console.log(prev, cur, index, array)
})

// 5 7 2 [1, 3, 7, 5]
// undefined 3 1 [1, 3, 7, 5]
// undefined 1 0 [1, 3, 7, 5]
```


---
./javascript/basic.md
---
# 基础

## 运算符

### 一元运算符

关于 a++ 和 ++a 的问题

正常在不参与运算的情况下是没什么区别的

```js
let a = 2

console.log(a++)
console.log(++a)
// 结果都是3
```

那么再参与运算时

- 先++

```js
let a = 2
let b = 4
console.log(a + ++b)
// 结果为7 ++放到前面 b先自增 b+1 + a
```

- 后++

```js
let a = 2
let b = 4
console.log(a + b++)
// 结果为6 ++放到后面 b后自增 b + a
// b++ 是在 算完 b + a 只后再自增的 所以再打印 b 就是5了
console.log(b)
```

### 逻辑与 &&

用于检查所有值（通常值为条件）是否为真。

它将返回第一个值 false，否则返回最终值。

```js
const isTrue = true
const isFalse = false

console.log(isFalse && isTrue) // false
console.log(isTrue && isFalse) // false

const toto = 5 && 3 && 1
console.log(toto) // 1

const tutu = 5 && 0 && 2
console.log(tutu) // 0
```

### 逻辑或 ||

用于检查一组值中的一个值（通常值是条件）是否为真。

它将返回第一个值 true，否则返回最终值。

```js
const isTrue = true
const isFalse = false

console.log(isFalse || isTrue) // true
console.log(isTrue || isFalse) // true

const toto = 5 || 3 || 1
console.log(toto) // 5

const tutu = 0 || 5 || 2
console.log(tutu) // 5
```

### 逻辑空 ??

当其左侧操作数为 null 或 undefined （空值）时，返回其右侧操作数。

```js
console.log(null ?? 12) // 12
console.log(undefined ?? 12) // 12
console.log(55 ?? 12) // 55
console.log(55 ?? null) // 55
console.log(55 ?? undefined) // 55
```

> 注意：??运算符与||不同，因此当你需要根据其他值来赋值时，应该选择正确的运算符！

```js
const toto = 0 || 55 // 0 为false 所以是55
const titi = 0 ?? 55 // 0不是null或者undefined，所以是0

const tutu = undefined || 55 // undefined 为false，所以是55
const tata = undefined ?? 55 // 第一个是undefined，所以是55
```

## switch 语句

例如：

```js
let name = '小明'

switch (name) {
  case '小明':
    console.log('这是小明')
    break
  case '小张':
    console.log('这是小张')
    break
  default:
    console.log('我谁也不是')
}
```

例子中 我们要判断`name`来输出不同的内容，它会用`name`来和`case`的每一个字段进行相比，如果成立，就执行下面的内容，如果碰到`break`就退出`switch`。

如果一直都没有找到成立项，那么就执行`default`的内容

那么如果想要有两个字段有统一的处理方式的话，也可以这么写：

```js
let item = 'hello'

switch (item) {
  case 'hello':
  case 'Hi':
    console.log('你好啊')
    break
  case 'yes':
    console.log('是的')
    break
}
```

这里要判断的值是`item`上面代码意思是：`item`的值是`hello`或者`Hi`的其中一个，都是可以执行`break`前的内容的，两个内容使用统一的处理方式

## console

`console.log()` 在控制台上输出信息

```js
console.log('这的一段信息')

// 这的一段信息
```

`console.table()` 用于打印数组结构

比如，我们在定义一个数组的时候，要是在控制台打印是这样的：

```js
const arr = [1, 3, 5, 6]
console.log(arr)
// (4) [1, 3, 5, 6]
```

类似数组，可以通过 console.table() 来更直观的打印出：

```js
const arr = [1, 3, 5, 6]
console.table(arr)
```

打印结果为：

| (index) | value |
| ------- | :---- |
| 0       | 1     |
| 1       | 3     |
| 2       | 5     |
| 3       | 6     |

```js
Array(4)
```

会打印出 索引对应的值

`console.error()` 用于错误信息提示

```js
console.error('这是一段错误信息')
// 这是一段错误信息
```

`console.warn()` 用于打印警告信息

```js
console.warn('这是一段警告信息')
```

## 事件绑定

### addEventListener()

`addEventListener()` 方法接收三个参数：事件名、事件处理函数和一个布尔值，`true` 表示在捕获阶段处理程序；false(默认值)在冒泡阶段处理程序

```html
<button id="btn">点击</button>
<script>
  document.getElementById('btn').addEventListener(
    'click',
    () => {
      console.log('点击了')
    },
    false
  )

  // 点击了1
</script>
```

`addEventListener()` 的优势是可以处理多个事件程序

```html
<button id="btn">点击</button>
<script>
  document.getElementById('btn').addEventListener(
    'click',
    () => {
      console.log('点击了1')
    },
    false
  )

  document.getElementById('btn').addEventListener(
    'click',
    () => {
      console.log('点击了2')
    },
    false
  )

  // 点击了1
  // 点击了2
</script>
```

也可以定义函数通过函数名传参

```html
<button id="btn">点击</button>
<script>
  function _alert() {
    console.log('点击了')
  }

  document.getElementById('btn').addEventListener('click', _alert, false)
</script>
```

### removeEventListener()

`removeEventListener()` 可以移除事件处理程序，需要接收两个参数：事件名和事件函数

那也就是说通过 `addEventListener()` 添加的事件处理程序添加匿名函数是无法移除的，如下

**反面案例**

```html
<button id="btn">点击</button>
<script>
  const btn = document.getElementById('btn')
  btn.addEventListener(
    'click',
    function () {
      console.log('点击')
    },
    false
  )

  btn.removeEventListener('click', function () {
    console.log('点击')
  })
</script>
```

**正确的**

```html
<button id="btn">点击</button>
<script>
  function _alert() {
    console.log('点击了')
  }

  const btn = document.getElementById('btn')
  btn.addEventListener('click', _alert, false)
  btn.removeEventListener('click', _alert) // 有效果
</script>
```

## 计算程序执行的时间

上面，通过随机数的方法可以获取程序所执行的时间，它是原理是

```js
const a = Date.now() // 开始执行 for 循环的时间戳
for (i = 0; i < 22222220; i++) {} // 执行 for 循环
const b = Date.now() // 结束 for 循环的时间戳
console.log(b - a) // 两个时间戳相减 = for 循环所用的时间(毫秒)
```

其实，如果想要计算程序执行的时间，可以尝试下面的方法

我们只知道 `console.log()` 可以在浏览器控制台内打印出数据

其实 `console.` 后面还可以有很多别的参数，比如下面方法就可以计算程序执行的时间：

```js
console.time('for')
for (i = 0; i < 22222220; i++) {}
for (i = 0; i < 22222220; i++) {}
for (i = 0; i < 22222220; i++) {}
console.timeEnd('for')
```

> `console.time()` 和 `console.timeEnd()` 是相互对应的两个标签，计算的就是中间包裹住程序所执行的时间，里面名称可以自定义，但是开始和结束的名称必须对应！
>
> **参数填写错误浏览器会有警告！（不是报错）**

## Referer 说明

解决关于图片请求失败 403 报错问题解决

> GET https://img2018.cnblogs.com/blog/1480369/201809/1480369-20180929001746684-197810269.jpg 403 (Forbidden)

为什么项目中有时候图片加载失败后报错会返回 403？

因为有些项目中的数据是通过爬虫抓取第三方的数据来进行展示的，而第三方对图片做了放到链保护处理，也就是说不能让你直接通过图片地址访问图片资源。

> 第三方平台是怎么处理图片资源保护的呢？

> 服务器一般使用 Referer 请求头识别图片来源，然后处理资源访问。
> 我们在浏览器中发的任何请求，都会携带一个叫 Referer 的字段，会包含请求资源来源页面的地址，也就是你从哪里来的，如果你从网站 A 来的，那么 Referer 就是网站 A 的地址。
> 服务器一般使用 Referer 请求头识别来源，可能会进行统计分析、日志记录以及缓存优化等
> 那么服务器一看不是自己的网站，那么就会禁止访问，返回 403，不允许请求。

需要注意的是：`referer` 实际是 **referrer** 错误拼写。

打开浏览器的控制台 Network 中，我们发送的任何请求都会携带 Referer

```shell
Referer: http://localhost:8080/
```

**怎么解决？**

> 那么就不要发送 Referer，这样对方服务器就不知道你是从哪里来的了，姑且认为你是自己人吧。

**如何设置？**

能发 Referer 的资源有很多，比如;

`<a>`、`<img>`、`<script>`、`<area>` 或者 `<link>`

可以单独设置禁止发送 Referer

```html
<img src="http://....." alt="" referrerpolicy="no-referrer" />
```

也可以在 HTML 页面头部通过 meta 标签属性全局配置

```html
<meta name="referrer" content="no-referrer" />
```

## typeof 和 instanceof

`typeof` 可以判断一个变量是原始类型中的那种类型，但是在下面情况中，就会显得不那么的友好：

```js
const arr = [1, 2, 3, 4]
const obj = {}
const n = null
console.log(typeof arr) // object
console.log(typeof obj) // object
console.log(typeof n) // object
```

可见，使用 `typeof` 方法之后，在判断数组，对象和 null 的时候，返回的结果都是 `object`，但是我们要判断引用类型具体是什么类型，就需要使用 `instanceof`了：

```js
const arr = [1, 2, 3, 4]
const obj = {}
console.log(arr instanceof Array)
console.log(obj instanceof Object)
```

这样就可以很好的分清楚是对象还是数组了

> 注意：instanceof 只能进行检查引用类型，检查原始类型全部返回 false！


---
./javascript/data-type.md
---
# 数据类型

## Map()

`Map()` 类型实际上是键值对的有序集合，键和值是任意类型，可以使用构造函数来创建，一个键对应一个值

```js
const m = new Map()

const m2 = new Map([
  ['name', '张三'],
  ['age', '12']
])
console.log(m2)
// Map(2) {'name' => '张三', 'age' => '12'}
```

`size` 方法可以获取键值的数量，相当于数组的 `length` 方法

```js
const m2 = new Map([
  ['name', '张三'],
  ['age', '12']
])
console.log(m2.size) // 2
```

`set()` 方法添加元素，接收两个参数：`键/值`

```js
const mapList = new Map()
mapList.set('name', '张三')
mapList.set('age', 12)
console.log(mapList)

// Map(2) {"name" => "张三", "age" => 12}
```

`get()` 方法通过指定键名获取键值

```js
const mapList = new Map()
mapList.set('name', '张三')
mapList.set('age', 12)

console.log(mapList.get('name'))
// 张三
```

`has()` 方法检测集合中有无指定元素，返回布尔值

```js
const m2 = new Map([
  ['name', '张三'],
  ['age', '12']
])
console.log(m2.has('name')) // true
console.log(m2.has('name2')) // false
```

`delete()` 方法可删除元素

```js
const m2 = new Map([
  ['name', '张三'],
  ['age', '12']
])
m2.delete('name')
console.log(m2) // Map(1) {'age' => '12'}
```

`clear()` 方法可以清楚所有的键值

```js
const m2 = new Map([
  ['name', '张三'],
  ['age', '12']
])
m2.clear()
console.log(m2) // Map(0) {size: 0}
```

`keys()` 方法可以获取到所有的键

```js
const m = new Map([
  ['name', '张三'],
  ['age', '12']
])

console.log(m.keys()) // MapIterator {'name', 'age'}
```

`values()` 可以获取每一项的值

```js
const m = new Map([
  ['name', '张三'],
  ['age', '12']
])

console.log(m.values()) // MapIterator {'张三', '12'}
```

`Map` 与 `Objet` 类型不同的是，它可以用任意的键作为键名

```js
function fun() {}
const sy = Symbol()
const obj = {}

const m = new Map([
  [fun, '这是函数'],
  [sy, '这是 Symbol'],
  [obj, '这是 obj']
])

console.log(m.get(fun)) // 这是函数
console.log(m.get(sy)) // 这是 Symbol
console.log(m.get(obj)) // 这是 obj

console.dir(m)
```

打印结果

```shell
Map(3)
  [[Entries]]
    0: {function fun () { } => "这是函数"}
    1: "这是 Symbol"
    2: {Object => "这是 obj"}
  size: 3
  [[Prototype]]: Map
```

可以使用 [entries](https://tianyuhao.cn/blog/javascript/array-methods.html#entries) 方法进行迭代

```js
const m = new Map([
  ['name', '张三'],
  ['age', '12']
])

for (const item of m.entries()) {
  console.log(item)
  // ['name', '张三']
  // ['age', '12']
}
```

也可以使用 `[Symbol.iterator]()` 方法进行迭代

`[Symbol.iterator]()` 和 `entries()` 是全等的

```js
console.log(m.entries === m[Symbol.iterator]) // true
```

```js
const m = new Map([
  ['name', '张三'],
  ['age', '12']
])

for (const item of m[Symbol.iterator]()) {
  console.log(item)
  // ['name', '张三']
  // ['age', '12']
}
```

或者使用数组方法进行遍历

```js
const m = new Map([
  ['name', '张三'],
  ['age', '12']
])

m.forEach((item, value) => {
  console.log(item, value)
  // 张三 name
  // 12 age
})
```

把数组复制到映射

```js
const arr = ['css', 'html', 'js']
const m = new Map(
  arr.map((item, index) => {
    return [index + 1, item]
  })
)

console.log(m)
```

打印结果

```shell
Map(3) {1 => 'css', 2 => 'html', 3 => 'js'}
```

## WeakMap()

`WeakMap()` 是 `Map()` 的一个兄弟，但是也是有些区别的

`WeakMap()` 的键只能是 `Object` 类型

- 错误的

```js
const wm = new WeakMap([['age', '12']])

console.dir(wm) // TypeError:用作弱映射键的值无效
```

- 正确的

```js
const obj = {}
const wm = new WeakMap([[obj, '12']])
```

如果想使用字符串进行作为键，可以先包装成对象再作为键

```js
const obj = {}
const str = new String('name')
const wm = new WeakMap([
  [obj, '12'],
  [str, '张三']
])
```

还有不同的是：

- `WeakMap()` 不可被迭代
- `clear()` 方法不能使用

## Set()

ES6 提供了新的数据结构 `Set()`。它类似于数组，但是成员的值都是唯一的，没有重复的值，很多时候它都要强于 `Map()`

创建一个 `Set` 数据结构

```js
const s = new Set()
```

`Set()` 和 `Map()` 类似，有着很多共同效果的方法：

- `size` 方法获取元素的数量
- `add()` 方法添加元素
- `delete()` 方法删除元素
- `has()` 方法检测集合中有无指定元素，返回布尔值
- `clear()` 方法可清空所有元素

`values()` 和 `keys()` 方法可以获取其中的每一项进行遍历

`values()` 和 `keys()` 是全等的，所以用哪个都可以

```js
const s = new Set([1, 2, 3, 4])
console.log(s.values === s.keys) // true
console.log(s.keys()) // SetIterator {1, 2, 3, 4}

for (const item of s.keys()) {
  console.log(item)
}
// 1
// 2
// 3
// 4
```

**将 Set 转换为数组**

可以使用 Es6 的扩展运算符 `...` 对 `Set` 展开进行转换

```js
const setArr = new Set([1, 3, 3, 3, 3, 4, 6])
const arr = [...setArr]
console.log(arr)

// (4) [1, 3, 4, 6]
```

## WeakSet()

`WeakSet()` 是 `Set()` 的一个兄弟，但是也是有些区别的

`WeakSet()` 的键只能是 `Object` 类型

- `WeakSet()` 不可被迭代
- `clear()` 方法不能使用

## Symbol()

Symbol 数据库类型是特点是：**值是唯一的**

可以通过`Symbol()` 创建一个 Symbol()

```js
let a = Symbol()
let b = Symbol()

console.log(typeof a) // Symbol
console.log(a === b) // false
```

Symbol 并不是一个对象，可以把它理解为一个字符串，一个永远都不会重复的字符串，所以它是原始类型。

> 可以给 Symbol 添加一个描述：

```js
const a = Symbol('这是一段文字')
const b = Symbol('你好吗')
```

用 js 内置的方法 `description` 提取出描述信息，并以字符串形式打印

```js
const a = Symbol('这是一段文字')
const b = Symbol('你好吗')

console.log(a.description) // 这是一段文字
console.log(b.description) // 你好吗
```

> 除此之外，还可以使用 `Symbol.for()` 来定义

这样定义的也可以在内部添加描述，但是这样的好处是：如果两次定义完全一样，那么两个变量会公用一个内容地址：

```js
const a = Symbol.for('这是一段文字')
const b = Symbol.for('这是一段文字')
console.log(a === b) // true
```

那么这样再判断的话，两个变量就相等了

这样声明的话，可以使用 `Symbol.keyFor()` 来获得描述的文字

```js
const a = Symbol.for('这是一段文字')
console.log(Symbol.keyFor(a)) // 这是一段文字
```

实际应用，当有两个人的名字的一样的时候，可以使用 `Symbol` 来定义每个键值作为区分：

```js
const user1 = {
  name: '李四',
  key: Symbol()
}

const user2 = {
  name: '李四',
  key: Symbol()
}

const obj = {
  [user1.key]: {
    js: 100,
    css: 20
  },
  [user2.key]: {
    js: 30,
    css: 21
  }
}

console.log(obj) // {Symbol(): {…}, Symbol(): {…}}
console.log(obj[user1.key]) // {js: 100, css: 20}
console.log(obj[user2.key]) // {js: 30, css: 21}
```

在对象中，如果存在 Symbol 类型时，通过普通的`for in` 或者 `for of` 循环是遍历不到的：

```js
const age = Symbol('age')
const obj = {
  name: '张三',
  [age]: 12
}
// 普通的方式遍历只能得到普通的值
for (const key of Object.keys(obj)) {
  console.log(key) // name
}

// 使用 Object.getOwnPropertySymbols() 方法之可以遍历出 Symbol 类型
for (const key of Object.getOwnPropertySymbols(obj)) {
  console.log(key) // Symbol(age)
}

// 如果想要遍历出所有的类型，需要使用 Reflect.ownKeys() 静态方法才可以实现
for (const key of Reflect.ownKeys(obj)) {
  console.log(key)
  // name
  // Symbol(age)
}
```

## JSON

**JSON.stringify()**

使用 `JSON.stringify()` 方法可以将对象转换为 JSON 对象

```js
const obj = {
  name: '张同学',
  age: 39,
  arr: [1, 2, 3, 4]
}

console.log(JSON.stringify(obj))

// {"name":"张同学","age":39,"arr":[1,2,3,4]}
```

也可以接收第二个参数，用于过滤，可以接收一个数组或函数

```js
const obj = {
  name: '张同学',
  age: 39,
  arr: [1, 2, 3, 4]
}

console.log(JSON.stringify(obj, ['age']))

// {"age":39}
```

通过第二个参数过滤出 `age`

第三个参数是代表每行的缩进数量，最大为 10

```js
const obj = {
  name: '张同学',
  age: 39,
  arr: [1, 2, 3, 4]
}

console.log(JSON.stringify(obj, null, 2))
```

结果如下：

```json
{
  "name": "张同学",
  "age": 39,
  "arr": [1, 2, 3, 4]
}
```

**JSON.parse()**

使用 `JSON.parse()` 方法可以将 JSON 对象转换为对象

```js
const json = `{"name":"张同学","age":39,"arr":[1,2,3,4]}`
console.log(JSON.parse(json))

// {name: '张同学', age: 39, arr: Array(4)}
```

## FormData()

创建一个 formdata

```js
const fd = new FormData()
fd.append('name', 'data')
```

`append` 方法接收两个参数 键和值

使用 FormData 就不需要给 xhr 对象设置响应头了，因为 xhr 对象可以识别作为 FormDate 实例传入的数据类型并自动配置响应头

## URLSearchParams

URLSearchParams 是用于处理 URL 查询参数的对象。它提供了一组方法来解析、操作和构建 URL 查询参数。你可以使用它来获取、设置、添加或删除 URL 的查询参数。

```js
const urlParams = new URLSearchParams(window.location.search);
const paramValue = urlParams.get('paramName');
```


---
./javascript/date-object.md
---
# 日期对象

## new Date()

可以通过 `new Date()` 获取当前时间

```js
const date = new Date()
console.log(date)
```

## getTime()

获取指定日期的时间戳 `getTime()`

```js
const time = new Date('2000-10-1 12:23:11') // 获取目标时间
console.log(time.getTime()) // 使用 getTime() 方法将时间转换为时间戳
// 下面三种方法也可以转换
console.log(time * 1)
console.log(Number(time))
console.log(time.valueOf())
```

> 以上转换的 4 种方法都可以使用

- 将时间戳转换为时间对象

```js
const time = new Date('2000-10-1 12:23:11')
const timeList = time.getTime()
console.log(new Date(timeList))
```

将时间戳转换为时间对象的方法也很简单，只有 `new` 一个新的日期对象，再把时间戳扔到括号里面即可

> new Date(时间戳)

- 获取当前时间的年月日时分秒

```js
const time = new Date() // 获取当前时间
const year = time.getFullYear() // 获取年份
const month = time.getMonth() + 1 // 获取月份
const day = time.getDate() // 获取日
const hour = time.getHours() // 获取小时
const minute = time.getMinutes() // 获取分钟
const res = `${year}-${month}-${day} ${hour}:${minute}`
console.log(res)
```

这么的写法比较麻烦，我们可以通过封装函数的方法，来实现上面代码段的重复利用

```js
// 获取到当前的时间
const time = new Date()

// 封装函数
// date 是当前的时间
// format 处理转换时间的格式
function dateFormat(date, format = 'YYYY-MM-DD HH:mm:ss') {
  // 定义对象处理转换时间的格式
  const config = {
    YYYY: date.getFullYear(),
    MM: date.getMonth() + 1,
    DD: date.getDate(),
    HH: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getMinutes()
  }
  // 用 for in 遍历出对象中的每一项 并使用 replace 替换
  for (const key in config) {
    format = format.replace(key, config[key])
  }
  return format
}

console.log(dateFormat(time, 'YYYY年-MM月-DD日'))
// 2021年-4月-3日

console.log(dateFormat(time, 'YYYY^MM^DD HH^mm^ss'))
// 2021^4^3 20^41^41
```

## toLocaleDateString()

`toLocaleDateString()` 方法可将 Date 对象的时间转换为字符串

```js
const date = new Date()
const res = date.toLocaleDateString()
console.log(res)
// 2021/4/23
```

## Date.now()

`Date.now()` 获取当前时间戳

```js
console.log(Date.now())
```

通过时间戳，我们可以计算程序执行所用的时间，下面以 for 循环举例

```js
const a = Date.now() // 开始执行 for 循环的时间戳
for (i = 0; i < 22222220; i++) {} // 执行 for 循环
const b = Date.now() // 结束 for 循环的时间戳
console.log(b - a) // 两个时间戳相减 = for 循环所用的时间(毫秒)
```


---
./javascript/debounce.md
---
# 防抖函数

## 不需要传参
```js
function debounce(fn, delay) {
  let timer = null
  return function() {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(this)
    }, delay)
  }
}
const btn = document.querySelector('button')
btn.addEventListener('click', debounce(function() {
  console.log(this); // button
}, 1000))
```

## 需要传参
```js
function debounce(fn, delay) {
  let timer = null
  return function() {
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
const btn = document.querySelector('button')
btn.addEventListener('click', debounce((a, b) => {
  console.log(a, b); // 1, 2
}, 1000).bind(btn, '1', '2'))
```

---
./javascript/dom.md
---
# DOM 相关

## childNodes

`childNodes` 方法可获取元素中内部的元素
返回的并不是一个数组

```html
<ul class="list">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```js
const ul = document.querySelector('ul')
console.log(ul.childNodes) // NodeList(7) [text, li, text, li, text, li, text]
```

> childNodes 得到的结果并不是一个数组，但是它也有 `length` 属性，也可以使用数组的中括号方式通过索引获取里面的元素，使用 `Array.from()` 方法可以转换为真正的数组

## parentNode

`parentNode` 方法可获取父级元素

> 仅会获得一个最近的亲父级标签元素

```html
<ul>
  <li>哈哈哈</li>
</ul>

<script>
  const li = document.querySelector('li')
  console.log(li.parentNode)
  // <ul>...</ul>
</script>
```

## nodeName

`nodeName` 方法可获取元素的标签名

```html
<ul class="list"></ul>

<script>
  const ul = document.querySelector('ul')
  console.log(ul.nodeName) // UL
</script>
```

## nodeValue

`nodeValue` 方法可获取元素的节点值

```html
<button>按钮点击</button>
<script>
  console.log(document.querySelector('button').childNodes[0].nodeValue) // 按钮点击
</script>
```

## firstChild

`firstChild` 方法可获取子节点的第一个节点

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const c = document.querySelector('ul').childNodes[0]
  const f = document.querySelector('ul').firstChild
  console.log(c === f) // true
</script>
```

> firstChild 就是简化了 childNodes[0] 的写法

## lastChild

`lastChild` 方法可获取子节点的最后一个节点

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const c = ul.childNodes[ul.childNodes.length - 1]
  const l = ul.lastChild
  console.log(c === l)
</script>
```

> lastChild 就是简化了 ul.childNodes[ul.childNodes.length - 1] 的写法

## previousSibling

`previousSibling` 方法可获取子节点之前的一个相邻兄弟节点

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const c = ul.childNodes[ul.childNodes.length - 2] // 这里 -2 之后获取的是倒数第二个节点
  const l = ul.lastChild.previousSibling // 获取最后一个的前一个节点
  console.log(c === l) // true
</script>
```

## nextSibling

`nextSibling` 方法可获取子节点下一个的相邻兄弟节点

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const c = ul.childNodes[1] // 获取第二个节点
  const l = ul.firstChild.nextSibling // 获取第二个的下一个节点
  console.log(c === l)
</script>
```

如果获取最后一个节点的下一个节点则返回 null
获取第一个节点的上一个节点返回的也是 null

```js
const ul = document.querySelector('ul')
console.log(ul.lastChild.nextSibling)
console.log(ul.firstChild.previousSibling)
```

下面是一个综合上述方法的关系代码，想把 `class="red"` 的标签背景色改为红色

```html
<ul>
  <li>1</li>
  <li>
    <ol>
      <li>1</li>
      <li>2</li>
      <li class="red">3红色</li>
      <li>4</li>
    </ol>
  </li>
  <li>3</li>
</ul>

<script>
  document.querySelector(
    'ul'
  ).lastChild.previousSibling.previousSibling.previousSibling.lastChild.previousSibling.lastChild.previousSibling.previousSibling.previousSibling.style.backgroundColor =
    'red'
</script>
```

## hasChildNodes()

`hasChildNodes()` 方法可检测一个节点是否存在子节点，返回 `true` 说明存在一个或多个子结点，`false` 则没有子节点

```html
<ul>
  <li></li>
  <li>哈哈</li>
</ul>
<script>
  console.log(document.querySelector('ul').hasChildNodes()) // true
  console.log(document.querySelector('.a').hasChildNodes()) // false
  console.log(document.querySelector('.b').hasChildNodes()) // true
</script>
```

> 有一个空格也会返回 true

## appendChild()

`appendChild()` 可以在 `childNodes` 列表结尾插入节点

```html
<ul>
  <li>1</li>
  <li>2</li>
</ul>
<script>
  const LI = document.createElement('li')
  LI.innerHTML = '我是插入者'
  document.querySelector('ul').appendChild(LI)
</script>
```

## insertBefore()

`insertBefore()` 可以在 `childNodes` 列表指定位置插入节点

它可接收两个参数，第一个是插入的节点，第二个是插入的位置，如果第二个参数不传，则和 `appendChild()` 效果一致

```html
<ul>
  <li>1</li>
  <li>2</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const LI = document.createElement('li')
  LI.innerHTML = '我是插入者'
  ul.insertBefore(LI, ul.childNodes[2]) // 插入第二个位置
</script>
```

## replaceChild()

因为 `appendChild()` 和 `insertBefore()` 都是插入节点不会替换节点
所以 `replaceChild()` 方法可以替换指定位置的节点
接收两个参数，第一个是插入的节点，第二个是替换的位置

```html
<ul>
  <li>1</li>
  <li>2</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  const LI = document.createElement('li')
  LI.innerHTML = '我是插入者'
  ul.replaceChild(LI, ul.childNodes[1]) // 替换第一个节点
</script>
```

## removeChild()

`removeChild()` 方法移除一个节点元素

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  ul.removeChild(ul.lastChild.previousSibling)
</script>
```

## cloneNode()

`removeChild()` 方法克隆一个节点元素，接收一个布尔值，表示是否深度克隆子元素

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  const ul = document.querySelector('ul')
  ul.appendChild(ul.cloneNode(true)) // 深度克隆

  console.log(ul.cloneNode(true).childNodes.length) // 8
  console.log(ul.cloneNode(false).childNodes.length) // 0
</script>
```

## document 类型

## document.documentElement

获取 `html`

```js
console.log(document.documentElement)
```

## document.doctype

获取 `<!DOCTYPE html>` 的引用

```js
console.log(document.doctype) // <!DOCTYPE html>
```

## document.URL

获取页面完整的 `URL`

```js
console.log(document.URL)
```

## document.domain

获取域名

```js
console.log(document.domain)
```

## document.referrer

获取来源

```js
console.log(document.referrer)
```

## document.getElementsByTagName()

获取元素集合，下面获取所有的 `div`

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<script>
  console.log(document.getElementsByTagName('div')) // HTMLCollection(5) [div, div, div, div, div]
</script>
```

> 也可以像数组一样操作它，但它并不是数组

## document.getElementsByName()

获取指定 `name` 的集合

```html
<div name="title"></div>
<div name="title"></div>
<div name="title"></div>
<script>
  console.log(document.getElementsByName('title')) // NodeList(3) [div, div, div]
</script>
```

## document.createElement()

`document.createElement()` 方法可以创建一个元素，接受一个参数为标签名

```js
document.createElement('div') // 创建一个 div
```

## document.createTextNode()

`document.createTextNode()` 方法可以创建一个文本节点

```html
<div id="app"></div>
<script>
  const text = document.createTextNode('这是一段文字')
  document.getElementById('app').appendChild(text)
</script>
```

## document.createComment()

`document.createComment()` 方法可以创建一个注释
但是在开发中基本不会使用

```js
document.body.appendChild(document.createComment('这是一段注释'))
```

## document.getElementsByClassName()

`document.getElementsByClassName()` 方法接收一个参数，即包含一个或者多个类名的字符串

```html
<div class="red box">1</div>
<div class="box red">2</div>
<script>
  console.log(document.getElementsByClassName('red box'))
</script>
```

> 因为两元素都包含 red 和 box 属性，所以获取两个，类名无视顺序

## document.readyState()

判断文档是否加载完成，可以有两个可能值

- loading 表示文档正在加载
- complete 文档加载完成

例如下面：

```html
<button onclick="ok()">点击</button>
<script>
  console.log(document.readyState) // loading

  function ok() {
    console.log(document.readyState) // complete
  }
</script>
```

## document.compatMode

检测浏览器使用什么渲染模式，可以有两个可能值

- CSS1Compat 标准模式
- backCompat 混杂模式

## document.characterSet

获取文档使用的字符集

```js
console.log(document.characterSet) // UTF-8
```

## getAttribute()

`getAttribute()` 方法可获取一个元素的属性值

```html
<div id="app"></div>
<script>
  console.log(document.getElementById('app').getAttribute('id')) // app
</script>
```

> 该方法仅可有一个参数

## setAttribute()

`setAttribute()` 方法可设置一个元素的属性值，接收两个参数，第一个是要设置的属性，第二个是设置的属性值

```html
<div id="app"></div>
<script>
  document.getElementById('app').setAttribute('class', 'box')
</script>
```

通过简写的方式也可以进行修改

```html
<div id="app"></div>
<script>
  document.getElementById('app').id = 'box'
</script>
```

> 注意：简写方式仅仅可以修改属性，并不能添加不存在的属性

## removeAttribute()

`setAttribute()` 方法可删除一个元素的属性值，不是仅仅清楚属性值，而是将属性和属性值全部清除

```html
<div id="app" class="box"></div>
<script>
  document.getElementById('app').removeAttribute('class')
</script>
```

## attributes

`attributes` 包含一个 `NamedNodeMap` 对象，包含元素的每一个属性

```html
<div id="app" class="box"></div>
<script>
  console.log(document.getElementById('app').attributes)
</script>
```

**返回结果**

```js
NamedNodeMap {
  0: id
  1: class
  class: class
  id: id
  length: 2
  [[Prototype]]: NamedNodeMap
}
```

通过 `attributes` 就可以像下面方式修改属性了

```html
<div id="app" class="box"></div>
<script>
  console.log(document.getElementById('app').attributes.id.nodeValue) // 获取 id

  document.getElementById('app').attributes.class.nodeValue = 'newClass' // 修改 class
</script>
```

> 每个节点中的 nodeValue 记录着对应的属性值

## attributes.removeNamedItem()

`attributes.removeNamedItem()` 方法和 `removeAttribute()` 类似，都是可以删除一个属性值，只不过 `attributes.removeNamedItem()` 是删除属性的 `NamedNodeMap` 对象中的属性

```html
<div id="app" class="box"></div>
<script>
  document.getElementById('app').attributes.removeNamedItem('class')
</script>
```

> `attributes.removeNamedItem()` 方法和 `removeAttribute()` 实际的效果是一样的，就是换了不同的方式表现而已，大多数都会使用 `removeAttribute()`、`setAttribute()` 和 `getAttribute()`

## namedItem()

`namedItem()` 方法返回具有指定 `id` 或 `name` 的元素，只返回一个元素，`id` 优先级大于 `name`

```html
<div name="title"></div>
<div id="title"></div>

<script>
  console.log(document.getElementsByTagName('div').namedItem('title')) // <div id="title"></div>
</script>
```

> namedItem() 方法仅会返回一项

## childElementCount

`childElementCount` 方法可获取子节点的数量

```html
<div id="app">
  <p>1</p>
  <p>2</p>
</div>
<script>
  console.log(document.getElementById('app').childElementCount) // 2
</script>
```

## firstElementChild

`firstElementChild` 方法可获取一个元素第一个子元素，类似 [firstChild](https://tianyuhao.cn/blog/javascript/js-methods.html#firstchild)

```html
<div id="app">
  <p>1</p>
  <p>2</p>
</div>
<script>
  console.log(document.getElementById('app').firstElementChild) // <p>1</p>
</script>
```

## lastElementChild

`lastElementChild` 方法可获取一个元素第一个子元素，类似 [lastChild](https://tianyuhao.cn/blog/javascript/js-methods.html#lastchild)

```html
<div id="app">
  <p>1</p>
  <p>2</p>
</div>
<script>
  console.log(document.getElementById('app').lastElementChild) // <p>2</p>
</script>
```

## previousElementSibling

`previousElementSibling` 方法指向前一个同胞兄弟节点

```html
<p class="p1">1</p>
<p class="p2">2</p>
<script>
  console.log(document.querySelector('.p2').previousElementSibling)
  // <p class="p1">1</p>
</script>
```

## nextElementSibling

`nextElementSibling` 方法指向后一个同胞兄弟节点

```html
<p class="p1">1</p>
<p class="p2">2</p>
<script>
  console.log(document.querySelector('.p1').nextElementSibling)
  // <p class="p2">2</p>
</script>
```

## classList

操作元素的类名，可以通过 `className` 来删除、替换。但是 `className` 是一个字符串，所以每次操作都需要重新设置才能生效，即使改变部分字符串也是一样，比如下面 `div` 有三个类名。想要删除一个，就得先把 `className` 拆开，删除不想要的那个，再设置回去，比如：

```html
<div id="app" class="box admin user"></div>
<script>
  const app = document.getElementById('app')
  const classNames = app.className.split(/\s+/)
  classNames.splice(1, 1)
  app.className = classNames.join(' ')

  // <div id="app" class="box user"></div>
</script>
```

那么在 **HTML5** 中新增了更方便的方式

```html
<div id="app" class="box"></div>
```

**add** 向类名列表中添加指定类名

```js
document.getElementById('app').classList.add('admin')
```

**contains** 检测一个类名是否存在 返回布尔值

```js
console.log(document.getElementById('app').classList.contains('box')) // true
```

**remove** 删除指定类名

```js
document.getElementById('app').classList.remove('box')
```

**toggle** 如果类名列表中存在 value 则删除，否则添加

```js
document.getElementById('app').classList.toggle('box2')
```

## outerHTML 和 innerHTML

`outerHTML` 和 `innerHTML` 方法都可以获取到一个元素的及所有后代元素的 HTML 字符串

```html
<div id="app">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</div>
<script>
  console.log(document.getElementById('app').outerHTML)
  console.log(document.getElementById('app').innerHTML)
</script>
```

**打印结果**

```
<div id="app">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</div>

<div id="app">
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</div>
```

## insertAdjacentHTML() 和 insertAdjacentText()

`insertAdjacentHTML()` 和 `insertAdjacentText()` 方法都是用作插入标记，`insertAdjacentHTML()` 为插入 HTML 标记，`insertAdjacentText()` 为插入文本标记，它们都会接收两个参数，第一个参数必须是下列值中的一个

- beforebegin：元素自身的前面
- afterbegin：插入元素内部的第一个子节点之前
- beforeend：插入元素内部的最后一个子节点之后
- afterend：元素自身的后面

第二个参数为插入的标记内容

```html
<div id="app">Hello</div>
<script>
  const app = document.getElementById('app')
  app.insertAdjacentHTML('beforebegin', '<h1>你好</h1>')
  app.insertAdjacentText('afterbegin', '哈哈哈哈')
  app.insertAdjacentText('beforeend', '后面的')
</script>
```

## textContent

获取一个元素的文本内容，也可以修改文本内容

```html
<div id="app">hello</div>
<script>
  const app = document.querySelector('#app')
  console.log(app.textContent) // hello
  app.textContent = 'hello world'
  console.log(app.textContent) // hello world
</script>
```


---
./javascript/es-module.md
---
# ESModule

## 以下代码相当于什么
```js
export { default as Navbar } from './Navbar'
export { default as Sidebar } from './Sidebar'
export { default as AppMain } from './AppMain'
```
上面的代码相当于:
```js
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import AppMain from './AppMain';

export {
  Navbar,
  Sidebar,
  AppMain
};
```

---
./javascript/event-loop.md
---
# 事件循环

## 浏览器的进程模型

### 何为进程？

程序运行需要有它自己专属的内存空间，可以把这块内存空间简单的理解为进程

![](./images/1.jpg)

每个应用至少有一个进程，进程之间相互独立，即使要通信，也需要双方同意。

### 何为线程？

有了进程后，就可以运行程序的代码了。

运行代码的「人」称之为「线程」。

一个进程至少有一个线程，所以在进程开启后会自动创建一个线程来运行代码，该线程称之为主线程。

如果程序需要同时执行多块代码，主线程就会启动更多的线程来执行代码，所以一个进程中可以包含多个线程。

![](./images/2.jpg)

### 浏览器有哪些进程和线程？

**浏览器是一个多进程多线程的应用程序**

浏览器内部工作极其复杂。

为了避免相互影响，为了减少连环崩溃的几率，当启动浏览器后，它会自动启动多个进程。

![](./images/3.jpg)

> 可以在浏览器的任务管理器中查看当前的所有进程

其中，最主要的进程有：

1. 浏览器进程

   主要负责界面显示、用户交互、子进程管理等。浏览器进程内部会启动多个线程处理不同的任务。

2. 网络进程

   负责加载网络资源。网络进程内部会启动多个线程来处理不同的网络任务。

3. **渲染进程**（本节课重点讲解的进程）

   渲染进程启动后，会开启一个**渲染主线程**，主线程负责执行 HTML、CSS、JS 代码。

   默认情况下，浏览器会为每个标签页开启一个新的渲染进程，以保证不同的标签页之间不相互影响。

   > 将来该默认模式可能会有所改变，有兴趣的同学可参见[chrome 官方说明文档](https://chromium.googlesource.com/chromium/src/+/main/docs/process_model_and_site_isolation.md#Modes-and-Availability)

## 渲染主线程是如何工作的？

渲染主线程是浏览器中最繁忙的线程，需要它处理的任务包括但不限于：

- 解析 HTML
- 解析 CSS
- 计算样式
- 布局
- 处理图层
- 每秒把页面画 60 次
- 执行全局 JS 代码
- 执行事件处理函数
- 执行计时器的回调函数
- ......

> 思考题：为什么渲染进程不适用多个线程来处理这些事情？

要处理这么多的任务，主线程遇到了一个前所未有的难题：如何调度任务？

比如：

- 我正在执行一个 JS 函数，执行到一半的时候用户点击了按钮，我该立即去执行点击事件的处理函数吗？
- 我正在执行一个 JS 函数，执行到一半的时候某个计时器到达了时间，我该立即去执行它的回调吗？
- 浏览器进程通知我“用户点击了按钮”，与此同时，某个计时器也到达了时间，我应该处理哪一个呢？
- ......

渲染主线程想出了一个绝妙的主意来处理这个问题：排队

![](./images/4.jpg)

1. 在最开始的时候，渲染主线程会进入一个无限循环
2. 每一次循环会检查消息队列中是否有任务存在。如果有，就取出第一个任务执行，执行完一个后进入下一次循环；如果没有，则进入休眠状态。
3. 其他所有线程（包括其他进程的线程）可以随时向消息队列添加任务。新任务会加到消息队列的末尾。在添加新任务时，如果主线程是休眠状态，则会将其唤醒以继续循环拿取任务

这样一来，就可以让每个任务有条不紊的、持续的进行下去了。

**整个过程，被称之为事件循环（消息循环）**

## 若干解释

### 何为异步？

代码在执行过程中，会遇到一些无法立即处理的任务，比如：

- 计时完成后需要执行的任务 —— `setTimeout`、`setInterval`
- 网络通信完成后需要执行的任务 -- `XHR`、`Fetch`
- 用户操作后需要执行的任务 -- `addEventListener`

如果让渲染主线程等待这些任务的时机达到，就会导致主线程长期处于「阻塞」的状态，从而导致浏览器「卡死」

![](./images/5.jpg)

**渲染主线程承担着极其重要的工作，无论如何都不能阻塞！**

因此，浏览器选择**异步**来解决这个问题

![](./images/6.jpg)

使用异步的方式，**渲染主线程永不阻塞**

### 面试题：如何理解 JS 的异步？

JS 是一门单线程的语言，这是因为它运行在浏览器的渲染主线程中，而渲染主线程只有一个。

而渲染主线程承担着诸多的工作，渲染页面、执行 JS 都在其中运行。

如果使用同步的方式，就极有可能导致主线程产生阻塞，从而导致消息队列中的很多其他任务无法得到执行。这样一来，一方面会导致繁忙的主线程白白的消耗时间，另一方面导致页面无法及时更新，给用户造成卡死现象。

所以浏览器采用异步的方式来避免。具体做法是当某些任务发生时，比如计时器、网络、事件监听，主线程将任务交给其他线程去处理，自身立即结束任务的执行，转而执行后续代码。当其他线程完成时，将事先传递的回调函数包装成任务，加入到消息队列的末尾排队，等待主线程调度执行。

在这种异步模式下，浏览器永不阻塞，从而最大限度的保证了单线程的流畅运行。

### JS 为何会阻碍渲染？

先看代码

```html
<h1>Mr.Yuan is awesome!</h1>
<button>change</button>
<script>
  var h1 = document.querySelector('h1')
  var btn = document.querySelector('button')

  // 死循环指定的时间
  function delay(duration) {
    var start = Date.now()
    while (Date.now() - start < duration) {}
  }

  btn.onclick = function () {
    h1.textContent = '哈哈哈'
    delay(3000)
  }
</script>
```

点击按钮后，会发生什么呢？

### 任务有优先级吗？

任务没有优先级，在消息队列中先进先出

但**消息队列是有优先级的**

根据 W3C 的最新解释:

- 每个任务都有一个任务类型，同一个类型的任务必须在一个队列，不同类型的任务可以分属于不同的队列。
  在一次事件循环中，浏览器可以根据实际情况从不同的队列中取出任务执行。
- 浏览器必须准备好一个微队列，微队列中的任务优先所有其他任务执行
  https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint

> 随着浏览器的复杂度急剧提升，W3C 不再使用宏队列的说法

在目前 chrome 的实现中，至少包含了下面的队列：

- 延时队列：用于存放计时器到达后的回调任务，优先级「中」
- 交互队列：用于存放用户操作后产生的事件处理任务，优先级「高」
- 微队列：用户存放需要最快执行的任务，优先级「最高」

> 添加任务到微队列的主要方式主要是使用 Promise、MutationObserver
>
> 例如：
>
> ```js
> // 立即把一个函数添加到微队列
> Promise.resolve().then(函数)
> ```

### 面试题：阐述一下 JS 的事件循环

事件循环又叫做消息循环，是浏览器渲染主线程的工作方式。

在 Chrome 的源码中，它开启一个不会结束的 for 循环，每次循环从消息队列中取出第一个任务执行，而其他线程只需要在合适的时候将任务加入到队列末尾即可。

过去把消息队列简单分为宏队列和微队列，这种说法目前已无法满足复杂的浏览器环境，取而代之的是一种更加灵活多变的处理方式。

根据 W3C 官方的解释，每个任务有不同的类型，同类型的任务必须在同一个队列，不同的任务可以属于不同的队列。不同任务队列有不同的优先级，在一次事件循环中，由浏览器自行决定取哪一个队列的任务。但浏览器必须有一个微队列，微队列的任务一定具有最高的优先级，必须优先调度执行。

### 面试题：JS 中的计时器能做到精确计时吗？为什么？

不行，因为：

1.  计算机硬件没有原子钟，无法做到精确计时
2.  操作系统的计时函数本身就有少量偏差，由于 JS 的计时器最终调用的是操作系统的函数，也就携带了这些偏差
3.  按照 W3C 的标准，浏览器实现计时器时，如果嵌套层级超过 5 层，则会带有 4 毫秒的最少时间，这样在计时时间少于 4 毫秒时又带来了偏差
4.  受事件循环的影响，计时器的回调函数只能在主线程空闲时运行，因此又带来了偏差


---
./javascript/fun-async.md
---
# 异步函数

## 什么是异步编程

js 是单线程语言，只能同时处理一个任务，如果请求的是后端，这个响应可能是几秒之后才响应，所以要先跳过这个任务，继续向下执行。必须等主进程全部执行完成之后再执行异步函数。就算主进程再慢，也要等主进程全部加载完成之后再加载。

下面是一个图片加载的异步例子

```js
function loadImage(url, load, error) {
  const image = new Image()
  image.src = url
  image.onload = load
  image.onerror = error
}

loadImage(
  './image/1.png',
  () => {
    console.log('加载成功')
  },
  () => {
    console.log('加载失败')
  }
)

console.log('ok')

// ok
// 加载成功
```

## Promise

`Promise` 是一个构造函数，可以通过 `new` 关键字来创建

```js
const p = new Promise()
```

`Promise` 有三种状态，分别是：**pending（等待态），fulfilled（成功态），rejected（失败态）**
那么怎么在三种状态中切换呢，如下

```js
const p1 = new Promise((resolve, reject) => {})
console.log(p1) // pending

const p2 = new Promise((resolve, reject) => {
  resolve()
})
console.log(p2) // pending -> fulfilled

const p3 = new Promise((resolve, reject) => {
  reject()
})
console.log(p3) // pending -> rejected
```

通过调用不同的函数可以改变 `Promise` 的状态

> pending 状态的 Promise 不会触发 then 和 catch 方法
> 成功状态会执行 then 里的草错，失败会执行 catch 里的操作

**成功**

```js
new Promise((resolve, reject) => {
  resolve()
}).then(
  (res) => {
    console.log('成功的处理程序')
  },
  (err) => {
    console.log('失败的处理程序')
  }
)

// 成功的处理程序
```

**失败**

```js
new Promise((resolve, reject) => {
  reject()
}).then(
  (res) => {
    console.log('成功的处理程序')
  },
  (err) => {
    console.log('失败的处理程序')
  }
)

// 失败的处理程序
```

但是除了成功和失败，还有一个 `finally` 的回调，是无论成功还是失败都会执行的

```js
new Promise((resolve, reject) => {
  resolve()
})
  .then((res) => {
    console.log('成功的处理程序')
  })
  .finally(() => {
    console.log('永远会执行')
  })

// 成功的处理程序
// 永远会执行
```

> promise 会生成微任务，相反的是宏任务，当全部添加到任务队列中的时候，先执行微任务

promise 的 `.then` 的回调函数中接收两个参数，分别是成功的处理函数和失败的处理函数

```js
new Promise((resolve, reject) => {
  resolve('成功了')
}).then(
  (value) => console.log(value),
  (reason) => console.log(reason)
)

// 成功了
```

`.catch` 可以统一处理错误信息，这样就避免每个 promise 都要写独立的错误处理程序了，直接使用 `catch` 统一处理，建议将 `catch` 放在最后。如果 promise 有独立的错误处理程序，那么将使用自己的处理程序执行。

```js
const p1 = new Promise((resolve, reject) => {
  console.log(a)
  resolve('成功了')
})
  .then((value) => {
    return new Promise((resolve, reject) => {
      resolve('ok')
    })
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

// ReferenceError: a is not defined
```

## 微任务宏任务概述

因为 js 是单线程语言，也就是说只有一个人来干活，所以不可能同时干多个事情，所以就会产生任务队列和优先级，任务队列一般分为三个，一个是**主任务**，优先级最大，其次是**微任务**，最后是**宏任务**

见下面代码

```js
setTimeout(() => {
  console.log('定时器')
}, 0)

new Promise(() => {
  console.log('promise')
})

Promise.resolve((res) => {
  console.log('resolve')
})

console.log('主线程')
```

打印结果是：

```
promise
主线程
resolve
定时器
```

因为 `setTimeout` 属于是宏任务，所以最后执行，`pending` 状态的 `Promise` 也是属于主任务，所以最先执行，`resolve` 状态的 `Promise` 属于是异步函数，它属于 `微任务`，所以要等主线执行完再执行，最后一段代码是主任务，因为它是第二个主任务，所以第二个执行。

## 定时器任务编排

使用 `setTimeout` 来举例，下面定义一个 4 毫秒后执行的定时器，但是它并不是真正的 4 毫秒之后就会执行，一定要等主线程执行完毕之后再执行

```js
setTimeout(() => console.log('哈哈'), 4)

for (let i = 0; i < 10000; i++) {
  console.log('1')
}
console.log('循环结束')
```

## DOM 渲染任务

如果我们将外部引入的 `*.js` 文件全部放在 dom 渲染之前进行加载，那么载入的时候就需要先将引入的文件全部加载完成之后再进行渲染 dom，那么就会产生加载白屏的状态，所以需要将外部加载的模块放在 dom 渲染之后加载

**反例**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script src="./js/1.js"></script>
  </head>

  <body>
    <h1>hello</h1>
  </body>
</html>
```

**推荐的**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>

  <body>
    <h1>hello</h1>
    <script src="./js/1.js"></script>
  </body>
</html>
```

## 进度条例子

```html
<style>
  #sel {
    height: 20px;
    background-color: green;
  }
</style>

<div id="sel"></div>
<script>
  function handle() {
    let i = 0
    ;(function run() {
      sel.innerHTML = i
      sel.style.width = i + '%'
      if (++i <= 100) {
        setTimeout(run, 20)
      }
    })()
  }

  handle()
</script>
```

## Promise 微任务处理复杂业务

```js
async function load(num) {
  const res = await Promise.resolve().then((_) => {
    let count = 0
    for (let i = 0; i < num; i++) {
      count += num--
    }
    return count
  })
  console.log(res)
}
load(987654321)
console.log('主任务不要被影响')
```

## 微任务和宏任务的执行顺序

```js
setTimeout(() => {
  console.log('你好')
}, 0)

console.log('ok')

// ok
// 你好
```

上面代码中，js 只要碰到了 `setTimeout` 就要先将其添加到任务队列中去（这是一个宏任务），需要等同步代码执行完成之后再进行执行。

再比如下面代码

```js
// setTimeout 为宏任务，直接添加到任务队列中
setTimeout(() => {
  console.log('4')
}, 0)

new Promise((resolve) => {
  console.log('1') // 第一个主线任务，第一个执行
  resolve() // 返回成功通知，执行 then 的回调函数
}).then((res) => {
  console.log('2') // promise 是微任务，也添加到任务队列中
})

console.log('3') // 第二个主线任务，第二个执行

// 1
// 3
// 2
// 4
```

所以程序的执行顺序是：**主线任务 > 微任务 > 宏任务**

## 使用 Promise

**动态加载图片**

```js
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      resolve(image)
    }
    image.onerror = reject
    document.body.appendChild(image)
  })
}

loadImage('./image/1.png').then((img) => {
  img.style.border = `2px solid black`
})
```

**定时器**

```js
function timeout(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

timeout(2000)
  .then(() => {
    console.log('你好')
    return timeout(2000)
  })
  .then(() => {
    console.log('哈哈哈')
  })
```

## Promise.resolve()

`Promise.resolve()` 默认是成功状态，直接返回成功状态

```js
Promise.resolve('成功状态').then((res) => {
  console.log(res)
})
```

它的实际应用在哪里呢？比如我我们想要反复请求一个数据，但是我们希望的是不要每次都发送请求，我们可以走本地的缓存进行处理，减少请求次数

```js
function query() {
  if (query.user) {
    console.log('走了缓存数据')
    return Promise.resolve(query.user) // 直接返回成功状态的 promise
  }
  return axios(
    'https://infinitymcn.com/citi/citi-form-backend/public/index.php/index/Votetfourth/getVoteRes'
  ).then((res) => {
    query.user = res
    console.log('没走缓存数据')
    return res
  })
}

query().then((res) => {
  console.log(res)
})

setTimeout(() => {
  query().then((res) => {
    console.log(res)
  })

  query().then((res) => {
    console.log(res)
  })

  query().then((res) => {
    console.log(res)
  })

  query().then((res) => {
    console.log(res)
  })
}, 1000)
```

这样就只有第一次请求是通过访问后端接口，剩下的都是通过返回的本地缓存进行的，可以增加响应速度。

## Promise.reject()

`Promise.reject()` 默认是失败状态，直接返回失败状态

该方法可以在执行成功之后，遇到错误进行给 `catch` 中进行反馈，例如下面

```js
new Promise((resolve, reject) => {
  resolve(200) // 执行成功操作 传递参数为 成功了
})
  .then((res) => {
    // 成功操作会进入这里
    // 那么在成功之后可以再进行判断，如果不是我们想要的值
    // 就可以返回 Promise.reject 来让 catch 进行处理
    if (res !== 201) {
      return Promise.reject('参数不是201')
    }
  })
  .catch((error) => {
    console.log(error) // 参数不是201
  })
```

## Promise.all()

`Promise.all()` 可以处理多个 `Promise`，如果有一个返回的是失败状态，那么 `Promise.all()` 返回的就是失败状态，当所有的返回都是成功状态，那么 `Promise.all()` 返回的则是成功状态

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第一个异步函数')
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第二个异步函数')
  }, 1000)
})

Promise.all([p1, p2]).then((res) => {
  console.log(res) // (2) ['第一个异步函数', '第二个异步函数']
})
```

`Promise.all()` 也可以统一处理错误信息

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('第一个异步函数失败了')
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第二个异步函数')
  }, 1000)
})

Promise.all([p1, p2])
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err) // 第一个异步函数失败了
  })
```

## Promise.allSettled()

`Promise.allSettled()` 可以处理多个 `Promise`，但是无论 `Promise` 的状态是成功还是失败，它都是已经解决的状态

```js
const p1 = new Promise((resolve, reject) => {
  reject('no')
})

const p2 = new Promise((resolve, reject) => {
  resolve('ok')
})

Promise.allSettled([p1, p2]).then((res) => {
  console.log(res)
})
```

## Promise.race()

`Promise.race()` 方法可以获取多个 `Promise` 但是它最终只会获取到一个，取得获取最快的一个

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第一个')
  }, 2000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('第二个')
  }, 1000)
})

Promise.race([p1, p2]).then((res) => {
  console.log(res) // 第二个
})
```

> Promise.race() 方法可以用在后端请求超时处理

## Promise.finally()

`Promise.finally()` 方法可以返回一个新的 `Promise` 实例

```js
const p1 = new Promise(() => {})
const p2 = p1.finally()
console.log(p2) // Promise {<pending>}
console.log(p1 === p2) // false
```

## Promise 异步捕获错误

通常情况下，同步代码使用 `try catch` 来进行捕获错误

```js
try {
  throw new Error('foo')
} catch (error) {
  console.log(error) // Error: foo
}
```

上面代码可以精准的捕获错误

但是在 `Promise` 中，情况就会不一样了

```js
try {
  Promise.reject(new Error('bar'))
} catch (error) {
  console.log(error)
}

// Uncaught (in promise) Error: bar
```

但是在 `Promise` 中，错误就不能正确的捕获了，而是浏览器通知了错误信息。为什么会这样呢？因为同步代码可以使用 `try catch` 来进行捕获，而 `Promise` 必须通过异步模式来进行捕获错误，所以可以更改为

```js
try {
  Promise.reject(new Error('bar')).catch((err) => console.log(err)) //Error: bar
} catch (error) {
  console.log(error)
}
```

这样既可正确的捕获错误

## async 函数

`async` 函数是 `Promise` 的语法糖，返回值是 `Promise`，同样可以使用 `.then` 来接收

```js
async function load() {
  return '你好啊'
}

console.log(load()) // Promise {<fulfilled>: '你好啊'}

load().then((res) => console.log(res)) // 你好啊
```

或者直接返回 `Promise` 也可以

```js
async function load2() {
  return new Promise((resolve) => {
    resolve('哈哈哈')
  })
}

load2().then((res) => console.log(res)) // 哈哈哈
```

例子

```js
async function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

async function show() {
  for (const user of ['张三', '李四']) {
    await sleep(1000)
    console.log(user)
  }
}

show()
```

## async 捕获错误

使用 `async` 函数之后，也是可以捕获错误的，因为 `async` 返回的也是 `promise`

```js
async function fun() {
  console.log(a)
}

fun().catch((err) => {
  console.log(err) // ReferenceError: a is not defined
})
```

## await 捕获错误流程

可以使用 `try catch` 来捕获 `await` 中的错误

```js
async function fun(name) {
  try {
    const admin = await `${name}的年龄是${age}`
    return admin
  } catch (error) {
    console.log(error)
  }
}

fun('张同学') // ReferenceError: age is not defined
```

正确的语法如下

```js
async function fun(name, age) {
  try {
    const admin = await `${name}的年龄是${age}`
    return admin
  } catch (error) {
    console.log(error)
  }
}

fun('张同学', 18).then((res) => {
  console.log(res)
})
```

## await 并行执行

`Promise` 不是并行执行的，`Promise` 必须等上一个 `Promise` 执行完成之后再执行，见下面例子

```js
function p1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('第一个函数')
    }, 2000)
  })
}

function p2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('第二个函数')
    }, 2000)
  })
}

async function load() {
  const res1 = await p1()
  console.log(res1) // 两秒后执行 第一个函数
  const res2 = await p2()
  console.log(res2) // 再等两秒后（4秒后）执行 第二个函数
}
load()
```

但是现在我希望上面两个可以同时执行，那么写法为

```js
function p1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('第一个函数')
    }, 2000)
  })
}

function p2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('第二个函数')
    }, 2000)
  })
}

async function load() {
  const res1 = p1()
  const res2 = p2()
  const res1Val = await res1
  const res2Val = await res2
  console.log(res1Val)
  console.log(res2Val)
}
load()
```

或者也可以使用 `Promise.all()` 方法

```js
function p1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('第一个函数')
    }, 2000)
  })
}

function p2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('第二个函数')
    }, 2000)
  })
}

async function load() {
  const res = await Promise.all([p1(), p2()])
  console.log(res)
}
load()
```

> 第一种方式写的是原理，第二种方式才是务实的方法

## 手写 Promise

```js
class myPromise {
  // 定义 promise 的三种状态
  // 因为值是固定的 所以定义为静态属性
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  /**
   * @param { object } executor 回调函数
   * 因为 promise 就只会接收到一个参数，就是一个函数
   * 那么 executor 就是传入 promise 的那个函数
   * 然后 executor 函数还会接受到两个参数 一个 resolve，一个 reject
   */
  constructor(executor) {
    this.status = myPromise.PENDING // 默认为准备状态
    this.value = null // 获取到的值
    this.callbacks = [] // 存放将来要执行的函数

    /**
     * 为什么使用 try catch？
     * 因为在执行 promise 的内部，可能会产生错误
     * 所以一旦尝试错误就直接调用拒绝函数 reject
     */
    try {
      /**
       * 这里需要将 this 指向改变
       * 这里将 executor 的两个参数传递过去
       * 因为参数还是两个函数 所以这里是一类方法进行传递
       */
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }

  /**
   * 成功状态
   * @param {*} value 得到的值
   * 当写了：new myPromise((resolve, reject) => resolve('成功了吗'))
   * 的时候，就调用了 resolve 函数，传递的参数是 '成功了吗'
   * 所以这里的 value 就会接收到这个参数
   */
  resolve(value) {
    // promise 状态一旦生成就不能改变
    if (this.status === myPromise.PENDING) {
      this.status = myPromise.FULFILLED // 改变状态
      this.value = value // 改变值

      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onResolve(value)
        })
      })
    }
  }

  /**
   * 拒绝状态
   * @param {*} reason 拒绝的因素
   */
  reject(reason) {
    if (this.status === myPromise.PENDING) {
      this.status = myPromise.REJECTED // 改变状态
      this.value = reason // 改变值

      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onReject(reason)
        })
      })
    }
  }

  /**
   * .then 方法
   * @param { function } onResolve 捕获成功
   * @param { function } obReject 捕获拒绝
   */
  then(onResolve, onReject) {
    if (typeof onResolve !== 'function') {
      // 直接返回 value，解决穿透效果
      onResolve = () => this.value
    }

    if (typeof onReject !== 'function') {
      onReject = () => this.value
    }

    /**
     * 为了 promise 可以使用链式操作
     * 这里直接返回一个新的 promise ，类似递归
     */
    const promise = new myPromise((resolve, reject) => {
      // 成功状态
      if (this.status === myPromise.FULFILLED) {
        /**
         * 为什么使用 try catch？
         * 因为有可能函数传递的是未定义的参数
         * 为什么使用 setTimeout？
         * 因为 promise 中 .then() 并不是同步执行
         * 需要等主进程执行完成之后再执行
         */
        setTimeout(() => {
          this.parse(promise, onResolve(this.value), resolve, reject)
        })
      }

      // 拒绝状态
      if (this.status === myPromise.REJECTED) {
        setTimeout(() => {
          this.parse(promise, onReject(this.value), resolve, reject)
        })
      }

      // 等待状态
      if (this.status === myPromise.PENDING) {
        // 如果在 promise 中出现定时器，就先将函数放到数组中
        this.callbacks.push({
          onResolve: (value) => {
            this.parse(promise, onResolve(value), resolve, reject)
          },
          onReject: (value) => {
            this.parse(promise, onReject(value), resolve, reject)
          }
        })
      }
    })

    return promise
  }

  /**
   * 代码封装
   * @param { function } promise 返回的 promise
   * @param { function } result 结果
   * @param { function } resolve 成功状态函数
   * @param { function } reject 拒绝状态函数
   */
  parse(promise, result, resolve, reject) {
    if (promise === result) {
      throw new TypeError('Chaining cycle detected')
    }
    try {
      /**
       * 如果返回的是普通类型的值，下一个 .then 可以直接接到
       * 那么如果返回的是一个 promise 的话，就需要做区分
       */
      if (result instanceof myPromise) {
        // promise
        result.then(resolve, reject)
      } else {
        // 普通对象
        resolve(result) // 成功状态返回的 promise 是成功状态
      }
    } catch (error) {
      reject(error)
    }
  }

  /**
   * promise.resolve 方法
   * @param {*} value 值
   */
  static resolve(value) {
    return new myPromise((resolve, reject) => {
      if (value instanceof myPromise) {
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    })
  }

  /**
   * promise.reject 方法
   * @param {*} value 值
   */
  static reject(value) {
    return new myPromise((resolve, reject) => {
      reject(value)
    })
  }

  /**
   * promise.all 方法
   * @param { array } promises promise 的集合
   */
  static all(promises) {
    const values = []
    return new myPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(
          (value) => {
            values.push(value)
            if (values.length === promises.length) {
              resolve(values)
            }
          },
          (reason) => reject(reason)
        )
      })
    })
  }

  /**
   * promise.race 方法
   * 谁快就打印谁
   * @param { array } promises promise 的集合
   */
  static race(promises) {
    return new myPromise((resolve, reject) => {
      promises.map((promise) => {
        promise.then(
          (value) => resolve(value),
          (reason) => reject(reason)
        )
      })
    })
  }
}
```


---
./javascript/fun-class.md
---
# 类

## 创建类

通过 `constructor` 属性接受传递的参数进行赋值

```js
class User {
  constructor(name) {
    this.name = name
  }
}

const user = new User('张同学')
console.log(user)
// User {name: '张同学'}
```

也可以直接在类中赋值，也可以添加对象的属性

```js
class User {
  age = 38
  constructor(name) {
    this.name = name
  }
}

const user = new User('张同学')
console.log(user)
// User {age: 38, name: '张同学'}
```

可以通过在类中定义方法来改变某些数据，或者通过函数获取数据

```js
class User {
  age = 38
  constructor(name) {
    this.name = name
  }
  changeName(newName) {
    this.name = newName
  }
  sayName() {
    return this.name
  }
}

const user = new User('张同学')
user.changeName('田同学')
console.log(user.sayName())
```

## 静态属性

先来看一下构造函数的静态属性

```js
function User(url) {
  this.url = url
}

const user = new User('https://123.com')
// 给构造函数创建静态属性，会保留在原型中
User.newUrl = 'https://baidu.com'

console.dir(user)
```

打印结果

```shell
User
  url: "https://123.com"
  [[Prototype]]: Object
    constructor: ƒ User(url)
      newUrl: "https://baidu.com"
      arguments: null
      caller: null
      length: 1
      name: "User"
      prototype: {constructor: ƒ}
      [[FunctionLocation]]: 2.html:14
      [[Prototype]]: ƒ ()
      [[Scopes]]: Scopes[2]
    [[Prototype]]: Object
```

那么在类中定义静态属性仅需要关键字 `static` 就可以实现了

```js
class User {
  static url = 'https://www.baidu.com'
  api() {
    return `${User.url}/sayName`
  }
}

const user = new User()
console.log(user.api()) // https://www.baidu.com/sayName
```

如果一个属性是为所有对象共用的，不是为某一个对象来使用的，这时候就可以将其定义为静态属性，这样也会节省内存的占用，仅仅只会保存一份，定义到类里面

## 静态方法

引入函数也是对象，所以构造函数可以通过下面放方式定义静态方法

```js
function User() {}

User.sayName = function () {
  console.log('我是静态方法')
}

User.sayName('张三')
```

上面定义静态方法之后，就必须使用函数调用 `sayName` 方法，就不能使用 `new` 出来的对象进行调用了。

当然也可以定义到原型上

```js
function User() {}

User.__proto__.sayName = function () {
  console.log('我是静态方法')
}

User.sayName('张三')
console.dir(User)
```

那么里面的 `this` 指向的也是当前的对象

```js
function User() {}

User.__proto__.sayName = function () {
  console.log(this === User) // true
  console.log(this === User.prototype.constructor) // true
}

User.sayName('张三')
```

接下来是在类中定义静态方法

```js
class User {
  sayName() {
    console.log('你好')
  }
}

User.__proto__.sayName = function () {
  console.log('我在原型上')
}

console.dir(User)
```

上面代码中，看似在类中定义了两个函数名一样的函数，可是这两个函数却是没有任何关系的，因为第一个在类中定义的函数，只要在 `new` 出来的对象中才可以使用，而后者是类的静态方法。

上述打印结果：

```shell
class User
  length: 0
  name: "User"
  prototype:
    constructor: class User
    sayName: ƒ sayName()
    [[Prototype]]: Object
  arguments: (...)
  caller: (...)
  [[FunctionLocation]]: 1.html:13
  [[Prototype]]: ƒ ()
  [[Scopes]]: Scopes[2]
```

打印的 `sayName` 实际上是函数的静态方法，下面分别打印一下

```js
class User {
  sayName() {
    console.log('你好')
  }
}

User.__proto__.sayName = function () {
  console.log('我在原型上')
}

User.sayName() // 我在原型上

const user = new User()
user.sayName() // 你好
```

了解上述关系之后，那么就可以直接使用类的语法糖的形式进行定义了，需要通过关键字 `static` 来定义静态方法

```js
class User {
  sayName() {
    console.log('你好')
  }
  static sayName() {
    console.log('hello')
  }
}

User.sayName() // hello
new User().sayName() // 你好
```

下面是通过调用静态方法创建出构造函数的例子

```js
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  static create(...args) {
    // 这里是 this 指向的就是当前对象
    // 所以可以 new this 创建构造函数
    return new this(...args)
  }
}

// 通过调用静态方法创建出构造函数
const user = User.create('张三', 19)
console.log(user)
```

## 访问器

在正常对象中，对象中的属性我们是可以随意设置和更改的，但是有些时候并不希望某些值被设置了不可控的值，比如：

```js
const user = {
  name: '张同学',
  age: 12
}

user.age = 19999
console.log(user) // {name: '张同学', age: 19999}
```

所以就需要加以限制，需要在对象中新建两个获取函数，分别使用 `set` 和 `get` 声明，那么每次获取和修改都会经过这里，来进行判断

```js
const user = {
  data: {
    name: '张同学',
    age: 12
  },
  set age(val) {
    if (typeof val !== 'number' || val < 1 || val > 100) {
      throw new Error('年龄格式错误')
    }
    this.data.age = val
  },
  get age() {
    return this.data.age
  }
}
```

**批量设置属性**

```js
const user = {
  name: '张同学',
  age: 12,
  set info(val) {
    ;[this.name, this.age] = val.split(',')
  }
}

user.info = '小明,14'
console.log(user)
```

**利用访问器设置 token**

```js
const request = {
  set setToken(val) {
    localStorage.setItem('token', val)
  },
  get getToken() {
    return localStorage.getItem('token')
  }
}

request.setToken = '12121dadasdada'
console.log(request.getToken)
```

访问器的作用是限制用户对对象中的值进行随意的更改，简单的方式是通过函数来修改属性值

```js
class User {
  constructor() {
    this.name = '李四'
  }
  // 通过 setName 函数来修改属性值
  setName(name) {
    // 限制逻辑
    if (typeof name !== 'string') {
      throw new Error('参数错误')
    }
    // 通过才可以进行修改
    this.name = name
  }
}

const user = new User()
user.setName('张三') // 通过函数修改
```

但是通过函数的方法修改也会有一个问题，就是像下面修改的方式进行修改属性，还是可以进行随意修改的

```js
class User {
  constructor() {
    this.name = '李四'
  }
  // 通过 setName 函数来修改属性值
  setName(name) {
    // 限制逻辑
    if (typeof name !== 'string') {
      throw new Error('参数错误')
    }
    // 通过才可以进行修改
    this.name = name
  }
}

const user = new User()
user.setName('张三') // 通过函数修改
user.name = 123
console.log(user)
// User {name: 123}
```

所以为了代码的健壮而又优雅一下，可以使用访问器来对其有效限制

访问器通过关键字 `set` 和 `get` 来针对修改和获取来进行限制处理，例如下面

```js
class User {
  constructor() {
    this._name = '李四'
  }
  // 通过 setName 函数来修改属性值
  set name(name) {
    // 限制逻辑
    if (typeof name !== 'string') {
      throw new Error('参数错误')
    }
    // 通过才可以进行修改
    this._name = name
  }
}

const user = new User()
user.name = '张三'
```

或者定义定义一个对象来存储数据

```js
class User {
  constructor(age) {
    this.data = {
      age
    }
  }
  // 通过 setName 函数来修改属性值
  set name(name) {
    // 限制逻辑
    if (typeof name !== 'string') {
      throw new Error('参数错误')
    }
    // 通过才可以进行修改
    this.data.name = name
  }
  // 访问器返回用户所有的信息
  get name() {
    return `${this.data.name}今年${this.data.age}岁`
  }
}

const user = new User(18)
user.name = '张三'
console.log(user.name)
```

## 属性的保护

正常的构造函数创建出来的对象都不是进行属性保护的，在外部都可以随意的进行修改，这些属性被称之为 `非保护属性`，例如下面

```js
class User {
  constructor(age) {
    this.age = age
  }
}

const user = new User(18)
user.age = 12313
console.log(user)
// User {age: 12313}
```

**通过命名保护**

```js
class User {
  _url = 'www.baidu.com'
  constructor(name) {
    this.name = name
  }
  set url(url) {
    if (typeof url !== 'string') {
      throw new Error('参数错误')
    }
    this._url = url
  }
}

const user = new User('张三')
user.url = 123
```

但是上述方式在外部依然可以通过使用 `user._url` 进行修改，所以我们接下来将进行更严格的保护，在外部是修改不了的

## 私有属性

通过在属性名前面加入 `#` 来设定私有属性

```js
class User {
  // 定义私有属性
  #url = 'www.baidu.com'
}

const user = new User()
console.log(user)
```

## 私有方法

同样，使用 `#` 可以定义私有方法

```js
class User {
  #url = 'www.baidu.com'
  #sayName() {
    console.log('你好')
  }
}

const user = new User()
user.#sayName()
```

这样调用私有属性的话会爆出错误

```shell
Uncaught SyntaxError: Private field '#sayName' must be declared in an enclosing class

必须在封闭类中声明私有字段 #sayName
```

私有属性必须是在类的内部调用才可以，例如下面，通过定义一个非私有的函数，让它去调用私有函数是可以正常工作的

```js
class User {
  #url = 'www.baidu.com'
  #sayName() {
    console.log('你好')
  }
  changeSayName() {
    this.#sayName()
  }
}

const user = new User()
user.changeSayName() // 你好
```

## 类继承

现回顾一下之前的构造函数的继承

```js
function User(name) {
  this.name = name
}
function Admin(name) {
  User.call(this, name)
}

Admin.prototype = Object.create(User.prototype)
const admin = new Admin('张三')
console.dir(admin)
```

打印结果为

```shell
Admin {name: '张三'}
  name: "张三"
    [[Prototype]]: User
      [[Prototype]]: Object
      constructor: ƒ User(name)
      [[Prototype]]: Object
```

类的继承使用 `extend` 关键字进行继承

```js
class User {}
class Admin extends User {}
console.dir(new Admin())
```

打印结果

```shell
Admin
  [[Prototype]]: User
    constructor: class Admin
    [[Prototype]]: Object
```

那么在类中调用父类的构造函数传递参数的写法就需要使用 `super` 关键字进行调用父类的构造函数，完整写法为

```js
class User {
  constructor(name) {
    this.name = name
  }
}

class Admin extends User {
  constructor(name) {
    super(name)
  }
}

console.dir(new Admin('张三'))
```

打印结果

```shell
Admin
  name: "张三"
  [[Prototype]]: User
    constructor: class Admin
    [[Prototype]]: Object
```

> 注意，在类中继承必须在父类中使用 `super()` 调用子类，否则会提示警告报错

```js
class User {
  say() {
    console.log('hello')
  }
}

class Admin extends User {
  constructor(name) {
    super() // 这里必须要调用！！！
    this.name = name
  }
}

const admin = new Admin('张三')
admin.say() // hello
```

> 类和原型继承的原理是完全一样的，所以 class 类的性质，只不过是将之前的构造函数形式转换成了一个简写的形式。

## super()

super 可以访问父级类

```js
class User {
  show() {
    console.log('user.show')
  }
}

class Admin extends User {
  show() {
    super.show()
    console.log('Admin.show')
  }
}

// super 可以访问父级类
const admin = new Admin()
admin.show()

// user.show
// Admin.show
```

下面简单的来写一个 `super()` 的实现原理

首先，使用两个对象来模拟继承的实现

```js
const obj1 = {
  name: '张三',
  sayName() {
    console.log('我是张三')
  }
}

const obj2 = {
  __proto__: obj1, // 让 obj2 的原型是 obj1 实现继承
  name: '李四',
  sayName() {
    console.log('我是李四')
  }
}

console.dir(obj2)
```

如果父级想使用原型上继承的方法，那么就可以使用 `this.__proto__.xxxx` 来调用，如下

```js
const obj1 = {
  name: '张三',
  sayName() {
    // 当父级调用 sayName 的时候，这里的 this 指向的是当前对象 所以 name 就是 张三
    console.log(this.name)
  }
}

const obj2 = {
  __proto__: obj1,
  name: '李四',
  say() {
    // 这里调用 say 方法，我希望使用原型上 obj1 的方法
    this.__proto__.sayName()
  }
}

obj2.say()
```

但是上面的问题就是：在 say 中调用原型方法，但是返回的却是原型对象上的属性，这显然是不对的，所以还需要进一步使用 `call` 关键字来进行更改 `this` 指向，并将当前对象传递过去

```js
const obj1 = {
  name: '张三',
  sayName() {}
}

const obj2 = {
  __proto__: obj1,
  name: '李四',
  say() {
    this.__proto__.sayName.call(this)
  }
}

obj2.say()
```

所以这也就大概实现了 `super()` 的原理实现

视频教程地址：[super 原理分析](https://www.bilibili.com/video/BV1NJ411W7wh?p=246)

> 在父类的构造函数中必须调用 super()，并且 this 必须在 super 之后使用


---
./javascript/fun-prototype.md
---
# 面向对象编程

## 深拷贝

### 1. 使用 JSON.parse(JSON.stringify(obj))
缺点:  
1. 函数无法序列化函数，属性值为函数的属性转换之后丢失
2. 日期 Date 对象转换到 JSON 对象之后无法反解析为原对象类型，解析后的值仍然是 JSON 格式的字符串
3. 正则 RegExp 对象序列化后为一个普通的 javascript 对象
4. undefined 序列化之后直接被过滤掉
5. NaN 序列化之后为 null

### 2. 使用递归
```js
function deepClone(obj) {
  const objClone = Array.isArray(obj) ? [] : {};
  
  if (obj == null || typeof obj !== 'object') {
    return
  }

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] && typeof obj[key] === "object") {
        objClone[key] = deepClone(obj[key]);
      } else {
        objClone[key] = obj[key];
      }
    }
  }
  return objClone;
}
```
注意: 以上递归方法对日期和正则属性进行解析后仍然是普通的 js 空对象, 想要解决上述问题可以使用 lodash 的 cloneDeep 方法

## 原型和原型链

### 了解原型

对象和函数都是有原型的

**对象**

```js
const user = {}
console.dir(user)
```

打印结果，其中 `[[Prototype]]` 就是对象的原型

```shell
Object
  [[Prototype]]: Object
```

想要获取到对象的原型可以使用 `__porto__` 来获取到

```js
const user = {}
console.dir(user.__proto__)
```

打印结果：

```shell
Object
  constructor: ƒ Object()
  hasOwnProperty: ƒ hasOwnProperty()
  isPrototypeOf: ƒ isPrototypeOf()
  propertyIsEnumerable: ƒ propertyIsEnumerable()
  toLocaleString: ƒ toLocaleString()
  toString: ƒ toString()
  valueOf: ƒ valueOf()
  __defineGetter__: ƒ __defineGetter__()
  __defineSetter__: ƒ __defineSetter__()
  __lookupGetter__: ƒ __lookupGetter__()
  __lookupSetter__: ƒ __lookupSetter__()
  __proto__: null
  get __proto__: ƒ __proto__()
  set __proto__: ƒ __proto__()
```

**函数**

```js
function User() {} // 创建构造函数
console.dir(User)
```

打印结果，

```shell
ƒ User()
  arguments: null
  caller: null
  length: 0
  name: "User"
  prototype: {constructor: ƒ}
  [[FunctionLocation]]: 1.html:14
  [[Prototype]]: ƒ ()
  [[Scopes]]: Scopes[2]
```

函数是有两个原型的，一个 `prototype` 一个 `[[Prototype]]`，函数自带的方法，如 apply、bind 等方法都存在于 `[[Prototype]]` 上面

想要获取到函数的原型可以使用 `__porto__` 和 `prototype` 来获取到

```js
function User() {}
console.dir(User.__proto__)
console.dir(User.prototype)
```

`__proto__` 打印结果 ：

```shell
ƒ anonymous()
  apply: ƒ apply()
  arguments: (...)
  bind: ƒ bind()
  call: ƒ call()
  caller: (...)
  constructor: ƒ Function()
  length: 0
  name: ""
  toString: ƒ toString()
  Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()
  get arguments: ƒ ()
  set arguments: ƒ ()
  get caller: ƒ ()
  set caller: ƒ ()
  [[FunctionLocation]]: ​
  [[Prototype]]: Object
  [[Scopes]]: Scopes[0]
```

`prototype` 打印结果：

```shell
Object
  constructor: ƒ User()
  [[Prototype]]: Object
```

> 注意：由于浏览器更新原因，在浏览器中打印的是 `Prototype` 和 `[[Prototype]]`。想要获取 `Prototype` 可以直接使用 `xxx.prototype` 获取，但是获取 `[[Prototype]]` 并不能使用 `xxx.[[Prototype]]` 获取，而是使用 `xxx.__proto__` 获取，在新版的 Chrome、Firefox、Edge 等浏览器中均可适用。
> 虽然 `__proto__` 可以正常获取到原型，但是规范建议使用 `Object.getPrototypeOf()` 方法获取为优

### 原型共享

比如下面例子中，首先创建一个构造函数 `User`，让在 `User` 的原型(prototype)上添加一个 `say` 方法，那么在构造函数创建的对象上同样可以使用

```js
function User() {}

User.prototype.say = function () {
  console.log('这是 say 方法')
}

const obj = new User()

obj.say() // 这是 say 方法
```

那么这是为什么呢？

下面分别来打印出 `User` 的 `prototype` 和 `obj` 的 `[[prototype]]`

```js
console.dir(User.prototype)
console.dir(obj.__proto__)
```

**User**

```shell
Object
  say: ƒ ()
  constructor: ƒ User()
  [[Prototype]]: Object
```

**obj**

```shell
Object
  say: ƒ ()
  constructor: ƒ User()
  [[Prototype]]: Object
```

看上去是一样的，可以测试一下是否真的一样：

```js
console.log(User.prototype === obj.__proto__) // true
console.log(User.prototype === Object.getPrototypeOf(obj)) // true
```

使用两种方式来判断，结果都为 `true`

由此得出结论：**函数上的 prototype 原型和构造函数对象的原型是共享的一个原型**

详情见下图

<!-- <img src="/javascript/prototype_1.jpg" alt="image"  /> -->

### 顶级原型

上面知道了：**函数上的 prototype 原型和构造函数对象的原型是共享的一个原型**，那么构造函数上面的原型是什么呢？

下面例子中，先早 `Object` 上定义了一个 `say` 方法，之后又创建了一个构造函数 `User`，接下来打印 `User`

接下来依次打开 `User/prototype/[[Prototype]]`

```shell
ƒ User()
  arguments: null
  caller: null
  length: 0
  name: "User"
  prototype: {constructor: ƒ}
    constructor: ƒ User()
    [[Prototype]]: Object
      say: ƒ ()
      constructor: ƒ Object()
      hasOwnProperty: ƒ hasOwnProperty()
      isPrototypeOf: ƒ isPrototypeOf()
      propertyIsEnumerable: ƒ propertyIsEnumerable()
      toLocaleString: ƒ toLocaleString()
      toString: ƒ toString()
      valueOf: ƒ valueOf()
      __defineGetter__: ƒ __defineGetter__()
      __defineSetter__: ƒ __defineSetter__()
      __lookupGetter__: ƒ __lookupGetter__()
      __lookupSetter__: ƒ __lookupSetter__()
      __proto__: (...)
      get __proto__: ƒ __proto__()
      set __proto__: ƒ __proto__()
  [[FunctionLocation]]: 1.html:21
  [[Prototype]]: ƒ ()
  [[Scopes]]: Scopes[1]
```

打开后发现，构造函数 `prototype` 的原型中的原型 `[[prototype]]` 中存在由 `Object` 上定义的 `say` 方法

那么就进行检测一下：

```js
console.log(User.prototype.__proto__ === Object.prototype) // true
console.log(Object.getPrototypeOf(User.prototype) === Object.prototype) // true
```

结果是：**构造函数上的 prototype 中 `[[prototype]]` 的原型和对象的 prototype 原型是共享的一个原型**

所以 `Object` 就是原型链的顶级原型了

详情见下图

<!-- <img src="/javascript/prototype_2.jpg" alt="image"  /> -->

所以：

```js
const arr = []
console.log(Object.getPrototypeOf(arr) === Array.prototype) // true

const str = ''
console.log(Object.getPrototypeOf(str) === String.prototype) // true

const bool = true
console.log(Object.getPrototypeOf(bool) === Boolean.prototype) // true

const num = 123
console.log(Object.getPrototypeOf(num) === Number.prototype) // true

const reg = /123/
console.log(Object.getPrototypeOf(reg) === RegExp.prototype) // true
```

### 设置原型

比如下面有两个对象：我想把 `obj1` 原型的父级改为 `obj2`，那么就可以使用 `Object.setPrototypeOf()` 方法进行改变，接收两个参数，一个是需要改变的对象，和指定父级的对象

```js
const obj1 = { name: 'obj1' }
const obj2 = { name: 'obj2' }
Object.setPrototypeOf(obj1, obj2)
```

打印结果：

```shell
Object
  name: "obj1"
  [[Prototype]]: Object
    name: "obj2"
    [[Prototype]]: Object
    constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: ƒ isPrototypeOf()
    propertyIsEnumerable: ƒ propertyIsEnumerable()
    toLocaleString: ƒ toLocaleString()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
    __defineGetter__: ƒ __defineGetter__()
    __defineSetter__: ƒ __defineSetter__()
    __lookupGetter__: ƒ __lookupGetter__()
    __lookupSetter__: ƒ __lookupSetter__()
    __proto__: Object
    get __proto__: ƒ __proto__()
    set __proto__: ƒ __proto__()
```

那么这时候 `obj1` 的父级就是 `obj2` 了

### constructor 属性

```shell
ƒ User()
  arguments: null
  caller: null
  length: 0
  name: "User"
  prototype:
    constructor: ƒ User()
    [[Prototype]]: Object
  [[FunctionLocation]]: 1.html:14
  [[Prototype]]: ƒ ()
  [[Scopes]]: Scopes[1]
```

我们可以发现，构造函数的 `prototype` 原型中，不但有一个 `[[Prototype]]`，而且还有一个 `constructor` 属性，那么 `constructor` 其实指向的就是当前的构造函数，**因为原型就是一个对象，只要是对象就会有原型**，也就是说：不仅可以通过的 `prototype` 找到构造函数的原型，我也可以通过这个原型找到构造函数

那么也就是说：**构造函数原型的 constructor 属性指向的是当前构造函数**

```js
function User() {}

console.log(User.prototype.constructor === User) // true
```

那么就同样可以使用 `constructor` 再来创建一个构造函数

```js
function User(name) {
  this.name = name
}

const z = new User('张三')
const l = new User.prototype.constructor('李四')

console.log(z) // User {name: '张三'}
console.log(l) // User {name: '李四'}
```

### 原型添加多个方法

如果想在原型上添加多个属性和方法，可以使用下面方式：

```js
function User() {}

User.prototype.name = '张同学'
User.prototype.age = 38
User.prototype.sayName = function () {
  console.log(this.name)
}
```

但是这样的代码不免有些冗余，所以可以使用对象的方式进行添加

```js
function User() {}

User.prototype = {
  name: '张同学',
  age: 38,
  sayName() {
    console.log(this.name)
  }
}

console.dir(User)
```

> 但是这样加完之后打开原型会发现一个问题，就是 `constructor` 不见了，所以如果在使用 `new User.prototype.constructor()` 就会报错了

```shell
ƒ User()
  arguments: null
  caller: null
  length: 0
  name: "User"
  prototype:
    age: 38
    name: "张同学"
    sayName: ƒ sayName()
    [[Prototype]]: Object
  [[FunctionLocation]]: 1.html:25
  [[Prototype]]: ƒ ()
  [[Scopes]]: Scopes[1]
```

所以我们希望的是，就是改变的原型，也可以通过原型上的 `constructor` 找到当前的构造函数，所以在使用对象往原型上添加属性的时候，一定要记得将 `constructor: User` 添加上去，接下来的 `new User.prototype.constructor()` 才可以正常工作

```js
function User(name) {
  this.name = name
}

User.prototype = {
  constructor: User,
  name: '张同学',
  age: 38,
  sayName() {
    console.log(this.name)
  }
}

const l = new User.prototype.constructor('李四')
l.sayName() // 李四
Object.getPrototypeOf(l).sayName() // 张同学
```

所以新的原型链结构图如下：

<!-- <img src="/javascript/prototype_3.jpg" alt="image"  /> -->

## 继承

### 了解继承

继承是原型的继承，而不是改变构造函数

例如下面代码是错误的

```js
function User() {}

User.prototype.name = function () {
  console.log('name')
}

function Admin() {}

Admin.prototype = User.prototype
// 这样直接赋值原型之后
// 相当于 Admin 和 User 共用的是一个原型

const admin = new Admin()
admin.name()
```

举个例子：上面的反例中，直接将 `User` 的原型赋值给 `Admin` 之后，虽然是实现了伪继承，但是这样继承了之后自己本来的原型就不存在了，两个构造函数用的就是同一个原型了，这样就会造成函数覆盖等情况，我们期望的是自己的原型还是保留的，再继承。好比现实中继承财产，继承是将继承的财产和自己本来的财产加在一起，而不是只是得到了继承的财产，而自己的财产就消失了。

### 盗用构造函数继承

在子类构造函数中调用父类构造函数。因为毕竟函数就是在指定上下文中执行的代码最简单的对象，所以可以使用 `call` 或者 `apply` 方法以新创建的对象为上下文执行构造函数

```js
function User() {
  this.arr = [1, 2, 3, 4]
}

function Admin() {
  User.call(this) // 继承 User
}

const admin = new Admin()
admin.arr.push(5)

const admin2 = new Admin()

console.log(admin.arr) // (5) [1, 2, 3, 4, 5]
console.log(admin2.arr) // (4) [1, 2, 3, 4]
```

**传递参数**

相比使用原型链，盗用构造函数的优点就是：可以在子类构造函数中向父类构造函数传递参数

```js
function User(name) {
  this.name = name
}

function Admin(age) {
  User.call(this, '张三')
  this.age = age
}

const admin = new Admin(18)
console.dir(admin)
```

打印结果

```shell
Admin
  age: 18
  name: "张三"
  [[Prototype]]: Object
```

```
盗用构造函数的主要缺点，也是使用构造函数模式自定义类型的问题：必须在构造函数中定义方法，因此函数不能重用，此外，子类也不能访问父类原型上定义的方法，因此所有类型都只能通过使用构造函数模式。由于存在这些问题，盗用构造函数也不会单独使用。
```

### 组合继承

组合继承也叫伪经典继承，综合了原型链和[盗用构造](https://tianyuhao.cn/blog/javascript/js-function.html#%E7%9B%97%E7%94%A8%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%BB%A7%E6%89%BF)函数，将两者有点结合了起来。基本的思路就是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。这样可以把方法定义在原型上以实现重用，又可以让实例有自己的属性。

```js
function User(name) {
  this.name = name
  this.arr = [1, 2, 3]
}

User.prototype.sayName = function () {
  console.log(this.name)
}

function Admin(name, age) {
  // 继承实例属性
  User.call(this, name)
  this.age = age
}

Admin.prototype = new User() // 继承原型属性
Admin.prototype.sayAge = function () {
  console.log(this.age)
}

const admin1 = new Admin('张三', 12)
admin1.arr.push('张三')
console.log(admin1.arr) // (4) [1, 2, 3, '张三']
admin1.sayName() // 张三
admin1.sayAge() // 12

const admin2 = new Admin('李四', 22)
admin2.arr.push('李四')
console.log(admin2.arr) // (4) [1, 2, 3, '李四']
admin2.sayName() // 李四
admin2.sayAge() // 22
```

### 原型式继承

先给出一个函数

```js
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}
```

这个 `object` 函数会创建出一个临时的构造函数，将传入的对象赋值给构造函数的原型，然后返回这个临时的一个实例。本质上，`object` 是对传入的对象进行了一次浅复制，见下面例子

```js
const z = {
  name: '张三',
  friend: ['a', 'b']
}

const user1 = object(z)
user1.name = '李四'
user1.friend.push('c')

const user2 = object(z)
user2.name = '小明'
user2.friend.push('d')

console.log(z.friend) // (4) ['a', 'b', 'c', 'd']
```

这种原型式继承适用于以下情况：你有一个对象，想在它的基础上再创建一个对象，你需要先将这个对象传递给 `object` 函数，然后再对返回的对象进行修改。上面例子中也就意味这，`z.friend` 不仅仅是 `z` 的属性，也会和 `user1` 和 `user2` 共享。这里实际上是克隆的两个 `z`。

但是后来出现了 [Object.create()](https://tianyuhao.cn/blog/javascript/js-methods.html#object-create) 方法，将 `原型式继承` 的概念规范化了。

```js
const z = {
  name: '张三',
  friend: ['a', 'b']
}

const user1 = Object.create(z)
user1.name = '李四'
user1.friend.push('c')

const user2 = Object.create(z)
user2.name = '小明'
user2.friend.push('d')

console.log(z.friend) // (4) ['a', 'b', 'c', 'd']
```

### 寄生式继承

与原型式继承比较相似的一种继承叫 `寄生式继承`，`寄生式继承` 背后的思路类似于寄生构造函数和工厂模式：创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象，基本寄生模式如下：

```js
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function createAnother(param) {
  const clone = object(param)
  clone.sayHi = function () {
    console.log('hi')
  }
  return clone
}

const z = {
  name: '张三',
  arr: [1, 3, 4]
}

const res = createAnother(z)
res.sayHi() // hi
```

### 寄生式组合继承

[组合继承](https://tianyuhao.cn/blog/javascript/js-function.html#%E7%BB%84%E5%90%88%E7%BB%A7%E6%89%BF) 其实也存在效率问题，最主要的问题就是父类构造函数被调用了两次，一次是在创建子原型时调用，另一次是在子类构造函数中调用，例如下面：

```js
function User(name) {
  this.name = name
  this.color = ['red', 'blue', 'black']
}

User.prototype.sayName = function () {
  console.log(this.name)
}

function Admin(name, age) {
  // 调用 User，将 User 内部属性移到 Admin 内部
  User.call(this, name) // 第二次调用 User
  this.age = age
}

Admin.prototype = new User() // 第一次调用 User

// 继承之后会丢失 constructor 属性，所以将 constructor 设置会 Admin
Admin.prototype.constructor = Admin
Admin.prototype.sayAge = function () {
  console.log(this.age)
}

const admin = new Admin('张三', 20)

console.dir(Object.getPrototypeOf(admin).constructor === Admin) // true

console.dir(admin)
```

打印结果

```shell
Admin
  age: 20
  color: (3) ['red', 'blue', 'black']
  name: "张三"
  [[Prototype]]: User
    color: (3) ['red', 'blue', 'black']
    constructor: ƒ Admin(name, age)
    name: undefined
    sayAge: ƒ ()
    [[Prototype]]: Object
```

上面代码在执行 `User.call(this, name)` 的时候，会在 `Admin.prototype` 上新增两个属性 `name` 和 `color`。它们都是 `User` 实例，现在成为了 `Admin` 的原型属性。当调用 `Admin` 构造函数的时候，也会调用 `User` 构造函数，这一次在新对象上创建实例属性 `name` 和 `color`，但是这两属性会遮蔽原型的属性。

但是通过上面方式继承，就会有两组 `name` 和 `color` 属性，一组是在实例上，另一组在 `User` 的原型上。这就是调用 `User` 的结果。好在有版本解决这个问题。

寄生式组合继承通过盗用构造函数继承属性，但使用混合继承的原型继承方法。基本思路是不通过调用父类构造函数给子类原型赋值，而是取得父类原型的一个副本。基本模式如下：

```js
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

/**
 * @param { object } subclass 子类构造函数
 * @param { object } superclass 父类构造函数
 */
function inheritPrototype(subclass, superclass) {
  const prototype = object(superclass.prototype) // 创建对象
  prototype.constructor = subclass // 增强对象
  subclass.prototype = prototype // 赋值对象
}

function User(name) {
  this.name = name
  this.color = ['red', 'blue', 'black']
}

User.prototype.sayName = function () {
  console.log(this.name)
}

function Admin(name, age) {
  // 调用 User，将 User 内部属性移到 Admin 内部
  User.call(this, name) // 第二次调用 User
  this.age = age
}

inheritPrototype(Admin, User)

Admin.prototype.sayAge = function () {
  console.log(this.age)
}

const admin = new Admin('张三', 18)
console.dir(admin)
```

### 使用父类构造函数初始属性

这种方式可以在父类构造函数的原型中添加公共的属性，以免单独在每个构造函数中重复声明

```js
function User(name, age) {
  this.name = name
  this.age = age
}

function Admin(...params) {
  User.apply(this, params)
}

Admin.prototype = User.prototype.__proto__
Object.defineProperty(Admin.prototype, 'constructor', {
  value: Admin,
  enumerable: false
})

const admin = new Admin('张三', 18)
console.log(admin)

const admin2 = new admin.__proto__.constructor('李四', 2)
console.log(admin2)
```

**封装继承函数继承**

```js
// 继承函数
function extend(sub, sup) {
  sub.prototype = Object.create(sup.prototype)
  Object.defineProperty(sub.prototype, 'constructor', {
    value: sub,
    enumerable: false
  })
}

function User(name, age) {
  this.name = name
  this.age = age
}

User.prototype.sayName = function () {
  console.log(this.name)
}

function Admin(...params) {
  User.apply(this, params)
}

function Teacher(...params) {
  User.apply(this, params)
}

extend(Admin, User) // 调用函数继承
const admin = new Admin('张三', 18)
admin.sayName()

extend(Teacher, User) // 调用函数继承
const teacher = new Teacher('老师', 28)
teacher.sayName()
```

### 对象工厂继承

使用对象工厂也就是使用 `Object.create()` 来继承，这里推荐两种方式

**方式一**

```js
function User() {}
User.prototype.userName = function () {
  console.log('userName')
}

function Admin() {}
Admin.prototype.adminName = function () {
  console.log('adminName')
}

Admin.prototype.__proto__ = Object.create(User.prototype)
Admin.prototype.constructor = Admin

const admin = new Admin()

admin.userName() // userName
admin.adminName() // adminName
```

**方式二**

```js
function User(name, age) {
  this.name = name
  this.age = age
}

User.prototype.sayName = function () {
  console.log(this.name, this.age)
}

// 创建继承函数
function inherit(name, age) {
  const instance = Object.create(User.prototype) // 新建一个对象继承 User 的原型
  User.call(instance, name, age) // 将 instance 内部调用 User
  return instance // 返回继承好的对象
}

const admin = inherit('admin', 28)
const admin2 = inherit('admin2', 281)

console.log(admin2.__proto__ === admin.__proto__) // true
```


---
./javascript/function.md
---
# 函数

## 回调函数

回调函数是：在一个函数中，又调用了一个函数，叫回调函数

例如：

```html
<button id="btn">按钮</button>
<script>
  const btn = document.getElementById('btn')
  btn.addEventListener('click', () => {
    console.log('这是回调函数')
  })
</script>
```

比如这个点击事件，通过函数 `addEventListener` 定义点击事件，参数是传入的另一个函数，那么这样的函数就称之为回调函数。

还有就是数组常用的 `map` 方法等等：

```js
const res2 = list.map((item) => {
  item.age += 30
  return item
})
```

当出现类似下面这样的业务时候，一个回调函数里面又套了回调函数，请求时就是等这段代码结果产生之后再执行，那么这样回调套回调就会很麻烦了，不利于阅读，开发维护都麻烦

回调地狱就是下面的情况

```js
axios({
  method: '',
  url: ''
}).then((res) => {
  axios({
    method: '',
    url: ''
  }).then((res) => {
    axios({
      method: '',
      url: ''
    }).then((res) => {})
  })
})
```

## 递归函数

直接或间接调用自己函数本身

> 注：一定要有一个终止这个函数的处理，否则将出现死循环

```js
function fun1(n) {
  console.log(n)
  n--
  if (!n) {
    return
  }
  fun1(n)
}
```

## 立即执行函数

声明函数时，直接调用

```js
;(function () {
  console.log('我是立即执行函数！')
})()
```

那么立即执行函数用在哪里呢？

下面是有 5 个 li 标签，我们要实现的效果是：点击哪个就弹出哪个 li 的索引值

这是曾经使用立即执行函数的写法：

```html
<ul>
  <li>11111</li>
  <li>22222</li>
  <li>33333</li>
  <li>44444</li>
  <li>55555</li>
</ul>

<script>
  var li = document.querySelectorAll('li')

  for (var i = 0; i < li.length; i++) {
    li[i].onclick = (function (x) {
      return function () {
        alert(x)
      }
    })(i)
  }
</script>
```

因为但是还没有作用域的问题，当有了 `es6` 之后，一切就变得简单多了：

```html
<ul>
  <li>11111</li>
  <li>22222</li>
  <li>33333</li>
  <li>44444</li>
  <li>55555</li>
</ul>

<script>
  const btn = document.querySelector('button')
  for (let i = 0; i < 5; i++) {
    btn.onclick = function () {
      console.log(i)
    }
  }
</script>
```

> 直接换成 let 声明，就可以直接解决问题，也就直接可以省略了立即执行函数了

看过 jQuery 源码的人应该知道，jQuery 开篇用的就是立即执行函数。立即执行函数常用于第三方库，好处在于隔离作用域，任何一个第三方库都会存在大量的变量和函数，为了避免变量污染（命名冲突），开发者们想到的解决办法就是使用立即执行函数

1. 什么是立即执行函数

在了解立即执行函数之前先明确一下函数声明、函数表达式及匿名函数的形式，如下代码

```js
// 函数声明
function fun1 () {
  console.log('hello')
}

// 函数表达式
const fun2 = function () {
  console.log('hello')
}

// 匿名函数
function () {
  console.log('hello')
}
```

接下来看立即执行函数的两种常见形式：( function(){…} )()和( function (){…} () )，一个是一个匿名函数包裹在一个括号运算符中，后面再跟一个小括号，另一个是一个匿名函数后面跟一个小括号，然后整个包裹在一个括号运算符中，这两种写法是等价的。要想立即执行函数能做到立即执行，要注意两点，一是函数体后面要有小括号()，二是函数体必须是函数表达式而不能是函数声明。如下代码：

```js
// 输出 123 使用 () 运算符
;(function (text) {
  console.log(text)
})(123)

// 输出 123 使用 () 运算符
// (function (text) {
//   console.log(text)
// }(123))

// 输出 123 使用 ! 运算符
!(function (text) {
  console.log(text)
})(123) +
  // 输出 123 使用 + 运算符
  (function (text) {
    console.log(text)
  })(123) -
  // 输出 123 使用 - 运算符
  (function (text) {
    console.log(text)
  })(123)

// 输出 123 使用 = 运算符
const fun = (function (text) {
  console.log(text)
})(123)
```

上面可见，除了使用 `()` 运算符之外，`！，+，-，=`等运算符都能起到立即执行的作用。这些运算符的作用就是将匿名函数或函数声明转换为函数表达式

2. 使用立即执行函数的好处

通过定义一个匿名函数，创建了一个新的函数作用域，相当于创建了一个“私有”的命名空间，该命名空间的变量和方法，不会破坏污染全局的命名空间。此时若是想访问全局对象，将全局对象以参数形式传进去即可，如 jQuery 代码结构：

```js
;(function (window, undefined) {
  // code
})(window)
```

其中 window 即是全局对象。给其传入参数这样的好处是，可以缩短查询时的作用域链。作用域隔离非常重要，是一个 JS 框架必须支持的功能，jQuery 被应用在成千上万的 JavaScript 程序中，必须确保 jQuery 创建的变量不能和导入他的程序所使用的变量发生冲突。

**闭包和立即执行函数**

先看个例子

```js
const car = {
  age: 0,
  change() {
    this.age = 40
  },
  getAge() {
    return this.age
  }
}
car.change()
console.log(car.getAge()) // 40
```

这个对象有其成员变量`age`及成员函数`change`和`getAge`，但是它的成员变量没有私有化，同时它也没有办法被继承。要实现对象的继承，你可以使用构造函数和原型继承。但怎么才能将成员变量私有化来实现对象的封装呢（而且有时候我们也不想那么麻烦使用原型）？这里呢，或许我们就可以使用闭包函数

```js
function car() {
  let age = 0
  return {
    // 返回的是一个对象
    change() {
      age = 40
    },
    getAge() {
      return age
    }
  }
}

const car1 = car()
car1.change()
console.log(car1.getAge()) // 40
```

## 闭包函数

> 闭包定义

闭包就是能够读取其他函数内部变量的函数

例如：

```js
function fun1() {
  const num = 1
  function fun2() {
    return 10 + num
  }
  return fun2()
}
console.log(fun1())
```

闭包是指有权访问另⼀个函数作⽤域中变量的函数，创建闭包的最常⻅的⽅式就是在⼀个函数内创建另⼀个函数，通过另⼀个函数访问这个函数的局部变量,利⽤闭包可以突破作用域

> 闭包的特性

- 函数内再嵌套函数
- 内部函数可以引⽤外层的参数和变量
- 参数和变量不会被垃圾回收机制回收

> 垃圾回收机制是什么？

由于字符串、对象等没有固定的大小，js 程序在每次创建字符串、对象的时候，程序都会**分配内存来存储那个实体**

- 使用分配到的内存做点什么
- 不需要时将其释放回归

在不需要字符串、对象的时候，需要释放其所占用的内存，否则将会消耗完系统中所有可用的内存，造成系统崩溃，这就是**垃圾回收机制所存在的意义**

在 C 和 C++之类的语言中，需要手动来管理内存的，这也是造成许多不必要问题的根源。幸运的是，在编写 js 的过程中，内存的分配以及内存的回收完全实现了自动管理，我们不用操心这种事情

> 说说你对闭包的理解

- 使⽤闭包主要是为了设计私有的⽅法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增⼤内存使⽤量，使⽤不当很容易造成内存泄露。在 js 中，函数即闭包，只有函数才会产⽣作⽤域的概念

- 闭包 的最⼤⽤处有两个，⼀个是可以读取函数内部的变量，另⼀个就是让这些变量始终保持在内存中

- 闭包的另⼀个⽤处，是封装对象的私有属性和私有⽅法
- 好处：能够实现封装和缓存等
- 坏处：就是消耗内存、不正当使⽤会造成内存溢出的问题

> 使用闭包需要的注意点

- 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很⼤，所以不能滥⽤闭包，否则会造成⽹⻚的性能问题，在 IE 中可能导致内存泄露

- 解决⽅法是，在退出函数之前，将不使⽤的局部变量全部删除

## 普通函数和箭头函数

- 外形不同

> 箭头函数使用箭头定义，普通函数中没有

```js
// 普通函数
function fun1() {
  // code
}
// 箭头函数
let fun2 = () => {
  // code
}
```

- 箭头函数都是匿名函数

> 普通函数可以有匿名函数，也可以有具体名函数，但是箭头函数都是匿名函数

```js
// 具名函数
function fun1() {
  // code
}

// 匿名函数
let fun2 = function () {
  // code
}

// 箭头函数全都是匿名函数
let fun3 = () => {
  // code
}
```

- 箭头函数中的 this 指向不同

> 箭头函数的 this 永远指向其上下文的 this
>
> 普通函数的 this 指向调用它的那个对象

## arguments 参数

比如在做求和运算时，往往参数的数量是不确定的。那么 arguments 就可以解决这个问题

```js
function add() {
  console.log(arguments)
}
add(1, 54, 1, 5, 2, 654, 3, 42, 24)

// Arguments(9) [1, 54, 1, 5, 2, 654, 3, 42, 24, callee: ƒ, Symbol(Symbol.iterator): ƒ]
```

那么求和运算为：

```js
function add() {
  let res = 0
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i]
  }
  return res
}
console.log(add(1, 54, 1, 5, 2, 654, 3, 42, 24))

// 786
```

> 需要注意的是：arguments 并不是一个数组，如需要使用数组方法进行操作时，需要使用 ES6 展开运算符进行操作：

```js
function add() {
  console.log([...arguments])
}
add(1, 54, 1, 5, 2, 654, 3, 42, 24)

// (9) [1, 54, 1, 5, 2, 654, 3, 42, 24]
```

> 在箭头函数中，不能使用 arguments 关键字访问参数，只能通过命名的参数访问

**callee 属性**

arguments 内部还有一个 callee 属性，是一个指向 arguments 对象所在函数的指针，可以用在递归函数中：

```js
function fun1(n) {
  console.log(n)
  n--
  if (!n) {
    return
  }
  arguments.callee(n)
}
```

> 这样就意味着，函数不管叫什么名称，都可以通过 `arguments.callee()` 来调用当前函数

这个属性引用的是调用当前函数的函数，如果函数是在全局作用域下调用的，则返回 `null`

```js
function fun1() {
  fun2()
}
function fun2() {
  console.log(fun2.caller)
}
fun1() // ƒ fun1() { fun2() }

function fun3() {
  console.log(fun3.caller)
}

fun3() // null
```

也可以通过 `arguments.callee.caller` 获取相同的结果

```js
function fun1() {
  fun2()
}
function fun2() {
  console.log(arguments.callee.caller)
}
fun1() // ƒ fun1() { fun2() }
```

注：该方法在严格模式下不会工作！

## 数据收集

同样是在函数传递的参数不确定的情况下，上面介绍过了 函数的 `arguments ` 方法，下面再介绍一种收集数据的方法，使用的是 ES6 的扩展运算符写法：

```js
function fun(...item) {
  console.log(item)
}
fun(1, 2, 3, 4, 5, 6, 7)

// (7) [1, 2, 3, 4, 5, 6, 7]
```

> 参数使用 `...item` 来接收，会收集到所有的参数，表现形式为数组

## this 指向

全局输出和在函数中输出 this

```js
// 1、直接输出 this 指向的是全局对象
console.log(this) // window

// 2、在函数中输入 this
// 因为全局函数其实是 window (全局对象)的方法
function fun() {
  console.log(this) // window
}
// fun() 调用就等于 window.fun()
fun()

// 3、在方法中 this 指向的是这个方法的对象
const obj = {
  name: '小明',
  sayName() {
    console.log(this.name)
  }
}
obj.sayName() // 小明
```

事件输出 this

```html
<button>按钮</button>
<script>
  const btn = document.querySelector('button')
  btn.onclick = function () {
    console.log(this) // <button>按钮</button>
  }

  btn.onclick = () => {
    console.log(this) // window
  }

  btn.addEventListener('click', function () {
    console.log(this) // <button>按钮</button>
  })
</script>
```

构造函数中的 this

```js
// new 关键字做了什么？
// new 会创建出对象，将构造函数中的 this 指向创建出来的对象
function Fun() {
  this.name = '小明'
}

const res = new Fun()
console.log(res) // Fun {name: "小明"}
```

箭头函数和计时器中的 this

```js
const obj = {
  name: '小明',
  sayName() {
    console.log(this)
  }
}
obj.sayName() // {name: "小明", sayName: ƒ}
// 上面通过在对象中调用一个方法，输入 this 那么这个 this 打印的就是该对象

const obj2 = {
  name: '小明',
  sayName() {
    setTimeout(function () {
      console.log(this)
    })
  }
}
obj2.sayName() // window
// 如果是通过计时器输出的就是 window，计时器指向 window
// 因为计时器是一个全局的函数 然后里面的函数就是 window 调用的，所以输出 window

// 那么使用箭头函数就可以直接打印出这个对象本身了
const obj3 = {
  name: '小明',
  sayName() {
    setTimeout(() => {
      console.log(this)
    })
  }
}
obj3.sayName() // {name: "小明", sayName: ƒ}
```

1、普通函数，谁调用就指向谁，箭头函数在哪里定义就指向谁。

2、箭头函数外指向谁就指向谁。

3、箭头函数没有 this

this 指向分为很多种不同的情况，下面分别来说一下：

> 对象中的函数

在对象中的函数，this 指向的是当前的这个对象

```js
const obj = {
  name: '小明',
  change() {
    console.log(obj.name) // 小明
  }
}
obj.change()
```

上面例子，在对象中打印出 name 的值，可以通过 `obj.name` 来打印，但是有时候对象的名称可能是会变的，那么就可以通过 `this.name` 来获得 name 值，也可以实现同样的效果

```js
const obj = {
  name: '小明',
  change() {
    console.log(this.name) // 小明
  }
}
obj.change()
```

其实我们可以直接在对象中打印出 this ，就可以很直观的看到了，this 就是这个对象：

```js
const obj = {
  name: '小明',
  change() {
    console.log(this)
    // {name: "小明", change: ƒ}
  }
}
obj.change()
```

**还有一点要注意：**

因为当前的函数是对象中的一个属性，要是如果在对象的方法中（这里称之为对象中的函数为方法）再定义一个函数的话，我们会看到一个奇怪的现象：

```js
const obj = {
  name: '小明',
  change() {
    function fun1() {
      console.log(this) // window
    }
    fun1()
  }
}
obj.change()
```

如果在对象的方法中，再定义一个普通的函数，那么这个函数中的 this 指向的是 window

那么怎么可以在对象方法中的函数也指向的当前对象呢？

```js
const obj = {
  name: '小明',
  change() {
    // 在当前方法中 this 指向的是当前对象
    // 所以这里可以将 this 赋值为一个常量 给下面函数提供使用
    const this_ = this
    function fun1() {
      // 这里打印上方存储的 this 即可打印出当前对象
      console.log(this_)
    }
    fun1()
  }
}
obj.change()
```

那么有关上述方法，请见实例，想要在对象的数组中，给数组的每一项前面添加上 `title` 属性：

```js
const obj = {
  title: '学习',
  lists: ['js', 'css', 'vue'],
  change() {
    const this_ = this
    return this.lists.map((item) => {
      return `${this_.title}-${item}`
    })
  }
}
console.log(obj.change())

// (3) ["学习-js", "学习-css", "学习-vue"]
```

除了上面方法，也可以将 this 作为参数传入函数中，同样可以正常运行：

```js
const obj = {
  title: '学习',
  lists: ['js', 'css', 'vue'],
  change() {
    return this.lists.map((item) => {
      return `${this.title}-${item}`
    }, this)
  }
}
console.log(obj.change())
```

**注：将 this 作为参数传入方法，有些函数支持，有些不支持！**

> window 对象

当我们在直接打印 this 的时候，打印出来的其实是一个 js 中最大的对象 `window对象`

```js
console.log(this) // Window {window: Window, self: Window, document: document, name: "", location: Location, …}

// 其实直接打印 this 和直接打印 window 是一样的，可以通过比较来得出结论：
console.log(this === window) // true
```

所以得出结论，在定义的对象中，this 指向的是当前对象，要是在全局打印 this 就指向 window 对象。

我们定义的所有的全局变量，都会存储在 window 对象中，比如我们用 var 来定义一个变量：

```js
var aName = '张三'
console.log(window.aName)
// 张三
```

可以正常输出

其实我们可以打印出 window 来看一下，里面就有刚刚定义的 `aName`:

```shell
Window {window: Window, self: Window, document: document, name: "张三", location: Location, …}
aName: "张三"
```

> 箭头函数中的 this

那么还是上面的实例，那么如果使用箭头函数的话，this 指向的就是父级作用域下的 this，就和父级中的 this 是统一回事儿了：

所以上面的例子中，想要在对象的数组中，给数组的每一项前面添加上 `title` 属性，使用箭头函数的写法就变成了：

```js
const obj = {
  title: '学习',
  lists: ['js', 'css', 'vue'],
  change() {
    return this.lists.map((item) => {
      console.log(this)
      // {title: "学习", lists: Array(3), change: ƒ}
      return `${this.title}-${item}`
    })
  }
}
console.log(obj.change())

// (3) ["学习-js", "学习-css", "学习-vue"]
```

**总结就是：在箭头函数中的 this 指向的就是上下文，可以理解为就是父级作用域下的 this ，而普通函数指向的就是 window**

那么箭头函数在有些地方，也会发生一些细微的变化，比如在事件中：

```html
<button id="btn">按钮</button>

<script>
  const obj = {
    title: '这是标题',
    change() {
      const btn = document.getElementById('btn')
      btn.addEventListener('click', function () {
        console.log(this)
        // 这里的 this 指的是 <button id="btn">按钮</button> 这个标签
      })
    }
  }
  obj.change()
</script>
```

上面通过点击事件输出的 this 指向的是获取到的 buttom 标签，那么使用箭头函数：

```html
<button id="btn">按钮</button>

<script>
  const obj = {
    title: '这是标题',
    change() {
      const btn = document.getElementById('btn')
      btn.addEventListener('click', () => {
        console.log(this)
        // {title: "这是标题", change: ƒ}
      })
    }
  }
  obj.change()
</script>
```

使用箭头函数打印的就是当前的对象

- 那么现在有这样的一个问题

上述的方法，我想通过点击事件，既想要获得对象的 `title` 值，又想要获得按钮的文本值。那么这样有很矛盾了，因为使用普通函数的 this 指向的是按钮，使用箭头函数指向的是当前对象，一个 this 不能分为两个角色，那么这个问题怎么解决呢？请参考下面代码：

```html
<!--
  先说一下思路：
  使用普通函数中可以传递一个叫 event 的参
  那么 event.target 可以获取到按钮标签
  箭头函数的 this 指向的是当前的对象
  那么就可以使用这两个机制来完成我们的效果
 -->
<button id="btn">按钮</button>

<script>
  const obj = {
    title: '这是标题',
    change() {
      const btn = document.getElementById('btn')
      btn.addEventListener('click', (event) => {
        console.log(this) // {title: "这是标题", change: ƒ}
        console.log(event.target) // <button id="btn">按钮</button>
        console.log(this.title + event.target.innerHTML)
      })
    }
  }
  obj.change()
</script>
```

也可以使用先获取到 this 的方法：

```html
<button id="btn">按钮</button>

<script>
  const obj = {
    title: '这是标题',
    change() {
      const btn = document.getElementById('btn')
      const this_ = this
      btn.addEventListener('click', function () {
        console.log(this_.title + this.innerHTML)
      })
    }
  }
  obj.change()
</script>
```

总结一句话就是：

> 箭头函数中的 this 是指向的父级的 this 如果父级的 this 指向的是某个对象，那么箭头函数中的 this 就指向该对象，如果父级的 this 指向的 window 那么箭头函数指定的是也是 window

判断 this

1. 函数是否在 `new` 中调用的？如果是的话，那么 `this` 指向的就是新创建的对象。
2. 函数是否使用 `call`、`apply`、`bind` 进行显示绑定的？如果是的话，那么 `this` 指向的就是新创建的对象。
3. 函数是否在整个上下文对象中调用（隐式绑定）？如果是的话，`this` 绑定的就是那个上下文对象。
4. 如果都不是的话，就是使用默认绑定。在严格模式下，`this` 为 `undefined`，否则指向全局对象 `window`

## new.target

ES6 新增了检测函数是否使用 new 调用的 `new.target` 属性，如果函数是正常调用的，new.target 返回 undefined，如果使用 new 来调用的，则 new.target 将引用被调用的构造函数

```js
function fun1() {
  if (!new.target) {
    console.log('没有使用 new 调用')
    return
  }
  console.log('使用 new 调用')
}

fun1() // 没有使用 new 调用
new fun1() // 使用 new 调用
```

## 柯里化函数

柯里化（currying）

把多个参数的函数转换为接收单一参数的函数，并且返回值接收剩余参数并且返回结果的函数

例如：

```js
function fun2(x) {
  return function (y) {
    return x + y
  }
}
// 调用的方法和其他函数有所不同
console.log(fun2(10)(5))
```

> 柯里化函数好处：减少重复传递不变的部分参数

## call、apply、bind

**call**

`call` 是一个函数的方法，它可以调用函数

```js
function fun() {
  console.log('123')
}
fun.call() // 123
```

call 可以改变函数中 `this` 的指向

```js
// 这个是一个独立的函数 输出 this，很明显这个 this 指向的是 window
function fun() {
  console.log(this.name)
}

// 这里是一个独立的对象
const obj = {
  name: '小明'
}

// 那么就可以通过调用函数 再使用 call 把 obj 这个对象传递过去
// 就可以改变函数中 this 的指向
// 那么就打印出了小明
fun.call(obj) // 小明
```

```js
// 这里通过调用 dog 的方法，来输出 cat 的名字
const dog = {
  name: '旺财',
  sayName() {
    console.log(this.name)
  }
}

const cat = {
  name: '喵喵'
}

dog.sayName.call(cat)
```

`call` 的传参方法

```js
const dog = {
  name: '旺财',
  eat(food1, food2) {
    console.log(`我喜欢吃${food1}和${food2}`)
  }
}

const cat = {
  name: '喵喵'
}

// call 的第一个参数是传递指向的对象 后面的参数传递的是函数接收的参数
dog.eat.call(cat, '鱼', '骨头') // 我是喵喵喜欢吃鱼和骨头
```

**apply**

还是上面的例子

`call` 传递的参数是依次往后传递的，而 `apply` 参数的需要传递一个数组

```js
const dog = {
  name: '旺财',
  sayName() {
    console.log(this.name)
  },
  eat(food1, food2) {
    console.log(`我是${this.name}喜欢吃${food1}和${food2}`)
  }
}

const cat = {
  name: '喵喵'
}

dog.eat.apply(cat, ['鱼', '骨头']) // 我是喵喵喜欢吃鱼和骨头
```

**bind**

`call` 和 `apply` 会直接调用函数

`bind` 的传值方式和 `call` 是一样的，但是 `bind` 会将一个函数作为返回值返回出来

`bind` 的特点呢也就是可以多次调用了，剩下的和 `call` 用法完全一样

```js
const dog = {
  name: '旺财',
  sayName() {
    console.log(this.name)
  },
  eat(food1, food2) {
    console.log(`我是${this.name}喜欢吃${food1}和${food2}`)
  }
}

const cat = {
  name: '喵喵'
}

const res = dog.eat.bind(cat, '鱼', '骨头')
res()
```

可以直接手写一个 `bind` 函数，来帮我们了解其中的原理

```js
function bind(fn, obj) {
  return function () {
    fn.apply(obj, arguments)
  }
}

function foo() {
  console.log(this.name)
}

const obj = { name: '张三' }

bind(foo, obj)()
```


---
./javascript/generator.md
---
# 迭代器

## 说明

可以迭代对象可以使用 `Symbol.iterator` 作为键来查看是否可以进行迭代，这个在实际开发中并不常用。

```js
const num = 1
const arr = [1, 2, 34, 5, 5]

console.log(num[Symbol.iterator]) // undefined
console.log(arr[Symbol.iterator]) // ƒ values() { [native code] }

// 所以 num 是不可迭代的，arr 是可迭代的
```

**next()**

迭代器 API 使用 `next()` 方法可以在迭代器中遍历数据，每次成功调用 `next()` 都会返回一个 `IteratorResult` 对象，对象中有两个键值，其中 `value` 是当前迭代的值，`done` 是否完成迭代(布尔值)，`done` 为 `true` 时，表示当前迭代已经被耗尽，`value` 返回 `undefined`

```js
const arr = [1, 2, 34, 5, 5]

const arr_ = arr[Symbol.iterator]()

console.log(arr_.next()) // {value: 1, done: false}
console.log(arr_.next()) // {value: 2, done: false}
console.log(arr_.next()) // {value: 34, done: false}
console.log(arr_.next()) // {value: 5, done: false}
console.log(arr_.next()) // {value: 5, done: false}
console.log(arr_.next()) // {value: undefined, done: true}
```

# 生成器

## 打破完整运行

我们知道，函数在正常情况下，只有调用了，就要将函数内部所有的代码全部执行，但是想要打破这种原则，就需要的是：`生成器`

下面例子：

```js
let x = 1

// 创建生成器函数
// 带有 * 的函数
function* foo() {
  x++
  yield // 暂停关键字
  console.log('x:', x)
}
function bar() {
  x++
}
const it = foo() // 创建一个迭代器
it.next() // 执行迭代器（执行到底一个暂停之前）
console.log(x) // 2
bar() // 正常调用了 bar 函数
console.log(x) // 3
it.next() // 再次启动迭代器 x: 3
```

> 生成器是一种特殊的函数（带有 \* 号），可以一次或者多次暂停或启动。

## 输入和输出

生成器也是一种函数，所以正常的输入和输出都是可以的，只是语法方面会稍有变化

```js
function* fun(a, b) {
  return a + b
}

const it = fun(3, 4)
const res = it.next()
console.log(res.value) // 12
```

你可能想不到也可以这样

```js
function* fun(x) {
  let a = x * (yield)
  return a
}

const it = fun(10)
it.next() // 启动迭代器
const res = it.next(2) // 遇到了 yield，再次传入参数启动迭代器
console.log(res.value)
```


---
./javascript/interview.md
---
# JS 面试题

## 1. 什么是跨域请求? 你可以通过哪些方法解决跨域问题?

跨域请求是指在浏览器中，当一个网页尝试加载来自不同域名下的资源时会发生跨域请求。浏览器的同源策略会阻止跨域请求，以保护用户的安全。跨域请求可以通过以下几种方法解决： 
1. JSONP (JSON with Padding)：通过动态创建 `<script>` 标签来实现跨域请求，但只支持GET请求。 
2. CORS (Cross-Origin Resource Sharing)：服务端设置响应头中的 Access-Control-Allow-Origin 字段来允许跨域请求。 
3. 代理服务器：在同源的服务器端发起请求，然后再将数据传递给客户端，绕过浏览器的同源策略。 
4. WebSocket：通过WebSocket协议进行跨域通信。

- 在使用 vue 开发项目过程中, 可以在 `vue.config.js` 的 `devServer` 中配置 `proxy`, 此时的代理称为正向代理; 
- 正式环境中可以在 nginx 中配置代理, 此时的代理称为反向代理(比如有一个前端服务, 跑在 5000 端口, 一个后端服务, 跑在 3000 端口, 此时前端请求后端服务会造成跨域, 为了解决这个问题, 可以在 nginx 中配置代理, 添加一个 8000 服务作为中转, 如果路径以 / 开头, 则代理到 5000 端口, 如果路径以 /api 开头, 则代理到 3000 端口. 此时浏览器的 network 中显示的 url 的端口为 8000, 但是实际请求的是 3000 端口, 这种客户端不知道服务端实际请求的是哪个地址就被称为"反向代理")

## 2. 有哪些方法可以优化网站？
1. **压缩和合并资源**： 
   - 压缩CSS、JavaScript和图片等静态资源，减小文件大小。 
   - 合并多个CSS和JavaScript文件，减少HTTP请求次数。 
 
2. **使用CDN（内容分发网络）**： 
   - 将静态资源部署到CDN上，加速资源加载速度，减轻服务器负担。 
 
3. **延迟加载（Lazy Loading）**： 
   - 仅在用户需要时加载图片、视频或其他资源，减少首次加载时间。 
 
4. **优化图片**： 
   - 使用适当的图片格式（如WebP）和大小，以减少图片加载时间。 
   - 使用CSS sprites或SVG图像来减少HTTP请求。 
 
5. **减少重定向和请求次数**： 
   - 减少重定向，确保页面引用的资源有效且减少不必要的请求。 
 
6. **缓存优化**： 
   - 利用浏览器缓存机制，设置合适的缓存头，减少重复加载。 
   - 使用服务端缓存（如HTTP缓存、Redis缓存等）来提高性能。 
 
7. **异步加载脚本**： 
   - 使用 async 或 defer 属性加载JavaScript，避免阻塞页面渲染。 
 
8. **减少DOM操作**： 
   - 减少DOM操作次数，合并操作，减少重排和重绘。 

---
./javascript/javascript-api.md
---
# JavaScript API

## File

当选择一个文件时，可以获得这个文件的描述对象

```html
<input type="file" id="file" />

<script>
  const file = document.getElementById('file')
  file.addEventListener('change', (e) => {
    console.dir(e.target.files[0])
  })
</script>
```

```shell
File
  lastModified: 1646398643613
  lastModifiedDate: Fri Mar 04 2022 20:57:23 GMT+0800 (中国标准时间) {}
  name: "world6.jpg"
  size: 1179107
  type: "image/jpeg"
  webkitRelativePath: ""
  [[Prototype]]: File
```

## URL.createObjectURL()

该方法多数用于图片预览

参考文档：[URL.createObjectURL() ](https://developer.mozilla.org/zh-CN/search?q=URL.createObjectURL%28%29)

实例，通过 input 上传图片预览出上传的图片：

```html
<input type="file" accept="image/*" />
<img src="" alt="" />

<script>
  const inp = document.querySelector('input')
  const img = document.querySelector('img')
  inp.onchange = function () {
    const blob = URL.createObjectURL(inp.files[0])
    img.setAttribute('src', blob)
  }
</script>
```

## MutationObserver 接口

### 描述

`MutationObserver 接口` 可以在 DOM 被修改时移步执行回调，使用 `MutationObserver` 可以观察整个文档、DOM 树的一部分或者元素。此外还可以观察元素的属性、子节点、文本，或者前三者的组合变化。

### 基本使用

`MutationObserver` 的实例要通过 `MutationObserver` 的构造函数，接收一个回调参数来创建

```js
const mut = new MutationObserver(() => console.log('123'))
console.log(mut)
```

### observe()

新创建的 `MutationObserver` 并不会关联 DOM 的任何部分，想要把 `MutationObserver` 和 DOM 关联起来，需要使用 `observe()` 方法。

这个方法必须接收两个参数，第一个是要观察其变化的 DOM 节点，以及一个 `MutationObserverInit` 对象。

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver(() => console.log('div 改变了'))

  mut.observe(app, { attributes: true })

  app.setAttribute('class', 'box') // 改变之后执行 mut 的回调
</script>
```

### 回调函数中的参数

`MutationObserver` 回调可以接收的一个参数，是一个数组，记录了当前那些部分发生了变化

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((MutationRecord) =>
    console.log(MutationRecord)
  )

  mut.observe(app, { attributes: true })

  app.setAttribute('class', 'box')
  app.setAttribute('data-app', 'add')
</script>
```

**打印结果**

```shell
(2) [MutationRecord, MutationRecord]
  0: MutationRecord
    addedNodes: NodeList []
    attributeName: "class"
    attributeNamespace: null
    nextSibling: null
    oldValue: null
    previousSibling: null
    removedNodes: NodeList []
    target: div#app.box
    type: "attributes"
    [[Prototype]]: MutationRecord
  1: MutationRecord
    addedNodes: NodeList []
    attributeName: "data-app"
    attributeNamespace: null
    nextSibling: null
    oldValue: null
    previousSibling: null
    removedNodes: NodeList []
    target: div#app.box
    type: "attributes"
    [[Prototype]]: MutationRecord
  length: 2
  [[Prototype]]: Array(0)
```

`MutationObserver` 接收的第二个参数是观察变化的 `MutationObserver` 的实例

```js
const mut = new MutationObserver((MutationRecord, mutationObserver) => {
  console.log(mut === mutationObserver) // true
})
```

### disconnect()

默认情况下，只有元素不被垃圾回收，`MutationObserver` 的回调函数就会响应 DOM 变化事件，从而执行。使用 `disconnect()` 可以提前终止回调函数，也会抛弃已经加入任务队列的项目

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver(() => console.log('改变了'))

  mut.observe(app, { attributes: true })
  app.setAttribute('class', 'box')
  mut.disconnect()
  app.setAttribute('data-app', 'add')
  // 没有日志输出
</script>
```

如果想让已经加入任务队列的项目执行完再调用可以使用 `setTimeout()` 来解决

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver(() => console.log('改变了'))

  mut.observe(app, { attributes: true })
  app.setAttribute('class', 'box') // 改变了
  setTimeout(() => {
    mut.disconnect()
    app.setAttribute('data-app', 'add') // 没有日志输出
  }, 0)
</script>
```

### 重用 MutationObserver

调用 `disconnect()` 的时候并不会结束 `MutationObserver` 的生命。还是可以重用这个观察者的，只需要将他在关联到目标节点即可。

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.target)))

  mut.observe(app, { attributes: true })

  setTimeout(() => {
    mut.disconnect() // 断开连接
    app.setAttribute('class', 'box') // 没有日志输出
  }, 0)

  setTimeout(() => {
    mut.observe(app, { attributes: true }) // 重新连接
    app.setAttribute('class', 'box') // [div#app.box]
  }, 0)
</script>
```

### 观察属性

`MutationObserver.observe` 可以接收两个参数，第二个参数为以及一个 `MutationObserverInit` 对象。可以观察节点属性的添加、删除、修改。需要属性变化注册回调，需要字啊 `MutationObserverInit` 对象中将 `attributes` 设置为 `true`。

但是将 `attributes` 设置为 `true` 默认是观察所有的属性，如果想要观察几个或者多个属性，可以使用 `attributeFilter` 属性设置白名单，即一个属性名的数组集合

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.target)))

  mut.observe(app, { attributeFilter: ['food'] }) // 设置 food 为白名单

  app.setAttribute('class', 'box') // [div#app.box]
  app.setAttribute('food', 'admin') // 没有日志输出
</script>
```

如果想要在变化的记录中保存原来的值，可以将 `attributeOldValue` 设置为 `true`

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.oldValue)))

  mut.observe(app, { attributeOldValue: true })

  app.setAttribute('class', 'box')
  app.setAttribute('food', 'admin')
  app.setAttribute('id', 'ccc')

  // [null, null, 'app']
</script>
```

### 观察字符数据

将 `characterData` 设置为 `true` 可以为观察字符，当字符修改、删除、添加时，都可以触发回调

```html
<div id="app">app</div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a))
  app.firstChild.textContent = '张三' //设置文本

  mut.observe(app.firstChild, { characterData: true })
  app.firstChild.textContent = 'abc'
  app.firstChild.textContent = 'admin'
  app.firstChild.textContent = 'ppt'

  // 三次修改都被记录下来了
  // (3) [MutationRecord, MutationRecord, MutationRecord]
</script>
```

如果想要在变化的记录中保存原来的值，可以将 `characterDataOldValue` 设置为 `true`

```html
<div id="app">app</div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.oldValue)))

  app.firstChild.textContent = '张三' //设置文本

  mut.observe(app.firstChild, { characterDataOldValue: true })

  app.firstChild.textContent = 'abc'
  app.firstChild.textContent = 'admin'
  app.firstChild.textContent = 'ppt'

  // 修改过的值都被记录下来了
  // (3) ['张三', 'abc', 'admin']
</script>
```

### 观察子节点

将 `childList` 设置为 `true` 可以观察子节点，当子节点修改、删除、添加时，都可以触发回调

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a))
  mut.observe(app, { childList: true })

  app.appendChild(document.createElement('p'))

  // [MutationRecord]
</script>
```

### 观察子树

上述 将 `childList` 设置为 `true` 可以观察子节点，但是子节点的内部就观察不到了，所以还需要将 `subtree` 设置为 `true`，即可扩展到这个元素的子树，所有后代节点。

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a))
  mut.observe(app, { attributes: true, subtree: true })

  app.appendChild(document.createElement('p'))
  app.querySelector('p').setAttribute('class', 'text')

  // [MutationRecord]
</script>
```

但是有意思的是：观察子树的节点被移出子树之后，仍然可以触发变化事件

```html
<div id="app"></div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a))

  const div1 = document.createElement('div')
  mut.observe(app, { attributes: true, subtree: true }) // 观察子树
  app.appendChild(div1) // 将新建的 div 放进 app 容器
  document.body.insertBefore(div1, app) // 修改新建 div 的位置
  div1.setAttribute('class', 'box1') // 改变属性

  // 观察子树的节点被移出子树之后，仍然可以触发变化事件
  // [MutationRecord]
</script>
```

### takeRecords()

`takeRecords()` 方法可以清空 `MutationObserver` 的记录队列，取出并返回所有 `MutationObserver` 实例

```html
<div id="app">哈哈</div>
<script>
  const app = document.getElementById('app')
  const mut = new MutationObserver((a) => console.log(a.map((x) => x.oldValue)))
  mut.observe(app.firstChild, { characterDataOldValue: true })

  app.firstChild.textContent = 'abc'
  app.firstChild.textContent = 'admin'
  app.firstChild.textContent = 'ppt'

  console.log(mut.takeRecords()) // (3) [MutationRecord, MutationRecord, MutationRecord]
  console.log(mut.takeRecords()) // []
</script>
```

这在希望断开与观目标的联系，但又希望处理由于调用 `disconnect()` 而被抛弃的记录队列中的 `MutationObserver` 实例还是比较有用的。

## XMLHttpRequest

### 创建

创建方式

```js
const xhr = new XMLHttpRequest()
```

### open()

XHR 对象首先调用 `open` 方法，接受三个参数，请求类型，请求 URL，是否为异步

```js
const url =
  'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'
xhr.open('get', url, false)
```

### send()

要发送定义好的请求需要使用 `send` 方法

```js
const url =
  'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'
xhr.open('get', url, false)
xhr.send(null)
```

`send` 可以作为请求体发送数据，**如果不需要传入请求体，则必须传入 null**

### status

响应的 HTTP 状态

```js
const url =
  'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'
xhr.open('get', url, false)
xhr.send(null)
console.log(xhr.status)
```

### statusText

响应的 HTTP 状态描述

```js
const url =
  'https://infinitymcn.com/web/0705_renova_list/back_end/Renova_List/public/index.php/backstage/color/color'
xhr.open('get', url, false)
xhr.send(null)
console.log(xhr.status)
console.log(xhr.statusText)
```

## SpeechSynthesisUtterance

可使用语音读出传入的文字内容

```html
<button>say</button>

<script>
  document.querySelector('button').addEventListener('click', () => {
    const text = '你好，请问你是谁？'
    const msg = new SpeechSynthesisUtterance(text)

    window.speechSynthesis.speak(msg)
  })
</script>
```

## Document.createDocumentFragment()

可创建文档片段


---
./javascript/math-object.md
---
# 数学对象

## Math.round()

`Math.round()` 取整，四舍五入

```js
console.log(Math.round(2.4)) // 2
console.log(Math.round(2.5)) // 3
```

## Math.max()

`Math.max()` 获取最大值

```js
console.log(Math.max(12, 3, 56))
// 56
```

## Math.min()

`Math.min()` 获取最小值

```js
console.log(Math.min(12, 3, 56))
// 3
```

## Math.ceil()

`Math.ceil()`向上取整

```js
console.log(Math.ceil(3.5655))
// 4
```

## Math.floor()

`Math.floor()`向下取整

```js
console.log(Math.floor(3.5655))
// 3
```

## Math.random()

`Math.random()` 随机数

```js
console.log(Math.random())
```

> 随机数是 >=0 ~ <1 之间是数

- 要获取一个 1 ~ x 的一个整数随机数，可以通过下面公式直接获取

```js
// 这里想获取一个 1 ~ 10 的随机数
console.log(Math.ceil(Math.random() * 10))
```

公式为：`Math.ceil(Math.random() * 最大值)`

- 要获取一个区间的随机数，可以通过下面公式直接获取

```js
// 这里想取到 2 - 5 直接是随机数
console.log(2 + Math.ceil(Math.random() * (5 - 2)))
```

公式为：`最小值 + Math.ceil(Math.random() * (最大值 - 最小值))`

那么通过上面的随机数方法，我们可以做一个简易的点名系统

```html
<p class="name"></p>
<script>
  const arr = ['小张', '小李', '小明', '小红', '小强', '小周']

  const name = document.querySelector('.name')

  const length = arr.length // 获取数组的长度
  const num = Math.floor(Math.random() * length)
  name.innerHTML = arr[num]
</script>
```

## Math.abs()

`Math.abs()` 返回指定数字的绝对值

什么是绝对值？正数的绝对值是它本身，负数的绝对值是去掉负号

```js
console.log(Math.abs(-12)) // 12
console.log(Math.abs(22)) // 22
```

## Math.PI

`Math.PI` 获取圆周率

```js
console.log(Math.PI) // 3.141592653589793
```

## Math.sin / Math.cos

正弦 余弦

## Math.sqrt()

返回一个数的平方根


---
./javascript/methods-array.md
---
# 数组方法

## push()

`push()` 向数组的末尾添加元素

向数组末尾添加元素是方法有很多，比如使用 arr[] 来添加

```js
const arr = ['css', 'html', 'js']
arr[3] = 'vue'
console.log(arr)
// (4) ["css", "html", "js", "vue"]
```

或者比上述方法更好的还有使用 `.length` 方法进行添加：

```js
const arr = ['css', 'html', 'js']
arr[arr.length] = 'vue'
console.log(arr)
// (4) ["css", "html", "js", "vue"]
```

但是使用数组的 `push()` 会更简单清晰：

```js
const arr = ['css', 'html', 'js']
arr.push('vue')
console.log(arr)
// (4) ["css", "html", "js", "vue"]
```

`push()` 也可以同时添加多个值

```js
const arr = ['css', 'html', 'js']
arr.push('vue', 'java')
console.log(arr)
// (5) ["css", "html", "js", "vue", "java"]
```

## pop()

`pop()` 删除数组的末尾元素

```js
const arr = ['java', 'python', 'c']
arr.pop()
console.log(arr)
// (2) ["java", "python"]
```

`pop()` 方法也可以删除最后一项的元素并返回

```js
const arr = ['red', 'abc', '12']
const res = arr.pop()
console.log(res) // 12
console.log(arr) // ['red', 'abc']
```

## unshift()

`unshift()` 在数组开头添加元素

```js
const arr = ['java', 'python', 'c']
arr.unshift('c++')
console.log(arr)
// (4) ["c++", "java", "python", "c"]
```

> 支持多个添加

## shift()

`shift()` 删除数组开头的元素

```js
const arr = ['java', 'python', 'c']
arr.shift()
console.log(arr)
// (2) ["python", "c"]
```

`shift()` 也可以删除数组的第一个元素并返回

```js
const arr = ['java', 'python', 'c']
const res = arr.shift()
console.log(res) // java
```

## join()

`join` 把数组转换为字符串数组 || 配置数组中每一项直接的连接符

```js
// 把数组转换为字符串数组
let arr = [1, 2, 3, 4, 5]
console.log(arr.join())
// 1,2,3,4,5

// 配置数组中每一项直接的连接符
let arr = [1, 2, 3, 4, 5]
console.log(arr.join('--'))
// 1--2--3--4--5
```

## ...

`...` 展开运算符

比如，在之前，我们想要合并两个数组，可以通过 `for of` 遍历进行操作：

```js
const arr1 = ['js', 'css']
const arr2 = ['java', 'python', 'c']
for (const value of arr2) {
  arr1.push(value)
}
console.log(arr1)
// (5) ["js", "css", "java", "python", "c"]
```

那么通过 `ES6` 的数组展开语法，上述操作就变的非常简单了：

```js
const arr1 = ['js', 'css']
const arr2 = ['java', 'python', 'c']
const newArr = [...arr1, ...arr2]
console.log(newArr)
// (5) ["js", "css", "java", "python", "c"]
```

展开语法在函数中的使用，比如下方计算加和：

当一个函数需要接收到多个，并且不固定数量的参数时，之前接收的方法可能是这样的：

```js
function fun(a, b, c, d) {
  return a + b + c + d
}
console.log(fun(1, 2, 3, 4))
// 10
```

那么有了展开语法，就会显然解决了参数不固定的问题

```js
function fun(...num) {
  let a = 0
  for (let i = 0; i < num.length; i++) {
    a += num[i]
  }
  return a
}
console.log(fun(1, 2, 3, 4))
// 10
```

展开运算符不仅仅适用于数组，对象有可以使用：

```js
const obj1 = { left: 100, top: 200 }
const obj2 = { width: 200, height: 200 }

const obj3 = {
  ...obj1,
  ...obj2
}

console.log(obj3)
// {left: 100, top: 200, width: 200, height: 200}
```

## Array.from()

`Array.from()` 将字符串转换为数组

```js
const str = '这是一段文字'
console.log(Array.from(str))
// (6) ["这", "是", "一", "段", "文", "字"]
```

> 注意：使用 `Array.from()` 转换前，必须要确保这个值是有长度的，例如：

```js
const str = '这是一段文字'
console.log(str.length) // 6
```

字符串是可以使用 `.length` 方法得到长度度的，但是如果要是使用 `Array.from()` 转换对象的话是转换不出来的

```js
// 因为对象不能使用 .leghtn 方法得到长度
const obj = {
  name: '小明',
  age: 12
}
console.log(obj.length) // undefined
console.log(Array.from(obj)) // []
```

但是如果给对象加入了 `length` ，名字再变成数值之后就可以实现了：

```js
const obj = {
  0: '小明',
  1: 12,
  length: 2
}
console.log(obj.length) // 2
console.log(Array.from(obj)) // ["小明", 12]
```

> 对象转换的方法实际中很少用，此处仅对有无 .length 转换结果作为参考比较\*\*

`Array.from()` 还可以接收到第二个参数，可以直接增强数组中的每个值

```js
const arr = [1, 3, 4, 5]
const res = Array.from(arr, (x) => x * 2)
console.log(res) // [2, 6, 8, 10]
```

`Array.from()` 还可以接收到第三个参数，可以指定 this

```js
const arr = [1, 2, 3, 4, 5]

const res = Array.from(
  arr,
  function (x) {
    return x * this.num
  },
  { num: 3 }
)
console.log(res) // [3, 6, 9, 12, 15]
```

## Array.of()

`Array.of()` 方法可以将一组参数转换为数组

```js
const res = Array.of(1, 2, 3, 4, 5)
console.log(res) // [1, 2, 3, 4, 5]
```

## Array.isArray()

`Array.isArray()` 方法用于检测一个值是否是一个数组

```js
const arr = [1, 2, 3]
console.log(Array.isArray(arr)) // true
```

## slice()

`slice()` 数组截取，它不会改变原数组，而是会创建一个新的数组

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.slice(2, 4)
console.log(arr2)
// (2) ["js", "java"]
```

`slice()` 可以传入两个参数，根据索引进行截取，分别是：

- 从第几个开始截取（包括开始元素索引元素）
- 第二个参数是：截取到第几个元素（不包括结束元素索引元素）

如果传递了一个参数：那就代表从指定位数截取到结尾（不包括开始元素）

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.slice(2)
console.log(arr2)
// (3) ["js", "java", "html5"]
```

如果不传参数，就截取整个数组

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.slice()
console.log(arr2)
// (5) ["css", "html", "js", "java", "html5"]
```

`slice()` 方法可以存在负值，如果是负值，那么就是分别对应数组的长度加上这个负值得到的结果数

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
const arr2 = arr.slice(-2, -1)
// 详单于 arr.slice(3, 4)
console.log(arr2) // ['java']
```

## splice()

`splice()` 方法可能是数组**最强大**的方法了，它可以：`删除、插入、替换`

<!-- `splice()` 数组 截取 || 添加数据 || 移除 || 替换 -->

**删除**

删除可以从数组中删除一个或多个元素，需要接收两个参数：

- 要删除的第一个元素的位置
- 要删除元素的数量

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
arr.splice(0, 2) // 从 0 的索引开始，删除两位
console.log(arr) // ['js', 'java', 'html5']
```

如果只传入一个参数，那么就从指定索引删除到结尾

> 删除会删除开始索引位置的值

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
arr.splice(2)
console.log(arr) // ['css', 'html']
```

**插入**

可以在数组中指定位置进行插入，插入需要传入三个参数：

- 开始位置
- 0 / 要删除的元素数量
- 要插入的元素

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
// 从数组索引 2 的位置，删除 0 个元素，并插入后面的元素
arr.splice(2, 0, 'python', 'c++')
console.log(arr) // ['css', 'html', 'python', 'c++', 'js', 'java', 'html5']
```

上面例子中，第二关参数为 `0`，代表并没有删除元素，其实也可以删除部分元素，并添加

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
// 从数组索引 2 的位置，删除 2 个元素，并插入后面的元素
arr.splice(2, 2, 'python', 'c++')
console.log(arr) // ['css', 'html', 'python', 'c++', 'html5']
```

通过上面例子，再次引入下面替换的方法

**替换**

`splice()` 在删除和元素的同时可以指定位置插入新的元素，同样需要三个参数：

- 开始位置
- 要删除的元素数量
- 要插入的元素

```js
const arr = ['css', 'html', 'js', 'java', 'html5']
// 从数组索引 1 的位置，删除 2 个元素，并插入后面的元素，相当于替换的元素
arr.splice(1, 2, 'python', 'c++')
console.log(arr) // ['css', 'python', 'c++', 'java', 'html5']
```

## includes()

`includes()` 方法，查找数组中是否包含某元素

> 该方法返回布尔类型

```js
const arr = [1, 3, '7', 5]

console.log(arr.includes(1))
// 数组中包含 1 所以返回 true

console.log(arr.includes(99))
// 数组中不包含 99 所以返回 false
```

那么 `includes()` 方法的实现原理是什么呢？详见下面实例

```js
const arr = [1, 3, 6, 5]

// array 是要查找的数组
// value 是要查找的元素
function includes(array, value) {
  // 通过 for of 遍历数组中的每一项
  // 如果有和 value 值一样的，就返回 true 否则返回 false
  for (const val of array) {
    if (val === value) {
      return true
    }
  }
  return false
}

console.log(includes(arr, 6))
```

还有些要注意：

`includes()` 方法只能查找基本类型的元素，对于引用类型是查找不到的，例如：

```js
const arr = [{ a: 'css' }, { b: 'js' }, { c: 'html' }]

console.log(arr.includes({ b: 'js' }))
// 虽然查找的是 { b: 'js' } 看似的一样，但是内存地址的不一样的，所以返回 fasle
```

上述方法和下面实例是一样的：

```js
const a = []
const b = []
console.log(a === b)

const c = {}
const d = {}
console.log(c === d)
// 引用类型看似是一样，但是内存地址不一样，所以全部返回 fasle

const e = []
const f = e
console.log(f === e)
// 这样把e 赋值给了 f 那么就全等了，返回 true
```

## keys()

`keys()` 方法可以返回数组索引的迭代器

```js
const arr = ['西瓜', '苹果', '芒果']
console.log(Array.from(arr.keys())) // [0, 1, 2]
```

## values()

`values()` 方法可以返回数组元素的迭代器

```js
const arr = ['西瓜', '苹果', '芒果']
console.log(Array.from(arr.values())) // ['西瓜', '苹果', '芒果']
```

## entries()

`entries()` 方法可以返回数组`索引/元素`的迭代器

```js
const arr = ['西瓜', '苹果', '芒果']
console.log(Array.from(arr.entries()))
```

```
[Array(2), Array(2), Array(2)]
  0: (2) [0, '西瓜']
  1: (2) [1, '苹果']
  2: (2) [2, '芒果']
  length: 3
[[Prototype]]: Array(0)
```

## fill()

`fill()` 方法可以可以向数组中插入全部或部分相同的值

它可以接收三个参数：

- 要插入的内容
- 开始的索引位置
- 结束的索引位置

```js
const arr = [1, 2, 3, 4, 5]
arr.fill('改变', 0, 3)
console.log(arr) // ['改变', '改变', '改变', 4, 5]
```

```js
const arr = [1, 2, 3, 4, 5]
arr.fill('改变')
console.log(arr) // ['改变', '改变', '改变', '改变', '改变']
```

```js
const arr = [1, 2, 3, 4, 5]
arr.fill('改变', 4)
console.log(arr) // [1, 2, 3, 4, '改变']
```

## copyWithin()

`copyWithin()` 方法会按照指定范围进行潜复制，然后插入到指定索引的位置

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.copyWithin(5)
console.log(arr) // [1, 2, 3, 4, 5, 1, 2, 3, 4]
```

## reverse()

`reverse()` 方法可以让数组反向排序

```js
const arr = [1, 2, 3, 4]
console.log(arr.reverse()) // [4, 3, 2, 1]
```

## sort()

`sort()` 方法可以让数组升序排列

```js
const arr = [5, 9, 1, 2, 3, 4]
console.log(arr.sort()) // [1, 2, 3, 4, 5, 9]
```

也可以通过一个比较函数来确定排序方法

```js
const arr = [5, 9, 1, 2, 3, 4]
console.log(arr.sort((x, y) => y - x)) // [9, 5, 4, 3, 2, 1]
```

```js
const arr = [5, 9, 1, 2, 3, 4]
console.log(arr.sort((x, y) => x - y)) // [1, 2, 3, 4, 5, 9]
```

## concat()

`concat()` 方法可以创建一个原有数组的副本，但是并不全等之前的数组

```js
const arr = [1, 2, 3]
const res1 = arr.concat()
console.log(res1) // [1, 2, 3]
console.log(res1 === arr) // false
```

`concat()` 主要的作用是可以将数组进行合并，可以接受多个参数，添加到数组的末尾

```js
const arr = [1, 2, 3]

const res1 = arr.concat(4, 5)
console.log(res1) // [1, 2, 3, 4, 5]

const res2 = arr.concat(4, 5, [6, 7], [8, 9])
console.log(res2) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## indexOf()

`indexOf()` 该方法从数组的左侧向右侧查找回指定字符在字符串或者数组中第一次出现处的索引，如果此字符串中没有这样的字符，则返回 -1

可以分别用在数组和字符串中，它接收两个参数：

- 要查找的元素
- 开始索引的位置（可选）

字符串：

```js
const arr = '12334'

console.log(arr.indexOf(0)) // 没有 0 输出 -1
console.log(arr.indexOf(2)) // 有 2 输出2的索引 1
```

数组：

```js
const arr = [1, 3, 4]

console.log(arr.indexOf(0)) // 没有 0 输出 -1
console.log(arr.indexOf(4)) // 有 4 输出4的索引 2
```

```js
const arr = [1, 3, '7', 5]

console.log(arr.indexOf(1, 2))
// 虽然数组中存在 1，但是从第二位开始查找，后面找不到，所以返回 -1
```

`indexOf()` 方法 是严格类型查找，比如下面实例中：

比如数组中有一个字符串`'7'` 那么是查找不到的

```js
const arr = [1, 3, '7', 5]
console.log(arr.indexOf(7)) // -1
// 严格类型匹配查询不到字符串7，所以返回 -1
```

## lastIndexOf()

`lastIndexOf()` 方法可以查找指定字符在字符串或者数组中第一次出现处的索引，如果此字符串中没有这样的字符，则返回 -1

不过 `lastIndexOf()` 是从右往左查找的

比如：数组中有两个`7` 这时返回的就是从右侧查找到的第一个 `7`

它接收两个参数：

- 要查找的元素
- 开始索引的位置（可选）

```js
const arr = [1, 3, 7, 5, 6, 7, 9]
console.log(arr.lastIndexOf(7)) // 5
```


---
./javascript/methods-object.md
---
# 对象方法

## Object.defineProperty()

`Object.defineProperty()` 方法可以直接在一个对象上定义一个新的属性，或者修改一个对象的现有属性，返回此对象
它接收了三个参数：

- 要给其添加属性的对象
- 属性的名称
- 描述对象

```js
const user = {
  name: '张同学',
  age: 38
}

Object.defineProperty(user, 'friend', {
  configurable: true, // 是否可以通过 delete 删除
  enumerable: true, // 是否可以循环
  writable: true, // 是否可以修改
  value: [1, 2, 3, 4] // 添加的值
})

console.log(user) // {name: '张同学', age: 38, friend: Array(4)}
```

## Object.defineProperties()

`Object.defineProperties()` 方法和 `Object.defineProperty()` 方法有点类似，`Object.defineProperty()` 只是可以在对象上定义一个属性，而 `Object.defineProperties()` 则可以定义多个

```js
const obj = {}

Object.defineProperties(obj, {
  name: {
    value: '张同学',
    configurable: true
  },
  age: {
    value: 12
  }
})

console.log(obj) // {name: '张同学', age: 12}
```

## Object.assign()

`Object.assign()` 可以将对象进行合并，它接收一个目标对象和一个或多个源对象作为参数进行合并

```js
const obj1 = { a: 1 }
const obj2 = { b: 2 }

Object.assign(obj1, obj2, { c: 12121 })

console.log(obj1) // {a: 1, b: 2, c: 12121}
```

如果源对象上有很多相同的属性，那么后面的属性会覆盖前面的属性

```js
const obj1 = { a: 1 }
Object.assign(obj1, { a: 12, b: 99 }, { b: 21 })

console.log(obj1) // {a: 12, b: 21}
```

## Object.is()

`Object.is()` 和 `===` 有点相似

```js
console.log(true === 1) // false
console.log({} === {}) // false
```

但是有些情况下就会出乎我们的意料

```js
console.log(+0 === -0) // true
console.log(+0 === 0) // true
console.log(-0 === 0) // true
```

为了改善这种情况，ES6 新增了 `Object.is()`，可以接收两个参数

```js
console.log(Object.is({}, {})) // false
console.log(Object.is(+0, -0)) // false
console.log(Object.is([], [])) // false
console.log(Object.is('1', 1)) // false
```

## Object.getPrototypeOf()

用于获取对象的原型，这是标准的方法，`__proto__` 本来就是浏览器实现的，所以不是规范的写法，虽然 `__proto__` 和 `Object.getPrototypeOf()` 方法都可以正常工作，不过建议使用 `Object.getPrototypeOf()`

```js
const obj = {}

console.log(obj.__proto__) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

console.log(Object.getPrototypeOf(obj)) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```

> 不过现在主流的浏览器都已经更新了，对象中不再存在 `__proto__` 属性，而是改为了 `[[Prototype]]`

## Object.setPrototypeOf()

`Object.setPrototypeOf()` 方法用于重新设置对象的原型

```js
function User() {}

const user = new User()

const newProto = {
  satName() {
    console.log('你好')
  }
}

Object.setPrototypeOf(user, newProto)
console.dir(Object.getPrototypeOf(user))
```

> Object.setPrototypeOf() 可能会影响代码的性能

## Object.create()

`Object.create()` 方法创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`，接收一个参数是需要继承的原型，如果不想要原型，那么可以传入 `null` 就是一个纯数据对象

```js
// 纯数据对象
console.log(Object.create(null))
```

```js
const obj = {
  name: '张三',
  arr: [1, 2, 3, 4]
}

const newObj = Object.create(obj)

console.log(newObj.__proto__ === obj) // true
```

因为上述使用 `Object.setPrototypeOf()` 方法改变对象的原型，可能会导致性能下降，所以可以通过 `Object.create()` 来创建一个新对象，同时指定原型

它接收一个参数：新创建对象的原型对象

```js
const newProto = {
  sayName() {
    console.log('你好')
  }
}

const user = Object.create(newProto)
user.name = '张同学'
console.dir(user)
console.log(Object.getPrototypeOf(user) === newProto) // true
```

打印结果

```shell
Object
  name: "张同学"
  [[Prototype]]: Object
    satName: ƒ satName()
    [[Prototype]]: Object
```

`Object.create` 的第二个参数和 [Object.defineProperties](https://tianyuhao.cn/blog/javascript/js-methods.html#object-defineproperties)一样，每个属性都有各自的描述符来描述据。以这种方式添加的属性会遮蔽原型对象上本书的属性

```js
const z = {
  name: '张三'
}

const res = Object.create(z, {
  name: {
    value: '张同学'
  }
})

console.log(z.name) // 张同学
```

```
原型式继承非常适合不需要单独创建构造函数，但是仍然需要在对象之间共享信息的场合。但是属性中包含的引用值始终会在香港对象间共享，跟使用原型模式是一样的。
```

也可以配置对象的内部属性

```js
const obj = { a: '1' }

const o = Object.create(obj, {
  b: {
    value: '2',
    enumerable: true,
    writable: false,
    configurable: false
  },
  c: {
    value: '3',
    enumerable: true,
    writable: false,
    configurable: false
  }
})
console.log(o) // {b: '2', c: '3'}
```

## Object.keys()

`Object.keys()` 可以获取对象上所有可以枚举的属性，不过仅限于当前作用域对象，不会向上攀升查找

```js
function User() {
  this.name = '张三'
  this.name2 = '张三'
}
User.prototype.age = 13
const user = new User()

console.log(Object.keys(user)) // ['name', 'name2']
console.log(Object.keys(User.prototype)) // ['age']
```

## Object.getOwnPropertyNames()

`Object.getOwnPropertyNames()` 可以获取对象上所有属性，无论是否可以枚举，都可以获取到，不过仅限于当前作用域对象，不会向上攀升查找

```js
function User() {
  this.name = '张三'
  this.name2 = '张三'
}
User.prototype.age = 13
const user = new User()

console.log(Object.getOwnPropertyNames(User.prototype)) // ['constructor', 'age']
```

```
在适当的时候，Object.keys() 和 Object.getOwnPropertyNames() 方法可以适当代替 for in 循环操作
```

## Object.getOwnPropertySymbols()

因为 `ES6` 新增了 `Symbol` 数据类型，那么针对于 `Symbol`，普通的循环是遍历不出来的

```js
const key1 = Symbol('key1')
const key2 = Symbol('key2')
const obj = {
  [key1]: '张三',
  [key2]: 20
}

for (const key in obj) {
  console.log(obj[key])
}
// 没有日志输出
```

所以 `Object.getOwnPropertySymbols()` 方法是针对于处理 `Symbol` 数据类型的

```js
const key1 = Symbol('key1')
const key2 = Symbol('key2')
const obj = {
  [key1]: '张三',
  [key2]: 20
}

for (const key of Object.getOwnPropertySymbols(obj)) {
  console.log(obj[key])
}

// 张三
// 20
```

## Object.values()

`Object.values()` 方法可以将对象中的键以数组形式返回

```js
const obj = {
  name: '张同学',
  age: 39
}

console.log(Object.values(obj))
//  ['张同学', 39]
```

## Object.entries()

`Object.entries` 方法可以将对象中的每个键和值转换为数组形式返回

```js
const obj = {
  name: '张同学',
  age: 39
}

console.log(Object.entries(arr))
```

打印结果

```shell
(2) [Array(2), Array(2)]
  0: (2) ['name', '张同学']
  1: (2) ['age', 39]
  length: 2
  [[Prototype]]: Array(0)
```

## Object.getOwnPropertyDescriptor()

`Object.getOwnPropertyDescriptor()` 方法可以得到对象属性特征的描述，接收两个参数，第一个是对象名，第二个是对象的属性名

```js
const obj = {
  name: '张三',
  age: 21
}

console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
// {value: '张三', writable: true, enumerable: true, configurable: true}

// value - 属性值
// writable - 是否可以修改
// enumerable - 是否可以遍历
// configurable - 是否可以被删除或重新配置
```

## Object.getOwnPropertyDescriptors()

上面 `Object.getOwnPropertyDescriptor()` 方法可以获取对象中单个键的属性特征描述，那么想要获取对象中所有属性的描述，需要使用 `Object.getOwnPropertyDescriptors()` 方法，该方法接收一个参数为对象名

```js
const obj = {
  name: '张三',
  age: 21
}

console.log(Object.getOwnPropertyDescriptors(obj))

// {name: {…}, age: {…}, arr: {…}}
```

## Object.preventExtensions()

`Object.preventExtensions()` 方法可以禁止向对象内添加内容

```js
const obj = {
  name: '张三',
  age: 21
}

Object.preventExtensions(obj)
obj.a = '1'
console.log(obj) // {name: '张三', age: 21}
```

## Object.seal()

封闭对象，**configurable = false**不可以被删除或重新配置

可以使用 `Object.isSealed()` 方法判断当前对象是否处于封闭状态，返回布尔值

```js
const obj = {
  name: '张三',
  age: 21
}

Object.seal(obj)
// 封闭对象，configurable = false

console.log(Object.isSealed(obj)) // true
```

## Object.freeze()

冻结对象，不能删除或重新配置，也不可以修改

可以使用 `Object.isFrozen()` 方法判断当前对象是否处于冻结状态，返回布尔值

```js
const obj = {
  name: '张三',
  age: 21
}

Object.freeze(obj)
// 冻结对象，configurable = false，writable = false

console.log(Object.isFrozen(obj)) // true
```

## Object.hasOwnProperty()

`Object.hasOwnProperty()` 方法用于检测一个属性是否在来自对象的实例，来自实例返回 `true`，来着原型返回 `false`

```js
function User() {
  this.name = '张三'
}
User.prototype.age = 13
const user = new User()

console.log(user.hasOwnProperty('name')) // true
console.log(Object.hasOwnProperty.call(user, 'age')) // true
```

简写方式

```js
function User() {
  this.name = '张三'
}

User.prototype.age = 12
const user = new User()

console.log(user.hasOwnProperty('name')) // true
console.log(user.hasOwnProperty('age')) // false
```

## Object.isExtensible()

`Object.isExtensible()` 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）

```js
const foo = { id: 123 }
console.log(Object.isExtensible(foo)) // true
```

## Object.preventExtensions()

`Object.preventExtensions()` 方法让一个对象变的不可扩展，也就是永远不能再添加新的属性

```js
const foo = { id: 123 }
console.log(Object.preventExtensions(foo)) // { id: 123 }

foo.age = 12
console.log(foo) // { id: 123 }
```

## isPrototypeOf()

`isPrototypeOf()` 方法用于测试一个对象是否存在于另一个对象的原型链上

```js
function User() {
  this.name = '张三'
}

const user = new User()
console.log(User.prototype.isPrototypeOf(user)) // true
```

## in

`in` 操作符可以用在两个场景，一个是 `for in` 循环中，还有一个是单独使用，可以检测对象上是否存在某个属性，无论在实例上还是原型上

```js
function User() {
  this.name = '张三'
}
User.prototype.age = 13
const user = new User()

console.log(user.hasOwnProperty('name')) // true
console.log(user.hasOwnProperty('age')) // false

console.log('name' in user) // true
console.log('age' in user) // true
```


---
./javascript/methods-string.md
---
# 字符串方法

## toString()

转换为字符串

```js
const a = 12
console.log(a.toString()) // '12'
```

## concat()

字符串拼接

```js
const a = '1121'
const b = '哈哈哈'

const c = a.concat(b)
console.log(c) // 1121哈哈哈
```

## slice()

字符串截取，可接收两个参数

- 字符串开始的位置
- 字符串结束的位置

```js
const a = 'hello world'
console.log(a.slice(2)) // llo world
console.log(a.slice(2, 5)) // llo
```

## substring()

字符串截取，可接收两个参数

- 字符串开始的位置
- 字符串结束的位置

```js
const a = 'hello world'
console.log(a.substring(2)) // llo world
console.log(a.substring(2, 5)) // llo
```

## substr()

字符串截取，可接收两个参数

- 字符串开始的位置
- 截取长度

```js
const a = 'hello world'
console.log(a.substr(3)) // hello world
console.log(a.substr(3, 7)) // lo worl
```

## startsWith()

检测一个字符串是否包含某个参数，它检查的是开始于索引 0 的匹配项，返回布尔值，可接收两个参数

- 要搜索的字符串
- 字符串开始的位置

```js
const a = 'hello world'
console.log(a.startsWith('hel')) // true
console.log(a.startsWith('llo')) // false
```

## endsWith()

检测一个字符串是否包含某个参数，它检查的是开始于索引末尾的匹配项，返回布尔值，可接收两个参数

- 要搜索的字符串
- 字符串开始的位置

```js
const a = 'hello world'
console.log(a.endsWith('rld')) // true
console.log(a.endsWith('llo')) // false
```

## includes()

可以在整个字符串中进行搜索

```js
const a = 'hello world'
console.log(a.includes('rld')) // true
console.log(a.includes('llo')) // true
```

## trim()

可以删除字符串前后的空格

```js
const a = ' hello world '
console.log(a.trim()) // hello world
```

## repeat()

用于字符串复制，接受一个参数

- 要复制的次数

```js
const a = 'hello world'
console.log(a.repeat(2)) // hello worldhello world
```

## padStart()

可以复制字符串，给出指定的长度进行填充，默认在字符串`前面`填充空格，接收两个参数

- 指定长度
- 填充字符串

```js
const a = 'hello'
console.log(a.padStart(10)) //      hello
console.log(a.padStart(10, '-')) // -----hello
```

## padEnd()

可以复制字符串，给出指定的长度进行填充，默认在字符串`后面`填充空格，接收两个参数

- 指定长度
- 填充字符串

```js
const a = 'hello'
console.log(a.padEnd(10)) // hello
console.log(a.padEnd(10, '-')) // hello-----
```

## match()

可以匹配字符串，接收一个正则表达式的参数进行匹配

```js
const a = 'hello'
console.log(a.match(/.lo/)) // ['llo', index: 2, input: 'hello', groups: undefined]
```

## localeCompare()

可以用于比较两个字符串，会返回 `-1、0、1` 等值

- 要比较的字符串和原始字符串相等，返回 0
- 按照字母表检测，如果参数字符串的第一个字母在原始字符串之前，就返回正值
- 按照字母表检测，如果参数字符串的第一个字母在原始字符串之后，就返回负值


---
./javascript/pre-compile.md
---
## 函数预编译步骤

1. 创建 AO 对象，执行期上下文。
2. 寻找函数的形参和变量声明，将变量和形参名作为 AO 对象的属性名，值设定为 undefined.
3. 将形参和实参相统一，即更改形参后的 undefined 为具体的形参值。
4. 寻找函数中的函数声明，将函数名作为 AO 属性名，值为函数体。

### 预编译过程包括两个主要步骤：变量提升（Hoisting）和函数提升。

1. 变量提升（Hoisting）：在 JavaScript 中，变量的声明会被提升到其作用域的顶部。这意味着无论变量的声明在代码中的哪个位置，它们都会在实际执行之前被"提升"到作用域的顶部。这样，在代码中可以在变量声明之前使用这些变

例如，以下代码中的变量声明会被提升到函数作用域的顶部：

```js
function example() {
  console.log(x); // 输出：undefined
  var x = 10;
  console.log(x); // 输出：10
}
```

在预编译阶段，上述代码实际上会被解释为：

```js
function example() {
  var x; // 变量提升
  console.log(x); // 输出：undefined
  x = 10;
  console.log(x); // 输出：10
}
```

2. 函数提升：与变量提升类似，JavaScript 中的函数声明也会被提升到作用域的顶部。这意味着无论函数声明在代码中的哪个位置，都可以在函数声明之前调用这些函数。

```js
example();

function example() {
  console.log('Hello, world!');
}
```

在预编译阶段，上述代码实际上会被解释为：

```js
function example() {
  console.log('Hello, world!');
}

example(); // 输出：Hello, world!
```

需要注意的是，只有函数声明会被提升，而函数表达式（如匿名函数）不会被提升。


---
./javascript/proxy.md
---
# proxy 代理

## 创建空代理

使用 `Proxy()` 构造函数可以创建一个空代理，它需要接收两个参数：

- 需要代理的目标对象
- 处理程序对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {})

// id 会得到同一个值
console.log(proxy.id) // 123
console.log(foo.id) // 123

// 重新赋值也会共同反映到两个对象上
foo.id = 666
console.log(proxy.id) // 666
console.log(foo.id) // 666

proxy.id = 987
console.log(proxy.id) // 987
console.log(foo.id) // 987
```

## 定义捕获器

当每次在代理对象上进行操作时，会首先触发捕获器函数，从而拦截或修改相应的行为。

下面定义了一个 `get` 捕获器，当调用 `get()` 的时候触发

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  get() {
    return 'hello'
  }
})

console.log(foo.id) // 123
console.log(proxy.id) // hello
```

> 注意：捕获器获取函数的函数名必须是 get，其他名称不会触发捕获器效果

## 捕获器参数和反射 API

定义的捕获器函数可以接收三个参数：

- 代理的目标对象
- 要查询的属性
- 代理对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  get(targe, property, receiver) {
    console.log(targe) // {id: 123}
    console.log(property) // id
    console.log(receiver) // Proxy {id: 123}
  }
})

console.log(proxy.id)
```

多数情况下，不需要手动重建原始行为，而是可以通过调用全局 [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect) 对象上的同名方法来轻松重建

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  get() {
    return Reflect.get(...arguments)
  }
})

console.log(proxy.id) // 123
console.log(foo.id) // 123
```

甚至可以写的更简洁一些

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  get: Reflect.get
})

console.log(proxy.id) // 123
console.log(foo.id) // 123
```

如果想要创建一个可以捕获所有方法，然后每个方法都转发给对应反射 API 的空代理，甚至不需要定义处理程序对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, Reflect)

console.log(proxy.id) // 123
console.log(foo.id) // 123
```

下面例子中，将对某些指定的属性进行访问的时候，可以加如一些修饰

```js
const foo = {
  name: '田同学',
  age: 18
}
const proxy = new Proxy(foo, {
  get(targe, property, receiver) {
    if (property === 'age') {
      return Reflect.get(...arguments) + '岁'
    }
    return Reflect.get(...arguments)
  }
})

console.log(proxy.name) // 田同学
console.log(proxy.age) // 18岁
```

## 可撤销代理

使用 `new Proxy()` 创建的代理，会在代理对象的生命周期内一直存在，如果想要撤销，可以使用 `Proxy.revocable()` 方法创建一个可撤销的代理，撤销操作上不可逆的，使用其内部的 `revoke` 方法可以撤销代理，撤销之后的代理尝试再次调用代理将会抛出 TypeError 异常

```js
const foo = {
  name: '田同学'
}
const revocable = Proxy.revocable(foo, {
  get() {
    return 'hello'
  }
})

console.log(revocable.proxy.name) // hello
proxy.revoke()
console.log(revocable.proxy.name) // 1.html:23 Uncaught ReferenceError: proxy is not defined
```

## 代理另一个代理

代理可以拦截反射 API 的操作，而这意味着完全可以创建一个代理，通过它去代理另一个代理

```js
const foo = {
  name: '田同学'
}

const proxyA = new Proxy(foo, {
  get() {
    console.log('proxyA')
    return Reflect.get(...arguments)
  }
})

const proxyB = new Proxy(proxyA, {
  get() {
    console.log('proxyB')
    return Reflect.get(...arguments)
  }
})

console.log(proxyB.name)
// proxyB
// proxyA
// 田同学
```

接下来将介绍一些代理捕获器与反射的一些方法

## get()

`get()` 捕获器会在捕获属性之间被调用，对应的反射 API 为 `Reflect.get()`。它可以接收三个参数：

- 代理的目标对象
- 要查询的属性
- 代理对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  get(targe, property, receiver) {
    console.log(targe) // {id: 123}
    console.log(property) // id
    console.log(receiver) // Proxy {id: 123}
  }
})

console.log(proxy.id)
```

## set()

`set()` 捕获器会在设置属性的操作中被调用，对应的反射 API 为 `Reflect.set()`。它可以接收四个参数：

- 代理的目标对象
- 要查询的属性
- 需要设置的新属性
- 代理对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  set(targe, property, value, receiver) {
    console.log(targe) // {id: 123}
    console.log(property) // id
    console.log(value) // 222
    console.log(receiver) // Proxy {id: 123}
  }
})

proxy.id = 222
```

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  set(targe, property, value, receiver) {
    targe[property] = value + 10
  }
})

proxy.id = 222

console.log(foo.id) // 232
console.log(proxy.id) // 232
```

## has()

`has()` 捕获器会在 `in` 操作符中调用，对应的反射 API 为 `Reflect.has()`。它可以接收两个参数：

- 目标对象
- 引用的目标对象上的字符串属性

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  has(target, property) {
    console.log(target) // {id: 123}
    console.log(property) // id
    return Reflect.has(...arguments)
  }
})

console.log('id' in proxy) // true
console.log('name' in proxy) // false
```

## defineProperty()

`defineProperty()` 捕获器会在 [Object.defineProperty()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-defineproperty) 中调用，对应的反射 API 为 `Reflect.defineProperty()`。它可以接收三个参数：

- 目标对象
- 引用目标对象上的字符串属性
- 包含可选的描述对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  defineProperty(target, property, descriptor) {
    console.log(target) // {id: 123}
    console.log(property) // name
    console.log(descriptor) // {value: '田同学', enumerable: false}
    return Reflect.defineProperty(...arguments)
  }
})

Object.defineProperty(proxy, 'name', {
  value: '田同学',
  enumerable: false // 禁止循环
})

for (const key in proxy) {
  console.log(key) // id
}
```

## getOwnPropertyDescriptor()

`getOwnPropertyDescriptor()` 捕获器会在 [Object.getOwnPropertyDescriptor()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-getownpropertydescriptorhttps://tianyuhao.cn/blog/javascript/methods-object.html#object-getownpropertydescriptor) 中调用，对应的反射 API 为 `Reflect.getOwnPropertyDescriptor()`。它可以接收两个参数：

- 目标对象
- 引用目标对象上的字符串属性

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  getOwnPropertyDescriptor(target, property) {
    console.log(target) // {id: 123}
    console.log(property) // name
    return Reflect.getOwnPropertyDescriptor(...arguments)
  }
})

const res = Object.getOwnPropertyDescriptor(proxy, 'id')
console.log(res) // {value: 123, writable: true, enumerable: true, configurable: true}
```

## deleteProperty()

`deleteProperty()` 捕获器会在 `delete` 操作符中调用，对应的反射 API 为 `Reflect.deleteProperty()`。它可以接收两个参数：

- 目标对象
- 引用目标对象上的字符串属性

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  deleteProperty(target, property) {
    console.log(target) // {id: 123}
    console.log(property) // name
    return Reflect.deleteProperty(...arguments)
  }
})

delete proxy.id

console.log(foo) // {}
console.log(proxy) // Proxy {}
```

## ownKeys()

`ownKeys()` 捕获器会在 [Object.keys()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-keys) 操作符中调用，对应的反射 API 为 `Reflect.ownKeys()`。它可以接收一个参数：

- 目标对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  ownKeys(target) {
    console.log(target) // {id: 123}
    return Reflect.ownKeys(...arguments)
  }
})

console.log(Object.keys(proxy)) // ['id']
```

## getPrototypeOf()

`getPrototypeOf()` 捕获器会在 [Object.getPrototypeOf()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-getprototypeof) 操作符中调用，对应的反射 API 为 `Reflect.getPrototypeOf()`。它可以接收一个参数：

- 目标对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  getPrototypeOf(target) {
    console.log(target) // {id: 123}
    return Reflect.getPrototypeOf(...arguments)
  }
})

console.log(Object.getPrototypeOf(proxy)) // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
```

## setPrototypeOf()

`setPrototypeOf()` 捕获器会在 [Object.setPrototypeOf()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-setprototypeof) 操作符中调用，对应的反射 API 为 `Reflect.setPrototypeOf()`。它可以接收两个参数：

- 目标对象
- 目标对象的代替原型

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  setPrototypeOf(target, property) {
    console.log(target) // {id: 123}
    console.log(property) // {age: 12}
    return Reflect.setPrototypeOf(...arguments)
  }
})

console.log(Object.setPrototypeOf(proxy, { age: 12 })) // Proxy {id: 123}
```

## isExtensible()

`isExtensible()` 捕获器会在 [Object.isExtensible()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-isExtensible) 操作符中调用，对应的反射 API 为 `Reflect.isExtensible()`。它可以接收一个参数：

- 目标对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  isExtensible(target) {
    console.log(target) // {id: 123}
    return Reflect.isExtensible(...arguments)
  }
})

console.log(Object.isExtensible(proxy)) // true
```

## preventExtensions()

`preventExtensions()` 捕获器会在 [Object.preventExtensions()](https://tianyuhao.cn/blog/javascript/methods-object.html#object-preventExtensions) 操作符中调用，对应的反射 API 为 `Reflect.preventExtensions()`。它可以接收一个参数：

- 目标对象

```js
const foo = { id: 123 }
const proxy = new Proxy(foo, {
  preventExtensions(target) {
    console.log(target) // {id: 123}
    return Reflect.preventExtensions(...arguments)
  }
})

console.log(Object.preventExtensions(proxy)) // Proxy {id: 123}
```

## apply

`apply()` 捕获器会在调用函数中被调用，对应的反射 API 为 `Reflect.apply()`。它可以接三个参数：

- 目标对象
- 调用函数时候的 this 参数
- 调用参数时的参数列表

```js
const foo = () => {}
const proxy = new Proxy(foo, {
  apply(target, thisArg, ...argumentsList) {
    console.log(target) // () => { }
    console.log(thisArg) // undefined
    console.log(argumentsList) // [Array(0)]
    return Reflect.apply(...arguments)
  }
})

proxy()
```

## construct

`construct()` 捕获器会在 `new` 操作符中被调用，对应的反射 API 为 `Reflect.construct()`。它可以接三个参数：

- 目标构造函数
- 传递给目标构造函数的参数列表
- 最初调用的构造函数

```js
const foo = function () {}
const proxy = new Proxy(foo, {
  construct(target, argumentsList, newTarget) {
    console.log(target) // ƒ () { }
    console.log(argumentsList) // []
    console.log(newTarget) // Proxy {length: 0, name: 'foo', arguments: null, caller: null, prototype: {…}}
    return Reflect.construct(...arguments)
  }
})

new proxy()
```


---
./javascript/throttle.md
---
# 节流函数

```js
function coloring() {
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`
}
function throttle(fn, delay) {
  let pre = 0
  return function () {
    let now = new Date()
    if (now - pre > delay) {
      fn.apply(this, arguments)
      pre = now
    }
  }
}
window.addEventListener('resize', throttle(coloring, 3000))
```

---
./tailwindcss/tailwindcss.md
---
# TailwindCSS

## 什么是 TailwindCSS
`Tailwind CSS` 是一个功能类优先的 CSS 框架，它集成了诸如 `flex`, `pt-4`, `text-center` 和 `rotate-90` 这样的的类，可以组合使用并直接在 HTML 代码上实现任何 UI 设计。

```vue
<template>
  <div class="container">
    <img src="/images/logo-1.png" alt="">
    <div class="center">内容</div>
  </div>
</template>
<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
  }
  img {
    display: inline-block;
    width: 118px;
  }
  .center {
    display: flex;
    align-items: center;
    width: 50%;
  }
</style>
```

使用 TailwindCSS 框架编写样式：
```vue
<template>
  <div class="flex justify-between">
    <img class="inline-block w-[118px]" src="/images/logo-1.png" alt="">
    <div class="flex items-center w-1/2">内容</div>
  </div>
</template>
```
平常我们写样式一般都是定义一个 class, 然后在这个 class 里写一些 css 属性, 而 tailwindcss 是直接把每个 css 属性设为单独的 class, 我们想要什么属性就写什么 class.
## 快速上手
https://tailwindcss.com/docs/installation/using-postcss

## TailwindCSS 优点

### 不需要再写 css
使用 Tailwind CSS，基本可以不用再写 css。所有的效果都可以通过 class 名来完成。我用 Tailwind CSS 写了几个页面，到目前为止，还没有写过一行 css。

### 不需要在 html 结构和 css 样式之间来回切换
平常我们开发项目时, 经常要在 html 和 css 之间来回切换, 特别麻烦, 使用 tailwind 后, 只需要把类名写到 html 里就行, 让你只专注于一个地方, 大大提高了开发效率。

### 不需要为 class 取什么名字而烦恼
写 css 的烦恼可能就是怎么给 class 取名了。尤其是在同一个区块里面，区块名称，子元素名称，等等，一个页面动辄几十个几百个类名。非常痛苦。而这其中，真正能复用的 class 可能就个别几个。

使用 Tailwind CSS 完全不用为取名字烦恼，因为所有的 css 属性都被框架语义化封装好了。只需要在 class 里面引用就好。

### 响应式设计
如果你要实现一个媒体查询，根据不同的屏幕宽度实现不同的图片宽度。
按照之前的写法，你可能得这么干
```css
@media screen and (min-width: 1280px) {
  .img {
    width: 196px;
  }
}
@media screen and (min-width: 768px) {
  .img {
    width: 128px;
  }
}
```
但是在 Tailwind CSS，一行代码搞定：
```html
<img class="w-16 md:w-32 lg:w-48" src="...">
```
Tailwind CSS 内置了5个断点，我们可以直接使用它来代替媒体查询:
|  断点前缀   |  最小宽度  | 	CSS  |
|  ----      |    ----   | ----  |
| `sm` | 640px | `@media (min-width: 640px) { ... }` |
| `md`  | 768px | `@media (min-width: 768px) { ... }` |
| `lg`  | 1024px | `@media (min-width: 1024px) { ... }` |
| `xl`  | 1280px | `@media (min-width: 1280px) { ... }` |
| `2xl`  | 1536px | `@media (min-width: 1536px) { ... }` |

Tailwind CSS 中 `w-1` 默认为 `width: 4px`
所以 `md:w-32` 表示在中等屏幕下宽度为 32x4 = 128px

## Tailwind CSS 和内联样式的区别
Tailwind CSS 是把所有样式写在 class 里面。内联样式是把所有样式写在 style 里面，所以会让很多人造成一个印象：Tailwind CSS 和内联样式差不多，大同小异。

其实是有很大的区别，Tailwind CSS 相比于内联样式，有以下几点特点：

### 有约束的设计
使用内联样式，每个值都是一个随便填写的数字。使用 Tailwind CSS 类，你要从预先定义好的设计系统中选择样式，这样你开发出来的页面，视觉上会保持一致，不会乱七八糟。

比如, 如果要加一个8px的圆角, 直接在 class 加一个 `rounded-lg` 就可以, 而不需要写 `border-radius: 8px`, 一来容易手误写错, 二来不好维护。

![1](./imgs/1.png)

### 响应式的设计
您不能在内联样式中使用媒体查询，但您可以使用 Tailwind 的响应式类来轻松开发完全响应式界面。比如你可以在 class 里写一个 `sm:text-left`, 代表的是，在小屏幕上，文字居中的方式是居左显示。但是你在内联样式是不可能做到这些的。

### Hover, focus, 以及其它状态
你可以在 class 里面写一个 hover:text-white , 代表的是鼠标滑过的时候，文本是白色。

## TailwindCSS 缺点
### 类名很长
Tailwind CSS 将 HTML 与 CSS 高度解耦，把本来 CSS 的一些工作转嫁给了 HTML。好处是使用 Tailwind CSS 你可以从此不再写 css。但坏处是你的 html 标签的类名会很长很长。比如
```html
<a href="#" class="text-sm font-medium bg-purple-600 rounded-full py-4 px-11
text-whiteinline-block border border-solid shadow hover:text-purple-600
hover:bg-white hover:border-purple-600 transition duration-300"
role="button">Start Ticketing</a>
```

### 熟悉使用有成本
这一点逃避不了，所有的新技术都有熟悉成本。Tailwind CSS 也一样。比如你想做一个圆角，那你得知道 Tailwind CSS 里面的圆角属性怎么写，边框怎么写，边框样式怎么写等等。你需要不断的去看文档。

所以一开始使用 Tailwind CSS，特别是第一个项目，你用起来会比较痛苦。

但是只要你用 Tailwind CSS 做一两个项目，你就会觉得 ”嗯, 真香”。



---
