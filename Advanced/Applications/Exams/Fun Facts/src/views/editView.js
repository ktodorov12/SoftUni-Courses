import { editFact, getFactDetail } from "../data/funFacts.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function editTemplate(fact, onEdit) {
  return html`
    <section id="edit">
      <div class="form">
        <h2>Edit Fact</h2>
        <form @submit=${createSubmitHandler(onEdit)} class="edit-form">
          <input type="text" name="category" id="category" placeholder="Category" .value=${fact.category} />
          <input type="text" name="image-url" id="image-url" placeholder="Image URL" .value=${fact.imageUrl} />
          <textarea id="description" name="description" placeholder="Description" rows="10" cols="50" .value=${fact.description}></textarea>
          <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10" cols="50" .value=${fact.moreInfo}></textarea>
          <button type="submit">Post</button>
        </form>
      </div>
    </section>
  `;
}

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const factDetails = await getFactDetail(id);
  render(editTemplate(factDetails, onEdit));

  async function onEdit(data) {
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

    editFact(id, body);
    page.redirect(`/details/${factDetails._id}`);
  }
}
