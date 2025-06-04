# npm 使用指南

## 📦 基础配置

### 镜像源管理

#### 查看当前源
```bash
npm config get registry  # 查看 npm 当前镜像源
yarn config get registry # 查看 yarn 当前镜像源
```

#### 设置镜像源
```bash
# npm 镜像源设置
npm config set registry https://registry.npmjs.org/        # 官方源
npm config set registry https://registry.npm.taobao.org/   # 淘宝镜像(旧)
npm config set registry https://registry.npmmirror.com/    # 淘宝镜像(新)

# yarn 镜像源设置
yarn config set registry https://registry.yarnpkg.com/     # 官方源
yarn config set registry https://registry.npm.taobao.org/  # 淘宝镜像源
```

## 🔧 常见问题解决

### SSL 证书过期问题
当遇到 `certificate has expired` 错误时：
```bash
npm config set strict-ssl false
```

### Electron 安装失败解决方案
1. 设置镜像源为淘宝镜像：
   ```bash
   npm config set registry https://registry.npm.taobao.org/
   ```

2. 配置本地 `.npmrc` 文件（通常在 `C:\Users\pc` 目录下）：
   ```
   ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"
   ```

### Node Sass 环境不支持问题
当遇到 `Node Sass does not yet support your current environment` 错误时：
```bash
npm install node-sass --save-dev
```
> 直接将 node-sass 升级到最新版本即可解决

### node-gyp 运行错误解决方案
当遇到 `gyp ERR! node-gyp -v v3.8.0` 错误时，有以下解决方案：

1. **方案一**：将 Python 降为 3 以下版本（未验证）
2. **方案二**：删除 node-sass，改用 sass（推荐，已验证）

## 🚀 高级功能

### npm link - 本地开发利器
用于在本地开发时避免频繁发布更新，实现项目间的模块共享。

**使用场景**：项目 A 开发了一个模块，项目 B 需要使用该模块

**操作步骤**：
1. 在项目 A 中执行：
   ```bash
   npm link
   ```
   > 执行后会在全局 node_modules 中生成项目 A 的软链接

2. 在项目 B 中执行：
   ```bash
   npm link A
   ```
   > 执行后会在项目 B 的 node_modules 中生成指向项目 A 的软链接

**效果**：修改项目 A 的代码后，项目 B 会自动更新

### 自动发布带 changelog 的 npm 包
使用 `release-it` 工具实现自动化发布流程。

#### 配置步骤

1. **初始化 release-it**：
   ```bash
   npm init release-it
   ```
   > 会在 package.json 的 scripts 中添加 release 脚本，并安装 release-it 到 devDependencies

2. **创建配置文件** `.release-it.json`：
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

3. **安装 changelog 插件**：
   ```bash
   npm i @release-it/conventional-changelog -D
   ```

4. **执行发布**：
   ```bash
   npm run release                        # 自动版本号
   npm run release --release-as x.x.x     # 手动指定版本号
   ```

> **注意**：如需在 CHANGELOG.md 中显示提交记录，提交信息应以 `feat`、`chore` 等开头。建议安装 `git-cz` 并使用 `npm run commit` 进行规范化提交。

## 📋 包管理

### 取消 npm 包发布
```bash
npm unpublish package-name@x.x.x
```

### 发布到公司内网仓库

#### 方式一：本地打包上传
1. 发布成功后安装到本地：
   ```bash
   npm install package-name
   ```

2. 使用 tar 命令打包：
   ```bash
   tar -czvf archive.tgz folder_name
   ```
   **参数说明**：
   - `c`: 创建新的压缩文件
   - `z`: 使用 gzip 压缩
   - `v`: 显示详细压缩过程
   - `f`: 指定压缩文件名称

3. 将 tgz 包上传到公司源

#### 方式二：直接下载上传
1. 直接从 npm 镜像源下载 tgz 包
2. 将包上传到公司源

> **提示**：方式二可能会遇到阿里云镜像源同步不及时的问题，如果需要立即使用，建议采用方式一。
