class User {
  private _courseCount = 1;

  private readonly city: string = "Jaipur";
  constructor(
    public email: string,
    public name: string,
    private userID: string
  ) {}

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }
  get courseCount(): number {
    return this._courseCount;
  }
  private deleteToken() {
    console.log("Token Deleted");
  }
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

const Anmol = new User("afssA@.com", "afas", "fas-dfasdfa-fa");
