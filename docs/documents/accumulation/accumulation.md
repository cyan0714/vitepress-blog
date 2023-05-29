# 我的积累

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

## 服务器部署

1. 购买服务器实例
2. 如果服务器是 centOS 7.x(自带 yum, 如果服务器是 centOS 8, 则自带了 dnf, 无须安装), 如需要安装 dnf, 可执行以下命令:
    1. 需要先启用 EPEL 存储库: yum install epel-release -y
    2. yum install dnf -y
3. 通过 dnf 安装 nodejs: dnf install nodejs
4. 安装 nginx: dnf install -y nginx
5. 启动 nginx: systemctl start nginx.service
6. centOS 中 nginx 常用命令
    1. systemctl stop nginx.service // 停止 Nginx 服务
    2. systemctl restart nginx.service // 重启 Nginx 服务
    3. systemctl reload nginx.service // 重新加载 Nginx 配置文件，然后重启 Nginx
    4. systemctl status nginx.service // 查看状态
    5. systemctl enable nginx.service // 设置开机自启动
    6. systemctl disable nginx.service // 停止开机自启动
 7. 在 /etc/nginx/nginx.conf 下配置服务:
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
8. 服务器是 centOS 7.x 的版本的 mysql 安装
```shell
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
systemctl status mysql

ps -ef | grep mysql
```

mysql8 初次安装后，需要先通过以下命令查看密码:
```shell
`cat /var/log/mysqld.log | grep password`
```

mysql8 修改密码方式:
```shell
alter user 'root'@'localhost' identified by '这里填你要的密码';
```

在⾃⼰的电脑上连接 MySQL(也就是和 MySQL 建⽴远程连接, ⽐如直接使用 Navicat ⼯具连接 MySQL):
```shell
use mysql;
select host, user from user; // 查看user表中，连接权限，默认看到root是localhost
update user set host = '%' where user = 'root'; // 修改权限
配置3306的安全组
修改完成后 还需要刷新一下服务配置，不然修改不会生效
mysql> FLUSH PRIVILEGES;
```
9. 数据库迁移
    1. 在服务器 MySQL 中创建和本地同名的数据库;
    2. 在 Navicat 中本地 MySQL 直接导出数据库;
    3. 在 Navicat 中服务器 MySQL 中执⾏ MySQL(如果运行报错则将"在每个运行中运行多个查询"的勾去掉).

## 开发技巧
1. 在移动端上，使用`overflow-y:scorll`属性时，你会发现滚动的效果很木，很慢，这时候可以使用`-webkit-overflow-scrolling: touch`这个属性，让滚动条产生滚动回弹的效果，就像 ios 原生的滚动条一样流畅。
2. 如果 api 名和 method 名相同, 可以在 method 前加 _ 来区分(Vue)
3. audio 标签不加任何属性, 在页面就不会显示该元素
4. `xxx().then(res ⇒ {})` 可以优化为 `xxx().then(({data = {}} ⇒ {} )`
5. 开发前统一: border border-radius color 变量

## 查看 npm 源
```txt
npm config get registry  // 查看npm当前镜像源

npm config set registry https://registry.npm.taobao.org/  // 设置npm镜像源为淘宝镜像

yarn config get registry  // 查看yarn当前镜像源

yarn config set registry https://registry.npm.taobao.org/  // 设置yarn镜像源为淘宝镜像
```

## 生成 private.key 和 public.key
![key](./imgs/1.png)

## 对象转原始值
Number(xxx)
1. 如果 xxx 的 valueOf 返回原始值，直接 Number 包装后返回
2. 如果 valueOf 返回对象，去找 toString 方法
3. 如果 toString 方法返回原始值，直接 Number 包装后返回
4. 如果重写的 toString 返回对象，直接报错
5. 如果没有重写 toString，调用 Object.prototype 上的 toString 方法

## 函数预编译步骤
1. 创建 AO 对象，执行期上下文。
2. 寻找函数的形参和变量声明，将变量和形参名作为 AO 对象的属性名，值设定为 undefined.
3. 将形参和实参相统一，即更改形参后的 undefined 为具体的形参值。
4. 寻找函数中的函数声明，将函数名作为 AO 属性名，值为函数体。

## 切割含 children 的数组
```js
const testArr = [
  {
    id: 1,
    name: 'csy',
    skills: [ { count: 7 }, { count: 14 } ]
  },
  {
    id: 2,
    name: 'cyan',
    skills: [ { count: 70 }, { count: 140 } ]
  },
]

// newArr 中仍然含有 skills
const newArr = testArr.map(item => {
  for (let skill of item.skills) {
    return {...item, ...skill}
  }
})

// tempArr 中无 skills
const tempArr = []
const newArr1 = testArr.forEach((item, index) => {
  const myArr = item.skills.map(skill => {
    delete item.skills
    return {...item, ...skill}
  })
  tempArr.push(...myArr)
})

console.log(tempArr);
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