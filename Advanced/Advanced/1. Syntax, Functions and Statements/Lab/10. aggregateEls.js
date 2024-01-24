function solve(arr) {
  console.log(arr.reduce((a, b) => a + b));
  let inverced = arr.map(x => 1 / x).reduce((a, b) => a + b);
  console.log(inverced);
  console.log(arr.join(""));
}

solve([1, 2, 3]);
