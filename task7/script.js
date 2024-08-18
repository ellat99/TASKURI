// script.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("articles.json")
    .then((response) => response.json())
    .then((data) => {
      let articlesContainer = document.getElementById("articles");
      data.forEach((article) => {
        let articleCard = document.createElement("div");
        articleCard.classList.add("card");
        articleCard.innerHTML = `
                    <h2>${article.title}</h2>
                    <p>${article.content}</p>
                `;
        articlesContainer.appendChild(articleCard);
      });
    })
    .catch((error) => console.error("Error fetching articles:", error));
});
