./algorithm.md
---
# 常见算法手写
## 冒泡
```js
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i ; j++) {
      if (arr[j] > arr[j + 1]) {
         [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
      }
    }
  }
  return arr
}
```
## 选择
```js
function selectSort(arr) {
  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex],arr[i]]
  }
  return arr
}
```
## 插入
```js
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]
    let j = i
    while (j > 0) {
      if (arr[j - 1] > temp) {
        arr[j] = arr[j - 1]
      } else {
        break;
      }
      j -= 1
    }
    arr[j] = temp
  }
  return arr
}
```
## 归并
```js
function mergeSort(arr) {
  if (arr.length === 1) {return arr}
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length)
  const orderLeft = mergeSort(left)
  const orderRight = mergeSort(right)
  const res = []
  while (orderLeft.length || orderRight.length) {
    if (orderLeft.length && orderRight.length) {
      res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
    } else if (orderLeft.length) {
      res.push(orderLeft.shift())
    } else if (orderRight.length) {
      res.push(orderRight.shift())
    }
  }
  return res
}
```
## 快速
```js
function quickSort(arr) {
  if (arr.length < 2) return arr
  const left = []
  const right = []
  const mid = arr[0]
  for (let i = 1; i < arr.length; i+=1) {
    if (arr[i] < mid) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), mid, ...quickSort(right)]
}
```
## 二分搜索
```js
function binarySearch(arr,item) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midElement = arr[mid];
    if (midElement > item) {
      high = midElement - 1
    } else if (midElement < item) {
      low = midElement + 1;
    } else {
      return mid
    }
  }
  return -1;
}
```

---
./apply.md
---
# 手写 apply

```js
Function.prototype.myBind = function (thisObj, ...args) {
  const fn = this

  thisObj = (thisObj !== null && thisObj !== undefined) ? Object(thisObj) : window
  function tempFn(...tempArgs) {
    thisObj.fn = fn
    const tempFnRes = thisObj.fn(...args, ...tempArgs)
    delete thisObj.fn

    return tempFnRes
  }

  return tempFn
}

function sum(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4)
  return num1 + num2 + num3 + num4
}

const newSum = sum.myBind("abc", 10, 20)
const result = newSum(30, 40)
console.log('result: ', result);
```

---
./bind.md
---
# 手写 bind

```js
Function.prototype.myBind = function (thisObj, ...args) {
  const fn = this

  thisObj = (thisObj !== null && thisObj !== undefined) ? Object(thisObj) : window
  function tempFn(...tempArgs) {
    thisObj.fn = fn
    const tempFnRes = thisObj.fn(...args, ...tempArgs)
    delete thisObj.fn

    return tempFnRes
  }

  return tempFn
}

function sum(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4)
  return num1 + num2 + num3 + num4
}

const newSum = sum.myBind("abc", 10, 20)
const result = newSum(30, 40)
console.log('result: ', result);
```

---
./call.md
---
# 手写 call

```js
Function.prototype.myCall = function (thisObj, ...args) {
  const fn = this

  // 对 thisObj 转成对象类型(防止传入的是非对象类型)
  thisObj = (thisObj !== null && thisObj !== undefined) ? Object(thisObj) : window
  thisObj.fn = fn

  const result = thisObj.fn(...args)
  delete thisObj.fn

  return result

}

// function foo() {
//   console.log("foo函数被执行", this)
// }

// function sum(num1, num2) {
//   console.log("sum函数被执行", this, num1, num2)
//   return num1 + num2
// }

// const myFoo = foo.myCall({ name: 'myFoo' })
// console.log('myFoo: ', myFoo); // undefined

// const mySum = sum.myCall({ name:'mySum' }, 20, 30)
// console.log('mySum: ', mySum); // 50

function zero() {
  console.log("zero", this)
}
const myZero = zero.myCall(0) // Number(0)
```

---
./index.md
---


---
./lazy-load.md
---
# 手写懒加载

HTML:

```html
<img class="colleage-img" :data-src="`http://1.png`" style="width:600px;min-height:400px" />
<img class="colleage-img" :data-src="`http://2.png`" style="width:600px;min-height:400px" />
<img class="colleage-img" :data-src="`http://3.png`" style="width:600px;min-height:400px" />
```

JS:

```js
const imgs = document.querySelectorAll('.colleage-img');
const callback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const data_src = img.getAttribute('data-src');
      img.setAttribute('src', data_src);
      observer.unobserve(img);
    }
  });
};
const observer = new IntersectionObserver(callback);
imgs.forEach(image => {
  observer.observe(image);
});
```


---
./promise.md
---
# 手写Promise

```js
class MyPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  constructor(executor) {
    

    this.status = MyPromise.PENDING
    this.res = undefined
    this.error = undefined
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []

    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject()
    }
  }

  resolve(value) {
    setTimeout(() => {
      if (this.status === MyPromise.PENDING) {
        this.status = MyPromise.FULFILLED
        this.res = value
        this.onResolvedCallbacks.forEach(cb => cb(this.res))
      }
    })
  }

  reject(reason) {
    setTimeout(() => {
      if (this.status === MyPromise.PENDING) {
        this.status = MyPromise.REJECTED
        this.error = reason
        this.onRejectedCallbacks.forEach(cb => cb(this.error))
      }
    })
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => {};
    onRejected = typeof onRejected === 'function' ? onRejected : () => {};

    return new MyPromise((resolve, reject) => {
      const handleResolved = () => {
        try {
          const x = onFulfilled(this.res)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        } catch (error) {
          reject(error)
        }
      }

      const handleRejected = () => {
        try {
          const x = onRejected(this.error);
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
        } catch (error) {
          reject(error);
        }
      };

      if (this.status === MyPromise.FULFILLED) {
        handleResolved();
      } else if (this.status === MyPromise.REJECTED) {
        handleRejected();
      } else if (this.status === MyPromise.PENDING) {
        this.onResolvedCallbacks.push(handleResolved);
        this.onRejectedCallbacks.push(handleRejected);
      }
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}
```
测试代码:
```js
// 测试1(没有 setTimeout)
console.log('step 1')
const promise = new MyPromise((resolve, reject) => {
  console.log('step 2')
  resolve('Hello, World!');
});

promise.then(value => {
  console.log(value);
})

console.log('step 3')

// step1
// step2
// step3
// Hello, World!


// 测试2(有 setTimeout)
console.log('step 1')
const promise = new MyPromise((resolve, reject) => {
  console.log('step 2')
  setTimeout(() => {
    console.log('step 4');
    resolve('Hello, World!');
  })
});

promise.then(value => {
  console.log(value);
})

console.log('step 3')

// step1
// step2
// step3
// step4
// Hello, World!

// 测试3(链式调用)
const promise = new MyPromise((resolve, reject) => {
  resolve('Chen');
});

promise.then(value => {
  console.log(value);
  // 可以返回一个 promise 或者 字符串
  return new MyPromise((resolve, reject) => {
    resolve('Shi');
  })
}).then(res => {
  console.log(res + 'yan');
})

// Chen
// Shiyan
```


---
./vue-data-methods.md
---
# 手写通过 this 访问 data 和 method

```js

// vue 中为什么能通过 this. 的方式获取到 data 和 methods

// 手动实现
class Vue {
  constructor(options) {
    let vm = this;
    this.noop = function(a,b,c) {}
    vm.$options = options
    let opts = vm.$options
    if (opts.data) {
      this.initData(vm)
    }
    if (opts.methods) {
      this.initMethods(vm, opts.methods)
    }
  }
  initData(vm) {
    const data = vm._data = vm.$options.data
    const keys = Object.keys(data)
    let i = keys.length
    let sharedPropertyDefinition = {
      enumerable: true,
      configurable: true,
      get: this.noop,
      set: this.noop
    };
    function proxy(target, sourceKey, key) {
      sharedPropertyDefinition.get = function proxyGetter() {
        return this[sourceKey][key]
      }
      sharedPropertyDefinition.set = function proxySetter(val) {
        this[sourceKey][key] = val
      }
      Object.defineProperty(target, key, sharedPropertyDefinition)
    }
    while (i--) {
      let key = keys[i];
      proxy(vm, '_data', key)
    }
  }
  initMethods(vm, methods) {
    for (let key in methods) {
      vm[key] = typeof methods[key] !== 'function' ? this.noop : methods[key].bind(vm);
    }
  }
}

const vm = new Vue({
  data: {
    name: 'cyan',
    age: 23
  },
  methods: {
    sayName() {
      console.log(`Hi, I'm ${this.name}, I'm ${this.age} years old`);
    }
  }
})

console.log(vm.name);
console.log(vm.age);
vm.sayName();
```

---
./vue-reactive.md
---
# 手写 Vue 响应式原理

HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <span>姓名：{{name}}</span>
      <input type="text" v-model="name" />
      <span>工资：{{more.salary}}</span>
      <input type="text" v-model="more.salary" />
    </div>
  </body>
</html>

<script src="./vue.js"></script>

<script>
  const vm = new Vue({
    el: '#app',
    data: {
      name: 'cyan',
      more: {
        salary: 100
      }
    }
  })
</script>
```

JS
```js
class Vue {
  constructor(options) {
    this.$data = options.data
    this.$el = options.el
    Observer(this.$data)
    Compile(this.$el, this)
  }
}

function Observer(data) {
  if (!data || typeof data !== 'object') return
  const dep = new Dep()
  Object.keys(data).forEach(key => {
    let value = data[key]
    // 属性值是一个对象，继续调用自己
    Observer(value)
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        Dep.temp && dep.addSub(Dep.temp)
        return value
      },
      set(newVal) {
        value = newVal
        // 如果将属性值赋值为一个对象，继续调用自己
        Observer(newVal)
        dep.notify()
      }
    })
  })
}

function Compile(element, vm) {
  vm.$el = document.querySelector(element)
  const fragment = document.createDocumentFragment()
  let child;
  while (child = vm.$el.firstChild) {
    fragment.appendChild(child)
  }
  fragment_compile(fragment)
  function fragment_compile(node) {
    const pattern = /\{\{\s*(\S+)\s*\}\}/;
    if (node.nodeType === 3) {
      const texts = node.nodeValue
      const res_regExp = pattern.exec(texts)
      if (res_regExp) {
        const arr = res_regExp[1].split('.')
        const value = arr.reduce((prev, curr) => prev[curr], vm.$data)
        node.nodeValue = texts.replace(pattern, value)
        new Watcher(vm, res_regExp[1], (newVal) => {
          node.nodeValue = texts.replace(pattern, newVal)
        })
      }
    }
    if (node.nodeType === 1 && node.nodeName === "INPUT") {
      const attr = Array.from(node.attributes);
      attr.forEach((item) => {
        if (item.nodeName === "v-model") {
          const value = item.nodeValue
            .split(".")
            .reduce((total, current) => total[current], vm.$data);
          node.value = value;
          new Watcher(vm, item.nodeValue, (newVal) => {
            node.value = newVal;
          });
          node.addEventListener("input", (e) => {
            // ['more', 'salary']
            const arr1 = item.nodeValue.split(".");
            // ['more']
            const arr2 = arr1.slice(0, arr1.length - 1);
            // vm.$data.more
            const final = arr2.reduce(
              (total, current) => total[current],
              vm.$data
              );
            // vm.$data.more['salary'] = e.target.value
            final[arr1[arr1.length - 1]] = e.target.value;
          });
        }
      });
    }
    node.childNodes.forEach(child => fragment_compile(child))
  }
  vm.$el.appendChild(fragment);
}

class Dep {
  constructor() {
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  notify() {
    this.subs.forEach(sub => sub.update())
  }
}

class Watcher {
  constructor(vm, key, callback) {
    this.vm = vm;
    this.key = key;
    this.callback = callback
    Dep.temp = this
    key.split('.').reduce((prev, curr) => prev[curr], vm.$data);
    // 防止多次调用 getter 时，subs 里会添加重复的 watcher，所以应该将 Dep.temp 赋值为 null
    Dep.temp = null
  }
  update () {
    const value = this.key.split('.').reduce((prev, curr) => prev[curr], this.vm.$data)
    this.callback(value)
  }
}
```

---
