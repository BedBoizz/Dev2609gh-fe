let buttons = document.querySelectorAll(".btn");

// Duyệt for để lấy các phân tử
for (let btn of buttons) {
    if (btn instanceof HTMLElement) {
        btn.style.background = "red";
        btn.innerHTML = "Click me";
        btn.style.fontSize = "2em";
        btn.style.color = "white";
    }
}
