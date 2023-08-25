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

yarn config set registry https://registry.npm.taobao.org/ # 设置 yarn 镜像源为淘宝镜像
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


