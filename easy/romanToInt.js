const romanToInt = function (s) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let number = 0;

    for (let i = 0; i < s.length; i++) {
        const curr = roman[s[i]],
            next = roman[s[i + 1]];
        if (curr < next) {
            number += next - curr;
            i++;
        } else {
            number += roman[s[i]];
        }
    }

    return number;
};

console.log(romanToInt("IV"));
console.log(romanToInt("MCDLXXVI"));
