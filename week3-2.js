"use strict";
class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}
let emp = new Employee("Anjali", 30000);
emp.display();
