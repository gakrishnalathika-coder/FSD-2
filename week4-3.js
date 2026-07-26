"use strict";
class Box {
    item;
    constructor(item) {
        this.item = item;
    }
}
let numberBox = new Box(100);
let stringBox = new Box("Hello");
console.log(numberBox.item);
console.log(stringBox.item);
