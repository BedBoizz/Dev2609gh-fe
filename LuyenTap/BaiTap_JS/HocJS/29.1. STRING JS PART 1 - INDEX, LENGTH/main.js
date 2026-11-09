//29.1. string js part 1: Khái quát, index, length
//1. Các cách xuất chuỗi

console.log("Xin chào, ABC, 123, !@#$");
console.log("Xin chào, ABC, 123, !@#$");
console.log(`Xin chào, ABC, 123, !@#$`);

//2. Khởi tạo chuỗi
let s1 = `Hồi đó tôi chê mồm em rộng
Không tin 2 đữa chập mồm đo`;

console.log(s1);

let s2 = "Hồi đó tôi chê mồm em rộng\nKhông tin 2 đữa chập mồm đo";

console.log(s2);

//3. index chuỗi: index bắt đầu từ 0
let ten = "Hing";
console.log(ten[1]);

//4. string length
let s3 = "abcdef";
// Kiểm tra chiều dài chuỗi s3
console.log(s3.length);

//4.2 Ví dụ vận dung:
// Nhập vào 1 tin nhắn, giới hạn ký tự tối da 140, nếu quá báo số ký tự vượt quá
let message = prompt("Mời vào nhập chuỗi");
if (message.length <= 140) {
    alert(`Bạn đã nhập ${message.length} ký tự`);
} else {
    alert(`Bạn đã nhập ${message.length - 140} ký tự`);
}
