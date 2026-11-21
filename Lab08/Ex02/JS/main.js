// 1. Khởi tạo sản phẩm

let products = [
    {
        id: 1,
        title: "Giường châu Âu",
        image: "./IMG/IMG1.png",
        price: 22999000,
        qty: 1,
        thanhtien: 22999000,
    },

    {
        id: 2,
        title: "Cầu thang",
        image: "./IMG/IMG2.png",
        price: 30000000,
        qty: 1,
        thanhtien: 30000000,
    },
];

// 2. Định dạng tiền Việt Nam
function formatMoney(number) {
    return number.toLocaleString("vi-VN") + "VNĐ";
}

// 3. Hiển thị danh sách sản phẩm

function rederCart() {
    let html = "";

    products.forEach(function (product) {
        html += `
                <div
            class="cart-item"
            data-id="${product.id}"
            data-prrice="${product.price}"
        >
            <img
                src="${product.image}"
                class="product-image"
                alt="${product.title}"
            />

            <div class="product-info">
                <h4>${product.title}</h4>

                <div class="quantity">
                    <button class="decreasr">-</button>

                    <input
                        type="number"
                        class="qty"
                        value="${product.qty}"
                        min="1"
                    />

                    <button class="increase">+</button>
                </div>

                <p class="price">
                    Giá:
                    <span>${formatMoney(product.price)}</span>
                </p>

                <p class="line-total">
                    Thành tiền:
                    <span>${formatMoney}(product.thanhtien)</span>
                </p>
            </div>

            <div class="product-actions">
                <button class="delete">X</button>
                <button class="update">Cập nhập</button>
            </div>
        </div>
        `;
    });

    if (products.length === 0) {
        html = `<div class="empty-cart">Giỏ hàng trống!<div>`;
    }

    $("#cart-list").html(html);
    updateSummary();
}

// 4. Tính tổng tiền
debugger;
function updateSummary() {
    let subtotal = 0;

    $(".cart-item").each(function () {
        let price = Number($(this).attr("data-price"));

        let qty = Number($(this).find(".qty").val());

        subtotal += price * qty;
    });

    $("subtotal").text(formatMoney(subtotal));
    $("#total").text(formatMoney(subtotal));
}

// 5. Tính thành tiền sản phẩm

function calculateIteam(item) {
    let price = Number(item.attr("data-price"));

    let qty = Number(item.find(".qty").val());

    let thanhtien = price * qty;

    item.find(".line-total span").text(formatMoney(thanhtien));

    updateSummary;
}

// 6. Nút tăng số lượng

$("#cart-list").on("click", ".increase", function () {
    let item = $(this).closest(".cart-item");

    let input = item.find(".qty");

    let qty = Number(input.val());

    qty++;

    input.val(qty);

    calculateIteam(item);
});

// 7. Nút giảm số lượng

$("#cart-list").on("click", ".decrease", function () {
    let item = $(this).closest(".cart-item");

    let input = item.find(".qty");

    let qty = Number(input.val());

    if (qty > 1) {
        qty--;
    }

    input.val(qty);

    calculateIteam(item);
});

// 8. Xoá sản phẩm

$("#cart-list").on("click", ".delete", function () {
    let id = Number($this).closest(".cart-iteam").attr("data-id");

    products = products.filter(function (product) {
        return product.id !== id;
    });

    rederCart();
});

// 9. Cập nhật số lượng vào mảng

$("#cart-list").on("click", ".update", function () {
    let id = Number($(this).closest(".cart-item").attr("data-id"));

    let qty = Number($(this).closest(".cart-item").find(".qty").val());

    product.forEach(function (product) {
        if (product.id === id) {
            product.qty = qty;
            product.thanhtien = product.price * product.qty;
        }
    });

    rederCart();
});

// 10. Thay đổi số lượng bằng cách nhập trực tiếp

$("#cart-list").on("change", ".qty", function () {
    let qty = Number($(this).val());

    if (!Number.isInteger(qty) || qty < 1) {
        qty = 1;
    }

    $(this).val(qty);

    let item = $(this).closest(".cart-item");

    calculateIteam(item);
});

// 11. Đặt hàng ngay
$("#checkout").on("click", function () {
    if (products.length === 0) {
        alert("Giỏ hàng trống");
        return;
    }
    alert("Đặt hàng thành công!");
});

// 12. Tiếp tục mua hàng
$("#continue-shopping").on("click", function () {
    alert("Tiếp tục mua hàng");
});

// Khởi chạy chương trình
rederCart();
