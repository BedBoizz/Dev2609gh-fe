const h = 5;
for (let i = 1; i <= h; i++){
    let dong = "";
    for (let s = 1; s <= h - i; s++) dong += " ";
    for (let k = 1; k <= 2 * i -1 ; k++) dong += "*";
    console.log(dong);
    
}

for (let i = 1; i <= 4; i++){
    let dong = "";
    for (let j = 1; j <= 4; j++) dong += i * j + "\t";
    console.log(dong);
    
}