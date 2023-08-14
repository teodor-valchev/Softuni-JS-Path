function run() {
  let rect = rectangle(4, 5, "red");
  console.log(rect.width);
  console.log(rect.height);
  console.log(rect.color);
  console.log(rect.calcArea());
}

function rectangle(width, height, color) {
  let rect = {
    width,
    height,
    color: color[0].charAt(0).toUpperCase() + color.slice(1),
    calcArea() {
      return width * height;
    },
  };
  return rect;
}
rectangle(run());
