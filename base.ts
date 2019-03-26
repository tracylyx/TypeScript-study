interface Person {
    firstName: string;
    lastName: string;
};
function greeter(person: Person) {
    return 'hello' + person.lastName + '' + person.firstName;
}
const personName = 'tracy';
const user = {
    firstName: 'Li',
    lastName: 'Tracy'
};
console.log(greeter(user));

// ====== 原始数据类型 ======
// 1 boolean
let isDone: boolean = false;
let createByNewBoolean: Boolean = new Boolean(true);

// 2 number
let num: number = 12;

// 3 string
let str: string = 'tracy str';

// 4 void 没有任何返回值的函数
function emptyReturn(): void {
    console.log('without return value.');
}
// * 定义void类型的变量是没有啥意义的，因为你只能给他赋值undefined
let voidUndefined: void = undefined;
// let voidNull: void = null; //  Type 'null' is not assignable to type 'void'.

// 5 undefined 和 null 是任何类型的子类，因此可以将它们赋值给任何类型【前提：config中 strictNullChecks 为false状态，默认为true】
let numUndefined: number = undefined;

// 6 any 表述允许赋值为任意类型
// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
let anyType: any = 'a any type value';
anyType = 123;
anyType = undefined;

// 7 类型推论
let aParam = 'hello world';
// aParam 定义时，赋值为一个字符串
// 通过TS的类型推论，它将用来表示一个字符串，所以如果给他赋值为其他类型的值，编译会报错
// aParam = 123; // TS2322: Type '123' is not assignable to type 'string'.

// 8 联合类型 表示取值可以是多种类型中的一种
let bParam: string|number = '123';
bParam = 123; // 数字类型无长度
bParam = 'hello world'; // 字符串类型有length属性
console.log(bParam.length);

enum Color {Red = 1, Green=3, Blue};
let c:Color = Color.Green;
let colorName:string = Color[3];
console.log(c);
console.log(colorName);