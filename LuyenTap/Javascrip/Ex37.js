let min = 100;

for (let i = 1;i <= 20; i++ ){
    if ( i % 3 === 0 ) {
        if ( i < min ) {
            mix = i
        }
    }
}
console.log(min);
