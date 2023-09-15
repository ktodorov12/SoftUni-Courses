function latin(n) {
  for (let i = 0; i < n; i++) {
    let firstLetter = String.fromCharCode(97 + i);
    for (let j = 0; j < n; j++) {
      let secondLetter = String.fromCharCode(97 + j);
      for (let x = 0; x < n; x++) {
        let thirdLetter = String.fromCharCode(97 + x);
        console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
      }
    }
  }
}
latin(3);
