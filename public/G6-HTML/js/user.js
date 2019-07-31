$.get("/api/currentUser", function(currentUser) {
  $("#user-real-name").text(currentUser.name);
  $.get(`/api/user-accessories-ids/${currentUser.id}`)
    .then(accessoryList => {
      const head = $("<thead>");
      head.append("<tr>");
      head.append("<td>Type</td>");
      head.append("<td>Manufacturer</td>");
      head.append("<td>Model</td>");
      $("#dataTable").append(head);
      $("#dataTable").append("<tbody id='tableRow'");
      accessoryList.forEach(element => {
        $.get(`/api/user-accessories/${element.accessory_id}`).then(
          currentAccessory => {
            const row = $("<tr>");

            row.append("<td>" + currentAccessory.accessory_type + "</td>");
            row.append("<td>" + currentAccessory.manufacturer + "</td>");
            row.append("<td>" + currentAccessory.model + "</td>");
            row.append("</tr>");

            $("#tableRow").prepend(row);
          }
        );
      });
    })
    .then(function() {
      $.get(`/api/user-software-ids/${currentUser.id}`).then(softwareList => {
        const head = $("<thead>");
        head.append("<tr>");
        head.append("<td>Product</td>");
        head.append("<td>Manufacturer</td>");
        head.append("<td>Expiration Date</td>");
        head.append("</tr");
        head.append("</thead>");
        $("#dataTable").prepend("<tbody id='softwareRow'");
        $("#dataTable").prepend(head);
        softwareList.forEach(element => {
          $.get(`/api/user-software/${element.software_id}`).then(
            currentSoftware => {
              const row = $("<tr>");

              row.append("<td>" + currentSoftware.product + "</td>");
              row.append("<td>" + currentSoftware.manufacturer + "</td>");
              row.append("<td>" + currentSoftware.expiration_date + "</td>");
              row.append("</tr>");
              row.append("</tbody>");

              $("#softwareRow").prepend(row);
            }
          );
        });
      });
    })
    .then(function() {
      $.get(`/api/user-hardware-ids/${currentUser.id}`).then(hardwareList => {
        const head = $("<thead>");
        head.append("<tr>");
        head.append("<td>Type</td>");
        head.append("<td>Manufacturer</td>");
        head.append("<td>Model</td>");
        head.append("<td>Serial Number</td>");
        head.append("</tr");
        head.append("</thead>");
        $("#dataTable").prepend("<tbody id='hardwareRow'");
        $("#dataTable").prepend(head);
        hardwareList.forEach(element => {
          $.get(`/api/user-hardware/${element.hardware_id}`).then(
            currentHardware => {
              const row = $("<tr>");

              row.append("<td>" + currentHardware.asset_type + "</td>");
              row.append("<td>" + currentHardware.manufacturer + "</td>");
              row.append("<td>" + currentHardware.model + "</td>");
              row.append("<td>" + currentHardware.serial_number + "</td>");
              row.append("</tr>");
              row.append("</tbody>");

              $("#hardwareRow").prepend(row);
            }
          );
        });
      });
    });
});
