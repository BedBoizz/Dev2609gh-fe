//36.5 - Dom -getAttribute and setAttribute
//8.getAttribute
// Sử dụng querySelector để chọn thẻ a đầu tiên
const fisrtLink = document.querySelector("a");
console.log(fisrtLink);
// Kiểm tra xem có thẻ a có tìm thấy hay không?
if (fisrtLink) {
    const linkHref = fisrtLink.getAttribute("href");
    console.log(linkHref);
} else {
    console.log("Không có thẻ a nào ở đây");
}

// 9. setAttribute
fisrtLink.setAttribute("target", "_blank");

// Sử dụng querySelectorAll để chọn tất cả các thẻ a trong ul
const links = document.querySelectorAll("ul a");

console.log(links);
// lặp qua mỗi thẻ a và sử dụng setAttribute
// để thêm thuộc tính target="_blank"
links.forEach((singleLink) => {
    singleLink.setAttribute("target", "_blank");
});

const title = document.querySelector("#heading_title");
if (title) {
    title.getAttribute("style");
    console.log(title);
} else {
    console.log("Không có thẻ h1 nào ở đây cả");
}
title.setAttribute("style", "color: blue;");
