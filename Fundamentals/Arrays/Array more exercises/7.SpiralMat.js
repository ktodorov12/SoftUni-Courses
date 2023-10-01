function matrix(n) {
  let total = n * n;
  let matrixArray = [];

  for (let i = 0; i < n; i++) {
    let zeroes = [];
    for (let j = 0; j < n; j++) {
      zeroes.push(0);
    }
    matrixArray.push(zeroes);
  }

  let rows = 0;
  let columns = 0;
  let step = 0;
  for (let i = 0; i < total; ) {
    while (columns + step < n) {
      i++;
      matrixArray[rows][columns] = i;
      columns++;
    }
    columns--;
    rows++;

    while (rows + step < n) {
      i++;
      matrixArray[rows][columns] = i;
      rows++;
    }
    rows--;
    columns--;

    while (columns >= step) {
      i++;
      matrixArray[rows][columns] = i;
      columns--;
    }
    columns++;
    rows--;
    step++;

    while (rows >= step) {
      i++;
      matrixArray[rows][columns] = i;
      rows--;
    }
    rows++;
    columns++;
  }
  matrixArray.forEach((row) => console.log(row.join(" ")));
}

matrix(7, 7);
