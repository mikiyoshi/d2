const sentence = 'hello there from lighthouse labs';
// const sentence = 'abc';
let arr = [];
for (const char of sentence) {
  // console.log(char);
  arr.push(char);
  // console.log(arr.length);
}

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    process.stdout.write(arr[i]);
  }, i * 50); // <= 1s delay to make it noticeable. Can dial it down later.
}
