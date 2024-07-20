// phone number input
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  separateDialCode: true,
  initialCountry: "sa",
});

// Update the hidden input field
$(".iti__country").click(function () {
  var countryCodeInput = $(".country__code");

  var dialCode = $(this).attr("data-dial-code");

  countryCodeInput.val(dialCode);
  countryCodeInput.attr("value", dialCode);
});
