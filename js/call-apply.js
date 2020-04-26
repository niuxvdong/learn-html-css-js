var obj = {
    str: 'hello',
    f1: function () {
        console.log('obj.f1调用！');
        console.log(this.str);
    }
};

obj.f1();

// 间接调用
// 无法访问str，当前是window对象
var fn = obj.f1;
fn();

// 解决：用于绑定对象
fn.call(obj);
fn.apply(obj);

// call 和 apply 区别：
// 第一点：参数传递不同
obj = {
    str: 'hello',
    f1: function (x, y) {
        console.log('obj.f1调用！');
        console.log(this.str);
        console.log(x, y);
    }
};

fn = obj.f1;
fn(3, 4);

// 解决：
fn.call(obj, 3, 4);
fn.apply(obj, [3, 4]);
