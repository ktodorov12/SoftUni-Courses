import { addANewCar } from "../data/cars.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";


function templateForCreateForm() {
  return html`
  <section id="create">
    <div class="form form-auto">
      <h2>Share Your Car</h2>
      <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input type="text" name="model" id="model" placeholder="Model" />
        <input type="text" name="imageUrl" id="car-image" placeholder="Your Car Image URL" />
        <input type="text" name="price" id="price" placeholder="Price in Euro" />
        <input type="number" name="weight" id="weight" placeholder="Weight in Kg" />
        <input type="text" name="speed" id="speed" placeholder="Top Speed in Kmh" />
        <textarea id="about" name="about" placeholder="More About The Car" rows="10" cols="50"></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  </section>`;
}

export function showCreateView() {
  render(templateForCreateForm());
}

async function onCreate(data) {
  const check = Object.values(data).some(x => x == "");
  if(check) {
    return alert("All fields requiered");
  }

  await addANewCar(data);
  page.redirect("/dashboard");
}
