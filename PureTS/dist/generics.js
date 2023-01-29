"use strict";
const score = [];
const names = [];
//We can use union, but we don't know what it will be
// We can check using typeof but still bad practice
function identityOne(val) {
    return val;
}
//We can use forbidden method
function identityTwo(val) {
    return val;
}
/*We can declare type after function name and then use .
passed value type is logged
*/
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({});
const getMoreSearchProducts = (products) => {
    //do dome operation
    const myIndex = 3;
    return products[myIndex];
};
