import { getAllMovies } from "../api/dataService.js";
import { html, render } from "../util/lib.js";
import { getUserData } from "../util/userHelper.js";

function homeTemplate(movies) {
  return html`
    <section id="home-page" class="view-section">
      <div class="jumbotron jumbotron-fluid text-light" style="background-color: #343a40">
        <img
          src="https://slicksmovieblog.files.wordpress.com/2014/08/cropped-movie-banner-e1408372575210.jpg"
          class="img-fluid"
          alt="Responsive image"
          style="width: 150%; height: 200px" />
        <h1 class="display-4">Movies</h1>
        <p class="lead">Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.</p>
      </div>
    </section>

    <h1 class="text-center">Movies</h1>
        ${
          getUserData()
            ? html`<section id="add-movie-button" class="user">
                <a href="/create" class="btn btn-warning">Add Movie</a>
              </section>`
            : ""
        }

        <section id="movie">
          <div class="mt-3">
            <div class="row d-flex d-wrap">
              <ul id="movies-list" class="card-deck d-flex justify-content-center">
                    ${movies.map(movieTemplate)}
              </ul>
            </div>
          </div>
        </section>
      </section>
  `;
}

function movieTemplate(movie) {
  return html`
    <li class="card mb-4">
      <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400" />
      <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
        <a href="/details/${movie._id}"> </a>
      </div>
      ${getUserData()
        ? html`<div class="card-footer">
            <a href="/details/${movie._id}" class="btn btn-info">Details</a>
          </div>`
        : ""}
    </li>
  `;
}

export async function showHomeView() {
  const movies = await getAllMovies();
  render(homeTemplate(movies));
}
