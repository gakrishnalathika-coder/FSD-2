// Traditional Function

function multiply(a: number, b: number): number {
    return a * b;
}

// Arrow Function

const multiplyArrow = (a: number, b: number): number => {
    return a * b;
};

// Testing

console.log("Traditional:", multiply(4, 5));

console.log("Arrow:", multiplyArrow(4, 5));