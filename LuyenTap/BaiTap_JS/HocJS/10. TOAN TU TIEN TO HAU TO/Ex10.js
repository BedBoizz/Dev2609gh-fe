// 10. Toán Tử Tăng Giảm: Toán tử tiền tố hậu tố (++, --)
// - Dùng để tăng hoặc giảm giá trị để biến một đơn vị
let a = 99;
let b = 10;
let c = 77;
let d = 88;
a++;
b--;
++c;
--d;

// Kết quả
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// 2. Trường hợp biểu thức phức tạp
let x = 1;
let y = 2;
let z = x++ - ++y + 1;
console.log(x); // x = 2
console.log(y); // y = 3
console.log(z); // z = -1
