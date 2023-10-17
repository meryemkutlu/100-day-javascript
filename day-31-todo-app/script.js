window.onload = function () {
    displayTaks();
};

// Variables
const input = document.querySelector("input"),
    btn = document.querySelector("button"),
    todoList = document.querySelector(".todo-list"),
    clear = document.querySelector(".clear");
let tasks;

btn.addEventListener("click", addTask);

//get taks from the local storage
function getTasks() {
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
}

function addTask() {
    if (input.value !== "") {
        addTaskToLS();
        todoList.innerHTML = "";
        displayTaks();
    } else {
        alert('Please enter a task');
    }
}

//save task to local storage
function addTaskToLS() {
    getTasks();
    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
}

//display task on the page 
function displayTaks() {
    getTasks();

    tasks.forEach((task, index) => {
        const newLi = document.createElement("li");
        const delBtn = document.createElement("button");
        delBtn.innerHTML = `<i class="fas fa-trash-alt" id="${index}" onclick="deleteTask(this.id)"></i> `;

        newLi.appendChild(document.createTextNode(task));
        newLi.appendChild(delBtn);
        todoList.appendChild(newLi);
    });
}

//delete tasks
function deleteTask(index) {
    const del = confirm("you are about to dalete this task!!!");
    if (del == true) {
        getTasks();
    }
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    todoList.innerHTML = "";
    displayTaks();
}

//clear tasks
clear.addEventListener("click", clearTasks);

function clearTasks() {
    const delTasks = confirm("Delete all tasks");
    if (delTasks === true) {
        localStorage.clear();
        todoList.innerHTML = "";
        displayTaks();
    }
}