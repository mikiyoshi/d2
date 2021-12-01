// process.stdout.write('hello from spinner1.js... \rheyyy\n');

const loading = '\r|\r/\r-\r\\\r|\n';
// console.log(arr.length);
let arr = [];
for (const char of loading) {
  // console.log(char);
  arr.push(char);
}

for (let i = 0; i < arr.length; i++) {
  // console.log(arr);
  setTimeout(() => {
    process.stdout.write(arr[i]);
  }, 100 + i * 200);
}
