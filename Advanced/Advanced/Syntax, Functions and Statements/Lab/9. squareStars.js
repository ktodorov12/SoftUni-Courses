function solve(num) {
  for (let i = 0; i < num; i++) {
    let rows = "";
    for (let c = 0; c < num; c++) {
      rows += "* ";
    }
    console.log(rows);
  }
}

solve(2);
