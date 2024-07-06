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