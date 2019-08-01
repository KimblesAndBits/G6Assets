// When the page loads, grab all of our software
$.get("/api/currentUser", data => {
  $("#user-real-name").text(data.name);
});

$.get("/api/all-software", function(data) {
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<tr>");

      row.append("<td>" + data[i].manufacturer + "</td>");
      row.append("<td>" + data[i].product + "</td>");
      row.append("<td>" + data[i].product_key + "</td>");
      row.append("<td>" + data[i].expiration_date + "</td>");
      row.append("<td>" + data[i].license_size + "</td>");
      row.append("<td>" + data[i].license_available + "</td>");
      row.append("<td><a href='#' class='btn btn-success btn-circle btn-sm float-left' data-toggle='modal' data-target='#assignAsset'><span class='icon text-white-50'><i class='fas fa-check'></i></span></a><a href='#' class='btn btn-warning btn-circle btn-sm float-left' data-toggle='modal' data-target='#assignAsset'><span class='icon text-white-50'><i class='fas fa-exclamation-circle'></i></span></a><a href='#' class='btn btn-danger btn-circle btn-sm float-left' data-toggle='modal' data-target='#assignAsset'><span class='icon text-white-50'><i class='fas fa-trash'></i></span></a></td>");
      row.append("</tr>");

      $("#tableRow").prepend(row);
    }
  }
});
