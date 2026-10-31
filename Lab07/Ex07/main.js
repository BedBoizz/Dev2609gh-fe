const fn_dangky = () => {
    // Kiểm tra họ tên không được trống
    let check = true;
    let ht = document.getElementById("hoten").value;
    if (ht.trim() == "") {
        document.getElementById("errHoten").innerText = "Bạn chưa nhập họ tên";
        document.getElementById("errHoten").classList.add("error");
        check = false;
    } else {
        document.getElementById("errHoten").innerText = "ok";
        document.getElementById("errHoten").classList.add("success");
    }
    return false;
};
