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
});
