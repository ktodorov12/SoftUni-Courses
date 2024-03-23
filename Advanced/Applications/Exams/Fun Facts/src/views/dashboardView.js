import { getAllFacts } from "../data/funFacts.js";
import { html, render } from "../lib.js";

function mainTemplate(funFacts = []) {
  return html`
    <h2>Fun Facts</h2>
    <section id="dashboard">${funFacts.length > 0 
      ? funFacts.map(cardTemplate) 
      : html`<h2>No Fun Facts yet.</h2>`}</section>
  `;
}

function cardTemplate(fact) {
  return html` <div class="fact">
    <img src=${fact.imageUrl} alt="example1" />
    <h3 class="category">${fact.category}</h3>
    <p class="description">${fact.description}</p>
    <a class="details-btn" href="/details/${fact._id}">More Info</a>
  </div>`;
}

export async function showDashboardView() {
  const allFunFacts = await getAllFacts();
  render(mainTemplate(allFunFacts));
}