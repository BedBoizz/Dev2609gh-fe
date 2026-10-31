// 12. Các phép so sánh
let a = 1;
let b = 3;
let c = "3";

console.log(typeof b);
console.log(typeof c);

// Các phép so sánh thông thường giống toán học
console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);
console.log(a != b);
console.log(c != b); // lưu ý

// So sánh bằng == (không quan tâm đến điều kiểu của biến)
console.log(a == b);
console.log(c == b);

// So sánh tuyệt đối (===) So sánh giá trị và kiểu dữ liệu
console.log(a === b);
console.log(c === b);

console.log("Phần 2");
console.log(a != b);
console.log(c != b); // Không quan tâm đến kiểu của biến

console.log(a !== b);
console.log(c !== b); // So sánh giá trị và kiểu dữ liệu
