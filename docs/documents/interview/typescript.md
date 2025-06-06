## typescript 有哪些主要类型？

### 1. 基本类型 (Primitive Types)
- **number**：数字类型，包括整数和浮点数
```ts
let age: number = 25;
let price: number = 99.99;
let hex: number = 0xf00d; // 十六进制
```

- **string**：字符串类型
```ts
let name: string = "张三";
let template: string = `Hello, ${name}!`;
```

- **boolean**：布尔值类型
```ts
let isActive: boolean = true;
let isCompleted: boolean = false;
```

- **null 和 undefined**：空值类型
```ts
let data: null = null;
let value: undefined = undefined;
// 在严格模式下，null 和 undefined 是不同的类型
```

- **symbol**：ES6 新增的原始类型
```ts
let sym: symbol = Symbol("key");
let sym2: symbol = Symbol.for("key");
```

- **bigint**：大整数类型
```ts
let big: bigint = 100n;
let big2: bigint = BigInt(100);
```

### 2. 复合类型 (Composite Types)
- **array**：数组类型
```ts
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
let mixed: (string | number)[] = [1, "hello", 2];
```

- **tuple**：元组类型，固定长度和类型的数组
```ts
let user: [string, number] = ["张三", 25];
let coordinate: [number, number, number] = [10, 20, 30];
// 可选元素和剩余元素
let optional: [string, number?] = ["hello"];
let rest: [string, ...number[]] = ["prefix", 1, 2, 3];
```

### 3. 特殊类型 (Special Types)
- **any**：任意类型，关闭类型检查
```ts
let data: any = 42;
data = "hello";
data = { name: "test" };
// 尽量避免使用 any
```

- **unknown**：安全的 any 类型
```ts
let value: unknown = getData();
// 使用前需要类型检查
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

- **void**：无返回值类型
```ts
function logMessage(msg: string): void {
  console.log(msg);
  // 不返回任何值
}
```

- **never**：永不存在的值的类型
```ts
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

### 4. 对象类型 (Object Types)
- **object**：非原始类型
```ts
let obj: object = { name: "test" };
let arr: object = [1, 2, 3];
let func: object = () => {};
```

- **接口 (interface)**：定义对象结构
```ts
interface User {
  readonly id: number;
  name: string;
  age?: number; // 可选属性
  [key: string]: any; // 索引签名
}

interface Callable {
  (arg: string): void;
}
```

- **类型别名 (type)**：定义复杂类型
```ts
type Point = {
  x: number;
  y: number;
};

type StringOrNumber = string | number;
type EventHandler = (event: Event) => void;
```

### 5. 联合与交叉类型 (Union & Intersection Types)
- **联合类型 (|)**：多个类型中的一个
```ts
type Status = "loading" | "success" | "error";
let current: Status = "loading";

function formatInput(input: string | number): string {
  return String(input);
}
```

- **交叉类型 (&)**：多个类型的合并
```ts
interface Name {
  name: string;
}
interface Age {
  age: number;
}
type Person = Name & Age;

let person: Person = {
  name: "张三",
  age: 25
};
```

### 6. 字面量类型 (Literal Types)
- **字符串字面量**
```ts
type Theme = "light" | "dark";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
```

- **数字字面量**
```ts
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
type PowerOfTwo = 2 | 4 | 8 | 16 | 32;
```

- **布尔字面量**
```ts
type Success = true;
type Failure = false;
```

### 7. 函数类型 (Function Types)
```ts
// 函数类型定义
type Calculator = (a: number, b: number) => number;

// 带可选参数的函数
type Formatter = (input: string, options?: { uppercase?: boolean }) => string;

// 函数重载
function process(input: string): string;
function process(input: number): number;
function process(input: string | number): string | number {
  return typeof input === "string" ? input.toUpperCase() : input * 2;
}
```

### 8. 泛型 (Generics)
```ts
// 基本泛型
function identity<T>(arg: T): T {
  return arg;
}

// 泛型接口
interface Container<T> {
  value: T;
  getValue(): T;
}

// 泛型约束
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// 条件类型
type NonNullable<T> = T extends null | undefined ? never : T;
```

### 9. 高级类型 (Advanced Types)
- **映射类型**
```ts
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};
```

- **条件类型**
```ts
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : "object";
```

- **模板字面量类型**
```ts
type EventName<T extends string> = `on${Capitalize<T>}`;
type ButtonEvent = EventName<"click">; // "onClick"
```

### 10. 工具类型 (Utility Types)
TypeScript 提供了许多内置工具类型：
```ts
// Partial - 所有属性变为可选
type PartialUser = Partial<User>;

// Required - 所有属性变为必需
type RequiredUser = Required<User>;

// Pick - 选择指定属性
type UserName = Pick<User, "name">;

// Omit - 排除指定属性
type UserWithoutId = Omit<User, "id">;

// Record - 创建对象类型
type Scores = Record<string, number>;

// ReturnType - 获取函数返回类型
type Result = ReturnType<typeof someFunction>;
```

### 总结
TypeScript 的类型系统非常强大，这些类型可以组合使用来创建复杂而精确的类型定义，帮助开发者在编译时发现错误，提高代码质量和开发效率。

