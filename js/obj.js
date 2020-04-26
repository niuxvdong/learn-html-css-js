var obj = {};

obj = new Object();

var author = {};
author.name = 'niu';
obj.author = author;
obj.fn = function () {
    console.log("obj.fn");
 }

console.log(obj);
console.log(obj.author);
console.log(obj.author.name);
console.log(obj.fn);

console.log(obj['author']);
obj['fn']();

obj = {
    name: 'niu',
    1: 111,
    2: function () {
    }
};

console.log(obj['name']);
console.log(obj[1]);
console.log(obj['1']);
console.log(obj[2]);
console.log(obj['2']);

// 无法这样写。
// console.log(obj.1);

// 不写var自动挂在window上
//hh = 1;
//window.hh = 1;

function f1() {
    ccc = '111';
    var ddd = 222;
}

f1();
console.log(ccc);  // 可以访问
// console.log(ddd); 无法访问

obj = {};
obj.a = 1;
obj.b = 2;
delete obj.b;
console.log('a' in obj);
console.log(obj.hasOwnProperty('a')); // true

// 是否可枚举：
console.log(obj.propertyIsEnumerable('toString')); // false


