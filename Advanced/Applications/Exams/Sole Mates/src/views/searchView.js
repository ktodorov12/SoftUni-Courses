import { html, render } from "../lib.js";
import { createSubmitHandler, getUserData } from "../util.js";
import { searchShoes } from "../data/shoes.js";

function searchTemplate(found) {
  return html` <section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${createSubmitHandler(search)} class="search-wrapper cf">
      <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
      <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
      <ul class="card-wrapper">
        ${found.length > 0 
            ? found.map(foundTemplate) 
            : html`<h2>There are no results found.</h2>`}
      </ul>
    </div>
  </section>`;
}

function foundTemplate(found) {
  return html`
    <li class="card">
      <img src=${found.imageUrl} alt="travis" />
      <p><strong>Brand: </strong><span class="brand">${found.brand}</span></p>
      <p><strong>Model: </strong><span class="model">${found.model}</span></p>
      <p><strong>Value:</strong><span class="value">${found.value}</span>$</p>
      ${getUserData() 
        ? html`<a class="details-btn" href="/details/${found._id}">Details</a>`
        : null}
    </li>
  `;
}

export function showSearchView() {
  render(searchTemplate([]));
}

async function search({ search }) {
  const found = await searchShoes(search);
  render(searchTemplate(found));
}
