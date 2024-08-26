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

vscode 下载 bookmark 插件，然后在 settings.json 中给 vim.normalModeKeyBindingsNonRecursive 添加如下配置：
```json
{
  "before": [
    "m"
  ],
  "commands": [
    "bookmarks.toggle"
  ]
}
```

### 如何在visual模式下快速使用引号包裹单词

对选中的单词或文字按下 `shift + s`，然后按 `"` 键即可快速包裹单词。


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
    // or:
    // data: Object.entries(data).reduce((prev, curr) => `${prev}${curr[0]}=${curr[1]}&`, '')
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

## 如何在不使用 webpack 等打包工具的情况下在 html 文件中使用 commonJS 或 esModule

一. commonJS
首先，浏览器是不能识别 require 函数的，想让浏览器能识别 require 可以使用 browserify 插件。
1. `npm install -g browserify`
2. 执行 `browserify your_file.js -o bundle.js` ，这将生成一个 bundle.js 的文件，然后在 html 文件中使用 script 标签引入这个文件即可

二. esModule
1. 在 script 标签中加入 type="module"
2. 这时会报跨域，可以使用 vscode 中的 live server 插件打开这个 html 即可解决，因为 live server 会在你本地起一个服务

## 使用 vue-cli5.x 创建的 vue2 项目如何打包图片

1. 将图片转换为 base64
在 vue.config.js 中配置以下代码：
```js
// vue-cli5.x用以下配置
chainWebpack: config => {
  config.module
    .rule('images')
    .test(/\.(jpg|png|gif|svg)$/)
    .set('parser', {
      dataUrlCondition: {
        maxSize: 20 * 1024 // 20KB
      }
    })
}
// vue-cli4.x用以下配置
chainWebpack: config => {
  config.module
    .rule('images')
    .test(/\.(jpg|png|gif)$/)
    .use('url-loader')
    .loader('url-loader')
    .tap(options => Object.assign(options, { limit: 10240 })); // 10KB
}
```

## Mac 环境变量

Mac 默认有两个 Shell，分别是 bash 和 zsh。

- bash 使用的配置文件是 ~/.bash_profile，zsh 使用的配置文件是 ~/.zshrc。
- 环境变量配置在 ~/.bash_profile 或 ~/.zshrc 文件中，格式为 export 变量名=变量值。
- 环境变量配置完成后，需要执行 source ~/.bash_profile 或 source ~/.zshrc 命令使环境变量生效。
- 环境变量中的冒号表示多个路径的分隔符
- $PATH 表示系统默认的路径，可以用 export PATH=$PATH:/usr/local/bin 追加自己的路径到系统默认路径中。

## Windows 如何查看本地有哪些端口正在运行服务

这条命令会筛选出所有正在监听的端口:
```bash
netstat -an | findstr LISTENING
```

这条命令会查找特定端口是否正在被使用:
```bash
netstat -an | findstr :<port_number>
```

显示出某个端口对应的 pid:
```bash
netstat -ano | findstr :8080
```

停止某个端口的服务(注意要以管理员身份运行)
```bash
taskkill /f /pid <pid>
```

## Mac 如何查看本地有哪些端口正在运行服务 

```zsh
netstat -antp tcp | grep LISTEN
```

## vue 如何实现切换 tab 时取消上一个 tab 的网络请求


### api.js
```js
export function pageItemForManagerApi(data = {}, o = {}) {
  return request({
    url: '/dataCatalog/pageItemForManager',
    method: 'post',
    data,
    ...o
  })
}
```

### example.vue 
```js
import axios from 'axios'
const { CancelToken } = axios
let source = CancelToken.source()

data() {
  return {
    prevMillisecond: 0,
  }
}
watch: {
  // 监听 activeTabName 的变化, 如果1.5秒内连续变化, 则取消上一次请求
  activeTabName(newVal, oldVal) {
    if (newVal === oldVal) {
      return
    }
    const nowMillisecond = Date.now()
    if (nowMillisecond - this.prevMillisecond < 1500 && newVal === 'catalog') {
      source.cancel('取消上一次请求')
      source = CancelToken.source()
    }
    this.prevMillisecond = nowMillisecond
  }
},
method: {
  async getData() {
    const res = await api({ ...this.params }, { cancelToken: source.token })
  }
}
```
