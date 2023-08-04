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