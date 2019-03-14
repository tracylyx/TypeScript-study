"use strict";
;
function greeter(person) {
    return 'hello' + person.lastName + '' + person.firstName;
}
var personName = 'tracy';
var user = {
    firstName: 'Li',
    lastName: 'Tracy'
};
console.log(greeter(user));
// ====== 原始数据类型 ======
// 1 boolean
var isDone = false;
var createByNewBoolean = new Boolean(true);
// 2 number
var num = 12;
// 3 string
var str = 'tracy str';
// 4 void 没有任何返回值的函数
function emptyReturn() {
    console.log('without return value.');
}
// * 定义void类型的变量是没有啥意义的，因为你只能给他赋值undefined
var voidUndefined = undefined;
// let voidNull: void = null; //  Type 'null' is not assignable to type 'void'.
// 5 undefined 和 null 是任何类型的子类，因此可以将它们赋值给任何类型【前提：config中 strictNullChecks 为false状态，默认为true】
var numUndefined = undefined;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var colorName = Color[3];
console.log(c);
console.log(colorName);
