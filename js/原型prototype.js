// 每个函数都有一个内置属性，叫做prototype（原型）
// prototype是对象
// new出来的对象有一个缺省属性，__proto__，这个属性指向函数的原型



function creatPerson(name, age, gender) {
    var p = {};
    p.name = name;
    p.age = age;
    p.gender = gender || 'male';
    p.eat = function() {
        console.log('I am eating!');
    }
    return p;
}

function Person1(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender || 'male';
    this.eat = function() {
        console.log('I am eating!');
    }
}

var p = new Person1('niu', 20, 'male');

console.log(creatPerson.prototype);;
console.log(Person1.prototype);

console.log(p.__proto__);

console.log(Person1.prototype === p.__proto__); // true


/* ==================================================== */

// 若使用构造函数创建了一个对象：
//      1. 对象.__proto__.constructor 就是构造函数的函数对象
//      2. 对象 instanceof 构造函数对象 是 true

console.log(Person1 === p.__proto__.constructor);

var a = [];
console.log(a.__proto__.constructor.name);

var obj = {};
console.log(obj.__proto__.constructor.name);

console.log(p.__proto__.constructor.name);

console.log(p instanceof Person1);
console.log(a instanceof Array);
console.log(obj instanceof Object);



/* =================================================== */

// 构造函数共用的函数或变量（如java中的static函数或字段）
//      不应该写到构造函数内部，若创建100个对象，则会浪费100个重复空间

// 解决方法：
//      1. 写到外部（污染名字空间）

function eat() {
    console.log('I am eating!');
}

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender || 'male';
    this.eat = eat;
}

// var p = new Person('nn', 20, 'male');
// p.eat();

//      2. 使用原型prototype
//             即共享的属性或方法

Person.prototype.eat = function () {
    console.log('I am eat');
}

Person.prototype.test = '测试';


var p1 = new Person('niu', 20, 'male');
var p2 = new Person('niu', 20, 'male');
p1.eat();
console.log(p1.eat === p2.eat); // true



/* ============================================== */

// 原型一些性质：

//      1. 原型可以访问原型，也可以访问实例自己属性

Person.prototype.eat2 = function () {
    this.eat();
    console.log(this.name);
}

//      2. 写：在实例上增加
//         读：就近原则 找不到就是undefined
//         delete: 删除构造函数才能彻底删掉 Person.prototype.test;

var p3 = new Person('nnn', 20, 'male');
p3.test = 'p3';
console.log(p3.test);
delete p3.test;
console.log(p2.test);

var p4 = new Person('nnn', 20, 'male');
delete p4.test; // 删不掉的
console.log(p4.test);
console.log(Person.prototype.test);

delete Person.prototype.test;
console.log(p4.test);
