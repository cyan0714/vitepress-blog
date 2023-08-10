# 手写Promise

```js
class MyPromise {
  constructor(executor) {
    static PENDING = 'pending'
    static FULFILLED = 'fulfilled'
    static REJECTED = 'rejected'

    this.status = MyPromise.PENDING
    this.res = undefined
    this.error = undefined
    this.onResolveCallbacks = []
    this.onRejectedCallbacks = []

    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.rejcet()
    }
  }

  resolve(value) {
    setTimeout(() => {
      if (this.status === MyPromise.PENDING) {
        this.status = MyPromise.FULFILLED
        this.res = value
        this.onResolveCallbacks.forEach(cb => cb(this.res))
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

    if (this.status === MyPromise.PENDING) {
      this.
    }
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}
```
测试代码:
```js
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, World!');
  }, 1000);
});

promise.then(value => {
  console.log(value);
})
