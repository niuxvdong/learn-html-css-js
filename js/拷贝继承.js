// 加一个变量不影响其他变量：

function F1() {
    this.a = 5;
}

var f1 = new F1();
F1.prototype.f = function () {
    console.log('f:', this.a);
}

f1.b = 2;

// 普通写法：
// var f11 = new Object();
// f11.__proto__ = f1;
// 更优雅的写法：
var f11 = Object.create(f1);

f11.a = 55;
f11.b = 22;

console.log(f1.a, f1.b, f1.f);
console.log(f11.a, f11.b, f11.f);
// =================================================================================
// 拷贝继承

function F2(a, b) {
    if (a.__proto__ && a.__proto__.constructor.name === 'F2') {
        for (var i in a) {
            if (f2.hasOwnProperty(i)) {
                this[i] = a[i];
            }
        }
    } else {
        this.a = a;
        this.b = b;
    }
}

var f2 = new F2(1, 2);



// 1. 直接拷贝
// var f22 = Object.create(f2.__proto__);
// for (var i in f2) {
//     // 将f2自己的东西复制到f22
//     if (f2.hasOwnProperty(i)) {
//         f22[i] = f2[i];
//     }
// }

// 2. 拷贝构造函数（模仿出来的）
var f33 = new F2(f2);
console.log(f33);

// 3. 浅拷贝
//      只拷贝值，如果是拷贝对象是数组或其他对象，那么只拷贝引用

// 如上面的直接拷贝就是浅拷贝

// 4. 深拷贝
//      如果拷贝对象是数组或其他对象，完整拷贝这些数组和对象
//  深拷贝函数
// 把a拷贝到b
function deepCopyObject(a) {
    // 1. 拷贝a的原型
    var b = Object.create(a.__proto__);
    // 2. 把a自有的所有成员拷贝到b
    for (var i in a) {
        if (a.hasOwnProperty(i)) {
            // 普通类型变量
            if (!(a[i] instanceof Object)) {
                b[i] = a[i];
            } else {    // 成员是对象 递归拷贝
                b[i] = deepCopyObject(a[i]);
                if (a[i] instanceof Array) {
                    b[i].length = a[i].length;
                }
            }
        }
    }
    return b;
}

var f3 = new F2([1, 2], {a:3, b:4});
var bb = deepCopyObject(f3);

console.log(f3);
console.log(bb);
console.log(f3.a === bb.a); // false


