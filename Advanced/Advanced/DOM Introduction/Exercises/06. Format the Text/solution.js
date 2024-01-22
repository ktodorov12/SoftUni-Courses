function solve() {
  let textArea = document.getElementById("input");
  const input = textArea.value;
  const output = document.getElementById("output");

  const text = input.split(".").filter((el) => el.length > 0);


  while (text.length > 0) {
    let elements = text.splice(0, 3);
    output.innerHTML += `<p>${
      elements.join(". ") + "."
    }</p>`;
  }
  console.log(text);
}