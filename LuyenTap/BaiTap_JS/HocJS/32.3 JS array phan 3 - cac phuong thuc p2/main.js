//32.3 Các phương thức làm việc với mảng phần 2
/*
A. Các phương thức phần 1 (bài 32.2)
STT	phương thức
1	concat ()
2	push ()
3	unshift ()
4	pop ()
5	shift ()
6	slice ()
7	includes ()
B. Các phương thức phần 2 (Bài 32.3)
8   indexOf()
9   lastIndexOf()
10  reverse()
11  join(separator)
*/

// 8. indexOf(): Trả về giá trị index của phần tử xuất hiện lần đầu tiên trong mảng ta tìm thấy
// Trả về -1 nếu không tìm thấy
let arr9 = [1, 2, 3, 4, 5, 2, 6, 7];
let indexElement = arr9.indexOf(2);
console.log(indexElement);

// 9. lastIndexOf(): Trả về giá trị index của phân tử xuất hiện lần cuối trong mẩng ta tìm thấy
let arr10 = [1, 2, 3, 4, 5, 2, 6, 7];
let lastIndex = arr10.lastIndexOf(2);
console.log(lastIndex);

// 10. reverse(): Đảo ngược thứ tự của các phân tử trong mảng gốc
// Nó thay đổi mảng gốc và không tạo ra mảng mới
let arr11 = [1, 3, 5, 7, 9];
arr11.reverse();
console.log(arr11);

// Lưu ý: reverse làm thay đổi mảng gốc
// Nếu muốn giữ nguyên bản gốc, hẫy reverse trên bảo sao
let arr12 = [1, 3, 5, 7, 9];
let arr13 = arr12.slice().reverse();
console.log(arr12);
console.log(arr13);

// 11. jorn():
/*
array.jorn(separator);
 Nối các phân tử trong mảng thành chuỗi, theo ký tự phân tách 'separator'
 separator: Nếu bỏ trống sẽ mặc định là dấu ','
 Phương thức này không thay đổi mảng gốc
*/
// Không truyền separator
let arr14 = ["Nam", "Trang", 1, 2, 3];
let string1 = arr14.join();
console.log(string1);
console.log(typeof string1);

// Có truyền separator
let arr15 = ["Nam", "Trang", 1, 2, 3];
let string2 = arr15.join(" % ");
console.log(string2);
console.log(typeof string2);
