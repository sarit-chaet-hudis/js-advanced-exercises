function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(`with for loop: ${i}`);
  }
}

// countDown(5);

function countDown2(num) {
  if (num > 0) {
    console.log(`with recursion: num= ${num}`);
    countDown2(num - 1);
  }
}

countDown2(5);

function countDown3(num) {
  if (num === 0) return;
  console.log(`with recursion type 2: ${num}`);
  countDown3(num - 1);
}

countDown3(5);

function countDownInfinite(num) {
  console.log(`infinite: ${num}`);
  countDownInfinite(num - 1);
}

// countDownInfinite(5);
