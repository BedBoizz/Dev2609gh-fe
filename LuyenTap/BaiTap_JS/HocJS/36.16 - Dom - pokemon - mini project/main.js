//https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/1.png
// 36.16 - Dom - ví dụ vận dụng
//Chọn phần tử cha
const container = document.getElementById("container");

let baseUrl =
    "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";

// Bài toán 1
// // Tạo phần tử con mới
// const newImg = document.createElement("img");
// newImg.src = `${baseUrl}4.png`;
// // Thêm phần tử con vào container
// container.appendChild(newImg);

// // Bài toán 2: thêm 151 ảnh vào container
// for (let i = 1; i < 150; i++) {
//     // Tạo phần tử con mới
//     const newImg = document.createElement("img");
//     newImg.src = `${baseUrl}${i}.png`;
//     // Thêm phần tử con vào container
//     container.appendChild(newImg);
// }

// Bài toán 3
for (let i = 1; i <= 151; i++) {
    // Tạo 1 khối div để chứa phầm tử img vào số thứ tự
    const newDiv = document.createElement("div");
    // Thêm div vào cuối container
    // Và lấy node mới tạo ra gắn vào parenDiv
    const parenDiv = container.appendChild(newDiv);
    // Tạo phần tử con, thêm vào trong parenDiv
    const newImg = document.createElement("img");
    newImg.src = `${baseUrl}${i}.png`;
    // Thêm vào trong khối parenDiv
    parenDiv.appendChild(newImg);
    // Thêm thẻ span số thứ tự vào trong parenDiv
    const newSpan = document.createElement("span");
    newSpan.innerText = `#${i}`;
    parenDiv.appendChild(newSpan);
}
