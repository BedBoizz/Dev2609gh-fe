//34.14 - giải bài tập js 34 -  javascript inheritance es6
// Class cha

class Shape {
    // Thuộc tính
    constructor(name) {
        this.name = name;
    }
    // Phương thức
    calculateArea() {
        return 0;
    }
}

// Class con của Shape - Hình vuông
class Square extends Shape {
    constructor(name, sise) {
        super(name);
        this.sise = sise;
    }
    // Phương thức
    calculateArea() {
        return this.sise * this.sise;
    }
}

// Class con của Shape - Hình chữ nhật
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    // Phương thức
    calculateArea() {
        return this.width * this.height;
    }
}

// Tạo dối tượng Square
const s1 = new Square("Hình vuông", 5);

console.log(s1.calculateArea());
console.log(`Diện tích hình ${s1.name}là ${s1.calculateArea()}`);

// Tạo dối tượng Rectangle
const s2 = new Rectangle("Hình chữ nhật", 5, 10);

console.log(s2.calculateArea());
console.log(`Diện tích hình ${s2.name} là ${s2.calculateArea()}`);
