# 网络请求

## 当请求头的 content-type 为 application/x-www-form-urlencoded 时, 前端如何发送网络请求

```js
export const getTaskReport = data => {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: `/app/business/dcs/taskReport`,
    method: 'POST',
    data,
  });
};
const params = { };
const formData = new URLSearchParams(params);
getTaskReport(formData).then(res => {
  this.matterList = res.resultData;
});
```
