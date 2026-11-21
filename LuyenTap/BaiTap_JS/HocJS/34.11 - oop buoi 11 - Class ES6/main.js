//34.11 Hiểu Rõ ES6 Classes - Learn JavaScript CLASSES - Hướng Dẫn Đầy Đủ về ES6 Classes
//Ở bài học trước chúng ta đã học về prototype ( nguyên mẫu)
function Student(fullName, ID, birthYear, homeTown) {
    // thuộc tính
    this.fullName = fullName;
    this.ID = ID;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
    //phương thức
    this.showInfo = function () {
        return `${this.fullName} ${this.ID} ${this.homeTown}`;
    };
}

// Tạo các đối tượng cụ thể (instance - 1 thể hiện) từ hàm tạo Student
const sv1 = new Student("Nguyễn Văn A", "2024001", 2005, "Nam Định");
const sv2 = new Student("Nguyễn Văn B", "2024002", 2004, "Hà Nội");
console.log(sv1);
console.log(sv1.showInfo);

// 2. Khai báo ES6 classes
// 2.1 Class expression (ít dùng hơn) :
// Phần thân thì giống hệt khai báo Class decoration

const sinhvienEx = class {
    // Thuộc tính
    constructor(fullName, ID, birthYear, homeTown) {
        this.fullName = fullName;
        this.ID = ID;
        this.birthYear = birthYear;
        this.homeTown = homeTown;
    }
    // Phương thức
    showInfo() {
        return `${this.fullName} ${this.ID} ${this.homeTown}`;
    }
};

// Ví dụ đầy đủ nếu dùng Class expression
class sinhvien {
    // contructor method (phương thức được JS xây dựng sẵn cho class)
    constructor(fullName, ID, birthYear, homeTown) {
        // Thuộc tính
        this.fullName = fullName;
        this.ID = ID;
        this.birthYear = birthYear;
        this.homeTown = homeTown;
    }
    // Các phương thức, khai báo trong class, khai báo ngoài constructor
    // Không cần function keyword
    // Phương thức
    showInfo() {
        return `${this.fullName} ${this.ID} ${this.homeTown}`;
    }

    // Phương thức có tham số
    caldAge(currentYear) {
        return currentYear - this.birthYear;
    }
}

// Tạo hàm ngoài đối tượng từ class
const stu3 = new sinhvien("Hing", 2026004, 2003, "Hà tây");
const stu4 = new sinhvien("Nam", 2026005, 2004, "Hà tây");

console.log(stu3);
console.log(stu3.showInfo);
// Nếu kiểm tra nguyên mẫu của đối tượng stu3, chính là class Sinh vien
console.log(Object.getPrototypeOf(stu3));

console.log(Object.getPrototypeOf(stu3) === sinhvien.prototype); // true

// 3. Thêm phương thức vào class SinhVien thủ công (sau khi có class)
sinhvien.prototype.caldAge = function (currentYear) {
    return currentYear - this.birthYear;
};

console.log(stu3.caldAge(2026));
console.log(stu4.caldAge(2026));
