// 23. Vòng lặp for
// Ví dụ 1:
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Ví dụ 2:Xuất các số chẵn từ 0 đến 10
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// Ví dụ 3: Tính tổng số chẵn từ không đến 10
let tong = 0;

for (let i = 0; i <= 10; i += 2) {
  tong += i; // tong = tong + i
}
console.log(tong);
