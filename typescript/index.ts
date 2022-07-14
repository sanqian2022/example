// JS的八种内置类型
let str: string = "this is a string";
let num: number = 18;
let bool: boolean = false;
let u: undefined = undefined;
let n: null = null;
let obj: object = { a: 2 };
let big: bigint = 100n;
let sym: symbol = Symbol("me");

// null和undefined赋值给string
str = null;
str = undefined;

// null和undefined赋值给number
num = null;
num = undefined;

// null和undefined赋值给object
obj = null;
obj = undefined;

// null和undefined赋值给Symbol
sym = null;
sym = undefined;

// null和undefined赋值给boolean
bool = null;
bool = undefined;

// null和undefined赋值给bigint
big = null;
big = undefined;

// number和bigint都表示数字，但是这两个类型不兼容。
let num2: number = 2
// num2 = 100n
let big2: bigint = 3n
// big2 = 3

// 对数组类型的定义

