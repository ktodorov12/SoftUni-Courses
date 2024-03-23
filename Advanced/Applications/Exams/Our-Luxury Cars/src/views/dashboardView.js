import { getAllCars } from "../data/cars.js";
import { html, render } from "../lib.js";

//TODO add html templates and rename them
function ourCarsTemplate(allCars) {
  return html`
    <h3 class="heading">Our Cars</h3>
    <section id="dashboard">${allCars.length > 0 
    ? allCars.map(carTemplate) 
    : html`<h3 class="nothing">Nothing to see yet</h3>`}
    </section>`;
}

function carTemplate(car) {
  return html`<div class="car">
    <img src=${car.imageUrl} alt="example1" />
    <h3 class="model">${car.model}</h3>
    <div class="specs">
      <p class="price">Price: €${car.price}</p>
      <p class="weight">Weight: ${car.weight} kg</p>
      <p class="top-speed">Top Speed: ${car.speed} kph</p>
    </div>
    <a class="details-btn" href="/details/${car._id}">More Info</a>
  </div>`;
}

export async function showDashboardView() {
  const allCars = await getAllCars();
  render(ourCarsTemplate(allCars));
}
