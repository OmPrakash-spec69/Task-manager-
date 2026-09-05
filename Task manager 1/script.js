const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");


function updateEmptyState() {
  if (taskList.children.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}


function addTask(taskText) {

  const li = document.createElement("li");
  li.className = "task-item";


  const contentDiv = document.createElement("div");
  contentDiv.className = "task-content";

  const checkbox = document.createElement("span");
  checkbox.className = "custom-checkbox";

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  contentDiv.appendChild(checkbox);
  contentDiv.appendChild(span);


  contentDiv.addEventListener("click", () => {
    li.classList.toggle("completed");
  });


  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "&times;";
  deleteBtn.setAttribute("title", "Delete task");


  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateEmptyState();
  });


  li.appendChild(contentDiv);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);


  updateEmptyState();
}


taskForm.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const text = taskInput.value.trim();


  if (text !== "") {
    addTask(text);
    taskInput.value = "";
    taskInput.focus();
  }
});


updateEmptyState();