const twoSum = function (nums, target) {
    const temp = {};

    for (let i = 0; i < nums.length; i++) {
        if (temp.hasOwnProperty(nums[i])) return [temp[nums[i]], i];

        temp[target - nums[i]] = i;
    }
};

console.log(twoSum([2, 7, 11, 15], 9));

/* ==================== CASE ===================== */
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
