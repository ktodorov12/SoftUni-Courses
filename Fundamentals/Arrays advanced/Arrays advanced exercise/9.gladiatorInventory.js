function gladiatorInventory(input) {
  let inventory = input[0].split(" ");

  for (let i = 1; i < input.length; i++) {
    let [command, weapon, upgrade] = input[i].split(" ");

    switch (command) {
      case "Buy":
        if (!inventory.includes(weapon)) {
          inventory.push(weapon);
        }
        break;

      case "Trash":
        if (inventory.includes(weapon)) {
          let indexWeapon = inventory.indexOf(weapon);
          inventory.splice(indexWeapon, 1);
        }
        break;

      case "Repair":
        if (inventory.includes(weapon)) {
          let indexWeapon = inventory.indexOf(weapon);
          let element = inventory.splice(indexWeapon, 1);
          inventory.push(element);
        }
        break;

      case "Upgrade":
        let item = weapon.split("-");
        let newWep = item[0];
        if (inventory.includes(newWep)) {
          let indexWeapon = inventory.indexOf(newWep);
          let up = `${newWep}:${upgrade}`;
          inventory.splice(indexWeapon + 1, 0, up);
        }
        break;
    }
  }
  console.log(inventory.join(" "));
}

gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD- Steel",
]);
