// 25.2. Tìm hiểu thêm về các cách khai báo hàm
// 2.1 function declaration()

// Function declaration
function tenFuntcion() {
    //Thân hàm
    //return something
}

// Khai báo hàm
function tong(a = 0, b = 0) {
    return a + b;
}
console.log(tong(5, 7));

// 2.2 Function expression

let ten_bien = function () {
    //Thân hàm
    //return something
};

// Khai báo
let tinh = function (a = 1, b = 1) {
    return a * b;
};
console.log(tinh(3, 5));

// Bài 25.3 : 2.3 Arrow function
/*
Arrow function là một cú pháp viết ngắn của hàm trong JavaScript,
được giới thiệu trong ECMAScript 6 (ES6).
Arrow function giúp viết mã ngắn gọn hơn và có cú pháp rõ ràng hơn
*/
//Function expression
let multiply = function (a, b) {
    return a * b;
};

// Gọi hàm
console.log(multiply(5, 3));

// Arrow function (hàm mũi tên)
let multiplyArrow = (a, b) => a * b;

// Gọi hàm
console.log(multiplyArrow(5, 3));

// Tuy nhiên với trường hợp phức tạp, cần thêm khối {}

//Function expression
let multiplyAndAdd = function (a, b) {
    let products = a * b;
    let sum = a + b;
    return products + sum;
};

let multiplyAndAddArrow = (a, b) => {
    let products = a * b;
    let sum = a + b;
    return products + sum;
    return products * sum;
};

console.log(multiplyAndAdd(4, 6));
console.log(multiplyAndAddArrow(6, 6));
