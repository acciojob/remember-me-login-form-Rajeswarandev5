//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const existing = document.getElementById("existing");

  
  function checkExistingUser() {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername !== null && savedPassword !== null) {
      existing.style.display = "block";
    } else {
      existing.style.display = "none";
    }
  }

  
  checkExistingUser();

  
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = username.value;
    const pass = password.value;

    alert("Logged in as " + name);

    if (checkbox.checked) {
      
      localStorage.setItem("username", name);
      localStorage.setItem("password", pass);

      
      existing.style.display = "block";
    } else {
      
      localStorage.removeItem("username");
      localStorage.removeItem("password");

      
      existing.style.display = "none";
    }
  });

  
  existing.addEventListener("click", function () {
    const savedName = localStorage.getItem("username");

    if (savedName !== null) {
      alert("Logged in as " + savedName);
    }
  });
});
