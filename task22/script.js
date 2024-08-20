// document.getElementById("changeTextBtn").addEventListener("click", function () {
//   document.getElementById("text").innerText = "Text schimbat!";
// });

// document.getElementById("toggleBtn").addEventListener("click", function () {
//   const text = document.getElementById("text");
//   if (text.style.display === "none") {
//     text.style.display = "block";
//   } else {
//     text.style.display = "none";
//   }
// });
// const app = document.getElementById("app");

// function loadHome() {
//   app.innerHTML = `<h1>Home</h1><p>Welcome to the home page!</p>`;
// }

// function loadAbout() {
//   app.innerHTML = `<h1>About</h1><p>This is the about page.</p>`;
// }

// document.getElementById("homeLink").addEventListener("click", function () {
//   loadHome();
// });

// document.getElementById("aboutLink").addEventListener("click", function () {
//   loadAbout();
// });

// // Load Home by default
// loadHome();

// const stars = document.querySelectorAll(".star");
// const ratingValue = document.getElementById("ratingValue");

// stars.forEach((star) => {
//   star.addEventListener("click", function () {
//     const rating = this.getAttribute("data-value");
//     ratingValue.innerText = `Your rating: ${rating}`;

//     stars.forEach((s) => {
//       if (s.getAttribute("data-value") <= rating) {
//         s.style.color = "gold";
//       } else {
//         s.style.color = "grey";
//       }
//     });
//   });
// });
// const searchInput = document.getElementById("searchInput");
// const itemList = document.getElementById("itemList");
// const items = itemList.getElementsByTagName("li");

// searchInput.addEventListener("keyup", function () {
//   const filter = searchInput.value.toLowerCase();
//   Array.from(items).forEach((item) => {
//     const text = item.textContent.toLowerCase();
//     item.style.display = text.includes(filter) ? "" : "none";
//   });
// });

document
  .getElementById("postCommentBtn")
  .addEventListener("click", function () {
    const commentInput = document.getElementById("commentInput").value;
    if (commentInput) {
      const listItem = document.createElement("li");
      listItem.textContent = commentInput;
      document.getElementById("commentsList").appendChild(listItem);
      document.getElementById("commentInput").value = "";
    }
  });
let timeLeft = 10;
const progressBar = document.getElementById("progress");
const timeRemaining = document.getElementById("timeRemaining");

const timer = setInterval(function () {
  timeLeft--;
  timeRemaining.innerText = `Time remaining: ${timeLeft}s`;
  progressBar.style.width = `${(10 - timeLeft) * 10}%`;

  if (timeLeft <= 0) {
    clearInterval(timer);
  }
}, 1000);
