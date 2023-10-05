function diagonalAttack(numbers) {
  let leftNums = [];
  let rigthNums = [];
  let line = numbers.map(row => row.split(' ').map(Number));

  for (let i = 0; i < numbers.length; i++) {
    leftNums.push(Number(line[i][i]))
  }
  for (let i = 1; i <= numbers.length; i++) {
    rigthNums.push(Number(line[i - 1][line.length - i]))
  }

  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < leftNums.length; i++) {
    leftSum += leftNums[i];
    rightSum += rigthNums[i];
  }
  
  if (leftSum === rightSum) {
    for (let j = 0; j < numbers.length; j++) {
      for (let i = 0; i < numbers.length; i++) {
        if (j != i && j != line.length - 1 - i) {
          line[j][i] = leftSum
        }
      }
    }
    line.forEach((row) => console.log(row.join(" ")));
  } else {
    line.forEach((row) => console.log(row.split("").join("")));
  }
}

diagonalAttack([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
