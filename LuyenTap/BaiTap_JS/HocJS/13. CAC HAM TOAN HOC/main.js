// 13. Các hàm toán học thông dụng
// 1. Hàm `Math.sqrt()`
let a = Math.sqrt(4);
console.log(a); // Kq: 2

// 2. Hàm `Math.pow(base, exponent)`
let b = Math.pow(2, 3);
console.log(b); // Hàm lũy thừa 2 mũ 3 = 8

// 3. Hàm `Math.abs()`
let c = Math.abs(-10);
console.log(c); // Giá trị tuyệt đối -10 là 10

// 4. Hàm `Math.ceil()` và Math.floor()`
let d = Math.ceil(5.004);
let e = Math.floor(5.004);
console.log(d); // Làm tròn lên số nguyên là: 6
console.log(e); // Làm tròn xuống số nguyên là: 5

// 5. Hàm `Math.round()`, từ 0.5 làm tròn 1
let f = Math.round(7.49);
console.log(f); // Nếu 7.49 sẽ làm tròn xuống 7, còn 7.5 sẽ làm tròn lên 8

// 6. Làm tròn x chữ số phần đơn vị
let j = 3.14159;
let jRounded = Number(j.toFixed(2));
console.log(jRounded);
console.log(typeof jRounded);
// Công thử
let g = jRounded + 5;
console.log(g);
// Nếu thêm toFixed thì sẽ sang dữ liệu Chuỗi nên thêm Number để sang dữ liệu Số

// 7. Hàm `Math.min()` và `Math.max()`
let h = Math.max(1, 24, 35 ,47, 57, 77, 100);
let k = Math.min(1, 24, 35 ,47, 57, 77, 100);
console.log(h); // Số lớn nhất là 100
console.log(k); // Số bé nhất là 1


