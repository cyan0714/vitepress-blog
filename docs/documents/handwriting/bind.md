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