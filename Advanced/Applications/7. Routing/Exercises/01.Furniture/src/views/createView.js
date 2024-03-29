import { html, render, page, classMap } from "../lib.js";
import { createFurniture } from "../service/dataService.js";
import { formValidator } from "../utility/formValidator.js";
import { createSubmitHandler } from "../utility/userHelper.js";

function templateCreateView(error, firstInput) {
  return html`
    <div class="row space-top">
      <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p>Please fill all fields.</p>
      </div>
    </div>
    <form @submit=${createSubmitHandler(onCreate)}>
      <div class="row space-top">
        <div class="col-md-4">
          <div class="form-group">
            <label class="form-control-label" for="new-make">Make</label>
            <input class="form-control ${firstInput ? "" : classMap(error.make)}" id="new-make" type="text" name="make"
            />
          </div>
          <div class="form-group has-success">
            <label class="form-control-label" for="new-model">Model</label>
            <input class="form-control ${firstInput ? "" : classMap(error.model)}" id="new-model" type="text" name="model"
            />
          </div>
          <div class="form-group has-danger">
            <label class="form-control-label" for="new-year">Year</label>
            <input class="form-control ${firstInput ? "" : classMap(error.year)}" id="new-year" type="number" name="year"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="new-description">Description</label>
            <input class="form-control ${firstInput ? "" : classMap(error.description)}" id="new-description" type="text" name="description"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label class="form-control-label" for="new-price">Price</label>
            <input class="form-control ${firstInput ? "" : classMap(error.price)}" id="new-price" type="number" name="price"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="new-image">Image</label>
            <input class="form-control ${firstInput ? "" : classMap(error.img)}" id="new-image" type="text" name="img" />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="new-material">Material (optional)</label>
            <input class="form-control" id="new-material" type="text" name="material"
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Create" />
        </div>
      </div>
    </form>
  `;
}

export function showCreateView() {
  render(templateCreateView(null, true));
}

function onCreate(data) {
  let validatorResult = formValidator(data);

  if (validatorResult !== null) {
    return render(templateCreateView(validatorResult));
  }

  createFurniture(data)
  page.redirect("/dashboard");
}

