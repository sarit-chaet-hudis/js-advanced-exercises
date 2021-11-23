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