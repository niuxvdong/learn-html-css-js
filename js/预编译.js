// （扫描两遍）先编译var声明的变量，和普通函数（不包括函数表达式），将其挂在window上；其他语句在执行期间运行
// 运行期间进入函数后仍然会进行预编译，处理同上
// 永远先扫描变量，后扫描函数，所以永远是函数覆盖变量！


// 一、没有var声明的变量，都是window全局变量，不参与预编译

// console.log(a); // 无法访问
// a = 5; // 运行时扫描


// 二、函数中的变量也不参与预编译

// console.log(a); // 无法访问
f();

function f() {
    a = 5;
    console.log('f()函数执行');
}


// 三、变量位置不重要

console.log(b); // undefined
var b = 9; // 预编译时b已加入window
console.log(b); // 9


// 四、函数位置不影响

console.log(fn);

function fn() {
    console.log('fn()执行');
}

// 五、变量与函数同名，函数覆盖变量

console.log(f1); // 函数覆盖变量
var f1 = 5; // 预编译f1加入window，运行期间的赋值将f1函数修改为变量
console.log(f1); // 5

function f1() {
    console.log('f1');
}

// 六、变量无法覆盖函数，函数级别高。

console.log(f2);
function f2() {
    console.log('f2');
}

var f2 = 5;
console.log(f2); // 5 当然这里会在运行期被赋值修改


// 七、JavaScript无重载，同名时后面覆盖前面

f3(); // f3(x)

function f3() {
    console.log('f3()');
}

function f3(x) {
    console.log('f3(x)');
}


//////////////////////////////////////////////////////////////////////

// 函数调用产生的预编译（AO Active Object）

// 八、函数中的变量位置无影响

function f4() {
    console.log(c); // undefined
    var c = 33;
    console.log(c); // 33
}
f4();
// 九、函数中的函数位置无影响

function f5() {
    console.log(ff());
    function ff() {
        console.log('ff');
    }
}
f5();

// 十、同名时，函数覆盖变量（与全局情况第五点相同）


// 十一、变量无法覆盖函数（与全局情况第六点相同）


// 十二、函数中的函数也无法重载，后覆盖前（与全局情况第七点相同）


//

var s = 3; // GO(global object)的变量
function f6() {
    console.log(s); // undefined
    var s = 5; // AO的变量
    console.log(s); // 5
}
f6();
console.log(s); // 3



/////////////////////////////////////////////////////////
// 练习

function test(x, x) {
    // 此时是第二个x
    console.log(x); // function
    x = 9;
    console.log(arguments); // 3, 9
    function x() {
        console.log('xxxx');
    }
}

test(3, 5);



// 练习

console.log(x, y); // undefined undefined
// console.log(z); // 无法访问
var x = 1, y = z = 2;






