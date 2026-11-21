//36.7 - Dom - textContent, innerHTML, innerText
// Chọn đến phần tử có id là "demo"

const elm = document.getElementById("demo");

// textContent
console.log("textContent");
console.log(elm.textContent);

// innerText
console.log("innerText");
console.log(elm.innerText);

// innerHTML
console.log("innerHTML");
console.log(elm.innerHTML);

// Chọn đến phân tử có id là "demo2"
const elm2 = document.getElementById("demo2");
elm2.innerHTML = "<p><i>Hingcanda</i></p>";
elm2.textContent = "<p><i>Hingcanda</i></p>";
