// 六种继承方式

// 1. 原型链继承
// 优点：
//      1. 子类实例可以继承子类属性，父类属性，父类原型属性
// 缺点:
//      1. 来自原型对象的引用属性是所有实例共享的,原型中的一改则全改
//      2. 创建子类实例无法向父类构造函数传参

function Father() {
    this.age = 12;
}
function Son() {
    this.name = 'jj';
}
Son.prototype = new Father();
var son = new Son();
console.log(son.age);
console.log(son.name);
console.log(son instanceof Father); // true


// 2. 借用构造函数继承（call或apply）
//      父类.call(this, ...)
// 特点：
// 优点：
//      1. 只继承父类属性,不继承父类原型的属性（和父类原型无关系）
//      2. 解决了原型继承缺点（父类的父类，都得写一个call）
//      3. 可以继承多个构造函数的属性 （call）
//      4. 子实例调用构造函数可向父构造函数传参
// 缺点：
//      1. 只能继承父类构造函数属性
//      2. 无法实现复用，每个实例都有父类的副本，臃肿（相当于拷贝了一份父类的属性）
function Person(name) {
    this.name = name;
}
function Per() {
    Person.call(this, 'niu');
    this.age = 12;
}
var p1 = new Per();
console.log(p1.age);
console.log(p1.name);
console.log(p1 instanceof Person); // false

// 3. 组合继承: 原型链继承 + 借用构造函数
//      子类有父类的属性，并且指向父类(父类属性仍存在)
//      内存浪费问题
function He(name) {
    Person.call(this, name);
    this.age = 22;
}

He.prototype = new Person();
var s = new He('he');
console.log(s.name);
console.log(s.age);


// 4. 原型式继承：用一个空构造函数做容器，把父类实例当做原型
//

function content(obj) {
    function F() { }
    F.prototype = obj;
    return new F();
}
var s = new Person('hh');
var s1 = content(s);
console.log(s1.name);

// 5. 寄生式继承：在原型式继承的基础上，将继承本身封装

function content1(obj) {
    function F() { }
    F.prototype = obj;
    return new F();
}
var ss = new Person('hh');

function subContent(obj) {
    var sub = content1(obj);
    sub.name = 'gar';
    return sub;
}
var ss2 = subContent(ss);
console.log(ss2.name); // gar
console.log(typeof ss2); // object

// 6. 寄生式组合继承：寄生式继承 + 父类实例属性剥离 + 组合继承

function content2(obj) {
    function F() { }
    F.prototype = obj;
    return new F();
}
var con = content(Person.prototype);
// con实例(F实例)的原型继承了父类函数的原型
// 上述更像原型链继承，只不过继承了原型属性

// 组合：
function Sub() {
    Person.call(this, 'niub');
}
// 解决了组合式继承两次调用构造函数的缺点
Sub.prototype = con; // 继承了con实例
con.constructor = Sub; // 修复实例
var sss = new Sub();

console.log(sss.name);


