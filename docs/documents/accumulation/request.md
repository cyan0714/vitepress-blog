# application/x-www-form-urlencoded

## 当请求头的 content-type 为 application/x-www-form-urlencoded 时, 前端如何发送网络请求

### 方式 1

```js
export const getTaskReport = data => {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: `/app/business/dcs/taskReport`,
    method: 'POST',
    data,
  })
}
const params = {}
const formData = new URLSearchParams(params)
getTaskReport(formData).then(res => {
  this.matterList = res.resultData
})
```

### 方式 2

```js
export const getTaskReport = data => {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: `/app/business/dcs/taskReport`,
    method: 'POST',
    data,
  })
}
const formData = new FormData()
formData.append('key', 'value')
getTaskReport(formData).then(res => {
  this.matterList = res.resultData
})
```

### 方式 3 (推荐)

```js
import qs from 'qs'
export const getTaskReport = data => {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: `/app/business/dcs/taskReport`,
    method: 'POST',
    data: qs.stringify(data),
  })
}
const params = {}
getTaskReport(params).then(res => {
  this.matterList = res.resultData
})

特别地, 如果 params 中的属性仍然是一个对象, 则需要先用 JSON.stringify 进行转换
```
