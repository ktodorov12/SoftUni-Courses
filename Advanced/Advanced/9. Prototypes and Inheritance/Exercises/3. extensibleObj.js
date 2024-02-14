function extensibleObject() {
  const obj = {
    extend(template) {
      let keys = Object.keys(template);

      for (let key of keys) {
        if (typeof template[key] == "function") {
          let proto = Object.getPrototypeOf(template);
          Object.assign(proto, { [key]: template[key] });
        } else {
          Object.assign(this, { [key]: template[key] });
        }
      }
    },
  };
  return obj;
}

let template = {
  extensinMethod: function () {
    console.log("yes");
  },
  value: 1,
  p: 1,
};

let obj = extensibleObject();
obj.extend(template);
console.log(obj);
