/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const brackets = [];
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "(":
                brackets.push(")");
                break;
            case "{":
                brackets.push("}");
                break;
            case "[":
                brackets.push("]");
                break;
            default:
                if (brackets.pop() !== s[i]) return false;
        }
    }

    return !brackets.length;
};

console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([{}])"));
console.log(isValid("([{}})"));
