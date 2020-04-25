
var n = Number.MAX_VALUE;
console.log(n);

// 贴心的将字符变为数字5
console.log('5' - 5); // 0

console.log('a' - 1); // NaN
console.log('a' - 'a'); // NaN
console.log('a' + 1); // a1

// 真鸡巴灵活的语言：
console.log(4.5 % 3); // 1.5

console.log(4 % 0); // NaN
console.log(0 % 0); // NaN

// 贴心转换为数字比较
console.log('5' > 4); // true
// 无法转换为数字返回false
console.log('a' > 5); // false

console.log(false == 0); // true
console.log(true == 1); // true

console.log('5' == 5); // true

console.log([] == ''); // true
console.log({} == '[object Object]'); // true
console.log([5] == '5'); // true

console.log(NaN == NaN); // false
console.log('NaN' == NaN); // false
console.log(NaN != NaN); // true
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(isNaN(NaN)); // true
console.log(isFinite(Number.POSITIVE_INFINITY)); // false
console.log(isFinite(5)); // true


console.log(undefined == null); // true
console.log(null == null); // true
console.log(undefined == undefined); // true
console.log(undefined == 0); // false
console.log(null == 0); // false

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof true); // boolean


// ===

console.log(false === 0); // false
console.log(true === 1); // false
console.log('5' === 5); // false
console.log([] === ''); // false
console.log({} === '[object Object]'); // false
console.log([5] === '5'); // false

// 逻辑
console.log(0 && true); // 0
console.log(1 && true); // true
console.log(undefined && true); // undefined
console.log(null && true); // null
console.log(NaN && true); // NaN
console.log('' && true); // ''
console.log([] && true); // true

// && 应用 data初始化了返回fn，没有初始化返回null，
// return data && fn(data);

console.log(0 || true); // true
console.log(1 || true); // 1
console.log(undefined || true); // true
console.log(null || true); // true
console.log(NaN || true); // true
console.log('' || true); // true
console.log([] || true); // []

// || 应用 chrome浏览器会自动初始化e 为 window.event
// var event = e || window.event;


// 不是数字时会调用Number()
console.log(isNaN(NaN)); // true
console.log(Number(NaN)); // NaN
console.log(isNaN('5')); // false
console.log(isNaN('abc345')); // true
console.log(Number('abc345')); // NaN



