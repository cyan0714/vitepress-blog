# Shell 常用命令

## 删除当前目录下以.png为后缀名的文件
```bash
rm *.png
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