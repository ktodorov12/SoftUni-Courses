function createSortedList() {
  collection = [];
  let list = {
    add(el) {
      collection.push(el);
      this.size++;
      collection.sort((a, b) => a - b);
    },
    remove(index) {
      if (collection[index] !== undefined) {
        collection.splice(index, 1);
        this.size--;
      }
    },
    get(index) {
      if (collection[index] !== undefined) return collection[index];
    },
    size: 0,
  };

  return list;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.get(4));
