var s = 'abc';
s[0] = 'A';
s.a = 2;
console.log(s, s.a); // abc undefined

// 原因：JavaScript为了不影响程序，使用包装类进行包装,保证能运行，但是该语句执行完毕，
// 就会释放包装类型，仍是原来的样子


// String 方法

var str = 'abcd';
console.log(str.charAt(0)); // a
// 按ASCII码值构建
str = String.fromCharCode(97, 98, 99);
console.log(str); // abc
// str.concat() 拼接字符串
// str.indexOf() 查找子串位置
// str.lastIndexOf() 从后往前
// str.replace(正则匹配, 替换字符串)
// str.slice() 截取字符串，返回新串
// str.split() 分割
var str = 'h,d,c,f,d';
console.log(str.split(','));
// str.substr(start, len)
// str.substring(start, end) [start, end)
var s1 = 'abcdef';
console.log(s1.substr(2, 3));
console.log(s1.substring(1, 4));
// str.toLowerCase()
// str.toUpperCase()
// str.trim() trimLeft() trimRight() 取出左右，左，右空格

var s2 = ' abc\t';
console.log(s2.trim());
console.log(s2.trimRight());


