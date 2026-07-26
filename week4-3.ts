class Box<T> {

    item: T;

    constructor(item: T) {
        this.item = item;
    }
}

let numberBox = new Box<number>(100);
let stringBox = new Box<string>("Hello");

console.log(numberBox.item);
console.log(stringBox.item);