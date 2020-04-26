function f(a, b, c) {
    console.log(a, b, c, f.length);
    console.log(arguments);
    console.log(arguments.length);
    for (var x in arguments) {
        console.log(arguments[x]);
    }
}


// f.length arguments.length 不同
// 参数可以多可以少
f(1, 2, 3);
f(1);
f(1, 2, 3, 4, 5);

//
function f1(a, b, c) {
    console.log(a, b, c, f.length);

    console.log(b, arguments[1]);
    b = 5;
    console.log(b, arguments[1]);
    arguments[1] = 7;
    console.log(b, arguments[1]);
}

// 第一种：全部绑定
f1(1, 2, 3);
// 第二种：没有绑定的内部修改无联系
f1(1);

