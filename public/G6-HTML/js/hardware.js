// When the page loads, grab all of our hardware
$.get("/api/currentUser", data => {
  $("#user-real-name").text(data.name);
});

$.get("/api/all-hardware", function(data) {
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<tr>");

      row.append("<td>" + data[i].asset_type + "</td>");
      row.append("<td>" + data[i].manufacturer + "</td>");
      row.append("<td>" + data[i].model + "</td>");
      row.append("<td>" + data[i].asset_tag + "</td>");
      row.append("<td>" + data[i].serial_number + "</td>");
      row.append("<td>" + data[i].status + "</td>");
      row.append("</tr>");

      $("#tableRow").prepend(row);
    }
  }
});
