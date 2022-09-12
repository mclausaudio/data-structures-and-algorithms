var decodeMessage = function (key, message) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const hash = new Map(); ``
  key = [... new Set(key.split(" ").join(""))]
  let answer = "";

  for (let i = 0; i < key.length; i++) {
    hash.set(key[i], alphabet[i]);
  }

  for (let letter of message) {
    if (letter === " ") {
      answer += letter
    } else {
      answer += hash.get(letter);
    }
  }

  return answer;
};