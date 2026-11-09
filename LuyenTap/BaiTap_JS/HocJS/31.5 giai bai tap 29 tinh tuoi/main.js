//Bài tập js 29: Viết chương trình nhập vào năm sinh và in ra số tuổi,
//kiểm tra điều kiện dữ liệu năm sinh nhập vào phải là số nguyên, phải lớn hơn 0

function calllateAge(inputYear) {
    // Ép kiểu dữ liệu truyền vào sang kiểu number
    let yearOfBirth = Number(inputYear);
    console.log(yearOfBirth);

    // Kiểm tra năm sinh có phải số nguyên, và lớn hơn 0?
    console.log(!Number.isInteger(yearOfBirth));
    console.log(yearOfBirth <= 0);

    if (!Number.isInteger(yearOfBirth) || yearOfBirth <= 0) {
        alert("Năm sinh không hợp lệ, Năm sinh phải lớn hơn 0");
        return;
    }

    // Lấy năm hiện tại
    let currenYear = new Date().getFullYear();
    // Tính tuổi
    let age = currenYear - yearOfBirth;
    alert(`Tuổi của bạn là ${age} tuổi`);
}

// Nhập năm sinh người dùng
let inputYear = prompt("Nhập năm sinh của bạn:");

calllateAge(inputYear);
