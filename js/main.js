//bài1
function handleTinhNgayTruocSau() {
    const ngayNhap = document.getElementById('ngayTruocSau').value;

    const result = tinhNgayTruocSau(ngayNhap);
    if (result) {
        document.querySelector('.result__bai1').innerHTML = `
            Ngày tiếp theo là: ${result.nextDate} <br>
            Ngày trước đó là: ${result.previousDate}
        `;
    }
}

function tinhNgayTruocSau(ngayNhap) {
    var tinhNgayTruocSau = moment(ngayNhap, 'YYYY-MM-DD');

    if (!tinhNgayTruocSau.isValid()) {
        alert("Định dạng ngày không đúng. Vui lòng nhập lại ");
        return;
    }

    let ngayTiepTheo = tinhNgayTruocSau.clone().add(1, 'days');

    if (ngayTiepTheo.date() === 1) {
        ngayTiepTheo = ngayTiepTheo.startOf('month');
    }

    const tinhNgayTiepTheo = ngayTiepTheo.format('YYYY-MM-DD');


    let ngayTruocDo;

    
    if (tinhNgayTruocSau.date() === tinhNgayTruocSau.daysInMonth()) {
        ngayTruocDo = tinhNgayTruocSau.clone().endOf('month');
    } else {
        ngayTruocDo = tinhNgayTruocSau.clone().subtract(1, 'days');
    }

    const tinhNgayTruocDo = ngayTruocDo.format('YYYY-MM-DD');

    return { nextDate: tinhNgayTiepTheo, previousDate: tinhNgayTruocDo };
}


document.querySelector("#handleTinhNgayTruocSau").onclick = function(){
    handleTinhNgayTruocSau();
}


//bài2
function kiemTraSoNgay() {
    var ngay = +document.getElementById("ngay").value;
    var thang = +document.getElementById("thang").value;
    var nam = +document.getElementById("nam").value;

    var soNgayTrongThang = kiemTraSoNgayTrongThang(thang, nam);

    if (soNgayTrongThang !== null) {
        document.querySelector(".result__bai2").innerHTML = `Tháng ${thang}/${nam} có ${soNgayTrongThang} ngày.`;
    } else {
        alert("Ngày hoặc tháng không hợp lệ.");
    }
}

function kiemTraSoNgayTrongThang(thang, nam) {
    if (1 <= thang && thang <= 12) {
        if ([1, 3, 5, 7, 8, 10, 12].includes(thang)) {
            return 31;
        } else if ([4, 6, 9, 11].includes(thang)) {
            return 30;
        } else if (thang === 2) {
            if ((nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0)) {
                return 29;  // Năm nhuận
            } else {
                return 28;
            }
        }
    }
    return;
}

document.querySelector("#kiemTraSoNgay").onclick = function(){
    kiemTraSoNgay();
}

//bài3
function inCachDocSo() {
    // Lấy giá trị số nguyên từ người dùng
    var soNguyen = parseInt(document.getElementById("soNguyen").value);

    // Kiểm tra xem số nguyên có 3 chữ số hay không
    if (soNguyen >= 100 && soNguyen <= 999) {
        var cachDoc = cachDocSo(soNguyen);
        document.querySelector(".result__bai3").innerHTML = `Cách đọc số ${soNguyen} là: ${cachDoc}`;
    } else {
        alert("Vui lòng nhập số nguyên có 3 chữ số.");
    }
}

function cachDocSo(soNguyen) {
    var donVi = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    var hangChuc = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];

    var hangTram = donVi[Math.floor(soNguyen / 100)];
    var hangChucThapPhan = soNguyen % 100;
    var hangChucCachDoc = hangChuc[Math.floor(hangChucThapPhan / 10)];
    var donViCachDoc = donVi[hangChucThapPhan % 10];

    return `${hangTram} trăm ${hangChucCachDoc} ${donViCachDoc}`;
}

document.querySelector("#inCachDocSo").onclick = function(){
    inCachDocSo();
}

//bài4

var toaDoTruong = { x: 10, y: 20 };

var sinhVien1 = { ten: "Sinh Viên 1", toaDo: { x: 5, y: 15 } };
var sinhVien2 = { ten: "Sinh Viên 2", toaDo: { x: 8, y: 18 } };
var sinhVien3 = { ten: "Sinh Viên 3", toaDo: { x: 12, y: 25 } };
function tinhKhoangCach(p1, p2) {
    var deltaX = p2.x - p1.x;
    var deltaY = p2.y - p1.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

function timSinhVienXaNhat() {
    var khoangCach1 = tinhKhoangCach(sinhVien1.toaDo, toaDoTruong);
    var khoangCach2 = tinhKhoangCach(sinhVien2.toaDo, toaDoTruong);
    var khoangCach3 = tinhKhoangCach(sinhVien3.toaDo, toaDoTruong);

    var sinhVienXaNhat;
    var khoangCachXaNhat = 0;

    if (khoangCach1 > khoangCach2 && khoangCach1 > khoangCach3) {
        sinhVienXaNhat = sinhVien1;
        khoangCachXaNhat = khoangCach1;
    } else if (khoangCach2 > khoangCach1 && khoangCach2 > khoangCach3) {
        sinhVienXaNhat = sinhVien2;
        khoangCachXaNhat = khoangCach2;
    } else {
        sinhVienXaNhat = sinhVien3;
        khoangCachXaNhat = khoangCach3;
    }

    document.querySelector(".result__bai4").innerHTML = `Sinh viên xa trường nhất là: ${sinhVienXaNhat.ten}, với khoảng cách là ${khoangCachXaNhat}`;
}

document.querySelector("#timSinhVienXaNhat").onclick = function(){
    timSinhVienXaNhat();
}