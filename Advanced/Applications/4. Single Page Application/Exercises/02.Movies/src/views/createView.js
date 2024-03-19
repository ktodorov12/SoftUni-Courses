import { createMovie, createSubmitHandler } from "../api/dataService.js";
import { html, page, render } from "../util/lib.js";

function templateCreate() {
  return html` <section id="add-movie" class="view-section">
    <form @submit=${createSubmitHandler(onCreate)} id="add-movie-form" class="text-center border border-light p-5" action="#" method="">
      <h1>Add Movie</h1>
      <div class="form-group">
        <label for="title">Movie Title</label>
        <input id="title" type="text" class="form-control" placeholder="Title" name="title" value="" />
      </div>
      <div class="form-group">
        <label for="description">Movie Description</label>
        <textarea class="form-control" placeholder="Description" name="description"></textarea>
      </div>
      <div class="form-group">
        <label for="imageUrl">Image url</label>
        <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" name="img" value="" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </section>`;
}

export function showCreateView() {
  render(templateCreate());
}

async function onCreate({ title, description, img }) {
  if (!title || !description || !img) {
    return;
  }

  await createMovie({ title, description, img });
  page.redirect("/home");
}
