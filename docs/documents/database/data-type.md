# MySQL 数据类型

## 数字类型
- MySQL 支持所有标准 SQL 数值数据类型。
- 严格数值数据类型(INTEGER、SMALLINT、DECIMAL 和 NUMERIC)。
- 近似数值数据类型(FLOAT、REAL 和 DOUBLE PRECISION)。
- 关键字`INT`是`INTEGER`的同义词，关键字`DEC`是`DECIMAL`的同义词。
- `BIT`数据类型保存位字段值，并且支持 MyISAM、MEMORY、InnoDB 和 BDB表。

![number-type](./imgs/number-type.png)

## 日期类型
- 表示时间值的日期和时间类型为 DATE、TIME、YEAR、DATETIME 和 TIMESTAMP。
- 每个时间类型有一个有效值范围和一个"零"值，当指定不合法的MySQL不能表示的值时使用"零"值。

![date-time-type](./imgs/date-time-type.png)

## 字符串类型
字符串类型指CHAR、VARCHAR、BINARY、VARBINARY、BLOB、TEXT、ENUM和SET。

![string-type](./imgs/string-type.png)

注意:
1. CHAR(n) 和 VARCHAR(n) 中括号中 n 代表字符的个数，并不代表字节个数，比如 CHAR(30) 就可以存储 30 个字符。
2. CHAR 和 VARCHAR 类型类似，但它们保存和检索的方式不同。它们的最大长度和是否尾部空格被保留等方面也不同。在存储或检索过程中不进行大小写转换。
3. BINARY 和 VARBINARY 类似于 CHAR 和 VARCHAR，不同的是它们包含二进制字符串而不要非二进制字符串。也就是说，它们包含字节字符串而不是字符字符串。这说明它们没有字符集，并且排序和比较基于列值字节的数值值。
4. BLOB 是一个二进制大对象，可以容纳可变数量的数据。有 4 种 BLOB 类型：TINYBLOB、BLOB、MEDIUMBLOB 和 LONGBLOB。它们区别在于可容纳存储范围不同。
5. 有 4 种 TEXT 类型：TINYTEXT、TEXT、MEDIUMTEXT 和 LONGTEXT。对应的这 4 种 BLOB 类型，可存储的最大长度不同，可根据实际情况选择。