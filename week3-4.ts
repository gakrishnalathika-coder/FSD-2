class College {

    static collegeName: string = "ABC Engineering College";

    readonly id: number;

    studentName: string;

    constructor(id: number, studentName: string) {
        this.id = id;
        this.studentName = studentName;
    }

    display(): void {
        console.log("ID:", this.id);
        console.log("Name:", this.studentName);
    }
}

console.log("College:", College.collegeName);

let S1 = new College(101, "Rahul");

S1.display();

// s1.id = 102; // Error: readonly property