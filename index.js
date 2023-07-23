function count1(n) {
  return (n * (n + 1)) / 2;
}

const start = performance.now();
console.log(count1(6));
const end = performance.now();
console.log(`diff ${end - start}`);

function count2(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
const start2 = performance.now();
console.log(count2(6));
const end2 = performance.now();
console.log(`diff ${end2 - start2}`);

// charachters count in string
console.log(charCount("Hello world!"));
function charCount(str) {
  let counter = {};
  if (str === "") {
    return null;
  }
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      counter[char] ? counter[char]++ : (counter[char] = 1);
    }
  }
  return counter;
}
