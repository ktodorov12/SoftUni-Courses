import { getAllMemes } from "../data/memes.js";
import { html, render } from "../lib.js";

function dashboardTemplate(memes) {
  return html`
    <section id="meme-feed">
      <h1>All Memes</h1>
      <div id="memes">
        ${memes.length > 0 
          ? memes.map(memeTemplate)
          : html`<p class="no-memes">No memes in database.</p>`}
      </div>
    </section>
  `;
}

function memeTemplate(meme) {
  return html` <div class="meme">
    <div class="card">
      <div class="info">
        <p class="meme-title">${meme.title}</p>
        <img class="meme-image" alt="meme-img" src=${meme.imageUrl} />
      </div>
      <div id="data-buttons">
        <a class="button" href="/details/${meme._id}">Details</a>
      </div>
    </div>
  </div>`;
}

export async function showDashboardView() {
  const allMemes = await getAllMemes();
  render(dashboardTemplate(allMemes));
}
