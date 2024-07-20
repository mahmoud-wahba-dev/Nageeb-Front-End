$(".showPassword").click(function () {
  var passwordInput = $(this).siblings("input");

  passwordInput.attr("type", function (index, attr) {
    return attr === "password" ? "text" : "password";
  });
});
