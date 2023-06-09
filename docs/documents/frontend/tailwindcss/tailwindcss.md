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

### 不需要再写 css。
使用 Tailwind CSS，基本可以不用再写 css。所有的效果都可以通过 class 名来完成。我用 Tailwind CSS 写了几个页面，到目前为止，还没有写过一行 css。

### 不需要在 html 结构和 css 样式之间来回切换
平常我们开发项目时, 经常要在 html 和 css 之间来回切换, 特别麻烦, 使用 tailwind 后, 只需要把类名写到 html 里就行, 让你只专注于一个地方, 大大提高了开发效率。

### 不需要为 class 取什么名字而烦恼。
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

### 有约束的设计。
使用内联样式，每个值都是一个随便填写的数字。使用 Tailwind CSS 类，你要从预先定义好的设计系统中选择样式，这样你开发出来的页面，视觉上会保持一致，不会乱七八糟。

比如, 如果要加一个8px的圆角, 直接在 class 加一个 `rounded-lg` 就可以, 而不需要写 `border-radius: 8px`, 一来容易手误写错, 二来不好维护。

![1](./imgs/1.png)

### 响应式的设计
您不能在内联样式中使用媒体查询，但您可以使用 Tailwind 的响应式类来轻松开发完全响应式界面。比如你可以在 class 里写一个 `sm:text-left`, 代表的是，在小屏幕上，文字居中的方式是居左显示。但是你在内联样式是不可能做到这些的。

### Hover, focus, 以及其它状态。
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

