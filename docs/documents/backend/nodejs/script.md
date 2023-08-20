# node 脚本

## 批量输出 "import xxx from yyy"

```js
// 读取某个文件夹下所有的 .vue 文件, 循环输出 "import xxx from yyy"
// 其中 xxx 为这个文件夹的名字和文件名的名字大驼峰组合, yyy 为文件的路径名

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 当前文件名
const __filename = fileURLToPath(import.meta.url);
// 当前文件所在文件夹名
const __dirname = path.dirname(__filename);

fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    if (path.extname(file) === '.vue') {
      const fileName = path.basename(file, '.vue');
      const folderName = path.basename(__dirname);
      const importName =
        folderName.charAt(0).toUpperCase() +
        folderName.slice(1) +
        fileName.charAt(0).toUpperCase() +
        fileName.slice(1);

      const prefixPath = '/.vitepress/components/';
      console.log(`import ${importName} from '${prefixPath}${folderName}/${fileName}.vue';`);
    }
  });
});
```