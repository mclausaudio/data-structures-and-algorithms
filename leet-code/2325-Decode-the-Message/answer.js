var decodeMessage = function (key, message) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const keyMap = {}
  key.split("").map(letter => {
    if (letter !== " ") {
      if (!keyMap[letter]) {
        keyMap[letter] = alphabet[0];
        alphabet.shift();
      }
    }
  })
  let answer = "";
  message.split("").map(letter => {
    if (letter === " ") {
      answer += " "
    } else {
      answer += keyMap[letter]
    }
  })
  return answer;
};