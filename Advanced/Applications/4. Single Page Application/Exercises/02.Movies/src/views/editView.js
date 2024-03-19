import { html, page, render } from "../util/lib.js";
import { createSubmitHandler, detailsMovie, editMovie } from "../api/dataService.js";

function editTemplate(movie) {
  return html` 
  <section id="edit-movie" class="view-section">
    <form @submit=${createSubmitHandler(onEdit)} class="text-center border border-light p-5" action="#" method="">
      <h1>Edit Movie</h1>
      <div class="form-group">
        <label for="title">Movie Title</label>
        <input id="title" type="text" class="form-control" placeholder="Movie Title" value=${movie.title} name="title" />
      </div>
      <div class="form-group">
        <label for="description">Movie Description</label>
        <textarea class="form-control" placeholder="Movie Description..." name="description" .value=${movie.description}></textarea>
      </div>
      <div class="form-group">
        <label for="imageUrl">Image url</label>
        <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" value=${movie.img} name="img" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </section>`;
}

let movieId = null;
export async function showEditView(ctx) {
  movieId = ctx.params.id;
  const movie = await detailsMovie(movieId);
  render(editTemplate(movie));
}

async function onEdit({ description, img, title }) {
  if (!description || !img || !title) {
    return;
  }

  await editMovie(movieId, { description, img, title });
  page.redirect(`/details/${movieId}`);
}
