# 数据操作语言(DML)

DML用于插入、更新和删除数据，主要针对表中的记录进行操作。常见的命令有：
- INSERT：插入新记录到表中；
- UPDATE：更新表中已有记录；
- DELETE：删除表中指定记录。

## 插入数据
```sql
INSERT INTO `products` (`title`, `description`, `price`, `publishTime`)
                VALUES ('iPhone', 'iPhone12只要998', 998.88, '2020-10-10');
INSERT INTO `products` (`title`, `description`, `price`, `publishTime`)
                VALUES ('huawei', 'iPhoneP40只要888', 888.88, '2020-11-11');
```

## 修改数据
```sql
# 会修改表中所有的数据
UPDATE `products` SET `title` = 'iPhone12', `price` = 1299.88;
# 会修改符合条件的数据
UPDATE `products` SET `title` = 'iPhone12', `price` = 1299.88 WHERE `title` = 'iPhone';
```

## 删除数据
```sql
# 会删除表中所有的数据
DELETE FROM `products`;
# 会删除符合条件的数据
DELETE FROM `products` WHERE `title` = 'iPhone';
```