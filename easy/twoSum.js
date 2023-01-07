const twoSum = function (nums, target) {
    const temp = {};

    for (let i = 0; i < nums.length; i++) {
        if (temp.hasOwnProperty(nums[i])) return [temp[nums[i]], i];

        temp[target - nums[i]] = i;
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
