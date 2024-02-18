class BookClub {
  books = [];
  members = [];

  constructor(library) {
    this.library = library;
  }

  addBook(title, author) {
    const found = this._find(title);

    if (found) {
      return `The book "${title}" by ${author} is already in ${this.library} library.`;
    }

    this.books.push({ title, author });
    return `The book "${title}" by ${author} has been added to ${this.library} library.`;
  }

  addMember(memberName) {
    if (this.members.includes(memberName)) {
      return `Member ${memberName} is already a part of the book club.`;
    }

    this.members.push(memberName);
    return `Member ${memberName} has been joined to the book club.`;
  }

  assignBookToMember(memberName, bookTitle) {
    if (!this.members.includes(memberName)) {
      throw new Error(`Member ${memberName} not found.`);
    }

    const found = this._find(bookTitle);
    if (!found) {
      throw new Error(`Book "${bookTitle}" not found.`);
    }

    const indx = this.books.indexOf(found);
    this.books.splice(indx, 1);
    return `Member ${memberName} has been assigned the book "${found.title}" by ${found.author}.`;
  }

  generateReadingReport() {
    if (this.members.length == 0) {
      return "No members in the book club.";
    }

    if (this.books.length == 0) {
      return "No available books in the library.";
    }

    return (
      `Available Books in ${this.library} library:\n` +
      this.books.map((info) => `"${info.title}" by ${info.author}`).join("\n")
    );
  }

  _find(title) {
    return this.books.find((book) => book.title == title);
  }
}

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "1984"));
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.generateReadingReport());
