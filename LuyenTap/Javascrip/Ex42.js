let tong = 0;

for (let i = 1; i <= 50; i++) {
    if ( i % 2 === 0 || i % 5 ===0 ){
        tong = tong + i;
    }
}

console.log(tong);
