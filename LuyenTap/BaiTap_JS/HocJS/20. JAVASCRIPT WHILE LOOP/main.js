// 20. JavaScript while Loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++; //i= i + 1
}

// Ví dụ
let n = prompt("Vui lòng nhập số n nguyên (1-99)");
console.log(n);

while (isNaN(n) || n < 1 || n > 99 || n % 1 !== 0) {
  n = Number(prompt("Số bạn nhập không hợp lệ vui lòng nhập từ 1 - 99"));
}
alert(`Bạn đã nhập số n là ${n}`);
