class InventoryManager {
  items = [];
  outOfStock = [];

  constructor(capacity) {
    this.capacity = Number(capacity);
  }

  addItem(itemName, quantity) {
    quantity = Number(quantity);

    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    if (this.items.length >= this.capacity) {
      throw new Error("The inventory is already full.");
    }

    const found = this._find(itemName);

    if (found) {
      found.quantity += quantity;
    } else {
      this.items.push({ itemName, quantity });
    }

    return `Added ${quantity} ${itemName}(s) to the inventory.`;
  }

  sellItem(itemName, quantity) {
    quantity = Number(quantity);

    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    const found = this._find(itemName);

    if (!found) {
      throw new Error(
        `The item ${itemName} is not available in the inventory.`
      );
    }

    if (quantity > found.quantity) {
      throw new Error(`Not enough ${itemName}(s) in stock.`);
    }

    found.quantity -= quantity;

    if (found.quantity == 0) {
      const indx = this.items.indexOf(found);
      this.items.splice(indx, 1)
      this.outOfStock.push(found.itemName);
    }

    return `Sold ${quantity} ${itemName}(s) from the inventory.`;
  }

  restockItem(itemName, quantity) {
    quantity = Number(quantity);

    if (quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }

    const found = this._find(itemName);

    if (found) {
      found.quantity += quantity;
    } else {
      this.items.push({ itemName, quantity });
    }

    if (this.outOfStock.includes(itemName)) {
      const indx = this.outOfStock.indexOf(itemName);
      this.outOfStock.splice(indx, 1);
    }

    return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
  }

  getInventorySummary() {
    let summary = `Current Inventory:\n`;
    summary += `${this.items.map(({ itemName, quantity }) => `${itemName}: ${quantity}`).join('\n')}`;
    if (this.outOfStock.length > 0) {
      summary += `\nOut of Stock: ${this.outOfStock.join(", ")}`;
    }
    return summary;
  }

  _find(itemName) {
    return this.items.find((item) => item.itemName == itemName);
  }
}

const manager = new InventoryManager(3);

console.log(manager.addItem("Hammer", 10));
console.log(manager.sellItem("Hammer", 10));
console.log(manager.restockItem("Chisel", 3));
console.log(manager.restockItem("Drill", 1));
console.log(manager.getInventorySummary());
