const climbStair = function (n) {
    if (n === 0 || n === 1) return 1;

    let first = 1,
        second = 2;

    for (let i = 3; i <= n; i++) {
        const temp = first + second;
        first = second;
        second = temp;
    }

    return second;
};

console.log(climbStair(4));
