import { addProduct } from "../data/products.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

function templateForCreateForm() {
  return html` 
  <section id="create">
    <div class="form">
      <h2>Add Product</h2>
      <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input type="text" name="name" id="name" placeholder="Product Name" />
        <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" />
        <input type="text" name="category" id="product-category" placeholder="Category" />
        <textarea id="product-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>

        <input type="text" name="price" id="product-price" placeholder="Price" />

        <button type="submit">Add</button>
      </form>
    </div>
  </section>`;
}

export function showCreateView() {
  render(templateForCreateForm());
}

async function onCreate(data) {
  const check = Object.values(data).some((x) => x == "");
  if (check) {
    return alert("All fields requiered");
  }

  await addProduct(data);
  page.redirect("/dashboard");
}
