const x = 12, y = 18;

let a = x, b = y;
while (b !== 0) {
    const r = a % b;
    a = b;
    b = r;
}
console.log(`UCLN(${x}, ${y}) = ${a}; BNCC = ${(x * y) / a}`);

let truoc = 0, sau = 1, dong = "";
for (let i =1; i <= 10; i++) {
    dong += truoc + " ";
    const tiep = truoc + sau;
    truoc = sau;
    sau  = tiep;
}

console.log(dong.trim());