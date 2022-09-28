/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // Do some checks on the input data
  if (
    (s.length !== t.length) ||
    (!s.length || !t.length)
  ) {
    return false;
  }
  return (s.split("").sort().join() === t.split("").sort().join())
};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))
