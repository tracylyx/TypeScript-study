// ES6的方式定义一个类
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}
let greeterWorld = new Greeter('world');

// 继承 基于继承的方式来扩展现有的类
// class Animal {
//     move(distanceInMeters: number = 0) {
//         console.log(`Animal moved ${distanceInMeters}.`);
//     }
// }
// class Dog extends Animal {
//     bark () {
//         console.log('Woof!Woof!');
//     }
// }
// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();

// 在子类中写自己的构造函数
// class Animal {
//     name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
//     move(distanceInMeters: number = 0) {
//         console.log(`Animal moved ${distanceInMeters}.`);
//     }
// }
// class Snake extends Animal {
//     constructor(name: string) {
//         // 在构造函数访问this属性之前，一定要先调用super()!!!
//         super(name);
//     }
//     move(distanceInMeters = 5) {
//         console.log('Slitering...');
//         super.move(distanceInMeters);
//     }
// }
// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
// sam.move();
// tom.move(34);

// TS 中成员默认为public
// 公共 public 默认
// class Animal{
//     public name: string;
//     public constuctor(theName: string) {
//         this.name = theName;
//     }
//     public move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// 私有 private
// privare 1
// 不可在声明它的类的外部访问
// class Animal {
//     private name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }
// new Animal('Cat').name; // 编译报错： Property 'name' is private and only accessible within class 'Animal'.

// privare 2
// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
// class Rhino extends Animal {
//     constructor() { super("Rhino"); }
// }
// class Employee {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }
// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");
// animal = rhino;
// animal = employee; // Type 'Employee' is not assignable to type 'Animal'.Types have separate declarations of a private property 'name'.

// 受保护 protected
