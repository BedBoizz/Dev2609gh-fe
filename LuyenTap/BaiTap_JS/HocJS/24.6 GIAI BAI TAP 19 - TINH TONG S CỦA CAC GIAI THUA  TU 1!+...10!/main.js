//24.6 giai bai tap 19 - Tính tổng giai thừa S
/*
Bài tập JS 19:
    Viết chương trình :
Tính tổng S= 1!+2!+3!+...+10!
*/

// let n = 5;
// let gt = 1;
// for (let i = 1; i <= n; i++) {
//   gt *= i;
// }
// console.log(gt);

let sum = 0;

for (let n = 1; n <= 10; n++) {
  let gt = 1;
  for (let i = 1; i <= n; i++) {
    gt *= i;
  }
  sum += gt;
}
console.log(`Tổng S là ${sum}`);
