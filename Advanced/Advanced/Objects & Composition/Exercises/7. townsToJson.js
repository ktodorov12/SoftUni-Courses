function towns(input) {
  input.shift();
  let cities = [];
  for (let el of input) {
    let tokens = el.split("|");
    let town = tokens[1].trim();
    let lat = Number(tokens[2].trim()).toFixed(2);
    let long = Number(tokens[3].trim()).toFixed(2);
    cities.push(factory(town, lat, long));
  }

  console.log(JSON.stringify(cities));

  function factory(town, lat, long) {
    let obj = {
      Town: town,
      Latitude: Number(lat),
      Longitude: Number(long),
    };
    return obj;
  }
}

towns([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
