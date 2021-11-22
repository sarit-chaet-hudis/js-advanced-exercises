// properly nested if any of the following conditions is true:
// S is empty;
// S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, the string "{[()()]}" is properly nested but "([)()]" is not.
//  returns 1 if S is properly nested and 0 otherwise.

function solution(S) {
  if (S === "") return 1;
  let bracketStack = [];
  for (let char of S) {
    if (char === "{" || char === "[" || char === "(") {
      bracketStack.push(char);
    } else {
      // Closing bracket
      let lastChar = bracketStack.pop();
      switch (char) {
        case ")":
          if (lastChar != "(") return 0;
          break;
        case "]":
          if (lastChar != "[") return 0;
          break;
        case "}":
          if (lastChar != "{") return 0;
          break;
      }
    }
  }
  return bracketStack.length === 0 ? 1 : 0;
}

const s1 = "{[()()]}";
const s2 = "{{{{";

console.log(solution(s2));
