// eg: LazyMan('NXD').sleep(10).eat('dinner').eat('supper');
// Hi! This is NXD!
// <等待10秒>
// Wake up after 10.
// Eat dinner~
// Eat supper~


// 1. 链式调用，所有函数需返回this
// 2. LazyMan 应该是 工厂函数
// 3. sleep -> setTimeout sleepFirst -> 遇到就是只放到最前
// 4. 订阅模式 设计模式 最小接口原则 （迪米特法则）

function Man() {

}

function LazyMan(name) {
    console.log('Hi! This is ' + name + '!');
    return new Man();
}

// 有问题写法：由于setTimeout不会立即执行，而且会跳到return this,导致结果如下：
Man.prototype.sleep = function (num) {
    setTimeout(function () {
        console.log('Wake up after ' + num);
    }, num * 1000);
    return this;
}

Man.prototype.eat = function (something) {
    console.log('Eat ' + something);
    return this;
}
// LazyMan('NXD').eat('dinner').eat('supper');

// 有问题示例：
// LazyMan('NXD').sleep(10).eat('supper');
// Hi! This is NXD!
// Eat supper
// Wake up after 10


// =========================== 解决：添加taskList =========================
// Man: 同步调用
// taskList：异步调用

(function (window, undefined) {
    // 构造函数
    function Man() {
        this.taskList = [];
    }

    // 订阅：添加任务到taskList
    // 接收函数名和参数
    Man.prototype.subscribe = function () {

        if (arguments.length < 2) {
            console.error('arguments is not enough!');
            return;
        }
        // 第0个参数为taskName
        var taskName = arguments[0];
        // 截取参数数组第0个以后的内容返回新值
        var args = Array.prototype.slice.call(arguments, 1);

        // 创建任务：接收函数名 参数 和当前人
        var task = new Task(taskName, args, this);

        // sleepFirst一定要放到数组第一个位置，即unshift
        if (taskName !== 'sleepFirst') {
            this.taskList.push(task);
        } else {
            this.taskList.unshift(task);
        }
    }

    // ================================================
    // Task构造函数
    function Task(taskName, args, man) {
        this.taskName = taskName;
        this.args = args;
        this.man = man;
    }

    Task.prototype.LazyMan = function (name) {
        lazyManLog('Hi! This is ' + name + '!');
        // 链式调用
        this.publish();
    };

    Task.prototype.sleep = function (num) {
        var that = this;
        setTimeout(function () {
            lazyManLog('Wake up after' + num);
            // 链式调用
            that.publish();
        }, num * 1000);
    };

    Task.prototype.eat = function (something) {
        lazyManLog('Eat ' + something + '!');
        // 链式调用
        this.publish();
    };

    Task.prototype.sleepFirst = function () {
        var that = this;
        setTimeout(function () {
            lazyManLog('Wake up after' + num);
            // 链式调用
            that.publish();
        }, num * 1000);
    };

    // 启动入口，处理taskList 链式处理每一个
    Task.prototype.publish = function () {
        if (this.man.taskList.length > 0) {
            var task = this.man.taskList.shift();
            // task[task.taskName] 对应一个函数 .apply() 传入参数对象为当前task,和args参数
            task[task.taskName].apply(task, task.args);
        }
    }

    // 打印所有函数日志
    function lazyManLog(str) {
        console.log(str);
    }

    function LazyMan(name) {
        var man = new Man();
        // 放入第一个LazyMan函数
        man.subscribe('LazyMan', name);
        // 运行处于taskList第一个位置的方法：
        setTimeout(function () {
            man.taskList[0].publish();
        }, 0)
        return man;
    }
    // ========================= Man prototype  ================================
    Man.prototype.sleep = function (num) {
        this.subscribe('sleep', num);
        return this;
    }

    Man.prototype.sleepFirst = function (num) {
        this.subscribe('sleepFirst', num);
        return this;
    }

    Man.prototype.eat = function (something) {
        this.subscribe('eat', something);
        return this;
    }
    window.LazyMan = LazyMan;
})(window);

// 开始时：LazyMan挂着的函数都会按正确顺序push到taskList数组
// 然后按照数组执行
LazyMan('NXD').eat('dinner').eat('supper');
LazyMan('NXD').sleep(10).eat('supper');

