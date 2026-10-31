// Định nghĩa đối tượng đối tượng product
const Product = function (id, name, quantity, price, status) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.status = status;
};
// // Tạo một dối tượng
// const product = new Product(1, "Laptop Dell", 10, 15000000, true);
// console.log(product);

//Tạo danh sách sản phẩm
let products = [
    new Product(10, "Labtop Dell", 10, 15000000, true),
    new Product(20, "Laptop HP", 15, 12000000, true),
    new Product(30, "Laptop Asus", 8, 13500000, true),
    new Product(44, "Laptop Lenovo", 12, 14000000, true),
    new Product(55, "Laptop Acer", 20, 11000000, true),
    new Product(60, "Mouse Logitech", 30, 350000, true),
    new Product(71, "Keyboard Corsair", 18, 1200000, true),
    new Product(82, "Monitor Samsung", 10, 4500000, true),
    new Product(91, "Headphone Sony", 25, 1800000, false),
    new Product(11, "Webcam Logitech", 14, 950000, true),
];

function loadProducts(prods) {
    console.log(prods);
    let table = `
                <table cellspacing= "0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>id</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Giá tiền</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                `;

    // Duyệt trong mảng
    products.forEach((item, index) => {
        let tt = item.status
            ? '<span class="green">Còn hàng</span>'
            : '<span class="red">Hết hàng</span>';
        table += `
    <tr>
        <td>${++index}</td>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${item.price}</td>
        <td>${item.quantity * item.price}</td>
        <td>${tt}</td>
    </tr>
    
    `;
    });

    table += `</tbody> </table>`;

    document.getElementById("product-list").innerHTML = table;
}
