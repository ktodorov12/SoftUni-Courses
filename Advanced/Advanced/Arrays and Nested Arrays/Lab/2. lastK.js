function solve(n, k) {
  let arr = [1];

  for (let i = 1; i < n; i++) {
    let hollow = arr.slice(-k);
    let res = hollow.reduce((red, acc) => red + acc, 0);
    arr.push(res);
  }

  return arr
}

solve(8, 2);
