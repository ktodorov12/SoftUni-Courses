import { deleteCar, getCarDetails } from "../data/cars.js";
import { html, render, page } from "../lib.js";
import { isOwner } from "../util.js";

function detailsTemplate(car, hasOwner, onDelete) {
  return html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${car.imageUrl} alt="example1" />
        <p id="details-title">${car.model}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p class="price">Price: €${car.price}</p>
            <p class="weight">Weight: ${car.weight} kg</p>
            <p class="top-speed">Top Speed: ${car.speed} kph</p>
            <p id="car-description"> ${car.about} </p>
          </div>
          ${hasOwner ? html`          
          <div id="action-buttons">
            <a href="/edit/${car._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
          </div>` 
          : null}
        </div>
      </div>
    </section>
  `;
}

export async function showDetailsView(ctx) {
  const id = ctx.params.id;
  const carData = await getCarDetails(id);
  const hasOwner = isOwner(carData._ownerId);
  render(detailsTemplate(carData, hasOwner, onDelete));

  async function onDelete() {
    const isConfirmed = confirm("Are you sure?");
    if (isConfirmed) {
      await deleteCar(id);
      page.redirect("/dashboard");
    }
  }
}

