function travelTime(info) {
  let destinations = {};

  for (let dest of info) {
    let [country, city, cost] = dest.split(" > ");

    if (!destinations.hasOwnProperty(country)) {
      destinations[country] = new Set();
      destinations[country][city] = cost;
    }

    if (destinations.hasOwnProperty(country)) {
      if (destinations[country].hasOwnProperty(city)) {
        let curPrice = destinations[country][city];
        if (curPrice > cost) {
          destinations[country][city] = cost;
        }
      } else {
        destinations[country][city] = cost;
      }
    }
  }

  let sorted = Object.entries(destinations).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  let objSorted = {};

  sorted.forEach((el) => {
    let entries = Object.entries(el[1]);
    let sort = entries.sort((a, b) => a[1] - b[1]);
    objSorted[el[0]] = sort.map((x) => x.join(" -> "));
  });

  Object.entries(objSorted).forEach((city) => {
    let [currCity, dest] = city;
    console.log(`${currCity} -> ${dest.join(" ")}`);
  });
}

travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
