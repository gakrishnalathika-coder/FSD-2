"use strict";
// Traditional Function
function multiply(a, b) {
    return a * b;
}
// Arrow Function
const multiplyArrow = (a, b) => {
    return a * b;
};
// Testing
console.log("Traditional:", multiply(4, 5));
console.log("Arrow:", multiplyArrow(4, 5));
