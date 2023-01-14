var removeElement = function (nums, val) {
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === val) {
            nums.splice(j, 1);
            j--;
        }
    }

    return nums;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
