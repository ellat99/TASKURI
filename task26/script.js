const jsonData = {
  carti: [
    { titlu: "1984", anul: 1949, genul: "Distopie", autor: "George Orwell" },
    {
      titlu: "Mândrie și prejudecată",
      anul: 1813,
      genul: "Romantic",
      autor: "Jane Austen",
    },
    {
      titlu: "Crimă și pedeapsă",
      anul: 1866,
      genul: "Dramă",
      autor: "Fiodor Dostoievski",
    },
  ],
};

// Funcție pentru a popula meniul derulant cu genurile unice
function populateGenreFilter() {
  const genreFilter = document.getElementById("genre-filter");
  const genres = new Set(jsonData.carti.map((carte) => carte.genul));

  genres.forEach((gen) => {
    const option = document.createElement("option");
    option.value = gen;
    option.textContent = gen;
    genreFilter.appendChild(option);
  });
}

// Funcție pentru a afișa cărțile pe pagină
function displayBooks(filteredGenre = "toate") {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = ""; // Curățăm lista înainte de a afișa cărțile

  jsonData.carti.forEach((carte) => {
    if (filteredGenre === "toate" || carte.genul === filteredGenre) {
      const bookDiv = document.createElement("div");
      bookDiv.style.marginBottom = "15px";

      bookDiv.innerHTML = `
                <strong>Titlu:</strong> ${carte.titlu}<br>
                <strong>Anul:</strong> ${carte.anul}<br>
                <strong>Genul:</strong> ${carte.genul}<br>
                <strong>Autor:</strong> ${carte.autor}
            `;

      bookList.appendChild(bookDiv);
    }
  });
}

// Event listener pentru filtrul de gen
document.getElementById("genre-filter").addEventListener("change", function () {
  const selectedGenre = this.value;
  displayBooks(selectedGenre);
});

// Populăm meniul derulant și afișăm toate cărțile la încărcarea paginii
window.onload = function () {
  populateGenreFilter();
  displayBooks();
};
