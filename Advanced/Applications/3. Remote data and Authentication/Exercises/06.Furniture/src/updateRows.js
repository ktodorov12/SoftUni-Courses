function updateRows(body, disabled) {
  const table = document.querySelector(".table tbody");

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>
        <img src=${body.img}>
    </td>
    <td>
        <p>${body.name}</p>
    </td>
    <td>
        <p>${body.price}</p>
    </td>
    <td>
        <p>${body.factor}</p>
    </td>
    <td>
        <input type="checkbox" ${disabled ? "disabled" : ""}>
    </td>
  `;
  table.appendChild(tr);
}

export { updateRows };
