const goc = 9875;
let n = goc, buoc = 0;
do {
    let tong = 0;
    while (n > 0) {
        tong += n % 10;
        n = Math.floor(n / 10);
    }
    n = tong;
    buoc++;
} while (n >= 10);
console.log(`${goc} -> căn số ${n} (${buoc} lần cộng)`);
