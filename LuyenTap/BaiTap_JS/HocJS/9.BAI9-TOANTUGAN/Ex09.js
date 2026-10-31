// 09.Toán tử gán
// 1. Toán tử gán (=) Dùng để gán giá trị cho biến
let x = 10; 
let y = 5;
let z = x + y; 

console.log(x);
console.log(y);
console.log(z);

// Gán +=, -=, *=, /=, %=
console.log("Kết quả gán +=, -=, *=, /=, %=");
let m = 10;
m += 5; // Tương đương với m = m +5;
console.log(`m= ${m}`);

let n  = 8;
n -= 3; //Tương đương với m = m - 3;
console.log(`n= ${n}`);

let p = 6;
p *=2; // Tương đương với p = p * 6;
console.log(`p= ${p}`);

let q = 9;
q /=3; // Tương đương q = q / 3;
console.log(`q= ${q}`);

let r = 4;
r %=3; // Tương đương r = r % 3;    
console.log(`r= ${r}`);


// Giải bài tập

let b = 15;
b -= 6; // Tương đương b = b - 6;
console.log(`b= ${b}`);

let c = 5;
c *= 4; // Tương đương c = c * 4;
console.log(`c= ${c}`);

let d = 12;
d /= 2; // Tương đương d = d / 2;
console.log(`d= ${d}`);

let e = 5;
let f = 2;
e -= (f + 1); // Tương đương e = e - (f + 1);
console.log(`e= ${e}`);
