# 表的操作

## 查看表

### 查看所有的表
```bash
SHOW TABLES
```
### 查看某一个表的结构
```bash
DESC user;
```

## 创建表
```bash
CREATE TABLE IF NOT EXISTS `users` (
  name VARCHAR(20),
  age INT,
  height DOUBLE
)
```