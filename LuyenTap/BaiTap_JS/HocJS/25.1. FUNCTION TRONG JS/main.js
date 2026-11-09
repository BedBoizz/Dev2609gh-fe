// 25.1. function (hàm) trong js
/*
Bài toán tính tổng 2 số
a. 7, 5
b. 9, 6
c. 10, 5
*/

// a. 7,5
let a = 7;
let b = 5;
let tong = a + b;
console.log(tong);

// b 9, 6
let a1 = 9;
let b1 = 6;
let tong2 = a1 + b1;
console.log(tong2);

// 1. Khai báo hàm function
// Bước 1 khai báo
function tenFuntcion() {
    // Mã lệnh thực hiện một nhiệm vụ nào đó
}
// Bước 2: Gọi hàm khi cần sử dung
tenFuntcion();

// 2. Ví dụ đơn giản
// khai báo
function xinChao() {
    console.log("Chào mừng đến với nền văn minh này");
}
xinChao();
xinChao();

// 3. function với tham số (parameters)
// let inputName = prompt("Mời nhập tên của bạn");
// Khai báo hàm
function xinChao2(name) {
    console.log(`Chào mừng ${name} đến với nền văn minh này `);
}
// Gọi hàm
// xinChao2(inputName);
xinChao2("Bi đì boix");

// Ví dụ 2 về parameters
function tinhTong() {
    // let ketQua = a + b;
    // return ketQua;
    return a + b;
}

// Gọi hàm
console.log(tinhTong(5, 7));

// Gán biến vào hàm (lưu giá trị về vào biến)
let diemToan = 8;
let diemVan = 9.5;
let diemTong = tinhTong(diemToan, diemVan);
console.log(`tongDiem = ${diemTong}`);
console.log(`DTB = ${diemTong / 2}`);

//Chú ý: Thân hàm nếu không có return thì giá trị trả về là undefined
// 5. Truyền giá trị mặc định cho parameters
console.log(tinhTong(10));
function tinhTong2(a = 0, b = 0) {
    return a + b;
}
console.log(tinhTong2(10));
