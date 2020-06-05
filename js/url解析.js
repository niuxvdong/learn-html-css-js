var url = 'https://www.baidu.com?a=5&b=4&c=7&d&e=';

function urlToJSON(url) {
    var json = {};
    // 既不是普通string，也不是String包装类型
    if (typeof url !== 'string' && !(url instanceof String)) {
        return json;
    }

    var tmp1 = url.split('?');
    // 有参数?
    if (tmp1.length === 2) {
        json.address = tmp1[0];
        var tmp2 = tmp1[1].split('&');
        for (var i = 0; i < tmp2.length; i++){
            var tmp3 = tmp2[i].split('=');
            // 没有等号
            if (tmp3.length === 1) {
                json[tmp3[0]] = undefined;
            } else if (tmp3.length === 2) { // 有等号
                json[tmp3[0]] = tmp3[1];
            }
        }
    } else if (tmp1.length === 1) { // 只有一个address,没有参数
        json.address = tmp1[0];
    }

    return json;
}

console.log(urlToJSON(url));
