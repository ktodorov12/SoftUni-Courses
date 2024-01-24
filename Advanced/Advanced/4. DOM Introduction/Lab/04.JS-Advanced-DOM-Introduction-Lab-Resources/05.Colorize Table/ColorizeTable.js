function colorize() {
  let table = document.querySelector("table tbody").children;

  for (let i = 1; (i < table.length); i += 2) {
    table[i].style.backgroundColor = "teal";
  }
}
