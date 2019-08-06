// When the page loads, grab all of our accessories
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
  console.log(name);
  $.get(`/api/user/${name}`, user => {
    $.get(`/api/user-accessories-ids/${user.id}`, usersData => {
      usersData.forEach(element => {
        $.get(`/api/user-accessories/${element.accessory_id}`, data => {
          const row = $("<tr>");

          row.append("<td>" + data.accessory_type + "</td>");
          row.append("<td>" + data.manufacturer + "</td>");
          row.append("<td>" + data.model + "</td>");
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
