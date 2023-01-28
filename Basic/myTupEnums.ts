const user: (string | number)[] = ["adf", 2324];

let tUser: [string, number, boolean];

tUser = ["safa", 21312, true];

let rgb: [number, number, number] = [255, 211, 112];

//Bad thing
type User = [number, string];
const newUser: User = [12124, "exam.dev.com"];
newUser[1] = "2342";
newUser.push(true);
