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
