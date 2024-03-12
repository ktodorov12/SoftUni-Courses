import { render, html } from "./node_modules/lit-html/lit-html.js";
const root = document.getElementById("root");
const input = document.getElementById("towns");

document.getElementById("btnLoadTowns").addEventListener("click", (e) => {
  e.preventDefault();
  const towns = input.value.split(", ");
  render(townTemplate(towns), root);
  input.value = "";
});

function townTemplate(towns) {
  return html`
    <ul>
      ${towns.map((town) => html`<li>${town}</li>`)}
    </ul>
  `;
}
