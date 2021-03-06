/* JavaScript通过这种方式实现其他语言面向对象的类的实现：封装性 */

// 一、简单工厂：
var person = {};

person.creatPerson = function (name, age, gender) {
    var p = {};
    p.name = name;
    p.age = age;
    // if (gender === undefined) {
    //     p.gender = 'male';
    // } else {
    //     p.gender = gender;
    // }
    // 短路运算简化代码：
    p.gender = gender || 'male';
    p.eat = function() {
        console.log('I am eating!');
    }
    return p;
}

function show(person) {
    console.log(person.name, person.age, person.gender);
    person.eat();
}

var xiaoming = person.creatPerson('小明', 18);
var xiaohong = person.creatPerson('小红', 20, 'female');

show(xiaoming);
show(xiaohong);


// 二、构造函数
// 构造函数原理类似这样
function Person(name, age, gender) {
    var p = {};
    p.name = name;
    p.age = age;
    p.gender = gender || 'male';
    p.eat = function() {
        console.log('I am eating!');
    }
    return p;
}

// 实例是独立的：
var lisi = Person('李四', 25);
lisi.hello = 'hello';
show(lisi);
console.log(lisi.hello);
var tmp = Person('tem', 20);
show(tmp);
console.log(tmp.hello);
var tmp1 = new Person('tmp1', 24);
show(tmp1);

// 应该这样，使用this
// 创建对象并return,内部已实现
function Person1(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender || 'male';
    this.eat = function() {
        console.log('I am eating!');
    }
}


// 不使用new，由于无返回值，undefined
var wangwu = Person1('王五', 30);
console.log(wangwu); // undefined
// 使用new，互相独立，自动构建对象并返回当前实例
var mayun = new Person1('马云', 23);
show(mayun);

