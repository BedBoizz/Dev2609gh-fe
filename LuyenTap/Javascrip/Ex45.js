let tong = 0;
let dem = 0;
let max = 0;

for (let i = 1; i <= 100; i++){
    if ( i % 5 === 0 && i % 10 !== 0){
        tong = tong + i;
        dem = dem + 1;

        if( i > max)
        max = i;
    }
}
console.log(tong);
console.log(dem);
console.log(max);


