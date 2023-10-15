function sortArrayYwoCriteria(array) {
  let sorted = array.sort((a, b) => a.length - b.length || a.localeCompare(b))
  console.log(sorted.join('\n'));
}

sortArrayYwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
