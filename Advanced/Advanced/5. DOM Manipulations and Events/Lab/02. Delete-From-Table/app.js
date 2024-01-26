function deleteByEmail() {
  const rowsTable = Array.from(document.querySelectorAll("tbody tr"));
  const inputRef = document.querySelector('input[type="text"]');
  const resultatDiv = document.getElementById("result");
  resultatDiv.textContent = "Not found.";

  rowsTable.forEach((row) => {
    let [name, email] = row.children;

    if (email.textContent === inputRef.value) {
      row.parentNode.removeChild(row);
      resultatDiv.textContent = "Deleted.";
    }
  });

  inputRef.value = "";
}
