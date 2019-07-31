
// When the page loads, grab all of our software
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
        row.append("</tr>");

        $("#tableRow").prepend(row);

        }

    }

});