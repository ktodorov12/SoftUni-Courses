function convertToObject(json) {
  let converted = JSON.parse(json);
  let keys = Object.keys(converted);

  for (let values of keys) {
    console.log(`${values}: ${converted[values]}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
