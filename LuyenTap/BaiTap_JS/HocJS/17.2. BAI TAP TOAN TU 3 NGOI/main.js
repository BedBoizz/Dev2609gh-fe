//17.2 Giải bài tập js 13 - Toán tử 3 ngôi
/*
Bài tập 13: Viết chương trình nhập vào điểm trung bình,
và xuất kết quả xếp loại của học sinh theo tiêu chuẩn sau: ( dùng toán tử 3 ngôi )
Giỏi: Nếu Điểm >= 8
Khá: Nếu 8 > Điểm >= 6.5
Trung bình: Nếu 6.5 > Điểm >= 5
Yếu: Nếu Điểm < 5
*/

// Cách 1
let diem = parseInt(prompt("Mời cụ nhập điểm:"));
let diemTB =
  diem >= 8
    ? "Học sinh giỏi"
    : 8 > diem && diem >= 6.5
      ? "Học sinh khá"
      : 6.5 > diem && diem >= 5
        ? "Học sinh TB"
        : "Học sinh yếu";
console.log(diemTB);

// Cách 2
let dtb = parseInt(prompt("Mời cụ nhập điểm:"));
let xepLoai =
  dtb >= 8
    ? "Học sinh giỏi"
    : dtb >= 6.5
      ? "Học sinh khá"
      : dtb >= 5
        ? "Học sinh trung bình"
        : "Học sinh yếu";
console.log(`Học sinh xếp loại ${xepLoai}`);
