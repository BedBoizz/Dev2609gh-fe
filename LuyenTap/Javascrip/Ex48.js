let max = 0;
let min = 100;

for (i = 1; i <= 50; i++ ){
    if ( i % 6 === 0){
        if (i > max){
            max = i;
        }

        if (i < min ){
            min = i;
        }
    }
}
console.log(max);
console.log(min);

