let tongChiaHet = 0;
let tongKhongChiaHet = 0;

for (let i = 1; i <= 20; i++ ){
    if (i % 3 == 0){
        tongChiaHet = tongChiaHet + i;
    } else {
        tongKhongChiaHet = tongKhongChiaHet + i;
    }
}

console.log(tongChiaHet);
console.log(tongKhongChiaHet);

