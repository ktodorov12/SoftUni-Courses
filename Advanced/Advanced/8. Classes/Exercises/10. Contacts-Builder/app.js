class Contact {
  firstName;
  lastName;
  phone;
  email;
  _online = false;

  constructor(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
  }

  get online() {
    return this._online;
  }

  set online(value) {
    this._online = value;

    if (this.divOne) {
      this.divOne.className = this._online ? "title online" : "title";
    }
  }

  render(id) {
    document.getElementById(id).appendChild(this._createArticle());
  }

  _createEl(type, content = "") {
    let el = document.createElement(type);
    el.textContent = content;
    return el;
  }

  _createArticle() {
    let article = document.createElement("article");

    this.divOne = this._createEl("div", `${this.firstName} ${this.lastName}`);
    this.divOne.className = this.online ? "title online" : "title";
    let buttonOne = this._createEl("button", "\u2139");
    buttonOne.addEventListener("click", () => {
      if (divTwo.style.display == "block") {
        divTwo.style.display = "none";
      } else {
        divTwo.style.display = "block";
      }
    });
    this.divOne.appendChild(buttonOne);

    let divTwo = this._createEl("div");
    divTwo.classList.add("info");
    let spanOne = this._createEl("span", `${"\u260E"} ${this.phone}`);
    let spanTwo = this._createEl("span", `${"\u2709"} ${this.email}`);
    divTwo.appendChild(spanOne);
    divTwo.appendChild(spanTwo);
    divTwo.style.display = "none";

    article.appendChild(this.divOne);
    article.appendChild(divTwo);

    return article;
  }
}

let contacts = [
  new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
  new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
  new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com"),
];

contacts.forEach((c) => c.render("main"));
// After 1 second, change the online status to true
setTimeout(() => (contacts[1].online = true), 100);