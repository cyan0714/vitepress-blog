# JavaScript 类型转换完整指南

## 概述

JavaScript 是一种动态类型语言，变量的类型在运行时确定，并且可以自动进行类型转换。类型转换分为两种：

- **隐式转换（自动类型转换）**：JavaScript 引擎自动进行的类型转换
- **显式转换（强制类型转换）**：开发者主动调用相关方法进行的类型转换

## 隐式类型转换（自动类型转换）

### 1. 转换为字符串类型 (ToString)

#### 1.1 加号运算符触发的字符串转换

当加号 `+` 作为二元操作符且其中一个操作数为字符串类型时，另一个操作数会被转换为字符串类型：

```js
// 基础类型转换
var foo = 3 + ''          // "3"
var foo = true + ''       // "true"
var foo = false + ''      // "false"
var foo = undefined + ''  // "undefined"
var foo = null + ''       // "null"
var foo = NaN + ''        // "NaN"
var foo = Infinity + ''   // "Infinity"

// 复合类型转换
var foo = [1, 2, 3] + ''  // "1,2,3"
var foo = {} + ''         // "[object Object]"
var foo = function(){} + '' // "function(){}"
```

#### 1.2 对象的 toString 转换规则

对象转换为字符串时遵循以下优先级：

1. 首先调用 `valueOf()` 方法
2. 如果 `valueOf()` 返回的不是原始值，则调用 `toString()` 方法
3. 如果 `toString()` 也不返回原始值，则抛出 TypeError

```js
// 自定义 valueOf 和 toString
var obj = {
  valueOf: function () {
    return 42
  },
  toString: function () {
    return "hello"
  }
}

console.log(obj + '')     // "42" (优先使用 valueOf 的结果)

// 只有 toString
var obj2 = {
  toString: function () {
    return "world"
  }
}

console.log(obj2 + '')    // "world"

// 特殊情况：数组的 toString
var arr = [1, 2, 3]
console.log(arr + '')     // "1,2,3"

var nestedArr = [1, [2, 3], 4]
console.log(nestedArr + '') // "1,2,3,4"
```

#### 1.3 模板字符串中的转换

```js
var num = 42
var bool = true
var obj = { name: 'test' }

console.log(`数字: ${num}`)    // "数字: 42"
console.log(`布尔: ${bool}`)   // "布尔: true"
console.log(`对象: ${obj}`)    // "对象: [object Object]"
```

### 2. 转换为布尔类型 (ToBoolean)

#### 2.1 假值（Falsy Values）

以下值在布尔上下文中会被转换为 `false`：

```js
Boolean(false)     // false
Boolean(0)         // false
Boolean(-0)        // false
Boolean(0n)        // false (BigInt 零)
Boolean('')        // false
Boolean("")        // false
Boolean(``)        // false
Boolean(null)      // false
Boolean(undefined) // false
Boolean(NaN)       // false
```

#### 2.2 真值（Truthy Values）

除了假值之外的所有值都是真值：

```js
Boolean(true)           // true
Boolean(1)              // true
Boolean(-1)             // true
Boolean('0')            // true (字符串 '0')
Boolean('false')        // true (字符串 'false')
Boolean([])             // true (空数组)
Boolean({})             // true (空对象)
Boolean(function(){})   // true (函数)
Boolean(new Date())     // true (日期对象)
```

#### 2.3 条件语句中的隐式转换

```js
// if 语句
if (0) {
  console.log('不会执行')
}

if ('hello') {
  console.log('会执行')  // 会执行
}

// 逻辑运算符
var result = '' || 'default'  // 'default'
var result = 'hello' && 'world'  // 'world'
var result = null ?? 'default'   // 'default' (空值合并)
```

### 3. 转换为数字类型 (ToNumber)

#### 3.1 不同类型转数字的规则

```js
// 字符串转数字
Number('')           // 0 (空字符串)
Number('  ')         // 0 (只有空格)
Number('42')         // 42
Number('42.5')       // 42.5
Number('42abc')      // NaN
Number('abc')        // NaN
Number('0x10')       // 16 (十六进制)
Number('0b10')       // 2 (二进制)
Number('0o10')       // 8 (八进制)

// 布尔转数字
Number(true)         // 1
Number(false)        // 0

// null 和 undefined
Number(null)         // 0
Number(undefined)    // NaN

// 对象转数字
Number([])           // 0 (空数组)
Number([42])         // 42 (单元素数组)
Number([1, 2])       // NaN (多元素数组)
Number({})           // NaN (空对象)
```

#### 3.2 对象转数字的详细过程

对象转换为数字时的调用顺序：

1. 调用 `valueOf()` 方法
2. 如果返回原始值，则转换为数字
3. 如果不是原始值，调用 `toString()` 方法
4. 将 `toString()` 的结果转换为数字

```js
var obj = {
  valueOf: function() {
    console.log('调用 valueOf')
    return 42
  },
  toString: function() {
    console.log('调用 toString')
    return '100'
  }
}

console.log(+obj)  // 调用 valueOf -> 42

var obj2 = {
  valueOf: function() {
    console.log('调用 valueOf')
    return {}  // 返回非原始值
  },
  toString: function() {
    console.log('调用 toString')
    return '100'
  }
}

console.log(+obj2) // 调用 valueOf -> 调用 toString -> 100
```

#### 3.3 算术运算中的隐式转换

```js
// 加法运算（特殊情况）
var foo = true + 1        // 2 (true 转为 1)
var foo = true + false    // 1 (true->1, false->0)
var foo = null + 1        // 1 (null 转为 0)
var foo = undefined + 1   // NaN (undefined 转为 NaN)

// 其他算术运算
var foo = '5' - 2         // 3 (字符串转数字)
var foo = '5' * 2         // 10
var foo = '5' / 2         // 2.5
var foo = '5' % 2         // 1

// 特殊情况
var foo = [] + []         // "" (两个空数组转字符串相加)
var foo = [] + {}         // "[object Object]"
var foo = {} + []         // 0 (在某些情况下，{} 被当作代码块)
```

### 4. 比较运算中的类型转换

#### 4.1 相等运算符 (==)

相等运算符会进行类型转换：

```js
// 数字和字符串比较
1 == '1'          // true ('1' 转为 1)
0 == ''           // true ('' 转为 0)
0 == false        // true (false 转为 0)

// null 和 undefined
null == undefined // true (特殊规则)
null == 0         // false
undefined == 0    // false

// 对象比较
[1] == 1          // true ([1] 转为 '1' 再转为 1)
[1,2] == '1,2'    // true ([1,2] 转为 '1,2')
```

#### 4.2 严格相等运算符 (===)

严格相等不进行类型转换：

```js
1 === '1'         // false
0 === false       // false
null === undefined // false
```

#### 4.3 关系运算符 (<, >, <=, >=)

```js
'2' > 1           // true ('2' 转为 2)
'10' > '2'        // false (字符串按字典序比较)
'10' > 2          // true ('10' 转为 10)
[2] > 1           // true ([2] 转为 '2' 再转为 2)
```

## 显式类型转换（强制类型转换）

### 1. 转换为字符串

#### 1.1 String() 函数

```js
String(123)        // "123"
String(true)       // "true"
String(null)       // "null"
String(undefined)  // "undefined"
String([1,2,3])    // "1,2,3"
String({a: 1})     // "[object Object]"
```

#### 1.2 toString() 方法

```js
var num = 123
num.toString()     // "123"
num.toString(2)    // "1111011" (二进制)
num.toString(16)   // "7b" (十六进制)

var arr = [1, 2, 3]
arr.toString()     // "1,2,3"

// 注意：null 和 undefined 没有 toString 方法
// null.toString()  // TypeError
// undefined.toString()  // TypeError
```

#### 1.3 JSON.stringify()

```js
JSON.stringify(123)         // "123"
JSON.stringify("hello")     // "\"hello\""
JSON.stringify(true)        // "true"
JSON.stringify(null)        // "null"
JSON.stringify(undefined)   // undefined
JSON.stringify({a: 1})      // "{\"a\":1}"
JSON.stringify([1, 2, 3])   // "[1,2,3]"
```

### 2. 转换为数字

#### 2.1 Number() 函数

```js
Number('123')      // 123
Number('123.45')   // 123.45
Number('123abc')   // NaN
Number('')         // 0
Number('  ')       // 0
Number(true)       // 1
Number(false)      // 0
Number(null)       // 0
Number(undefined)  // NaN
```

#### 2.2 parseInt() 函数

```js
parseInt('123')      // 123
parseInt('123.45')   // 123 (只取整数部分)
parseInt('123abc')   // 123 (解析到非数字字符停止)
parseInt('abc123')   // NaN (开头不是数字)
parseInt('0x10')     // 16 (十六进制)
parseInt('10', 2)    // 2 (指定基数为2)
parseInt('10', 16)   // 16 (指定基数为16)
```

#### 2.3 parseFloat() 函数

```js
parseFloat('123.45')   // 123.45
parseFloat('123.45abc') // 123.45
parseFloat('abc123')   // NaN
parseFloat('0x10')     // 0 (不识别十六进制)
```

#### 2.4 一元加号运算符 (+)

```js
+'123'        // 123
+'123.45'     // 123.45
+'123abc'     // NaN
+''           // 0
+true         // 1
+false        // 0
+null         // 0
+undefined    // NaN
```

#### 2.5 位运算符强制转换

```js
'123' | 0     // 123
'123.45' | 0  // 123 (截断小数)
'123abc' | 0  // 0
~~'123'       // 123 (双重按位非)
~~'123.45'    // 123
```

### 3. 转换为布尔值

#### 3.1 Boolean() 函数

```js
Boolean(1)          // true
Boolean(0)          // false
Boolean('')         // false
Boolean('hello')    // true
Boolean(null)       // false
Boolean(undefined)  // false
Boolean([])         // true
Boolean({})         // true
```

#### 3.2 双重逻辑非运算符 (!!)

```js
!!1           // true
!!0           // false
!!''          // false
!!'hello'     // true
!!null        // false
!!undefined   // false
!![]          // true
!!{}          // true
```

## 实用技巧与最佳实践

### 1. 避免隐式转换的陷阱

```js
// 避免这样做
if (obj.property == null) { /* ... */ }

// 推荐这样做
if (obj.property === null || obj.property === undefined) { /* ... */ }
// 或者使用空值合并
if (obj.property ?? null === null) { /* ... */ }
```

### 2. 安全的类型转换

```js
// 安全的数字转换
function toSafeNumber(value) {
  const num = Number(value)
  return isNaN(num) ? 0 : num
}

// 安全的字符串转换
function toSafeString(value) {
  if (value === null || value === undefined) {
    return ''
  }
  return String(value)
}
```

### 3. 类型检查

```js
// 检查类型的工具函数
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}

console.log(getType(123))        // 'number'
console.log(getType('hello'))    // 'string'
console.log(getType(true))       // 'boolean'
console.log(getType(null))       // 'null'
console.log(getType(undefined))  // 'undefined'
console.log(getType([]))         // 'array'
console.log(getType({}))         // 'object'
```

## 总结

理解 JavaScript 的类型转换机制对于编写健壮的代码至关重要：

1. **优先使用显式转换**：明确的类型转换让代码更易读和维护
2. **了解隐式转换规则**：避免意外的类型转换导致的 bug
3. **使用严格相等 (===)**：避免不必要的类型转换
4. **类型检查**：在必要时进行类型检查以确保代码的健壮性
5. **一致性**：在项目中保持类型转换方式的一致性

通过掌握这些类型转换的规则和最佳实践，可以写出更加可靠和可维护的 JavaScript 代码。
