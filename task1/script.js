document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let errorMessage = document.getElementById("errorMessage");

    if (!name || !email || !message) {
      errorMessage.textContext = "All fields are required.";
      // errorMessage.style.display = "block";
      return;
    }
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //validează adresele de email
    if (!email.match(emailPattern)) {
      errorMessage.textContent = "please enter a valid email address.";
      errorMessage.style.display = "block";
      return;
    }
    errorMessage.style.display = "none";
    alert("form submitted successfully!");
  });
