import { addGame } from "../data/games.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function templateForCreateForm() {
  return html` 
  <section id="create-page" class="auth">
    <form @submit=${createSubmitHandler(onCreate)} id="create">
      <div class="container">
        <h1>Create Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" placeholder="Enter game title..." />

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" placeholder="Enter game category..." />

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary"></textarea>
        <input class="btn submit" type="submit" value="Create Game" />
      </div>
    </form>
  </section>`;
}

export function showCreateView() {
  render(templateForCreateForm());
}

async function onCreate(data) {
  const check = Object.values(data).some((x) => x == "");
  if (check) {
    return alert("All fields requiered");
  }

  await addGame(data);
  page.redirect("/");
}
