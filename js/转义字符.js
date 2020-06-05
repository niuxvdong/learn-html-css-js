// < &lt;
// > &gt;
// & &amp;
// 空格 &nbsp;

// 字符替换函数：
function charReplace(str) {
    var tmp = str;

    // 先替换&,因为先替换下面的会产生&,再替换会导致覆盖。。
    tmp = tmp.replace(/&/g, '&amp;');
    tmp = tmp.replace(/</g, '&lt;');
    tmp = tmp.replace(/>/g, '&gt;');
    tmp = tmp.replace(/\s/g, '&nbsp;');

    return tmp;
}

console.log(charReplace('<>  &'));

// 优雅一点的解决方法：
function charReplace2(str) {
    return str.replace(/[<>\s&]/g, function (match) {
        switch (match) {
            case '<':
                return '&lt';
            case '>':
                return '&gt';
            case ' ':
                return '&nbsp';
            case '&':
                return '&amp';
        }
    });
}

console.log(charReplace2('<>  & &'));
