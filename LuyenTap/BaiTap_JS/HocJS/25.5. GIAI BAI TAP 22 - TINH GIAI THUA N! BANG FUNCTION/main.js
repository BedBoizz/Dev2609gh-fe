//25.5 - Giai bai tap js 22- Tinh n giai thua - function
/*
Sử dụng function - Viết chương trình nhập vào số nguyên n, in ra kết quả n!
Dùng vòng lặp for
Dùng vòng lặp while
*/

// Dùng vòng lặp for
let tinhGiaiThuaFor = function (n) {
    let gt = 1;

    for (let i = 1; i <= n; i++) {
        gt *= i; // gt= gt * i
    }
    return gt;
};

// Nhập liệu
let n = Number(prompt("Mời nhập số nguyên n:"));
// Kiểm tra tính hợp lệ của n
while (!Number.isInteger(n) || 0 > n) {
    n = Number(prompt("Không phải nhập số nguyên n, vui lòng nhập lại"));
}

let ketQuaFor = tinhGiaiThuaFor(n);
console.log(`${n}! sử dụng for= ${ketQuaFor}`);

let ketQuaFor2 = tinhGiaiThuaFor(5);
console.log(`${ketQuaFor2}`);

let ketQuaFor3 = tinhGiaiThuaFor(6);
console.log(`${ketQuaFor3}`);

// Dùng vòng lặp while
let tinhGiaiThuaWhile = function (n) {
    let gt = 1;
    let i = 1;

    while (i <= n) {
        i++;
        console.log(i);
        gt *= i; // gt= gt * i
    }
    return gt;
};

let ketQuaWhile = tinhGiaiThuaFor(n);
console.log(`${n}! sử dụng for= ${ketQuaWhile}`);
