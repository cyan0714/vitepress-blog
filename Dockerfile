FROM nginx:1.21.1

MAINTAINER chenshiyan

# COPY dist/ /usr/share/nginx/html/
COPY docs/.vitepress/dist/ /www/vitepress-blog

COPY Docker/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
