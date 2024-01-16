function solve(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let sliced = sorted.slice(0, 2);
  console.log(sliced.join(' '));
}

solve([30, 15, 50, 5])
