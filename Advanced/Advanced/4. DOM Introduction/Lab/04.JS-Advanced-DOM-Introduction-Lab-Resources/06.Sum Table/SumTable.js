function sumTable() {
  let table = document.querySelectorAll("table tbody td:nth-child(2)");
  let sum = 0;

  for (let i = 0; i < table.length - 1; i++) {
    sum += Number(table[i].textContent);
  }
  
  document.getElementById("sum").textContent = sum;
}
