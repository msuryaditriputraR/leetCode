const sqrt = function (x) {
    let start = 0,
        end = x;

    if (x < 2) return x;

    while (start < end) {
        const mid = Math.floor((end + start) / 2);

        if (mid * mid === x) return mid;
        else if (mid * mid > x) end = mid;
        else start = mid + 1;
    }

    return start - 1;
};

console.log(sqrt(6));
