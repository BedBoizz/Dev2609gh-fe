const a = 1, b = -3, c = 2;

if (a === 0) {
    if (b ===0) console.log(c === 0 ? "Vô số nghiệm" : "Vô nghiệm");
    else console.log(`Nghiệm đơn x = ${-c / b}`);
    
}  else {
    const delta = b * b - 4 * a * c;
    if (delta < 0) console.log("Vô nghiệm thực");
    else if (delta === 0) console.log(`Nghiệm kép x = ${-b / (2 * a)}`);
    else console.log(`x1 = ${(-b + Math.sqrt(delta)) / (a * 2)}, x2 = ${(-b -Math.sqrt(delta)) / (2 *a)}`);
}