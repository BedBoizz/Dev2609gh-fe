//24.7 giai bai tap 20 - Số hoàn hảo
/*
Bài tập JS 20:
Số hoàn thiện
(hay còn gọi là số hoàn chỉnh, số hoàn hảo hoặc số hoàn thành)
là một số nguyên dương mà tổng các ước nguyên dương chính thức của nó
(số nguyên dương bị nó chia hết ngoại trừ nó) bằng chính nó.
Tìm tất cả những số hoàn thiện trong phạm vi từ 1-1000
*/

// let tong = 0;
// let n = 6;
// for (let i = 1; i < n; i++) {
//   if (n % i === 0) {
//     tong += i;
//   }
// }
// console.log(`Tổng là ${tong}`);

// // Kiểm tra số hoàn hảo
// if (tong === n) {
//   console.log(`${n} là số hoàn hảo`);
// } else {
//   console.log(`${n} không là số hoàn hảo`);
// }

// Giải bài tập
for (let n = 1; n < 1000; n++) {
  tong = 0;
  // Kiểm tra tổng ước thực = bao nhiêu
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      tong += i;
    }
  }
  // So sánh xem tổng ước thực = n không?
  if (tong === n) {
    console.log(n);
  }
}
