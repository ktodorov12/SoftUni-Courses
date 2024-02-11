function autoBavaria(cars) {
  let showroom = new Map();

  for (let el of cars) {
    let [carBrand, carModel, producedCars] = el.split(" | ");
    producedCars = Number(producedCars);

    if (!showroom.has(carBrand)) {
      showroom.set(carBrand, {});
    }

    let arrCars = showroom.get(carBrand);

    if (arrCars.hasOwnProperty(carModel)) {
      arrCars[carModel] += producedCars;
    } else {
      arrCars[carModel] = producedCars;
    }
  }

  Array.from(showroom).forEach((brand) => {
    const [name, modelsData] = brand;
    console.log(name);

    Object.entries(modelsData).forEach((model) => {
      const [name, qty] = model;
      console.log(`###${name} -> ${qty}`);
    });
  });
}

autoBavaria([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
