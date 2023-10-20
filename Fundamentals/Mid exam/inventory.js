function inventory(info) {
  let collection = info.shift().split(", ");

  for (let i = 0; i < info.length; i++) {
    let [command, item] = info[i].split(" - ");
    let isThere = collection.includes(item);
    let position = collection.indexOf(item);

    if (command === "Craft!") {
      console.log(collection.join(", "));
      break;
    } else if (command === "Collect") {
      if (isThere === false) {
        collection.push(item);
      }
    } else if (command === "Drop") {
      if (isThere === true) {
        collection.splice(position, 1);
      }
    } else if (command === "Combine Items") {
      let upgrade = item.split(":");
      position = collection.indexOf(upgrade[0])
      isThere = collection.includes(upgrade[0]);
      if (isThere === true) {
        let newItem = upgrade[1];
        collection.splice(position + 1, 0, newItem);
      }
    } else if (command === "Renew") {
      if (isThere === true) {
        let replace = collection.splice(position, 1);
        collection.push(replace);
      }
    }
  }
}

//inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);

inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
