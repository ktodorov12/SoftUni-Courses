import { createChar } from "../data/characters.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function templateForCreateForm() {
  return html` <section id="create">
    <div class="form">
      <img class="border" src="./images/border.png" alt="" />
      <h2>Add Character</h2>
      <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input type="text" name="category" id="category" placeholder="Character Type" />
        <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
        <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
        <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="2" cols="10"></textarea>
        <button type="submit">Add Character</button>
      </form>
      <img class="border" src="./images/border.png" alt="" />
    </div>
  </section>`;
}

export function showCreateView() {
  render(templateForCreateForm());
}

async function onCreate(data) {
  const check = Object.values(data).some((x) => x == "");
  if (check) {
    return alert("All field are requiered");
  }

  const body = {
    category: data.category,
    imageUrl: data["image-url"],
    description: data.description,
    moreInfo: data["additional-info"]
  }
  createChar(body);
  page.redirect("/characters")
}
