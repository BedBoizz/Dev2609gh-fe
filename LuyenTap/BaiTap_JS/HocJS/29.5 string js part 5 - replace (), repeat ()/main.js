// 29.5 string js part 5 - replace (), repeat ()
// 5.8 string.replace(oldValue, newValue);
let s14 = "123 học học nữa học mãi";
console.log(s14.replace("học", "ngủ"));

// Để thay thế tất cả dùng biểu thức chính quy (regular expression)
console.log(s14.replace(/học/g, "ngủ"));

// 5.13 string.repeat(count);
/*
count: Số lặp lại lần chuỗi
*/
let s23 = "hello, ";
let s24 = s23.repeat(3);
console.log(s24); // hello, hello, hello,
