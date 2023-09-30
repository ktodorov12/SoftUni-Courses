function rev(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let el = arr[i];
    arr[i] = arr[arr.length - (i + 1)];
    arr[arr.length - (i + 1)] = el;
  }
  console.log(arr.join(" "));
}

rev(["33", "123", "0", "dd"]);
// fast
const revTwo = (arr) => console.log(arr.reverse().join(" "));

revTwo(["33", "123", "0", "dd"])