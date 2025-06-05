const button = document.querySelector(".button-add-task");

const input = document.querySelector(".input-task");

const listTasks = document.querySelector(".list-tasks")

const task = document.querySelector(".task")

let tasks = [];

function inputValue() {
    if (!input.value) {
        return
    }

    tasks.push({
        task: input.value,
        done: false
    })
    input.value = ""
    showTask()
}

function showTask() {

    let newTask = "";

    tasks.forEach((item, position) => {

        newTask = newTask + `
        <li class="task ${item.done && "done"}">
            <img src="assets/checked.png" alt="check Icon" onclick="taskDone(${position})">
            <p>${item.task}</p>
            <img src="assets/trash icon.png" alt="trash icon" onclick="deletaritem(${position})">
        </li>
        `
    })

    listTasks.innerHTML = newTask; 

    localStorage.setItem("list", JSON.stringify(tasks))
}

function deletaritem(position) {
    tasks.splice(position,1)
    showTask()
}

function taskDone(position) {
    tasks[position].done = !tasks[position].done
    showTask()
}

function reloadTasks() {
    const tasksSave = localStorage.getItem("list")

    if (tasksSave) {
        tasks = JSON.parse(tasksSave)
    }

    showTask()
}

reloadTasks()

button.addEventListener("click", inputValue)