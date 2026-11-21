//32.1 Mảng trong js - tổng quan
let name1 = "trang";
let name2 = "Hoa";
let name3 = "Lan";

// 3. Khai báo mảng
// 3.1 Sử dụng Cặp dấu Ngoăc Vuông []:
// Khai báo mảng rỗng
let arr1 = [];
console.log(arr1);
// Tạo một mảng có sẵn các phân tử bên trong
let arr2 = [1, 2, 3, 4, "Nam", true, [2, 3, 4]];
console.log(arr2);

console.log(typeof arr2);

// 3.2 Sử dụng Array và Constructor:
// Khai báo mảng rỗng sử dụng Array constructor
let arr3 = new Array();
console.log(arr3);
// Tạo một mảng có sẵn các phân tử bên trong
let arr4 = new Array(1, 2, 3, 4, "Nam");
console.log(arr4);
// Tạo mảng với độ dài xách định, các phân tử là undefined
let arrayWithLength = new Array(5);
console.log(arrayWithLength);
console.log(arrayWithLength[0]);
console.log(arrayWithLength[1]);
console.log(arrayWithLength[2]);
console.log(arrayWithLength[3]);
console.log(arrayWithLength[4]);

// 4. Truy xuất phần tử của mảng quan đơn vị Index
let arr5 = [4, 6, 8, 9];
console.log(arr5[3]);
console.log(arr5[2]);

// 6. Gán, thay đổi giá trị cho mảng index
let arr6 = [5, 6, 7];
console.log(`aar6 trước khi thay đổi:`);
console.log(arr6);
arr6[1] = 10;
console.log(`aar6 sau khi thay đổi:`);
console.log(arr6);

// 7. Duyệt mảng
// 7.1 Cách 1 dùng vòng lặp for
// (Có thể xem và sửa giá trị mảng)
let arr7 = [3, 2, 4, 5, 6];
console.log(arr7);
for (let i = 0; i < arr7.length; i++) {
    console.log(arr7[i]);
    arr7[i] = arr7[i] * 2;
}
// Sau khi thay đổi, xuất thử arr7
console.log(arr7);

// 7.2 for...of: Chỉ có thể xem, không sửa được giá trị của mảng

let count = 0;
let arr8 = [1, 2, 3, 4, 5];
for (let element of arr8) {
    // Kiểm tra điều kiện
    if (element % 2 === 0) {
        console.log(element);
        count++;
    }
}

console.log(`Số lượng số chẵn có trong mảng ${count}`);
console.log(arr8);
