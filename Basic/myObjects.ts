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
