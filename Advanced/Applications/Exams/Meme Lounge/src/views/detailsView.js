import { deleteMeme, getMemeDetails } from "../data/memes.js";
import { html, render, page } from "../lib.js";
import { getUserData, isOwner } from "../util.js";

function detailsTemplate(meme, onDelete, isLogged, hasOwner) {
  return html`
    <section id="meme-details">
      <h1>Meme Title: ${meme.title}</h1>
      <div class="meme-details">
        <div class="meme-img">
          <img alt="meme-alt" src=${meme.imageUrl} />
        </div>
        <div class="meme-description">
          <h2>Meme Description</h2>
          <p>${meme.description}</p>

          ${isLogged 
            ? hasOwner
              ? html`
                <a class="button warning" href="/edit/${meme._id}">Edit</a>
                <button @click=${onDelete} class="button danger">Delete</button>`
              : null
            : null}
        </div>
      </div>
    </section>
  `;
}

export async function showDetailsView(ctx) {
  const id = ctx.params.id;
  const memeDetails = await getMemeDetails(id);
  
  const isLogged = getUserData();
  const hasOwner = isOwner(memeDetails._ownerId);

  render(detailsTemplate(memeDetails, onDelete, isLogged, hasOwner))

  async function onDelete() {
    const isConfirmed = confirm("Are you sure?");
    if (isConfirmed) {
      await deleteMeme(id);
      page.redirect("/dashboard");
    }
  }
}
