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

const climbStair2 = function (n) {
    return fibonacci(0, 1, n);

    function fibonacci(first, second, n) {
        return n === 1
            ? first + second
            : fibonacci(second, first + second, n - 1);
    }
};

console.log(climbStair(10));
console.log(climbStair2(10));
