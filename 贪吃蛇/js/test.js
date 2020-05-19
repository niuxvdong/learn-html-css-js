
// var str = '';

// for (var i = 1; i <= 9; i++){
//     for (var j = 1; j <= i; j++){
//         str += i + ' * ' + j + ' = ' + i * j + '\t';
//     }
//     str += '\n';
// }

// console.log(str);

// var totalCount = 0;
// function hanoi(n, A, B, C) {
//     if (n === 1) {
//         console.log('move Num.' + n + ' : ' + A + '------------>' + C);
//         totalCount++;
//     } else {
//         hanoi(n - 1, A, C, B);
//         console.log('move Num.' + n + ' : ' + A + '------------>' + C);
//         totalCount++;
//         hanoi(n - 1, B, A, C);
//     }
// }

// hanoi(4, 'A', 'B', 'C');
// console.log('totalCount: ' + totalCount);

console.log(a); // undefined
var a = 3;
for (var i = 0; i < 1; i++){
    console.log(a);
    a = 1;
    console.log(a); // 1
    a = function a() {

    }
    console.log(a); // function
    a = 4;
    console.log(a); // 4
}
console.log(a); // 4


console.log(b); // undefined
var b = 3;
for (var i = 0; i < 1; i++){
    console.log(b);
    b = 1;
    console.log(b); // 1
    function b() {

    }
    console.log(b); // 1
    b = 4;
    console.log(b); // 4
}
console.log(b); // 1

