let monToan = Number(prompt("Điểm trung bình môn toán:"));
let monVan = Number(prompt("Điểm trung bình môn Văn:"));
let monAnh = Number(prompt("Điểm trung bình môn Anh:"));
let diemTB = (monToan + monVan + monAnh) / 3;
diemTB = diemTB.toFixed(2)

alert(`Điểm trung bình của học sinh: ${diemTB}`);
