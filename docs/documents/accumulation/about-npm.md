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
npm config set registry http://192.168.0.169:8081/repository/npm-public/ # 设置 npm 为公司源(新境界)

yarn config set registry https://registry.yarnpkg.com/ # 设置 yarn 源为官方源
yarn config set registry https://registry.npm.taobao.org/ # 设置 yarn 源为淘宝镜像源
yarn config set registry http://192.168.0.169:8081/repository/npm-public/ # 设置 yarn 为公司源(新境界)
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
4. 执行`npm i @release-it/conventional-changelog -D`
3. 执行 `npm run release`, 若手动指定版本, 执行 `npm run release --release-as x.x.x`

> 注意: 如果想在 CHANGELOG.md 中显示提交记录, 则每次的提交信息应以`feat、chore`等开头(具体可安装 git-cz 进行查看有哪些命令, 并在代码 commit 时执行`npm run commit`即可)
