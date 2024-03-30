import { deleteItem, getMarketDetails } from "../data/market.js";
import { html, render, page } from "../lib.js";
import { getUserData, getUserId, isOwner } from "../util.js";

function detailsTemplate(item, hasOwner, onDelete) {
  return html`
    <section id="details">
      <div id="details-wrapper">
        <div>
          <img id="details-img" src=${item.imageUrl} alt="example1" />
          <p id="details-title">${item.item}</p>
        </div>
        <div id="info-wrapper">
          <div id="details-description">
            <p class="details-price">Price: €${item.price}</p>
            <p class="details-availability">${item.availability}</p>
            <p class="type">Type: ${item.type}</p>
            <p id="item-description">${item.description}</p>
          </div>
          
          <div id="action-buttons">
          ${hasOwner 
            ? html`
              <a href="/edit/${item._id}" id="edit-btn">Edit</a>
              <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>`
            : null}
          </div>
        </div>
      </div>
    </section>
  `;
}

export async function showDetailsView(ctx) {
  const id = ctx.params.id;
  const itemDetails = await getMarketDetails(id);
  const hasOwner = isOwner(itemDetails._ownerId);
  render(detailsTemplate(itemDetails, hasOwner, onDelete))


  async function onDelete() {
    const isConfirmed = confirm("Are you sure?");
    if (isConfirmed) {
      await deleteItem(id);
      page.redirect("/dashboard");
    }
  }
}
