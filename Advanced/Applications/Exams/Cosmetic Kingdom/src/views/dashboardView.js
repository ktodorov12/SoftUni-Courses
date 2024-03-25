import { getAllProducts } from "../data/products.js";
import { html, render } from "../lib.js";

function dashboardTemplate(allPrdocuts) {
  return html`
    <h2>Products</h2>
    <section id="dashboard">
      ${allPrdocuts.length > 0
          ? allPrdocuts.map(productTemplate)
          : html`<h2>No products yet.</h2>`}
    </section>
  `;
}

function productTemplate(product) {
  return html`      
<div class="product">
  <img src=${product.imageUrl} alt="example1" />
  <p class="title">${product.name}</p>
  <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
  <a class="details-btn" href="/details/${product._id}">Details</a>
</div>`;
}

export async function showDashboardView() {
  const allPrdocuts = await getAllProducts();
  render(dashboardTemplate(allPrdocuts));
}
