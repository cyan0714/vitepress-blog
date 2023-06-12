# import from 加载规则

疑问:

- import 某个文件时为什么有时后缀能省, 有时不能省?
- 为什么引入某个文件夹下的 index.js 或者 index.vue 时可以省略不写?
- import from 的加载规则是什么样的?

分析:

- Vue 使用 **import** ... **from ...** 来导入组件，库，变量等。如果路径是以 js，vue，json 结尾, 则可以省略。这里可以通过 webpack 来配置：

    ```jsx
    module.exports = {
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': resolve('src')
        }
      }
    ...
    }
    ```

    ```jsx
    import test from './test.vue' 等同于 import test from './test'
    import test from './test.js' 等同于 import test from './test'
    // 如果 test.vue，test.js 在同一个文件夹下，.js 比 .vue 的优先级高
    ```

- 如果 from 后的路径是一个文件夹或第三方包, 加载规则如下:

    ```jsx
    if(package.json 存在 && package.main 字段存在 && package.main 指定的 js 存在) {
        取 package.main 指定的 js 作为 from 的来源，即使该 js 可能格式或内容错误
    } else if(index.js 存在){
        取 index.js 作为 from 的来源
    } else {
        取 index.vue 作为 from 的来源
    }
    ```

- 以 vue-element-admin 源码为例(https://github.com/PanJiaChen/vue-element-admin/blob/master/src/layout/index.vue)
  ![vue-element-admin](./imgs/3.png)
  1. 这里，from 的路径'./components'就是个文件夹。于是，按照前面的规则，首先查看文件夹下是否有 package.json：
    ![vue-element-admin](./imgs/4.png)
  2. package.json 不存在，那么查找 index.js
    ![vue-element-admin](./imgs/5.png)
  3. 同一级目录下，存在 AppMain.vue 和 Navbar.vue，没有同名 js，所以加载的是 vue 文件
  4. 而 Settings 是一个文件夹，所以是加载的文件夹.打开 Settings 文件夹：
    ![vue-element-admin](./imgs/6.png)

    优先找 package.json。不存在。

    然后找 index.js，不存在。

    最后找 index.vue，存在。

