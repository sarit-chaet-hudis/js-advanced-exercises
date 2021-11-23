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