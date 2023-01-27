function addTwo(num: number): number {
  return num + 2;
  //   return "hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}
function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("Hello", "afda@agmail,com");
signUpUser("hello", "adsf", false);
let myValue = addTwo(5);
getUpper("Hello");

// function getValue(myval: number) {
//   if (myval > 5) {
//     return true;
//   }
//   return "200 OK";
// }
// Union Type

const getHello = (name: string): string => {
  return `Hello ${name}`;
};
getHello("ANmol");

const heroes = ["thor", "nig", "ironman"];
// const heroes = [1, 2, 2];

heroes.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void  {
  console.log(errmsg);
}
function handleError(errmsg: string): void {
  console.log(errmsg);
}

export {};
