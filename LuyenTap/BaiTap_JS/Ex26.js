var max = 0;

for (var i = 1; i <= 20; i++){
    if (i % 3 ===0) {
        if (i > max){
            max = i;
        }
    }
}
console.log(max);
