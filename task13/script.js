document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    alert("Nume: " + name + "\nEmail: " + email + "\nMesaj: " + message);

    // Aici poți adăuga cod pentru a trimite datele către un server
  });
