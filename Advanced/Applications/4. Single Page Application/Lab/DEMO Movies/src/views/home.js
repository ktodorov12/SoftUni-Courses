import { showView } from "../nav.js";
import { html, render } from "../lit.js";
import { getMovies } from "../data/movies.js";

const homeTemplate = (movies) => html`
  <h1>Movies home</h1>
  <p>Welcome to Movies</p>
  <ul>
    ${movies.map(moviePreview)}
  </ul>
`;

const moviePreview = (movie) => html` 
<li>
  <a
    @click=${(event) => {
      debugger
      event.preventDefault();
      showView("details", movie);
    }}
    href="/details/${movie._id}>"
    >${movie.title}</a
  >
</li>`;

export async function showHomeView() {
  const movies = await getMovies();
  render(homeTemplate(movies));
}