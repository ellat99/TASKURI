document.addEventListener("DOMContentLoaded", function () {
  const dropBtns = document.querySelectorAll(".drop-btn");

  dropBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();

      const dropdownContent = this.nextElementSibling;
      dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
    });
  });
});
