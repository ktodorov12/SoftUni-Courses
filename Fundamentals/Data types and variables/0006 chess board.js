function board(num) {
    let chessboard = num * num;
    let cube = 1;
    console.log('<div class="chessboard">');
    for (let j = 1; j <= num; j++) {
      console.log("  <div>");
      for (let i = 1; i <= num; i++) {
        if (cube % 2 === 0) {
          console.log('    <span class="white"></span>');
        } else {
          console.log('    <span class="black"></span>');
        }
        cube++
      }
      console.log('  </div>');
    }
    console.log('</div>');
  }
board(6);
