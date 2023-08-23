# 对象转原始值

## 规则
1. 如果对象具有 Symbol.toPrimitive 方法，则调用该方法并返回其结果。
2. 否则，如果对象是日期对象，则将其转换为字符串。
3. 否则，如果对象是数字、字符串或布尔值，则将其返回。
4. 否则，如果对象具有 valueOf 方法，则调用该方法并返回其结果，如果结果是原始值，则返回该结果。
5. 否则，如果对象具有 toString 方法，则调用该方法并返回其结果，如果结果是原始值，则返回该结果。
6. 否则，抛出一个 TypeError 异常。

## Number(xxx)
1. 如果 xxx 的 valueOf 返回原始值，直接 Number 包装后返回
2. 如果 valueOf 返回对象，去找 toString 方法
3. 如果 toString 方法返回原始值，直接 Number 包装后返回
4. 如果重写的 toString 返回对象，直接报错
5. 如果没有重写 toString，调用 Object.prototype 上的 toString 方法