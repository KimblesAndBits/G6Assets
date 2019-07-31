$.get("/api/currentUser", data => {
  $("#user-real-name").text(data.name);
});
