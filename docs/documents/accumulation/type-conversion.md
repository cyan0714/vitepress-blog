# 类型转换

## 自动类型转换(隐式)

### 1.转换为字符串类型(to string)

1. 当加号"+"作为二元操作符且其中一个操作数为字符串类型时, 另一个操作数将会被无条件转为字符串类型:

```js
// 基础类型
var foo = 3 + '' // "3"
var foo = true + '' // "true"
var foo = undefined + '' // "undefined"
var foo = null + '' // "null"

// 复合类型
var foo = [1, 2, 3] + '' // "1,2,3"
var foo = {} + '' // "[object Object]"

// 重写valueOf()和toString()
var o = {
  valueOf: function () {
    return 3
  },
  toString: function () {
    return 5
  },
}

foo = o + '' // "3"

o = {
  toString: function () {
    return 5
  },
}

foo = o + '' // "5"
```

从上面代码中可以看到:

- 对于基础类型，会直接转为与字面量相一致的字符串类型;
- 而对于复合类型，会先试图调用对象的 valueOf()方法，如果此方法返回值是引用类型，则接着再调用其 toString()方法，最后将返回值转为字符串类型。

### 2.转换为布尔类型(to boolean)

除了 0、NaN、false、''、undefined、null 为 false, 其余为 true

### 3.转为数字类型(to number)

1. 字符串转为数字
   空字符串被转为 0，非空字符串中，符合数字规则的会被转换为对应的数字，否则视为 NaN

2. 布尔类型转为数字
   true 被转为 1，false 被转为 0

3. null 被转为 0，undefined 被转为 NaN
4. 对象类型转为数字
   valueOf()方法先试图被调用，如果调用返回的结果为基础类型，则再将其转为数字，如果返回结果不是基础类型，则会再试图调用 toString()方法，最后试图将返回结果转为数字，如果这个返回结果是基础类型，则会得到一个数字或 NaN，如果不是基础类型，则会抛出一个异常

```js
var foo = true + 1 // 2
var foo = true + false // 1
var foo = true + null // 1
var foo = null + 1 // 1
var foo = null + undefined // NaN
var foo = null + NaN // NaN
var foo = null + {} // null[object Object]
```

## 自动类型转换(显式)
