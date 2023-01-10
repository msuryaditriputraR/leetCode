const longestCommonPrefix = function (strs) {
    if (strs.length < 1) return "";

    for (let i = 0; i < strs[0].length; i++) {
        if (!strs.every((str) => str[i] === strs[0][i])) {
            return strs[0].slice(0, i);
        }
    }

    return strs[0];
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["a", "a"]));
