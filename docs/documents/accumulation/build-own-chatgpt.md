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
