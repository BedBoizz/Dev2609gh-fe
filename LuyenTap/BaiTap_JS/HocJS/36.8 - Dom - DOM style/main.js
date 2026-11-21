//36.8 DOM style
//Chọn phần tử h1

let heading = document.querySelector("h1");
// Thay đổi style của h1 trên giao diện
// heading.style.background = "red";
// heading.style.color = "white";
// heading.style.fontSize = "46px";

// Cách viết gọn thuộc tính
Object.assign(heading.style, {
    background: "red",
    color: "white",
    fontSize: "46px",
});
