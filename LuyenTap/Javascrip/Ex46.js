let tong = 0;
let dem = 0;
let min = 100;

for (let i = 1; i <= 100; i++){
    if ( i % 3 === 0 && i % 5 !== 0){
        tong = tong + i;
        dem = dem +1;

        if (i < min){
            min = i
        }
    }
}

console.log(tong);
console.log(dem);
console.log(min);
