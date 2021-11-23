// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
  if (str === "") return false;

  let words = str.match(/\b\w+/g);

  if (!words) return false;

  if (words.join("").length > 139) return false;

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
