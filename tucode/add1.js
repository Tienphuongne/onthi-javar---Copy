document.getElementById("form-add").addEventListener("submit", (k) => {
    k.preventDefault();

    const title = document.getElementById("title").value ;
    const company = document.getElementById("company").value ;
    const location = document.getElementById("location").value ;
    const salary = document.getElementById("salary").value ;
    const description = document.getElementById("description").value ;
    const employmentType = document.getElementById("employmentType").value ;

    const addJobs ={
        title: title,
        company: company,
        location: location,
        salary: salary,
        employmentType: employmentType,
        description: description    
    };

    console.log(addJobs);

    if(!title) {
        alert("Vui long nhap tieu de");
        return;
    }
    if(!company) {
        alert("Vui long nhap cong ty");
        return;
    }
    if(!location) {
        alert("Vui long nhap dia chi");
        return;
    }
    if(!salary) {
        alert("Vui long nhap nhap luong");
        return;
    }
    if(!Number(salary)<0) {
        alert("Tien luong khong duoc nho hon 0");
        return;
    }
    if(!employmentType) {
        alert("Vui long chon loai hinh viec lam");
        return;
    }
    if(!description) {
        alert("Vui long nhap mieu ta");
        return;
    }

    axios.post(` http://localhost:3000/jobs`, addJobs).then(() => 
    {
        window.location.href = "index.html";
        alert("Them thanh cong");
    })
    .catch (() => {
        alert ("Them that bai");
    });

});