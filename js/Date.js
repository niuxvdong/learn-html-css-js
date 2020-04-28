var d = new Date();
console.log(d);
console.log(d.getTime());

var d1 = new Date(2020, 2, 3);
console.log(d1);

// UTC 美国标准时区
console.log(d.toUTCString());

// 格式化
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toTimeString());
console.log(d.toLocaleTimeString());


// 相当于getTime()
var s = +d;
console.log(s);
console.log(d.getTime());
