# 手写 call

**核心思想：通过将函数作为目标对象的属性来调用，从而改变 this 指向**

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

function zero() {
  console.log("zero", this)
}
const myZero = zero.myCall(0) // Number(0)
```
