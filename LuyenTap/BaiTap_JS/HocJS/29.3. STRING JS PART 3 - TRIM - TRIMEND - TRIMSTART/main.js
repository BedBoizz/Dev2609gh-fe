// 29.3 string js part 3 - trim - trimEnd - trimStart
// 5.3 string.trim()
/*
Loại bỏ các khoảng trắng ở cả hai đầu chuỗi
trả về một chôi mới sau khi thực hiên
*/

let s11 = "      He    llo word    ";
console.log(s11.length);
let s12 = s11.trim();
console.log(s12); // Kết quả: "He    llo word"
console.log(s12.length);

// 5.4 string.trimEnd();
// Loại bỏ tất cả các khoảng trắng ở cuỗi chuối

let s13 = "      He    llo word    ";
console.log(s13.length);
let s14 = s13.trimEnd();
console.log(s14); // Kết quả: "      He    llo word"
console.log(s14.length);

// 5.5 string.trimStart();
// Loại bỏ tất cả các khoảng trắng ở đầu chuối

let s15 = "      He    llo word    ";
console.log(s15.length);
let s16 = s15.trimStart();
console.log(s16); // Kết quả: "He    llo word    "
console.log(s16.length);
