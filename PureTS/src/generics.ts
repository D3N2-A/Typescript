const score: Array<number> = [];
const names: Array<string> = [];

//We can use union, but we don't know what it will be
// We can check using typeof but still bad practice
function identityOne(val: boolean | number): boolean | number {
  return val;
}

//We can use forbidden method

function identityTwo(val: any): any {
  return val;
}

/*We can declare type after function name and then use .
passed value type is logged
*/
function identityThree<Type>(val: Type): Type {
  return val;
}

function identityFour<T>(val: T): T {
  return val;
}

/*
We can use generics to pass interface as type
*/

interface Bottle {
  brand: string;
  type: number;
}

// identityFour<Bottle>({});



const getMoreSearchProducts = <T,>(products: T[]): T => {
  //do dome operation
  const myIndex = 3;
  return products[myIndex];
};


