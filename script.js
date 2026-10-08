const taskInput = document.getElementById("taskInput");

const taskList = document.getElementById("taskList");

const taskCount = document.getElementById("taskCount");

const completedCount = document.getElementById("completedCount");

const themeButton = document.getElementById("themeButton");


// Add task
function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.className = "task";

    li.innerHTML = `
        <span class="task-text">${taskText}</span>

        <button class="delete-button">
            Delete
        </button>
    `;

    // Complete task
    const text = li.querySelector(".task-text");

    text.addEventListener("click", function () {

        text.classList.toggle("completed");

        updateCounter();

    });


    // Delete task
    const deleteButton = li.querySelector(".delete-button");

    deleteButton.addEventListener("click", function () {

        li.remove();

        updateCounter();

    });


    taskList.appendChild(li);

    taskInput.value = "";

    updateCounter();
}


// Update task counters
function updateCounter() {

    const tasks = document.querySelectorAll(".task");

    const completedTasks =
        document.querySelectorAll(".completed");

    taskCount.innerText = tasks.length;

    completedCount.innerText =
        completedTasks.length;
}


// Add task when pressing Enter
taskInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        addTask();

    }

});


// Dark mode
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.innerText = "☀️";

    } else {

        themeButton.innerText = "🌙";

    }

});