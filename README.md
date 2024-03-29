## 在线预览
[点击这里预览](http://1.12.218.227)

## 为什么有这个项目

- 在日常工作中经常会遇到各种各样的问题，在把问题解决后，没有及时对问题进行记录和总结，下次再遇到同样的问题，还是到处去百度和谷歌，导致**开发效率低下**。

- 于是就有了这个仓库，你完全可以把这个仓库作为你的**个人积累库**和**个人知识库**，在解决一个问题后对该问题进行记录和总结，随着时间的流逝，你的积累会越来越多，你的开发效率也就越来越快。

- 项目中的一些数据不是写死, 而是通过接口获取的, 比如首页的数据。目的是为了练习 koa, 接口项目地址[点这里](https://github.com/cyan0714/koa-vitepress-blog-server)

## 为什么不是 vuepress

`VitePress` 和 `VuePress` 是两个基于`Vue.js`的静态网站生成器。它们的主要区别在于构建和开发过程中所使用的技术栈。
### 对比
- `VuePress` 使用的是 `Webpack`，启动速度特别慢，热更新有时还会有问题，在编写完一个文档或者页面后需要重新起服务才能看到效果。
- `VitePress` 使用的是 `Vite`，300ms就可以启动项目，热更新的问题可以说没有(我没遇到过)，只要保存就可以看到效果，而且`VitePress`更加轻量也更容易上手。

## 技术栈
- vitepress
- vue3
- axios
- sass
- vue3-lazyload

## 快速开始

运行前先安装`nodejs`, 且`node`版本大于18

### `clone`项目到本地

```shell
git clone https://github.com/cyan0714/vitepress-blog.git
```

### 安装依赖
```shell
npm install
```

### 启动项目
```shell
npm run dev
```