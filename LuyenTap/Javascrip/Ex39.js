let tong = 0;

for (let i = 1; i <= 30; i++){
    if ( i % 2 === 0 && i % 3 === 0){
        tong = tong + i;
    }
}
console.log(tong);
