// JS继承：
//   判断传入对象类型
//      1. instanceof（原型继承）
//      2. 检测接口
//   借用构造函数
//      1. 构造函数.call(this, ...)
//   组合继承
//      1. 借用构造函数 + 原型继承
//   拷贝继承
//      详见 拷贝继承.js 文件
//

// animal: gender weight eat() sleep()
//      cat: eat(mouse)
//      mouse:
//              vole: eat('crop')
//              rat: eat('garbage')
// -----------------------------------------------------------
function Animal(gender, weight) {
    this.gender = gender;
    this.weight = weight;
}

Animal.prototype.eat = function () {
    console.log('animal is eating');
}

Animal.prototype.sleep = function () {
    console.log('sleeping..');
}
// ----------------------------------------------------------
function Cat(gender, weight, name) {
    // this.gender = gender;
    // this.weight = weight;
    // 借用构造函数：
    Animal.call(this, gender, weight);
    this.name = name;
}

// 原型链的互相指向：
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
// 可以使得for in 循环不去循环constructor
Object.defineProperty(Cat.prototype, 'constructor', {
    enumerable: false
});
Cat.prototype.eat = function (mouse) {
    // 确定出入的mouse是mouse
    // 1. 使用原型链判断
    // if (mouse instanceof Mouse) {
    //     console.log('Cat is eating mouse');
    // } else {
    //     console.log('Cat cannot eat Animal that is not Mouse');
    // }
    // mouse.f1();
    // mouse.f2();
    // mouse.f3();

    // 2. 基于接口来判断
    if (mouse.f1 && mouse.f2 && mouse.f3) {
        console.log('Cat is eating mouse');
        mouse.f1();
        mouse.f2();
        mouse.f3();
    } else {
        console.log('Cat cannot eat Animal that is not Mouse');
    }
}
// -------------------------------------------------
function Mouse() {

}

Mouse.prototype = new Animal('male', 33);
Mouse.prototype.constructor = Mouse;
Mouse.prototype.f1 = function () {
    console.log('f1');
}
Mouse.prototype.f2 = function () {
    console.log('f2');
}
Mouse.prototype.f3 = function () {
    console.log('f3');
}
// ----------------------------------------------------

function Vole() {
}

Vole.prototype = new Mouse();
Vole.prototype.constructor = Vole;
Vole.prototype.eat = function () {
    console.log('Vole is eating Crop');
}
// ---------------------------------------------
function Rat() {
}

Rat.prototype = new Mouse();
Rat.prototype.constructor = Rat;
Rat.prototype.eat = function () {
    console.log('Rat is eating Crop');
}
// =======================================================

var v = new Vole();
var r = new Rat();

var cat = new Cat('female', 32, 'lucy');
var cat2 = new Cat('female', 2, 'tom');

cat.eat(v);
cat.eat(r);
cat.eat(cat2);

// 使用接口法可以通过：
var obj = {
    f1: function () {
        console.log('obj f1');
    },
    f2: function () {
        console.log('obj f1');
    },
    f3: function () {
        console.log('obj f1');
    }
}


cat.eat(obj);


