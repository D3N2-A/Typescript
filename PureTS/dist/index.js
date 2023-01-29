"use strict";
class User {
    constructor(email, name, userID) {
        this.email = email;
        this.name = name;
        this.userID = userID;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    deleteToken() {
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
