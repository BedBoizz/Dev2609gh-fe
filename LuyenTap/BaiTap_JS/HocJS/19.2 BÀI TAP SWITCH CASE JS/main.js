alert(`
  Chọn cách tìm kiếm:
  1. Tìm theo tên
  2. Tìm theo tác giả
  3. Tìm theo nhà sản xuất
  4. Tìm theo tiêu đề
  `);

let soTimKiem = parseInt(
  prompt(`
  Chọn cách tìm kiếm:
  1. Tìm theo tên
  2. Tìm theo tác giả
  3. Tìm theo nhà sản xuất
  4. Tìm theo tiêu đề
  `),
);

switch (soTimKiem) {
  case 1:
    alert("Bạn đã chọn tìm theo tên");
    break;
  case 2:
    alert("Bạn đã chọn tìm theo tác giả");
    break;
  case 3:
    alert("Bạn đã chọn tìm theo tên");
    break;
  case 4:
    alert("Bạn đã chọn tìm theo tiêu đề");
    break;
  default:
    alert("Thoát phím bấm không hợp lệ");
}
