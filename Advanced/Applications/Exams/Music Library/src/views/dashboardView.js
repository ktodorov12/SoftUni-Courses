import { getAllAlbums } from "../data/albums.js";
import { html, render } from "../lib.js";

function dashboardTemplate(allAlbums) {
  return html`
    <section id="dashboard">
      <h2>Albums</h2>
      <ul class="card-wrapper"></ul>
        ${allAlbums.length > 0 
          ? allAlbums.map(albumTemplate)
          : html`<h2>There are no albums added yet.</h2>`}
    </section>
  `;
}

function albumTemplate(album) {
  return html` 
  <li class="card">
    <img src=${album.imageUrl} alt="travis" />
    <p><strong>Singer/Band: </strong><span class="singer">${album.singer}</span></p>
    <p><strong>Album name: </strong><span class="album">1</span></p>
    <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
    <a class="details-btn" href="/details/${album._id}">Details</a>
  </li>`;
}

export async function showDashboardView() {
  const allAlbums = await getAllAlbums();
  render(dashboardTemplate(allAlbums));
}
