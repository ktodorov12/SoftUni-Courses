import { deleteChar, getDetailsChar } from "../data/characters.js";
import { getLikesForChar, hasUserLiked, sendLike } from "../data/likes.js";
import { html, render, page } from "../lib.js";
import { getUserData, getUserId, isOwner } from "../util.js";

function detailsTemplate(char, isLoggedIn, isCreator, onDelete, totalLikes, isLiked) {
  return html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${char.imageUrl} alt="example1" />
        <div>
          <p id="details-category">${char.category}</p>
          <div id="info-wrapper">
            <div id="details-description">
              <p id="description">${char.description}</p>
              <p id="more-info">${char.moreInfo}</p>
            </div>
          </div>
          <h3>Is This Useful:<span id="likes">${totalLikes}</span></h3>

          ${isLoggedIn
            ? html`<div id="action-buttons">
                ${isCreator
                  ? html` <a href="/edit/${char._id}" id="edit-btn">Edit</a>
                      <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>`
                  : isLiked
                  ? null
                  : html` <a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a> `}
              </div>`
            : null}
        </div>
      </div>
    </section>
  `;
}

let context = null;
export async function showDetailsView(ctx) {
  context = ctx;
  const id = context.params.id;
  context.id = id;
  const characterDetails = await getDetailsChar(id);

  const totalLikes = await getLikesForChar(id);
  const isCreator = isOwner(characterDetails._ownerId);
  const isLoggedIn = getUserData();
  const isLiked = await hasUserLiked(id, getUserId());

  render(detailsTemplate(characterDetails, isLoggedIn, isCreator, onDelete, totalLikes, isLiked));

  async function onDelete() {
    const isConfirmed = confirm("Are you sure?");
    if (isConfirmed) {
      await deleteChar(id);
      page.redirect("/characters");
    }
  }
}

async function onLike() {
  await sendLike(context.id);
  showDetailsView(context);
}
