function solve(matrix) {
  let row = matrix[0];
  let sum = row.reduce((a, b) => a + b, 0);
  let isMagic = true;

  for (let i = 0; i < matrix.length; i++) {
    let currSumRow = 0;
    let currSumCol = 0;

    for (let j = 0; j < matrix.length; j++) {
      currSumRow += matrix[i][j];
      currSumCol += matrix[j][i];
    }

    if (currSumCol != sum || currSumRow != sum) {
      isMagic = false;
      break;
    }
  }
  console.log(isMagic);
}

solve([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
