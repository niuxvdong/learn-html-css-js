
// this

// 1. 非函数中，为window（默认绑定）
console.log(this);

// 2. 普通函数调用中，为window（默认绑定）
function f() {
    console.log(this);
}
f();

// 3. 对象的函数，通过对象调用，为对象（隐式绑定）
//      前面有对象的就是对象，没有就是window
var name = 'window';
function f3() {
    console.log(this.name);
}
var obj = {
    name: 'obj',
    f2: function () {
        console.log(this.name);
    },
    f3: f3,
    f4: function () {
        console.log(this);
    }
}
obj.f2(); // obj
f3(); // window
obj.f3(); // obj
var f31 = obj.f3;
f31(); // window

// 4. call/apply中，this为第一个参数（显示绑定）

var f32 = obj.f3;
f32.call(obj); // obj
// f32.call(window); // window

// 5. new调用构造函数时，this指向刚创建对象（new绑定）

function Creat() {
    this.name = 'creat';
    console.log(this);
}

var c = new Creat(); // Creat
Creat(); // window

// 6. 函数作为callback赋值给setTimeout ,this指向window （隐式绑定）

// setTimeout(obj.f3, 1000); // window
// 绑定到事件上，和对象无关，只和当前元素有关
// var btn = document.querySelector('#btn');
// btn.onClick = obj.f4;

// 7. ES6语法：bind(this) 可以帮助this初始化为当前对象
//      bind 与 call区别，bind会返回，单独f33()仍然有绑定效果
var f33 = obj.f4.bind(obj);
f33(); // obj

// 总结：this永远和调用函数时的状态有关，和定义无关

