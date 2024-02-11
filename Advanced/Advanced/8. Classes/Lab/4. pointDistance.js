class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(point1, point2) {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;

    return Math.sqrt(dx ** 2 + dy ** 2);
  }
}
