function extractText() {
  let list = document.querySelectorAll("ul#items li");
  let result = "";

  for (let el of list) {
    result += el.textContent + `\n`;
  }

  let text = document.getElementById("result");
  text.textContent = result;
}
