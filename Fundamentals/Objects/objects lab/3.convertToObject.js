function convertToObject(json) {
  let converted = JSON.parse(json);
  let entries = Object.entries(converted);

  for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
