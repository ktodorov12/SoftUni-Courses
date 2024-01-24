function search() {
  let allTowns = Array.from(document.querySelectorAll("ul#towns li"));
  let inputedText = document.getElementById("searchText").value;
  
  let matches = 0;
  
  allTowns.forEach(element => {
    let town = element.textContent
    
    if (town.includes(inputedText) && inputedText) {
      element.style.fontWeight = "bolder";
      element.style.textDecoration = "underline";
      matches++
    } else {
      element.style.fontWeight = "normal";
      element.style.textDecoration = "none";
    }
  })

  document.getElementById("result").textContent = `${matches} matches found`;
  document.getElementById("searchText").value = "";
}
