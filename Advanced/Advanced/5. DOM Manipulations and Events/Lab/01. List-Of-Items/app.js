function addItem() {
  const inputRef = document.getElementById("newItemText");
  const ulRef = document.getElementById("items");

  let newLiElement = document.createElement("li");
  newLiElement.textContent = inputRef.value;

  ulRef.appendChild(newLiElement);
  inputRef.value = "";
}
