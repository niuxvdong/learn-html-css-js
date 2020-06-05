// try catch finally
// 不捕获会导致当前JS无法执行，但是不影响其他JS

//  自然产生的错误

try {
    f();
    // 打印不出来
    console.log(123);
} catch (err) {
    console.log(err.message);
} finally {
    console.log('function is not defined');
}
console.log(333);

// 自定义抛出异常

try {
    throw {
        message: 'My Error'
    };
    // 打印不出来
    console.log(123);
} catch (err) {
    console.log(err.message);
} finally {
    console.log('function is not defined');
}
console.log(222);

// =======================================
// 到 异常捕获.html查看效果
window.onerror = function (msg, url, line, col, error) {
    console.log(msg);
    console.log(url);
    console.log(line);
    console.log(col);
    console.log(error);
}

a();
