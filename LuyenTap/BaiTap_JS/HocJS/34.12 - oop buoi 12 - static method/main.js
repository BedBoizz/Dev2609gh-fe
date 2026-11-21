// 34.12. Static method
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // instance method
    draw() {
        console.log("Phương thức draw được gọi");
    }

    // Static method
    static calcAge(radius) {
        return Math.Pi * radius * radius;
    }
}

// Tạo đối tượng
const c1 = new Circle(10);
const c2 = new Circle(5);

c1.draw();
c2.draw();

// Gọi phương thức tĩnh
console.log(Circle.calcAge(10));
console.log(Circle.calcAge(5));

// Ví dữ dễ hiểu Static method: Math
a = 10;
console.log(Math.abs(a));
