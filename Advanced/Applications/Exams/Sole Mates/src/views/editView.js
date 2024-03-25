import { editShoe, getShoeDetails } from "../data/shoes.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function editTemplate(shoe, onEdit) {
  return html`<section id="edit">
    <div class="form">
      <h2>Edit item</h2>
      <form @submit=${createSubmitHandler(onEdit)} class="edit-form">
        <input type="text" name="brand" id="shoe-brand" placeholder="Brand"  .value=${shoe.brand} />
        <input type="text" name="model" id="shoe-model" placeholder="Model"  .value=${shoe.model} />
        <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url"  .value=${shoe.imageUrl} />
        <input type="text" name="release" id="shoe-release" placeholder="Release date" .value=${shoe.release}  />
        <input type="text" name="designer" id="shoe-designer" placeholder="Designer"  .value=${shoe.designer} />
        <input type="text" name="value" id="shoe-value" placeholder="Value"  .value=${shoe.value} />

        <button type="submit">post</button>
      </form>
    </div>
  </section>`;
}

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const shoeDetails = await getShoeDetails(id);
  render(editTemplate(shoeDetails, onEdit))

  async function onEdit(data) {
    const check = Object.values(data).some((x) => x == "");
    if (check) {
      return alert("All fields requiered");
    }

    await editShoe(id, data);
    page.redirect(`/details/${id}`);
  }
}
