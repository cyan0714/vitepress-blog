# Shell 常用命令

## 删除当前目录下以.png为后缀名的文件
```bash
rm *.png
```

## 给某个文件的每一行的开头添加"hello"
```bash
sed -i 's/^/hello/' 文件名
```

## 批量下载图片
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

## 将某个文件夹下所有文件重命名为以"icon_"开头, 后面跟着数字, 并且数字递增的文件名
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