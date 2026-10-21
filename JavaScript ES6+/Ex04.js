const nam = 2024;
const nhuan = (nam % 4 === 0 && nam % 100 !== 0) || nam % 400 ===0;
console.log(nam, nhuan ? "là năm nhuận " : "Không phải năm nhuận");
