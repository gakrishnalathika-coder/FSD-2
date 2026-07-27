const isPrime = (num: number): boolean => {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
};

let n = 17;
console.log(`${n} is ${isPrime(n) ? "Prime" : "Not Prime"}`);