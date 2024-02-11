class List {
  elements = [];
  size = 0;

  add(element) {
    this.elements.push(element);
    this.elements.sort((a, b) => a - b);
    this.size++;
  }

  remove(index) {
    if (this.elements[index] != undefined) {
      this.elements.splice(index, 1);
      this.size--;
    }
  }

  get(index) {
    if (this.elements[index] != undefined) {
      return this.elements[index];
    }
  }
}

let list = new List();

list.add(5);
list.add(3);
console.log(list.get(1));
list.remove(0);
console.log(list.get(1));
console.log(list.size);
