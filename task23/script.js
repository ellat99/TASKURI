const itemList = document.getElementById("itemList");

document.getElementById("addItemBtn").addEventListener("click", function () {
  const itemInput = document.getElementById("itemInput").value;
  if (itemInput) {
    const listItem = document.createElement("li");
    listItem.textContent = itemInput;
    listItem.addEventListener("click", function () {
      const newItem = prompt("Edit item:", this.textContent);
      if (newItem) {
        this.textContent = newItem;
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      listItem.remove();
    });
    listItem.appendChild(deleteBtn);

    itemList.appendChild(listItem);
    document.getElementById("itemInput").value = "";
  }
});
