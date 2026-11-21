// 36.14 - Bai tap JS 35 - Dom - appendChild
//Xác định phần tử cha

let parentElm = document.querySelector("#container");
// Thêm 100 nút dùng for
for (let i = 1; i < 100; i++) {
    const button = document.createElement("button");
    button.innerText = "my Button" + (i + 1);
    // Thêm phần tử mới vào phần tử cha
    parentElm.append(button);
    if (i % 2 === 1) {
        button.style.color = "red";
    }
}
