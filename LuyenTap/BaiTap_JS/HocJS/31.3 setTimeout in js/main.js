//31.3 setTimeout in js
//1. setTimeout
/* 
setTimeout được sử dụng để thực hiện một hàm 
sau một khoảng thời gian nhất định.
Cú pháp: 
setTimeout(function, milliseconds, param1, param2, ...)
function: Hàm mà chúng ta muốn thực hiện sau khoảng thời gian.
delay: Thời gian chờ trước khi hàm được gọi, được đo bằng mili giây.
*/

// 1. Ôn lại 3 cách khai báo hàm
// a. với Arrow function
let helloArrow = () => {
    console.log("hello");
};

// Gọi hàm
// helloArrow();
setTimeout(helloArrow, 3000);

// b. với function declaration
function xinChao() {
    console.log("Hello in function declaration ");
}

// Gọi hàm
setTimeout(xinChao, 3000);

// c. với function expression
let helloExpression = function () {
    console.log("Hello in function expression");
};

// Gọi hàm
setTimeout(helloExpression, 3000);

// 2. Truyền trực tiếp function vào setTime out
// a. setTimeout với function declaration
setTimeout(function xinChao() {
    console.log("Hello in function declaration ");
}, 3000);

// b. setTimeout với function expression
setTimeout(function () {
    console.log("Hello in function expression");
}, 3000);

// c. setTimeout với Arrow function
setTimeout(() => {
    console.log("hello");
}, 3000);

// 3.Sử dung với tham số
// Ví dụ: với Arrow function
let helloArrow2 = (yourName) => {
    console.log(`Hello ${yourName}`);
};

// setTimeout(helloArrow2, 3000, "Nam");

// 4. Khi muốn huỷ quá trình thực hiện hàm
// step 1: Gán set timeout vào 1 biến thể lưu giá trị
let timeout = setTimeout(helloArrow2, 3000, "Giang");
// step 2: Sử dụng clear Timeout để huỷ thực hiện hàm
clearTimeout(timeout);
