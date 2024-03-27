import { editGame, getGameDetails } from "../data/games.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function editTemplate(game, onEdit) {
  return html` <section id="edit-page" class="auth">
    <form @submit=${createSubmitHandler(onEdit)} id="edit">
      <div class="container">
        <h1>Edit Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" value="" .value=${game.title} />

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" value="" .value=${game.category} />

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" value="" .value=${game.maxLevel} />

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" value="" .value=${game.imageUrl} />

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary" .value=${game.summary} ></textarea>
        <input class="btn submit" type="submit" value="Edit Game" />
      </div>
    </form>
  </section>`;
}

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const gameDetails = await getGameDetails(id);
  render(editTemplate(gameDetails, onEdit));

  async function onEdit(data) {
    const check = Object.values(data).some((x) => x == "");
    if (check) {
      return alert("All fields requiered");
    }

    await editGame(id, data);
    page.redirect(`/details/${id}`);
  }
}
