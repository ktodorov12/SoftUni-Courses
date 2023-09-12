function triangle(number) {
  for (let row = 1; row <= number; row++) {
    let tri = "";
    for (let line = 1; line <= row; line++) {
      tri += `${row} `;
    }
    console.log(tri);
  }
}

triangle(3);
