function cars(input) {
  let objCars = {};

  const commands = {
    create: (name) => (objCars[name] = {}),
    inherits: (name, parentName) => {
      objCars[name] = Object.create(objCars[parentName]);
    },
    set: (name, key, value) => (objCars[name][key] = value),
    print(name) {
      let result = [];

      for (let key in objCars[name]) {
        result.push(`${key}:${objCars[name][key]}`);
      }
      console.log(result.join(","));
    },
  };

  for (let info of input) {
    const tokens = info.split(" ");
    const command = tokens[0];
    const name = tokens[1];

    if (tokens[2] == "inherit") {
      let parentName = tokens[3];
      commands.inherits(name, parentName);
      continue;
    }

    const key = tokens[2];
    const value = tokens[3];

    commands[command](name, key, value);
  }
}

cars([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
