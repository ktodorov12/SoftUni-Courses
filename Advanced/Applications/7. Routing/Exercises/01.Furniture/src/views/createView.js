import { html, render, page, classMap } from "../utility/lid.js";
import { createSubmitHandler } from "../utility/userHelper.js";

function templateCreateView() {
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
            <input class="form-control ${classMap(fieldError(errors.makeModel))}" id="new-make" type="text" name="make"
            />
          </div>
          <div class="form-group has-success">
            <label class="form-control-label" for="new-model">Model</label>
            <input class="form-control ${classMap(fieldError(errors.makeModel))}" id="new-model" type="text" name="model"
            />
          </div>
          <div class="form-group has-danger">
            <label class="form-control-label" for="new-year">Year</label>
            <input class="form-control ${classMap(fieldError(errors.year))}" id="new-year" type="number" name="year"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="new-description">Description</label>
            <input class="form-control ${classMap(fieldError(errors.description))}" id="new-description" type="text" name="description"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label class="form-control-label" for="new-price">Price</label>
            <input class="form-control ${classMap(fieldError(errors.price))}" id="new-price" type="number" name="price"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="new-image">Image</label>
            <input class="form-control ${classMap(fieldError(errors.img))}" id="new-image" type="text" name="img" />
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

let errors = {
  description: false,
  img: false,
  makeModel: false,
  material: false,
  price: false,
  year: false,
};

function onCreate({ description, img, make, material, model, price, year }) {
    let hasError = false;
    debugger

    if (make.length < 4 || model.length < 4) {
        errors.makeModel = true;
        hasError = true;
    }
    if (year < 1950 || year > 2050) {
        errors.year = true;
        hasError = true;
    }
    if (description.length < 10) {
        errors.description = true;
        hasError = true;
    }
    if (Number(price) < 0 || price == "") {
        errors.price = true;
        hasError = true;
    }
    if(!img) {
        errors.img = true;
        hasError = true;
    }

    if (hasError) {
        render(templateCreateView());
    } else {
        page.redirect("/dashboard");
    }

}

function fieldError(errorStatus) {
    if (errorStatus == true) {
        return {"is-invalid": true}
    } 
    return {"is-valid": true};
}

export function showCreateView() {
  render(templateCreateView());
}
