/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

nums1 = [0];
nums11 = [1, 2, 3, 0, 0, 0];

const mergeSortedArray = function (nums1, m, nums2, n) {
    let i = m - 1,
        j = n - 1,
        pointer = m + n - 1;

    while (j >= 0) {
        nums1[pointer--] =
            nums1[i] > nums2[j] && i >= 0 ? nums1[i--] : nums2[j--];
    }
};

const mergeSortedArray2 = function (nums1, m, nums2, n) {
    nums1.splice(m, n);
    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
};

// mergeSortedArray(nums1, 0, [1], 1);
// console.log(nums1);
// mergeSortedArray(nums11, 3, [2, 5, 6], 3);
// console.log(nums11);

mergeSortedArray2(nums1, 0, [1], 1);
console.log(nums1);
mergeSortedArray2(nums11, 3, [2, 5, 6], 3);
console.log(nums11);
