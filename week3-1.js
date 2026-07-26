"use strict";
class Student {
    name;
    rollNo;
    showDetails() {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
    }
}
let s1 = new Student();
s1.name = "Ravi";
s1.rollNo = 101;
s1.showDetails();
