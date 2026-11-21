//36.2 - Dom - innerHTML and getElement- ById - ByTagName - ByClassName -
//3.getElementsByTagName

console.log("getElementsByTagName");
let li_item = document.getElementsByTagName("li");
console.log(li_item); // Trả về mảng các phân tử li
// Chúng ta có thể kiểm tra xem mảng có ? phân tử
console.log(li_item.length);
// Truy xuất và thay đổi 1 phân tử theo vị trí index
li_item[1].innerHTML = "lmao";

//4.getElementsByClassName
console.log("getElementsByClassName");
let li_class_item = document.getElementsByClassName("list");
console.log(li_class_item);

li_class_item[0].innerHTML = "lmao lmao";

//5. getElementById
console.log("getElementById");
let el = document.getElementById("list_about");
console.log(el);
// Thay đổi text trên biến el
el.innerHTML = "lmao làm sao";
