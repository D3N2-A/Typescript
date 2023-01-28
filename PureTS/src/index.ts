console.log("typescript is here still");

class User {
  readonly city: string = "Jaipur";
  constructor(email: string, name: string, private userID: string) {}
}

const Anmol = new User("afssA@.com", "afas", "fas-dfasdfa-fa");
Anmol.city;
