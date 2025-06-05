## 简单介绍下 Promise

promise 是用来处理异步操作的。
它有三种状态 pending、fullfilled、rejected。
它接受一个函数作为参数，这个函数有两个参数，分别为 resolve 和 reject。
resolve 用来处理异步操作成功的情况，reject 则用来处理失败的情况。
执行 resolve，状态就会从 pending 变到 fullfilled，然后走 then 方法。
执行 reject，状态就变成 rejected，然后走 catch 方法。
无论执行 resolve 还是 reject ，都会走 finally 方法。可以解决回调地狱问题

## 简单介绍下 async/await 并说下原理

async 用来声明一个异步函数，返回值是一个 promise，无论内部是否有 await；await 用来等待一个 promise 完成，如果 promise 成功，await 返回 resolve 值，如果失败，await 则抛出错误，可以通过 try…catch 捕获

**原理：本质上是 generator 和 promise 的结合**

- generator 是一个生成器，使用 function\* 来定义，通过 yield 暂停函数执行，并返回一个迭代器对象，再通过迭代器对象的 next 方法恢复执行。
- yield 类似 await，不同的地方在于 generator 返回的是一个迭代器对象，async 函数返回的是一个 promise；async/await 会自动处理异步操作的结果，generator 则需要手动调用 next 方法

**扩展**

- 对比 promise 优势

1. 避免链式调用，使异步代码看起来更像是同步的
2. 使用 try…catch 捕获错误，比.catch 更直观

- 迭代器（iterator）和生成器（generator）的区别
  迭代器是一个对象，需要手动实现 next 方法；生成器是一个函数，通过 yield 自动实现 next 方法，生成器是迭代器的超集

## 作用域、作用域链、闭包以及实际应用场景

**作用域**：函数和变量的可访问范围，分为全局作用域和局部作用域（函数作用域和块级作用域）

**作用域链**：作用域链是 JavaScript 查找变量的一种机制。当访问一个变量时，JavaScript 会先在当前作用域查找，如果找不到，会逐级向上查找，直到全局作用域。这个查找路径就是作用域链。

**闭包**：闭包是指函数能够访问其词法作用域中的变量，即使函数在其作用域外执行。

**闭包实际应用场景**：

- 数据封装和私有变量
- 函数柯里化（多参数函数转化为一系列但参数函数）
- 事件处理（button.addEventListener）
- 延迟执行（函数里有一个 settimeout，settimeout 中访问了函数参数）
- 防抖和节流（防抖通过在内部定义一个 timer，然后 return 一个函数，函数内部先清空上一个 timer，然后再给 timer 重新赋值）

## 简单介绍下事件循环

首先，js 是单线程的，运行在浏览器的渲染主线程中。
当浏览器遇到事件处理、定时器、网络请求等操作时，为了不阻塞后续代码的执行，它会将这些异步操作放到一个消息队列中。
等到运行完同步的代码后，浏览器就会看看消息队列里还有没有要执行的任务。
同时，消息队列里的任务分为宏任务和微任务，微任务要比宏任务优先级高。
常见的宏任务有网络请求、定时器、requestAnimationFrame（浏览器中的动画帧回调），常见的微任务有 promise.then、await、MutationObserver（DOM 变化的观察者回调），vue 中数据批量更新以及 nexttick 也属于微任务

## 如何减少 dom 操作来防止回流和重绘

1. 将逐个样式修改调整为一次性修改，或者直接添加一个 className
2. 使用 css3 动画代替 js 动画
3. 使用 flex 布局，相比传统或浮动布局，会少一些布局计算
4. 减少元素层级嵌套
5. 使用虚拟 dom（通过 diff 算法批量更新真实 dom）
6. 使用 requestAnimationFrame 来合并动画帧更新

## cookie、localstorage、sessionstorage 区别

1. 存储大小：
   cookie：约 4KB。
   localStorage 和 sessionStorage：约 5MB。

2. 生命周期：
   cookie：可设置过期时间，手动清除或过期后失效。
   localStorage：永久存储，除非手动清除。
   sessionStorage：页面关闭后自动清除。

3. 作用域：
   cookie：可设置路径和域名，同域名下共享。
   localStorage：同域名下共享。
   sessionStorage：仅当前页面有效，不共享。

4. 与服务器的交互：
   cookie：每次请求自动携带在 HTTP 头部。
   localStorage 和 sessionStorage：不参与服务器通信。

5. 应用场景：
   cookie：存储登录状态、会话信息。
   localStorage：长期存储数据，如用户偏好。
   sessionStorage：临时存储数据，如表单数据。

## 通过 JSON.parse(JSON.stringfy()) 实现的深拷贝有什么缺点？

1. 不支持函数：
   函数属性会被忽略，拷贝后丢失。

2. 不支持特殊对象：
   RegExp、Map、Set、Date 等对象会被转换为空对象或字符串，无法正确拷贝。

3. 不支持循环引用：
   如果对象存在循环引用（如 a 引用 b，b 又引用 a），会报错。

4. 忽略 undefined 和 Symbol：
   undefined 和 Symbol 类型的属性会被忽略，拷贝后丢失。

5. 性能问题：
   对于大对象或复杂结构，JSON.stringify 和 JSON.parse 的性能较差。

## 如何让某个对象也能用 for...of ?

### 方法 1：实现 Symbol.iterator 方法

```js
const obj = {
  a: 1,
  b: 2,
  c: 3,

  // 实现迭代器接口
  [Symbol.iterator]() {
    const keys = Object.keys(this)
    let index = 0

    return {
      next: () => {
        if (index < keys.length) {
          const key = keys[index++]
          return { value: [key, this[key]], done: false }
        } else {
          return { done: true }
        }
      },
    }
  },
}

for (let [key, value] of obj) {
  console.log(key, value) // 输出: 'a' 1, 'b' 2, 'c' 3
}
```

### 方法 2：使用生成器函数（更简洁）

```js
const obj = {
  a: 1,
  b: 2,
  c: 3,

  // 使用生成器函数
  *[Symbol.iterator]() {
    for (let key in this) {
      if (this.hasOwnProperty(key) && key !== Symbol.iterator) {
        yield [key, this[key]]
      }
    }
  },
}

for (let [key, value] of obj) {
  console.log(key, value)
}
// 或
for (let value of obj) {
  console.log(value); // 输出: 1, 2, 3
}
```
