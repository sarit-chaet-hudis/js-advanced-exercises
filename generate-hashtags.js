// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
  if (str === "" || str.length > 140) return false;

  let words = str.match(/\b\w+/g);

  if (!words) return false;

  const result = [];
  for (let word of words) {
    result.push(word.charAt(0).toUpperCase() + word.substring(1));
  }

  return "#" + result.join("");
}

const s1 = " Hello there thanks for trying my Kata"; //=>  "#HelloThereThanksForTryingMyKata"
const s2 = "    Hello     World   "; // =>  "#HelloWorld"
const s3 = ""; // => false
const s4 = "   "; // => false
const s5 = "code" + " ".repeat(140) + "wars";

console.log(generateHashtag(s4));

// Alternate solution:

function generateHashtag(str) {
  return str.length > 140 || str === ""
    ? false
    : "#" + str.split(" ").map(capitalize).join("");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
