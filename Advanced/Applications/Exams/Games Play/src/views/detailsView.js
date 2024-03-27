import { getAllComments, postComment } from "../data/comments.js";
import { deleteGame, getGameDetails } from "../data/games.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, getUserData, getUserId, isOwner } from "../util.js";

function detailsTemplate(game, onDelete, isCreator, isLogged, allComments, canComment, onComment) {
  return html`
    <section id="game-details">
      <h1>Game Details</h1>
      <div class="info-section">
        <div class="game-header">
          <img class="game-img" src=${game.imageUrl} />
          <h1>${game.title}</h1>
          <span class="levels">MaxLevel: ${game.maxLevel}</span>
          <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>
        
        <div class="details-comments">
          <h2>Comments:</h2>
            ${allComments.length > 0
              ? html`<ul>${allComments.map(commentTemplate)}</ul>`
              : html`<p class="no-comment">No comments.</p>`}
        </div>

        ${isCreator
            ? html` 
              <div class="buttons">
                <a href="/edit/${game._id}" class="button">Edit</a>
                <a href="javascript:void(0)" @click=${onDelete} class="button">Delete</a>
              </div>`
            : null}

        </section>
        ${canComment 
            ? html`
              <article class="create-comment">
                <label>Add new comment:</label>
                <form @submit=${createSubmitHandler(onComment)} class="form">
                  <textarea name="comment" placeholder="Comment......"></textarea>
                  <input class="btn submit" type="submit" value="Add Comment">
                </form>
              </article>`
            : null}
      </div>
    </section>
  `;
}

function commentTemplate(comment) {
  debugger
  return html`
    <li class="comment">
      <p>Content: ${comment}</p>
    </li>
  `;
}

export async function showDetailsView(ctx) {
  const id = ctx.params.id;
  const gameDetail = await getGameDetails(id);

  const isCreator = isOwner(gameDetail._ownerId);
  const isLogged = getUserData();
  const allComments = (await getAllComments(id)).map(x => x.comment);
  const canComment = isLogged && !isCreator;

  render(detailsTemplate(gameDetail, onDelete, isCreator, isLogged, allComments, canComment, onComment));

  async function onDelete() {
    const isConfirmed = confirm("Are you sure?");
    if (isConfirmed) {
      await deleteGame(id);
      page.redirect("/");
    }
  }

  async function onComment({ comment }, form) {
    if(!comment) {
      return
    }
    await postComment(id, comment);
    form.reset();
    showDetailsView(ctx);
  }
}
