var main = function() {
  $("form").submit(function() {
    var firstName = $("#first").val();
    var lastName = $("#last").val();
    var email = $("#email");
    var password = $("#password").val();
    
    if (firstName === "") {
      $("p.first-name-error").text("Please enter your first name.");
    }
    
    if (lastName === "") {
      $("p.last-name-error").text("Please enter your last name.");
    }
    
    if (email === "") {
      $("p.password-error").text("Please enter a password.");
    }
    
    if (password.length < 8) {
      $("p.password-error").text("Short passwords are easy to guess. Try one with at least 8 characters.");
    }
    
    if (email === "ka1130@o2.pl") {
      $("p.password-error").text("This email is already taken.");
    }

    return false;
  })
}

$(document).ready(main);