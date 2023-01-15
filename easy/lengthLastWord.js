const lengthLastWord = function (s) {
    return s.trim().split(" ").at(-1).length;
};

const lengthLastWord2 = function (s) {
    let i = 0;
    s = s.trim();

    for (let j = s.length - 1; j >= 0; j--) {
        if (s[j] === " ") return i;

        i++;
    }

    return i;
};

console.log(lengthLastWord("   fly me   to   the moon  "));
console.log(lengthLastWord2("   fly me   to   the moon  "));
