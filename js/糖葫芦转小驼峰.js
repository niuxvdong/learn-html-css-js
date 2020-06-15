// 1. 直接
var str = 'background-color';

String.prototype.toCamel = function () {
    var res = '';
    for (var i = 0; i < this.length; i++){
        if (this.charAt(i) === '-') {
            res += this.charAt(++i).toUpperCase();
        } else {
            res += this.charAt(i);
        }
    }

    return res;
}

console.log(str.toCamel());

// 2. 使用正则

String.prototype.toCamel2 = function () {

    return res = this.replace(/-\w/g, function ($) {
        return $.substr(1).toUpperCase()
    });
}

console.log(str.toCamel2());

// 3. 正则分组

String.prototype.toCamel3 = function () {
    // $ 整体 $1 ()捕获的
    return this.replace(/-(\w)/g, function ($, $1) {
        return $1.toUpperCase();
    });
}

console.log(str.toCamel3());
