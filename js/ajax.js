$(document).ready(function () {
  var btn = document.getElementById("btn");
  var ajaxArea = document.getElementById("ajax-area");
  var postList = [];
  btn.addEventListener("click", async function () {
    await ajax();
    await printData();
  });

  async function ajax() {
    var url = "https://jsonplaceholder.typicode.com/posts";
    var response = await fetch(url);

    // collect data from response
    // get as a text()
    // get as a json()
    let data = await response.json();
    postList = data;
    // convert string json to pure json
    ///data = JSON.parse(data);
  }

  async function printData() {
    let _tr = postList.map(function (post, index) {
      return `<tr>
              <td>${index + 1}</td>
              <td>${post.title.substring(0, 50)}...</td>
              <td>${post.body.substring(0, 25)}...</td>
            </tr>`;
    });

    ajaxArea.innerHTML = _tr.join("");
    $("#table_id").DataTable();
  }
});
