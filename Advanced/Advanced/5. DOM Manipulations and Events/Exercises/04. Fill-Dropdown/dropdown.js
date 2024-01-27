function addItem() {
  const inputText = document.getElementById("newItemText");
  const inputValue = document.getElementById("newItemValue");
  const menu = document.getElementById("menu");

  let newOption = document.createElement("option");
  newOption.value = inputValue.value;
  newOption.textContent = inputText.value;

  menu.appendChild(newOption);

  inputText.value = "";
  inputValue.value = "";
}
