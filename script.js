const taskForm = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");
const taskCountDisplay = document.querySelector("#task-count");
const completecount = document.querySelector("#counts");

let taskCount = 0;
let completedTasks = 0;

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskName = document.querySelector("#task-name").value;
  const taskDueDate = document.querySelector("#task-due-date").value;
  const task = createTask(taskName, taskDueDate);
  taskList.appendChild(task);
  taskCount++;
  updateTaskCount();
  taskForm.reset();
});

function createTask(name, dueDate) {
  const task = document.createElement("li");
  task.className = "task";

  const nameSpan = document.createElement("span");
  nameSpan.className = "name";
  nameSpan.textContent = name;
  task.appendChild(nameSpan);

  const dueDateSpan = document.createElement("span");
  dueDateSpan.textContent = dueDate;
  task.appendChild(dueDateSpan);

  const actions = document.createElement("div");
  actions.className = "actions";

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  actions.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  actions.appendChild(deleteButton);

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  actions.appendChild(completeButton);

  task.appendChild(actions);

  editButton.addEventListener("click", () => {
    const newName = prompt("Enter the new task name");
    nameSpan.textContent = newName;
  });

  deleteButton.addEventListener("click", () => {
    taskList.removeChild(task);
    taskCount--;
    TaskCount();
  });

  completeButton.addEventListener("click", () => {
    task.classList.toggle("completed");
    if (task.classList.contains("completed")) {
      completedTasks++;
    } else {
      completedTasks--;
    }
    TaskCount();
  });

  return task;
}

function updateTaskCount() {
  taskCountDisplay.textContent = `To-do list: ${taskCount}`;
}
function TaskCount() {
  completecount.textContent = `Completed: ${completedTasks}`;
}
