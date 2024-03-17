import { html, render, page, classMap } from "../lib.js";
import { furnitureDetails, updateFurniture } from "../service/dataService.js";
import { formValidator } from "../utility/formValidator.js";
import { createSubmitHandler } from "../utility/userHelper.js";

function editTemplate(error, item, firstInput) {
  return html`
    <div class="row space-top">
      <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
      </div>
    </div>
    <form @submit=${createSubmitHandler(onEdit)}>
      <div class="row space-top">
        <div class="col-md-4">
          <div class="form-group">
            <label class="form-control-label" for="new-make">Make</label>
            <input class="form-control ${firstInput ? "" : classMap(error.make)}" id="new-make" type="text" name="make" value=${item.make}
            />
          </div>
          <div class="form-group has-success">
            <label class="form-control-label" for="new-model">Model</label>
            <input class="form-control ${firstInput ? "" : classMap(error.model)}" id="new-model" type="text" name="model" value=${item.model}
            />
          </div>
          <div class="form-group has-danger">
            <label class="form-control-label" for="new-year">Year</label>
            <input class="form-control ${firstInput ? "" : classMap(error.year)}" id="new-year" type="number" name="year" value=${item.year}
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="new-description">Description</label>
            <input class="form-control ${firstInput ? "" : classMap(error.description)}" id="new-description" type="text" name="description" value=${item.description}
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label class="form-control-label" for="new-price">Price</label>
            <input class="form-control ${firstInput ? "" : classMap(error.price)}" id="new-price" type="number" name="price" value=${item.price}
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="new-image">Image</label>
            <input class="form-control ${firstInput ? "" : classMap(error.img)}" id="new-image" type="text" name="img" value=${item.img} />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="new-material">Material (optional)</label>
            <input class="form-control" id="new-material" type="text" name="material" value=${item.material}
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Edit" />
        </div>
      </div>
    </form>
  `;
}

let context = {}
export async function showEditView(ctx) {
  context = ctx
  const item = await furnitureDetails(context.params.id);
  context.item = item;
  render(editTemplate(null, context.item, true));
}

async function onEdit(data) {
  let validatorResult = formValidator(data);

  if (validatorResult !== null) {
    return render(editTemplate(validatorResult, context.item));
  }

  updateFurniture(context.item._id, data);
  page.redirect("/dashboard");
}