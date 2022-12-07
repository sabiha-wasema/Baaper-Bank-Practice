document.getElementById("login-button").addEventListener("click", function() {
  //   console.log("clicked");
  const userEmailField = document.getElementById("user-email");
  const userEmail = userEmailField.value;
  const userPasswordField = document.getElementById("user-password");
  const userPassword = userPasswordField.value;
  //   console.log(userEmail, userPassword);
  if (userEmail == "baapbank@gmail.com" && userPassword == "secret21") {
    // console.log("valid");
    window.location.href = "banking.html";
  }
});
