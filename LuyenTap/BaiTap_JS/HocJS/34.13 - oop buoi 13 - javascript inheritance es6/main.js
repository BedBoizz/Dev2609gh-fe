//34.13 - javascript inheritance es6
// Định nghĩa lớp cơ sở School

class School {
    constructor(ID, name, birthYear) {
        this.ID = ID;
        this.name = name;
        this.birthYear = birthYear;
    }

    // Phương thức lớp school
    calcAge(currentYear) {
        return currentYear - this.birthYear;
    }
}

// Lớp Students kế thừa từ lớp School (có thêm thuộc tính và phương thức riêng)
class Student extends School {
    constructor(ID, name, birthYear, major) {
        super(ID, name, birthYear);
        this.major = major;
    }

    // Phương thức lớp Student
    study() {
        console.log(`${this.name} is studing ${this.major}`);
    }
}

// Tạo đối tượng của lớp school
const p1 = new School(2006001, "Hing", 2003, "technology");
// Truy cập thuộc tính và phương thức của School
console.log(p1.ID);
console.log(p1.name);
console.log(p1.calcAge(2026));

const s1 = new Student(2006002, "Đan", 2005, "Hr");
// Truy cập thuộc tính và phương thức của Student
console.log(s1.ID);
console.log(s1.name);
console.log(s1.calcAge(2026));

// Truy cập thuộc tính và phương thức của sub Class Student
console.log(s1.major);
s1.study();
