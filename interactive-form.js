$(document).ready(function () {
  $("#submitBtn").on("click", function () {
    var valid = true;

    // Reset previous errors
    $(".error-text").hide();
    $(".form-control, .form-select").removeClass("input-error");

    // Username, Email, Password, Confirm Password must not be empty
    $("#username, #email, #password, #confirmPassword").each(function () {
      if ($(this).val().trim() === "") {
        $(this).addClass("input-error");
        $("#" + this.id + "Error")
          .text("this filed must not be empty")
          .show();
        valid = false;
      }
    });

    // Confirm password must match password
    var password = $("#password").val();
    var confirmPassword = $("#confirmPassword").val();
    if (confirmPassword.trim() !== "" && confirmPassword !== password) {
      $("#confirmPassword").addClass("input-error");
      $("#confirmPasswordError")
        .text("confirmed password mismatched the password")
        .show();
      valid = false;
    }

    // At least one topic must be checked
    if ($(".topic:checked").length === 0) {
      $("#topicError").show();
      valid = false;
    }

    // Gender must be selected
    if ($("#gender").val() === "--") {
      $("#genderError").show();
      valid = false;
    }

    if (valid) {
      alert("Form submitted successfully!");
    }
  });
});
