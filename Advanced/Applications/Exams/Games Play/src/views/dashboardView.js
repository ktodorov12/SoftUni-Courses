import { getAllGames } from "../data/games.js";
import { html, render } from "../lib.js";

function dashboardTemplate(allGames) {
  return html`
    <section id="catalog-page">
      <h1>All Games</h1>
      ${allGames.length > 0 ? allGames.map(cardTemplate) : html`<h3 class="no-articles">No articles yet</h3>`}
    </section>
  `;
}

function cardTemplate(game) {
  return html` 
  <div class="allGames">
    <div class="allGames-info">
      <img src=${game.imageUrl} />
      <h6>${game.category}</h6>
      <h2>${game.title}</h2>
      <a href="/details/${game._id}" class="details-button">Details</a>
    </div>
  </div>`;
}

export async function showDashboardView() {
  const allGames = await getAllGames();
  render(dashboardTemplate(allGames));
}
