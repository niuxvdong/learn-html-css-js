// 强制类型转换：
//      parseInt parseFloat Number String toString Boolean
// 隐式类型转换
//      1. 字符串与其他类型加法，隐式转换为字符串
//      2. 能转换为数字的字符串，做加减法是，会被隐式转换为数字
//      3. 非boolean类型在 if ?: ! 运算时，会变为Boolean
//      4. ==
//          1 == '1'    null == undefined

console.log(1 == '1'); // true
console.log(null == undefined); // true
