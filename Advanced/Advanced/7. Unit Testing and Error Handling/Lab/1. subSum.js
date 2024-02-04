function sum(array, start, end) {
  if (!Array.isArray(array)) {
    return NaN;
  }

  if (start < 0) {
    start = 0;
  }

  if (end > array.length - 1) {
    end = array.length - 1;
  }

  let sum = 0;

  for (let i = start; i <= end; i++) {
    let currEl = array[i];

    if (typeof currEl != "number") {
      return NaN;
    }

    sum += currEl;
  }

  return sum;
}
