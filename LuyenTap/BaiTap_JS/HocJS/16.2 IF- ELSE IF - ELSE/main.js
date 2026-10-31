// Bài 16.2, if -else if -else:
/*
Nhập điểm TB, in ra xếp loại của học sinh:
    Giỏi: dtb <= 10 và dtb >= 8
    Khá: 8 > dtb >= 6.5
    TB: 6.5 > dtb >= 5
    Yếu: 0 <= dtb < 5
*/

let dtb = Number(prompt("Mời cụ nhập điểm vào đây"));

//Kiểm tra điều kiên
if (dtb <= 10 && dtb >= 8) {
  console.log("Học sinh giỏi");
} else if (dtb < 8 && dtb >= 6.5) {
  console.log("Học sinh khá");
} else if (dtb < 6.5 && dtb >= 5) {
  console.log("Học sinh trung bình");
} else if (dtb >= 0 && dtb < 5) {
  console.log("Học sinh yếu");
} else {
  console.log("Bạn nhập vớ vẩn");
}
