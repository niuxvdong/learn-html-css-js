// 构造函数的方法：

// 1. 工厂方法

function creatPerson(name, age, gender) {
    var p = {};
    p.name = name;
    p.age = age;
    p.gender = gender || 'male';
    p.eat = function() {
        console.log('I am eating!');
    }
    return p;
}

// 2. 直接构造

// 2.1 不推荐

var person = {};
person.name = 'niu';
person.age = 20;
person.gender = 'male';
person.eat = function() {
    console.log('I am eating!');
}


// 2.2 推荐

var person = {
    name = 'niu',
    age = 20,
    gender = 'male',
    eat = function() {
        console.log('I am eating!');
    }
};

// 3. 构造方法

function Person1(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender || 'male';
    this.eat = function() {
        console.log('I am eating!');
    }
}

var p = new Person1('niu', 20, 'male');

/* ==================================================== */

// 构造函数工作过程：
//      1. 隐式创建对象
//      2. 把this指针初始化为创建的对象
//      3. 构造函数本身的逻辑
//      4. 隐式的return
//      (正常情况下：自定义的构造函数不应该返回任何对象)
//      (构造函数若返回原始类型变量，返回无效，函数会把this隐式返回；若返回对象类型，隐式返回失效。)

// 区别：
//      1. 工厂方法首字母小写，构造函数首字母大写
//      2. 构造函数需要new创建
//      3. 工厂方法必须返回对象，构造函数不建议返回
//      4. 工厂方法使用创建的对象，构造函数使用this


