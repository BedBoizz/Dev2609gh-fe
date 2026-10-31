//24.5 giai bai tap 18 - tìm số chia hết cho
/*
Bài tập JS 18:
    Viết chương trình :
Tìm những số chia hết cho 3 từ 10 đến 50
*/

for (let i = 10; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

//Nâng cao, đếm có bao nhiêu giá trị
let dem = 0;
for (let i = 10; i <= 50; i++) {
  if (i % 3 === 0) {
    // dem += 1; Cách 1
    dem++;
  }
}
console.log(`Có ${dem} số chia hết cho 3 từ 10 đến 50`);
