function solve(first, second) {
  let matrix = [];

  for (let i = 0; i < first; i++) {
    let row = [];
    for (let j = 0; j < first; j++) {
      row.push(0);
    }
    matrix.push(row);
  }

  let x = 0;
  let y = 0;

  for (let i = 1; i <= first * second; i++) {
    if (y === matrix.length) {
      y--;
      x++;
    }

    if (y === x) {
        y--;
        x--;
    }
    matrix[x][y] = i;
    y++;
    
}
  matrix.forEach((el) => console.log(el.join(` `)));
}

solve(3, 3);
