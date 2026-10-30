// Kiem tra da dang nhap chua
const token = localStorage.getItem("accessToken");
const user = JSON.parse(localStorage.getItem("user") || "null");

if (!token) {
    // Neu chua login thi da ve trang login
    alert("Ban can dang nhap de su dung chuc nang nay");
    window.location.href = "login.html";
}

// Ham dang xuat
function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    alert("Dang xuat thanh cong");
    window.location.href = "login.html";
}
