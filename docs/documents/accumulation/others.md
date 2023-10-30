# 其他

## 如何解决移动端唤起键盘时键盘遮住输入框问题?

以 vant 为例

```html
<van-popup
  v-model="isShowPopup"
  :class="isFocus ? 'popup-container' : ''"
  round
  position="bottom"
  closeable
  close-on-click-overlay>
  <div ref="thly">
    <van-field
      v-model="applyDoneParams.content"
      colon
      label-width="4.5em"
      name="thly"
      label="申请理由"
      type="textarea"
      maxlength="200"
      placeholder="请输入申请理由"
      @focus="handleFocus"
      @blur="isFocus = false"
      required />
  </div>
</van-popup>
```

```js
data() {
  return {
    windowInnerHeight: 0,
    isFocus: false,
  }
},
mounted() {
  this.windowInnerHeight = window.innerHeight;
},
methods: {
  handleFocus() {
    setTimeout(() => {
      // 当软键盘的高度包含在 window.innerHeight 之中时，window.innerHeight 会随着软键盘的弹出而变小,
      // 这时可以使用 scrollIntoView() 将当前元素滚动到可视区域
      if (this.windowInnerHeight > window.innerHeight) {
        this.scrollIntoViewByFocus(this.$refs.thly)
      } else {
        // 当软键盘的高度不包含在 window.innerHeight 之中时(比如某些鸿蒙系统的手机), 则需要通过其他方法将元素滚动到可视区域(margin 或者 fixed)
        this.isFocus = true;
      }
    }, 300)
  },
  scrollIntoViewByFocus(dom) {
    const ua = navigator.userAgent;
    const iOS = /iPad|iPhone|iPod/.test(ua);
    setTimeout(() => {
      if (iOS) {
        if (!/OS 11_[0-3]\D/.test(ua)) {
          document.body.scrollTop = document.body.scrollHeight;
        }
      } else {
        dom.scrollIntoView(false);
      }
    }, 300);
  };
}
```

```css
.popup-container {
  margin-bottom: 40vh;
}
```

## 单行文本对齐
使用 html + css 实现以下效果:

![card](./imgs/2.png)

```html
<div class="card">
  <div class="person">
    <span class="key">处理人员</span>:
    <span class="value">张三</span>
  </div>
  <div class="dept">
    <span class="key">部门</span>:
    <span class="value">省政府督查室</span>
  </div>
</div>
```
```css
.card {
  width: 240px;
  padding: 14px;
  background:#ffffff;
  box-shadow:0px 1px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  > div {
    display: flex;
  }
  .person {
    margin-bottom: 12px;
  }
  /* 重要 */
  .key {
    color: #666;
    width: 4em;
    text-align: justify;
    text-align-last: justify;
  }
  .value {
    color: #000;
    margin-left: 10px;
  }
}
```

## 生成 private.key 和 public.key

![key](./imgs/1.png)

## ssh 连接报错

### ssh远程连接主机报错:Someone could be eavesdropping on you right now (man-in-the-middle attack)!

解决: 重新生成远程主机信息，命令如下:

```shell
ssh-keygen -R [远程主机IP]
```

### Permission denied (publickey,gssapi-keyex,gssapi-with-mic) 解决方法

```shell
1. sudo vim /etc/ssh/sshd_config

2. 增加如下修改
PasswordAuthentication yes
PermitRootLogin yes

3. 重启sshd
sudo systemctl restart sshd 或 service sshd restart

4. 去对应的云服务器平台重置密码
```

## vscode+vim 使用心得

### 标注位置
#### 标注m
m字母，记录当前光标的位置。例如：

现在光标在第10行，按mc，记录下当前位置。

#### 标注
标注位置后，进行翻页、跳转、移动光标，再按`字母，光标会迅速跳回到之前记录的位置。例如：

输入gg，光标回到第1行，再按`c，光标会回到第10行。


## 如何发送 content-type 为 application/x-www-form-urlencoded 的网络请求

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
const formData = new FormData()
formData.append('key', 'value')
getTaskReport(formData).then(res => {
  this.matterList = res.resultData
})
```

### 方式 2 (推荐)

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

## el-checkbox 阻止冒泡事件

```vue
<el-checkbox v-model="checked" @click.native="(e) => e.stopPropogation()" ></el-checkbox>
```

## 封装axios

### request.js
```js
import axios from 'axios';

const service = axios.create({
  timeout: 5 * 60000,
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  res => {
    return res
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
```

### api.js

```js
import request from './request';
import Qs from 'qs';

export const searchRepeated = function (data) {
  return request({
    url: `/api/searchRepeated/batchSearch`,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    data: Qs.stringify(data),
  });
};
```

## vue2如何实现页面滚动到某个位置时对应 tab 切换

```vue
<template>
  <div>
    <div class="tabs">
      <div class="tab" :class="{ active: currentTab === 'tab1' }">Tab 1</div>
      <div class="tab" :class="{ active: currentTab === 'tab2' }">Tab 2</div>
      <div class="tab" :class="{ active: currentTab === 'tab3' }">Tab 3</div>
    </div>
    <div id="section1">Section 1</div>
    <div id="section2">Section 2</div>
    <div id="section3">Section 3</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 'tab1',
    };
  },
  methods: {
    handleScroll() {
      const section1 = document.getElementById('section1');
      const section2 = document.getElementById('section2');
      const section3 = document.getElementById('section3');

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop >= section1.offsetTop && scrollTop < section2.offsetTop) {
        this.currentTab = 'tab1';
      } else if (scrollTop >= section2.offsetTop && scrollTop < section3.offsetTop) {
        this.currentTab = 'tab2';
      } else if (scrollTop >= section3.offsetTop) {
        this.currentTab = 'tab3';
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style>
.tabs {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #f0f0f0;
  padding: 10px;
}

.tab {
  cursor: pointer;
}

.tab.active {
  font-weight: bold;
}

section {
  height: 1000px;
  margin-top: 30px;
}
</style>
```

## vuepress 如何解决导入第三方包时报错: global is not defined

在 .vuepress/config.js 文件中添加以下代码:

```js
modules.exports = {
  configureWebpack: {
    node: {
      global: true,
      process: true,
      Buffer: true,
    },
  },
}
```

## js 如何判断对象自身为空？

```js
const obj = {}
Reflect.ownKeys(obj1).length === 0
```
