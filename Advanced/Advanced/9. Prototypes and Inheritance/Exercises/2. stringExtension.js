(function () {
  String.prototype.ensureStart = function (str) {
    if (!this.startsWith(str)) {
      return str + this;
    }
    return `${this}`;
  };

  String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
      return this + str;
    }
    return `${this}`;
  };

  String.prototype.isEmpty = function () {
    return this.length == 0 ? true : false;
  };

  String.prototype.truncate = function (n) {
    if (this.length <= n) {
      return `${this}`;
    }

    if (n < 4) {
      return ".".repeat(n);
    }

    if (this.includes(" ")) {
      let splited = this.split(" ");
      let subst = [];

      for (let el of splited) {
        if (subst.join(" ").length + el.length + 3 > n) {
          break;
        }
        subst.push(el);
      }

      return subst.join(" ") + "...";
    } else {
      return this.slice(0, n - 3) + "...";
    }
  };

  String.format = function (string, ...params) {
    for (let i = 0; i < params.length; i++) {
      string = string.replace(`{${i}}`, params[i]);
    }

    return string;
  };
})()

let str = "my string";
str = str.ensureStart("my");
(str = str.ensureStart("hello "));
console.log((str = str.truncate(16)));
console.log((str = str.truncate(14)));
console.log((str = str.truncate(8)));
console.log((str = str.truncate(4)));
console.log((str = str.truncate(2)));
console.log(str = String.format("The {0} {1} fox", "quick", "brown"));
console.log(str = String.format("jumps {0} {1}", "dog"));
