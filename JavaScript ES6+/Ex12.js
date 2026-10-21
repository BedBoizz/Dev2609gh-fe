const N = 50;
let dong = "", dem = 0;
for (let so = 2; so <= N; so++){
    let nguyenTo = true;
    for (let d = 2; d <= so; d++){
        if (so % d === 0) {nguyenTo = false; break;}
    }
    if (!nguyenTo) continue;
    dong += so + "";
    dem++
}
console.log(dong.trim());
console.log(`Có ${dem} số nguyên tố`);

