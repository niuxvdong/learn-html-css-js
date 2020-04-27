// js不是纯面向对象语言，只能通过闭包实现面向对象的封装性

// 这里相当于面向对象的class
function outer() {
    // 这里相当于面向对象语言的private
    var v = 1;
    function inner() {

    }
    return inner;
}

// 由于inner拷贝了父级的outer，只要inner在，outer就不会释放
// 而inner返回到了外部的f,即只要f不释放，就都不会释放，形成闭包
var f = outer();



// 一、实现计数器

function creatCounter() {
    var count = 0;
    function counterAdd() {
        count++;
        console.log(count);
        return count;
    }
    return counterAdd;
}

var counter = creatCounter();
counter();
counter();
counter();


// 二、多函数

function creatCounter1() {
    var count = 0;
    function counterAdd1() {
        count++;
        console.log(count);
        return count;
    }
    function counterAdd2() {
        count += 2;
        console.log(count);
        return count;
    }
    return [counterAdd1, counterAdd2];
}

var counter1 = creatCounter1();
counter1[0]();
counter1[1]();


// 使用jQuery实现模块化

function creatCounter3() {
    var count = 0;
    var counter = {
        counterAdd1: function () {
            count++;
            console.log(count);
            return count;
        },
        counterAdd2: function () {
            count += 2;
            console.log(count);
            return count;
        }
    }
    return counter;
}

var counter = creatCounter3();
counter.counterAdd1();
counter.counterAdd2();


// 当然：多次实例化是相互独立的！


