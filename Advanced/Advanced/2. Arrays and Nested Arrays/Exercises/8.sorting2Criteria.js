function solve(arr) {
  arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
  
  for (let el of arr) console.log(el);
}

solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
