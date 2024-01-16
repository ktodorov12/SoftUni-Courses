function solve(matrix) {
  let linearMatrix = matrix.flat();
  let biggest = Math.max(...linearMatrix);
  console.log(biggest);
}

solve([
  [20, 50, 10],
  [8, 33, 145],
]);
