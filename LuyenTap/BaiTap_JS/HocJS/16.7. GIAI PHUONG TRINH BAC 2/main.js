//bài 16.7 giải bài tập 11 - giải phương trình bậc 2
/*
Bài tập 11: Viết chương trình giải phương trình bậc 2 : ax^2 + bx + c =0

1. case1 : a=1, b=2, c=-3
Pt có 2 nghiệm  x1=1 x2 = -3


2. case2 : a=1, b=2, c=1
Pt có nghiệm kép x1=x2 = -1


3. case3 : a=1, b=1, c=1
=> Pt vô nghiệm
*/

let a = parseInt(prompt("Nhập số a vào đây: "));
let b = parseInt(prompt("Nhập số b vào đây: "));
let c = parseInt(prompt("Nhập số c vào đây: "));

// Tính delta
let delta = b ** 2 - 4 * a * c;
// Điều kiện
if (delta > 0) {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  console.log(`PT có 2 nghiệm lần lượt là: x1 = ${x1} và x2 = ${x2}`);
} else if (delta === 0) {
  let x1 = -b / (2 * a);
  console.log(`PT có nghiệm kép x1=x2 = ${x1}`);
} else {
  console.log(`PT vô nghiệm`);
}
