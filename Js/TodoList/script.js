document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});

function addItem() {
    var itemName = document.getElementById("itemName").value;
    var itemDate = document.getElementById("itemDate").value;
    var priority = document.getElementById("priority").value;

    var todoList = JSON.parse(localStorage.getItem("todoList")) || [];

    var newItem = {
        name: itemName,
        date: itemDate,
        priority: priority,
        completed: false
    };

    todoList.push(newItem);
    localStorage.setItem("todoList", JSON.stringify(todoList));

    loadTasks();
}

function loadTasks() {
    var todoList = JSON.parse(localStorage.getItem("todoList")) || [];

    var today = new Date().toISOString().split('T')[0];
    var todayTasksList = document.getElementById("todayTasksList");
    var futureTasksList = document.getElementById("futureTasksList");
    var completedTasksList = document.getElementById("completedTasksList");

    todayTasksList.innerHTML = '';
    futureTasksList.innerHTML = '';
    completedTasksList.innerHTML = '';

    todoList.forEach(function(task, index) {
        var listItem = document.createElement("li");
        listItem.textContent = task.name + " - " + task.date + " priority: " + task.priority;

        if (task.date === today && !task.completed) {
            todayTasksList.appendChild(listItem);
        } else if (task.date > today || (task.date < today && !task.completed)) {
            listItem.style.border = "2px solid red";
            futureTasksList.appendChild(listItem);
        } else if (task.completed) {
            completedTasksList.appendChild(listItem);
        }

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            deleteTask(index);
        };
        listItem.appendChild(deleteButton);

        var completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = function() {
            toggleComplete(index);
        };
        listItem.appendChild(completeButton);
    });
}

function deleteTask(index) {
    var todoList = JSON.parse(localStorage.getItem("todoList")) || [];
    todoList.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    loadTasks();
}

function toggleComplete(index) {
    var todoList = JSON.parse(localStorage.getItem("todoList")) || [];
    todoList[index].completed = !todoList[index].completed;
    localStorage.setItem("todoList", JSON.stringify(todoList));
    loadTasks();
}