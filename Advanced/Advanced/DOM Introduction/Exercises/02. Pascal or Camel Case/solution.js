function solve() {
  let text = document.querySelector("body form div input").value;
  let transformer = document.querySelector(
    "body form div:nth-child(2) input"
  ).value;

  text = text.toLowerCase().split(" ");
  let newText = "";

  if (transformer === "Camel Case" || transformer === "Pascal Case") {
    for (let i = 0; i < text.length; i++) {
      let currText = text[i];

      if (transformer === "Camel Case" && i === 0) {
        newText += currText;
        continue;
      }

      currText = currText[0].toUpperCase() + currText.slice(1);

      newText += currText;
    }
  } else {
    newText = "Error!";
  }

  document.getElementById("result").textContent = newText;
}
