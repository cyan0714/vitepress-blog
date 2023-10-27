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

## npm link - 避免频繁发布更新

现在有两个项目，一个项目是A，另一个项目是B。

目标: 在B项目里，使用A项目里的模块

1. 先在A项目中执行 npm link(执行完毕后, 会在全局的 node_modules 文件夹里生成一个A项目的软连接, 指向实际的A项目)

2. 在B项目里执行 npm link A(执行完毕后, 会在B项目里的 node_modules 文件夹里生成一个A项目的软连接, 指向实际的A项目) 即可

> 修改A项目的代码后, B项目会自动更新

