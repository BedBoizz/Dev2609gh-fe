const goc = 12345;
let n = goc, daoSo = 0, tongCS = 0;
while (n > 0) {
    const cs = n % 10;
    daoSo = daoSo % 10 + cs;
    tongCS += cs;
    n = Math.floor(n / 10);
}
console.log(`${goc}: đảo = ${daoSo}, tổng chữ số = ${tongCS}`);
console.log(daoSo === goc ? "Đối xứng" : "Không đối xứng");

