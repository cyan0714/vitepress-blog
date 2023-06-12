# 对象转原始值

Number(xxx)
1. 如果 xxx 的 valueOf 返回原始值，直接 Number 包装后返回
2. 如果 valueOf 返回对象，去找 toString 方法
3. 如果 toString 方法返回原始值，直接 Number 包装后返回
4. 如果重写的 toString 返回对象，直接报错
5. 如果没有重写 toString，调用 Object.prototype 上的 toString 方法