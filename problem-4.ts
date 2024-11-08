// Problem 4

type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
  let area: number = 0;
  if (shape.shape === "circle") {
    area = Math.PI * shape.radius * shape.radius;
  }

  if (shape.shape === "rectangle") {
    area = shape.width * shape.height;
  }

  return area;
}
