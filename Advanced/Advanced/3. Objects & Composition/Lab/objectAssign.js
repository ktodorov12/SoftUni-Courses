function objectAssign(target, ...source) {
  for (let src of source) {
    for (let el in src) {
      target[el] = src[el];
    }
  }
  return target;
}

// const obj1 = { a: 0, b: { c: 0 } };
// const shallowObj1 = objectAssign({}, obj1);

// obj1.a = 1;

// console.log(`${obj1.a} : ${shallowObj1.a}`);

// const obj2 = { a: 2, c: { b: 1 } };
// const shallowObj2 = objectAssign({}, obj1, obj2);

// console.log(shallowObj2);

// target object itself is changed:
// it changes it becouse of its refference type;
// const obj = objectAssign(obj1, obj2);

// console.log(obj);
// console.log(obj1);

// copying symbols;

// const o1 = { a: 1 };
// const o2 = { [Symbol("foo")]: 2 };

// const o = objectAssign({}, o1, o2);

// console.log(o);

// primitives;

// let v1 = 1;
// let v2 = 2;

// const v = objectAssign({}, v1, v2);

// console.log(v);

const target = {
    foo: 1,
    get bar() {
      return 2;
    },
  };

let copy = objectAssign({}, target);
console.log(copy);