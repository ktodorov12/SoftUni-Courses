import { searchFruit } from "../data/fruits.js";
import { html, render } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function searchTemplate(matches) {
  return html` 
  <section id="search">
    <div class="form">
      <h2>Search</h2>
      <form @submit=${createSubmitHandler(showResult)} class="search-form">
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    <h4>Results:</h4>
    <div class="search-result">
        ${matches.length > 0 
            ? matches.map(matchTemplate) 
            : html`<p class="no-result">No result.</p>`}
    </div>
  </section>`;
}

function matchTemplate(fruit) {
  return html` 
  <div class="fruit">
    <img src=${fruit.imageUrl} alt="example1" />
    <h3 class="title">${fruit.name}</h3>
    <p class="description">${fruit.description}</p>
    <a class="details-btn" href="/details/${fruit._id}">More Info</a>
  </div>`;
}

export function showSearchView() {
    render(searchTemplate([]));
}

async function showResult({ search }) {
    if(!search) {
        return
    }
    
    const found = await searchFruit(search);
    render(searchTemplate(found));
}
