class Person {
    public name: string;
    private age: number;
    protected city: string;

    constructor(name: string, age: number, city: string) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    showAge(): void {
        console.log("Age:", this.age);
    }
}

class Teacher extends Person {

    showCity(): void {
        console.log("City:", this.city);
    }
}

let t = new Teacher("Kiran", 20, "Hyderabad");

console.log("Name:", t.name);

t.showAge();

t.showCity();