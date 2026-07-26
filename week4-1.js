"use strict";
var Calculator;
(function (Calculator) {
    function add(a, b) {
        return a + b;
    }
    Calculator.add = add;
    function subtract(a, b) {
        return a - b;
    }
    Calculator.subtract = subtract;
})(Calculator || (Calculator = {}));
console.log("Addition =", Calculator.add(10, 5));
console.log("Subtraction =", Calculator.subtract(10, 5));
