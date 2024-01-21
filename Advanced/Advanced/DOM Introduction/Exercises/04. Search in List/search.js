function search() {
  let allTowns = document.querySelectorAll("ul#towns li");
  let inputedText = document.getElementById("searchText").value;
  let arrayTowns = Array.from(allTowns);

  arrayTowns.forEach((el) => {
    el.style.fontWeight = "normal";
    el.style.textDecoration = "none";
  });

  let matches = 0;

  if (inputedText) {
    for (let el of arrayTowns) {
      let town = el.textContent;
      if (town.includes(inputedText)) {
        el.style.fontWeight = "bolder";
        el.style.textDecoration = "underline";
        matches++;
      }
    }
  }

  document.getElementById("result").textContent = `${matches} matches found`;
  document.getElementById("searchText").value = "";
}
