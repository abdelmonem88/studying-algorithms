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
