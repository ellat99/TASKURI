const categoryFilter = document.getElementById("categoryFilter");
const products = document.querySelectorAll(".product");

categoryFilter.addEventListener("change", () => {
  const selectedCategory = categoryFilter.value;
  products.forEach((product) => {
    if (
      selectedCategory === "all" ||
      product.dataset.category === selectedCategory
    ) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
