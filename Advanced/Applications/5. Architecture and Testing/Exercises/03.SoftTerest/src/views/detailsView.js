import { html, render } from "../lib.js";
import { detailsIdea } from "../services/dataService.js";
import { hasOwner } from "../utility/userHelper.js";

function detailsTemplate(idea) {
  return html`
    <div class="container home some">
      <img class="det-img" src="${idea.img}" />
      <div class="desc">
        <h2 class="display-5">${idea.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${idea.description}</p>
      </div>
      <div class="text-center">
      ${hasOwner(idea._ownerId) 
        ? html` <a class="btn detb" href="/delete/${idea._id}">Delete</a>` 
        : ""}</div>
    </div>
  `;
}

export async function showDetails(ctx) {
  const id = ctx.params.id;
  const details = await detailsIdea(id);
  render(detailsTemplate(details));
}
