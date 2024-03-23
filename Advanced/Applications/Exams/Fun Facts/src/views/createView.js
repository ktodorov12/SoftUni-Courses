import { addAFact } from "../data/funFacts.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function templateForCreateForm() {
  return html`
  <section id="create">
    <div class="form">
      <h2>Add Fact</h2>
      <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input type="text" name="category" id="category" placeholder="Category" />
        <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
        <textarea id="description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
        <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10" cols="50"></textarea>
        <button type="submit">Add Fact</button>
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
    return alert("All field requiered");
  }

  const body = {
    category: data.category,
    imageUrl: data["image-url"],
    description: data.description,
    moreInfo: data["additional-info"]
  }

  await addAFact(body);
  page.redirect("/dashboard");
}
