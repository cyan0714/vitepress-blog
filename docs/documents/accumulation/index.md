./about-npm.md
---
# npm 相关

## 查看 npm 源

```bash
npm config get registry # 查看 npm 当前镜像源

yarn config get registry # 查看 yarn 当前镜像源

```

## 设置 npm 源

```bash
npm config set registry https://registry.npmjs.org/ # 设置 npm 为官方源
npm config set registry https://registry.npm.taobao.org/ # 设置 npm 镜像源为淘宝镜像
npm config set registry https://registry.npmmirror.com/ # 设置 npm 镜像源为淘宝镜像(新)

yarn config set registry https://registry.yarnpkg.com/ # 设置 yarn 源为官方源
yarn config set registry https://registry.npm.taobao.org/ # 设置 yarn 源为淘宝镜像源
```

## npm install 时报错 certificate has expired 的解决方法
```bash
npm config set strict-ssl false
```

## npm install electron 失败的解决办法

1. 将 npm 源设置为淘宝镜像

```bash
npm config set registry https://registry.npm.taobao.org/
```

2. 配置本地文件 .npmrc(一般在 C:\Users\pc)
   添加以下配置:

ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"

## npm install 后报错 Node Sass does not yet support your current environment 的解决办法

直接把 node-sass 升级到最新版本

执行 npm install node-sass --save-dev

## gyp ERR! node-gyp -v v3.8.0 运行报错的解决办法

1. 将 python 降为3以下版本 (没试过, 不知道能不能成功)
2. 将 node-sass 删除, 然后安装 sass (亲测成功)

## npm link - 避免频繁发布更新

现在有两个项目，一个项目是 A，另一个项目是 B。

目标: 在 B 项目里，使用 A 项目里的模块

1. 先在 A 项目中执行 npm link(执行完毕后, 会在全局的 node_modules 文件夹里生成一个 A 项目的软连接, 指向实际的 A 项目)

2. 在 B 项目里执行 npm link A(执行完毕后, 会在 B 项目里的 node_modules 文件夹里生成一个 A 项目的软连接, 指向实际的 A 项目) 即可

> 修改 A 项目的代码后, B 项目会自动更新

## 使用 release-it 自动发布带有 changelog 的 npm 包

1. 执行 `npm init release-it`, 此时会在 package.json 中的 scripts 下添加 release 脚本, devDependencies 中也会有 release-it(同时会在项目的根目录下创建 .release-it.json 文件, 如果没有就手动创建)
2. 将以下代码粘贴到 .release-it.json 中

```json
{
  "github": {
    "release": false
  },
  "git": {
    "commitMessage": "release: v${version}"
  },
  "npm": {
    "publish": false
  },
  "hooks": {
    "after:bump": "echo 更新版本成功"
  },
  "plugins": {
    "@release-it/conventional-changelog": {
      "preset": "angular",
      "infile": "CHANGELOG.md"
    }
  }
}
```

3. 执行`npm i @release-it/conventional-changelog -D`
4. 执行 `npm run release`, 若手动指定版本, 执行 `npm run release --release-as x.x.x`

> 注意: 如果想在 CHANGELOG.md 中显示提交记录, 则每次的提交信息应以`feat、chore`等开头(具体可安装 git-cz 进行查看有哪些命令, 并在代码 commit 时执行`npm run commit`即可)

## 取消 npm 包的发布

`npm unpublish look-ui@x.x.x`

## 将 npm 包发布到公司内网仓库
### 方式一
1. 发布成功后使用 npm install look-ui 将包安装到本地
2. 使用 tar 命令将包打包成 tgz 格式：tar -czvf archive.tgz folder_name
   
   这会将名为"folder_name"的文件夹压缩成一个名为"archive.tgz"的tgz格式压缩文件。这个命令中的参数解释如下： 
- c: 创建一个新的压缩文件 
- z: 使用gzip进行压缩 
- v: 显示详细的压缩过程 
- f: 指定压缩文件的名称 

3. 将包上传到公司源即可

### 方式二
1. 直接去 npm 镜像源下载 tgz 包
2. 将包上传到公司源即可

方式二可能会出现阿里云镜像源同步 npm 官方源不及时的情况，如果着急，使用方式一


---
./build-own-chatgpt.md
---
# 搭建自己的 ChatGPT

## 准备
1. 一台云服务器
2. OPENAI_API_KEY 或者 [API2D](https://api2d.com/wiki/app)

## 在云服务器上安装 Docker 和 Docker Compose
以 CentOS7 为例:

安装 Docker
```bash
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install docker-ce docker-ce-cli containerd.io
```

启动 Docker，并设置开机自启
```bash
sudo systemctl start docker
sudo systemctl enable docker
```

验证 Docker 是否正确安装。输入以下命令，如果输出了 Docker 版本信息，则说明已经成功安装。
```bash
docker --version
```

安装 Docker Compose。可以使用 curl 命令从 GitHub 上下载最新版本的 Docker Compose。先执行以下命令安装 curl：
```bash
sudo yum install curl
```

下载最新版的 Docker Compose（请根据自己需要选择对应版本）：
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

授权给下载下来的二进制文件执行权限：
```bash
sudo chmod +x /usr/local/bin/docker-compose
```

验证是否成功安装 Docker Compose。
```bash
docker-compose --version
```

如果顺利完成以上操作，就可以开始部署了。

## 使用 Docker 部署

执行以下命令
```bash
docker pull yidadaa/chatgpt-next-web

docker run -d -p 3000:3000 \
   -e OPENAI_API_KEY="sk-xxxx" \
   -e CODE="your-password" \
   -e BASE_URL="" \
   yidadaa/chatgpt-next-web
```

## Docker 常用命令

### 查看正在运行的容器
```bash
docker ps
```

### 杀死正在运行的容器
```bash
docker kill my_container # 杀死名为 my_container 的容器
```

## 验证
容器启动后，就可以通过浏览器访问 http://<server_ip>:3000 来使用了。
其中 <server_ip> 是你的云服务器 IP 地址

## 感谢
感谢开源项目[ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web)


---
./china-map.md
---
<div id="china_map_box">
  <div id="china_map" style="width: 800px;height: 600px;"></div>
</div>

<script>
import * as echarts from "echarts";
import chinaMap from "./js/china.json";

export default {
  data() {
    return {
      options: {
        tooltip: {
          triggerOn: "mousemove",   //mousemove、click
          padding:8,
          borderWidth:1,
          borderColor:'#409eff',
          backgroundColor:'rgba(255,255,255,0.7)',
          textStyle:{
            color:'#000000',
            fontSize:13
          },
          formatter: function(e, t, n) {
            let data = e.data;
            //模拟数据
            data.specialImportant = Math.random()*1000 | 0;
            data.import = Math.random()*1000 | 0;
            data.compare = Math.random()*1000 | 0;
            data.common = Math.random()*1000 | 0;
            data.specail = Math.random()*1000 | 0;

            let context = `
               <div>
                   <p><b style="font-size:15px;">${data.name}</b>(2020年第一季度)</p>
                   <p class="tooltip_style"><span class="tooltip_left">事件总数</span><span class="tooltip_right">${data.value}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">特别重大事件</span><span class="tooltip_right">${data.specialImportant}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">重大事件</span><span class="tooltip_right">${data.import}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">较大事件</span><span class="tooltip_right">${data.compare}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">一般事件</span><span class="tooltip_right">${data.common}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">特写事件</span><span class="tooltip_right">${data.specail}</span></p>
               </div>
            `
            return context;
          }
        },
        visualMap: {
          show:true,
          left: 26,
          bottom: 40,
          showLabel:true,
          pieces: [
            {
              gte: 100,
              label: ">= 1000",
              color: "#1f307b"
            },
            {
              gte: 500,
              lt: 999,
              label: "500 - 999",
              color: "#3c57ce"
            },
            {
              gte: 100,
              lt:499,
              label: "100 - 499",
              color: "#6f83db"
            },
            {
              gte: 10,
              lt: 99,
              label: "10 - 99",
              color: "#9face7"
            },
            {
              lt:10,
              label:'<10',
              color: "#bcc5ee"
            }
          ]
        },
        geo: {
          map: "china",
          scaleLimit: {
            min: 1,
            max: 2
          },
          zoom: 1,
          top: 120,
          label: {
            normal: {
              show:true,
              fontSize: "14",
              color: "rgba(0,0,0,0.7)"
            }
          },
          itemStyle: {
            normal: {
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
              borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
              areaColor: "#f2d5ad",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0
            }
          }
        },
        series: [
          {
            name: "突发事件",
            type: "map",
            geoIndex: 0,
            data:[]
          }
        ]
      },
      //echart data
      dataList: [
        {
          name: "南海诸岛",
          value: 100,
          eventTotal:100,
          specialImportant:10,
          import:10,
          compare:10,
          common:40,
          specail:20
        },
        {
          name: "北京",
          value: 540
        },
        {
          name: "天津",
          value: 130
        },
        {
          name: "上海",
          value: 400
        },
        {
          name: "重庆",
          value: 750
        },
        {
          name: "河北",
          value: 130
        },
        {
          name: "河南",
          value: 830
        },
        {
          name: "云南",
          value: 110
        },
        {
          name: "辽宁",
          value: 19
        },
        {
          name: "黑龙江",
          value: 150
        },
        {
          name: "湖南",
          value: 690
        },
        {
          name: "安徽",
          value: 60
        },
        {
          name: "山东",
          value: 39
        },
        {
          name: "新疆",
          value: 4
        },
        {
          name: "江苏",
          value: 31
        },
        {
          name: "浙江",
          value: 104
        },
        {
          name: "江西",
          value: 36
        },
        {
          name: "湖北",
          value: 52
        },
        {
          name: "广西",
          value: 33
        },
        {
          name: "甘肃",
          value: 7
        },
        {
          name: "山西",
          value: 5
        },
        {
          name: "内蒙古",
          value: 778
        },
        {
          name: "陕西",
          value: 22
        },
        {
          name: "吉林",
          value: 4
        },
        {
          name: "福建",
          value: 18
        },
        {
          name: "贵州",
          value: 5
        },
        {
          name: "广东",
          value: 98
        },
        {
          name: "青海",
          value: 1
        },
        {
          name: "西藏",
          value: 0
        },
        {
          name: "四川",
          value: 44
        },
        {
          name: "宁夏",
          value: 4
        },
        {
          name: "海南",
          value: 22
        },
        {
          name: "台湾",
          value: 3
        },
        {
          name: "香港",
          value: 5
        },
        {
          name: "澳门",
          value: 555
        }
      ]
    };
  },
  methods: {
    //初始化中国地图
    initEchartMap() {
      let mapDiv = document.getElementById('china_map');
      let myChart = echarts.init(mapDiv);
      echarts.registerMap('china', chinaMap);
      myChart.setOption(this.options);
    },
    //修改echart配制
    setEchartOption(){
       this.options.series[0]['data'] = this.dataList;
    }
  },
  created() {
    this.setEchartOption();
  },
  mounted() {
    this.initEchartMap();
  }
};
</script>

<style>
#china_map_box {
  height: 100%;
  position: relative;
}
#china_map_box #china_map{
  height: 100%;
}
#china_map_box .china_map_logo{
  position: absolute;
  top: 0;
  left: 0;
  width:45px;
}
#china_map .tooltip_style{
  line-height:1.7;
  overflow: hidden;
}
#china_map .tooltip_left{
  float: left;
}
#china_map .tooltip_right{
  float: right;
}
</style>


---
./code-style.md
---
# 代码风格

## 对象
把简写属性放在开头
```js
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  episodeOne: 1,
	lukeSkywalker,
  twoJediWalkIntoACantina: 2,
  anakinSkywalker
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2
};
```
## 数组
当数组有多行时，在开始和结束符号均换行
```js
// bad
const arr = [
  [0, 1], [2, 3], [4, 5],
];

const objectInArray = [{
  id: 1,
}, {
  id: 2,
}];

const numberInArray = [
  1, 2,
];

// good
const arr = [[0, 1], [2, 3], [4, 5]];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [
  1,
  2,
];
```
## 解构
当访问对象的多个属性时，使用解构方式
```js
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```
数组解构
```js
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```
## 字符串
字符串使用单引号''
```js
// bad
const name = "Capt. Janeway";

// bad - template literals should contain interpolation or newlines
const name = `Capt. Janeway`;

// good
const name = 'Capt. Janeway';
```
## 函数
使用函数表达式，而不是函数声明
```js
// bad
function foo() {
  // ...
}

// good
const foo = function () {
  // ...
};
```
## 给参数设置默认值
```js
// really bad
function handleThings(opts) {
  // No! We shouldn’t mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}
```
## 将默认参数放到最后
```js
// bad
function handleThings(opts = {}, name) {
  // ...
}

// good
function handleThings(name, opts = {}) {
  // ...
}
```
## 变量
const 放在一起，let 放在一起
```js
// bad
let i, len, dragonball,
    items = getItems(),
    goSportsTeam = true;

// bad
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;

// good
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;
```
## 比较操作符和等于操作
使用简写方式判断，但是对 strings 和 numbers 比较使用显式判断
```js
// bad
if (isValid === true) {
  // ...
}

// good
if (isValid) {
  // ...
}

// bad
if (name) {
  // ...
}

// good
if (name !== '') {
  // ...
}

// bad
if (collection.length) {
  // ...
}

// good
if (collection.length > 0) {
  // ...
}
```
避免不必要的三元操作
```js
// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// good
const foo = a || b;
const bar = !!c;
const baz = !c;
```
## 控制语句
对于控制语句中的条件表达式太长的情况，应当换行处理，把操作符放在每行的开头。
```js
// bad
if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
  thing1();
}

// bad
if (foo === 123 &&
  bar === 'abc') {
  thing1();
}

// bad
if (foo === 123
  && bar === 'abc') {
  thing1();
}

// bad
if (
  foo === 123 &&
  bar === 'abc'
) {
  thing1();
}

// good
if (
  foo === 123
  && bar === 'abc'
) {
  thing1();
}

// good
if (
  (foo === 123 || bar === "abc")
  && doesItLookGoodWhenItBecomesThatLong()
  && isThisReallyHappening()
) {
  thing1();
}

// good
if (foo === 123 && bar === 'abc') {
  thing1();
}
```
## 注释
使用/** ... */多行注释
```js
// bad
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {

  // ...

  return element;
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {

  // ...

  return element;
}
```
单行注释使用//。//放在代码的上面一行，同时，如果不是区块的开头，注释上方空行处理。
```js
// bad
const active = true;  // is current tab

// good
// is current tab
const active = true;

// bad
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// good
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// also good
function getType() {
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}
```
## 空白
在 `{` 之前空格
```js
// bad
function test(){
  console.log('test');
}

// good
function test() {
  console.log('test');
}

// bad
dog.set('attr',{
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});

// good
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});
```
在条件判断语句的 `(` 之前空格。
```js
// bad
if(isJedi) {
  fight ();
}

// good
if (isJedi) {
  fight();
}

// bad
function fight () {
  console.log ('Swooosh!');
}

// good
function fight() {
  console.log('Swooosh!');
}
```
要求操作符周围有空格
```js
// bad
const x=y+5;

// good
const x = y + 5;
```
文件结束时换一行
在每个代码块的结束位置和下一语句的开头空行
```js
// bad
if (foo) {
  return bar;
}
return baz;

// good
if (foo) {
  return bar;
}

return baz;

// bad
const obj = {
  foo() {
  },
  bar() {
  },
};
return obj;

// good
const obj = {
  foo() {
  },

  bar() {
  },
};

return obj;

// bad
const arr = [
  function foo() {
  },
  function bar() {
  },
];
return arr;

// good
const arr = [
  function foo() {
  },

  function bar() {
  },
];

return arr;
```
禁止在 () 内有空格
```js
// bad
function bar( foo ) {
  return foo;
}

// good
function bar(foo) {
  return foo;
}

// bad
if ( foo ) {
  console.log(foo);
}

// good
if (foo) {
  console.log(foo);
}
```
禁止在 [] 内使用空格
```js
// bad
const foo = [ 1, 2, 3 ];
console.log(foo[ 0 ]);

// good
const foo = [1, 2, 3];
console.log(foo[0]);
```
在 {} 中使用空格
```js
// bad
const foo = {clark: 'kent'};

// good
const foo = { clark: 'kent' };
```
## 命名约定
不要保存 this 的引用。使用箭头函数
```js
// bad
function foo() {
  const self = this;
  return function () {
    console.log(self);
  };
}

// bad
function foo() {
  const that = this;
  return function () {
    console.log(that);
  };
}

// good
function foo() {
  return () => {
    console.log(this);
  };
}
```
文件名称与 export default 相符
```js
// bad
import CheckBox from './check_box'; // PascalCase import/export, snake_case filename
import forty_two from './forty_two'; // snake_case import/filename, camelCase export
import inside_directory from './inside_directory'; // snake_case import, camelCase export
import index from './inside_directory/index'; // requiring the index file explicitly
import insideDirectory from './insideDirectory/index'; // requiring the index file explicitly

// good
import CheckBox from './CheckBox'; // PascalCase export/import/filename
import fortyTwo from './fortyTwo'; // camelCase export/import/filename
import insideDirectory from './insideDirectory'; // camelCase export/import/directory name/implicit "index"
// ^ supports both insideDirectory.js and insideDirectory/index.js
```


---
./debug.md
---
# 调试技巧

## 1. 在 vue 文件中添加 debugger 进入浏览器后断点没有停下

打开 f12，点击设置，将下面的勾去掉

![11.png](./imgs/11.png)

如果断点进入函数后跳转到 vue.runtime.esm.js 文件，则点击上图中的 Add pattern 按钮，输入 vue.runtime.esm.js 保存即可

---
./deploy.md
---
# 服务器部署

## 购买服务器实例
网上教程很多, 这里就不介绍了

## 安装环境
### 安装 nodejs
```bash
yum install nodejs
```

### 安装 nginx
```bash
yum install nginx
```
启动 `nginx`:
```bash
systemctl start nginx.service
```
`nginx`常用命令
```bash
systemctl stop nginx.service //停止 Nginx 服务
systemctl restart nginx.service //重启 Nginx 服务
systemctl reload nginx.service //重新加载 Nginx 配置文件，然后重启 Nginx
systemctl status nginx.service //查看状态
systemctl enable nginx.service //设置开机自启动
systemctl disable nginx.service //停止开机自启动
```

### 安装 mysql (centOS 7.x)
```bash
yum install mysql //通过yum包管理器安装mysql客户端，该客户端可用于连接到MySQL服务器并执行各种操作。

yum install mysql-devel //通过yum包管理器安装mysql开发库，其中包含MySQL C API、头文件和库文件等开发工具。这些工具可用于开发与MySQL数据库交互的应用程序。

wget http://dev.mysql.com/get/mysql80-community-release-el7-5.noarch.rpm //使用wget命令从MySQL官网下载了一个名为“mysql80-community-release-el7-5.noarch.rpm”的RPM软件包。

rpm -ivh mysql80-community-release-el7-5.noarch.rpm //使用rpm命令将上面下载的RPM软件包安装到CentOS 7操作系统中。

yum install mysql-community-server //使用yum包管理器来安装MySQL社区版服务器。这个命令会自动下载和安装MySQL服务器以及相关的依赖项，并启动服务
```
注: 如果已经安装了 MySQL 客户端和开发库，那么第一行和第二行的代码就可以省略。如果已经添加了 MySQL 官方源，那么第三行的代码也可以省略。但如果是全新的系统，则需要执行所有这些命令来安装 MySQL 数据库。

开启MySQL后台服务:
```shell
systemctl start mysqld
```

随着系统⼀起启动:
```shell
systemctl enable mysqld
```

查看MySQL服务：active (running)表示启动成功(以下二者选一个):
```shell
systemctl status mysqld

ps -ef | grep mysql
```

mysql8 初次安装后，需要先通过以下命令查看密码:
```shell
cat /var/log/mysqld.log | grep password
```

mysql8 修改密码方式:
```shell
alter user 'root'@'localhost' identified by '这里填你要的密码';
```

在⾃⼰的电脑上连接 MySQL(也就是和 MySQL 建⽴远程连接, ⽐如直接使用 Navicat ⼯具连接 MySQL, 下方代码在远程服务器上执行):
```shell
use mysql;
select host, user from user; // 查看user表中，连接权限，默认看到root是localhost
update user set host = '%' where user = 'root'; // 修改权限
配置3306的安全组
修改完成后 还需要刷新一下服务配置，不然修改不会生效
mysql> FLUSH PRIVILEGES;
```

## 配置 nginx
在 /etc/nginx/nginx.conf 下配置服务:
```txt
server {
		listen       8080;
		listen       [::]:8080;
		server_name  _;
		root         /usr/share/nginx/html;
	# Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    error_page 404 /404.html;
    location = /404.html {
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
    }

		location / {
        root   /home/vue3-cloud-music;
				try_files $uri $uri/  /index.html;
        index  index.html;
  	}
}
```

## 数据库迁移
1. 在服务器 MySQL 中创建和本地同名的数据库;
2. 在 Navicat 中本地 MySQL 直接导出数据库;
3. 在 Navicat 中服务器 MySQL 中执⾏ MySQL(如果运行报错则将"在每个运行中运行多个查询"的勾去掉).


---
./development-skills.md
---
# 开发技巧

## 小技巧
1. 在移动端上，使用`overflow-y:scorll`属性时，你会发现滚动的效果很木，很慢，这时候可以使用`-webkit-overflow-scrolling: touch`这个属性，让滚动条产生滚动回弹的效果，就像 ios 原生的滚动条一样流畅。
2. 如果 api 名和 method 名相同, 可以在 method 前加 \_ 来区分(Vue)
3. audio 标签不加任何属性, 在页面就不会显示该元素
4. `xxx().then(res ⇒ {})` 可以优化为 `xxx().then(({data = {}} ⇒ {} )`
5. 开发前统一: border border-radius color 变量
6. 批量添加 iconfont 图标
7. 按下 f12，在控制台输入以下代码即可将所有图标添加到购物车

```js
const shopCar = document.getElementsByClassName('icon-gouwuche1')
for (let i = 0; i < shopCar.length; i++) {
  shopCar[i].click()
}
```

8. 字体图标添加渐变色

```css
background: linear-gradient(180deg, #fabd3d 0%, #10ddcc 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

9. 基于 dayjs 和 element 实现的快速时段选择

```js
import dayjs from 'dayjs'

// isCurrent 为 true 则为今天(day) | 本周(week) | 本月(month) | 本年(year)
const getRangeTime = (timeRange, isCurrent = true) => {
  return {
    startTime: isCurrent
      ? dayjs().startOf(timeRange).format('YYYY-MM-DD HH:mm:ss')
      : dayjs()
          .add(-1, timeRange)
          .startOf(timeRange)
          .format('YYYY-MM-DD HH:mm:ss'),
    endTime: isCurrent
      ? dayjs().endOf(timeRange).format('YYYY-MM-DD HH:mm:ss')
      : dayjs()
          .add(-1, timeRange)
          .endOf(timeRange)
          .format('YYYY-MM-DD HH:mm:ss'),
  }
}

export function quickSelectTimeRange() {
  return [
    {
      text: '今天',
      onClick(picker) {
        const timeObj = getRangeTime('day')
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      },
    },
    {
      text: '昨天',
      onClick(picker) {
        const timeObj = getRangeTime('day', false)
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      },
    },
    {
      text: '本周',
      onClick(picker) {
        const timeObj = getRangeTime('week')
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      },
    },
    {
      text: '上周',
      onClick(picker) {
        const timeObj = getRangeTime('week', false)
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      },
    },
    {
      text: '本月',
      onClick(picker) {
        const timeObj = getRangeTime('month')
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      },
    },
    {
      text: '上月',
      onClick(picker) {
        const timeObj = getRangeTime('month', false)
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      },
    },
    {
      text: '本年',
      onClick(picker) {
        const timeObj = getRangeTime('year')
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      },
    },
    {
      text: '上年',
      onClick(picker) {
        const timeObj = getRangeTime('year', false)
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      },
    },
  ]
}
```

10. 如何在 mysql 中上传图片
    To upload an image in MySQL, you can use the BLOB data type. Here are the steps to do it:

1. Create a table with a BLOB column to store the image:

```sql
CREATE TABLE images (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  image BLOB
);
```

2. Insert the image into the table using the LOAD_FILE() function:

```sql
INSERT INTO images (name, image)
VALUES ('image1.jpg', LOAD_FILE('/path/to/image1.jpg'));
```

Note: Make sure the MySQL server has the FILE privilege enabled.
Alternatively, you can use a programming language like PHP or Python to upload the image to the database.

LOAD_FILE() 函数中的地址是相对于 MySQL 服务器的文件系统路径。如果您在 LOAD_FILE() 函数中使用的是绝对路径，则会返回 NULL 。因此，建议您使用相对路径。如果您不确定 MySQL 服务器的文件系统路径，可以使用 `SELECT @@secure_file_priv;` 命令来查看。此命令将返回 MySQL 服务器的安全文件目录的路径。在安全文件目录中，您可以使用相对路径来引用文件。

## 使用策略模式验证必填项

bad

```js
if (!values.username) {
  this.$message.error('用户名不能为空')
} else if (!values.password) {
  this.$message.error('密码不能为空')
} else if (!values.phoneNumber) {
  this.$message.error('手机号不能为空')
} else {
  this.submit()
}
```

good

```js
const validators = [
  { message: '用户名不能为空', required: true, key: 'username' },
  { message: '密码不能为空', required: true, key: 'password' },
  { message: '手机号不能为空', required: true, key: 'phoneNumber' },
]

export default {
  methods: {
    validator(values) {
      const result = validators.some(el => {
        if (el.required && !values[el.key]) {
          this.$message.error(el.message)
          return true
        }
      })
      return result
    },
    submit(values) {
      if (this.validator(values)) {
        return
      }

      // ... 调用接口
    },
  },
}
```

## 巧用解构

bad

```js
handleParams() {
  const params = {};
  params.id = this.formItem.id;
  params.startDate = this.formItem.startDate.format("YYYY-MM-DD");
  params.endDate = this.formItem.endDate.format("YYYY-MM-DD");
  params.price = this.formItem.price.toString();
  params.type = this.formItem.type;
  params.total = this.formItem.total;
  params.name = this.formItem.name;
  params.comment = this.formItem.comment;
  // ... 此处省略一万行代码
}
```

good

```js
handleParams() {
  const { startDate, endDate, price, ...params } = this.formItem;
  params.startDate = startDate.format("YYYY-MM-DD");
  params.endDate = endDate.format("YYYY-MM-DD");
  params.price = price.toString();
  // ... 此处省掉一万行代码
}
```

## 多个参数使用对象传参

```js
// bad
const foo = (name, age, height) => {
  console.log(name)
}

foo('cyan')
foo('cyan', '', 180)

// good
const foo = ({ name, age, height }) => {
  console.log(name)
}

foo({ name: 'cyan' })
foo({ name: 'cyan', height: 180 })
```


---
./diy-elementui-style.md
---
# 修改 element 表格默认样式

## 表格外边框颜色

```scss
::v-deep .el-table--border {
  border-color: #2648da;
}
```

## 取消表格 hover 时的背景色

```scss
::v-deep .el-table tbody tr:hover > td {
  background-color: #00136f !important;
}
::v-deep .el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
  border: 1px solid #2949d2 !important;
  // 去掉顶部和左侧的边框是因为防止边框重叠
  border-top: none !important;
  border-left: none !important;
}
```

## 表格第一行顶部边框

```scss
::v-deep .el-table--enable-row-transition .el-table__body tr:nth-child(1) .el-table__cell {
  border-top: 1px solid #2949d2 !important;
}
```

## 表格第一列左侧边框

```scss
::v-deep .el-table--enable-row-transition .el-table__body tr td:nth-child(1).el-table__cell {
  border-left: 1px solid #2949d2 !important;
}
```

## 表头行背景色

```scss
::v-deep .el-table th.el-table__cell {
  border: none;
  background-color: #00136f;
  color: #fff;
  text-align: center;
}
```

## 修改表格头部背景

```scss
::v-deep .el-table th {
  background: orange;
}
```

## 修改表格行背景

```scss
::v-deep .el-table tr {
  background: #eee;
}
```

## 修改斑马线表格的背景

```scss
::v-deep .el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #ccc;
}
```

## 修改行内线的颜色

```scss
::v-deep .el-table td,
.building-top .el-table th.is-leaf {
  border-bottom: 2px solid #eee;
}
```

## 修改表格最底部边框颜色和高度

```scss
::v-deep .el-table::before {
  border-bottom: 1px solid #ccc;
  height: 3px;
}
```

## 修改表头字体颜色

```scss
::v-deep .el-table thead {
  color: #ccc;
  font-weight: 700;
}
```

## 修改表格内容字体颜色和字体大小

```scss
::v-deep .el-table {
  color: #6b91ce;
  font-size: 14px;
}
```

## 修改表格无数据的时候背景，字体颜色

```scss
::v-deep .el-table__empty-block {
  background: #ccc;
}
::v-deep .el-table__empty-text {
  color: #fff;
}
```

## 修改表格鼠标悬浮 hover 背景色

```scss
::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: pink;
}
```

## 修改表格中默认滚动条样式

```scss
::v-deep .el-table {
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 8px;
    height: 0;
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #316fff;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background-color: #00136f;
  }
}
```

## 去掉表格最后一条白线

```scss
::v-deep .el-table::before {
  height: 0;
}
```


---
./download-file.md
---
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
  // excel
  const blob = new Blob([obj], { type: 'application/ms-excel' })
  // 非 excel
  // const blob = new Blob([obj])
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






---
./echarts.md
---
# Echarts 相关

## Echarts 地图的 JSON 文件中各个字段的含义
**coordinates**: 用逗号分隔的一个个UTF-8字符串，每个字符串都是一片区域

**childNum**: 多边形区域数量

**encodeOffsets**: 是解压需要的信息，跟 coordinates 一一对应

问题来源：在海南省地图 JSON 文件里添加三沙区域，并保持地图较大的可视区域

知识来源:  https://github.com/apache/echarts/issues/3308

## legend 固定列数且对齐

效果:
![image](./imgs/10.png)

代码:
```js
legend: [
  {
    bottom: 20,
    icon: 'circle',
    orient: 'vertical',
    left: 50,
    data: top10Legend.slice(0, columnItemCount),
    itemWidth: 20,
    itemHeight: 14
  },
  {
    bottom: 20,
    icon: 'circle',
    orient: 'vertical',
    right: 50,
    data: top10Legend.slice(columnItemCount, top10Legend.length),
    itemWidth: 20,
    itemHeight: 14
  }
],

// 其中 top10Legend 为 ['石油、煤炭及其他燃料加工业', '电气机械和器材制造业', ...], columnItemCount 为 Math.floor(top10Legend.length / 2)
```

## markline

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
  </head>

  <body>
    <div id="chartContainer" style="width: 600px; height: 400px;"></div>

    <script>
      var data = [
        { name: 'Category 1', value: -10 },
        { name: 'Category 2', value: 20 },
        { name: 'Category 3', value: -5 },
        { name: 'Category 4', value: 15 },
      ];

      var sum = 0;
      for (var i = 0; i < data.length; i++) {
        sum += data[i].value;
      }
      var average = sum / data.length;

      var chartOptions = {
        xAxis: {
          type: 'value',
          axisLine: { show: false },
          splitLine: { show: false },
        },
        yAxis: {
          type: 'category',
          data: data.map(item => item.name),
          axisLine: { show: false },
          axisTick: { show: false },
        },
        series: [
          {
            type: 'bar',
            data: data.map(item => item.value),
            itemStyle: {
              color: function (params) {
                return params.value >= 0 ? 'green' : 'red';
              },
            },
            markLine: {
              lineStyle: {
                type: 'solid',
                color: '#000',
              },
              label: {
                fontSize: 16,
                color: this.mainColor,
              },
              symbol: 'circle',
              symbolSize: 5,
              symbolOffset: [-1, 0.5, 0, 0],
              data: [{ type: 'average', name: 'Avg' }],
            },
          },
        ],
      };

      var chartContainer = document.getElementById('chartContainer');
      var chart = echarts.init(chartContainer);
      chart.setOption(chartOptions);
    </script>
  </body>
</html>
```

## 条形图如何隐藏 y 轴方向上的 0 刻度线

如何将下图圈起来的线隐藏起来?
![8](./imgs/8.png)

设置 y 轴的 axisLine
![9](./imgs/9.png)

最终代码:

```js
yAxis: {
  type: "category",
  axisLine: {
    show: true,
    lineStyle: {
      color: '#fff',
    }
  },
  // 重新定义类目轴上文字颜色
  axisLabel: {
    color: '#000'
  },
}
```

## 基于 vue2 封装 echarts 常用组件

1. 封装 Chart 组件

```vue
<template>
  <div id="chart">
    <div ref="echartRef" :style="chartStyle"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  components: {},
  data() {
    return {
      chart: null
    }
  },
  props: {
    option: {
      type: Object,
      default: () => {},
    },
    chartStyle: {
      type: Object,
      default: () => {
        return {
          width: '600px',
          height: '300px'
        }
      },
    }
  },
  computed: {},
  created() {},
  mounted() {
    this.chart = echarts.init(this.$refs.echartRef)
    this.chart.setOption(this.option)
  },
  watch: {
    option: {
      handler: function (newOption, oldVal) {
        this.chart.setOption(newOption)
      },
      deep: true
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
</style>
```

2. 新建配置文件 option.js

```js
export default {
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['园区累计企业数', '园区累计新增注册企业', '园区新增企业'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: '园区累计企业数',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210],
    },
    {
      name: '园区累计新增注册企业',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310, 191, 234, 290, 330, 310],
    },
    {
      name: '园区新增企业',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190],
    },
  ],
};
```

3. 使用

```vue
<Chart :option="option" :chartStyle="{ height: '300px', width: '1200px' }"></Chart>
```


---
./element-ui-skills.md
---
# ElementUI 常见问题以及技巧

## 一. 在 el-table 中的插槽使用 el-input 时遇到的问题
1. 输入时，在控制台能看到 value 已经改变，但视图无法同步更新
可以使用 this.tableList = JSON.parse(JSON.stringify(this.tableList)) 来解决这个问题，但会出现问题2
2. 第一次输入后，光标自动定位到末尾，令人摸不着头脑
可以使用原生 input 来代替 el-input

## 二. 在 el-table 中某一行的某个属性改变了，页面无法重新渲染
试了以下方法都不行
1. this.$set()
2. this.$forceUpdate
解决方法：
- 给 el-table 一个 key, 改变某个属性后修改这个 key，比如可以用 Math.random() 作为新的 key
- 看以下代码

```js
getStatus(row, index) {
  let item = JSON.parse(JSON.stringify(this.tableList[index]))
  item.editable = row.editable
  this.$set(this.tableList, index, item)
}
```

### 三. 父组件使用一个 el-input 封装的子组件, 且通过 v-model 绑定时, input 框无法输入问题
给表单重新赋值
```js
this.form = {...this.form}
```

### 四. 如何解决表单重新赋值后, 自动触发表单验证的问题
```js
this.form.a = ''
setTimeout(() => {
  this.$refs.form.clearValidate()
}, 0);
```

### 五. el-table 右侧固定布局 fixed=“right“ 错位
```css
.table {
  ::v-deep .el-table__fixed-right {
    height: 100% !important;
  }
  ::v-deep .el-table__fixed {
    height: 100% !important;
  }
}
```


---
./gantt.md
---
# dhtmlx-gantt 甘特图

<!-- <script setup>
  import Gantt from '/.vitepress/components/gantt/main.vue';
</script>

<Gantt /> -->

::: details
  <<< @/.vitepress/components/gantt/main.vue
:::

## GanttComponent.vue

::: details
  <<< @/.vitepress/components/gantt/GanttComponent.vue
:::

---
./hainan-map.md
---
## 海南省地图

<div id="map-container">
  <div ref="echartRef" class="chart" style="width: 800px; height: 500px;"></div>
</div>

<script>
import * as echarts from "echarts";
import haiNanMap from "./js/haiNan.json";

export default {
  name: "haiNan-map",
  components: {},
  data() {
    return {
      chart: null,
      option: null,
      defaultCode: {
        name: "hainan",
        mapCode: haiNanMap,
      }
    };
  },
  mounted() {
    this.loadMap(); //初始化地图
  },
  methods: {
    loadMap() {
      const chart = echarts.init(this.$refs.echartRef);
      echarts.registerMap(this.defaultCode.name, this.defaultCode.mapCode);

      const convertFeatures = haiNanMap.features.map((item, index) => {
        return {
          name: item.properties.name,
          value: item.properties.cp,
        };
      });

      this.option = {
        title: {
          text: "HN",
          subtext: "hn map",
          left: "right",
          show: false
        },
        // visualMap: {
        //   left: "right",
        //   realtime: false,
        //   min: 500000,
        //   max: 38000000,
        //   inRange: {
        //     color: ["#1e5a9a", "#4395e1"],
        //   },
        //   text: ["High", "Low"],
        //   // calculable: true,
        // },
        // toolbox: {
        //   show: false,
        //   orient: "vertical",
        //   left: "left",
        //   top: "top",
        //   feature: {
        //     dataView: { readOnly: false },
        //     restore: {},
        //     saveAsImage: {},
        //   },
        // },

        // 地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
        geo: {
          show: true,
          map: this.defaultCode.name,
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          roam: false, // 是否可拖拽
          aspectScale: 1,
          itemStyle: {
            areaColor: "#01215c",
            borderWidth: 1, // 外层边框宽度
            borderColor: "#fff",
            shadowColor: "#021838",
            shadowOffsetX: 0,
            shadowOffsetY: 0,
          },
        },

        series: [
          {
            name: "Map",
            type: "map",
            aspectScale: 1,
            roam: false,
            map: this.defaultCode.name,
            label: {
              formatter: ["{b|{b}}", "{c|{c}}"].join("\n"),
              show: true,
              rich: {
                b: {
                  color: "#fff",
                  lineHeight: 26,
                  fontSize: 15,
                },
                c: {
                  color: "#fff",
                  fontSize: 15,
                },
              },
            },
            itemStyle: {
              borderColor: "#2a7fa3",
              areaColor: "#01215c",
              borderWidth: 1.2,
              shadowColor: "rgba(100, 100, 100, 0.6)",
              shadowBlur: 100,
              shadowOffsetX: -10,
              opacity: 0.9,
              emphasis: {
                areaColor: "#0e56c2",
              },
            },
            data: [
              { name: "三沙市", value: 0, itemStyle: {borderColor: "#0e56c2"}},
              { name: "儋州市", value: 4822023 },
              { name: "海口市", value: 2685905 },
              { name: "三亚市", value: 6553255 },
              { name: "白沙县", value: 2949131 },
              { name: "保亭县", value: 38041430 },
              { name: "昌江县", value: 5187582 },
              { name: "澄迈县", value: 3590347 },
              { name: "定安县", value: 917092 },
              { name: "东方市", value: 632323 },
              { name: "乐东县", value: 19317568 },
              { name: "临高县", value: 9919945 },
              { name: "陵水县", value: 1392313 },
              { name: "琼海市", value: 1595728 },
              { name: "琼中县", value: 12875255 },
              { name: "屯昌县", value: 6537334 },
              { name: "万宁市", value: 3074186 },
              { name: "文昌市", value: 2085905 },
              { name: "五指山市", value: 4380415 },
              { name: "秀英区", value: 114822023 },
              { name: "龙华区", value: 4822023 },
              { name: "琼山区", value: 19317568 },
              { name: "美兰区", value: 38041430 },
              { name: "崖州区", value: 5187582 },
              { name: "天涯区", value: 3590347 },
              { name: "吉阳区", value: 917092 },
              { name: "海棠区", value: 632323 },
            ],
          },
          {
            name: "pic",
            type: "scatter",
            coordinateSystem: "geo",
            //自定义图片的 位置（lng, lat）
            data: convertFeatures,
            //自定义图片的 大小
            symbolSize: [40, 40],
            //自定义图片的 路径(注：必须以image://开头)
            symbol: `image://https://images.wanjunshijie.com/2021/08/20210828120639693.png?imageView2/0/format/webp/q/75`,
          },

          {
            name: '引导线',
            type: 'lines',
            symbol: 'circle',
            symbolSize: 1,
            opacity: 1,
            data: [
              {
                name: '海口市',
                coords: [[110.42, 19.8651], [110.63119, 20.201971]]
              }
            ],
            label: {
              show: true,
              padding: [10, 20],
              color: '#fff',
              backgroundColor: '#af6062',
              borderRadius: 6,
              formatter: () => {
                return 'label';
              },
            },
            lineStyle: {
              type: 'solid',
              opacity: 1,
              color: '#725846',
            },
          }
        ],
      };
      chart.setOption(this.option);
      chart.on("click", function (params) {
        alert("当前点击:" + '\n 城市：' + params.name + '\n value值：' + params.value);
      });
    }
  },
};
</script>

<style lang="scss">
</style>


---
./import-export-file.md
---
# 前端如何导入导出文件
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


---
./import-from-rules.md
---
# import from 加载规则

疑问:

- import 某个文件时为什么有时后缀能省, 有时不能省?
- 为什么引入某个文件夹下的 index.js 或者 index.vue 时可以省略不写?
- import from 的加载规则是什么样的?

分析:

- Vue 使用 **import** ... **from ...** 来导入组件，库，变量等。如果路径是以 js，vue，json 结尾, 则可以省略。这里可以通过 webpack 来配置：

    ```jsx
    module.exports = {
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': resolve('src')
        }
      }
    ...
    }
    ```

    ```jsx
    import test from './test.vue' 等同于 import test from './test'
    import test from './test.js' 等同于 import test from './test'
    // 如果 test.vue，test.js 在同一个文件夹下，.js 比 .vue 的优先级高
    ```

- 如果 from 后的路径是一个文件夹或第三方包, 加载规则如下:

    ```jsx
    if(package.json 存在 && package.main 字段存在 && package.main 指定的 js 存在) {
        取 package.main 指定的 js 作为 from 的来源，即使该 js 可能格式或内容错误
    } else if(index.js 存在){
        取 index.js 作为 from 的来源
    } else {
        取 index.vue 作为 from 的来源
    }
    ```

- 以 vue-element-admin 源码为例(https://github.com/PanJiaChen/vue-element-admin/blob/master/src/layout/index.vue)
  ![vue-element-admin](./imgs/3.png)
  1. 这里，from 的路径'./components'就是个文件夹。于是，按照前面的规则，首先查看文件夹下是否有 package.json：
    ![vue-element-admin](./imgs/4.png)
  2. package.json 不存在，那么查找 index.js
    ![vue-element-admin](./imgs/5.png)
  3. 同一级目录下，存在 AppMain.vue 和 Navbar.vue，没有同名 js，所以加载的是 vue 文件
  4. 而 Settings 是一个文件夹，所以是加载的文件夹.打开 Settings 文件夹：
    ![vue-element-admin](./imgs/6.png)

    优先找 package.json。不存在。

    然后找 index.js，不存在。

    最后找 index.vue，存在。



---
./index.md
---
./about-npm.md
---
# npm 相关

## 查看 npm 源

```bash
npm config get registry # 查看 npm 当前镜像源

yarn config get registry # 查看 yarn 当前镜像源

```

## 设置 npm 源

```bash
npm config set registry https://registry.npmjs.org/ # 设置 npm 为官方源
npm config set registry https://registry.npm.taobao.org/ # 设置 npm 镜像源为淘宝镜像
npm config set registry https://registry.npmmirror.com/ # 设置 npm 镜像源为淘宝镜像(新)

yarn config set registry https://registry.yarnpkg.com/ # 设置 yarn 源为官方源
yarn config set registry https://registry.npm.taobao.org/ # 设置 yarn 源为淘宝镜像源
```

## npm install 时报错 certificate has expired 的解决方法
```bash
npm config set strict-ssl false
```

## npm install electron 失败的解决办法

1. 将 npm 源设置为淘宝镜像

```bash
npm config set registry https://registry.npm.taobao.org/
```

2. 配置本地文件 .npmrc(一般在 C:\Users\pc)
   添加以下配置:

ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"

## npm install 后报错 Node Sass does not yet support your current environment 的解决办法

直接把 node-sass 升级到最新版本

执行 npm install node-sass --save-dev

## gyp ERR! node-gyp -v v3.8.0 运行报错的解决办法

1. 将 python 降为3以下版本 (没试过, 不知道能不能成功)
2. 将 node-sass 删除, 然后安装 sass (亲测成功)

## npm link - 避免频繁发布更新

现在有两个项目，一个项目是 A，另一个项目是 B。

目标: 在 B 项目里，使用 A 项目里的模块

1. 先在 A 项目中执行 npm link(执行完毕后, 会在全局的 node_modules 文件夹里生成一个 A 项目的软连接, 指向实际的 A 项目)

2. 在 B 项目里执行 npm link A(执行完毕后, 会在 B 项目里的 node_modules 文件夹里生成一个 A 项目的软连接, 指向实际的 A 项目) 即可

> 修改 A 项目的代码后, B 项目会自动更新

## 使用 release-it 自动发布带有 changelog 的 npm 包

1. 执行 `npm init release-it`, 此时会在 package.json 中的 scripts 下添加 release 脚本, devDependencies 中也会有 release-it(同时会在项目的根目录下创建 .release-it.json 文件, 如果没有就手动创建)
2. 将以下代码粘贴到 .release-it.json 中

```json
{
  "github": {
    "release": false
  },
  "git": {
    "commitMessage": "release: v${version}"
  },
  "npm": {
    "publish": false
  },
  "hooks": {
    "after:bump": "echo 更新版本成功"
  },
  "plugins": {
    "@release-it/conventional-changelog": {
      "preset": "angular",
      "infile": "CHANGELOG.md"
    }
  }
}
```

3. 执行`npm i @release-it/conventional-changelog -D`
4. 执行 `npm run release`, 若手动指定版本, 执行 `npm run release --release-as x.x.x`

> 注意: 如果想在 CHANGELOG.md 中显示提交记录, 则每次的提交信息应以`feat、chore`等开头(具体可安装 git-cz 进行查看有哪些命令, 并在代码 commit 时执行`npm run commit`即可)

## 取消 npm 包的发布

`npm unpublish look-ui@x.x.x`

## 将 npm 包发布到公司内网仓库
### 方式一
1. 发布成功后使用 npm install look-ui 将包安装到本地
2. 使用 tar 命令将包打包成 tgz 格式：tar -czvf archive.tgz folder_name
   
   这会将名为"folder_name"的文件夹压缩成一个名为"archive.tgz"的tgz格式压缩文件。这个命令中的参数解释如下： 
- c: 创建一个新的压缩文件 
- z: 使用gzip进行压缩 
- v: 显示详细的压缩过程 
- f: 指定压缩文件的名称 

3. 将包上传到公司源即可

### 方式二
1. 直接去 npm 镜像源下载 tgz 包
2. 将包上传到公司源即可

方式二可能会出现阿里云镜像源同步 npm 官方源不及时的情况，如果着急，使用方式一


---
./build-own-chatgpt.md
---
# 搭建自己的 ChatGPT

## 准备
1. 一台云服务器
2. OPENAI_API_KEY 或者 [API2D](https://api2d.com/wiki/app)

## 在云服务器上安装 Docker 和 Docker Compose
以 CentOS7 为例:

安装 Docker
```bash
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install docker-ce docker-ce-cli containerd.io
```

启动 Docker，并设置开机自启
```bash
sudo systemctl start docker
sudo systemctl enable docker
```

验证 Docker 是否正确安装。输入以下命令，如果输出了 Docker 版本信息，则说明已经成功安装。
```bash
docker --version
```

安装 Docker Compose。可以使用 curl 命令从 GitHub 上下载最新版本的 Docker Compose。先执行以下命令安装 curl：
```bash
sudo yum install curl
```

下载最新版的 Docker Compose（请根据自己需要选择对应版本）：
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

授权给下载下来的二进制文件执行权限：
```bash
sudo chmod +x /usr/local/bin/docker-compose
```

验证是否成功安装 Docker Compose。
```bash
docker-compose --version
```

如果顺利完成以上操作，就可以开始部署了。

## 使用 Docker 部署

执行以下命令
```bash
docker pull yidadaa/chatgpt-next-web

docker run -d -p 3000:3000 \
   -e OPENAI_API_KEY="sk-xxxx" \
   -e CODE="your-password" \
   -e BASE_URL="" \
   yidadaa/chatgpt-next-web
```

## Docker 常用命令

### 查看正在运行的容器
```bash
docker ps
```

### 杀死正在运行的容器
```bash
docker kill my_container # 杀死名为 my_container 的容器
```

## 验证
容器启动后，就可以通过浏览器访问 http://<server_ip>:3000 来使用了。
其中 <server_ip> 是你的云服务器 IP 地址

## 感谢
感谢开源项目[ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web)


---
./china-map.md
---
<div id="china_map_box">
  <div id="china_map" style="width: 800px;height: 600px;"></div>
</div>

<script>
import * as echarts from "echarts";
import chinaMap from "./js/china.json";

export default {
  data() {
    return {
      options: {
        tooltip: {
          triggerOn: "mousemove",   //mousemove、click
          padding:8,
          borderWidth:1,
          borderColor:'#409eff',
          backgroundColor:'rgba(255,255,255,0.7)',
          textStyle:{
            color:'#000000',
            fontSize:13
          },
          formatter: function(e, t, n) {
            let data = e.data;
            //模拟数据
            data.specialImportant = Math.random()*1000 | 0;
            data.import = Math.random()*1000 | 0;
            data.compare = Math.random()*1000 | 0;
            data.common = Math.random()*1000 | 0;
            data.specail = Math.random()*1000 | 0;

            let context = `
               <div>
                   <p><b style="font-size:15px;">${data.name}</b>(2020年第一季度)</p>
                   <p class="tooltip_style"><span class="tooltip_left">事件总数</span><span class="tooltip_right">${data.value}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">特别重大事件</span><span class="tooltip_right">${data.specialImportant}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">重大事件</span><span class="tooltip_right">${data.import}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">较大事件</span><span class="tooltip_right">${data.compare}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">一般事件</span><span class="tooltip_right">${data.common}</span></p>
                   <p class="tooltip_style"><span class="tooltip_left">特写事件</span><span class="tooltip_right">${data.specail}</span></p>
               </div>
            `
            return context;
          }
        },
        visualMap: {
          show:true,
          left: 26,
          bottom: 40,
          showLabel:true,
          pieces: [
            {
              gte: 100,
              label: ">= 1000",
              color: "#1f307b"
            },
            {
              gte: 500,
              lt: 999,
              label: "500 - 999",
              color: "#3c57ce"
            },
            {
              gte: 100,
              lt:499,
              label: "100 - 499",
              color: "#6f83db"
            },
            {
              gte: 10,
              lt: 99,
              label: "10 - 99",
              color: "#9face7"
            },
            {
              lt:10,
              label:'<10',
              color: "#bcc5ee"
            }
          ]
        },
        geo: {
          map: "china",
          scaleLimit: {
            min: 1,
            max: 2
          },
          zoom: 1,
          top: 120,
          label: {
            normal: {
              show:true,
              fontSize: "14",
              color: "rgba(0,0,0,0.7)"
            }
          },
          itemStyle: {
            normal: {
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
              borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
              areaColor: "#f2d5ad",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0
            }
          }
        },
        series: [
          {
            name: "突发事件",
            type: "map",
            geoIndex: 0,
            data:[]
          }
        ]
      },
      //echart data
      dataList: [
        {
          name: "南海诸岛",
          value: 100,
          eventTotal:100,
          specialImportant:10,
          import:10,
          compare:10,
          common:40,
          specail:20
        },
        {
          name: "北京",
          value: 540
        },
        {
          name: "天津",
          value: 130
        },
        {
          name: "上海",
          value: 400
        },
        {
          name: "重庆",
          value: 750
        },
        {
          name: "河北",
          value: 130
        },
        {
          name: "河南",
          value: 830
        },
        {
          name: "云南",
          value: 110
        },
        {
          name: "辽宁",
          value: 19
        },
        {
          name: "黑龙江",
          value: 150
        },
        {
          name: "湖南",
          value: 690
        },
        {
          name: "安徽",
          value: 60
        },
        {
          name: "山东",
          value: 39
        },
        {
          name: "新疆",
          value: 4
        },
        {
          name: "江苏",
          value: 31
        },
        {
          name: "浙江",
          value: 104
        },
        {
          name: "江西",
          value: 36
        },
        {
          name: "湖北",
          value: 52
        },
        {
          name: "广西",
          value: 33
        },
        {
          name: "甘肃",
          value: 7
        },
        {
          name: "山西",
          value: 5
        },
        {
          name: "内蒙古",
          value: 778
        },
        {
          name: "陕西",
          value: 22
        },
        {
          name: "吉林",
          value: 4
        },
        {
          name: "福建",
          value: 18
        },
        {
          name: "贵州",
          value: 5
        },
        {
          name: "广东",
          value: 98
        },
        {
          name: "青海",
          value: 1
        },
        {
          name: "西藏",
          value: 0
        },
        {
          name: "四川",
          value: 44
        },
        {
          name: "宁夏",
          value: 4
        },
        {
          name: "海南",
          value: 22
        },
        {
          name: "台湾",
          value: 3
        },
        {
          name: "香港",
          value: 5
        },
        {
          name: "澳门",
          value: 555
        }
      ]
    };
  },
  methods: {
    //初始化中国地图
    initEchartMap() {
      let mapDiv = document.getElementById('china_map');
      let myChart = echarts.init(mapDiv);
      echarts.registerMap('china', chinaMap);
      myChart.setOption(this.options);
    },
    //修改echart配制
    setEchartOption(){
       this.options.series[0]['data'] = this.dataList;
    }
  },
  created() {
    this.setEchartOption();
  },
  mounted() {
    this.initEchartMap();
  }
};
</script>

<style>
#china_map_box {
  height: 100%;
  position: relative;
}
#china_map_box #china_map{
  height: 100%;
}
#china_map_box .china_map_logo{
  position: absolute;
  top: 0;
  left: 0;
  width:45px;
}
#china_map .tooltip_style{
  line-height:1.7;
  overflow: hidden;
}
#china_map .tooltip_left{
  float: left;
}
#china_map .tooltip_right{
  float: right;
}
</style>


---
./code-style.md
---
# 代码风格

## 对象
把简写属性放在开头
```js
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  episodeOne: 1,
	lukeSkywalker,
  twoJediWalkIntoACantina: 2,
  anakinSkywalker
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2
};
```
## 数组
当数组有多行时，在开始和结束符号均换行
```js
// bad
const arr = [
  [0, 1], [2, 3], [4, 5],
];

const objectInArray = [{
  id: 1,
}, {
  id: 2,
}];

const numberInArray = [
  1, 2,
];

// good
const arr = [[0, 1], [2, 3], [4, 5]];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [
  1,
  2,
];
```
## 解构
当访问对象的多个属性时，使用解构方式
```js
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```
数组解构
```js
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```
## 字符串
字符串使用单引号''
```js
// bad
const name = "Capt. Janeway";

// bad - template literals should contain interpolation or newlines
const name = `Capt. Janeway`;

// good
const name = 'Capt. Janeway';
```
## 函数
使用函数表达式，而不是函数声明
```js
// bad
function foo() {
  // ...
}

// good
const foo = function () {
  // ...
};
```
## 给参数设置默认值
```js
// really bad
function handleThings(opts) {
  // No! We shouldn’t mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}
```
## 将默认参数放到最后
```js
// bad
function handleThings(opts = {}, name) {
  // ...
}

// good
function handleThings(name, opts = {}) {
  // ...
}
```
## 变量
const 放在一起，let 放在一起
```js
// bad
let i, len, dragonball,
    items = getItems(),
    goSportsTeam = true;

// bad
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;

// good
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;
```
## 比较操作符和等于操作
使用简写方式判断，但是对 strings 和 numbers 比较使用显式判断
```js
// bad
if (isValid === true) {
  // ...
}

// good
if (isValid) {
  // ...
}

// bad
if (name) {
  // ...
}

// good
if (name !== '') {
  // ...
}

// bad
if (collection.length) {
  // ...
}

// good
if (collection.length > 0) {
  // ...
}
```
避免不必要的三元操作
```js
// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// good
const foo = a || b;
const bar = !!c;
const baz = !c;
```
## 控制语句
对于控制语句中的条件表达式太长的情况，应当换行处理，把操作符放在每行的开头。
```js
// bad
if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
  thing1();
}

// bad
if (foo === 123 &&
  bar === 'abc') {
  thing1();
}

// bad
if (foo === 123
  && bar === 'abc') {
  thing1();
}

// bad
if (
  foo === 123 &&
  bar === 'abc'
) {
  thing1();
}

// good
if (
  foo === 123
  && bar === 'abc'
) {
  thing1();
}

// good
if (
  (foo === 123 || bar === "abc")
  && doesItLookGoodWhenItBecomesThatLong()
  && isThisReallyHappening()
) {
  thing1();
}

// good
if (foo === 123 && bar === 'abc') {
  thing1();
}
```
## 注释
使用/** ... */多行注释
```js
// bad
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {

  // ...

  return element;
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {

  // ...

  return element;
}
```
单行注释使用//。//放在代码的上面一行，同时，如果不是区块的开头，注释上方空行处理。
```js
// bad
const active = true;  // is current tab

// good
// is current tab
const active = true;

// bad
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// good
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// also good
function getType() {
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}
```
## 空白
在 `{` 之前空格
```js
// bad
function test(){
  console.log('test');
}

// good
function test() {
  console.log('test');
}

// bad
dog.set('attr',{
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});

// good
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});
```
在条件判断语句的 `(` 之前空格。
```js
// bad
if(isJedi) {
  fight ();
}

// good
if (isJedi) {
  fight();
}

// bad
function fight () {
  console.log ('Swooosh!');
}

// good
function fight() {
  console.log('Swooosh!');
}
```
要求操作符周围有空格
```js
// bad
const x=y+5;

// good
const x = y + 5;
```
文件结束时换一行
在每个代码块的结束位置和下一语句的开头空行
```js
// bad
if (foo) {
  return bar;
}
return baz;

// good
if (foo) {
  return bar;
}

return baz;

// bad
const obj = {
  foo() {
  },
  bar() {
  },
};
return obj;

// good
const obj = {
  foo() {
  },

  bar() {
  },
};

return obj;

// bad
const arr = [
  function foo() {
  },
  function bar() {
  },
];
return arr;

// good
const arr = [
  function foo() {
  },

  function bar() {
  },
];

return arr;
```
禁止在 () 内有空格
```js
// bad
function bar( foo ) {
  return foo;
}

// good
function bar(foo) {
  return foo;
}

// bad
if ( foo ) {
  console.log(foo);
}

// good
if (foo) {
  console.log(foo);
}
```
禁止在 [] 内使用空格
```js
// bad
const foo = [ 1, 2, 3 ];
console.log(foo[ 0 ]);

// good
const foo = [1, 2, 3];
console.log(foo[0]);
```
在 {} 中使用空格
```js
// bad
const foo = {clark: 'kent'};

// good
const foo = { clark: 'kent' };
```
## 命名约定
不要保存 this 的引用。使用箭头函数
```js
// bad
function foo() {
  const self = this;
  return function () {
    console.log(self);
  };
}

// bad
function foo() {
  const that = this;
  return function () {
    console.log(that);
  };
}

// good
function foo() {
  return () => {
    console.log(this);
  };
}
```
文件名称与 export default 相符
```js
// bad
import CheckBox from './check_box'; // PascalCase import/export, snake_case filename
import forty_two from './forty_two'; // snake_case import/filename, camelCase export
import inside_directory from './inside_directory'; // snake_case import, camelCase export
import index from './inside_directory/index'; // requiring the index file explicitly
import insideDirectory from './insideDirectory/index'; // requiring the index file explicitly

// good
import CheckBox from './CheckBox'; // PascalCase export/import/filename
import fortyTwo from './fortyTwo'; // camelCase export/import/filename
import insideDirectory from './insideDirectory'; // camelCase export/import/directory name/implicit "index"
// ^ supports both insideDirectory.js and insideDirectory/index.js
```


---
./debug.md
---
# 调试技巧

## 1. 在 vue 文件中添加 debugger 进入浏览器后断点没有停下

打开 f12，点击设置，将下面的勾去掉

![11.png](./imgs/11.png)

如果断点进入函数后跳转到 vue.runtime.esm.js 文件，则点击上图中的 Add pattern 按钮，输入 vue.runtime.esm.js 保存即可

---
./deploy.md
---
# 服务器部署

## 购买服务器实例
网上教程很多, 这里就不介绍了

## 安装环境
### 安装 nodejs
```bash
yum install nodejs
```

### 安装 nginx
```bash
yum install nginx
```
启动 `nginx`:
```bash
systemctl start nginx.service
```
`nginx`常用命令
```bash
systemctl stop nginx.service //停止 Nginx 服务
systemctl restart nginx.service //重启 Nginx 服务
systemctl reload nginx.service //重新加载 Nginx 配置文件，然后重启 Nginx
systemctl status nginx.service //查看状态
systemctl enable nginx.service //设置开机自启动
systemctl disable nginx.service //停止开机自启动
```

### 安装 mysql (centOS 7.x)
```bash
yum install mysql //通过yum包管理器安装mysql客户端，该客户端可用于连接到MySQL服务器并执行各种操作。

yum install mysql-devel //通过yum包管理器安装mysql开发库，其中包含MySQL C API、头文件和库文件等开发工具。这些工具可用于开发与MySQL数据库交互的应用程序。

wget http://dev.mysql.com/get/mysql80-community-release-el7-5.noarch.rpm //使用wget命令从MySQL官网下载了一个名为“mysql80-community-release-el7-5.noarch.rpm”的RPM软件包。

rpm -ivh mysql80-community-release-el7-5.noarch.rpm //使用rpm命令将上面下载的RPM软件包安装到CentOS 7操作系统中。

yum install mysql-community-server //使用yum包管理器来安装MySQL社区版服务器。这个命令会自动下载和安装MySQL服务器以及相关的依赖项，并启动服务
```
注: 如果已经安装了 MySQL 客户端和开发库，那么第一行和第二行的代码就可以省略。如果已经添加了 MySQL 官方源，那么第三行的代码也可以省略。但如果是全新的系统，则需要执行所有这些命令来安装 MySQL 数据库。

开启MySQL后台服务:
```shell
systemctl start mysqld
```

随着系统⼀起启动:
```shell
systemctl enable mysqld
```

查看MySQL服务：active (running)表示启动成功(以下二者选一个):
```shell
systemctl status mysqld

ps -ef | grep mysql
```

mysql8 初次安装后，需要先通过以下命令查看密码:
```shell
cat /var/log/mysqld.log | grep password
```

mysql8 修改密码方式:
```shell
alter user 'root'@'localhost' identified by '这里填你要的密码';
```

在⾃⼰的电脑上连接 MySQL(也就是和 MySQL 建⽴远程连接, ⽐如直接使用 Navicat ⼯具连接 MySQL, 下方代码在远程服务器上执行):
```shell
use mysql;
select host, user from user; // 查看user表中，连接权限，默认看到root是localhost
update user set host = '%' where user = 'root'; // 修改权限
配置3306的安全组
修改完成后 还需要刷新一下服务配置，不然修改不会生效
mysql> FLUSH PRIVILEGES;
```

## 配置 nginx
在 /etc/nginx/nginx.conf 下配置服务:
```txt
server {
		listen       8080;
		listen       [::]:8080;
		server_name  _;
		root         /usr/share/nginx/html;
	# Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    error_page 404 /404.html;
    location = /404.html {
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
    }

		location / {
        root   /home/vue3-cloud-music;
				try_files $uri $uri/  /index.html;
        index  index.html;
  	}
}
```

## 数据库迁移
1. 在服务器 MySQL 中创建和本地同名的数据库;
2. 在 Navicat 中本地 MySQL 直接导出数据库;
3. 在 Navicat 中服务器 MySQL 中执⾏ MySQL(如果运行报错则将"在每个运行中运行多个查询"的勾去掉).


---
./development-skills.md
---
# 开发技巧

## 小技巧
1. 在移动端上，使用`overflow-y:scorll`属性时，你会发现滚动的效果很木，很慢，这时候可以使用`-webkit-overflow-scrolling: touch`这个属性，让滚动条产生滚动回弹的效果，就像 ios 原生的滚动条一样流畅。
2. 如果 api 名和 method 名相同, 可以在 method 前加 \_ 来区分(Vue)
3. audio 标签不加任何属性, 在页面就不会显示该元素
4. `xxx().then(res ⇒ {})` 可以优化为 `xxx().then(({data = {}} ⇒ {} )`
5. 开发前统一: border border-radius color 变量
6. 批量添加 iconfont 图标
7. 按下 f12，在控制台输入以下代码即可将所有图标添加到购物车

```js
const shopCar = document.getElementsByClassName('icon-gouwuche1')
for (let i = 0; i < shopCar.length; i++) {
  shopCar[i].click()
}
```

8. 字体图标添加渐变色

```css
background: linear-gradient(180deg, #fabd3d 0%, #10ddcc 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

9. 基于 dayjs 和 element 实现的快速时段选择

```js
import dayjs from 'dayjs'

// isCurrent 为 true 则为今天(day) | 本周(week) | 本月(month) | 本年(year)
const getRangeTime = (timeRange, isCurrent = true) => {
  return {
    startTime: isCurrent
      ? dayjs().startOf(timeRange).format('YYYY-MM-DD HH:mm:ss')
      : dayjs()
          .add(-1, timeRange)
          .startOf(timeRange)
          .format('YYYY-MM-DD HH:mm:ss'),
    endTime: isCurrent
      ? dayjs().endOf(timeRange).format('YYYY-MM-DD HH:mm:ss')
      : dayjs()
          .add(-1, timeRange)
          .endOf(timeRange)
          .format('YYYY-MM-DD HH:mm:ss'),
  }
}

export function quickSelectTimeRange() {
  return [
    {
      text: '今天',
      onClick(picker) {
        const timeObj = getRangeTime('day')
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      },
    },
    {
      text: '昨天',
      onClick(picker) {
        const timeObj = getRangeTime('day', false)
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      },
    },
    {
      text: '本周',
      onClick(picker) {
        const timeObj = getRangeTime('week')
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      },
    },
    {
      text: '上周',
      onClick(picker) {
        const timeObj = getRangeTime('week', false)
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      },
    },
    {
      text: '本月',
      onClick(picker) {
        const timeObj = getRangeTime('month')
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      },
    },
    {
      text: '上月',
      onClick(picker) {
        const timeObj = getRangeTime('month', false)
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      },
    },
    {
      text: '本年',
      onClick(picker) {
        const timeObj = getRangeTime('year')
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      },
    },
    {
      text: '上年',
      onClick(picker) {
        const timeObj = getRangeTime('year', false)
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      },
    },
  ]
}
```

10. 如何在 mysql 中上传图片
    To upload an image in MySQL, you can use the BLOB data type. Here are the steps to do it:

1. Create a table with a BLOB column to store the image:

```sql
CREATE TABLE images (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  image BLOB
);
```

2. Insert the image into the table using the LOAD_FILE() function:

```sql
INSERT INTO images (name, image)
VALUES ('image1.jpg', LOAD_FILE('/path/to/image1.jpg'));
```

Note: Make sure the MySQL server has the FILE privilege enabled.
Alternatively, you can use a programming language like PHP or Python to upload the image to the database.

LOAD_FILE() 函数中的地址是相对于 MySQL 服务器的文件系统路径。如果您在 LOAD_FILE() 函数中使用的是绝对路径，则会返回 NULL 。因此，建议您使用相对路径。如果您不确定 MySQL 服务器的文件系统路径，可以使用 `SELECT @@secure_file_priv;` 命令来查看。此命令将返回 MySQL 服务器的安全文件目录的路径。在安全文件目录中，您可以使用相对路径来引用文件。

## 使用策略模式验证必填项

bad

```js
if (!values.username) {
  this.$message.error('用户名不能为空')
} else if (!values.password) {
  this.$message.error('密码不能为空')
} else if (!values.phoneNumber) {
  this.$message.error('手机号不能为空')
} else {
  this.submit()
}
```

good

```js
const validators = [
  { message: '用户名不能为空', required: true, key: 'username' },
  { message: '密码不能为空', required: true, key: 'password' },
  { message: '手机号不能为空', required: true, key: 'phoneNumber' },
]

export default {
  methods: {
    validator(values) {
      const result = validators.some(el => {
        if (el.required && !values[el.key]) {
          this.$message.error(el.message)
          return true
        }
      })
      return result
    },
    submit(values) {
      if (this.validator(values)) {
        return
      }

      // ... 调用接口
    },
  },
}
```

## 巧用解构

bad

```js
handleParams() {
  const params = {};
  params.id = this.formItem.id;
  params.startDate = this.formItem.startDate.format("YYYY-MM-DD");
  params.endDate = this.formItem.endDate.format("YYYY-MM-DD");
  params.price = this.formItem.price.toString();
  params.type = this.formItem.type;
  params.total = this.formItem.total;
  params.name = this.formItem.name;
  params.comment = this.formItem.comment;
  // ... 此处省略一万行代码
}
```

good

```js
handleParams() {
  const { startDate, endDate, price, ...params } = this.formItem;
  params.startDate = startDate.format("YYYY-MM-DD");
  params.endDate = endDate.format("YYYY-MM-DD");
  params.price = price.toString();
  // ... 此处省掉一万行代码
}
```

## 多个参数使用对象传参

```js
// bad
const foo = (name, age, height) => {
  console.log(name)
}

foo('cyan')
foo('cyan', '', 180)

// good
const foo = ({ name, age, height }) => {
  console.log(name)
}

foo({ name: 'cyan' })
foo({ name: 'cyan', height: 180 })
```


---
./diy-elementui-style.md
---
# 修改 element 表格默认样式

## 表格外边框颜色

```scss
::v-deep .el-table--border {
  border-color: #2648da;
}
```

## 取消表格 hover 时的背景色

```scss
::v-deep .el-table tbody tr:hover > td {
  background-color: #00136f !important;
}
::v-deep .el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
  border: 1px solid #2949d2 !important;
  // 去掉顶部和左侧的边框是因为防止边框重叠
  border-top: none !important;
  border-left: none !important;
}
```

## 表格第一行顶部边框

```scss
::v-deep .el-table--enable-row-transition .el-table__body tr:nth-child(1) .el-table__cell {
  border-top: 1px solid #2949d2 !important;
}
```

## 表格第一列左侧边框

```scss
::v-deep .el-table--enable-row-transition .el-table__body tr td:nth-child(1).el-table__cell {
  border-left: 1px solid #2949d2 !important;
}
```

## 表头行背景色

```scss
::v-deep .el-table th.el-table__cell {
  border: none;
  background-color: #00136f;
  color: #fff;
  text-align: center;
}
```

## 修改表格头部背景

```scss
::v-deep .el-table th {
  background: orange;
}
```

## 修改表格行背景

```scss
::v-deep .el-table tr {
  background: #eee;
}
```

## 修改斑马线表格的背景

```scss
::v-deep .el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #ccc;
}
```

## 修改行内线的颜色

```scss
::v-deep .el-table td,
.building-top .el-table th.is-leaf {
  border-bottom: 2px solid #eee;
}
```

## 修改表格最底部边框颜色和高度

```scss
::v-deep .el-table::before {
  border-bottom: 1px solid #ccc;
  height: 3px;
}
```

## 修改表头字体颜色

```scss
::v-deep .el-table thead {
  color: #ccc;
  font-weight: 700;
}
```

## 修改表格内容字体颜色和字体大小

```scss
::v-deep .el-table {
  color: #6b91ce;
  font-size: 14px;
}
```

## 修改表格无数据的时候背景，字体颜色

```scss
::v-deep .el-table__empty-block {
  background: #ccc;
}
::v-deep .el-table__empty-text {
  color: #fff;
}
```

## 修改表格鼠标悬浮 hover 背景色

```scss
::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: pink;
}
```

## 修改表格中默认滚动条样式

```scss
::v-deep .el-table {
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 8px;
    height: 0;
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #316fff;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background-color: #00136f;
  }
}
```

## 去掉表格最后一条白线

```scss
::v-deep .el-table::before {
  height: 0;
}
```


---
./download-file.md
---
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
  // excel
  const blob = new Blob([obj], { type: 'application/ms-excel' })
  // 非 excel
  // const blob = new Blob([obj])
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






---
./echarts.md
---
# Echarts 相关

## Echarts 地图的 JSON 文件中各个字段的含义
**coordinates**: 用逗号分隔的一个个UTF-8字符串，每个字符串都是一片区域

**childNum**: 多边形区域数量

**encodeOffsets**: 是解压需要的信息，跟 coordinates 一一对应

问题来源：在海南省地图 JSON 文件里添加三沙区域，并保持地图较大的可视区域

知识来源:  https://github.com/apache/echarts/issues/3308

## legend 固定列数且对齐

效果:
![image](./imgs/10.png)

代码:
```js
legend: [
  {
    bottom: 20,
    icon: 'circle',
    orient: 'vertical',
    left: 50,
    data: top10Legend.slice(0, columnItemCount),
    itemWidth: 20,
    itemHeight: 14
  },
  {
    bottom: 20,
    icon: 'circle',
    orient: 'vertical',
    right: 50,
    data: top10Legend.slice(columnItemCount, top10Legend.length),
    itemWidth: 20,
    itemHeight: 14
  }
],

// 其中 top10Legend 为 ['石油、煤炭及其他燃料加工业', '电气机械和器材制造业', ...], columnItemCount 为 Math.floor(top10Legend.length / 2)
```

## markline

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
  </head>

  <body>
    <div id="chartContainer" style="width: 600px; height: 400px;"></div>

    <script>
      var data = [
        { name: 'Category 1', value: -10 },
        { name: 'Category 2', value: 20 },
        { name: 'Category 3', value: -5 },
        { name: 'Category 4', value: 15 },
      ];

      var sum = 0;
      for (var i = 0; i < data.length; i++) {
        sum += data[i].value;
      }
      var average = sum / data.length;

      var chartOptions = {
        xAxis: {
          type: 'value',
          axisLine: { show: false },
          splitLine: { show: false },
        },
        yAxis: {
          type: 'category',
          data: data.map(item => item.name),
          axisLine: { show: false },
          axisTick: { show: false },
        },
        series: [
          {
            type: 'bar',
            data: data.map(item => item.value),
            itemStyle: {
              color: function (params) {
                return params.value >= 0 ? 'green' : 'red';
              },
            },
            markLine: {
              lineStyle: {
                type: 'solid',
                color: '#000',
              },
              label: {
                fontSize: 16,
                color: this.mainColor,
              },
              symbol: 'circle',
              symbolSize: 5,
              symbolOffset: [-1, 0.5, 0, 0],
              data: [{ type: 'average', name: 'Avg' }],
            },
          },
        ],
      };

      var chartContainer = document.getElementById('chartContainer');
      var chart = echarts.init(chartContainer);
      chart.setOption(chartOptions);
    </script>
  </body>
</html>
```

## 条形图如何隐藏 y 轴方向上的 0 刻度线

如何将下图圈起来的线隐藏起来?
![8](./imgs/8.png)

设置 y 轴的 axisLine
![9](./imgs/9.png)

最终代码:

```js
yAxis: {
  type: "category",
  axisLine: {
    show: true,
    lineStyle: {
      color: '#fff',
    }
  },
  // 重新定义类目轴上文字颜色
  axisLabel: {
    color: '#000'
  },
}
```

## 基于 vue2 封装 echarts 常用组件

1. 封装 Chart 组件

```vue
<template>
  <div id="chart">
    <div ref="echartRef" :style="chartStyle"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  components: {},
  data() {
    return {
      chart: null
    }
  },
  props: {
    option: {
      type: Object,
      default: () => {},
    },
    chartStyle: {
      type: Object,
      default: () => {
        return {
          width: '600px',
          height: '300px'
        }
      },
    }
  },
  computed: {},
  created() {},
  mounted() {
    this.chart = echarts.init(this.$refs.echartRef)
    this.chart.setOption(this.option)
  },
  watch: {
    option: {
      handler: function (newOption, oldVal) {
        this.chart.setOption(newOption)
      },
      deep: true
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
</style>
```

2. 新建配置文件 option.js

```js
export default {
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['园区累计企业数', '园区累计新增注册企业', '园区新增企业'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: '园区累计企业数',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210],
    },
    {
      name: '园区累计新增注册企业',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310, 191, 234, 290, 330, 310],
    },
    {
      name: '园区新增企业',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190],
    },
  ],
};
```

3. 使用

```vue
<Chart :option="option" :chartStyle="{ height: '300px', width: '1200px' }"></Chart>
```


---
./element-ui-skills.md
---
# ElementUI 常见问题以及技巧

## 一. 在 el-table 中的插槽使用 el-input 时遇到的问题
1. 输入时，在控制台能看到 value 已经改变，但视图无法同步更新
可以使用 this.tableList = JSON.parse(JSON.stringify(this.tableList)) 来解决这个问题，但会出现问题2
2. 第一次输入后，光标自动定位到末尾，令人摸不着头脑
可以使用原生 input 来代替 el-input

## 二. 在 el-table 中某一行的某个属性改变了，页面无法重新渲染
试了以下方法都不行
1. this.$set()
2. this.$forceUpdate
解决方法：
- 给 el-table 一个 key, 改变某个属性后修改这个 key，比如可以用 Math.random() 作为新的 key
- 看以下代码

```js
getStatus(row, index) {
  let item = JSON.parse(JSON.stringify(this.tableList[index]))
  item.editable = row.editable
  this.$set(this.tableList, index, item)
}
```

### 三. 父组件使用一个 el-input 封装的子组件, 且通过 v-model 绑定时, input 框无法输入问题
给表单重新赋值
```js
this.form = {...this.form}
```

### 四. 如何解决表单重新赋值后, 自动触发表单验证的问题
```js
this.form.a = ''
setTimeout(() => {
  this.$refs.form.clearValidate()
}, 0);
```

### 五. el-table 右侧固定布局 fixed=“right“ 错位
```css
.table {
  ::v-deep .el-table__fixed-right {
    height: 100% !important;
  }
  ::v-deep .el-table__fixed {
    height: 100% !important;
  }
}
```


---
./gantt.md
---
# dhtmlx-gantt 甘特图

<!-- <script setup>
  import Gantt from '/.vitepress/components/gantt/main.vue';
</script>

<Gantt /> -->

::: details
  <<< @/.vitepress/components/gantt/main.vue
:::

## GanttComponent.vue

::: details
  <<< @/.vitepress/components/gantt/GanttComponent.vue
:::

---
./hainan-map.md
---
## 海南省地图

<div id="map-container">
  <div ref="echartRef" class="chart" style="width: 800px; height: 500px;"></div>
</div>

<script>
import * as echarts from "echarts";
import haiNanMap from "./js/haiNan.json";

export default {
  name: "haiNan-map",
  components: {},
  data() {
    return {
      chart: null,
      option: null,
      defaultCode: {
        name: "hainan",
        mapCode: haiNanMap,
      }
    };
  },
  mounted() {
    this.loadMap(); //初始化地图
  },
  methods: {
    loadMap() {
      const chart = echarts.init(this.$refs.echartRef);
      echarts.registerMap(this.defaultCode.name, this.defaultCode.mapCode);

      const convertFeatures = haiNanMap.features.map((item, index) => {
        return {
          name: item.properties.name,
          value: item.properties.cp,
        };
      });

      this.option = {
        title: {
          text: "HN",
          subtext: "hn map",
          left: "right",
          show: false
        },
        // visualMap: {
        //   left: "right",
        //   realtime: false,
        //   min: 500000,
        //   max: 38000000,
        //   inRange: {
        //     color: ["#1e5a9a", "#4395e1"],
        //   },
        //   text: ["High", "Low"],
        //   // calculable: true,
        // },
        // toolbox: {
        //   show: false,
        //   orient: "vertical",
        //   left: "left",
        //   top: "top",
        //   feature: {
        //     dataView: { readOnly: false },
        //     restore: {},
        //     saveAsImage: {},
        //   },
        // },

        // 地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
        geo: {
          show: true,
          map: this.defaultCode.name,
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          roam: false, // 是否可拖拽
          aspectScale: 1,
          itemStyle: {
            areaColor: "#01215c",
            borderWidth: 1, // 外层边框宽度
            borderColor: "#fff",
            shadowColor: "#021838",
            shadowOffsetX: 0,
            shadowOffsetY: 0,
          },
        },

        series: [
          {
            name: "Map",
            type: "map",
            aspectScale: 1,
            roam: false,
            map: this.defaultCode.name,
            label: {
              formatter: ["{b|{b}}", "{c|{c}}"].join("\n"),
              show: true,
              rich: {
                b: {
                  color: "#fff",
                  lineHeight: 26,
                  fontSize: 15,
                },
                c: {
                  color: "#fff",
                  fontSize: 15,
                },
              },
            },
            itemStyle: {
              borderColor: "#2a7fa3",
              areaColor: "#01215c",
              borderWidth: 1.2,
              shadowColor: "rgba(100, 100, 100, 0.6)",
              shadowBlur: 100,
              shadowOffsetX: -10,
              opacity: 0.9,
              emphasis: {
                areaColor: "#0e56c2",
              },
            },
            data: [
              { name: "三沙市", value: 0, itemStyle: {borderColor: "#0e56c2"}},
              { name: "儋州市", value: 4822023 },
              { name: "海口市", value: 2685905 },
              { name: "三亚市", value: 6553255 },
              { name: "白沙县", value: 2949131 },
              { name: "保亭县", value: 38041430 },
              { name: "昌江县", value: 5187582 },
              { name: "澄迈县", value: 3590347 },
              { name: "定安县", value: 917092 },
              { name: "东方市", value: 632323 },
              { name: "乐东县", value: 19317568 },
              { name: "临高县", value: 9919945 },
              { name: "陵水县", value: 1392313 },
              { name: "琼海市", value: 1595728 },
              { name: "琼中县", value: 12875255 },
              { name: "屯昌县", value: 6537334 },
              { name: "万宁市", value: 3074186 },
              { name: "文昌市", value: 2085905 },
              { name: "五指山市", value: 4380415 },
              { name: "秀英区", value: 114822023 },
              { name: "龙华区", value: 4822023 },
              { name: "琼山区", value: 19317568 },
              { name: "美兰区", value: 38041430 },
              { name: "崖州区", value: 5187582 },
              { name: "天涯区", value: 3590347 },
              { name: "吉阳区", value: 917092 },
              { name: "海棠区", value: 632323 },
            ],
          },
          {
            name: "pic",
            type: "scatter",
            coordinateSystem: "geo",
            //自定义图片的 位置（lng, lat）
            data: convertFeatures,
            //自定义图片的 大小
            symbolSize: [40, 40],
            //自定义图片的 路径(注：必须以image://开头)
            symbol: `image://https://images.wanjunshijie.com/2021/08/20210828120639693.png?imageView2/0/format/webp/q/75`,
          },

          {
            name: '引导线',
            type: 'lines',
            symbol: 'circle',
            symbolSize: 1,
            opacity: 1,
            data: [
              {
                name: '海口市',
                coords: [[110.42, 19.8651], [110.63119, 20.201971]]
              }
            ],
            label: {
              show: true,
              padding: [10, 20],
              color: '#fff',
              backgroundColor: '#af6062',
              borderRadius: 6,
              formatter: () => {
                return 'label';
              },
            },
            lineStyle: {
              type: 'solid',
              opacity: 1,
              color: '#725846',
            },
          }
        ],
      };
      chart.setOption(this.option);
      chart.on("click", function (params) {
        alert("当前点击:" + '\n 城市：' + params.name + '\n value值：' + params.value);
      });
    }
  },
};
</script>

<style lang="scss">
</style>


---
./import-export-file.md
---


---
./juejin.md
---
# 掘金文章、评论、个人感受

## 1.突然发现，前端好像没几个做到 CTO 的……

### 评论1
无论前端后端，如果最后的都转化为领域积累或业务思维，这个就是值得的，毕竟每个人都有干不动的那一天，最好结局就是脑子里充实的那些成事方法论。如此看来，其实花大时间去看框架源码，去搞开源，去做监控，去serverless等等性价比是最低的，这是真正的螺丝。相反，多去靠业务，如果有需要就往后端（为了熟悉业务）走积累领域知识和业务思维，将来即便是被裁了，也能熟悉一个事务的整个链条，独当一面。最后，早晚都会被AI替代, 好好的生活，欲望是万恶之源。

### 感受
想起一个贵人说的话, 花时间理解业务并不耽误你学习技术, 相反, 理解了业务, 写代码就会手到擒来, 因为每一步都在正确的方向上, 不会跑偏, 即使出 bug, 也是技术上的问题, 如果不理解业务就下手, 就像无头苍蝇到处乱飞, 到最后还可能会返工, 那就得不偿失了. 技术是为业务服务的, 仔细想想, 没有产品给你提需求, 你一身本领是不是也无处施展。

---
./nginx.md
---
# Nginx

## 1. 访问loalhost:80时默认找的目录
/usr/share/nginx/html

## 2. 配置文件路径
主配置文件,全局的配置:
/etc/nginx/nginx.conf

子配置文件,可以根据不同的虚拟主机配置:
/etc/nginx/conf.d/*.conf

## 3. 常用命令
### 重新加载
nginx -s reload


---
./others.md
---
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


---
./type-conversion.md
---
# 类型转换

## 自动类型转换(隐式)

### 1.转换为字符串类型(to string)

1. 当加号"+"作为二元操作符且其中一个操作数为字符串类型时, 另一个操作数将会被无条件转为字符串类型:

```js
// 基础类型
var foo = 3 + '' // "3"
var foo = true + '' // "true"
var foo = undefined + '' // "undefined"
var foo = null + '' // "null"

// 复合类型
var foo = [1, 2, 3] + '' // "1,2,3"
var foo = {} + '' // "[object Object]"

// 重写valueOf()和toString()
var o = {
  valueOf: function () {
    return 3
  },
  toString: function () {
    return 5
  },
}

foo = o + '' // "3"

o = {
  toString: function () {
    return 5
  },
}

foo = o + '' // "5"
```

从上面代码中可以看到:

- 对于基础类型，会直接转为与字面量相一致的字符串类型;
- 而对于复合类型，会先试图调用对象的 valueOf()方法，如果此方法返回值是引用类型，则接着再调用其 toString()方法，最后将返回值转为字符串类型。

### 2.转换为布尔类型(to boolean)

除了 0、NaN、false、''、undefined、null 为 false, 其余为 true

### 3.转为数字类型(to number)

1. 字符串转为数字
   空字符串被转为 0，非空字符串中，符合数字规则的会被转换为对应的数字，否则视为 NaN

2. 布尔类型转为数字
   true 被转为 1，false 被转为 0

3. null 被转为 0，undefined 被转为 NaN
4. 对象类型转为数字
   valueOf()方法先试图被调用，如果调用返回的结果为基础类型，则再将其转为数字，如果返回结果不是基础类型，则会再试图调用 toString()方法，最后试图将返回结果转为数字，如果这个返回结果是基础类型，则会得到一个数字或 NaN，如果不是基础类型，则会抛出一个异常

```js
var foo = true + 1 // 2
var foo = true + false // 1
var foo = true + null // 1
var foo = null + 1 // 1
var foo = null + undefined // NaN
var foo = null + NaN // NaN
var foo = null + {} // null[object Object]
```

## 自动类型转换(显式)


---
./uniapp-skills.md
---
# uniapp 小技巧
## 获取元素可用高度
```js
uni.getSystemInfo({ // 接口获取屏幕高度
  success: (res) => {
    const wHeight = res.windowHeight // windoHeight 为窗口高度
    let titleH = uni.createSelectorQuery().select(".content-list"); // 想要获取高度的元素名
    titleH.boundingClientRect(data => {
      this.scrollHeight = wHeight - data.top  // 计算高度：元素高度 = 窗口高度 - 元素距离顶部的距离（data.top）
      console.log('this.scrollHeight',this.scrollHeight);
    }).exec()
  }
})
```

---
./vant.md
---
# vant 自定义组件

## 1. 自定义 loading

```vue
<template>
  <van-loading class="diy-dialog" color="#1989fa" vertical style="">加载中...</van-loading>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.diy-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
```

## 2. 自定义 nav-bar

```vue
<template>
  <van-nav-bar
    :title="title || options.title"
    :border="options.border"
    left-arrow
    @click-left="goBack"
    :style="{
      '--var-title-color': options.titleColor,
      '--var-left-arrow-color': options.leftArrowColor,
      '--var-background-color': options.bgColor,
    }" />
</template>

<script>
import { NavBar } from 'vant';
export default {
  components: {
    [NavBar.name]: NavBar,
  },
  data() {
    return {};
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          border: true,
          bgColor: '#fff',
          titleColor: '#000',
          leftArrowColor: '#000',
        };
      },
    },
    title: {
      type: String,
      default: '',
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
.van-nav-bar {
  background-color: var(--var-background-color);
  ::v-deep .van-icon {
    color: var(--var-left-arrow-color);
  }
}
::v-deep .van-nav-bar__arrow {
  font-size: 20px;
}
::v-deep .van-nav-bar__title {
  font-size: 18px;
  color: var(--var-title-color);
}
</style>
```

## 3. 自定义 tab-bar

```vue
<template>
  <van-tabbar v-if="isShowTabbar" v-model="active" route>
    <van-tabbar-item
      v-for="(tabbar, index) in tabbars"
      :key="index"
      :name="tabbar.ename"
      replace
      :to="tabbar.path">
      <span>{{ tabbar.name }}</span>
      <template #icon="props">
        <img :src="props.active ? tabbar.activeIcon : tabbar.icon" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  data() {
    return {
      active: 'supervise-unite',
      tabbars: [
        {
          name: '首页',
          activeIcon: require('./images/tabbar/icon_home_active.png'),
          icon: require('./images/tabbar/icon_home.png'),
          path: '/home',
          ename: 'home',
        },
        {
          name: '督办任务',
          activeIcon: require('./images/tabbar/icon_supervise_mission_active.png'),
          icon: require('./images/tabbar/icon_supervise_mission.png'),
          path: '/supervise-mission',
          ename: 'supervise-mission',
        },
        {
          name: '多督合一',
          activeIcon: require('./images/tabbar/icon_supervise_unite_active.png'),
          icon: require('./images/tabbar/icon_supervise_unite.png'),
          path: '/supervise-unite',
          ename: 'supervise-unite',
        },
        {
          name: '我的',
          activeIcon: require('./images/tabbar/icon_profile_active.png'),
          icon: require('./images/tabbar/icon_profile.png'),
          path: '/profile-page',
          ename: 'profile-page',
        },
      ],
    };
  },
  methods: {},
  created() {},
  computed: {
    isShowTabbar() {
      return ['/home', '/supervise-mission', '/supervise-unite', '/profile-page'].includes(
        this.$route.path
      );
    },
  },
};
</script>
```

## 4. 自定义下拉刷新上拉加载列表

```vue
<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh" :disabled="isRefreshDisable">
    <van-list
      class="lw-list"
      ref="vanList"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :immediate-check="false"
      @load="onLoad">
      <ListItem v-for="(item, index) in projects" :key="index" :item="item" />
    </van-list>
  </van-pull-refresh>
</template>

<script>
import ListItem from '../components/ListItem';
import { List, PullRefresh } from 'vant';

export default {
  data() {
    return {
      isRefreshDisable: false,
      projects: [],
      loading: false,
      finished: false,
      refreshing: false,
      scrollTop: 0,
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.resolveConflict(this.$refs.vanList.$el);
    });
  },

  watch: {
    scrollTop(newval) {
      if (newval > 0) {
        this.isRefreshDisable = true;
      } else {
        this.isRefreshDisable = false;
      }
    },
  },

  methods: {
    // 解决van-pull-refresh下拉刷新与局部滚动条下滑冲突问题
    resolveConflict(val) {
      const vantList = val;
      vantList.addEventListener('touchmove', () => {
        this.scrollTop = vantList.scrollTop;
      });
      vantList.addEventListener('touchend', () => {
        this.scrollTop = vantList.scrollTop;
      });
    },

    async onLoad() {
      this.loading = true;

      if (this.roleList.includes('CBDW') && this.type === PERSONAL) {
        this.queryParams.queryObj.csldStatus = 1;
      }

      const { resultData } = await getDdhyTaskList(this.queryParams);

      if (this.refreshing) {
        this.projects = [];
        this.refreshing = false;
      }

      this.projects.push(...resultData.items);
      this.queryParams.skip += this.queryParams.pageSize;

      if (this.projects.length >= Number(resultData.total)) {
        this.finished = true;
      } else {
        this.finished = false;
      }

      // this.loading 得放在列表赋值的后面, 否则会导致上拉加载时, 加载所有数据
      this.loading = false;
    },

    onRefresh() {
      this.refreshing = true;
      this.loading = true;
      this.finished = false;
      this.queryParams.skip = 0;
      this.onLoad();
      this.$toast('刷新成功');
    },
  },
};
</script>
```



---
./xjj-ui.md
---
# 新境界常用 ui

<script setup>
  import DescTable from '/.vitepress/components/xjjui/DescTable.vue';
  import FormTablePagination from '/.vitepress/components/xjjui/FormTablePagination.vue';
  import ToggleSwitch from '/.vitepress/components/xjjui/ToggleSwitch.vue';
  import SearchBar from '/.vitepress/components/xjjui/SearchBar.vue';
  import NavMenu from '/.vitepress/components/xjjui/NavMenu.vue';
  import YearMonthToggle from '/.vitepress/components/xjjui/YearMonthToggle.vue';
  import TabScrollable from '/.vitepress/components/xjjui/TabScrollable.vue';
</script>

## desc-table

<desc-table />

::: details
  <<< @/.vitepress/components/xjjui/DescTable.vue
:::


## 表单表格分页

<form-table-pagination />

::: details
  <<< @/.vitepress/components/xjjui/FormTablePagination.vue
:::

## 开关

<toggle-switch />

::: details
  <<< @/.vitepress/components/xjjui/ToggleSwitch.vue
:::

## 搜索

<search-bar />

::: details
  <<< @/.vitepress/components/xjjui/SearchBar.vue
:::

## 导航菜单

<nav-menu />

::: details
  <<< @/.vitepress/components/xjjui/NavMenu.vue
:::

## 年月切换

<year-month-toggle />

::: details
  <<< @/.vitepress/components/xjjui/YearMonthToggle.vue
:::

## 水平滚动切换

<tab-scrollable />

::: details
  <<< @/.vitepress/components/xjjui/TabScrollable.vue
:::

---
