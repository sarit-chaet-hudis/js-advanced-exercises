// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Solve it in 3 different ways -
// - With JS functions only (e.g split, etc.)
// - With loop (for)
// - With recursion

const s = ["1", "2", "3", "4", "5"];

function reverseString1(str) {
  return str.reverse();
}

console.log("with string methods: ", reverseString1(s));

function reverseString2(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str[i]);
  }
  return result;
}

console.log("with loop: ", reverseString2(s));

// **********

function reverseString3(strArray, start = 0, end = strArray.length - 1) {
  if (end - start < 1) {
    return strArray;
  }
  const tempChar = strArray[start];
  strArray[start] = strArray[end];
  strArray[end] = tempChar;
  start++;
  end--;
  return reverseString3(strArray, start, end);
}

const s2 = ["i", "s", "r", "a", "e", "l"];

console.log("from reverse by recursion: ", reverseString3(s2), s2);

function reverseString4(str) {
  //one-liner using substrings, the reversed string is built while the recursion stack is slowly returning
}
