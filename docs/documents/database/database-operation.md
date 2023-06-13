# 数据库的操作

## 查看当前数据库

### 查看当前数据库
```bash
SHOW DATABASES;
```

### 使用某个数据库
```bash
USE XXX;
```

### 查看当前正在使用的数据库
```bash
SELECT DATABASE();
```

## 创建新的数据库
```bash
CREATE DATABASE bilibili;
CREATE DATABASE IF NOT EXISTS bilibili;
CREATE DATABASE IF NOT EXISTS bilibili DEFAULT CHARACTER SET UTF8MB4 COLLATE UTF8MB4_0900_AI_CI;
```

## 删除数据库
```bash
DROP DATABASE bilibili;
DROP DATABASE IF EXIT bilibili;
```

## 修改数据库
```bash
ALTER DATABASE bilibili CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;
```

