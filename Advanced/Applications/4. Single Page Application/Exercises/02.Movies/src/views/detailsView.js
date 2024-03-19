import { detailsMovie, getNumberOfLikes } from "../api/dataService.js";
import { html, render } from "../util/lib.js";
import { getUserData, hasOwner } from "../util/userHelper.js";

function detailsTemplate(movie, isOwner, likes) {
  return html`
    <section id="movie-example" class="view-section">
      <div class="container">
        <div class="row bg-light text-dark">
          <h1>Movie title: ${movie.title}</h1>

          <div class="col-md-8">
            <img class="img-thumbnail" src="${movie.img}" alt="Movie" />
          </div>
          <div class="col-md-4 text-center">
            <h3 class="my-3">Movie Description</h3>
            <p>${movie.description}</p>
            ${isOwner
              ? html` 
                <a class="btn btn-danger" href="/delete/${movie._id}">Delete</a>
                <a class="btn btn-warning" href="/edit/${movie._id}">Edit</a>`
              : getUserData() ? 
              html`<a class="btn btn-primary" href="/like/${movie._id}">Like</a>` 
              : ""}
            <span class="enrolled-span">Liked ${likes}</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

export async function showDetailsView(ctx) {
  const id = ctx.params.id;
  const movie = await detailsMovie(id);
  const isOwner = hasOwner(movie._ownerId);
  const likes = await allLikes(id);
  render(detailsTemplate(movie, isOwner, likes));
}

async function allLikes(id) {
  return await getNumberOfLikes(id);
}
