let value: any;

value = 100;
console.log(value);

value = "Hello";
console.log(value);

value = true;
console.log(value);

let input: unknown;

input = "TypeScript";

if (typeof input === "string") {
    console.log(input.toUpperCase());
}

function greet(): void {
    console.log("Welcome");
}

greet();