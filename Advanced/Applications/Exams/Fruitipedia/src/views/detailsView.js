import { delFruit, getFruitDetails } from "../data/fruits.js";
import { html, render, page } from "../lib.js";
import { isOwner } from "../util.js";

function detailsTemplate(fruit, onDelete) {
  return html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${fruit.imageUrl} alt="example1" />
        <p id="details-title">${fruit.name}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p>${fruit.description}</p>
            <p id="nutrition">Nutrition</p>
            <p id="details-nutrition">${fruit.nutrition}</p>
          </div>
          
          <div id="action-buttons">
          ${fruit.hasOwner 
            ? html`
                <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
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
  const fruitDetails = await getFruitDetails(id);
  fruitDetails.hasOwner = isOwner(fruitDetails._ownerId);
  render(detailsTemplate(fruitDetails, onDelete));

  async function onDelete() {
    const isConfirmed = confirm("Are you sure?");
    if (isConfirmed) {
      await delFruit(id);
      page.redirect("/dashboard");
    }
  }
}
