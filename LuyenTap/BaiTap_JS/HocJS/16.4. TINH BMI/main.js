let chieuCao = Number(prompt("Nhập chiều cao (m): "));
let canNang = Number(prompt("Nhập vào cân nặng(kg): "));
let BMI = canNang / Math.pow(chieuCao, 2);

// Điều kiện BMI
if (BMI < 15) {
  alert(`Bmi của bạn là: ${BMI} Thân hình quá gầy `);
} else if (BMI >= 15 && BMI < 16) {
  alert(`Bmi của bạn là: ${BMI} Thân hình gầy`);
} else if (BMI >= 16 && BMI < 18.5) {
  alert(`Bmi của bạn là: ${BMI} Thân hình hơi gầy`);
} else if (BMI >= 18.5 && BMI < 25) {
  alert(`Bmi của bạn là: ${BMI} Thân hình bình thường`);
} else if (BMI >= 25 && BMI < 30) {
  alert(` Bmi của bạn là: ${BMI} Thân hình hơi béo`);
} else if (BMI >= 30 && BMI < 35) {
  alert(`Bmi của bạn là: ${BMI} Thân hình béo`);
} else if (BMI >= 35) {
  alert(`Bmi của bạn là: ${BMI} Thân hình quá béo`);
}
