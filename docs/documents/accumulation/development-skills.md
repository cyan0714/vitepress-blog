# 开发技巧

1. 在移动端上，使用`overflow-y:scorll`属性时，你会发现滚动的效果很木，很慢，这时候可以使用`-webkit-overflow-scrolling: touch`这个属性，让滚动条产生滚动回弹的效果，就像 ios 原生的滚动条一样流畅。
2. 如果 api 名和 method 名相同, 可以在 method 前加 _ 来区分(Vue)
3. audio 标签不加任何属性, 在页面就不会显示该元素
4. `xxx().then(res ⇒ {})` 可以优化为 `xxx().then(({data = {}} ⇒ {} )`
5. 开发前统一: border border-radius color 变量
6. 批量添加 iconfont 图标
7.  按下 f12，在控制台输入以下代码即可将所有图标添加到购物车
  ```js
  const shopCar = document.getElementsByClassName('icon-gouwuche1');
  for (let i=0; i<shopCar.length;i++){shopCar[i].click();}
  ```
8. 字体图标添加渐变色
```js
background: linear-gradient(180deg, #fabd3d 0%, #10ddcc 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```
9. 基于 dayjs 和 element 实现的快速时段选择
```js
import dayjs from 'dayjs'

// isCurrent 为 true 则为今天(day) | 本周(week) | 本月(month) | 本年(year)
const getRangeTime = (timeRange, isCurrent=true) => {
  return {
    startTime: isCurrent ? dayjs().startOf(timeRange).format('YYYY-MM-DD HH:mm:ss') : dayjs().add(-1, timeRange).startOf(timeRange).format('YYYY-MM-DD HH:mm:ss'),
    endTime: isCurrent ? dayjs().endOf(timeRange).format('YYYY-MM-DD HH:mm:ss') : dayjs().add(-1, timeRange).endOf(timeRange).format('YYYY-MM-DD HH:mm:ss')
  }
}

export function quickSelectTimeRange() {
  return [
    {
      text: '今天',
      onClick(picker) {
        const timeObj = getRangeTime('day')
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      }
    },
    {
      text: '昨天',
      onClick(picker) {
        const timeObj = getRangeTime('day', false)
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      }
    },
    {
      text: '本周',
      onClick(picker) {
        const timeObj = getRangeTime('week')
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      }
    },
    {
      text: '上周',
      onClick(picker) {
        const timeObj = getRangeTime('week', false)
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      }
    },
    {
      text: '本月',
      onClick(picker) {
        const timeObj = getRangeTime('month')
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      }
    },
    {
      text: '上月',
      onClick(picker) {
        const timeObj = getRangeTime('month', false)
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      }
    },
    {
      text: '本年',
      onClick(picker) {
        const timeObj = getRangeTime('year')
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      }
    },
    {
      text: '上年',
      onClick(picker) {
        const timeObj = getRangeTime('year', false)
        picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
      }
    }
  ]
}
```
10. 如何在mysql中上传图片
To upload an image in MySQL, you can use the BLOB data type. Here are the steps to do it:

1. Create a table with a BLOB column to store the image:
```sql
CREATE TABLE images (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  image BLOB
);
```
2. Insert the image into the table using the LOAD_FILE() function:
```sql
INSERT INTO images (name, image)
VALUES ('image1.jpg', LOAD_FILE('/path/to/image1.jpg'));
```
Note: Make sure the MySQL server has the FILE privilege enabled.
Alternatively, you can use a programming language like PHP or Python to upload the image to the database.

LOAD_FILE()  函数中的地址是相对于 MySQL 服务器的文件系统路径。如果您在  LOAD_FILE()  函数中使用的是绝对路径，则会返回  NULL 。因此，建议您使用相对路径。如果您不确定 MySQL 服务器的文件系统路径，可以使用  `SELECT @@secure_file_priv;`  命令来查看。此命令将返回 MySQL 服务器的安全文件目录的路径。在安全文件目录中，您可以使用相对路径来引用文件。