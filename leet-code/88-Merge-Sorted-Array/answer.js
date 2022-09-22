/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  const merged = [];

  while (nums1[i] || nums2[j]) {
    if (nums1[i] < nums2[j] && nums1[i] !== 0) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++
    }
  }

  merged.forEach((val, i) => {
    nums1[i] = val
  })
}