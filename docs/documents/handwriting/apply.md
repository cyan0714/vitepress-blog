# 手写 apply

```js
Function.prototype.myApply = function (thisObj, args) {
  const fn = this
  
  // 处理 thisObj，如果是 null 或 undefined，在非严格模式下指向 window
  thisObj = (thisObj !== null && thisObj !== undefined) ? Object(thisObj) : window
  
  // 确保 args 是数组
  args = args || []
  
  // 将函数作为 thisObj 的属性，避免属性名冲突
  const fnKey = Symbol('fn')
  thisObj[fnKey] = fn
  
  // 调用函数并获取结果
  const result = thisObj[fnKey](...args)
  
  // 删除临时属性
  delete thisObj[fnKey]
  
  return result
}

function sum(num1, num2, num3, num4) {
  console.log('this:', this)
  console.log('参数:', num1, num2, num3, num4)
  return num1 + num2 + num3 + num4
}

// 测试 apply
const obj = { name: 'test object' }
const result = sum.myApply(obj, [10, 20, 30, 40])
console.log('result:', result)

// 对比原生 apply
const result2 = sum.apply(obj, [10, 20, 30, 40])
console.log('原生 apply result:', result2)
```
