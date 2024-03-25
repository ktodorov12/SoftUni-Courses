import { addShoe } from "../data/shoes.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function templateForCreateForm() {
  return html`<section id="create">
    <div class="form">
      <h2>Add item</h2>
      <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
        <input type="text" name="model" id="shoe-model" placeholder="Model" />
        <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
        <input type="text" name="release" id="shoe-release" placeholder="Release date" />
        <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
        <input type="text" name="value" id="shoe-value" placeholder="Value" />

        <button type="submit">post</button>
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
    return alert("All fields requiered");
  }

  await addShoe(data);
  page.redirect("dashboard");
}
