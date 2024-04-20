document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return;
      }
    
      loginForm.reset();
    });
    
  });