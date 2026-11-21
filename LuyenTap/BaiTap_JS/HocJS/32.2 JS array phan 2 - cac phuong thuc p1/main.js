//32.2 Các phương thức làm việc với mảng phần 1
/*
STT	phương thức
1	concat ()
2	push ()
3	unshift ()
4	pop ()
5	shift ()
6	slice ()
7	includes ()
*/

// 1. concat(): Nối mảng hiện tại với mảng khác và trả về một mảng mới
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = arr1.concat(arr2);
console.log(newArr);

// 2. push(): Thêm một hoặc nhiều phân tử vào cuối mảng gốc
let arr3 = [1, 2, 3];
arr3.push(4);
console.log(arr3);

// 3.unshirt(): Thêm một hoặc nhiều phân tử vào đầu mảng gốc
let arr4 = [2, 3, 4];
arr4.unshift(1);
console.log(arr4);

// 4. pop(): Loại bỏ phân tử cuối cùng của mảng và trả về phân tử đã bị loại bỏ
let arr5 = [1, 2, 3, "Nam"];
let removeElement = arr5.pop();
console.log(arr5);
console.log(removeElement);

// 5. shirt(): loại bỏ phân tử đầu tiên của mảng và trả về phân tử đã bị loại bỏ
let arr6 = [1, 2, 3];
let removeElement2 = arr6.shift();
console.log(arr6);
console.log(removeElement2);

// 6. slice(start, end): Tạo một bản sao của mảng cắt từ start đến end-1
// Từ 1 vị trí bạn đầu đến một vị trí kết thúc (không bao gồm vị trí kết thúc)
let arr7 = [1, 2, 3, 4, 5];
let sliceArr = arr7.slice(1, 4);
console.log(arr7);
console.log(sliceArr);

// 7. inCludes(): Kiểm tra xem một mảng có chứa một giá trị cụ thể hay không
// Trả và true nếu có và false nếu không
let arr8 = [1, 2, 3, 4, 5, "nam"];
let isPresent = arr8.includes("nam");
console.log(isPresent);
