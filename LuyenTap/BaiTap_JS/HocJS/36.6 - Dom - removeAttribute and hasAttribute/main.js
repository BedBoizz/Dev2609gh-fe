//36.6 - Dom - removeAttribute and hasAttribute
// document.querySelector("#heading_title").setAttribute("style", "color: blue;");

// Sử dụng querySelector để chọn phân tử đầu tiên có class là "list"
const item1 = document.querySelector(".list");

// 10. hasAttribute
// Kiểm tra xem có phân tử có thuộc tính class
console.log(item1.hasAttribute("class"));

const item2 = document.querySelector("#heading_title");
console.log(item2.hasAttribute("style"));

// 11. removeAttribute
// Loại bỏ thuộc tính khỏi phân tử
item2.removeAttribute("style");

// Kiểm tra xem thuộc tính style đã bị loải bỏ hay chưa
console.log(item2.hasAttribute("style"));

//Bài tập: Xóa toàn bộ thuộc tính href trong các thẻ a nằm trong ul
const anchorTag = document.querySelectorAll("ul a");

anchorTag.forEach((anchor) => {
    anchor.removeAttribute("href");
});
console.log(anchorTag.hasAttribute("href"));
