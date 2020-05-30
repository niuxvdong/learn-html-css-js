// 之前所学的JS中的RegExp ：https://niuxvdong.top/posts/15769.html
// 之前所学的Java中的RegExp ：https://niuxvdong.top/posts/53926.html

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
// \b 表示边界（两个字符中间的位置）一边是\w 一边是\W
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

// ===========================================================

// String
//      1. search(re) 返回匹配子串开始位置，没有返回-1
//          g参数无效：只匹配一次
var str = 'I worldA world site excel';
// 使用\b表示边界
console.log(str.search(/\bworld\b/));

//      2. match(re)
//          有g参数：全局，匹配多次 input index 无效
//          无g参数：0：匹配串 1：捕获串 index：开始位置 input：原始串

//      3. replace(re/substr, replacement) 返回replace后的字符串
// 只能替换第一个
console.log(str.replace('world', 'WORLD'));
// 替换所有的world
console.log(str.replace(/world/g, 'WORLD'));
// 只替换单独的world
console.log(str.replace(/\bworld\b/g, 'WORLD'));

// $1 ~ $99：分组 $&：匹配的字串 $`：字串的左侧 $'：字串的右侧

str = 'aaaa-bbb ccccccc-dd';
// 反转一下：bbb-aaaa dd-ccccccc
console.log(str.replace(/([a-z]+)-([a-z]+)/g, '$2-$1'));

// 反转后，再使所有ASCII的数值+1 如：ccc-bbbb ee-ddddddd
function replaceS(match, p1, p2, index, str) {
    console.log(arguments);
    // 会返回 匹配串、分组1、分组2、匹配开始下标、原串

    var res = '';
    for (var i = 0; i < p2.length; i++){
        res += String.fromCharCode(p2.charCodeAt(i) + 1);
    }
    res += '-';
    for (var i = 0; i < p1.length; i++){
        res += String.fromCharCode(p1.charCodeAt(i) + 1);
    }
    return res;
}

console.log(str.replace(/([a-z]+)-([a-z]+)/g, replaceS)); // ccc-bbbb ee-ddddddd

//      4. split(separator, howmany) 切割 返回数组
//          separator：str/re
//          howmany：返回最大长度

str = 'dsf sdf    sdfds   sd';
console.log(str.split(/\s+/, 2));

// RegExp
//      5. test(string) true/false

//      6. exec(string)
//          无g：和match无g返回一样
//          有g：lastIndex 放入字串结束位置的下一位

str = 'world  world hh world';
var re11 = /\bworld\b/g;
console.log(re11.exec(str));
console.log(re11.lastIndex); // 5
console.log(re11.exec(str));
console.log(re11.lastIndex); // 12

// 练习：格式化输出

var d = new Date(); // 2020-05-29T13:20:11.247Z
console.log(d);

Date.prototype.myFormat = function (str) {
    var obj = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds()
    }
    if (/y+/.test(str)) {
        var year = this.getFullYear().toString();
        if (RegExp.lastMatch.length <= year.length) {
            // 例如：-2 倒数第二个位置到最后  2020 -> 20
            year = year.substring(-RegExp.lastMatch.length);
        }
        str = str.replace(RegExp.lastMatch, year);
    }
    // if (/M+/.test(str)) {
    //     var month = (this.getMonth() + 1).toString();
    //     // 补零判断：
    //     if (RegExp.lastMatch.length > month.length) {
    //         month = '0' + month;
    //         month = month.substr(-RegExp.lastMatch.length);
    //     }
    //     str = str.replace(RegExp.lastMatch, month);
    // }

    for (var k in obj) {
        var re = new RegExp(k);
        if (re.test(str)) {
            var x = obj[k].toString();
        // 补零判断：
        if (RegExp.lastMatch.length > x.length) {
            x = '0' + x;
            x = x.substr(-RegExp.lastMatch.length);
        }
        str = str.replace(RegExp.lastMatch, x);
    }
    }
    return str;
}

console.log(d.myFormat('yyyy年 MM月 dd日 hh时 mm分 ss秒'));
