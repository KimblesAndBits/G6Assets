
// When the page loads, grab all of our accessories
$.get("/api/all-accessories", function(data) {

    if (data.length !== 0) {

        for (var i = 0; i < data.length; i++) {

        var row = $("<tr>");

        row.append("<td>" + data[i].accessory_type + "</td>");
        row.append("<td>" + data[i].manufacturer + "</td>");
        row.append("<td>" + data[i].model + "</td>");
        row.append("<td>" + data[i].quantity_available + "</td>");
        row.append("<td>" + data[i].bin_location + "</td>");
        row.append("</tr>");

        $("#tableRow").prepend(row);

        }

    }

});