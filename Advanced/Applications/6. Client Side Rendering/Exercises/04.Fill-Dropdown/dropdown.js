import { html, render } from "./node_modules/lit-html/lit-html.js";

const url = "http://localhost:3030/jsonstore/advanced/dropdown";
const menu = document.getElementById("menu");
const input = document.getElementById("itemText");
const btn = document.querySelector("input:nth-child(3)");
loadOptions();

btn.addEventListener("click", addItem);
async function addItem(e) {
  e.preventDefault();

  try {
    const response = await fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input.value }),
    });
    loadOptions();
    input.value = ""
  } catch (error) {
    alert(error);
  }
}

function optionTemplate(option) {
  return html`<option value=${option._id}>${option.text}</option>`;
}

async function loadOptions() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const values = Object.values(data);
    render(values.map(optionTemplate), menu);
  } catch (error) {
    alert(error);
  }
}
