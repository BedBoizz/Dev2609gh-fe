// Ép kiểu dữ liệu:
// Xuất thông báo cho người dùng nhập vào số A
let numberA = prompt("Mời cụ nhập vào numberA: ");
// Check thử kiểu loại biến numberA
console.log(typeof numberA);
// Thử thực hiện tính toán (Nếu chưa ép kiểu)
let numberB = 5;
console.log(typeof numberB);
// Cộng A với B
let kq = numberA + numberB;
console.log(`Kết quả  A + B = ${kq}`);
console.log(typeof kq);
// vd a = 8, kết quả 85 ==> sai, js hiểu là cộng chuỗi
// Các phép tính khác
console.log(`A-B= %s`, numberA - numberB);
console.log(`A*B= %s`, numberA * numberB);
console.log(`A/B= %s`, numberA / numberB);
console.log(`A%B= %s`, numberA % numberB);

// ép kiểu dữ liệu nhập vào đúng prompt
// Xuất thông báo cho người dùng nhập vào số C
let numberC = parseInt(prompt("Mời cụ nhập vào numberC: "));
console.log(typeof numberC);
console.log(numberC + numberB);

// Hoặc đơn giản dùng hàm Number() để ép --> Kiểu dữ liệu number
let numberD = Number(prompt("Mời cụ nhập vào numberD: "));
console.log(typeof numberD);
console.log(numberD + numberB);





