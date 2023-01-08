const isPalindrome = function (x) {
    return x >= 0 && x.toString().split("").reverse().join("") == x;
};

console.log(isPalindrome(121));
console.log(isPalindrome(0));
