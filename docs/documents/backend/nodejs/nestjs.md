# NestJS

## 有两个 module，一个是 AModule, 一个是 BModule, 如果想在 a.controler.ts 中使用 b.service.ts 中的方法，可以这样做：

1. 在 a.module.ts 的 providers 数组中添加 BService
2. 在 a.module.ts 的 imports 数组中添加 BModule, 同时在 BModule 的 exports 数组中添加 BService