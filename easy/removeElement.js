const removeElement = function (nums, val) {
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === val) {
            nums.splice(j, 1);
            j--;
        }
    }

    return nums.length;
};

const removeElement2 = function (nums, val) {
    let i = 0,
        n = nums.length;

    for (const num of nums) {
        if (num !== val) {
            i++;
        }
    }

    return i;
};

const removeElement3 = function (nums, val) {
    let i = 0,
        n = nums.length;

    while (i < n) {
        if (nums[i] === val) {
            nums[i] = nums[n - 1];
            n--;
        } else {
            i++;
        }
    }
    return n;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement2([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement3([0, 1, 2, 2, 3, 0, 4, 2], 2));
