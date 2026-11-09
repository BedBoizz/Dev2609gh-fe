//31.1 date time in js phần 1
// 1. Tạo đối tượng date : Sử dụng new Date() để tạo một đối tượng Date mới.
let currentDate = new Date();
console.log(typeof currentDate);
console.log(currentDate);

// 2. Các phương thức lấy thông tin thời gian
// Lấy năm, tháng, ngày, giờ, phút, giây
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1; // giá trị đầu của tháng 1 là 0
let day = currentDate.getDay();
let hours = currentDate.getHours();
let minute = currentDate.getMinutes();
let second = currentDate.getSeconds();

console.log(`Năm hiện tại: ${year}`);
console.log(`Tháng hiện tại: ${month}`);
console.log(`Ngày hiện tại: ${day}`);
console.log(`Giờ hiện tại: ${hours}`);
console.log(`Phút hiện tại: ${minute}`);
console.log(`Giây hiện tại: ${second}`);

// 3. Timeamp là gì
/*
Timeamp là một đại diện cho một điểm cụ thể thời gian, tính bằng millisecond, Từ mốc 0
Mốc thời gian 0:
00:00:00 ngày 1 tháng 1 năm 1970
*/

// Xuất thời gian từ mốc 0
let timetamp1 = new Date(1794038772906);
console.log(timetamp1);

// Sử dụng getTime(); để lấy time hiện tại
let currentTimeStamp = currentDate.getTime();
console.log(currentTimeStamp);
