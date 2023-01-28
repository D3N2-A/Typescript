const user = {
  name: "Anmol",
  email: "anmol@dev.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}
const Nija = { name: "Anmol", isPaid: false, email: "adgains@gmail.com" };

createUser(Nija);

function createCourse(): {
  name: string;
  price: number;
} {
  return { name: "reactJs", price: 232 };
}

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCard?: number;
};

let myUser: User = {
  _id: crypto.randomUUID(),
  name: "Anmol",
  email: "anmol@dev.com",
  isActive: true,
};
