function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const table = Array.from(document.querySelectorAll("tbody tr"));
    const search = document.getElementById("searchField").value;

    table.forEach((tableRow) => {
      let rowCells = Array.from(tableRow.children);
      
      for (let cell of rowCells){
        let content = cell.textContent;

        if (content.includes(search)) {
          tableRow.classList.add("select");
          break;
        } else {
          tableRow.classList.remove("select")
        }
      }
    });

    document.getElementById("searchField").value = "";
  }
}
