"use strict";
// Default Parameter
function greet(name = "Student") {
    console.log("Hello", name);
}
// Optional Parameter
function display(name, age) {
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
