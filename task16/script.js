// // script.js
// document.addEventListener("DOMContentLoaded", function () {
//   const menuItems = document.querySelectorAll(".menu-item");

//   menuItems.forEach((item) => {
//     item.addEventListener("click", function (event) {
//       const submenu = this.querySelector(".submenu");
//       if (submenu) {
//         submenu.classList.toggle("open");
//         event.preventDefault();
//       }
//     });
//   });
// });
// script.js
document.addEventListener("DOMContentLoaded", function () {
  const likeBtn = document.querySelector(".like-btn");
  const likeCount = document.querySelector(".like-count");

  likeBtn.addEventListener("click", function () {
    let count = parseInt(likeCount.textContent);
    likeCount.textContent = count + 1;
  });
});
