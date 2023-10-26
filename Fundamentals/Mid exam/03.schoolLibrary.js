function schoolLibrary(info) {
  let shelfWithBooks = info.shift().split("&");

  for (let i = 0; i < info.length; i++) {
    let [command, bookName, swapBook] = info[i].split(" | ");
    let isThere = shelfWithBooks.includes(bookName);

    if (command === "Done") {
      console.log(shelfWithBooks.join(", "));
      break;
    }

    if (command === "Add Book") {
      if (!isThere) {
        shelfWithBooks.unshift(bookName);
      }
    } else if (command === "Take Book") {
      if (isThere) {
        let indx = shelfWithBooks.indexOf(bookName);
        shelfWithBooks.splice(indx, 1);
      }
    } else if (command === "Swap Books") {
      let swapCheck = shelfWithBooks.includes(swapBook);
      if (isThere && swapCheck) {
        let firstIndx = shelfWithBooks.indexOf(bookName);
        let secondIndx = shelfWithBooks.indexOf(swapBook);

        let temp = shelfWithBooks[firstIndx];
        shelfWithBooks[firstIndx] = shelfWithBooks[secondIndx];
        shelfWithBooks[secondIndx] = temp;
      }
    } else if (command === "Insert Book") {
      if (!isThere) {
        shelfWithBooks.push(bookName);
      }
    } else if (command === "Check Book") {
      if (bookName >= 0 && bookName < shelfWithBooks.length) {
        console.log(shelfWithBooks[bookName]);
      }
    }
  }
}

schoolLibrary([
  "War and Peace&Hamlet&Ulysses&Madame Bovary",
  "Swap Books | Odd | Ulysses",
  "Check Book | 2",
  "Done",
]);
