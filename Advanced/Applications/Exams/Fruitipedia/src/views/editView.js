import { editFruit, getFruitDetails } from "../data/fruits.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function editTemplate(fruit, onEdit) {
  return html`
    <section id="edit">
      <div class="form">
        <h2>Edit Fruit</h2>
        <form @submit=${createSubmitHandler(onEdit)} class="edit-form">
          <input type="text" name="name" id="name" placeholder="Fruit Name" .value=${fruit.name} />
          <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image URL" .value=${fruit.imageUrl} />
          <textarea id="fruit-description" name="description" placeholder="Description" rows="10" cols="50" .value=${fruit.description}></textarea>
          <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50" .value=${fruit.nutrition}></textarea>
          <button type="submit">post</button>
        </form>
      </div>
    </section>
  `;
}

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const fruitDetails = await getFruitDetails(id);
  render(editTemplate(fruitDetails, onEdit));

  async function onEdit(data) {
    const check = Object.values(data).some((x) => x == "");
    if (check) {
      return alert("All fields requiered");
    }

    await editFruit(id, data);
    page.redirect(`/details/${id}`);
  }
}
