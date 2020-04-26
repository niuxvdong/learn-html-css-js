function hanoi(n, A, B, C) {
    if (n === 1) {
        console.log('move Num.' + n + ' : ' + A + '-------->' + C);
    } else {
        hanoi(n - 1, A, C, B);
        console.log('move Num.' + n + ' : ' + A + '-------->' + C);
        hanoi(n - 1, B, A, C);
    }
}

hanoi(4, 'A', 'B', 'C');
