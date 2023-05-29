# NodeJS

## 打开某个文件夹下所有文件
```js
const cp = require('child_process')
const fs = require('fs')
const path = require('path')

let dirName = path.resolve(__dirname, '../') // 要打开的文件夹

function openFile(dirName) {
  const files = fs.readdirSync(dirName)

  for (let file of files) {
    const filePath = path.join(dirName, file)
    const fileStat = fs.statSync(filePath)

    if (fileStat.isDirectory()) {
      openFile(filePath)
    } else {
      if (filePath.endsWith('.html')) // 打开所有 html 文件
      cp.exec(`start ${filePath}`);
    }
  }
}
openFile(dirName)
```

## 读取文件（异步）
```js
const fs = require('fs');
const path = require('path');
const targetPath = path.join(__dirname, './t.js')

fs.readFile(targetPath, 'utf8', (err, data) => {
  console.log('datra', data);
})
```

## 读取文件（同步）
```js
const fs = require('fs');
const path = require('path');
const targetPath = path.join(__dirname, './t.js')

const data = fs.readFileSync(targetPath)
console.log(data.toString()); // 将 buffer 数据转为原始内容
```

## 读取文件信息（同步）
```js
const fs = require('fs');
const path = require('path');
const targetPath = path.join(__dirname, './t.js')

const stats = fs.statSync(targetPath)
console.log('文件的大小:', stats.size);
console.log('是否是文件:', stats.isFile());
console.log('是否是目录(文件夹):', stats.isDirectory());
```

## 写文件（异步）
```js
const fs = require('fs');
const path = require('path');
const targetPath = path.join(__dirname, './t.js')

fs.writeFile(targetPath, '我是写入的内容', (err) => {
  if (err) {
    throw err
  }

  console.log('写入成功');
})
```

## 写文件（同步）
```js
const fs = require('fs');
const path = require('path');
const targetPath = path.join(__dirname, './t.js')

fs.writeFileSync(targetPath, '内容')
```

## 先读取再写入
```js
const fs = require('fs');
const path = require('path');
const targetPath = path.join(__dirname, './t.js')

fs.readFile(targetPath, (err, data) => {
  if (err) { throw err}
  const resData = data
  fs.writeFile('./readme.md', resData, (err) => {
    if (err) { throw err}
    console.log('写入成功');
  })
})
```

## 删除文件
```js
const fs = require('fs');
const path = require('path');
const targetPath = path.join(__dirname, './t.js')

fs.unlink('./readme.md', (err) => {
  if (err) { throw err }
  console.log('删除成功');
})
```

## 读取某个文件夹中的所有文件
```js
const fs = require('fs');
const path = require('path');
const targetPath = path.join(__dirname, './t.js')

fs.readdir('./test', (err, files) => {
  if (err) { throw err }
  console.log('files',files); // 返回一个数组，数组里的每一项为这个文件夹下的所有文件的文件名
})
```

## 创建文件夹 & 删除空文件夹
```js
const fs = require('fs');
const path = require('path');
const targetPath = path.join(__dirname, './t.js')

fs.mkdir('./mydir', (err) => {
  if (err) { throw err }
  console.log('创建成功');
})
fs.rmdir('./mydir', (err) => {
  if (err) { throw err }
  console.log('删除成功');
})
```
## 递归删除某文件夹下的所有文件
```js
const fs = require('fs');
const path = require('path');
const targetPath = path.join(__dirname, './t.js')

function delFile(dirName) {
  // 获取该目录下的所有文件
  const files = fs.readdirSync(dirName)
  for (let file of files) {
    // 获取每个文件的路径
    let filePath = path.join(dirName, file)

    // 读取每个文件的信息
    let fileStat = fs.statSync(filePath)

    if (fileStat.isFile()) {
      fs.unlinkSync(filePath)
    } else {
      delFile(filePath)
    }
  }
}
```
## 递归删除各个空文件夹
```js
const fs = require('fs');
const path = require('path');
const targetPath = path.join(__dirname, './t.js')

function isEmptyDir(fPath) {
  const fStat = fs.readdirSync(fPath)
  return fStat.length === 0
}

function delFile(dirName) {
  // 获取该目录下的所有文件
  const files = fs.readdirSync(dirName)
  for (let file of files) {
    const filePath = path.join(dirName, file)
    const fileStat = fs.statSync(filePath)
    if (fileStat.isDirectory()) {
      if (isEmptyDir(filePath)) {
        fs.rmdirSync(filePath)
      } else {
        delFile(filePath)
      }
    }
  }
}
```
## 复制文件(如果文件存在则复制失败)
```js
const fs = require('fs');
const path = require('path');
const targetPath = path.join(__dirname, './t.js')

fs.copyFile('./t.js', './b.js', fs.constants.COPYFILE_EXCL, (err) => {
  if (err) { throw err }
  console.log('copy success!');
})
```
## 在文件指定行插入内容
```js
const fs = require('fs');
const path = require('path');
const targetPath = path.join(__dirname, './t.js')

const data = fs.readFileSync('./b.js', 'utf8').split('\n')
data.splice(4, 0, `内容7\r`) // 第五行插入
fs.writeFileSync('./b.js', data.join('\n'),'utf-8')
console.log('data', data);
```