// 1. 工厂模式

function creatPerson(name) {
    var obj = new Object();
    obj.name = name;
    obj.f = function () {
        console.log('hello');
    }
    return obj;
}

var o1 = creatPerson('lisa');
o1.f();

// 2. 构造函数模式

function Person(name) {
    this.name = name;
    this.f = function () {
        console.log('hello');
    }
}

var o2 = new Person('lisa');
o2.f();

// 3. 原型模式

function Person1() {
}

Person1.prototype.name = 'lisa';
Person1.prototype.f = function () {
    console.log('hello');
}

var o3 = new Person1();
o3.f();

// 4. 原型-构造函数模式
//      构造函数无法共享函数，浪费内存
//      原型，属性也是共享的
//      期望：函数共享，属性私有

function Person2(name) {
    this.name = name;
}
Person2.prototype.f = function () {
    console.log('hello');
}

var o4 = new Person2('lisa');
console.log(o4);

// 5. 动态原型-构造函数模式

function Person3(name) {
    this.name = name;
    if (typeof this.f !== 'function') {
        Person3.prototype.f = function () {
            console.log('hello');
        }
    }
}

var o5 = new Person3('lisa');
console.log(o5);

// 6. 寄生构造函数
// var newArray = new Array();
// newArray.f = function () {
//     console.log('hello');
// }
function Array2() {
    var newArray = new Array();
    newArray.f = function () {
        console.log('hello');
    }
    return newArray;
}

var o6 = new Array2();
console.log(o6);
o6.f();
// 7. 稳妥构造函数

function Array3() {
    var newArray = new Array();
    newArray.f = function () {
        console.log('hello');
    }
    return newArray;
}
