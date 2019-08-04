/* eslint-disable camelcase */
$(document).ready(function() {
  $("#login-button").on("click", function(e) {
    e.preventDefault();
    if ($("#userName").val() && $("#userPassword").val()) {
      let loginUser = {
        username: $("#userName").val(),
        password: $("#userPassword").val()
      };
      $.ajax("/api/login", {
        type: "POST",
        data: loginUser
      }).then(newPath => {
        location.replace(newPath);
      });
    }
  });
  $("#userPassword").keyup(function(event) {
    if (event.keyCode === 13) {
      $("#login-button").click();
    }
  });
  $("#requestSubmit").on("click", function() {
    let newRequest = {
      full_name: $("#fullName").val(),
      asset_type: $("#assetType").val(),
      laptop_type: $("#laptopType").val(),
      monitor_type: $("#monitorType").val(),
      software: $("#software").val(),
      accessory: $("#accessoryType").val()
    };
    $.ajax("/api/request", {
      type: "POST",
      data: newRequest
    }).then(function() {
      $("#fullName").val("");
      $("#assetType").val("");
      $("#laptopType").val("");
      $("#monitorType").val("");
      $("#software").val("");
      $("#accessoryType").val("");
      $("#requestModal").modal("hide");
    });
  });

  $("#logout").on("click", function() {
    $.get("/api/logout").then(function(newPath) {
      location.replace(newPath);
    });
  });
});
