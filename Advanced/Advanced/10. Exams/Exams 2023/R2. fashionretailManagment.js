class FashionRetailInventory {
  constructor(storehouse, location) {
    this.storehouse = storehouse;
    this.location = location;
    this.productStock = [];
  }

  addProduct(productName, size, qty, price) {
    const found = this._findProd(productName, size);

    if (found) {
      found.qty += qty;
      return `You added ${qty} more pieces of product ${productName} size ${size}`;
    }

    this.productStock.push({
      productName,
      size,
      qty: Number(qty),
      price: Number(price),
    });
    return `The product ${productName}, size ${size} was successfully added to the inventory`;
  }

  sendProduct(productName, size) {
    const found = this._findProd(productName, size);

    if (found == undefined) {
      throw new Error(
        `The product ${productName}, size ${size} is not in the inventory`
      );
    }

    const index = this.productStock.indexOf(found);
    this.productStock.splice(index, 1);
    return `The product ${productName}, size ${size} was successfully removed from the inventory`;
  }

  findProductsBySize(size) {
    let result = this.productStock
      .filter((prod) => prod.size == size)
      .map((prod) => `${prod.productName}-${prod.qty} pieces`);

    if (result.length == 0) {
      return `There are no products available in that size`;
    }

    return result.join(", ");
  }

  listProducts() {
    if (this.productStock.length == 0) {
      return `${this.storehouse} storehouse is empty`;
    }

    let res = [
      `${this.storehouse} storehouse in ${this.location} available products:`,
    ];

    let sorted = this.productStock
      .sort((a, b) => a.productName.localeCompare(b.productName))
      .forEach((prod) => {
        res.push(
          `${prod.productName}/Size:${prod.size}/Quantity:${prod.qty}/Price:${prod.price}$`
        );
      });

    return res.join("\n");
  }

  _findProd(name, size) {
    return this.productStock.find(
      (obj) => obj.productName === name && obj.size === size
    );
  }
}

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.findProductsBySize("M"));
console.log(storeHouse.findProductsBySize("XL"));
