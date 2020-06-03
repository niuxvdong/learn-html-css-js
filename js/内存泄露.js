// 1. 意外的全局变量

// 函数在预编译时加入window 函数无法退出，无法释放 内存无法释放
function foo(arg) {
    bar = 'global variable';
    // 等同于window.bar = 'global variable';
    this.bar2 = 'protential global';
    // 这里this指向全局对象window
    // window.bar2 = 'protential global';
}

// 手动释放。。。
foo = null;


// 2. 定时器函数没有清理，函数本身和函数内部使用的外部变量都无法释放，内存泄露

// 定时器函数没有使用var timer = setInterval....
// 会导致无法清理timer clearInterval 导致内部及外部的变量和函数都无法释放，内存泄露

var data = function () { };
setInterval(function () {
    var node = document.getElementById('Node');
    if (node) {
        node.innerHTML = data;
    }
}, 1000);


// 3. DOM 泄露，remove的元素被变量引用

// html是不在了，但是r还在引用当前对象，无法释放

var r = document.getElementById('btn');
document.body.removeChild(r);

// 手动释放
r = null;

// 4. 闭包: 需要将用完的函数及变量清空

// 同样AO无法释放，作用域链仍然存在，counter 存在则无法释放

function creatCounter(x) {
    var count = 0;
    var counter = {
        counterAdd: function () {
            count++;
            return count;
        }
    }
    return counter;
}

var counter = creatCounter(1);
counter.counterAdd();

// 手动释放
counter = null;

// 5. console.log() console.dir()
// 会在内部缓冲对象引用，造成泄漏

// 建议：发布正式代码前将这些语句删除或注释

// 6. 循环引用 （使用引用计数法会产生，只发生在IE7及以下）

function func() {
    var obj1 = {};
    var obj2 = {};
    obj1.a = obj2;
    obj2.a = obj1;
}

