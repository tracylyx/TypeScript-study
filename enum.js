"use strict";
// 数字枚举
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
})(Enum || (Enum = {}));
var a = Enum.A; // 枚举值
var nameOfA = Enum[a]; // 枚举成员 "A"
console.log(nameOfA); // console A
// 反向映射 不会为字符串枚举成员生成反向映射
var EnumStr;
(function (EnumStr) {
    EnumStr["name"] = "Tracy";
    EnumStr["work"] = "FE";
})(EnumStr || (EnumStr = {}));
;
var valueRet = EnumStr.name;
// error Element implicitly has an 'any' type because index expression is not of type 'number'.
var typeRet = EnumStr[valueRet];
var i = Enum.A;
i = 2;
console.log("\u679A\u4E3E\u7C7B\u578B\u7684\u5B9E\u4F8B " + i);
// 运行时的枚举
function e(obj) {
    console.log(obj.A); // console 0
}
e(Enum);
// 常量项和计算所得项
var DValue = 6;
var Enum2;
(function (Enum2) {
    Enum2[Enum2["A"] = 0] = "A";
    Enum2[Enum2["B"] = 1] = "B";
    Enum2[Enum2["C"] = 4] = "C";
    Enum2[Enum2["D"] = DValue] = "D";
    Enum2[Enum2["E"] = 'hello'.length] = "E";
    Enum2[Enum2["F"] = void 0] = "F";
})(Enum2 || (Enum2 = {}));
console.log(Enum2.D);
console.log(Enum2.E);
// 字符串枚举
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var Mix;
(function (Mix) {
    Mix[Mix["Num"] = 20190403] = "Num";
    Mix["Day"] = "Wednesday";
})(Mix || (Mix = {}));
;
// 外部枚举类型
// declare enum Directions{
//     Up,
//     Down,
//     Left,
//     Right
// }
// let directionns = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
var Repeat;
(function (Repeat) {
    Repeat[Repeat["one"] = 2] = "one";
    Repeat[Repeat["two"] = 3] = "two";
    Repeat[Repeat["three"] = 2] = "three";
})(Repeat || (Repeat = {}));
;
console.log(Repeat[2]); // console => three
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var cc = {
    kind: ShapeKind.Square,
    //    ~~~~~~~~~~~~~~~~ Error!
    radius: 100,
};
