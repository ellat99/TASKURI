document.getElementById("submitBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  document.getElementById("greeting").innerText =
    "Hello, [numele utilizatorului]!";
});
