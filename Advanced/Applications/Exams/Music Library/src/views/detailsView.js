import { deleteAlbum, getAlbumDetails } from "../data/albums.js";
import { addLike, getLikes, isUserGoing } from "../data/likes.js";
import { html, render, page } from "../lib.js";
import { getUserData, getUserId, isOwner } from "../util.js";

function detailsTemplate(album, onDelete, isLogged, hasOwner, isGoing, totalLikes, onLike) {
  return html`
    <section id="details">
      <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
          <img src=${album.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
          <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
          <p><strong>Album name:</strong><span id="details-album">${album.album}</span></p>
          <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
          <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
          <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${totalLikes}</span></div>

        <div id="action-buttons">
          ${isLogged 
            ? hasOwner
              ? html`          
                <a href="/edit/${album._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>`
              : isGoing 
                  ? null
                  : html`
                <a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a>`
            : null}
        </div>
      </div>
    </section>
  `;
}

let context = null
export async function showDetailsView(ctx) {
  context = ctx
  const id = ctx.params.id;
  const albumDetails = await getAlbumDetails(id);

  const isLogged = getUserData();
  const hasOwner = isOwner(albumDetails._ownerId);
  const isGoing = await isUserGoing(id, getUserId());
  const totalLikes = await getLikes(id);

  render(detailsTemplate(albumDetails, onDelete, isLogged, hasOwner, isGoing, totalLikes, onLike));

  async function onDelete() {
    const isConfirmed = confirm("Are you sure?");
    if (isConfirmed) {
      await deleteAlbum(id);
      page.redirect("/dashboard");
    }
  }

  async function onLike() {
    await addLike(id);
    showDetailsView(context)
  }
}
