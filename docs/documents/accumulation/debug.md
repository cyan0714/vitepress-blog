# 调试技巧

## 1. 在 vue 文件中添加 debugger 进入浏览器后断点没有停下

打开 f12，点击设置，将下面的勾去掉

![11.png](./imgs/11.png)

如果断点进入函数后跳转到 vue.runtime.esm.js 文件，则点击上图中的 Add pattern 按钮，输入 vue.runtime.esm.js 保存即可