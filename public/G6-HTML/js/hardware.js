// When the page loads, grab all of our hardware
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
    $.get(`/api/user-hardware-ids/${user.id}`, usersData => {
      usersData.forEach(element => {
        $.get(`/api/user-hardware/${element.hardware_id}`, data => {
          const row = $("<tr>");

          row.append("<td>" + data.asset_type + "</td>");
          row.append("<td>" + data.manufacturer + "</td>");
          row.append("<td>" + data.model + "</td>");
          row.append("<td>" + data.serial_number + "</td>");
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
