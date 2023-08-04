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