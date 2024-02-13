function solve(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,

    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
      [this.firstName, this.lastName] = value.split(" ");
    },
  };
}
