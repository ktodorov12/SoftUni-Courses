import { getMarketData } from "../data/market.js";
import { html, render } from "../lib.js";

function mainTemplate(allItems) {
  return html`
    <h3 class="heading">Market</h3>
    <section id="dashboard">
      ${allItems.length > 0 
        ? allItems.map(cardTemplate )
        : html`<h3 class="empty">No Items Yet</h3>`}
    </section>
  `;
}

function cardTemplate(item) {
  return html`
        <div class="item">
        <img src=${item.imageUrl} alt="example1" />
        <h3 class="model">${item.item}</h3>
        <div class="item-info">
          <p class="price">Price: €${item.price}</p>
          <p class="availability">${item.availability}</p>
          <p class="type">Type: ${item.type}</p>
        </div>
        <a class="details-btn" href="/details/${item._id}">Uncover More</a>
      </div>`;
}

export async function showDashboardView() {
  const allItems = await getMarketData();
  render(mainTemplate(allItems));
}
