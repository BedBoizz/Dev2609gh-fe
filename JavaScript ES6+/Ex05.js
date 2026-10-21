const diem = 6.5;
let xepLoai;

if (diem < 0 || diem > 10) xepLoai = "Điểm không hợp lệ";
else if (diem >= 9) xepLoai ="Xuất xắc";
else if (diem >= 8) xepLoai ="Giỏi";
else if (diem >= 6.5) xepLoai ="Khá";
else if (diem >= 5) xepLoai ="Trung bình";
else xepLoai = "Yếu";

console.log(diem, xepLoai);
