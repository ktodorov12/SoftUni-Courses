import { editCar, getCarDetails } from "../data/cars.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function editTemplate(car, onEdit) {
  return html`
    <section id="edit">
      <div class="form form-auto">
        <h2>Edit Your Car</h2>
        <form @submit=${createSubmitHandler(onEdit)} class="edit-form">
          <input type="text" name="model" id="model" placeholder="Model" .value=${car.model} />
          <input type="text" name="imageUrl" id="car-image" placeholder="Your Car Image URL" .value=${car.imageUrl} />
          <input type="text" name="price" id="price" placeholder="Price in Euro" .value=${car.price} />
          <input type="number" name="weight" id="weight" placeholder="Weight in Kg" .value=${car.weight} />
          <input type="text" name="speed" id="speed" placeholder="Top Speed in Kmh" .value=${car.speed} />
          <textarea id="about" name="about" placeholder="More About The Car" rows="10" cols="50" .value=${car.about}></textarea>
          <button type="submit">Edit</button>
        </form>
      </div>
    </section>
  `;
}

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const carData = await getCarDetails(id);
  render(editTemplate(carData, onEdit));

  async function onEdit(data) {
    const check = Object.values(data).some(x => x == "");
    if(check) {
      return alert("All field requiered");
    }

    editCar(id, data);
    page.redirect(`/details/${id}`);
  }
}
