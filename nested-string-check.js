// A string S consisting of N characters is properly nested if:
// S is empty or has proper nesting i.e. () or (()())
// this is not proper (()
// return 1 if properly nested or 0 otherwise

function properlyNested(s) {
  let bracketStack = [];
  for (let char of s) {
    if (char == "(") {
      bracketStack.push(1);
    } else if (char === ")") {
      if ((bracketStack.length === 0)) return 0;
      bracketStack.splice(bracketStack.length-1,1);
    }
  }
  // After passing all chars, bracketStack should be empty if properly nested
  if ((bracketStack.length === 0)) return 1;
  return 0;
}

const S0 = ""; // should return 1
const S1 = "(()())"; // should return 1
const S2 = "()"; // should return 1
const S3 = "(()"; // should return 0
const S4 = "()())(()"; // should return 0
const S5 = "(()(())())"; // should return 1

console.log(properlyNested(S5));
