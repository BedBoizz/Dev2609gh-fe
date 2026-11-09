//27. var và let, hoisting trong js
console.log(`Giá trị của biến c= ${c}`);
//Khởi tạo c
var c = 9;
// let c = 9; // lỗi không ra giá trị

// Cách js hiểu
// var c;
// console.log(`Giá trị của biến c= ${c}`);
// //Khởi tạo c
// c = 9;

/*
2. Phạm vi sử dụng (scope)
var: Có phạm vi là function-scope
let: Có phạm vị là block-scope
*/
// var: Có phạm vi là function-scope
function exampleVar() {
    if (true) {
        var y = 20; //Khởi ý tạo y nằm trong phạm vi block scope
        console.log(`${y} trong block scope`);
    }
    console.log(`${y} trong phạm vi function scope`);
}

exampleVar();

// JS hiểu
function exampleVar() {
    var y; // hoisting
    if (true) {
        y = 20; //Khởi ý tạo y nằm trong phạm vi block scope
        console.log(`${y} trong block scope`);
    }
    console.log(`${y} trong phạm vi function scope`);
}

// Gọi hàm
exampleVar();

// let, cosnt: Có phạm vi là block-scope
function exampleLet() {
    if (true) {
        let b = 40;
        console.log(`%{b} trong phạm block scope`);
    }
    console.log(`${b} nằm phạm vi function`); // Lỗi
}

// Gọi hàm
exampleLet();

/*
3. Re-declaration:
var: Có thể khai báo lại một biến sử dụng var mà không gây ra lỗi.
let: Không thể khai báo lại một biến sử dụng let trong cùng một phạm
*/

var diemToan;
// code chương trình
var diemToan;

let diemVan;
// let diemVan; // Lỗi
