// document.addEventListener("DOMContentLoaded", function () {
//   const tabButtons = document.querySelectorAll(".tab-button");
//   const tabContents = document.querySelectorAll(".tab-content");

//   tabButtons.forEach((button) => {
//     button.addEventListener("click", function () {
//       // Remove active class from all buttons
//       tabButtons.forEach((btn) => btn.classList.remove("active"));
//       // Add active class to the clicked button
//       this.classList.add("active");

//       // Hide all tab contents
//       tabContents.forEach((content) => content.classList.remove("active"));
//       // Show the content corresponding to the clicked tab
//       const tabId = this.getAttribute("data-tab");
//       document.getElementById(tabId).classList.add("active");
//     });
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const fadeInSections = document.querySelectorAll(".fade-in-section");

  const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once the section has become visible
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  fadeInSections.forEach((section) => {
    sectionObserver.observe(section);
  });
});
