// 14. Hàm isNan, Number
//8. Hàm Number(value) --> Chuyển value sang số
// --> Nếu không chuyển được trả về NaN
let str = "123a";
console.log(typeof str);
let num = Number(str);
console.log(num);
console.log(typeof num);

// let so = Number(prompt("Mời nhập số ở đấy;"));
// console.log(so);

let a = "123a";
console.log(isNaN(a));

let b = Number(true);
console.log(b);
console.log(typeof b);
console.log(isNaN(b));
console.log(Number(null));
console.log(Number(""));
console.log(Number(" "));

console.log(Number.isNaN(NaN));
console.log(Number.isNaN("abc" / "bcd"));
console.log("abc" / "bcd");
console.log(0 / 0);
console.log(Number.NaN);
console.log({});
console.log("ponyfoo");





