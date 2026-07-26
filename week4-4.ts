function printValue<T>(value: T): T {
    return value;
}

console.log(printValue<number>(25));
console.log(printValue<string>("TypeScript"));