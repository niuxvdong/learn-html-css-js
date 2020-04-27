// with为了简化代码。。。es5旧版，不建议使用，会造成许多bug


person = {
    name: 'nxd',
    age: 20,
    wife: {
        name: 'hh',
        age: 18
    }
}

console.log(person.wife.name); // hh
with (person.wife) {
    console.log(name); // hh
}

// 一、

function f(ps, x) {
    with (ps) {
        console.log(x); // 25
    }
}

var p = {
    str: 'str',
    x: 25
}

f(p, 5);

// 二、

var s = {
    o: {
        v1: 1
    }
}

with (s.o) {
    // 这里会被覆盖
    s.o = {
        v2: 3
    }
    // with效果：还可以访问原来的v1
    console.log(v1); // 1
}

console.log(s.o.v1, s.o.v2); // undefined 3
