/**
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
            if (i === 0) digits.unshift(1);
        } else {
            digits[i] += 1;
            break;
        }
    }

    return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([1, 9]));
console.log(plusOne([9, 9]));
console.log(plusOne([9, 9, 9, 9]));
