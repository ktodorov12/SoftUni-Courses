function towns(info) {
  let city = info.map((current) => {
    let tokens = current.split(" | ");
    let town = tokens[0];
    let lat = Number(tokens[1]);
    let long = Number(tokens[2]);
    return {
      town: town,
      lat: lat.toFixed(2),
      long: long.toFixed(2),
    };
  });

  city.forEach((x) => console.log(x));
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
