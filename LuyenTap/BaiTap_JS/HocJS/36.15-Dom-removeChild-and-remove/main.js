// 36.15 - Dom - removeChild & remove
//✔ 1. removeChild
//cú pháp: parentElement.removeChild(childElement)
//chọn phần tử cần xóa

let childElm = document.querySelector("#item2");
// Chọn phần tử cha của phần tử cần xoá
let ul = document.querySelector("#list");
// Xoá phần tử removeChild
ul.removeChild(childElm);

// Cách 2 ngắn gọn,
// Lấy phần tử cần xoá
let childElm2 = document.querySelector("#item3");
childElm2.parentElement.removeChild(childElm2);

// ✔ 2. remove()
// Cú pháp: element.remove()
let childElm3 = document.querySelector("#item4");
childElm3.remove();
