import { searchCars } from "../data/cars.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function searchTemplate(allCars = []) {
  return html` <section id="search">
    <div class="form">
      <h4>Search</h4>
      <form @submit=${createSubmitHandler(onSubmit)} class="search-form">
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    <div class="search-result">${allCars.length > 0 
        ? allCars.map(carTemplate) 
        : html`<h2 class="no-avaliable">No result.</h2>`}
    </div>
  </section>`;
}

function carTemplate(car) {
  return html` <div class="car">
    <img src=${car.imageUrl} alt="example1" />
    <h3 class="model">${car.model}</h3>
    <a class="details-btn" href="/details/${car._id}">More Info</a>
  </div>`;
}

export function showSearchView() {
  render(searchTemplate());
}

async function onSubmit({ search }) {
  if (!search) {
    return;
  }
  const foundCars = await searchCars(search);
  render(searchTemplate(foundCars));
}
