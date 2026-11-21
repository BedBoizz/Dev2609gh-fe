//34.15 - oop buoi 15 - getter and setter

class School {
    constructor(id, name, birthYear, score) {
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
        this._score = score;
        // Thêm dấu _ vào trước tên thuộc tính để thể hiện nó ở trạng thái proteced,
        // và không nên truy cập, sửa đổi trực tiếp từ bên ngoài
    }
    // Phương thức
    calcAge(currentYear) {
        return currentYear - this.birthYear;
    }

    // getter cho thuộc tính score
    get score() {
        return this._score;
    }

    // setter cho thuộc tính score
    set score(value) {
        // Thêm các biểu thức logic để kiểm tra
        if (value >= 0 && value <= 100) {
            this._score = value;
        } else {
            console.log("Điểm số không hợp lệ");
        }
    }
}

// Tạo đối tượng
const john = new School(2026001, "Hing", 2003, 99);
console.log(john.name);
console.log(john.id);
console.log(john.birthYear);
console.log(john._score); // Không nên truy cập trực tiếp
console.log(john.calcAge(2026));

// Sử dụng getter
console.log(john.score);

// Sử dụng setter
john.score = 88;
console.log(john.score);
