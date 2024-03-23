import { deleteFact, getFactDetail } from "../data/funFacts.js";
import { getLikes, hasUserLiked, postLike } from "../data/likes.js";
import { html, render, page } from "../lib.js";
import { getUserId, isOwner } from "../util.js";

function detailsTemplate(detail, isCreator, isLogged, onDelete, totalLikes, onLike, hasLiked) {
  return html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${detail.imageUrl} alt="example1" />
        <p id="details-category">${detail.category}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p id="description">${detail.description}</p>
            <p id="more-info">${detail.moreInfo}</p>
          </div>

          <h3>Likes:<span id="likes">${totalLikes}</span></h3>

          ${isLogged
            ? html`<div id="action-buttons">
                ${isCreator 
                  ? html`
                  <a href="/edit/${detail._id}" id="edit-btn">Edit</a> 
                  <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>` 
                  :  hasLiked 
                      ? null 
                      : html`
                      <a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a>`}
              </div>`
            : null}
        </div>
      </div>
    </section>
  `;
}

let context = null
export async function showDetailsView(ctx) {
  context = ctx;
  const id = ctx.params.id;
  const factDetails = await getFactDetail(id);

  const isCreator = isOwner(factDetails._ownerId);
  const isLogged = getUserId();
  const hasLiked = await hasUserLiked(id, getUserId());
  const totalLikes = await getLikes(id);

  render(detailsTemplate(factDetails, isCreator, isLogged, onDelete, totalLikes, onLike, hasLiked));

  async function onDelete() {
    const isConfirmed = confirm("Are you sure?");
    if (isConfirmed) {
      await deleteFact(id);
      page.redirect("/dashboard");
    }
  }
  
  async function onLike() {
      await postLike(id);
      showDetailsView(context);
  }
}
