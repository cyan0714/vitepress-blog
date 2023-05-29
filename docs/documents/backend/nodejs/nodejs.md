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