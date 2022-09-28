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
  // Create a hash map for each string
  const sHash = createHash(s);
  const tHash = createHash(t);
  // Comapre the hash maps
  for (letter in sHash) {
    if (!(sHash[letter] === tHash[letter])) {
      return false
    }
  }
  return true;
};

function createHash(string) {
  const hash = {};
  string.split("").forEach(letter => {
    if (!hash[letter]) {
      hash[letter] = 1;
    } else {
      hash[letter]++;
    }
  })
  return hash;
}