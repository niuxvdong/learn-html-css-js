var a = [];

// 底层为kay-value的map
a[1.5] = 3;
a[2] = 2;
a[4] = 4;
a['s'] = 'str';
a[5] = {};
a[6] = [];
console.log(a);
// 长度不准确了
console.log(a.length); // 5

a = [];
a['key'] = 'value';
console.log(a);
console.log(a.length); // 0
console.log(a[0]); // undefined

a = [];
a[7] = 7;
a[8] = 8;
// 可praseInt的会转化为数字
a['15'] = 0;
console.log(a + ' ' + a.length); // ,,,,,,,7,8,,,,,,,0 16


a = new Array(5);
console.log(a);
a = new Array(5, 4, 3, null, undefined, 99);
console.log(a); // [ 5, 4, 3, null, undefined, 99 ]

console.log(a.constructor.name === 'Array'); // true


a = [0, 1, 2, 3, 4, 5, 6, 7];
console.log('=====================================');
console.log(a.slice(3));
console.log(a.slice(-3));
console.log(a.slice(2, 4));

function Reverse(n) {
    if (typeof n !== 'number' || !isFinite(n) || isNaN(n)) {
        return '';
    }
    return n.toString().split('').reverse().join('');
}


console.log(Reverse(345));


// for each

var c = [1, 2, 3, 4];
c.forEach(function (value, index, c) {
    console.log(index, value);
});
