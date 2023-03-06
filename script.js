function validateEmail() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
  
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(email)) {
      // Email is valid, clear error message, reset border style, and clear input area
      emailError.innerHTML = "";
      document.getElementById("email").classList.remove("invalid");
      document.getElementById("email").value = "";
    } else {
      // Email is invalid, set error message and change border style to red
      emailError.innerHTML = "Check your email please";
      document.getElementById("email").classList.add("invalid");
    }
  }
  