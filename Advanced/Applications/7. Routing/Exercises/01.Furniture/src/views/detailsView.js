import { furnitureDetails } from "../service/dataService.js";
import { html, render } from "../utility/lid.js";
import { hasOwner } from "../utility/userHelper.js";

function detailsTemplate(item) {
  return html` 
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src=/ + ${item.img} />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${item.make}</span></p>
                <p>Model: <span>${item.model}</span></p>
                <p>Year: <span>${item.year}</span></p>
                <p>Description: <span>${item.description}</span></p>
                <p>Price: <span>${item.price}</span></p>
                <p>Material: <span>${item.material}</span></p>
                <div>
                    ${
                      hasOwner(item._ownerId) == true
                        ? html`<a href="/edit/:id" class="btn btn-info">Edit</a>
                            <a href="/delete/:id" class="btn btn-red">Delete</a>`
                        : ""
                    }
                </div>
            </div>
        </div>
    </div>
    `;
}


export async function showDetails(ctx) {
  const item = await furnitureDetails(ctx.params.id);
  render(detailsTemplate(item));
}
