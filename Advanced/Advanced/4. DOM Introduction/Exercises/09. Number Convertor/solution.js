function solve() {
  const selection = document.getElementById("selectMenuTo");
  createAndAppendEl("binary", "Binary");
  createAndAppendEl("hexadecimal", "Hexadecimal");

  function createAndAppendEl(value, content) {
    let option = document.createElement("option");
    option.textContent = content;
    option.value = value;
    selection.appendChild(option);
  }

  const button = document.querySelector("#container button");
  button.addEventListener("click", onClick);

  function onClick() {
    const convertingValue = selection.value;
    const number = Number(document.getElementById("input").value);

    let result = 0;

    if (convertingValue === "binary") result = number.toString(2);
    else if (convertingValue === "hexadecimal") result = number.toString(16).toUpperCase();

    document.getElementById("result").value = result;
  }
}
