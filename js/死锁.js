var t = true;

setTimeout(function () {
    console.log(123);
    t = false;
}, 1000);

while (t) { }

console.log('end');

// 典型死锁问题：
// 由于1000所以不会先执行setTimeout,到了while死循环，退不出去，程序就无法执行到下一步卡在那里了
// wetTimeout永远无法执行！
