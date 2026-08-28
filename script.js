//your JS code here. If required.
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
  existing.style.display = "block";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = username.value;
  const pass = password.value;

  alert("Logged in as " + name);

  if (checkbox.checked) {
    
    localStorage.setItem("username", name);
    localStorage.setItem("password", pass);
  } else {
    
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    existing.style.display = "none";
  }
});


existing.addEventListener("click", function () {
  const savedName = localStorage.getItem("username");

  if (savedName) {
    alert("Logged in as " + savedName);
  }
});
