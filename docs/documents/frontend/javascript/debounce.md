# 防抖函数

## 不需要传参
```js
function debounce(fn, delay) {
  let timer = null
  return function() {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(this)
    }, delay)
  }
}
const btn = document.querySelector('button')
btn.addEventListener('click', debounce(function() {
  console.log(this); // button
}, 1000))
```

## 需要传参
```js
function debounce(fn, delay) {
  let timer = null
  return function() {
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
const btn = document.querySelector('button')
btn.addEventListener('click', debounce((a, b) => {
  console.log(a, b); // 1, 2
}, 1000).bind(btn, '1', '2'))
```