## 函数预编译步骤

1. 创建 AO 对象，执行期上下文。
2. 寻找函数的形参和变量声明，将变量和形参名作为 AO 对象的属性名，值设定为 undefined.
3. 将形参和实参相统一，即更改形参后的 undefined 为具体的形参值。
4. 寻找函数中的函数声明，将函数名作为 AO 属性名，值为函数体。

### 预编译过程包括两个主要步骤：变量提升（Hoisting）和函数提升。

1. 变量提升（Hoisting）：在 JavaScript 中，变量的声明会被提升到其作用域的顶部。这意味着无论变量的声明在代码中的哪个位置，它们都会在实际执行之前被"提升"到作用域的顶部。这样，在代码中可以在变量声明之前使用这些变

例如，以下代码中的变量声明会被提升到函数作用域的顶部：

```js
function example() {
  console.log(x); // 输出：undefined
  var x = 10;
  console.log(x); // 输出：10
}
```

在预编译阶段，上述代码实际上会被解释为：

```js
function example() {
  var x; // 变量提升
  console.log(x); // 输出：undefined
  x = 10;
  console.log(x); // 输出：10
}
```

2. 函数提升：与变量提升类似，JavaScript 中的函数声明也会被提升到作用域的顶部。这意味着无论函数声明在代码中的哪个位置，都可以在函数声明之前调用这些函数。

```js
example();

function example() {
  console.log('Hello, world!');
}
```

在预编译阶段，上述代码实际上会被解释为：

```js
function example() {
  console.log('Hello, world!');
}

example(); // 输出：Hello, world!
```

需要注意的是，只有函数声明会被提升，而函数表达式（如匿名函数）不会被提升。
