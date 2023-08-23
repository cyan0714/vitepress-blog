# nodejs 脚本

## 重命名某个文件夹下的所有文件

```js
const fs = require('fs');
const path = require('path');

const folderPath = process.argv[2]; // 替换为你的文件夹路径
const prefix = 'icon_';
let count = process.argv[3] || 1;

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach(file => {
    const ext = path.extname(file);

    const oldPath = path.join(folderPath, file);
    const newPath = path.join(folderPath, `${prefix}${count}${ext}`); // 你可以根据文件类型修改扩展名

    fs.renameSync(oldPath, newPath);
    console.log(`${file} 重命名为 ${prefix}${count}${ext}`);
    count++;
  });

  console.log('重命名完成~')
});

// how to use
// 1. 打开 cmd
// 2. node rename-file.js 要修改的文件夹路径 起始数字
```

## 打开某个文件夹下的所有 html 文件

```js
const cp = require('child_process')
const fs = require('fs')
const path = require('path')

let dirName = path.resolve(__dirname, '../')

function openFile(dirName) {
  const files = fs.readdirSync(dirName)

  for (let file of files) {
    const filePath = path.join(dirName, file)
    const fileStat = fs.statSync(filePath)

    if (fileStat.isDirectory()) {
      openFile(filePath)
    } else {
      if (filePath.endsWith('.html'))
      cp.exec(`start ${filePath}`);
    }
  }
}
openFile(dirName)
```