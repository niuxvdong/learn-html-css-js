var a = NaN;
var b = Infinity;
var c = 12345;
var d = 12332423424245.1234;
var e = 123;
var f = 0;

// 1. 直接

Number.prototype.toCurrency = function () {
    var res = '$0.00';
    // 非数字
    if (isNaN(this)) {
        return res;
    }
    // 无穷大
    if (!isFinite(this)) {
        return res;
    }

    // 四舍五入保留2位
    var tmp = this.toFixed(2);
    // 转换为字符串
    tmp = tmp.toString();

    // 1,234,567.00
    res = '$';
    for (var i = 0; i < tmp.length - 3; i++){
        // 条件
        if ((tmp.length - 3) % 3 === i % 3 && i !== 0) {
            res += ',';
        }
        res += tmp.charAt(i);
    }

    // 处理最后的 .xx
    res += tmp.substr(-3);

    return res;
}

console.log(a.toCurrency());
console.log(b.toCurrency());
console.log(c.toCurrency());
console.log(d.toCurrency());
console.log(e.toCurrency());
console.log(f.toCurrency());


// 2. 使用正则

Number.prototype.toCurrency2 = function () {
    var res = '$0.00';
    // 非数字
    if (isNaN(this)) {
        return res;
    }
    // 无穷大
    if (!isFinite(this)) {
        return res;
    }

    // 四舍五入保留2位
    var tmp = this.toFixed(2);
    // 转换为字符串
    tmp = tmp.toString();

    // 范围为：1 2 3   3: eg:123.22
    var len1 = (tmp.length - 3) % 3 || 3;
    var len2 = tmp.length - 3 - len1;

    var tmp1 = tmp.substr(0, len1);
    var tmp2 = tmp.substr(len1, len2);
    var tmp3 = tmp.substr(-3);

    // 使用() 用$1获取
    res = '$' + tmp1 + tmp2.replace(/(\d{3})/g, ',$1') + tmp3;
    return res;
}

console.log(a.toCurrency());
console.log(b.toCurrency());
console.log(c.toCurrency());
console.log(d.toCurrency());
console.log(e.toCurrency());
console.log(f.toCurrency());



