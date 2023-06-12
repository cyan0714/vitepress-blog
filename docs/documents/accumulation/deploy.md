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
