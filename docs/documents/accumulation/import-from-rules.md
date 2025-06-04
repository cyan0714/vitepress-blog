# Import From 加载规则详解

## 问题背景

在使用 `import` 语句时，经常会遇到以下疑问：

- **文件后缀问题**：为什么有时候引入文件时后缀能省略，有时不能省略？
- **index 文件问题**：为什么引入某个文件夹下的 `index.js` 或 `index.vue` 时可以省略不写？
- **加载规则**：`import from` 的具体加载规则是什么？

## 解答分析

### 1. 文件后缀省略规则

Vue 项目使用 `import ... from ...` 来导入组件、库、变量等。**文件后缀是否可以省略取决于 webpack 的配置**。

#### Webpack 配置示例

```javascript
module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src')
    }
  }
  // ...
}
```

#### 使用效果

```javascript
// 以下两种写法等价
import test from './test.vue'
import test from './test'

// 以下两种写法等价  
import test from './test.js'
import test from './test'

// 注意：如果同一文件夹下同时存在 test.vue 和 test.js
// 则 .js 文件的优先级高于 .vue 文件
```

### 2. 文件夹和第三方包的加载规则

当 `from` 后的路径指向一个**文件夹**或**第三方包**时，按以下优先级顺序查找：

```javascript
// 加载优先级顺序
if (package.json 存在 && package.main 字段存在 && package.main 指定的文件存在) {
    // 优先级 1：使用 package.main 指定的文件
    // 注意：即使该文件格式或内容有错误，也会优先使用
    return package.main指定的文件;
} else if (index.js 存在) {
    // 优先级 2：使用 index.js
    return 'index.js';
} else {
    // 优先级 3：使用 index.vue
    return 'index.vue';
}
```

### 3. 实际案例分析

以 [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin/blob/master/src/layout/index.vue) 源码为例：

![vue-element-admin](./imgs/3.png)

#### 步骤 1：检查目标路径

```javascript
// 这里 from 的路径 './components' 是一个文件夹
import { AppMain, Navbar, Settings, Sidebar, TagsView } from './components'
```

#### 步骤 2：查找 package.json

![vue-element-admin](./imgs/4.png)

**结果**：`./components` 目录下没有 `package.json` 文件

#### 步骤 3：查找 index.js

![vue-element-admin](./imgs/5.png)

**结果**：存在 `index.js` 文件，因此使用该文件作为入口

#### 步骤 4：分析 index.js 内容

从图中可以看到：
- **AppMain.vue** 和 **Navbar.vue**：同级目录下没有同名 `.js` 文件，所以加载的是 `.vue` 文件
- **Settings**：这是一个文件夹，需要进一步按规则查找

#### 步骤 5：查找 Settings 文件夹

![vue-element-admin](./imgs/6.png)

对于 Settings 文件夹，按照加载规则：

1. **查找 package.json** → ❌ 不存在
2. **查找 index.js** → ❌ 不存在  
3. **查找 index.vue** → ✅ 存在，使用此文件

## 总结

理解 `import from` 的加载规则有助于：
- 正确组织项目文件结构
- 避免引入路径错误
- 提高代码的可维护性

**关键要点**：
- 文件后缀省略依赖于 webpack 配置
- 文件夹导入遵循固定的优先级规则
- package.json 的 main 字段具有最高优先级

