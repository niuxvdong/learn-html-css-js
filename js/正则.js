var str = '123232435345';

var re = new RegExp('[0-9]+', 'g');
console.log(str.match(re)); //

var re1 = /[0-9]+/g;
console.log(re1.test(str)); // true
console.log(str.match(re1));

console.log(typeof re); // object
console.log(typeof re1); // object

console.log(re instanceof RegExp); // true

// ====================================================================

// [^] 方括号内的不匹配
var str1 = 'sjadkofljkla234324dskpfgjl';
console.log(str1.match(/[^0-9]+/g));

// \d：数字 \D：非数字 大写有^的意思

// \w [0-9A-Za-z_] 字母数字下划线

var str2 = 'iii_ioo';
console.log(str2.match(/\w+/g));

// \s [\t\n\r\f\x00] 所有的空格和空白 \f换页 \r回车 \v纵向制表
// \b 表示边界（两个字符中间的位置）一边时\w 一边是\W
// \B 不是边界 两边都是\w 或两边都是\W

// . [^\n\r] 除了回车以外的所有字符
// =======================================================================
// 贪婪匹配：? * +
// 非贪婪匹配：*? +?
// ========================================================================

var str3 = 'hell hhh   hhh world   world  hh';
// ()    \1 表示与括号相同
console.log(str3.match(/([a-zA-Z]+)\s+\1/g)); // [ 'hhh   hhh', 'world   world' ]
// 效果相同 ?<name>   \k<name>
console.log(str3.match(/(?<world>[a-zA-Z]+)\s+\k<world>/g));

// 不加 \g 会有额外信息
// 0: 匹配的串 JS RegExp.lastMatch
// 1：捕获的串 JS RegExp.$1
// 2: index 捕获串的开始下标
// 3：input 输入的串
// 4: groups 分组情况 （如果使用了<name>形式的分组，会将其放到groups里）
console.log(str3.match(/(?<world>[a-zA-Z]+)\s+\k<world>/));
// 使用浏览器可以看到 VsCode没结果
console.log(RegExp.lastMatch);
console.log(RegExp.$1);

// ================================================================
// 断言: 以啥开始或结尾，不包括那个符号
//      零宽-后行：(?=x)

var str4 = 'reaaa;rcaaa=bbb=;';
// 以分号结尾的两个字母
console.log(str4.match(/[a-z]{2}(?=;)/g)); // aa
console.log(str4.match(/[a-z]{2}\;/g)); // aa;

//      零宽-先行： (?<=x)
// 以ea开头的四个字符
console.log(str4.match(/(?<=ea).{4}/g)); // aa;r

// 不以某符号开始或结尾 ? -> !
//      零宽-负向-后行  (?!x)
// 不以分号结尾的三个字母
console.log(str4.match(/[a-z]{3}(?!;)/g)); // [ 'rea', 'rca', 'bbb' ]

//      零宽-负向-先行  (?<!x)
// 不以re开始的三个a
console.log(str4.match(/(?<!re)a{3}/g)); // [ 'aaa' ]

// 或 ||

// 匹配变量： var xxx;
var str5 = 'var abb;';
console.log(str5.match(/\s*var\s+\w\w*;/));
// 获取变量
console.log(str5.match(/\s*var\s+(\w\w*);/));
console.log(RegExp.$1); // abb
// 使用 ?<name>   \k<name>
console.log(str5.match(/\s*var\s+(?<variable>\w\w*);/));

// JQuery 变量正则
// ?: 不捕获
var identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+";
var re3 = new RegExp(identifier);

console.log('@hhh'.match(re3));

// 匹配浮点数 2 4.3 5.56e-4

var re4 = /^[+-]?\d+(?:\.\d+)?(?:[Ee][+-]?\d+)?$/;
var re5 = /^[+-]?\d+(\.\d+)?([Ee][+-]?\d+)?$/;

console.log('-4.543535E-34534'.match(re4));
console.log('-4.543535E-34534'.match(re5));

// 匹配中国字
var re6 = /^[\u4e00-\u9fa5\uff0c\uff01\u3002]+$/;
console.log('弱小和无知不是生存的障碍，傲慢才是！'.match(re6));
