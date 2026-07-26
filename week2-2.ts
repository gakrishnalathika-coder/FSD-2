// Default Parameter
function greet(name: string = "Student"): void {
    console.log("Hello", name);
}

// Optional Parameter
function display(name: string, age?: number): void {
    console.log("Name:", name);

    if (age !== undefined) {
        console.log("Age:", age);
    }
}

// Testing
greet();
greet("Ravi");

display("Sita");
display("Anu", 19);