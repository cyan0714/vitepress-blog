# 文件操作脚本

## Node.js - 重命名某个文件夹下的所有文件

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

// 使用方法:
// 1. 打开 cmd
// 2. node rename-file.js 要修改的文件夹路径 起始数字
```

## Shell - 批量重命名文件（以"icon_"开头）

```bash
#!/bin/bash

count=1
directory="F:\companyProj\inside-led-window-app\src\modules\supervise-unite\images"  # 将这里的路径替换为目标文件夹的路径

cd "$directory"  # 进入目标文件夹

for file in *; do
  if [ -f "$file" ]; then  # 只处理文件，排除文件夹
    extension="${file##*.}"  # 获取文件扩展名
    new_filename="icon_$count.$extension"  # 构建新的文件名

    mv "$file" "$new_filename"  # 重命名文件

    count=$((count+1))  # 数字递增
  fi
done
```

## Shell - 删除当前目录下指定后缀名的文件

```bash
# 删除 .png 文件
rm *.png

# 删除 .jpg 文件
rm *.jpg

# 删除多种类型文件
rm *.{png,jpg,gif}
```

## Shell - 批量下载图片

```bash
# url.json 文件内容为:
# [
#   {"path":"1.12.218.227:8080/file/picture/72e9c22e21f57ec24f54364abafc9c1a"},
#   {"path":"1.12.218.227:8080/file/picture/e28e24f328dbf77a9507174b91be7e92"}
#   ,...
# ]
array=$(sed 's/[][]//g; s/[{}"]//g; s/[:,]//g' url.json | sed 's|.*/||')
for name in $(echo "${array[@]}"); do
  curl -o "$name.png" http://1.12.218.227:8080/file/picture/$name
done
```

## Node.js - 打开某个文件夹下的所有 HTML 文件

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
