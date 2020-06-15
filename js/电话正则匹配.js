// 区号：3-4位 第一位为0
// 横线 -
// 7-8位号码
// 横线 -
// 分机号 3-4位

var a = '022-24798067';
var b = '0752-5555555';
var c = '010-21232111-1234';

// (?:)? 不捕获 可有可无
var re = /^0\d{2,3}-\d{7,8}(?:-\d{3,4})?$/;
console.log(a.match(re));
console.log(b.match(re));
console.log(c.match(re));
