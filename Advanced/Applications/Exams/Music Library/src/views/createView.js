import { addAlbum } from "../data/albums.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function templateForCreateForm() {
  return html`
    <section id="create">
      <div class="form">
        <h2>Add Album</h2>
        <form @submit=${createSubmitHandler(onCreate)} class="create-form">
          <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
          <input type="text" name="album" id="album-album" placeholder="Album" />
          <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
          <input type="text" name="release" id="album-release" placeholder="Release date" />
          <input type="text" name="label" id="album-label" placeholder="Label" />
          <input type="text" name="sales" id="album-sales" placeholder="Sales" />

          <button type="submit">post</button>
        </form>
      </div>
    </section>
  `;
}

export function showCreateView() {
  render(templateForCreateForm());
}

async function onCreate(data) {
  const check = Object.values(data).some(x => x == "");
  if (check) {
    return alert("All field requiered");
  }

  await addAlbum(data);
  page.redirect("/dashboard");
}
