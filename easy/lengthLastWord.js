const lengthLastWord = function (s) {
    return s.trim().split(" ").at(-1).length;
};

console.log(lengthLastWord("   fly me   to   the moon  "));
