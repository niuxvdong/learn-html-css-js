
console.log(parseInt('a123')); // NaN
console.log(parseInt('123.345fg')); // 123

var s = '10110101';
// 按照二进制转换为十进制
var s1 = parseInt(s, 2);
if (!isNaN(s1)) {
    console.log(typeof s1, s1); // 181
    console.log(s1.toString(16)); // b5
}

console.log(parseFloat('1.233sdd')); // 1.233
console.log(parseFloat('a3435.df')); // NaN

console.log(Number(false)); // 0
console.log(parseInt(false)); // NaN
console.log(Number(null)); // 0
console.log(parseInt(null)); // NaN
console.log(Number('')); // 0
console.log(parseInt('')); // NaN

console.log(parseInt('98sdf')); // 98
console.log(Number('98fs')); // NaN

console.log(Number('dso99')); // NaN
console.log(parseInt('ds99')); // NaN
