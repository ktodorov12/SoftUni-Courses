function addItem() {
  const inputRef = document.getElementById("newItemText");
  const ulRef = document.getElementById("items");

  let newLiElement = document.createElement("li");
  newLiElement.textContent = inputRef.value;
  ulRef.appendChild(newLiElement);

  let deleteElement = document.createElement("a");
  deleteElement.textContent = "[Delete]";
  deleteElement.href = "#";
  deleteElement.addEventListener("click", removeItem);
  newLiElement.appendChild(deleteElement);

  inputRef.value = "";

  function removeItem() {
    newLiElement.remove();
  }
}
