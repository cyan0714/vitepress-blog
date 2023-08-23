# 文件上传和下载

## 文件上传
后端代码(以 koa 为例):
```js
async saveFile(ctx, next) {
  // 1.获取文件信息
  const files = ctx.req.files

  // 2.将所有的文件信息保存到数据库中
  for (let file of files) {
    const { filename, mimetype, size } = file
    await createFile(filename, mimetype, size)
  }

  ctx.body = '文件上传成功~'
}

async createFile(filename, mimetype, size) {
  const statement = `INSERT INTO file (filename, mimetype, size) VALUES (?, ?, ?)`
  const [result] = await connection.execute(statement, [filename, mimetype, size])
  return result
}
```
前端发送请求(以 PostMan 为例):

![upload](./imgs/7.png)

## 文件下载
后端代码(以 koa 为例):
```js
async download(ctx, next) {
  const { filename } = ctx.params
  const [result] = await getFile(filename)
  ctx.response.set('content-type', result.mimetype)

  // ctx.body 返回的是一个 Blob 对象
  ctx.body = fs.createReadStream(`${ATTACHMENT_PATH}/${result.filename}`)
}

async getFile(filename) {
  const statement = `select * from file where filename = ?;`
  const [result] = await connection.execute(statement, [filename])
  return result
}
```

前端代码:
```js
const filename = 'e1b8e633751fd70f594c7f48831ee277'
download(filename).then(res => {
  // res 为 Blod 对象
  this.downloadFile(res, '文件名', 'xlsx');
})

function download(filename) {
  return request({
    url: `/file/download/${filename}`,
    method: 'get',
    responseType: 'blob',
  })
}

function downloadFile(obj, name, suffix) {
  const blob = new Blob([obj], { type: 'application/ms-excel' })
  console.log(blob.type);
  const downloadElement = document.createElement('a')
  const href = window.URL.createObjectURL(blob) // 创建下载的链接
  downloadElement.href = href
  downloadElement.download = name + '-' + new Date().getTime() + '.' + suffix // 下载后文件名
  document.body.appendChild(downloadElement)
  downloadElement.click() // 点击下载
  document.body.removeChild(downloadElement) // 下载完成移除元素
  window.URL.revokeObjectURL(href)
},

// 其中 request 为使用 axios 封装的函数:
import axios from 'axios'

axios.defaults.timeout = 20000
axios.defaults.baseURL ='http://localhost:8080'
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    return Promise.reject(new Error(error))
  }
)

export default axios
```




