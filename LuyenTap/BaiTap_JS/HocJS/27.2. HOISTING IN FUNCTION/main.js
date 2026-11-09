// 27.2 Hoisting in function
/*
1. Hoisting:
Function Declaration: có hoisting. Bạn có thể gọi hàm trước khi nó được định nghĩa
*/

hoistedFunction();
function hoistedFunction() {
    console.log("hello");
}

// Engine của trình duyện đọc:
function hoistedFunction() {
    console.log("hello");
}
hoistedFunction();

/*
Function Expression: Không có hoisting. Phải gọi hàm sau khi 
*/
// nonHoistedFunction(); //Lỗi
let nonHoistedFunction = function () {
    console.log("hello");
};

// Arrow Function: Không có hoisting. Phải gọi hàm sau khi
// arrowFunction() // Lỗi
let arrowFunction = () => {
    console.log("hello");
};
