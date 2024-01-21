function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const table = document.getElementsByTagName("tbody")[0];
    const children = Array.from(table.children);
    const search = document.getElementById("searchField").value;

    children.forEach((tableRow) => tableRow.classList.remove("select"));

    children.forEach((tableRow) => {
      let rowCells = Array.from(tableRow.children);

      if (search) {
        for (let cell of rowCells) {
          cell = cell.textContent;

          if (cell.includes(search)) {
            tableRow.classList.add("select");
            continue;
          }
        }
      }
    });

    document.getElementById("searchField").value = "";
  }
}
