function solve(matrix) {
  let pairs = 0;
  
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      let col = row[j];

      if (i !== matrix.length - 1) {
        if (col === row[j + 1]) pairs++;
        if (col === matrix[i + 1][j]) pairs++;
        else if (col === row[j + 1] || col === matrix[i][j + 1]) pairs++;
      }
    }
  }

  console.log(pairs);
}

solve([
  [2, 2, 5, 7, 4],
  [4, 0, 5, 3, 4],
  [2, 5, 5, 4, 2],
]);
