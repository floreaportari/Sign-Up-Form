const form = document.querySelector("form");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkPassword();
});

function checkPassword() {
  if (password.value !== password2.value) {
    password2.setCustomValidity("Passwords do not match");
    password2.style.borderColor = "red";
  } else {
    password.setCustomValidity("");
  }
}
