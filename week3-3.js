"use strict";
class Person {
    name;
    age;
    city;
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    showAge() {
        console.log("Age:", this.age);
    }
}
class Teacher extends Person {
    showCity() {
        console.log("City:", this.city);
    }
}
let t = new Teacher("Kiran", 20, "Hyderabad");
console.log("Name:", t.name);
t.showAge();
t.showCity();
