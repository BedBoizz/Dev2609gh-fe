let tong = 0;
let dem = 0;

for (let i = 0;i <= 20; i++){
    if (i % 2 !== 0) {
        tong = tong + i;
        dem = dem + 1;
    }
}

console.log(tong);
console.log(dem);

