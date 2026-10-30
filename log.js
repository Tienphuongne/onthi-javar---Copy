document.getElementById("form-log").addEventListener("submit", (e) => {
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

    const user = {
        email: email,
        password: password
    };

    axios.post("http://localhost:3000/login", user)
        .then((res) => {
            // Luu token va thong tin user
            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            alert("Dang nhap thanh cong");
            window.location.href = "index.html";
        })
        .catch(() => {
            alert("Dang nhap that bai (sai email hoac mat khau)");
        });
});
