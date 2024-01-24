function generateReport() {
  const checkBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
  const rows = Array.from(document.querySelectorAll("tbody tr"));
  const traversingRows = (rows) => rows.map((row) => (row = checkingBoxes(row, checkBoxes)));

  let boxes = traversingRows(rows);

  document.getElementById("output").value = JSON.stringify(boxes, null, 2);

  function checkingBoxes(row, checkBoxes) {
    
    let obj = {};
    checkBoxes.forEach((box, index) => {
      if (box.checked) obj[box.name] = row.children[index].textContent;
    });
    return obj
  }
}
