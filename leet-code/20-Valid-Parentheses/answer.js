/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s.length) {
    return false;
  }
  const stack = [];
  for (const char of s.split("")) {
    if (char === "(") {
      stack.push(")")
    } else if (char === "{") {
      stack.push("}")
    } else if (char === "[") {
      stack.push("]")
    } else if (
      char === ")" ||
      char === "}" ||
      char === "]"
    ) {
      if (stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        return false
      }
    }
  }
  return stack.length === 0;
};