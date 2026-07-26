"use strict";
class College {
    static collegeName = "ABC Engineering College";
    id;
    studentName;
    constructor(id, studentName) {
        this.id = id;
        this.studentName = studentName;
    }
    display() {
        console.log("ID:", this.id);
        console.log("Name:", this.studentName);
    }
}
console.log("College:", College.collegeName);
let S1 = new College(101, "Rahul");
S1.display();
// s1.id = 102; // Error: readonly property
