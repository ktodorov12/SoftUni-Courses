import { deleteShoe, getShoeDetails } from "../data/shoes.js";
import { html, render, page } from "../lib.js";
import { isOwner } from "../util.js";

function detailsTemplate(shoe, onDelete, hasOwner) {
  return html`
    <section id="details">
      <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
          <img src=${shoe.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
          <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
          <p>Model: <span id="details-model">${shoe.model}</span></p>
          <p>Release date: <span id="details-release">${shoe.release}</span></p>
          <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
          <p>Value: <span id="details-value">${shoe.value}</span></p>
        </div>

        <div id="action-buttons">
          ${hasOwner 
            ? html`
          <a href="/edit/${shoe._id}" id="edit-btn">Edit</a> 
          <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>` 
            : null}
        </div>
      </div>
    </section>
  `;
}

export async function showDetailsView(ctx) {
  const id = ctx.params.id;
  const shoeDetails = await getShoeDetails(id);
  const hasOwner = isOwner(shoeDetails._ownerId);
  render(detailsTemplate(shoeDetails, onDelete, hasOwner));

  async function onDelete() {
    const isConfirmed = confirm("Are you sure?");
    if (isConfirmed) {
      await deleteShoe(id);
      page.redirect("/dashboard");
    }
  }
}
