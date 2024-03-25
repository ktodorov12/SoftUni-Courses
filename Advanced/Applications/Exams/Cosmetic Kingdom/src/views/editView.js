import { editProduct, getProductDetails } from "../data/products.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function editTemplate(product, onEdit) {
  return html`
    <section id="edit">
      <div class="form">
        <h2>Edit Product</h2>
        <form @submit=${createSubmitHandler(onEdit)} class="edit-form">
          <input type="text" name="name" id="name" placeholder="Product Name" .value=${product.name} />
          <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" .value=${product.imageUrl} />
          <input type="text" name="category" id="product-category" placeholder="Category" .value=${product.category} />
          <textarea id="product-description" name="description" placeholder="Description" rows="5" cols="50" .value=${product.description}></textarea>

          <input type="text" name="price" id="product-price" placeholder="Price" .value=${product.price} />
          <button type="submit">post</button>
        </form>
      </div>
    </section>
  `;
}

export async function showEditView(ctx) {
  const id = ctx.params.id;
  const productDetails = await getProductDetails(id);
  render(editTemplate(productDetails, onEdit));

  async function onEdit(data) {
    const check = Object.values(data).some((x) => x == "");
    if (check) {
      return alert("All fields requiered");
    }

    await editProduct(id, data);
    page.redirect(`/details/${id}`);
  }
}
