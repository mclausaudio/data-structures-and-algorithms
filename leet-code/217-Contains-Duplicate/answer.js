/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const key = {}
  for (let i = 0; i < nums.length; i++) {
    if (!key[nums[i]]) {
      key[nums[i]] = true
    } else {
      return true;
    }
  }
  return false;
};