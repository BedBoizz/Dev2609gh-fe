const arr = [42, 17, 85, 3, 64, 91, 28, 59, 10, 73];

console.log(arr);
    


let sum = 0;

for (let num of arr){
    sum += num;
}
console.log("Tổng:", sum);

let chan = 0;
let le = 0;

for (const num of arr) {
    if (num % 2 === 0) {
    chan++; // Số chẵn chia hết cho 2
    } else {
    le++;   // Số lẻ có dư khi chia cho 2
    }
}

console.log("Số chẵn:", chan);
console.log("Số lẻ:", le);

