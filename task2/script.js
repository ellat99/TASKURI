document.getElementById("addTaskBtn").addEventListener("click", function () {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value;
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  var li = document.createElement("li");
  li.textContent = taskText;

  var removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
});
