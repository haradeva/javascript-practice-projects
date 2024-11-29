const input = document.getElementById("userInput");
const addTaskBtn = document.getElementById("addBtn");
const clearAllBtn = document.getElementById("clearBtn");
const taskLists = document.getElementById("tasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskLists.innerHTML = "";
  tasks.forEach((task) => {
    if (task && task.text) {
      const taskItem = document.createElement("li");
      taskItem.className = "task";
      taskItem.innerHTML = `${task.text}`;
      taskLists.appendChild(taskItem);
    }
  });
}

function addTask() {
  const taskText = input.value.trim();

  if (taskText) {
    tasks.push({ text: taskText });
    input.value = "";

    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  }
}

function clearAllTasks() {
  const confirm = window.confirm(
    "Are you sure you want to delete every thing?"
  );

  if (confirm) {
    localStorage.clear();
    tasks = [];
    renderTasks();
    console.log("All data has been cleared from localStorage.");
  } else {
    console.log("Data was not cleared.");
  }
}

addTaskBtn.addEventListener("click", addTask);

clearAllBtn.addEventListener("click", clearAllTasks);

renderTasks();
