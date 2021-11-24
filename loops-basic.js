// print all nums from 100 to -4 div by 5

// for (let i = 100; i > -4; i = i-5) {
//     console.log(i);
// }

// isolate digits
let x = 123;
console.log(Math.floor(x / 100)); // 1
console.log(Math.floor((x / 10) % 10)); //2
console.log(Math.floor(x % 10)); //3

// now we can use it in a loop
// find all nums < 1000 that have three identical digits
for (let i = 100; i < 1000; i++) {
  const left = Math.floor(i / 100);
  const mid = Math.floor((i / 10) % 10);
  const right = Math.floor(i % 10);

  if (left === mid && right === mid) {
    // console.log(i);
  }
}

// of course, we can:
for (let i = 111; i < 1000; i = i + 111) {
//   console.log(i);
}

const arr = [-3, -2, -1, 0, 1, 2, 3]
// tip - always check array funcs on arrays that have positives, zero, negatives

// chained functions - very useful!
// get all positive numbers and multiply by 2
let output = arr.filter((num) => {
    return num > 0
}).map((num) => {   // i can call "num" any other name now, doesn't matter
    return num * 2
})

console.log(output);

// useful when we want for exm take all users that are... and do y to them etc.

// reduce can have an initial value, from which it starts.


