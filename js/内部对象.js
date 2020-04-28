console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);
console.log(Math.SQRT2);

// 四舍五入
console.log(Math.round(1.4));
// 下取整
console.log(Math.floor(1.8));
// 上取整
console.log(Math.ceil(1.9));
// 找到最接近的单精度数
console.log(Math.fround(1.2));
// e的幂
console.log(Math.exp(2));
// 以e为底对数
console.log(Math.log(25));
//
console.log(Math.pow(10,2));
console.log(Math.sqrt(25));
console.log(Math.max(1, 2, 3));


// 0-1之间的随机值
console.log(Math.random());
// 产生1-6
console.log(Math.floor(Math.random() * 6) + 1);
// 产生3 5 7 随机数 先产生0 1 2 再乘2 + 3
console.log(Math.floor(Math.random() * 3) * 2 + 3);


// 使用均匀分布构造正态分布
// 图片在images的第十六张
// Box-Muller变换


function Box_Muller() {
    var u1, u2;
    // 不能有0
    while ((u1 = Math.random()) === 0) {}
    while ((u2 = Math.random()) === 0) {}

    var z1 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    var z2 = Math.sqrt(-2 * Math.log(u1)) * Math.sin(2 * Math.PI * u2);
    return [z1, z2];
}

console.log(Box_Muller());

// Marsaglia polar 变换

function Marsaglia_Muller() {
    var u = Math.random() * 2 - 1;
    var v = Math.random() * 2 - 1;
    var w = u * u + v * v;
    var z1 = u * Math.sqrt(-2 * Math.log(w) / w);
    var z2 = v * Math.sqrt(-2 * Math.log(w) / w);
    return [z1, z2];
}

console.log(Marsaglia_Muller());



// 生成一个随机背景色

function randomBackColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return 'background-color: #' + r.toString(16) + g.toString(16) + b.toString(16);
}

console.log(randomBackColor());


