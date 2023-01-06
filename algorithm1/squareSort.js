// Best Algorithm O(N) 🌟
const sortedSqunumsres = function (nums) {
    const result = [];
    let start = 0,
        end = nums.length - 1,
        position = end;

    while (start <= end) {
        if (nums[start] ** 2 > nums[end] ** 2) {
            result[position--] = nums[start++] ** 2;
        } else {
            result[position--] = nums[end--] ** 2;
        }
    }

    return result;
};

// Algorithm O(n log n)
function sortedSqunumsres2(nums) {
    return nums.map((a) => a ** 2).sort((a, b) => a - b);
}

console.log(sortedSqunumsres([-4, -1, 0, 3, 10]));
console.log(sortedSqunumsres2([-4, -1, 0, 3, 10]));
