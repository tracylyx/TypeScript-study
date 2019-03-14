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

enum Color {Red = 1, Green=3, Blue};
let c:Color = Color.Green;
let colorName:string = Color[3];
console.log(c);
console.log(colorName);