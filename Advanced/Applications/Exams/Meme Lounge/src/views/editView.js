import { editMeme, getMemeDetails } from "../data/memes.js";
import { showNotification } from "../errors.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function editTemplate(meme, onEdit) {
  return html` 
  <section id="edit-meme">
    <form @submit=${createSubmitHandler(onEdit)} id="edit-form">
      <h1>Edit Meme</h1>
      <div class="container">
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title} />
        <label for="description">Description</label>
        <textarea id="description" placeholder="Enter Description" name="description" .value=${meme.description} ></textarea>
        <label for="imageUrl">Image Url</label>
        <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl} />
        <input type="submit" class="registerbtn button" value="Edit Meme" />
      </div>
    </form>
  </section>`;
}

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const memeDetails = await getMemeDetails(id);

  render(editTemplate(memeDetails, onEdit));

  async function onEdit(data) {
    const check = Object.values(data).some((x) => x == "");
    if (check) {
      return showNotification("All fields requiered", "errorBox");
    }

    await editMeme(id, data);
    page.redirect(`/details/${id}`);
  }
}
