// 数据通信只能用字符串：
// 对象 -> 字符串: 串行化
// 字符串 -> 对象： 解析


var strJSON = `{
    "name": "niu",
    "age": 34
}`

console.log(strJSON);

// JSON反序列化：
// 第一种 有安全性问题
var strJSON2 = '(' + strJSON + ')';
console.log(strJSON2);
console.log(eval(strJSON2));
// 第二种
console.log(JSON.parse(strJSON));
// 第三种 jQuery 需引入
// var jq = jQuery.parseJSON(strJSON);
// console.log(jQuery.parseJSON(strJSON));

// JSON序列化
var obj = {
    name: 'niu',
    age: 30
}

// 第一种：
console.log(JSON.stringify(obj));
// 第二种使用jQuery.json.js插件
// console.log(jQuery.toJSON(obj));



