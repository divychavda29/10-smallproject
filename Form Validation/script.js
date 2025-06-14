const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop form submission

  let valid = true;

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  document.getElementById("usernameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmError").textContent = "";

  if (username === "") {
    document.getElementById("usernameError").textContent = "Username is required";
    valid = false;
  }

  if (!email.includes("@") || email === "") {
    document.getElementById("emailError").textContent = "Enter a valid email";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
    valid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirmError").textContent = "Passwords do not match";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully ✅");
    form.reset(); // clear fields
  }
});
