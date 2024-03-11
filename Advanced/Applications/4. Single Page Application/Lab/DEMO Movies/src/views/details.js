import { html, render } from "../lit.js";

const detailsTemplate = (movie) => html` 
<section id="details-view">
  <h1>${movie.title}</h1>
  <img src=${movie.img} />
  <p>${movie.description}</p>
</section>`;

export async function showDetailsView(details) {
  render(detailsTemplate(details))
}