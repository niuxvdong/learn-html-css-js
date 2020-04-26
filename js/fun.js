// 函数声明
function f() {
    console.log('f()调用');
    return 'hhh';
}

// 函数表达式
var ff = function (fn) {
    console.log('ff调用');
    console.log(fn());
    return 'hello';
};

ff(f);

ff(function () {
    console.log('fun调用');
    return 'world';
});

console.log(ff(function () {
    console.log('fun调用');
    return 'world';
}));

// 立即执行函数
(function (x) {
    console.log('立即执行函数执行！');
    console.log(x);
})(3);

function f1() {
    return (
        [
            [1, 2, 3],
            [2, 3, 4]
        ]);
}

console.log(f1());
