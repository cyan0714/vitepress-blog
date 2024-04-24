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
