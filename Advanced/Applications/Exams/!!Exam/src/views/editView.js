import { editMarket, getMarketDetails } from "../data/market.js";
import { showNotification } from "../errors.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function editTemplate(item, onEdit) {
  return html`<section id="edit">
    <div class="form form-item">
      <h2>Edit Your Item</h2>
      <form @submit=${createSubmitHandler(onEdit)} class="edit-form">
        <input type="text" name="item" id="item" placeholder="Item" .value=${item.item} />
        <input type="text" name="imageUrl" id="item-image" placeholder="Your item Image URL" .value=${item.imageUrl} />
        <input type="text" name="price" id="price" placeholder="Price in Euro" .value=${item.price} />
        <input type="text" name="availability" id="availability" placeholder="Availability Information" .value=${item.availability} />
        <input type="text" name="type" id="type" placeholder="Item Type" .value=${item.type} />
        <textarea id="description" name="description" placeholder="More About The Item" rows="10" cols="50" .value=${item.description}></textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>`;
}

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const itemDetails = await getMarketDetails(id);
  render(editTemplate(itemDetails, onEdit));

  async function onEdit(data) {
    const check = Object.values(data).some((x) => x == "");
    if (check) {
      return showNotification("All fields requiered", "errorBox");
    }

    await editMarket(id, data);
    page.redirect(`/details/${id}`);
  }
}
