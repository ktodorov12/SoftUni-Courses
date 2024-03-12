import { html, render } from "./node_modules/lit-html/lit-html.js";

const url = "http://localhost:3030/jsonstore/advanced/table";
const root = document.querySelector("tbody");
const btn = document.querySelector("#searchBtn");
const input = document.getElementById("searchField");
printRows();

btn.addEventListener("click", onClick);
function onClick() {
   const table = document.querySelectorAll("tbody tr");

   table.forEach((tableRow) => {
     let rowCells = Array.from(tableRow.children);
     
     for (let cell of rowCells){
       let content = cell.textContent.toLocaleLowerCase();

       if (content.includes(input.value.toLocaleLowerCase())) {
         tableRow.classList.add("select");
         break;
       } else {
         tableRow.classList.remove("select")
       }
     }
   });

   input.value = "";
 }

async function printRows() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const vals = Object.values(data);
    render(vals.map(trTemplate), root);
  } catch (error) {
    alert(error);
  }
}

function trTemplate(data) {
  return html` <tr>
    <td>${data.firstName} ${data.lastName}</td>
    <td>${data.email}</td>
    <td>${data.course}</td>
  </tr>`;
}