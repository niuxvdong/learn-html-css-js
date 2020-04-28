// setTimeout() 将任务放入队列，时间到了从队列中回调运行
// 即异步：先存起来，时间到了在执行
// setTimeout() 只运行一次，时间有误差，每次运行会有本身运行误差

function f() {
    var d = new Date();
    console.log(d);
}

// 参数为毫秒
// setTimeout(f, 5000);
// console.log(new Date());


// 定时器 ../html/定时器.html

/*
var timer;
function startTime(){
    var now = new Date();
    var txt = document.getElementById('txt');
    txt.innerHTML = now.toLocaleTimeString();

    // 循环入队与出队
    timer = setTimeout(startTime, 1000);
}

// 入队，运行完就出队（函数内部不调用就彻底结束了）
 timer = setTimeout(startTime, 20);

 function stopTime(){
    // 清除掉队列
    clearTimeout(timer);
 }

 // 五秒后彻底结束
 setTimeout(stopTime, 5000);
 */


/////////////////////////////////////////////

// setInterval()
// 一直运行 （若返回时占用，不会去积压setInterval，永远队列只有一个setInterval）
// 由于返回时间占用，有可能setInterval也不是设置时的运行时间去执行


// 同样实现定时器

/* var timer;
function startTime(){
    var now = new Date();
    var txt = document.getElementById('txt');
    txt.innerHTML = now.toLocaleTimeString();
}
 timer = setInterval(startTime, 1000);

 function stopTime(){
    // 清除掉队列
    clearInterval(timer);
 }

 // 五秒后彻底结束
 setTimeout(stopTime, 5000); */


