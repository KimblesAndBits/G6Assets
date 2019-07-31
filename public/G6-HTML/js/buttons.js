$(document).ready(function() {
  $("#login-button").on("click", function(e) {
    e.preventDefault();
    let loginUser = {
      username: $("#userName").val(),
      password: $("#userPassword").val()
    };
    $.ajax("/api/login", {
      type: "POST",
      data: loginUser
    }).then(newPath => {
      console.log(newPath);
      location.replace("/admin");
    });
  });
});
