axios.get("http://localhost:3000/jobs").then((rés) => {
    console.log(res.data);
    document.getElementById("list").innerHTML = res.data
    .map(
        (item,index) => ` 
        <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${index+1}</td>
              <td class="px-4 py-2 border border-gray-300">
                ${item.title}
              </td>
              <td class="px-4 py-2 border border-gray-300">${item.company}</td>
              
              <td class="px-4 py-2 border border-gray-300">${item.location}</td>
              <td class="px-4 py-2 border border-gray-300">${item.salary}</td>
              <td class="px-4 py-2 border border-gray-300">${item.employmentType}</td>
              <td class="px-4 py-2 border border-gray-300">${item.description}</td>
              <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                  <button
                  onclick="location.href='edit.html?id=${item.id}' "
                    class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                  onclick="deleteJobs('${item.id}')"
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>`
    ).join("");
});

function deleteJobs(id) {
    const xoa = confirm("Ban co xac nhan xoa hay khong?");

    if(xoa) {
        axios.delete(`http://localhost:3000/jobs/${id}`).then(() => 
        {window.location.href = "index.html";
            alert("Xoa thanh cong");
        }).catch(() => {
            alert("Xoa that bai");
        });
    }
}

document.getElementById("btn").addEventListener("click", () => {
    let keyword = document.getElementById("timkiem").value ;

    axios.get(`http://localhost:3000/jobs?title_like=${keyword}`).then((res) => {
        console.log("Ket qua tim kiem: ", keyword);

        document.getElementById("list") . innerHTML = res.data
        .map(
            (item,index) => `
            <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${index+1}</td>
              <td class="px-4 py-2 border border-gray-300">
                ${item.title}
              </td>
              <td class="px-4 py-2 border border-gray-300">${item.company}</td>
              
              <td class="px-4 py-2 border border-gray-300">${item.location}</td>
              <td class="px-4 py-2 border border-gray-300">${item.salary}</td>
              <td class="px-4 py-2 border border-gray-300">${item.employmentType}</td>
              <td class="px-4 py-2 border border-gray-300">${item.description}</td>
              <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                  <button
                  onclick="location.href='edit.html?id=${item.id}' "
                    class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                  onclick="deleteJobs('${item.id}')"
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>`,
        )
        .join("");
    });
});