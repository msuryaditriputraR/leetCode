const searchInsert = function (nums, target) {
    let start = 0,
        end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) return mid;
        else if (nums[mid] > target) end = mid - 1;
        else start = mid + 1;
    }

    return start > end ? start : end;
};

console.log(searchInsert([1, 3, 5, 6], 4));
