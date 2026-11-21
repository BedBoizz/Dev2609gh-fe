//36.12 : append, prepend :
//Phương thức dùng để thêm một hoặc nhiều phần tử con vào trong phần tử cha
//append: Thêm vào cuối
//prepend: Thêm vào đầu
// 🤞 Ví dụ 1:
//Bước 1. create element
//Cú pháp: document.createElement('element')    //element: tên thẻ cần tạo

const newImg = document.createElement("img");
console.log(newImg);

// Bước 2. set attribute
newImg.setAttribute("src", "./assets/img/most_slide_1.jpg");

// Cách 2:
newImg.src = "./assets/img/most_slide_1.jpg";

// Bước 3. append: Thêm vào 1 phân tử đang sẵn có
document.body.append(newImg); // Thêm vào phần tử cuối cha(Trong trường hợp này là body)
// set chiều rộng 100% viewport width
newImg.style.width = "100vw";

// Ví dụ 2: Thêm thẻ p
const newText = document.createElement("p"); // Bước 1: tạo element
newText.textContent = "Xin chào, mình đang học Js"; // Bước 2: set attribute
document.body.append(newText);

// Ví dụ 3: thêm vào 1 phân tử khác
const p = document.querySelector(".hero__desc");
p.append("Sông cầu nước chảy lơ thơ, có đôi trai giá ngồi hơn quần đùi");

// Ví dụ 4: Thêm nhiều phân tử cuối vào phân tử cha
// Tạo các phân tử mới
let elm1 = document.createElement("p");
elm1.textContent = "Đây là đoạn thêm vào";

let elm2 = document.createElement("span");
elm2.textContent = "Đây là thẻ span";

// Lấy phần tử cha
let container = document.querySelector(".hero__heading");
// Thêm nhiều phần tử mới vào cuối phân tử cha
container.append(elm1, elm2, "Some one text");

// Prepend
// Nếu muốn thêm vào đầu phần tử cha thì dùng prepend
container.prepend("hi ! ");

// Không trả về giá trị

console.log(container.prepend("hi ! "));
