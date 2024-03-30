import { addMarketData } from "../data/market.js";
import { showNotification } from "../errors.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function templateForCreateForm() {
  return html`<section id="create">
    <div class="form form-item">
      <h2>Share Your item</h2>
      <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input type="text" name="item" id="item" placeholder="Item" />
        <input type="text" name="imageUrl" id="item-image" placeholder="Your item Image URL" />
        <input type="text" name="price" id="price" placeholder="Price in Euro" />
        <input type="text" name="availability" id="availability" placeholder="Availability Information" />
        <input type="text" name="type" id="type" placeholder="Item Type" />
        <textarea id="description" name="description" placeholder="More About The Item" rows="10" cols="50"></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  </section>`;
}

export function showCreateView() {
  render(templateForCreateForm());
}

async function onCreate(data) {
  const check = Object.values(data).some((x) => x == "");
  if (check) {
    return showNotification("All fields requiered", "errorBox");
  }

  await addMarketData(data);
  page.redirect("/dashboard");
}
