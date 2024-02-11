class Stringer {
  constructor(string, length) {
    this.innerString = string;
    this.innerLength = Number(length);
  }

  increase(length) {
    this.innerLength += length;
  }

  decrease(length) {
    this.innerLength -= length;

    if (this.innerLength < 0) {
      this.innerLength = 0;
    }
  }

  toString() {
    if (this.innerString.length > this.innerLength) {
      const difference = this.innerString.length - this.innerLength;
      this.innerString = this.innerString.substring(0, difference);
      this.innerString += "...";
    }

    if (this.innerLength == 0) {
      return "...";
    }

    return this.innerString;
  }
}

let s = new Stringer("Viktor", 6);
s.decrease(3);
s.toString();
