// typedef
//      number string boolean undefined null object function
//      主要可以用来区分object和原始类型


// instanceof
//      判断的是原型链，如果__proto__被修改，instanceof就会改变

// Object.prototype.toString.call()

var a = new Object();
var b = null;
var c = new Array();
var d = /ad/g;

console.log(typeof a); // object
console.log(typeof b); // object
console.log(typeof c); // object
console.log(typeof d); // object

console.log(Object.prototype.toString.call(a)); // Object
console.log(Object.prototype.toString.call(b)); // Null
console.log(Object.prototype.toString.call(c)); // Array
console.log(Object.prototype.toString.call(d)); // RegExp

