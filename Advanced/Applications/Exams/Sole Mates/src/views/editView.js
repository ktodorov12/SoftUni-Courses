import { edit } from "../data/fileForTaskData.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

//TODO add html template
function editTemplate() {
  return html``;
}

//TODO add logic
export async function showEditView(ctx) {
  const id = ctx.params.id;

  //TODO check this function
  async function onEdit(data) {
    const check = Object.values(data).some((x) => x == "");
    if (check) {
      return alert("All fields requiered");
    }

    await edit(id, data);
    page.redirect(`/details/${id}`);
  }
}
