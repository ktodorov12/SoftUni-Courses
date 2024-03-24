import { editMotorcycle, getDetailsMotorcycle } from "../data/motorcycles.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function editTemplate(motor, onEdit) {
  return html` 
  <section id="edit">
    <h2>Edit Motorcycle</h2>
    <div class="form">
      <h2>Edit Motorcycle</h2>
      <form @submit=${createSubmitHandler(onEdit)} class="edit-form">
        <input type="text" name="model" id="model" placeholder="Model" .value=${motor.model} />
        <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image" .value=${motor.imageUrl} />
        <input type="number" name="year" id="year" placeholder="Year" .value=${motor.year} />
        <input type="number" name="mileage" id="mileage" placeholder="mileage" .value=${motor.mileage} />
        <input type="number" name="contact" id="contact" placeholder="contact" .value=${motor.contact} />
        <textarea id="about" name="about" placeholder="about" rows="10" cols="50" .value=${motor.about} ></textarea>
        <button type="submit">Edit Motorcycle</button>
      </form>
    </div>
  </section>`;
}

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const motorDetails = await getDetailsMotorcycle(id);
  render(editTemplate(motorDetails, onEdit));

  async function onEdit(data) {
    const check = Object.values(data).some(x => x == "");
    if (check) {
      return alert("All fields requiered");
    }
  
    await editMotorcycle(id, data);
    page.redirect(`/details/${id}`);
  }
}
