namespace Calculator {

    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }
}

console.log("Addition =", Calculator.add(10, 5));
console.log("Subtraction =", Calculator.subtract(10, 5));