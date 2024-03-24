import { editAlbum, getAlbumDetails } from "../data/albums.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function editTemplate(album, onEdit) {
  return html`
    <section id="edit">
      <div class="form">
        <h2>Edit Album</h2>
        <form @submit=${createSubmitHandler(onEdit)} class="edit-form">
          <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${album.singer} />
          <input type="text" name="album" id="album-album" placeholder="Album" .value=${album.album} />
          <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${album.imageUrl} />
          <input type="text" name="release" id="album-release" placeholder="Release date" .value=${album.release} />
          <input type="text" name="label" id="album-label" placeholder="Label" .value=${album.label} />
          <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${album.sales} />

          <button type="submit">post</button>
        </form>
      </div>
    </section>
  `;
}

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const albumDetails = await getAlbumDetails(id);
  render(editTemplate(albumDetails, onEdit));

  async function onEdit(data) {
    const check = Object.values(data).some(x => x == "");
    if (check) {
      return alert("All field requiered");
    }

    await editAlbum(id, data);
    page.redirect(`/details/${id}`);
  }
}
