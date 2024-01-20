function extractText() {
  let list = document.getElementById("items").children;
  let result = "";

  for (let el of list) {
    result += el.textContent + `\n`;
  }

  let text = document.getElementById("result");
  text.textContent = result;
}
