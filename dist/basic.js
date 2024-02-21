"use strict";
let myArray = [1, 2, 3, 4, 5, 6];
for (let i of myArray) {
    console.log(i);
}
//tuple
let myTuple = ["RTX600", 4512];
//interface
class Animal {
    constructor(n, c) {
        this.name = n;
        this.country = c;
    }
    getInfo() {
        return this.name + 'is from' + this.country;
    }
}
