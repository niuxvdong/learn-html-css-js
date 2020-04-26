// n个台阶，可以一步走，两步走，三步走；问多少种走法？

function steps(n) {
    if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 1 + steps(1);
    } else if (n === 3) {
        return 1 + steps(2) + steps(1);
    } else {
        return steps(n - 3) + steps(n - 2) + steps(n - 1);
    }
}

console.log(steps(8));
