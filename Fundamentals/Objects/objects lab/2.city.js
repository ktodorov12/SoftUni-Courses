function city(info) {
  let keys = Object.keys(info);

  for (let value of keys) {
    console.log(`${value} -> ${info[value]}`);
  }
}

city({
  name: "Plovdiv",

  area: 389,

  population: 1162358,

  country: "Bulgaria",

  postCode: "4000",
});
