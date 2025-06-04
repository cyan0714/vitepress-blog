# 服务器部署指南

## 购买服务器实例

网上教程很多，这里就不介绍了。

## 环境安装

### Node.js 安装

```bash
yum install nodejs
```

### Nginx 安装与配置

#### 安装 Nginx

```bash
yum install nginx
```

#### 启动 Nginx 服务

```bash
systemctl start nginx.service
```

#### Nginx 常用命令

```bash
# 停止 Nginx 服务
systemctl stop nginx.service

# 重启 Nginx 服务
systemctl restart nginx.service

# 重新加载 Nginx 配置文件，然后重启 Nginx
systemctl reload nginx.service

# 查看服务状态
systemctl status nginx.service

# 设置开机自启动
systemctl enable nginx.service

# 停止开机自启动
systemctl disable nginx.service
```

### MySQL 安装与配置（CentOS 7.x）

#### 安装步骤

```bash
# 安装 MySQL 客户端（可选，如已安装可跳过）
yum install mysql

# 安装 MySQL 开发库（可选，如已安装可跳过）
yum install mysql-devel

# 下载 MySQL 官方源
wget http://dev.mysql.com/get/mysql80-community-release-el7-5.noarch.rpm

# 安装官方源
rpm -ivh mysql80-community-release-el7-5.noarch.rpm

# 安装 MySQL 社区版服务器
yum install mysql-community-server
```

> **注意：** 如果已经安装了 MySQL 客户端和开发库，前两个命令可以省略。如果已经添加了 MySQL 官方源，第三个命令也可以省略。

#### 启动和配置 MySQL 服务

```bash
# 启动 MySQL 后台服务
systemctl start mysqld

# 设置随系统启动
systemctl enable mysqld
```

#### 查看 MySQL 服务状态

```bash
# 方式一：查看服务状态（active (running) 表示启动成功）
systemctl status mysqld

# 方式二：查看进程
ps -ef | grep mysql
```

#### MySQL 8 初始配置

##### 获取初始密码

```bash
cat /var/log/mysqld.log | grep password
```

##### 修改 root 密码

```sql
alter user 'root'@'localhost' identified by '这里填你要的密码';
```

#### 配置远程连接

在远程服务器上执行以下命令，以便在本地使用 Navicat 等工具连接：

```sql
use mysql;

-- 查看当前连接权限（默认 root 用户只能 localhost 连接）
select host, user from user;

-- 修改 root 用户权限，允许远程连接
update user set host = '%' where user = 'root';

-- 刷新权限配置
FLUSH PRIVILEGES;
```

> **重要：** 修改完成后还需要在服务器安全组中配置 3306 端口的访问权限。

## Nginx 服务配置

编辑 `/etc/nginx/nginx.conf` 文件，添加以下服务配置：

```nginx
server {
    listen       8080;
    listen       [::]:8080;
    server_name  _;
    root         /usr/share/nginx/html;

    # 加载默认服务器块的配置文件
    include /etc/nginx/default.d/*.conf;

    # 错误页面配置
    error_page 404 /404.html;
    location = /404.html {
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
    }

    # 静态文件服务配置
    location / {
        root   /home/vue3-cloud-music;
        try_files $uri $uri/ /index.html;
        index  index.html;
    }
}
```

## 数据库迁移

### 准备工作

1. **确保网络连通性**  
   确认本地能够正常连接到服务器 MySQL

2. **权限检查**  
   确认服务器 MySQL 用户具有创建数据库和导入数据的权限

3. **备份现有数据**（如果服务器已有数据）  
   ```bash
   mysqldump -u root -p --databases 数据库名 > backup_$(date +%Y%m%d_%H%M%S).sql
   ```

### 迁移方式

#### 方式一：使用 Navicat（推荐）

1. **创建目标数据库**  
   在服务器 MySQL 中创建和本地同名的数据库
   ```sql
   CREATE DATABASE 数据库名 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

2. **导出本地数据**  
   - 在 Navicat 中选择本地数据库
   - 右键选择"转储 SQL 文件" → "数据和结构"
   - 保存为 `.sql` 文件

3. **导入到服务器**  
   - 在 Navicat 中连接服务器 MySQL
   - 选择目标数据库
   - 右键选择"运行 SQL 文件"
   - 选择之前导出的文件

#### 方式二：使用命令行

1. **导出本地数据库**  
   ```bash
   # 导出结构和数据
   mysqldump -u username -p database_name > database_backup.sql
   
   # 仅导出结构
   mysqldump -u username -p --no-data database_name > database_structure.sql
   
   # 仅导出数据
   mysqldump -u username -p --no-create-info database_name > database_data.sql
   ```

2. **上传到服务器**  
   ```bash
   scp database_backup.sql username@server_ip:/tmp/
   ```

3. **在服务器上创建数据库并导入**  
   ```bash
   # 登录服务器 MySQL
   mysql -u root -p
   
   # 创建数据库
   CREATE DATABASE database_name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   
   # 退出 MySQL，导入数据
   exit
   mysql -u root -p database_name < /tmp/database_backup.sql
   ```

### 常见问题处理

1. **字符编码问题**  
   确保导出时指定正确的字符集：
   ```bash
   mysqldump -u username -p --default-character-set=utf8mb4 database_name > backup.sql
   ```

2. **大文件导入超时**  
   修改 MySQL 配置或分批导入：
   ```sql
   SET global net_buffer_length=1000000;
   SET global max_allowed_packet=1000000000;
   ```

3. **权限不足错误**  
   确保用户具有足够权限：
   ```sql
   GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'%';
   FLUSH PRIVILEGES;
   ```

4. **Navicat 多查询问题**  
   如果在 Navicat 中导入时出现错误，可以尝试：
   - 取消"在每个运行中运行多个查询"选项
   - 或者将大的 SQL 文件拆分成小文件分批执行

### 验证迁移结果

1. **检查数据完整性**  
   ```sql
   -- 检查表数量
   SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'database_name';
   
   -- 检查数据行数
   SELECT table_name, table_rows FROM information_schema.tables 
   WHERE table_schema = 'database_name';
   ```

2. **测试应用连接**  
   确保应用程序能够正常连接并操作数据库
