document.getElementById("form-register").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email) {
        alert("Vui long nhap email");
        return;
    }
    if (!password) {
        alert("Vui long nhap mat khau");
        return;
    }
    if (password.length < 6) {
        alert("Mat khau phai co it nhat 6 ky tu");
        return;
    }

    const user = {
        email: email,
        password: password
    };

    axios.post("http://localhost:3000/register", user)
        .then(() => {
            alert("Dang ky thanh cong");
            window.location.href = "login.html";
        })
        .catch(() => {
            alert("Dang ky that bai (email da ton tai)");
        });
});
