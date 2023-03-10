/*

  Question

    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

    Given a string s, return true if it is a palindrome, or false otherwise.

    Example 1:

    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.

    Example 2:

    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.

    Example 3:

    Input: s = " "
    Output: true
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.
  
  Constraints:

  1 <= s.length <= 2 * 105
  s consists only of printable ASCII characters.
*/

// Solution

/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = function (s) {
    const trim = s.replace(/\W|_/gi, "").toLowerCase();

    return trim.split("").reverse().join("") == trim;
};

// 2 Pointers
const isPalindrome2 = function (s) {
    const trim = s.replace(/[\W_]/gi, "").toLowerCase();

    let start = 0,
        end = trim.length - 1;

    while (start < end) {
        if (trim[start++] !== trim[end--]) return false;
    }

    return true;
};

// TESTING
console.log(isPalindrome("ab_a"));
console.log(isPalindrome2("ab_a"));
