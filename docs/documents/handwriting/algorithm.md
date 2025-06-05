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