import { getAllMotorcycles } from "../data/motorcycles.js";
import { html, render } from "../lib.js";

function dashboardTemplate(motorcycles) {
  return html`
    <h2>Available Motorcycles</h2>
    <section id="dashboard">
    ${motorcycles.length > 0 
      ? motorcycles.map(motorTemplate) 
      : html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}
    </section>
  `;
}

function motorTemplate(motor) {
  return html`
  <div class="motorcycle">
    <img src=${motor.imageUrl} alt="example1" />
    <h3 class="model">${motor.model}</h3>
    <p class="year">Year: ${motor.year}</p>
    <p class="mileage">Mileage: ${motor.mileage} km.</p>
    <p class="contact">Contact Number: ${motor.contact}</p>
    <a class="details-btn" href="/details/${motor._id}">More Info</a>
  </div>`;
}

export async function showDashboardView() {
  const allMotorcycles = await getAllMotorcycles();
  render(dashboardTemplate(allMotorcycles));
}
