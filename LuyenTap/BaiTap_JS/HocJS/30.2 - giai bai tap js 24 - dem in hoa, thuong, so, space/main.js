//30.2 giải bài tập js 24 - string js
/*
Bài tập JS 24
Nhập vào 1 chuỗi từ bàn phím , 
đếm xem có bao nhiêu ký tự thường
 bao nhiêu in hoa
 bao nhiêu số
 bao nhiêu space
case test : 123AbcDD
Số ký tự thường: 2
Số ký tự in hoa: 3
Số chữ số: 3
Số khoảng trắng: 0
*/
// Nhập chuỗi từ bàn phím
const inputString = prompt("Nhập vào một chuỗi");

// Khởi tạo biến đếm
let lowCaseCount = 0;
let upperCaseCount = 0;
let digitCount = 0;
let spaceCount = 0;

//abc
console.log(inputString.length);
// lặp qua từng ký tự trong chuỗi và đếm ký tự
for (let i = 0; i <= inputString.length; i++) {
    console.log(inputString[i]);
    let char = inputString[i];
    if (char > "a" && char < "z") {
        lowCaseCount++;
    } else if (char > "A" && char < "Z") {
        upperCaseCount++;
    } else if (char > "0" && char < "9") {
        digitCount++;
    } else if (char === " ") {
        spaceCount++;
    }
}

console.log(`Số ký tự thường: ${lowCaseCount}`);
console.log(`Số ký tự hoa: ${upperCaseCount}`);
console.log(`Số ký tự thường: ${digitCount}`);
console.log(`Số ký tự thường: ${spaceCount}`);

