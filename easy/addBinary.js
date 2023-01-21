const addBinary = function (a, b) {
    const len1 = a.length,
        len2 = b.length,
        max = Math.max(len1, len2);
    let res = "",
        carry = 0;

    for (let i = 0; i < max; i++) {
        const val =
            Number(a[len1 - 1 - i] || 0) + Number(b[len2 - 1 - i] || 0) + carry;

        carry = Math.floor(val / 2);
        res = (val % 2) + res;
    }

    if (carry) res = 1 + res;

    return res;
};

console.log(addBinary("11", "10"));
