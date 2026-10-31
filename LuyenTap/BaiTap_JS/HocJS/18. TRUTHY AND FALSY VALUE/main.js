// 18. Truthy and Falsy Values
// Chúng ta cũng có thể ép ngược lại số ---> chuỗi
let a = 123;
console.log(typeof a);
let b = String(a);
console.log(b);
console.log(typeof b);
console.log(`Giá trị của b là ${b}`);

//8 giá trị falsy khi chuyển đổi sang boolean sẽ là false
//false, 0, -0, 0n, "", null, undefined, NaN
console.log(typeof 0n);
let c = Boolean(0);
console.log(c);
console.log(typeof c);

//Ví dụ kiểm tra 1 biến được gán giá trị hay undefined
let salary;
console.log(salary);
if (salary) {
  console.log("Salary is defined");
} else {
  console.log("Salary is undefined");
}
