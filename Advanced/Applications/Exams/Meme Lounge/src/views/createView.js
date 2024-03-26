import { addMeme } from "../data/memes.js";
import { showNotification } from "../errors.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function templateForCreateForm() {
  return html` 
  <section id="create-meme">
    <form @submit=${createSubmitHandler(onCreate)} id="create-form">
      <div class="container">
        <h1>Create Meme</h1>
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title" />
        <label for="description">Description</label>
        <textarea id="description" placeholder="Enter Description" name="description"></textarea>
        <label for="imageUrl">Meme Image</label>
        <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl" />
        <input type="submit" class="registerbtn button" value="Create Meme" />
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
    return showNotification("All fields requiered");
  }

  await addMeme(data);
  page.redirect("/dashboard");
}
