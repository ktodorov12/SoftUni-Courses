import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

const inputBox = document.getElementById("searchText");
const result = document.getElementById("result");
const root = document.getElementById("towns");
render(renderTowns(), root);

document.querySelector("button").addEventListener("click", () => {
  render(renderTowns(), root);
  inputBox.value = "";
  const found = document.querySelectorAll(".active");
  result.textContent = `${found.length} matches found`;
});

function renderTowns() {
  return html` 
  <ul>
    ${towns.map(townTemplate)}
  </ul>`;
}

function townTemplate(town) {
  const val = inputBox.value;
  const isActive = town.includes(val) && val != "";
  return html`<li class=${isActive ? "active" : ""}>${town}</li>`;
}
