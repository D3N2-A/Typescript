let score: number | string = 234;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let hitesh: User | Admin = { name: "Anmol", id: 322 };
hitesh = { username: "andsi", id: hitesh.id };

// function getDbId(id: number | string): void {
//   console.log(`DB id is ${id}`);
// }
function getDbId(id: number | string): void {
  if (typeof id === "string") {
    id.toLocaleLowerCase();
  }
}

getDbId(3);
getDbId(48);

//array

const data: (string | number)[] = [2, 14, 12, 12];
