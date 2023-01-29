function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString);
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird foods";
  }
}

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  length: number;
}

// function getTrueShape(shape: Shape) {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius;
//   }
//   return shape.side * shape.side;
// }

type Shape = Circle | Square | Rectangle;
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.width * shape.length;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
