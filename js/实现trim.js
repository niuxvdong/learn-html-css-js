
// 手动实现 trim
var str = '\t\n ab cd   \t';

console.log(str.trim());

String.prototype.trim2 = function () {
    return this.replace(/^\s+/, '').replace('/\s+$/', '');
}

console.log(str.trim2());
