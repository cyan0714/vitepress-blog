# 数据定义语言(DDL)

DDL用于创建、修改和删除数据库对象，包括表、视图、索引等。常见的命令有：
- CREATE：创建新的数据库对象；
- DROP：删除一个已经存在的数据库对象。
- ALTER：修改已经存在的数据库对象；

## 创建表
```sql
CREATE TABLE IF NOT EXISTS `users`(
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  age INT DEFAULT 0,
  telPhone VARCHAR(20) DEFAULT '' UNIQUE NOT NULL
);
```

## 删除表
```sql
DROP TABLE users;
DROP TABLE IF EXISTS users;
```

## 修改表
```sql
# 修改表名
ALTER TABLE `moments` RENAME TO `moment`;
# 添加一个新的列
ALTER TABLE `moment` ADD `publishTime` DATETIME;
ALTER TABLE `moment` ADD `updateTime` DATETIME;
# 删除一列数据
ALTER TABLE `moment` DROP `updateTime`;
# 修改列的名称
ALTER TABLE `moment` CHANGE `publishTime` `publishDate` DATE;
# 修改列的数据类型
ALTER TABLE `moment` MODIFY `id` INT;
```