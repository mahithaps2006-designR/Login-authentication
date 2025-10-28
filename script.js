const USER_DATA = {
  username: "admin",
  password: "12345"
};

const form = document.getElementById("loginForm");
const alertBox = document.getElementById("alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === USER_DATA.username && password === USER_DATA.password) {
    showAlert("Login successful!", "success");
    setTimeout(() => {
      window.location.href = "dashboard.html"; // Redirect to another page
    }, 1500);
  } else {
    showAlert("Invalid username or password!", "danger");
  }
});

function showAlert(message, type) {
  alertBox.className = `alert alert-${type}`;
  alertBox.textContent = message;
  alertBox.classList.remove("d-none");

  setTimeout(() => {
    alertBox.classList.add("d-none");
  }, 2000);
}