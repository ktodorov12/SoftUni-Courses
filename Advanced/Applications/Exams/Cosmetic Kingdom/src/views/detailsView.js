import { addBuy, allBought, isUserBought } from "../data/buy.js";
import { delProduct, getProductDetails } from "../data/products.js";
import { html, render, page } from "../lib.js";
import { getUserData, getUserId, isOwner } from "../util.js";

function detailsTemplate(product, onDelete, isLogged, hasOwner, hasBought, totalBought, onBuy) {
  return html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${product.imageUrl} alt="example1" />
        <p id="details-title">${product.name}</p>
        <p id="details-category">Category: <span id="categories">${product.category}</span></p>
        <p id="details-price">Price: <span id="price-number">${product.price}</span>$</p>
        <div id="info-wrapper">
          <div id="details-description">
            <h4>Bought: <span id="buys">${totalBought}</span> times.</h4>
            <span>${product.description}</span>
          </div>
        </div>

        <div id="action-buttons">
          ${isLogged 
            ? hasOwner
              ? html`
                <a href="/edit/${product._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>`
              : hasBought
                ? null
                : html`
                <a href="javascript:void(0)" @click=${onBuy} id="buy-btn">Buy</a>`
            : null}
        </div>
      </div>
    </section>
  `;
}

let context = null;
export async function showDetailsView(ctx) {
  context = ctx
  const id = ctx.params.id;
  const productDetails = await getProductDetails(id);

  const isLogged = getUserData();
  const hasOwner = isOwner(productDetails._ownerId);
  const hasBought = await isUserBought(id, getUserId());
  const totalBought = await allBought(id);

  render(detailsTemplate(productDetails, onDelete, isLogged, hasOwner, hasBought, totalBought, onBuy))

  async function onDelete() {
    const isConfirmed = confirm("Are you sure?");
    if (isConfirmed) {
      await delProduct(id);
      page.redirect("/dashboard");
    }
  }

  async function onBuy() {
    await addBuy(id);
    showDetailsView(context)
  }
}
