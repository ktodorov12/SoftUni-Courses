function magicMatrices(square) {
  let isMagical = false;
  let equalLines = false;
  let equalCollumns = false;

  let lineOne = 0;
  let lineTwo = 0;
  let lineThree = 0;

  let collumnOne = 0;
  let collumnTwo = 0;
  let collumnThree = 0;
  for (let i = 0; i < square.length; i++) {
    for (let j = 0; j < square.length; j++) {
      if (i === 0) {
        lineOne += square[i][j];
        collumnOne += square[j][i];
      } else if (i === 1) {
        lineTwo += square[i][j];
        collumnTwo += square[j][i];
      } else if (i === 2) {
        lineThree += square[i][j];
        collumnThree += square[j][i];
      }
    }
  }

  if (lineOne === lineTwo && lineTwo === lineThree) {
    equalLines = true;
  }
  if (collumnOne === collumnTwo && collumnTwo === collumnThree) {
    equalCollumns = true;
  }
  if (equalLines && equalCollumns) {
    console.log(true);
  } else {
    console.log(false);
  }
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
