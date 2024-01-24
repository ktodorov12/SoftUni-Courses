function factory(list, orders) {
  let products = [];

  for (let el of orders) {
    const { template, parts } = el;
    let newObj = Object.assign({}, template)
    for (let func of parts) newObj[func] = list[func]
    products.push(newObj);
  }

  return products;
}

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },

  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },

  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};

const orders = [
  {
    template: { name: "ACME Printer" },
    parts: ["print"],
  },

  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },

  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },

  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];

const products = factory(library, orders);
console.log(products);
