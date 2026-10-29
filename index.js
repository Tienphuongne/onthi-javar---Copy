axios.get(`http://localhost:3000/jobs`).then((res) => {
  console.log(res.data);

  document.getElementById("list").innerHTML = res.data
  .map(
    (item,index) => `<tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${index+1}</td>
              <td class="px-4 py-2 border border-gray-300">
                ${index.tittle}
              </td>
              <td class="px-4 py-2 border border-gray-300">${index.company}</td>
              <td class="px-4 py-2 border border-gray-300">${index.location}</td>
              <td class="px-4 py-2 border border-gray-300">${index.salary}</td>
              <td class="px-4 py-2 border border-gray-300">${index.employment}</td>
              <td class="px-4 py-2 border border-gray-300">${index.description}</td>
              <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                  <button
                  onclick="location.href='edit.html?id=${item.id}'"
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
  )
  .join("")
})