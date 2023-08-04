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