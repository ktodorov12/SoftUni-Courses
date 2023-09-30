const reversing = (n, array) =>
  console.log((reversed = array.slice(0, n).reverse().join(" ")));

reversing(3, [10, 20, 30, 40, 50]);

// longer solution;
function revTwo(n, array) {
  let empty = [];
  for (let j = n - 1; j >= 0; j--) {
    empty.push(array[j]);
  }
  let joined = empty.join(" ");
  console.log(joined);
}
revTwo(3, [10, 20, 30, 40, 50]);
revTwo(4, [-1, 20, 99, 5]);
