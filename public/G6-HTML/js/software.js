// When the page loads, grab all of our software
$.get("/api/currentUser", data => {
  $("#user-real-name").text(data.name);
});

$.get("/api/all-users", data => {
  if (data.length > 0) {
    data.forEach(element => {
      $("#userChoice").append(
        `<option value="${element.name}">${element.name}</option>`
      );
    });
  }
});

$("#userAssets").on("click", function() {
  let name = $("#userChoice").val();
  $("#tableRow").empty();
  console.log(name);
  $.get(`/api/user/${name}`, user => {
    $.get(`/api/user-software-ids/${user.id}`, usersData => {
      usersData.forEach(element => {
        $.get(`/api/user-software/${element.software_id}`, data => {
          const row = $("<tr>");

          row.append("<td>" + data.manufacturer + "</td>");
          row.append("<td>" + data.product + "</td>");
          row.append("<td>" + data.product_key + "</td>");
          row.append("<td>" + data.expiration_date + "</td>");
          row.append(
            "<td><a href='#' class='btn btn-danger btn-circle btn-sm' data-toggle='modal' data-target='#assignAsset'><span class='icon text-white-50'><i class='fas fa-trash'></i></span></a>  Unassign Asset</td>"
          );
          row.append("</tr>");

          $("#tableRow").prepend(row);
        });
      });
    });
  });
});
