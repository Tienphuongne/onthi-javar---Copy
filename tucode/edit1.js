const id = new URLSearchParams(window.location.search).get("id");

axios.get(`http://localhost:3000/jobs/${id}`).then((res) => {
    console.log(res.data);
    const jobs = res.data;

    const title = (document.getElementById("title").value = jobs.title);
    const company = (document.getElementById("company").value = jobs.company);
    const location = (document.getElementById("location").value = jobs.location);
    const salary = (document.getElementById("salary").value = jobs.salary);
    const emplloymentType = (document.getElementById("employmentType").value = jobs.emplloymentType);
    const description = (document.getElementById("description").value = jobs.description);

    document.getElementById("form-edit").addEventListener("submit", (k) => {

        k.preventDefault();
        const title = document.getElementById("title").value;
        const company = document.getElementById("company");
        const location = document.getElementById("location");
        const salary = document.getElementById("salary").value;
        const employmentType = document.getElementById("employmentType").value;
        const description = document.getElementById("description").value;



        const editJobs = {
            title: title,
            company: company,
            location: location,
            salary: salary,
            employmentType: employmentType,
            description: description,
        };

        console.log(editJobs);

            console.log(editjobs);

    if (!title) {
      alert("Vui lòng nhập tiêu đề");
      return;
    }

    if (!company) {
      alert("Vui lòng nhập công ty");
      return;
    }

    if (!location) {
      alert("Vui lòng nhập địa chỉ");
      return;
    }

    if (!salary) {
      alert("Vui lòng nhập lương");
      return;
    }

    if (Number(salary) < 0) {
      alert("Tiền lương không được nhỏ hơn 0");
      return;
    }

    if (!employmentType) {
      alert("Vui lòng chọn loại hình việc làm");
      return;
    }

    if(!description){
      alert("Vui long nhap mieu ta");
      return;
    }

    axios
      .put(`http://localhost:3000/jobs/${id}`, editjobs)
      .then(() => {
        window.location.href = "index.html";
        alert("Cập nhật thành công");
      })
      .catch(() => {
        alert("Cập nhật thất bại");
      });
  });
});
