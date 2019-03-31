// 数字枚举
enum Enum {
    A=0,
    B
}
let a = Enum.A; // 枚举值
let nameOfA = Enum[a]; // 枚举成员 "A"
console.log(nameOfA); // console A

// 反向映射 不会为字符串枚举成员生成反向映射
enum EnumStr {
    name = 'Tracy',
    work = 'FE'
};
let valueRet = EnumStr.name;
// error Element implicitly has an 'any' type because index expression is not of type 'number'.
let typeRet = EnumStr[valueRet];

let i = Enum.A;
i = 2;
console.log(`枚举类型的实例 ${i}`);

// 运行时的枚举
function e(obj: {A: number}): void {
    console.log(obj.A); // console 0
}
e(Enum);

// 常量项和计算所得项
const DValue = 6;
enum Enum2 {
    A,
    B,
    C = 4,
    D = DValue,
    E = 'hello'.length,
    F
}
console.log(Enum2.D);
console.log(Enum2.E);

// 字符串枚举
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

enum Mix {
    Num = 20190403,
    Day = 'Wednesday'
};

// 外部枚举类型
declare enum Directions{
    Up,
    Down,
    Left,
    Right
}
let directionns = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

