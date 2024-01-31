function solution() {
  let string = "";

  return {
    append: (str) => (string += str),
    removeStart: (num) => (string = string.slice(num)),
    removeEnd: (num) => (string = string.slice(0, -num)),
    print: () => console.log(string),
  };
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();