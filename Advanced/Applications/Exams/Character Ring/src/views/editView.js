import { editCharDetails, getDetailsChar } from "../data/characters.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function editTemplate(char, onEdit) {
  return html`
    <section id="edit">
      <div class="form">
        <img class="border" src="./images/border.png" alt="" />
        <h2>Edit Character</h2>
        <form @submit=${createSubmitHandler(onEdit)} class="edit-form">
          <input type="text" name="category" id="category" placeholder="Character Type" .value=${char.category} />
          <input type="text" name="image-url" id="image-url" placeholder="Image URL" .value=${char.imageUrl} />
          <textarea id="description" name="description" placeholder="Description" rows="2" cols="10" .value=${char.description}></textarea>
          <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="2" cols="10" .value=${char.moreInfo}></textarea>
          <button type="submit">Edit</button>
        </form>
        <img class="border" src="./images/border.png" alt="" />
      </div>
    </section>
  `;
}

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const characterDetails = await getDetailsChar(id);
  render(editTemplate(characterDetails, onEdit));

  async function onEdit(data) {
    const check = Object.values(data).some((x) => x == "");
    if (check) {
      return alert("All fields are requiered");
    }

    const body = {
      category: data.category,
      imageUrl: data["image-url"],
      description: data.description,
      moreInfo: data["additional-info"],
    };
    
    await editCharDetails(id, body);
    page.redirect(`/details/${id}`);
  }
}
