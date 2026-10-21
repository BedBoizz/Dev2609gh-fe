const a = 3, b = 4; c = 5;
if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    console.log("Không phải là tam giác");
} else{
    const vuong = a * a  + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a;    
    if (a === b && b===c ) console.log("Tam giác đều");
    else if (a === b || b === c || a === c) console.log(vuong ? "Tam giác vuông" : "Tam giác cân");
    else console.log(vuong ? "Tam giác vuông" : "Tam giác thường");
}

