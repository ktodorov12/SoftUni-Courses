function rectangle(width, height, color) {
  color = color[0].toUpperCase() + color.slice(1);
  let object = {
    width: Number(width),
    height: Number(height),
    color: color,
  };

  object.calcArea = () => object.width * object.height;

  return object;
}

let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
