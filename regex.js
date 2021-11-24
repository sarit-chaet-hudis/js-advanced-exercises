// The .test() method takes the regex, applies it to a string (which is
//  placed inside the parentheses), 
// and returns true or false if your pattern finds something or not.

let testStr = "freeCodeCamp";
let testRegex = /Code/;
console.log(testRegex.test(testStr)); //true

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
console.log(waldoRegex.test(waldoIsHiding));

// You can also search for more than just two patterns. 
//You can do this by adding more patterns with more OR operators
// separating them, like /yes|no|maybe/.

let petString = "James has a pet cat.";
let petRegex = /cat|dog|fish/; 
console.log(petRegex.test(petString));

// I (ignore case ) Using this flag is /ignorecase/i. This regex
// can match the strings ignorecase, igNoreCase, and IgnoreCase.

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; 
console.log(fccRegex.test(myString)); //true

// You can also extract the actual matches you found with the .match() method.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
console.log(extractStr.match(codingRegex)); 

// To search or extract a pattern more than once, you can use the g flag.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; 
console.log(twinkleStar.match(starRegex)); 

// You can use the wildcard character just like any other character
// in the regex. For example, if you wanted to match hug, huh, hut,
// and hum, you can use the regex /hu./ to match all four words.

// Character classes allow you to define a group of characters you
// // wish to match by placing them inside square ([ and ]) brackets.
// For example, you want to match bag, big, and bug but not bog.
//  You can create the regex /b[aiu]g/ to do this. 
//  The [aiu] is the character class that will only match the characters
//   a, i, or u.

//find all vowels
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; 
let result = quoteSample.match(vowelRegex); 
console.log(result); // => array of all vowels

// To create a negated character set, you place a caret character (^) after
//  the opening bracket and before the characters you do not want to match.
// For example, /[^aeiou]/gi matches all characters that are not a vowel