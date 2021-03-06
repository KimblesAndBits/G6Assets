/* eslint-disable camelcase */

$.get("/api/currentUser", data => {
  $("#user-real-name").text(data.name);
});

$.get("/api/recent-software")
  .then(assetList => {
    console.log(assetList);
    assetList.forEach(currentAsset => {
      const row = $("<tr>");

      row.append("<td>Software</td>");
      row.append("<td>" + currentAsset.manufacturer + "</td>");
      row.append("<td>" + currentAsset.product + "</td>");
      row.append("<td>N/A</td>");
      row.append("<td>" + currentAsset.product_key + "</td>");
      row.append("<td>" + currentAsset.expiration_date + "</td>");
      row.append("<td>" + currentAsset.updatedAt + "</td>");
      row.append(
        "<td><a href='#' class='btn btn-success btn-circle btn-sm float-left' data-toggle='modal' data-target='#assignAsset'><span class='icon text-white-50'><i class='fas fa-check'></i></span></a><a href='#' class='btn btn-warning btn-circle btn-sm float-left' data-toggle='modal' data-target='#assignAsset'><span class='icon text-white-50'><i class='fas fa-exclamation-circle'></i></span></a><a href='#' class='btn btn-danger btn-circle btn-sm float-left' data-toggle='modal' data-target='#assignAsset'><span class='icon text-white-50'><i class='fas fa-trash'></i></span></a></td>"
      );
      row.append("</tr>");

      $("#last-update").prepend(row);
    });
  })
  .then(function() {
    $.get("/api/recent-hardware").then(assetList => {
      assetList.forEach(currentAsset => {
        const row = $("<tr>");

        row.append("<td>Hardware</td>");
        row.append("<td>" + currentAsset.manufacturer + "</td>");
        row.append("<td>" + currentAsset.model + "</td>");
        row.append("<td>" + currentAsset.asset_tag + "</td>");
        row.append("<td>" + currentAsset.serial_number + "</td>");
        row.append("<td>" + currentAsset.eol + "</td>");
        row.append("<td>" + currentAsset.updatedAt + "</td>");
        row.append(
          "<td><a href='#' class='btn btn-success btn-circle btn-sm float-left' data-toggle='modal' data-target='#assignAsset'><span class='icon text-white-50'><i class='fas fa-check'></i></span></a><a href='#' class='btn btn-warning btn-circle btn-sm float-left' data-toggle='modal' data-target='#assignAsset'><span class='icon text-white-50'><i class='fas fa-exclamation-circle'></i></span></a><a href='#' class='btn btn-danger btn-circle btn-sm float-left' data-toggle='modal' data-target='#assignAsset'><span class='icon text-white-50'><i class='fas fa-trash'></i></span></a></td>"
        );
        row.append("</tr>");

        $("#last-update").prepend(row);
      });
    });
  })
  .then(function() {
    $.get("/api/recent-accessories").then(assetList => {
      assetList.forEach(currentAsset => {
        const row = $("<tr>");

        row.append("<td>" + currentAsset.accessory_type + "</td>");
        row.append("<td>" + currentAsset.manufacturer + "</td>");
        row.append("<td>" + currentAsset.model + "</td>");
        row.append("<td>N/A</td>");
        row.append("<td>N/A</td>");
        row.append("<td>N/A</td>");
        row.append("<td>" + currentAsset.updatedAt + "</td>");
        row.append(
          "<td><a href='#' class='btn btn-success btn-circle btn-sm float-left' data-toggle='modal' data-target='#assignAsset'><span class='icon text-white-50'><i class='fas fa-check'></i></span></a><a href='#' class='btn btn-warning btn-circle btn-sm float-left' data-toggle='modal' data-target='#assignAsset'><span class='icon text-white-50'><i class='fas fa-exclamation-circle'></i></span></a><a href='#' class='btn btn-danger btn-circle btn-sm float-left' data-toggle='modal' data-target='#assignAsset'><span class='icon text-white-50'><i class='fas fa-trash'></i></span></a></td>"
        );
        row.append("</tr>");

        $("#last-update").prepend(row);
      });
    });
  });
