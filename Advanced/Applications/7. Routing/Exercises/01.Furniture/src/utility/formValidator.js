export function formValidator({ description, img, make, model, price, year }) {
    let errors = {
        description: false,
        img: false,
        make: false,
        model: false,
        material: false,
        price: false,
        year: false,
    };
    let hasError = false;

    if (make.length < 4) {
        errors.make = true;
        hasError = true
    }
    if (model.length < 4) {
        errors.model = true;
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
    if (!img) {
        errors.img = true;
        hasError = true;
    }

    if (hasError) {
        const mappedWithClasses = Object.entries(errors).map(([k, v]) => [k, fieldError(v)]);
        return Object.fromEntries(mappedWithClasses);
    }

    return null
}

function fieldError(errorStatus) {
    return {
        "is-invalid": errorStatus,
        "is-valid": !errorStatus
    }
}