# 网络请求

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

### 方式 3

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
```

## 前端如何使用 element-ui 导入文件

```js
// 导入文件
export const importFile = data => {
  return request({
    url: '/api/tax/sales/importDetails',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
  })
}

// 以下方法为 el-upload 的 on-change 事件
handleChange(file, fileLis) {
  let param = new FormData();
  param.append('file', file.raw);
  param.append('deptId', this.formAdd.deptId);
  importFile(param).then(res => {
    this.dataCrudAdd = res.data.data;;
  });
},
```

## 前端如何导出(下载) excel

```js
// 导出
export function exportData(params) {
  return request({
    url: `/api/tax/sales/export`,
    method: 'get',
    responseType: 'blob',
    params,
  })
}
exportData({ id: this.selectionList[0].id })
  .then(res => {
    // res.data 为 Blob 对象
    downloadFile(res.data, '销售信息', 'xlsx')
  })
  .catch(err => {
    this.$message.error('导出失败')
  })

export const downloadFile = (obj, name, suffix) => {
  const blob = new Blob([obj], { type: "application/ms-excel" });
  const downloadElement = document.createElement("a");
  const href = window.URL.createObjectURL(blob); // 创建下载的链接
  downloadElement.href = href;
  downloadElement.download =  name +'-' + new Date().getTime() + '.' + suffix; // 下载后文件名
  document.body.appendChild(downloadElement);
  downloadElement.click(); // 点击下载
  document.body.removeChild(downloadElement); // 下载完成移除元素
  window.URL.revokeObjectURL(href);
}
```

## 前端如何导出(下载)其他文件
```js
/**
 * 跨域下载
 * @param method
 * @param url
 * @returns {{withCredentials} | XDomainRequest}
 */
function createCORSRequest(method, url) {
  let xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}
/**
 * 下载文件
 * @param {String} path - 文件地址
 * @param {String} name - 文件名,eg: test.png
 */
export const downloadFileBlob = (path, name) => {
  const xhr = createCORSRequest('GET',path);
  xhr.responseType = 'blob';
  xhr.setRequestHeader("Cache-Control","no-cache");
  xhr.send();
  xhr.onload = function () {
    if (this.status === 200 || this.status === 304) {
      // 如果是IE10及以上，不支持download属性，采用msSaveOrOpenBlob方法，但是IE10以下也不支持msSaveOrOpenBlob
      if ('msSaveOrOpenBlob' in navigator) {
        navigator.msSaveOrOpenBlob(this.response, name);
        return;
      }
      const url = URL.createObjectURL(this.response);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };
}

/**
 * 下载文件
 * @param {String} path - 文件地址
 * @param {String} name - 文件名,eg: test.png
 */
export const downloadFileBase64 = (path, name) => {
  const xhr = new XMLHttpRequest();
  xhr.open('get', path);
  xhr.responseType = 'blob';
  xhr.send();
  xhr.onload = function () {
    if (this.status === 200 || this.status === 304) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(this.response);
      fileReader.onload = function () {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = this.result;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      };
    }
  };
}
```
