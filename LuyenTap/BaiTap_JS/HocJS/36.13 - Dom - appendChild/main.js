// 36.13 - Dom - appendChild
//Xác định phần tử cha
let parentElm = document.querySelector("#header");
console.log(parentElm);

// Tạo phần tử con mới, ví dụ thẻ p
let p_elm = document.createElement("p");
// Thêm nội dung vào thẻ p
p_elm.textContent = "Đừng đùa với nhà chùa";
// Thêm màu cho thẻ p
p_elm.style.background = "green";
// Thêm class cho thẻ p_elm
p_elm.setAttribute("class", "Doan_van");

/*
1. **Đối tượng có thể thêm**:
   - `appendChild` chỉ thêm được đối tượng `Node`.
   - `append` thêm được cả `Node` và chuỗi văn bản.
*/

// parentElm.appendChild(p_elm);
// parentElm.append(p_elm);
// Sau khi có class mới được thêm, chúng ta có thể tuỳ biến css cho chúng

//appendChild Không thêm được văn bản
// parentElm.appendChild("Môn đăng hộ dối");
// parentElm.append("Môn đăng hộ dối");
//TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.

/*
2. **Trả về giá trị**:
   - `appendChild` trả về phần tử vừa được thêm.
   - `append` không trả về giá trị.
*/

console.log(parentElm.appendChild(p_elm)); // p.doan_van (return node được thêm)
console.log(parentElm.append(p_elm)); // undefined

/*
3. **Thêm nhiều phần tử**:
   - `appendChild` chỉ thêm được một phần tử mỗi lần gọi.
   - `append` có thể thêm nhiều phần tử hoặc chuỗi văn bản trong một lần gọi.
*/

// Tạo thêm 1 phần tử
let h3 = document.createElement("h3");
h3.textContent = "Đây là thẻ mới";

// parentElm.append(p_elm, h3, "Đây là 1 thẻ mới nữa"); //thêm được nhiều node, hoặc text cùng lúc
// parentElm.appendChild(p_elm, h3, "Đây là 1 thẻ mới nữa"); //không thêm được đồng thời
// Thêm bằng appendChild, thêm từng phần tử
parentElm.appendChild(p_elm);
parentElm.appendChild(h3);

//Do appendChild có giá trị trả về nên:
// Ta có thể Thêm và ngay lập tức thao tác với phần tử
// Tạo phần tử mới
let btn = document.createElement("button");
btn.textContent = "Bấm vào đi";
// Thêm phần tử mới vào một phần tử cha và nhận giá trị trả về
let adderBtn = parentElm.appendChild(btn);

// Gán sự kiện click cho phần tử vừa được thêm
adderBtn.addEventListener("click", function () {
    alert("Bạn vừa mới bấm đấy ");
});
