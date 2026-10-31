//24.8 giai bai tap 21 - Kiểm tra số nguyên tố
/*
    Bài tập JS 21:
    Viết chương trình nhập nhập số nguyên a > 0 từ bàn phím
Cho biết đó có phải số ng tố
    ( số ng tố là số >1, và chỉ chia hết cho 1 và chính nó )
    Ví dụ số nguyên tố: 3, 5, 7 ...
Kết thúc chương trình hỏi người dùng:
Bạn có muốn tiếp tục sử dụng phần mềm không?
Nếu chọn không thì thoát chương trình
*/

while (true) {
  // Bước 1: Nhập số nguyên a từ người dùng
  let a = Number(prompt("Vui lòng nhập số nguyên dương a:"));

  // Bước 2: Kiểm tra a có phải là số nguyên dương không
  while (!Number.isInteger(a) || a <= 0) {
    a = Number(prompt("Vui lòng nhập lại a, a là số nguyên dương:"));
  }
  alert(`Giá trị a là ${a} hợp lệ`);

  // Bước 3: Kiểm tra xem a có phải số nguyên tố hay không
  let isPrime = true;
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      isPrime = false;
      break;
    }
  }

  // Bước 4: Hiển thị kết quả
  if (isPrime) {
    alert(`a là ${a} là số nguyên tố`);
  } else {
    alert(`a là ${a} không phải là số nguyên tố`);
  }

  // Bước 5: Hỏi người dùng có muốn tiếp tục không
  let aswer = prompt(`
    Bạn có muốn tiếp tục không?
    Nếu không vui lòng nhập "no"
    Còn muốn tiếp tục vui lòng nhập phím bất kỳ
    `);

  if (aswer.toLowerCase() === "no") {
    alert("Cảm ơn bạn");
    break;
  }
}
