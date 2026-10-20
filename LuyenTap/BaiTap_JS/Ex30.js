var tong = 0;
var dem = 0;

for (var i = 1; i <= 30; i++){
    if(i % 3 ===0){
        tong += i;
        dem += 1;
    }
}

console.log(tong);
console.log(dem);

