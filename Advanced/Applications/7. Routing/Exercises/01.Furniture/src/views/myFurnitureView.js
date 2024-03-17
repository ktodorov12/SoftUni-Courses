import { html, render } from "../lib.js";
import { myFurniture } from "../service/dataService.js";
import { getUserId } from "../utility/userHelper.js";


function myFurnTemplate(items) {
    return html`
<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    <div class="row space-top">
        ${items.map(singleFurnitureTemlate)}
    </div>
</div>
`
}

function singleFurnitureTemlate(item) {
    return html`
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
                <img src=${item.img} />
                <p>${item.description}</p>
                <footer>
                    <p>Price: <span>${item.price} $</span></p>
                </footer>
                <div>
                    <a href="/details/${item._id}" class="btn btn-info">Details</a>
                </div>
        </div>
    </div>
</div>
    `
}

export async function myFurnitureView() {
    const myFurn = await myFurniture(getUserId());
    render(myFurnTemplate(myFurn));
}