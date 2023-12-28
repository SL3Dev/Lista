// app.js

// Função para adicionar uma nova tarefa
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;

    if (taskText.trim() !== "") {
        var taskList = document.getElementById("taskList");
        var newTask = document.createElement("li");
        newTask.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button" onclick="removeTask(this)">Remover</button>
        `;
        taskList.appendChild(newTask);

        taskInput.value = "";
    }
}

// Função para remover uma tarefa
function removeTask(button) {
    var listItem = button.parentElement;
    listItem.remove();
}
