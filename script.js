const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `<span>${taskText}</span> <button class="delete-btn">Delete</button>`;
  taskList.appendChild(li);
  input.value = "";
});

taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.closest("li").remove();
  }
});
