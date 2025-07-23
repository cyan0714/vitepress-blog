# Docker

## 什么是 Docker？

Docker 是一个开源的容器化平台，允许开发者将应用程序及其依赖打包成轻量级、可移植的容器。

### 生活例子理解
想象一下搬家的场景：
- **传统方式**：搬家时需要拆卸家具、单独打包每个物品，到新家再重新组装
- **Docker方式**：就像使用标准集装箱，把所有东西都装在一个标准容器里，无论搬到哪里都能完整运行

## Docker 核心概念

### 1. 镜像（Image）
**概念**：镜像是创建容器的模板，包含了运行应用所需的所有文件和依赖。

**生活例子**：
- 镜像就像是房屋的设计图纸
- 设计图纸（镜像）可以用来建造多个相同的房子（容器）
- 图纸本身不能住人，但可以按照图纸建造可以住人的房子

```bash
# 查看本地镜像
docker images

# 拉取镜像
docker pull nginx:latest
```

### 2. 容器（Container）
**概念**：容器是镜像的运行实例，是实际运行应用程序的环境。

**生活例子**：
- 如果镜像是房屋设计图，那么容器就是按照图纸建造出来的实际房子
- 每个房子（容器）都是独立的，有自己的门牌号（容器ID）
- 房子之间不会互相干扰，但都是按照同一个设计图建造的

```bash
# 创建并运行容器
docker run -d --name my-nginx nginx:latest

# 查看运行中的容器
docker ps
```

### 3. Dockerfile
**概念**：Dockerfile 是用来构建镜像的文本文件，包含了一系列指令。

**生活例子**：
- Dockerfile 就像是装修指南或食谱
- 食谱告诉你需要什么食材（FROM 基础镜像）
- 需要做什么步骤（RUN 命令）
- 最终做出什么菜（镜像）

```dockerfile
FROM node:16
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### 4. 仓库（Repository）
**概念**：仓库是存储镜像的地方，可以是本地仓库或远程仓库。

**生活例子**：
- 仓库就像是图书馆或应用商店
- 你可以从图书馆借书（拉取镜像）
- 也可以把自己写的书放到图书馆供别人借阅（推送镜像）
- Docker Hub 就像是全球最大的"镜像图书馆"

### 5. 数据卷（Volume）
**概念**：数据卷用于持久化容器中的数据，即使容器被删除，数据仍然保留。

**生活例子**：
- 容器就像租来的房子，搬走时房子会被收回
- 数据卷就像是你的私人储物柜，无论搬到哪里都会跟着你
- 即使换房子（删除容器），储物柜里的东西（数据）依然存在

```bash
# 创建数据卷
docker volume create my-volume

# 使用数据卷运行容器
docker run -v my-volume:/data nginx
```

### 6. 网络（Network）
**概念**：Docker 网络允许容器之间互相通信。

**生活例子**：
- 容器就像小区里的各个住户
- Docker网络就像小区内的电话线或网络
- 住户之间可以通过电话（网络）互相联系
- 也可以设置门禁（网络隔离），控制谁能联系谁

## Docker 常用命令

### 镜像相关命令

```bash
# 搜索镜像
docker search nginx

# 拉取镜像
docker pull nginx:latest
docker pull mysql:8.0

# 查看本地镜像
docker images
docker image ls

# 删除镜像
docker rmi nginx:latest
docker rmi <IMAGE_ID>

# 删除所有镜像（包括未被使用的）
docker rmi -f $(docker images -aq)

# 构建镜像
docker build -t my-app:v1.0 .
docker build -f Dockerfile.prod -t my-app:prod .

# 查看镜像历史
docker history nginx:latest

# 镜像打标签
docker tag nginx:latest my-nginx:v1.0
```

### 容器相关命令

```bash
# 运行容器
docker run nginx                          # 前台运行
docker run -d nginx                       # 后台运行
docker run -d --name my-nginx nginx       # 指定容器名称
docker run -d -p 8080:80 nginx           # 端口映射
docker run -d -v /host/path:/container/path nginx  # 挂载目录

# 查看容器
docker ps                                 # 查看运行中的容器
docker ps -a                             # 查看所有容器（包括停止的）
docker ps -q                             # 只显示容器ID

# 容器操作
docker start <CONTAINER_ID>              # 启动容器
docker stop <CONTAINER_ID>               # 停止容器
docker stop $(docker ps -aq)             # 停止所有容器
docker restart <CONTAINER_ID>            # 重启容器
docker pause <CONTAINER_ID>              # 暂停容器
docker unpause <CONTAINER_ID>            # 恢复容器

# 删除容器
docker rm <CONTAINER_ID>                 # 删除停止的容器
docker rm -f <CONTAINER_ID>              # 强制删除运行中的容器
docker container prune                   # 删除所有停止的容器

# 进入容器
docker exec -it <CONTAINER_ID> bash      # 进入容器内部
docker exec -it <CONTAINER_ID> sh        # 使用sh shell
docker attach <CONTAINER_ID>             # 连接到容器主进程

# 查看容器详情
docker inspect <CONTAINER_ID>            # 查看容器详细信息
docker logs <CONTAINER_ID>               # 查看容器日志
docker logs -f <CONTAINER_ID>            # 实时查看日志
docker stats <CONTAINER_ID>              # 查看容器资源使用情况
```

### 数据卷相关命令

```bash
# 数据卷管理
docker volume create my-volume           # 创建数据卷
docker volume ls                         # 查看所有数据卷
docker volume inspect my-volume          # 查看数据卷详情
docker volume rm my-volume               # 删除数据卷
docker volume prune                      # 删除未使用的数据卷

# 使用数据卷
docker run -v my-volume:/data nginx      # 命名数据卷
docker run -v /host/path:/container/path nginx  # 绑定挂载
docker run -v /container/path nginx      # 匿名数据卷
```

### 网络相关命令

```bash
# 网络管理
docker network create my-network         # 创建网络
docker network ls                        # 查看所有网络
docker network inspect my-network        # 查看网络详情
docker network rm my-network             # 删除网络
docker network prune                     # 删除未使用的网络

# 容器连接网络
docker run --network my-network nginx    # 指定网络运行容器
docker network connect my-network my-container  # 连接容器到网络
docker network disconnect my-network my-container  # 断开连接
```

### 系统相关命令

```bash
# 系统信息
docker version                           # 查看Docker版本
docker info                              # 查看Docker系统信息
docker system df                         # 查看磁盘使用情况
docker system events                     # 查看系统事件

# 清理命令
docker system prune                      # 清理未使用的资源
docker system prune -a                   # 清理所有未使用的资源
docker image prune                       # 清理未使用的镜像
docker container prune                   # 清理停止的容器
docker volume prune                      # 清理未使用的数据卷
docker network prune                     # 清理未使用的网络
```

### Docker Compose 常用命令

```bash
# 基本操作
docker-compose up                        # 启动服务
docker-compose up -d                     # 后台启动服务
docker-compose down                      # 停止并删除服务
docker-compose start                     # 启动已存在的服务
docker-compose stop                      # 停止服务
docker-compose restart                   # 重启服务

# 查看状态
docker-compose ps                        # 查看服务状态
docker-compose logs                      # 查看日志
docker-compose logs -f                   # 实时查看日志
docker-compose top                       # 查看进程

# 构建
docker-compose build                     # 构建镜像
docker-compose up --build               # 重新构建并启动
```

## 常用操作示例

### 1. 运行 Nginx 服务器
```bash
# 拉取镜像并运行
docker run -d --name my-nginx -p 8080:80 nginx:latest

# 访问 http://localhost:8080 即可看到 Nginx 欢迎页
```

### 2. 运行 MySQL 数据库
```bash
# 运行 MySQL 容器
docker run -d \
  --name mysql-db \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -e MYSQL_DATABASE=myapp \
  -p 3306:3306 \
  -v mysql-data:/var/lib/mysql \
  mysql:8.0
```

### 3. 构建自定义镜像
```bash
# 创建 Dockerfile
cat > Dockerfile << EOF
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
EOF

# 构建镜像
docker build -t my-node-app:v1.0 .

# 运行容器
docker run -d --name my-app -p 3000:3000 my-node-app:v1.0
```

## 最佳实践

1. **使用 .dockerignore 文件**：排除不需要的文件，减小镜像大小
2. **多阶段构建**：减小生产镜像大小
3. **使用非 root 用户**：提高安全性
4. **合理使用缓存**：优化构建速度
5. **标签管理**：为镜像打上有意义的标签
6. **健康检查**：添加健康检查确保服务正常运行

```dockerfile
# 多阶段构建示例
FROM node:16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
USER node
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1
CMD ["npm", "start"]
```
