function solve(input) {
  let matrix = [];
  let diagSum = 0;
  let revDiagSum = 0;

  for (let el of input) {
    el = el.split(" ");
    let row = [];
    for (let num of el) {
      row.push(Number(num));
    }
    matrix.push(row);
  }

  for (let i = 0; i < matrix.length; i++) {
    diagSum += matrix[i][i];
    revDiagSum += matrix[i][matrix.length - 1 - i];
  }

  if (diagSum === revDiagSum) {
    //
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        //
        if (j !== i && j !== matrix.length - 1 - i) {
          matrix[i][j] = diagSum;
        }
      }
    }
  }

  matrix.forEach((el) => console.log(el.join(` `)));
}

solve([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
