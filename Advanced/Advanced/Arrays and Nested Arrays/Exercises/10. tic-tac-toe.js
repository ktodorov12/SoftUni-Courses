function solve(moves) {
  //
  let players = ["X", "O"];
  let dashBoard = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  for (let i = 0; i <= moves.length; i++) {
    //
    if (!dashBoard.flat().includes(false)) {
      console.log("The game ended! Nobody wins :(");
      break;
    }

    let currPlayer = i % 2 == 0 ? players[0] : players[1];

    let [x, y] = moves[i].split(" ");

    if (dashBoard[x][y] !== false) {
      console.log("This place is already taken. Please choose another!");
      players.reverse();
      continue;
    }

    dashBoard[x][y] = currPlayer;
    let isTrue = checkDashboard(dashBoard, currPlayer);

    if (isTrue) {
      console.log(`Player ${currPlayer} wins!`);
      break;
    }
  }

  dashBoard.forEach((el) => console.log(el.join(`\t`)));

  function checkDashboard(matrix, sign) {
    let diag = [];
    let revDiag = [];

    for (let i = 0; i < matrix.length; i++) {
      //
      let col = [];
      let row = matrix[i];
      if (row.every((el) => el === sign)) return true;

      diag.push(matrix[i][i]);
      revDiag.push(matrix[i][matrix.length - 1 - i]);

      for (let j = 0; j < matrix.length; j++) col.push(matrix[j][i]);

      if (col.every((el) => el === sign)) return true;
    }

    if (diag.every((el) => el === sign) || revDiag.every((el) => el === sign)) {
      return true;
    }
    return false;
  }
}

solve(["0 2", "0 0", "1 1", "0 0", "0 0", "0 0", "0 0", "0 0", "0 0", "2 0"]);
