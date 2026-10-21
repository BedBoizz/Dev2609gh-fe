const thang = 2, nam = 2024;
let ngay;
switch (thang) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        ngay = 31; break;
    case 4: case 6: case 9: case 11:
        ngay = 30; break;
    case 2:
        ngay = (nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0 ? 29 : 28; break;
    default:
        ngay = "Không hợp lệ"
}

console.log(`Tháng ${thang}/${nam}: ${ngay}`);
