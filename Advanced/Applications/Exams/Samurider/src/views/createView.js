import { addingMotorcycle } from "../data/motorcycles.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function templateForCreateForm() {
  return html`
  <section id="create">
    <h2>Add Motorcycle</h2>
    <div class="form">
      <h2>Add Motorcycle</h2>
      <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input type="text" name="model" id="model" placeholder="Model" />
        <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image" />
        <input type="number" name="year" id="year" placeholder="Year" />
        <input type="number" name="mileage" id="mileage" placeholder="mileage" />
        <input type="text" name="contact" id="contact" placeholder="contact" />
        <textarea id="about" name="about" placeholder="about" rows="10" cols="50"></textarea>
        <button type="submit">Add Motorcycle</button>
      </form>
    </div>
  </section>`;
}

export function showCreateView() {
  render(templateForCreateForm());
}

async function onCreate(data) {
  const check = Object.values(data).some(x => x == "");
  if (check) {
    return alert("All fields requiered");
  }

  await addingMotorcycle(data);
  page.redirect("/dashboard");
}
