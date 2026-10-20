var min = 100;

for (i = 1; i <= 20; i++){
    if( i % 3 ===0){
        if(i < min){
            min = i;
        }
    }
}

console.log(min);
