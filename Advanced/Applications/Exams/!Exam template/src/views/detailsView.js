import { html, render, page } from "../lib.js";
import { getUserData, getUserId, isOwner } from "../util.js";

//TODO add html template
function detailsTemplate() {
  return html`

  `;
}

//TODO add logic
export async function showDetailsView(ctx) {
  const id = ctx.params.id;

  //TODO add delete logic
  async function onDelete() {
    // const isConfirmed = confirm("Are you sure?");
    // if (isConfirmed) {
    //   await !deleteFunction(id);
    //   page.redirect("/dashboard");
    // }
  }
}
