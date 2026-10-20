let tong = 0;
let dem = 0;

for (let i = 1; i <=50; i++ ) {
    if (i % 3 === 0){
        tong = tong + i;
        dem = dem + 1;
    }
}
console.log(tong);
console.log(dem);


