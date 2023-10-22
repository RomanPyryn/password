let passwordInput;
let weak;
let medium;
let strong;
let passwordForm;
let resetButton;
let saveButton;

function checkPasswordStrength() {
  const password = passwordInput.value;
  if (password.length === 0) {
    weak.style.backgroundColor = "lightgray";
    medium.style.backgroundColor = "lightgray";
    strong.style.backgroundColor = "lightgray";
  } else if (password.length < 8) {
    weak.style.backgroundColor = "red";
    medium.style.backgroundColor = "red";
    strong.style.backgroundColor = "red";
  } else {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*/=+-]/.test(password);

    if (hasLetters && hasNumbers && hasSymbols) {
      weak.style.backgroundColor = "green";
      medium.style.backgroundColor = "green";
      strong.style.backgroundColor = "green";
    } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
      weak.style.backgroundColor = "yellow";
      medium.style.backgroundColor = "yellow";
      strong.style.backgroundColor = "lightgray";
    } else {
      weak.style.backgroundColor = "red";
      medium.style.backgroundColor = "lightgray";
      strong.style.backgroundColor = "lightgray";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  passwordInput = document.getElementById("password");
  weak = document.getElementById("weak");
  medium = document.getElementById("medium");
  strong = document.getElementById("strong");
  passwordForm = document.getElementById("password-form");
  resetButton = document.getElementById("reset");
  saveButton = document.getElementById("save");

  const messageElement = document.getElementById("message");

  passwordForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const password = passwordInput.value;
    if (weak.style.backgroundColor === "green") {
      messageElement.textContent = `Пароль успішно збережено!`;
    } else {
      messageElement.textContent = "Введіть надійний пароль!";
    }
  });

  resetButton.addEventListener("click", function () {
    passwordInput.value = "";
    weak.style.backgroundColor = "lightgray";
    medium.style.backgroundColor = "lightgray";
    strong.style.backgroundColor = "lightgray";
    messageElement.textContent = "";
  });

  const showPasswordButton = document.querySelector(".show-password");
  showPasswordButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
});
