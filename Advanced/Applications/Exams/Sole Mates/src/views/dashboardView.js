import { getAllShoes } from "../data/shoes.js";
import { html, render } from "../lib.js";

function mainTemplate(allShoes) {
  return html`
    <section id="dashboard">
      <h2>Collectibles</h2>
      <ul class="card-wrapper"></ul>
        ${allShoes.length > 0
            ? allShoes.map(cardTemplate)
            : html`<h2>There are no items added yet.</h2>`}
    </section>
  `;
}

function cardTemplate(shoe) {
  return html`
    <li class="card">
      <img src=${shoe.imageUrl} alt="travis" />
      <p><strong>Brand: </strong><span class="brand">${shoe.brand}</span></p>
      <p><strong>Model: </strong><span class="model">${shoe.model}</span></p>
      <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
      <a class="details-btn" href="/details/${shoe._id}">Details</a>
    </li>
  `;
}

export async function showDashboardView() {
  const allShoes = await getAllShoes();
  render(mainTemplate(allShoes));
}
