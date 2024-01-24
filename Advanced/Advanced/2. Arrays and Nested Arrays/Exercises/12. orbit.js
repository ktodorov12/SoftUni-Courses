function solve(coordinates) {
  let space = coordinates.slice(0, 2);
  let [starX, starY] = coordinates.slice(2);

  let matrix = [];

  for (let i = 0; i < space[0]; i++) {
    let row = [];
    for (let j = 0; j < space[0]; j++) {
      row.push(0);
    }
    matrix.push(row);
  }

  matrix[starX][starY] = 1;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i == starX && starY == j) continue;
      let num = (j + i) - (starX - starY);



      matrix[i][j] = num;
    }
  }

  matrix.forEach((el) => console.log(el.join(` `)));
}

solve([4, 4, 0, 0]);
