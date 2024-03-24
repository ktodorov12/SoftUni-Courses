import { getAllFruits } from "../data/fruits.js";
import { html, render } from "../lib.js";

function fruitsTemplate(allFruits) {
  return html`
    <h2>Fruits</h2>
    <section id="dashboard">
      ${allFruits.length > 0 
        ? allFruits.map(fruitTemplate) 
        : html`<h2>No fruit info yet.</h2>`}
    </section>
  `;
}

function fruitTemplate(fruit) {
  return html`
    <div class="fruit">
      <img src=${fruit.imageUrl} alt="example1" />
      <h3 class="title">${fruit.name}</h3>
      <p class="description">${fruit.description}</p>
      <a class="details-btn" href="/details/${fruit._id}">More Info</a>
    </div>
  `;
}

export async function showDashboardView() {
  const allFruits = await getAllFruits();
  render(fruitsTemplate(allFruits));
}
