import { getAllChars } from "../data/characters.js";
import { html, render } from "../lib.js";

function dashboardTemplate(allCharacters) {
  return html`
    <h2>Characters</h2>
    <section id="characters">
      ${allCharacters.length > 0 ? 
      allCharacters.map(characterTemplate) 
        : html`<h2>No added Heroes yet.</h2>`}
    </section>
  `;
}

function characterTemplate(char) {
  return html`
    <div class="character">
      <img src=${char.imageUrl} alt="example1" />
      <div class="hero-info">
        <h3 class="category">${char.category}</h3>
        <p class="description">${char.description}</p>
        <a class="details-btn" href="/details/${char._id}">More Info</a>
      </div>
    </div>
  `;
}

export async function showDashboardView() {
  const allCharacters = await getAllChars();
  render(dashboardTemplate(allCharacters));
}
