## typescript 有哪些主要类型？
1. 基本类型
number：数字

string：字符串

boolean：布尔值

null 和 undefined：空值

2. 复合类型
array：数组，如 number[]

tuple：元组，如 [string, number]

3. 特殊类型
any：任意类型

void：无返回值

never：永不存在的值（如抛出错误）

4. 对象类型
object：对象

接口（interface）和类型别名（type）：定义复杂对象结构

5. 联合与交叉类型
|：联合类型，如 string | number

&：交叉类型，如 A & B

6. 字面量类型
如 "success" | "error"

7. 函数类型
如 (a: number, b: number) => number

8. 泛型
如 Array<T>

