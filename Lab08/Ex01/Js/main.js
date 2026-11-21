
// =====================================
// 1. DỮ LIỆU SINH VIÊN
// =====================================

let students = [
    {
        studentId: "SV001",
        studentName: "Nguyễn Văn A",
        age: 20,
        sex: true,
        birthDate: "2002-04-23",
        birthPlace: "HN",
        address: "25, Vũ Ngọc Phan"
    },
    {
        studentId: "SV002",
        studentName: "Nguyễn Văn B",
        age: 21,
        sex: false,
        birthDate: "2001-09-09",
        birthPlace: "ĐN",
        address: "1, Ngô Quyền"
    },
    {
        studentId: "SV003",
        studentName: "Nguyễn Văn C",
        age: 19,
        sex: true,
        birthDate: "2003-07-07",
        birthPlace: "HCM",
        address: "1, Lý Tự Trọng"
    },
    {
        studentId: "SV004",
        studentName: "Nguyễn Văn D",
        age: 29,
        sex: false,
        birthDate: "2005-07-07",
        birthPlace: "HCM",
        address: "1, Lý Tự Trọng"
    }
];


// Vị trí sinh viên đang sửa
let editIndex = -1;


// =====================================
// 2. HIỂN THỊ DANH SÁCH SINH VIÊN
// =====================================

function renderStudents() {

    $("#studentTable").empty();

    // Lấy danh sách tìm kiếm
    let keyword = $("#searchInput").val().trim().toLowerCase();

    let displayStudents = students.map(function (student, index) {
        return {
            student: student,
            index: index
        };
    });

    // Lọc sinh viên theo mã hoặc tên
    displayStudents = displayStudents.filter(function (item) {

        return (
            item.student.studentId.toLowerCase().includes(keyword) ||
            item.student.studentName.toLowerCase().includes(keyword)
        );

    });

    // Sắp xếp theo tuổi
    let sortType = $("#sortAge").val();

    if (sortType === "asc") {

        displayStudents.sort(function (a, b) {
            return a.student.age - b.student.age;
        });

    } else if (sortType === "desc") {

        displayStudents.sort(function (a, b) {
            return b.student.age - a.student.age;
        });

    }

    // Hiển thị từng sinh viên
    $.each(displayStudents, function (displayIndex, item) {

        let student = item.student;
        let index = item.index;

        let row = `
            <tr>
                <td>${displayIndex + 1}</td>
                <td>${student.studentId}</td>
                <td>${student.studentName}</td>
                <td>${student.age}</td>
                <td>${student.sex ? "Nam" : "Nữ"}</td>

                <td>
                    <button type="button" class="btn-view" data-index="${index}">
                        Xem
                    </button>

                    <button type="button" class="btn-edit" data-index="${index}">
                        Sửa
                    </button>

                    <button type="button" class="btn-delete" data-index="${index}">
                        Xóa
                    </button>
                </td>
            </tr>
        `;

        $("#studentTable").append(row);

    });

}


// Hiển thị khi mở trang
renderStudents();


// =====================================
// 3. NÚT THÊM MỚI SINH VIÊN
// =====================================

$("#btnAdd").click(function () {

    editIndex = -1;

    $("#studentForm")[0].reset();

});


// =====================================
// 4. LƯU SINH VIÊN
// =====================================

$("#studentForm").submit(function (event) {

    event.preventDefault();

    // Lấy dữ liệu từ form
    let id = $("#studentId").val().trim();
    let name = $("#studentName").val().trim();
    let age = Number($("#age").val());
    let sex = $("#sex").val() === "true";
    let date = $("#birthDate").val();
    let place = $("#birthPlace").val().trim();
    let address = $("#address").val().trim();


    // Kiểm tra dữ liệu
    if (
        !id ||
        !name ||
        !Number.isInteger(age) ||
        age < 1 ||
        !date ||
        !place ||
        !address
    ) {

        alert("Vui lòng nhập đầy đủ thông tin hợp lệ!");
        return;

    }


    // Kiểm tra mã sinh viên trùng
    let isDuplicate = false;

    for (let i = 0; i < students.length; i++) {

        if (i === editIndex) {
            continue;
        }

        if (students[i].studentId.toLowerCase() === id.toLowerCase()) {

            isDuplicate = true;
            break;

        }

    }

    if (isDuplicate) {

        alert("Mã sinh viên đã tồn tại!");
        return;

    }


    // Tạo object sinh viên mới
    let newStudent = {
        studentId: id,
        studentName: name,
        age: age,
        sex: sex,
        birthDate: date,
        birthPlace: place,
        address: address
    };


    // Thêm hoặc sửa
    if (editIndex === -1) {

        students.push(newStudent);

        alert("Thêm sinh viên thành công!");

    } else {

        students[editIndex] = newStudent;

        alert("Cập nhật sinh viên thành công!");

        editIndex = -1;

    }


    // Xóa form
    $("#studentForm")[0].reset();

    // Hiển thị lại danh sách
    renderStudents();

});


// =====================================
// 5. NÚT XEM SINH VIÊN
// =====================================

$(document).on("click", ".btn-view", function () {

    let index = Number($(this).attr("data-index"));

    let student = students[index];

    $("#studentId").val(student.studentId);
    $("#studentName").val(student.studentName);
    $("#age").val(student.age);
    $("#sex").val(String(student.sex));
    $("#birthDate").val(student.birthDate);
    $("#birthPlace").val(student.birthPlace);
    $("#address").val(student.address);

    // Không chuyển sang chế độ sửa
    editIndex = -1;

});


// =====================================
// 6. NÚT SỬA SINH VIÊN
// =====================================

$(document).on("click", ".btn-edit", function () {

    let index = Number($(this).attr("data-index"));

    let student = students[index];

    $("#studentId").val(student.studentId);
    $("#studentName").val(student.studentName);
    $("#age").val(student.age);
    $("#sex").val(String(student.sex));
    $("#birthDate").val(student.birthDate);
    $("#birthPlace").val(student.birthPlace);
    $("#address").val(student.address);

    // Đánh dấu vị trí đang sửa
    editIndex = index;

});


// =====================================
// 7. NÚT XÓA SINH VIÊN
// =====================================

$(document).on("click", ".btn-delete", function () {

    let index = Number($(this).attr("data-index"));

    let confirmDelete = confirm(
        "Bạn có chắc chắn muốn xóa sinh viên này?"
    );

    if (confirmDelete) {

        students.splice(index, 1);

        // Điều chỉnh vị trí đang sửa
        if (editIndex === index) {

            editIndex = -1;
            $("#studentForm")[0].reset();

        } else if (editIndex > index) {

            editIndex--;

        }

        renderStudents();

        alert("Xóa sinh viên thành công!");

    }

});


// =====================================
// 8. TÌM KIẾM SINH VIÊN
// =====================================

$("#btnSearch").click(function () {

    renderStudents();

});


// =====================================
// 9. SẮP XẾP SINH VIÊN
// =====================================

$("#sortAge").change(function () {

    renderStudents();

});
