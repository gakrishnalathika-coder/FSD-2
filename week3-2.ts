class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    display(): void {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

let emp = new Employee("Anjali", 30000);

emp.display();