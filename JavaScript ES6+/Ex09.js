const bang = 7;
for (let i = 1; i < 10; i++) console.log(`${bang} x ${i} = ${bang * i}`);

const n = 10;
let giayThua = 1;
for (let i = 2; i <= n; i++) giayThua *=i;
console.log(`${n}! = ${giayThua}`);

let tongChan = 0;
for (let i = 2; i <= 100; i += 2 ) tongChan += i;
console.log("Tổng chẵn 1..100=", tongChan);

