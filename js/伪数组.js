// 真数组

var a1 = [1,2,3];
console.log(a1);

// 伪数组(类数组)

// 特点
//      1. 有下标
//      2. 有length
//      3. 有push和splice方法也可操作
//      4. 既可以当数组，也可以当对象使用
// DOM中的很多数组都是伪数组


// 1
var a2 = {
    '0': 1,
    '1': 2,
    '2': 3,
    'length': 3,
    'push': Array.prototype.push,
    'splice': Array.prototype.splice
}
console.log(a2);

// 2
function FakeArray() {
    this['0'] = 1;
    this['1'] = 2;
    this['2'] = 3;
    this.length = 3;
}

FakeArray.prototype.push = Array.prototype.push;
FakeArray.prototype.splice = Array.prototype.splice;
var a3 = new FakeArray();
console.log(a3);
