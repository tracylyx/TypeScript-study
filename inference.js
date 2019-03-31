"use strict";
// 类型推断为string类型，但是之后给变量inference1赋值为数值类型，所以报错
var inference1 = 'inference demo';
inference1 = 2019;
console.log(inference1);
// 定义一个为初始化的变量，这种情况类型推断为any
var inference2;
inference2 = 'inference2 demo';
inference2 = 20190403;
// 最佳通用类型推断，找到一个最适合的类型
var inference3 = [0, 1, null];
