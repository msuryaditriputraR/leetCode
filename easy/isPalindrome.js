const isPalindrome = function (x) {
    return x >= 0 && x.toString().split("").reverse().join("") == x;
};

const isPalindrome2 = function (x) {
    if (x < 0 && x % 10 === 0 && x != 0) return false;

    let reverseNumber = 0;

    while (x > reverseNumber) {
        reverseNumber = reverseNumber * 10 + (x % 10);
        x = ~~(x / 10);
    }

    return x === reverseNumber || x === ~~(reverseNumber / 10);
};

console.log(isPalindrome(121));
console.log(isPalindrome(0));

console.log(isPalindrome2(12321));
