function solve(matrix) {
  let left = 0;
  let right = 0;

  for (let i = 0; i < matrix.length; i++) {
    let first = matrix[i][i];
    let last = matrix[i][matrix.length - 1 - i];

    left += first;
    right += last;
  }

  console.log(left, right);
}

solve([
  [20, 40],
  [10, 60],
]);
