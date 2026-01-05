const form = document.getElementById("loginForm");
const errorMessage = document.getElementById("error");

// Hardcoded credentials
const ADMIN_LOGIN = "admin";
const ADMIN_PASSWORD = "1234";

if (form) {
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  // Basic validation
  if (login === "" || password === "") {
    errorMessage.textContent = "Please fill in all fields";
    return;
  }

  // Authentication check
if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
window.location.href = "admin.html";
  } else {
    errorMessage.textContent = "Invalid login or password";
  }
});
}
